import CircularLens from "@/components/CircularLens";
import useThemeContext from "@/context/ThemeContext";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import CloseButton from "./CloseButton";
import FilterTitle from "./FilterTitle";
import FilterInnerScreen from "./FilterInnerScreen";

type Props = {
   children: React.ReactNode;
   isFilterOpen: boolean;
   closeFilter: () => void;
};

export default function FiltersContainer({
   children,
   isFilterOpen,
   closeFilter,
}: Props) {
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
                  <div className="flex flex-col items-center w-19 h-full gap-4 justify-between ">
                     <CloseButton onClick={closeFilter} />

                     <div className="flex flex-col gap-2 items-center">
                        <FilterTitle />
                        <CircularLens status={false} />
                     </div>
                  </div>
                  <FilterInnerScreen>{children}</FilterInnerScreen>
               </div>
            </motion.div>
         )}
      </AnimatePresence>,
      document.body,
   );
}
