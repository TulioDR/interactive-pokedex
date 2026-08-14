import { useEffect, useState } from "react";
import usePokeDbContext from "@/layout/poke-db/context/PokeDbContext";
import { CompletePokemonType } from "../types/CompletePokemonType";
import { ErrorType } from "../types/ErrorType";

export default function usePokemonFetch(scannedId: null | string) {
  const { allPokemon, isSyncing } = usePokeDbContext();
  const [pokemon, setPokemon] = useState<CompletePokemonType | null>(null);
  const [error, setError] = useState<ErrorType>(null);

  const targetId =
    scannedId && allPokemon.length > 0
      ? allPokemon.find((p) => p.name.toLowerCase() === scannedId.toLowerCase())
          ?.id
      : null;

  const isNotFound = Boolean(
    scannedId && !isSyncing && allPokemon.length > 0 && !targetId,
  );

  if (isNotFound) {
    setError("not-found");
  }

  useEffect(() => {
    if (!targetId) return;

    const controller = new AbortController();
    const { signal } = controller;

    async function fetchAllPokemonDetails() {
      try {
        const [baseRes, speciesRes] = await Promise.all([
          fetch(`https://pokeapi.co/api/v2/pokemon/${targetId}`, { signal }),
          fetch(`https://pokeapi.co/api/v2/pokemon-species/${targetId}`, {
            signal,
          }),
        ]);

        if (!baseRes.ok || !speciesRes.ok) throw new Error("Fetch error");

        const base = await baseRes.json();
        const species = await speciesRes.json();
        let evolution = null;

        if (species.evolution_chain?.url) {
          const evolutionRes = await fetch(species.evolution_chain.url, {
            signal,
          });
          if (evolutionRes.ok) evolution = await evolutionRes.json();
        }

        setPokemon({ base, species, evolution });
      } catch (err: any) {
        if (err.name === "AbortError") return;
        setError("unknown-error");
      }
    }

    fetchAllPokemonDetails();

    return () => {
      controller.abort();
    };
  }, [targetId]);

  return { pokemon, error, setPokemon };
}
