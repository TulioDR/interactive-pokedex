import getTypeColor from "@/utils/getTypeColor";
import { motion } from "framer-motion";

type Props = {
   children: React.ReactNode;
   type: string;
};

export default function ColorContainer({ children, type }: Props) {
   return (
      <motion.div
         style={{ backgroundColor: getTypeColor(type) }}
         className="absolute inset-0 text-white overflow-hidden"
      >
         <div className="w-full h-full bg-black/20 p-2 flex flex-col">
            {children}
         </div>
      </motion.div>
   );
}
