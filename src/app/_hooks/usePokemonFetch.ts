import { useEffect, useState } from "react";
import CompletePokemonType from "../_types/CompletePokemonType";

export default function usePokemonFetch() {
   const [selectedId, setSelectedId] = useState<number | null>(null);
   const [pokemon, setPokemon] = useState<CompletePokemonType | null>(null);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(false);

   useEffect(() => {
      setPokemon(null);
      if (!selectedId) return;
      async function fetchAllPokemonDetails() {
         try {
            setLoading(true);
            setError(false);

            // 1. STEP ONE: Fetch base and species registries in parallel for speed
            const [baseRes, speciesRes] = await Promise.all([
               fetch(`https://pokeapi.co/api/v2/pokemon/${selectedId}`),
               fetch(`https://pokeapi.co/api/v2/pokemon-species/${selectedId}`),
            ]);

            if (!baseRes.ok || !speciesRes.ok) {
               throw new Error("Failed to capture core registry profiles.");
            }

            const base = await baseRes.json();
            const species = await speciesRes.json();

            // 2. STEP TWO: Extract the custom evolution node link map
            const evolutionChainUrl = species.evolution_chain?.url;
            let evolution = null;

            if (evolutionChainUrl) {
               // 3. STEP THREE: Resolve the full structural branching evolution tree
               const evolutionRes = await fetch(evolutionChainUrl);
               if (evolutionRes.ok) {
                  evolution = await evolutionRes.json();
               }
            }

            // 4. STEP FOUR: Commit fully mapped payload to app state
            setPokemon({ base, species, evolution });
         } catch (err) {
            console.error(
               `Error resolving Pokedex profile for ID ${selectedId}:`,
               err,
            );
            setError(true);
         } finally {
            setLoading(false);
         }
      }

      fetchAllPokemonDetails();
   }, [selectedId]);

   return { selectedId, setSelectedId, pokemon, loading, error };
}
