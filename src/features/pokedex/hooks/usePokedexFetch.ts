import { useEffect, useState } from "react";
import usePokeDbContext from "@/features/poke-db/context/PokeDbContext";

export default function usePokedexFetch(rawIdentifier: string | undefined) {
  const { allPokemon, isSyncing } = usePokeDbContext();

  const [pokemon, setPokemon] = useState<any>(null);
  const [error, setError] = useState(false);

  const isLoading = !!rawIdentifier && !pokemon;

  useEffect(() => {
    if (isSyncing || allPokemon.length === 0) return;
    if (!rawIdentifier) return;

    const cleanIdentifier = decodeURIComponent(rawIdentifier).toLowerCase();
    const targetPokemon = allPokemon.find(
      (p) => p.name.toLowerCase() === cleanIdentifier,
    );

    async function fetchPokedexInfo() {
      try {
        if (!targetPokemon) {
          setError(true);
          return;
        }
        const url = `https://pokeapi.co/api/v2/pokemon/${targetPokemon.id}`;
        const res = await fetch(url);
        if (!res.ok) throw new Error("Registry fetch error");
        const data = await res.json();
        setPokemon(data);
      } catch (err) {
        console.error(`Error resolving profile for scanned pokemon`, err);
        setError(true);
      }
    }
    fetchPokedexInfo();
  }, [rawIdentifier, isSyncing, allPokemon]);

  return { pokemon, error, isLoading };
}
