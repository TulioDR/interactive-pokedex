"use client";

import PokemonEvolutions from "./PokemonEvolutions";
import BiologicalProfile from "./BiologicalProfile";
import PokedexLog from "./PokedexLog";
import PokemonTypes from "./PokemonTypes";
import PokemonAbilities from "./PokemonAbilities";
import PokemonStats from "./PokemonStats";
import TopSection from "./TopSection";
import usePokemonFetch from "../hooks/usePokemonFetch";

interface Props {
  pokemonName: string;
}

export default function PokemonPageContent({ pokemonName }: Props) {
  const { pokemon, error } = usePokemonFetch(pokemonName);

  console.log(pokemon);

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
