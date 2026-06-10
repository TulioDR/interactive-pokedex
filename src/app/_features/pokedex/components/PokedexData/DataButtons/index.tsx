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
   } = usePokedexContext();

   return (
      <>
         <div className="h-11 rounded-full w-full flex gap-2">
            <PreviewButton
               icon="favorite"
               text="Add to favorite"
               favorite
               isActive={activePad === "favorite"}
            />
            <PreviewButton
               icon="arrow_outward"
               text="Full page"
               isActive={activePad === "open"}
            />
         </div>
         <div className="h-11 rounded-full bg-white flex p-0.5 gap-0.5">
            <NavigationButton
               reverse
               pokemon={prevPokemon}
               isActive={activePad === "prev"}
               onClick={getPrevPokemon}
            />
            <div className="h-full w-px bg-black/50"></div>
            <NavigationButton
               pokemon={nextPokemon}
               isActive={activePad === "next"}
               onClick={getNextPokemon}
            />
         </div>
      </>
   );
}
