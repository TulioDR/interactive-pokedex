import { useEffect, useState } from "react";
import CompletePokemonType from "../_types/CompletePokemonType";

export default function usePreview() {
   const [selectedId, setSelectedId] = useState<number | null>(null);
   const [pokemon, setPokemon] = useState<CompletePokemonType | null>(null);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(false);

   const changeSelectedId = (id: number | null) => setSelectedId(id);

   useEffect(() => {
      if (!selectedId) return;

      async function fetchAllPokemonDetails() {
         try {
            setLoading(true);
            setError(false);

            // 1. STEP ONE: Fetch the first two pools in parallel
            const [baseRes, speciesRes] = await Promise.all([
               fetch(`https://pokeapi.co/api/v2/pokemon/${selectedId}`),
               fetch(`https://pokeapi.co/api/v2/pokemon-species/${selectedId}`),
            ]);

            if (!baseRes.ok || !speciesRes.ok) {
               throw new Error("Failed to capture core registry profiles.");
            }

            const baseData = await baseRes.json();
            const speciesData = await speciesRes.json();

            // 2. STEP TWO: Grab the raw URL pointing to Folder 3 from the species file
            const evolutionChainUrl = speciesData.evolution_chain?.url;

            let evolutionData = null;
            if (evolutionChainUrl) {
               // 3. STEP THREE: Execute the third fetch to grab the raw tree structure
               const evolutionRes = await fetch(evolutionChainUrl);
               if (evolutionRes.ok) {
                  evolutionData = await evolutionRes.json();
               }
            }

            // 4. STEP FOUR: Save EVERYTHING raw and untamed directly to state
            setPokemon({
               base: baseData,
               species: speciesData,
               evolution: evolutionData, // Complete, raw API tree payload
            });
         } catch (err) {
            console.error("Scanning decryption malfunction:", err);
            setError(true);
         } finally {
            setLoading(false);
         }
      }

      fetchAllPokemonDetails();
   }, [selectedId]);

   return { pokemon, loading, error, changeSelectedId, selectedId };
}
