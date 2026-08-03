import { useEffect, useState } from "react";
import usePokeDbContext from "@/layout/poke-db/context/PokeDbContext";
import { CompletePokemonType } from "../types/CompletePokemonType";

export default function usePokemonFetch(scannedId: null | string) {
  const identifier = scannedId;
  const { allPokemon, isSyncing } = usePokeDbContext();
  const [pokemon, setPokemon] = useState<CompletePokemonType | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    setPokemon(null);
    setError(false);

    if (scannedId === null || scannedId === undefined) return;
    if (isSyncing || allPokemon.length === 0) return;

    const targetId = allPokemon.find(
      (p) => p.name.toLowerCase() === scannedId.toLowerCase(),
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

        console.log(base);
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
