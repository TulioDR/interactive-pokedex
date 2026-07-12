import { useEffect, useState } from "react";
import { CompletePokemonType } from "../types/CompletePokemonType";
import usePokeDbContext from "@/layout/poke-db/context/PokeDbContext";

export default function usePokemonFetch(selectedId: number | null | string) {
   const identifier = selectedId;
   const { allPokemon, isSyncing } = usePokeDbContext();
   const [pokemon, setPokemon] = useState<CompletePokemonType | null>(null);
   const [error, setError] = useState(false);

   useEffect(() => {
      setPokemon(null);
      setError(false);

      if (selectedId === null || selectedId === undefined) return;
      if (isSyncing || allPokemon.length === 0) return;

      const targetId =
         typeof selectedId === "number"
            ? selectedId
            : allPokemon.find(
                 (p) => p.name.toLowerCase() === selectedId.toLowerCase(),
              )?.id;

      if (!targetId) {
         setError(true);
         return;
      }

      async function fetchAllPokemonDetails() {
         try {
            const [baseRes, speciesRes] = await Promise.all([
               fetch(`https://pokeapi.co/api/v2/pokemon/${targetId}`),
               fetch(`https://pokeapi.co/api/v2/pokemon-species/${targetId}`),
            ]);

            if (!baseRes.ok || !speciesRes.ok)
               throw new Error("Registry fetch error");

            const base = await baseRes.json();
            const species = await speciesRes.json();
            let evolution = null;

            if (species.evolution_chain?.url) {
               const evolutionRes = await fetch(species.evolution_chain.url);
               if (evolutionRes.ok) evolution = await evolutionRes.json();
            }

            setPokemon({ base, species, evolution });
         } catch (err) {
            console.error(`Error resolving profile for ID ${targetId}:`, err);
            setError(true);
         }
      }

      fetchAllPokemonDetails();
   }, [identifier, isSyncing, allPokemon]);

   return { pokemon, error, setPokemon };
}
