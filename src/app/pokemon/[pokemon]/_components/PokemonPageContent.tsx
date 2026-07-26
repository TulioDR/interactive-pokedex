"use client";

import { useParams } from "next/navigation";
import { useEffect } from "react";
import PokemonEvolutions from "./PokemonEvolutions";
import usePokemonFetch from "@/layout/pokedex/hooks/usePokemonFetch";
import BiologicalProfile from "./BiologicalProfile";
import PokedexLog from "./PokedexLog";
import PokemonTypes from "./PokemonTypes";
import PokemonAbilities from "./PokemonAbilities";
import PokemonStats from "./PokemonStats";
import TopSection from "./TopSection";

type Props = {};

export default function PokemonPageContent({}: Props) {
   const { pokemon: pokemonName } = useParams<{ pokemon: string }>();

   const { pokemon, error } = usePokemonFetch(pokemonName);

   useEffect(() => {
      console.log(pokemon);
   }, [pokemon]);

   if (!pokemon) return <></>;
   return (
      <div className="w-full gap-5 pb-5 flex flex-col">
         {/* <PokemonInfoOne pokemon={pokemon} /> */}
         {/* <MainPokemonImage pokemon={pokemon} /> */}
         <TopSection pokemon={pokemon} />
         <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            <BiologicalProfile pokemon={pokemon} />
            <PokemonTypes pokemon={pokemon} />
            <PokemonAbilities pokemon={pokemon} />

            <PokedexLog pokemon={pokemon} />
            <PokemonStats pokemon={pokemon} />
         </div>
         <PokemonEvolutions pokemon={pokemon} />
      </div>
   );
}
