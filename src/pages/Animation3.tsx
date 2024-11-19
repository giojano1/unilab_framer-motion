import { motion } from "framer-motion";
import { useState } from "react";

const accordionVariants = {
  closed: {
    height: 0,
    opacity: 0,
    transition: {
      height: { duration: 0.3, ease: "easeInOut" },
      opacity: { duration: 0.2, delay: 0.1 },
    },
  },
  open: {
    height: "auto",
    opacity: 1,
    transition: {
      height: { duration: 0.5, ease: "easeInOut" },
      opacity: { duration: 0.3 },
    },
  },
};
export default function Animation3() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-[300px] mx-auto border border-gray-300 rounded-lg overflow-hidden shadow-md mt-5">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`p-4 text-white cursor-pointer flex justify-between items-center text-lg font-bold ${
          isOpen ? "bg-blue-500" : "bg-red-400"
        }`}
      >
        Accordion Title
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="inline-block"
        >
          ▼
        </motion.span>
      </div>

      <motion.div
        variants={accordionVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        className="overflow-hidden bg-[#f9f9f9]"
      >
        <div className="p-4  text-[#333]">
          This is the content of the accordion. It smoothly expands and
          collapses based on user interaction. This is the content of the
          accordion. It smoothly expands and collapses based on user
          interaction.
        </div>
      </motion.div>
    </div>
  );
}
