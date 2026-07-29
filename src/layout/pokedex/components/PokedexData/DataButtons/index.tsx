import { useRouter } from "next/navigation";
import usePokedexContext from "../../../context/PokedexContext";
import NavigationButton from "./NavigationButton";
import PreviewButton from "./PreviewButton";

type Props = {};

export default function DataButtons({}: Props) {
  const {
    activePad,
    nextPokemon,
    prevPokemon,
    getNextPokemon,
    getPrevPokemon,
    pokemon,
  } = usePokedexContext();

  const router = useRouter();
  const goToPokemon = () => {
    router.push(`/pokemon/${pokemon?.name}`);
  };

  return (
    <>
      <div className="w-full flex gap-2 p-2 border-t border-white/20">
        <PreviewButton
          icon="favorite"
          text="Add to favorite"
          favorite
          isActive={activePad === "favorite"}
          onClick={() => {}}
        />
        <PreviewButton
          icon="arrow_outward"
          text="Full page"
          isActive={activePad === "open"}
          onClick={goToPokemon}
        />
      </div>
      <div className="h-9 2xl:h-11 bg-white flex justify-between border-t border-white">
        <NavigationButton
          reverse
          pokemon={prevPokemon}
          isActive={activePad === "prev"}
          onClick={getPrevPokemon}
        />
        <NavigationButton
          pokemon={nextPokemon}
          isActive={activePad === "next"}
          onClick={getNextPokemon}
        />
      </div>
    </>
  );
}
