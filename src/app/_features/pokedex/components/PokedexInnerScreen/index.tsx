import { AnimatePresence } from "framer-motion";
import usePokedexContext from "../../context/PokedexContext";
import CRTAnimation from "./CRTAnimation";

type Props = {
   children: React.ReactNode;
};

export default function PokedexInnerScreen({ children }: Props) {
   const { isPowerOn } = usePokedexContext();

   return (
      <div className="scan-target-zone w-full flex-1 rounded-2xl bg-gray-900 border-10 border-black relative overflow-hidden">
         <AnimatePresence>
            {isPowerOn && (
               <CRTAnimation>
                  <div className="relative w-full h-full flex flex-col z-10 overflow-hidden text-white from-[#0E5542] bg-radial to-[#0F3A22] ">
                     <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                           background:
                              "linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))",
                           backgroundSize: "100% 4px, 6px 100%",
                        }}
                     />
                     {children}
                  </div>
               </CRTAnimation>
            )}
         </AnimatePresence>
      </div>
   );
}
