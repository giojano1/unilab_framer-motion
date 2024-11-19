import { motion } from "framer-motion";
import { useState } from "react";
const variants = {
  open: { x: 0, opacity: 1 },
  closed: { x: "-100%", opacity: 0 },
};

export default function Animation1() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="p-5 bg-blue-300 text-center "
        >
          Fade Up
        </motion.div>
      </div>
      <div className="mt-20 flex justify-center">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 10 }}
          whileTap={{ scale: 0.9, backgroundColor: "red" }}
          className="bg-orange-500 w-40 h-40 flex items-center justify-center rounded-2xl cursor-pointer "
        >
          Hover
        </motion.div>
      </div>
      <div className="mt-20">
        <motion.div
          variants={variants}
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          transition={{ duration: 0.5 }}
          className="bg-green-300 w-[200px] h-[100px] rounded-lg mb-5"
        ></motion.div>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "Close" : "Open"}
        </button>
      </div>
    </div>
  );
}
