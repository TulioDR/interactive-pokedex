import CircularLens from "@/components/CircularLens";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import PowerButton from "./PowerButton";
import FilterTitle from "./FilterTitle";
import FilterInnerScreen from "./FilterInnerScreen";
import useFiltersContext from "../../../context/FiltersContext";
import ContainerSizeHandler from "./ContainerSizeHandler";
import useThemeContext from "@/context/ThemeContext";

type Props = {
   children: React.ReactNode;
};

export default function FiltersContainer({ children }: Props) {
   const { themeColor } = useThemeContext();

   const [isMounted, setIsMounted] = useState(false);
   useEffect(() => setIsMounted(true), []);

   const { isModalOpen, openModal } = useFiltersContext();

   if (!isMounted) return <></>;
   return createPortal(
      <motion.div
         initial={{ x: "100%" }}
         animate={{ x: isModalOpen ? "0%" : "100%" }}
         transition={{ duration: 0.4, ease: "easeInOut" }}
         className="px-5 lg:px-20 py-5 fixed inset-0 z-20"
      >
         <ContainerSizeHandler isModalOpen={isModalOpen}>
            <div
               style={{ backgroundColor: themeColor }}
               onClick={isModalOpen ? undefined : openModal}
               className={`w-full h-full rounded-4xl p-2 lg:p-5 lg:pl-0 flex shadow-xl border-2 border-white outline outline-outline overflow-hidden
                  ${isModalOpen ? "" : "hover:brightness-110"}   
               `}
            >
               <div className="flex-col items-center w-19 h-full gap-4 justify-between hidden lg:flex">
                  <PowerButton />

                  <div className="flex flex-col gap-2 items-center">
                     <FilterTitle />
                     <CircularLens status={false} />
                  </div>
               </div>
               <FilterInnerScreen>{children}</FilterInnerScreen>
            </div>
         </ContainerSizeHandler>
      </motion.div>,
      document.body,
   );
}
