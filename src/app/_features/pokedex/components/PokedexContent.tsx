import { AnimatePresence } from "framer-motion";
import ScanAnimation from "./ScanAnimation";
import PreviewMessage from "./PreviewMessage";
import PokedexData from "./PokedexData";
import PokedexContainer from "./PokedexContainer";
import PokedexTop from "./PokedexTop";
import PokedexControlDeck from "./PokedexControlDeck";
import PokedexInnerScreen from "./PokedexInnerScreen";
import LoadingSpinner from "./LoadingSpinner";
import CRTAnimation from "./CRTAnimation";
import { useEffect } from "react";
import usePokedexContext from "../context/PokedexContext";

type Props = {
   draggedId: number | null;
};

export default function PokedexContent({ draggedId }: Props) {
   const { selectedId, pokemon, loading, error, isPowerOn } =
      usePokedexContext();

   const showScan = draggedId && draggedId !== selectedId;

   useEffect(() => {
      console.log(isPowerOn);
   }, [isPowerOn]);

   useEffect(() => {
      console.log(draggedId);
   }, [draggedId]);
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
