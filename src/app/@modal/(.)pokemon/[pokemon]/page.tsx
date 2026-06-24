"use client";

import usePokemonFetch from "@/app/_features/pokedex/hooks/usePokemonFetch";
import PokemonPageContent from "@/app/pokemon/[pokemon]/_components/PokemonPageContent";
import { useParams } from "next/navigation";
import { useEffect } from "react";

type Props = {};

export default function PokemonPage({}: Props) {
   const { pokemon: pokemonName } = useParams<{ pokemon: string }>();

   const { pokemon, loading, error } = usePokemonFetch(true, pokemonName);

   useEffect(() => {
      console.log("modal");
      console.log(pokemonName);
   }, [pokemonName]);

   return <PokemonPageContent pokemon={pokemon} />;
}
