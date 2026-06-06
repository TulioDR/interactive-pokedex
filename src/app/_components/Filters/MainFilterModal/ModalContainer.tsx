import useThemeContext from "@/context/ThemeContext";
import { motion } from "framer-motion";

type Props = {
   children: React.ReactNode;
};

export default function ModalContainer({ children }: Props) {
   const { themeColor } = useThemeContext();
   return (
      <motion.div
         initial={{ opacity: 0, scale: 1.5 }}
         animate={{ opacity: 1, scale: 1 }}
         exit={{ opacity: 0, scale: 1.5 }}
         transition={{ duration: 0.4, ease: "easeInOut" }}
         className="px-20 pb-5 pt-30 fixed inset-0 z-40"
      >
         <div
            style={{ backgroundColor: themeColor }}
            className="w-full h-full rounded-4xl p-5 shadow-xl border-2 border-white outline outline-outline overflow-hidden"
         >
            <div className="w-full h-full bg-slate-100 rounded-2xl border-4 border-black flex overflow-hidden p-5 gap-5">
               {children}
            </div>
         </div>
      </motion.div>
   );
}
