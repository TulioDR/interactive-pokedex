import useThemeContext from "@/context/ThemeContext";
import { motion } from "framer-motion";

type Props = {
   icon: string;
   isSelected: boolean;
   onClick: () => void;
   text: string;
};

export default function PreviewTab({ icon, isSelected, onClick, text }: Props) {
   const { themeColor } = useThemeContext();

   return (
      <button
         className={`flex-1 flex flex-col items-center justify-center py-2 relative cursor-pointer
            ${isSelected ? "text-white bg-white/15" : "text-white/60 hover:text-white"}   
         `}
         onClick={onClick}
      >
         <span className="material-symbols-rounded text-xl!">{icon}</span>
         <span className="text-[10px]">{text}</span>
         {isSelected && (
            <motion.div
               layoutId="underline-preview-tab"
               transition={{ duration: 0.6, type: "spring" }}
               style={{ backgroundColor: themeColor }}
               className="absolute bottom-0 left-0 h-1 w-full z-10"
            />
         )}
         <div className="absolute bottom-0 left-0 w-full h-px bg-white/20" />
      </button>
   );
}
