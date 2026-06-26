"use client";

import usePokemonFetch from "@/app/_features/pokedex/hooks/usePokemonFetch";
import { useParams } from "next/navigation";
import { useEffect } from "react";

type Props = {};

export default function PokemonPageContent({}: Props) {
   const { pokemon: pokemonName } = useParams<{ pokemon: string }>();

   const { pokemon, error } = usePokemonFetch(pokemonName);

   useEffect(() => {
      console.log("modal");
      console.log(pokemonName);
   }, [pokemonName]);
   return (
      <div className="fixed top-0 left-0 h-svh w-full flex items-center justify-center bg-black/50">
         <span className="text-4xl font-black text-white">
            {pokemon?.base.name}
         </span>
      </div>
   );
}
