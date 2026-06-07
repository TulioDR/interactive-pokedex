import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import ScanAnimation from "./ScanAnimation";
import usePreview from "@/app/_hooks/usePreview";
import PreviewMessage from "./PreviewMessage";
import PreviewContent from "./PreviewContent";
import PokedexContainer from "./PokedexContainer";
import PokedexTop from "./PokedexTop";
import PokedexControlDeck from "./PokedexControlDeck";
import PokedexInnerScreen from "./PokedexInnerScreen";
import ActivePadType from "@/app/_types/ActivePadType";

type Props = {
   draggedId: number | null;
   syncedData: any[];
};

export default function Pokedex({ draggedId, syncedData }: Props) {
   const { pokemon, loading, error, changeSelectedId, selectedId } =
      usePreview();

   useEffect(() => {
      console.log(loading);
   }, [loading]);

   const handleAnimationComplete = (e: any) => {
      if (e.scaleX === 1) changeSelectedId(draggedId);
   };

   const [activePad, setActivePad] = useState<ActivePadType>(null);
   const changeActivePad = (pad: ActivePadType) => setActivePad(pad);

   const currentIndex = syncedData.findIndex(
      (p: any) => p.id === pokemon?.base.id,
   );
   const prevPokemon = currentIndex > 0 ? syncedData[currentIndex - 1] : null;
   const nextPokemon =
      currentIndex < syncedData.length - 1
         ? syncedData[currentIndex + 1]
         : null;

   const getNextPokemon = () => changeSelectedId(nextPokemon?.id || null);
   const getPrevPokemon = () => changeSelectedId(prevPokemon?.id || null);

   const [isPowerOn, setIsPowerOn] = useState(true);

   return (
      <PokedexContainer>
         <PokedexTop />
         <PokedexInnerScreen>
            <AnimatePresence>
               {draggedId && draggedId !== selectedId && (
                  <ScanAnimation
                     onAnimationComplete={handleAnimationComplete}
                  />
               )}
            </AnimatePresence>
            {!pokemon && <PreviewMessage error={error} />}
            {pokemon && (
               <PreviewContent
                  key={pokemon.base.id}
                  pokemon={pokemon}
                  syncedData={syncedData}
                  changeSelectedId={changeSelectedId}
                  activePad={activePad}
                  changeActivePad={changeActivePad}
                  prevPokemon={prevPokemon}
                  nextPokemon={nextPokemon}
                  getNextPokemon={getNextPokemon}
                  getPrevPokemon={getPrevPokemon}
               />
            )}
         </PokedexInnerScreen>
         <PokedexControlDeck
            pokemon={pokemon}
            activePad={activePad}
            changeActivePad={changeActivePad}
            getNextPokemon={getNextPokemon}
            getPrevPokemon={getPrevPokemon}
         />
      </PokedexContainer>
   );
}
