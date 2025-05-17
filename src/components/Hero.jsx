import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/Profile.jpg";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const lineVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 mb-16">
      <div className="flex flex-wrap items-center">
        {/* LEFT COLUMN: Text */}
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col justify-center h-full">
            <motion.h1
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-left pb-6 text-5xl sm:text-6xl lg:text-7xl font-thin tracking-tight mt-12 pl-2" // Adjusted padding-left
            >
              <motion.span variants={lineVariants}>Pallab Barman</motion.span>
            </motion.h1>

            <motion.span
              variants={lineVariants}
              initial="hidden"
              animate="visible"
              className="text-left bg-gradient-to-r from-pink-300 via-purple-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent pl-2" // Adjusted padding-left
            >
              Full Stack Developer
            </motion.span>

            <motion.p
              variants={lineVariants}
              initial="hidden"
              animate="visible"
              className="text-left my-4 max-w-xl py-6 font-light tracking-wide text-neutral-300 pl-2" // Adjusted padding-left
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: Image */}
        <motion.div
          className="w-full lg:w-1/2 lg:p-8 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={profilePic}
            alt="Pallab Barman"
            className="rounded-lg w-64 h-auto object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
