import { motion } from "framer-motion";


export default function Loader() {
  return (
    <div className="flex items-center justify-center mt-[7em]">
      <motion.h1
        className="text-[10rem] font-[Limelight] text-transparent bg-gradient-to-l from-[#E96900] to-[#E96900] bg-[length:0%_100%] bg-no-repeat bg-clip-text"
        animate={{ backgroundSize: "100% 100%" }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        M
      </motion.h1>
    </div>
  );
}
