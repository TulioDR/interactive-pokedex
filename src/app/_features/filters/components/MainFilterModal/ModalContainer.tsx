import CircularLens from "@/components/CircularLens";
import useThemeContext from "@/context/ThemeContext";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type Props = {
   children: React.ReactNode;
   isFilterOpen: boolean;
};

export default function ModalContainer({ children, isFilterOpen }: Props) {
   const { themeColor } = useThemeContext();

   const [isMounted, setIsMounted] = useState(false);
   useEffect(() => setIsMounted(true), []);

   if (!isMounted) return <></>;
   return createPortal(
      <AnimatePresence>
         {isFilterOpen && (
            <motion.div
               initial={{ opacity: 0, x: "100%" }}
               animate={{ opacity: 1, x: "0%" }}
               exit={{ opacity: 0, x: "100%" }}
               transition={{ duration: 0.4, ease: "easeInOut" }}
               className="px-20 pb-5 pt-30 fixed inset-0 z-30"
            >
               <div
                  style={{ backgroundColor: themeColor }}
                  className="w-full h-full rounded-4xl p-5 pl-0 flex shadow-xl border-2 border-white outline outline-outline overflow-hidden"
               >
                  <div className="flex flex-col items-center w-19 h-full gap-4 justify-between bg-white overflow-hidden">
                     <div className="w-12 aspect-square rounded-full bg-slate-200 border-2 border-white text-black flex items-center justify-center">
                        <span className="material-symbols-rounded">close</span>
                     </div>

                     <div className="flex flex-col gap-2 items-center">
                        <div className="outline-2 outline-outline aspect-square rounded-full flex items-center justify-center">
                           <CircularLens status={false} />
                        </div>
                        <h2
                           // style={{
                           //    writingMode: "vertical-lr",
                           //    // textOrientation: "sideways",
                           // }}
                           style={{ writingMode: "vertical-lr" }}
                           className="text-4xl font-black text-hover"
                        >
                           Pokemon Filters
                        </h2>
                     </div>
                  </div>
                  <div className="w-full h-full p-4 bg-slate-200 border-2 border-white rounded-r-lg ">
                     <div className="w-full h-full bg-slate-100 rounded-2xl border-4 border-black flex overflow-hidden p-5 gap-5">
                        {children}
                     </div>
                  </div>
               </div>
            </motion.div>
         )}
      </AnimatePresence>,
      document.body,
   );
}
