import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
type Props = {
   draggedId: string;
};

export default function ScanAnimation({ draggedId }: Props) {
   const router = useRouter();

   const onAnimationComplete = () => {
      router.replace(`?scanned=${draggedId}`);
   };

   return (
      <motion.div
         initial={{ scaleX: 0 }}
         animate={{
            scaleX: 1,
            transition: {
               duration: 1,
               ease: "easeOut",
               onComplete: onAnimationComplete,
            },
         }}
         // onAnimationComplete={handleAnimationComplete}
         className="absolute inset-0 pointer-events-none bg-linear-to-r from-white/50 to-white origin-left z-20"
      />
   );
}
