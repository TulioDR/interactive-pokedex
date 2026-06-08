import usePokedexContext from "@/app/_context/PokedexContext";
import { motion } from "framer-motion";
type Props = {
   draggedId: number;
};

export default function ScanAnimation({ draggedId }: Props) {
   const { setSelectedId } = usePokedexContext();

   const handleAnimationComplete = (e: any) => {
      if (e.scaleX === 1) setSelectedId(draggedId);
   };
   return (
      <motion.div
         initial={{ scaleX: 0 }}
         animate={{ scaleX: 1, transition: { duration: 1 } }}
         exit={{ opacity: 0, transition: { duration: 0.2 } }}
         onAnimationComplete={handleAnimationComplete}
         className="absolute inset-0 pointer-events-none bg-linear-to-r from-transparent to-white origin-left z-10"
      />
   );
}
