import { motion } from "framer-motion";
import usePokedexContext from "../context/PokedexContext";
type Props = {
   draggedId: number;
};

export default function ScanAnimation({ draggedId }: Props) {
   const { setSelectedId } = usePokedexContext();

   return (
      <motion.div
         initial={{ scaleX: 0 }}
         animate={{
            scaleX: 1,
            transition: {
               duration: 1,
               ease: "easeOut",
               onComplete: () => setSelectedId(draggedId),
            },
         }}
         exit={{ opacity: 0, transition: { duration: 0.2 } }}
         // onAnimationComplete={handleAnimationComplete}
         className="absolute inset-0 pointer-events-none bg-linear-to-r from-transparent to-white origin-left z-20"
      />
   );
}
