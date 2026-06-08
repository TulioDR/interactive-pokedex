import usePokedexContext from "@/app/_context/PokedexContext";
import { AnimatePresence, motion, Variants } from "framer-motion";

type Props = {
   children: React.ReactNode;
};

const crtScreenVariants: Variants = {
   off: {
      scaleX: [1, 1, 0.01, 0],
      scaleY: [1, 0.004, 0.004, 0],
      opacity: [1, 1, 1, 0],
      filter: [
         "brightness(1)",
         "brightness(3)",
         "brightness(6)",
         "brightness(12)",
      ],
      transition: {
         duration: 0.45,
         times: [0, 0.45, 0.8, 1],
         ease: "easeInOut",
      },
   },
   on: {
      scaleX: [0, 1.05, 1],
      scaleY: [0, 0.005, 1],
      opacity: 1,
      filter: ["brightness(6)", "brightness(2)", "brightness(1)"],
      transition: {
         duration: 0.5,
         times: [0, 0.35, 1],
         ease: "easeOut",
      },
   },
};

export default function PokedexInnerScreen({ children }: Props) {
   const { isPowerOn } = usePokedexContext();

   return (
      <div className="scan-target-zone flex flex-col w-full flex-1 rounded-bl-[64px] rounded-tr-lg bg-slate-200 p-4 pb-0 relative overflow-hidden border-2 border-white">
         <div className="bg-gray-900 border-4 relative border-black rounded-lg flex-1 w-full overflow-hidden">
            <AnimatePresence>
               {isPowerOn && (
                  <motion.div
                     variants={crtScreenVariants}
                     initial="off"
                     animate="on"
                     exit="off"
                     className="w-full h-full overflow-hidden"
                  >
                     {children}
                  </motion.div>
               )}
            </AnimatePresence>
         </div>
         <div className="h-16 w-full flex justify-end py-4">
            <div className="aspect-square h-full flex flex-col justify-between">
               {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="w-full h-1 bg-black" />
               ))}
            </div>
         </div>
      </div>
   );
}
