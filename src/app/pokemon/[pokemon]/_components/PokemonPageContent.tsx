"use client";

import PokemonEvolutions from "./PokemonEvolutions";
import BiologicalProfile from "./BiologicalProfile";
import PokedexLog from "./PokedexLog";
import PokemonTypes from "./PokemonTypes";
import PokemonAbilities from "./PokemonAbilities";
import PokemonStats from "./PokemonStats";
import TopSection from "./TopSection";
import usePokemonFetch from "../hooks/usePokemonFetch";
import PokemonImage from "./PokemonImage";
import PokemonSkeleton from "./PokemonSkeleton";
import PokemonErrorMessage from "./PokemonErrorMessage";

interface Props {
  pokemonName: string;
}

export default function PokemonPageContent({ pokemonName }: Props) {
  const { pokemon, error } = usePokemonFetch(pokemonName);

  const isLoading = !pokemon && !error;

  if (isLoading) return <PokemonSkeleton />;
  if (error) return <PokemonErrorMessage error={error} />;
  if (!pokemon) return <></>;
  return (
    <div className="w-full gap-5 pb-5 flex flex-col">
      <div className="grid lg:grid-cols-2 gap-5">
        <PokemonImage pokemon={pokemon} />
        <TopSection pokemon={pokemon} />
      </div>
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
