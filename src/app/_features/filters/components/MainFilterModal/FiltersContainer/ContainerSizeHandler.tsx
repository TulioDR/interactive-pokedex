import { motion } from "framer-motion";

type Props = {
   children: React.ReactNode;
   isModalOpen: boolean;
};

export default function ContainerSizeHandler({ children, isModalOpen }: Props) {
   return (
      <>
         {/* small screen */}
         <motion.div className="lg:hidden h-full w-full overflow-hidden">
            {children}
         </motion.div>
         {/* large screen */}
         <motion.div
            initial={false}
            animate={{
               x: isModalOpen ? "0px" : "-152px",
               transition: { duration: 0.4, ease: "easeInOut" },
            }}
            className="hidden lg:block h-full w-full"
         >
            {children}
         </motion.div>
      </>
   );
}
