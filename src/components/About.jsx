import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -30 }} // Initial state for animation
          whileInView={{ opacity: 1, y: 0 }} // Final state when in view
          transition={{ duration: 0.8 }} // Duration of the animation
          viewport={{ once: true }} // Animation occurs only once
          className="my-20 text-center text-4xl bg-neutral-950"
        >
          About <span className="text-neutral-500">Me</span>
        </motion.h2>
        <div className="flex flex-wrap">
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.9 }} // Initial state with scale
            whileInView={{ opacity: 1, x: 0, scale: 1 }} // Scale to normal on view
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 lg:p-8 flex items-center justify-center"
          >
            <img className="rounded-2xl" src={aboutImg} alt="about" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }} // Initial state with scale
            whileInView={{ opacity: 1, x: 0, scale: 1 }} // Scale to normal on view
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <p className="text-neutral-300 max-w-xl">{ABOUT_TEXT}</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
