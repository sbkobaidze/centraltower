import { motion } from "framer-motion";

const AnimationExample = () => {
  return (
    <div style={{ overflow: "hidden" }} className="w-full">
      <motion.div
        style={{ position: "relative", display: "inline-block" }}
        initial={{ x: "100%" }}
        animate={{ x: "-100%" }}
        transition={{ duration: 5, repeat: Infinity, repeatType: "loop" }}
      >
        <p>Text paragraph 1</p>
      </motion.div>
      <motion.div
        style={{ position: "relative", display: "inline-block" }}
        initial={{ x: "200%" }}
        animate={{ x: "-100%" }}
        transition={{ duration: 6, repeat: Infinity, repeatType: "loop" }}
      >
        <p>Text paragraph 2</p>
      </motion.div>
      <motion.div
        style={{ position: "relative", display: "inline-block" }}
        initial={{ x: "300%" }}
        animate={{ x: "-100%" }}
        transition={{ duration: 7, repeat: Infinity, repeatType: "loop" }}
      >
        <p>Text paragraph 3</p>
      </motion.div>
    </div>
  );
};

export default AnimationExample