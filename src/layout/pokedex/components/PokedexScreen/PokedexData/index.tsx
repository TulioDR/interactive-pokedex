import DataHeader from "./DataHeader";
import DataButtons from "./DataButtons";
import usePokeDbContext from "@/layout/poke-db/context/PokeDbContext";
import DataImage from "./DataImage";
import DataTypes from "./DataTypes";
import { PadType } from "@/layout/pokedex/types/PadType";

type Props = {
  pokemon: any;
  activePad: PadType;
  changePokemon: (pokemonName: string) => void;
};

export default function PokedexData({
  pokemon,
  activePad,
  changePokemon,
}: Props) {
  const { allPokemon } = usePokeDbContext();

  const foundPokemon = allPokemon.find((item) => item.id === pokemon.id);
  const originalName = foundPokemon?.original_name ?? pokemon.name;

  return (
    <div className="absolute inset-0 flex flex-col overflow-hidden">
      <div className="w-full flex-1 px-4 py-2 flex flex-col">
        <DataHeader pokemon={pokemon} />
        <div className="flex-1 overflow-hidden w-full flex flex-col gap-2 items-center justify-center">
          <div className="flex 2xl:flex-col w-full items-center">
            <DataImage pokemon={pokemon} />
            <DataTypes pokemon={pokemon} />
          </div>
          <div className="text-white text-center xl:text-lg 2xl:text-3xl">
            {originalName}
          </div>
        </div>
      </div>
      <DataButtons
        pokemon={pokemon}
        activePad={activePad}
        changePokemon={changePokemon}
      />
    </div>
  );
}
