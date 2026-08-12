import { useEffect, useState } from "react";
import usePokeDbContext from "@/layout/poke-db/context/PokeDbContext";

export default function usePokedexFetch(pokemonName: string) {
  const { allPokemon, isSyncing } = usePokeDbContext();

  const rawIdentifier = pokemonName;

  const [pokemon, setPokemon] = useState<any>(null);
  const [error, setError] = useState(false);

  const isLoading = !!rawIdentifier && !pokemon;

  const cleanIdentifier = decodeURIComponent(rawIdentifier).toLowerCase();
  const targetPokemon = allPokemon.find(
    (p) => p.name.toLowerCase() === cleanIdentifier,
  );

  useEffect(() => {
    if (!targetPokemon) return;
    if (!rawIdentifier) return;
    if (isSyncing || allPokemon.length === 0) return;

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
  }, [rawIdentifier, isSyncing, allPokemon, targetPokemon]);

  return { pokemon, error, isLoading };
}
