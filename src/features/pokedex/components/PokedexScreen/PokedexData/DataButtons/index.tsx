import { useRouter } from "next/navigation";
import NavigationButton from "./NavigationButton";
import PreviewButton from "./PreviewButton";
import usePokeDbContext from "@/features/poke-db/context/PokeDbContext";
import { PadType } from "@/features/pokedex/types/PadType";
import {
  FAVORITE_BUTTON_ID,
  FULL_PAGE_BUTTON_ID,
  NEXT_BUTTON_ID,
  PREV_BUTTON_ID,
} from "@/features/pokedex/constants/BUTTONS_IDS";

type Props = {
  activePad: PadType;
  pokemon: any;
  changePokemon: (pokemonName: string) => void;
};

export default function DataButtons({
  pokemon,
  activePad,
  changePokemon,
}: Props) {
  const router = useRouter();

  const { allPokemon, isFavorite, toggleFavorite } = usePokeDbContext();
  const currentIndex = allPokemon.findIndex((p: any) => p.id === pokemon.id);

  const prevPokemon = currentIndex > 0 ? allPokemon[currentIndex - 1] : null;
  const nextPokemon =
    currentIndex < allPokemon.length - 1 ? allPokemon[currentIndex + 1] : null;

  const goToPokemon = () => {
    router.push(`/pokemon/${pokemon.name}?scanned=${pokemon.name}`);
  };

  const getNextPokemon = () => {
    if (!nextPokemon) return;
    changePokemon(nextPokemon.name);
  };
  const getPrevPokemon = () => {
    if (!prevPokemon) return;
    changePokemon(prevPokemon.name);
  };

  const isFavoriteValue = isFavorite(pokemon.id);

  return (
    <>
      <div className="w-full flex gap-2 p-2 border-t border-white/20">
        <PreviewButton
          id={FAVORITE_BUTTON_ID}
          icon="favorite"
          isFilled={isFavoriteValue}
          text={isFavoriteValue ? `Remove from favorite` : `Add to favorite`}
          favorite
          isActive={activePad === "favorite"}
          onClick={() => toggleFavorite(pokemon.id)}
        />
        <PreviewButton
          id={FULL_PAGE_BUTTON_ID}
          icon="arrow_outward"
          text="Full page"
          isActive={activePad === "open"}
          onClick={goToPokemon}
        />
      </div>
      <div className="h-9 2xl:h-11 bg-white flex justify-between border-t border-white">
        <NavigationButton
          id={PREV_BUTTON_ID}
          reverse
          pokemon={prevPokemon}
          isActive={activePad === "prev"}
          onClick={getPrevPokemon}
        />
        <NavigationButton
          id={NEXT_BUTTON_ID}
          pokemon={nextPokemon}
          isActive={activePad === "next"}
          onClick={getNextPokemon}
        />
      </div>
    </>
  );
}
