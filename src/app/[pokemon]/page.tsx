"use client";

import PokemonPageContent from "@/app/[pokemon]/_components/PokemonPageContent";
import usePokemonFetch from "@/app/_features/pokedex/hooks/usePokemonFetch";
import { useParams } from "next/navigation";
type Props = {};

export default function PokemonPage({}: Props) {
   const { pokemon: pokemonName } = useParams<{ pokemon: string }>();

   const { pokemon, loading, error } = usePokemonFetch(true, pokemonName);

   return <PokemonPageContent pokemon={pokemon} />;
}
