import React from "react";
import { motion } from "framer-motion";

type Props = {
   children: React.ReactNode;
};

export default function SubScreenAnimation({ children }: Props) {
   return (
      <motion.div
         initial={{ x: "-100%" }}
         animate={{ x: 0 }}
         exit={{ x: "100%" }}
         transition={{ duration: 0.2 }}
         className="absolute inset-0 overflow-hidden"
      >
         <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.2 }}
            className="w-full h-full relative overflow-hidden"
         >
            {children}
         </motion.div>
      </motion.div>
   );
}
