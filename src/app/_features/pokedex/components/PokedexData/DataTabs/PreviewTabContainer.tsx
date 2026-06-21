import { AnimatePresence, motion } from "framer-motion";

type Props = {
   contentKey: string;
   children: React.ReactNode;
};

export default function PreviewTabContainer({ contentKey, children }: Props) {
   return (
      <div className="flex-1 w-full overflow-hidden py-2">
         <AnimatePresence mode="wait">
            <motion.div
               key={contentKey}
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               transition={{ duration: 0.2 }}
               className="w-full flex flex-col overflow-y-auto h-full"
            >
               {children}
            </motion.div>
         </AnimatePresence>
      </div>
   );
}
