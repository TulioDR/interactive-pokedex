"use client";

import usePokemonFetch from "@/app/_features/pokedex/hooks/usePokemonFetch";
import { useParams } from "next/navigation";
import PokemonPageContent from "./_components/PokemonPageContent";
type Props = {};

export default function PokemonPage({}: Props) {
   const { pokemon: pokemonName } = useParams<{ pokemon: string }>();

   const { pokemon, loading, error } = usePokemonFetch(true, pokemonName);

   return (
      <>
         <span>Class name page special</span>
         <PokemonPageContent pokemon={pokemon} />;
      </>
   );
}
