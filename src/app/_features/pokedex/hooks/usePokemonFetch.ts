import { useEffect, useState } from "react";
import { CompletePokemonType } from "../types/CompletePokemonType";
import usePokeDbContext from "@/layout/poke-db/context/PokeDbContext";

export default function usePokemonFetch(
   isPowerOn: boolean,
   selectedId: number | null | string,
) {
   const identifier = selectedId;
   const { allPokemon, isSyncing } = usePokeDbContext();
   const [pokemon, setPokemon] = useState<CompletePokemonType | null>(null);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(false);

   useEffect(() => {
      if (!isPowerOn || identifier === null || identifier === undefined) {
         setPokemon(null);
         setError(false);
         return;
      }

      // 2. If the local database hasn't loaded or synced its chunks yet, wait
      if (isSyncing || allPokemon.length === 0) return;
      let targetId: number | null = null;

      // 3. Resolve the target numeric ID depending on what was passed to the hook
      if (typeof identifier === "number") {
         targetId = identifier;
      } else if (typeof identifier === "string") {
         const localMatch = allPokemon.find(
            (p) => p.name.toLowerCase() === identifier.toLowerCase(),
         );

         if (localMatch) {
            targetId = localMatch.id;
         } else {
            // Name doesn't exist in our sync array -> trigger 404 style state
            setError(true);
            return;
         }
      }

      if (!targetId) return;

      async function fetchAllPokemonDetails() {
         try {
            setLoading(true);
            setError(false);

            // Fetch detail registries in parallel for maximum performance
            const [baseRes, speciesRes] = await Promise.all([
               fetch(`https://pokeapi.co/api/v2/pokemon/${targetId}`),
               fetch(`https://pokeapi.co/api/v2/pokemon-species/${targetId}`),
            ]);

            if (!baseRes.ok || !speciesRes.ok) {
               throw new Error("Failed to capture core registry profiles.");
            }

            const base = await baseRes.json();
            const species = await speciesRes.json();

            const evolutionChainUrl = species.evolution_chain?.url;
            let evolution = null;

            if (evolutionChainUrl) {
               const evolutionRes = await fetch(evolutionChainUrl);
               if (evolutionRes.ok) {
                  evolution = await evolutionRes.json();
               }
            }

            // Commit final detail structural block to UI
            setPokemon({ base, species, evolution });
         } catch (err) {
            console.error(`Error resolving profile for ID ${targetId}:`, err);
            setError(true);
         } finally {
            setLoading(false);
         }
      }

      fetchAllPokemonDetails();
   }, [identifier, isSyncing, isPowerOn]);

   return { pokemon, loading, error };
}
