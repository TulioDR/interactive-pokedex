import CircularLens from "@/components/CircularLens";
import useThemeContext from "@/context/ThemeContext";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import PowerButton from "./PowerButton";
import FilterTitle from "./FilterTitle";
import FilterInnerScreen from "./FilterInnerScreen";
import useFiltersContext from "../../../context/FiltersContext";

type Props = {
   children: React.ReactNode;
};

export default function FiltersContainer({ children }: Props) {
   const { themeColor } = useThemeContext();

   const [isMounted, setIsMounted] = useState(false);
   useEffect(() => setIsMounted(true), []);

   const { isModalOpen } = useFiltersContext();

   if (!isMounted) return <></>;
   return createPortal(
      <motion.div
         initial={{ x: "100%" }}
         animate={{ x: isModalOpen ? "0%" : "100%" }}
         transition={{ duration: 0.4, ease: "easeInOut" }}
         className="px-20 pb-5 pt-30 fixed inset-0 z-30"
      >
         <motion.div
            style={{ backgroundColor: themeColor }}
            initial={false}
            animate={{
               x: isModalOpen ? "0px" : "-120px",
               transition: { duration: 0.4, ease: "easeInOut" },
            }}
            whileHover={{
               x: isModalOpen ? "0px" : "-152px",
               transition: { duration: 0.2, ease: "easeInOut" },
            }}
            className="w-full h-full rounded-4xl p-5 pl-0 flex shadow-xl border-2 border-white outline outline-outline overflow-hidden"
         >
            <div className="flex flex-col items-center w-19 h-full gap-4 justify-between ">
               <PowerButton />

               <div className="flex flex-col gap-2 items-center">
                  <FilterTitle />
                  <CircularLens status={false} />
               </div>
            </div>
            <FilterInnerScreen>{children}</FilterInnerScreen>
         </motion.div>
      </motion.div>,
      document.body,
   );
}
