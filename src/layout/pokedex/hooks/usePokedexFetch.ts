import { useEffect, useState } from "react";
import usePokeDbContext from "@/layout/poke-db/context/PokeDbContext";
import { useParams, useSearchParams } from "next/navigation";

export default function usePokedexFetch() {
   const params = useParams();
   const searchParams = useSearchParams();
   const { allPokemon, isSyncing } = usePokeDbContext();

   const routeParam = params?.pokemon as string | undefined;
   const queryParam = searchParams.get("scanned");
   const rawIdentifier = routeParam || queryParam;

   const [pokemon, setPokemon] = useState<any | null>(null);
   const [error, setError] = useState(false);

   useEffect(() => {
      setPokemon(null);
      setError(false);

      if (!rawIdentifier) return;
      if (isSyncing || allPokemon.length === 0) return;

      const cleanIdentifier = decodeURIComponent(rawIdentifier).toLowerCase();
      const targetPokemon = allPokemon.find(
         (p) => p.name.toLowerCase() === cleanIdentifier,
      );

      if (!targetPokemon) {
         setError(true);
         return;
      }
      const targetId = targetPokemon.id;
      async function fetchPokedexInfo() {
         try {
            const url = `https://pokeapi.co/api/v2/pokemon/${targetId}`;
            const res = await fetch(url);
            if (!res.ok) throw new Error("Registry fetch error");
            const data = await res.json();
            setPokemon(data);
         } catch (err) {
            console.error(`Error resolving profile for ID ${targetId}:`, err);
            setError(true);
         }
      }
      fetchPokedexInfo();
   }, [rawIdentifier, isSyncing, allPokemon]);

   return { pokemon, error, setPokemon };
}
