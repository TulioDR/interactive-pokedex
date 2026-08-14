import { motion, Variants } from "framer-motion";
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
type Props = {
  children: React.ReactNode;
};

export default function CRTAnimation({ children }: Props) {
  return (
    <motion.div
      variants={crtScreenVariants}
      initial="off"
      animate="on"
      exit="off"
      className="w-full h-full overflow-hidden "
    >
      <div className="relative w-full h-full flex flex-col z-10 overflow-hidden text-white from-[#0E5542] bg-radial to-[#0F3A22] ">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))",
            backgroundSize: "100% 4px, 6px 100%",
          }}
        />
        {children}
      </div>
    </motion.div>
  );
}
