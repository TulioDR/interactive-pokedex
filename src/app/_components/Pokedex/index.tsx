import { AnimatePresence } from "framer-motion";
import ScanAnimation from "./ScanAnimation";
import PreviewMessage from "./PreviewMessage";
import PokedexData from "./PokedexData";
import PokedexContainer from "./PokedexContainer";
import PokedexTop from "./PokedexTop";
import PokedexControlDeck from "./PokedexControlDeck";
import PokedexInnerScreen from "./PokedexInnerScreen";
import LoadingSpinner from "./LoadingSpinner";
import usePokedexContext from "@/app/_context/PokedexContext";
import CRTAnimation from "./CRTAnimation";

type Props = {
   draggedId: number | null;
};

export default function Pokedex({ draggedId }: Props) {
   const { selectedId, pokemon, loading, error, isPowerOn } =
      usePokedexContext();

   const showScan = draggedId && draggedId !== selectedId;
   return (
      <PokedexContainer>
         <PokedexTop />
         <PokedexInnerScreen>
            <AnimatePresence>
               {isPowerOn && (
                  <CRTAnimation>
                     <AnimatePresence>
                        {loading && <LoadingSpinner key="loading" />}
                        {showScan && (
                           <ScanAnimation key="scan" draggedId={draggedId} />
                        )}
                        {!pokemon && (
                           <PreviewMessage key="message" error={error} />
                        )}
                        {selectedId && (
                           <PokedexData
                              key={selectedId}
                              selectedId={selectedId}
                           />
                        )}
                     </AnimatePresence>
                  </CRTAnimation>
               )}
            </AnimatePresence>
         </PokedexInnerScreen>
         <PokedexControlDeck />
      </PokedexContainer>
   );
}
