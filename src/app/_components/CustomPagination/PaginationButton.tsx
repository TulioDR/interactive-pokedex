import useThemeContext from "@/context/ThemeContext";
import { motion } from "framer-motion";

type Props = {
   onClick: () => void;
   disabled?: boolean;
   children: React.ReactNode;
   isActive?: boolean;
};

export default function PaginationButton({
   onClick,
   disabled,
   children,
   isActive,
}: Props) {
   const { themeColor } = useThemeContext();
   return (
      <button
         onClick={onClick}
         disabled={disabled}
         className={`h-full aspect-square cursor-pointer relative disabled:pointer-events-none disabled:opacity-50 flex items-center justify-center 
            hover:bg-hover active:bg-hover active:text-white hover:text-white rounded-md
            ${isActive ? "text-white" : ""}   
         `}
      >
         {isActive && (
            <motion.div
               layoutId="active-pagination-button"
               transition={{ duration: 0.6, type: "spring" }}
               style={{ backgroundColor: themeColor }}
               className="absolute inset-1 rounded-sm shadow-md"
            />
         )}
         <span className="relative text-sm font-black">{children}</span>
      </button>
   );
}
