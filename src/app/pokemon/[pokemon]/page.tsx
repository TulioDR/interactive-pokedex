"use client";

import { useParams } from "next/navigation";
import PokemonPageContent from "./_components/PokemonPageContent";

export default function PokemonPage() {
  const { pokemon: pokemonName } = useParams<{ pokemon: string }>();
  return <PokemonPageContent key={pokemonName} pokemonName={pokemonName} />;
}
