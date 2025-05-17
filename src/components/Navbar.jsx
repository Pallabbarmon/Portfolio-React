import logo from "../assets/NewLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-20 flex items-center justify-between py-6"
    >

      <div className="flex items-center">
        <img src={logo} alt="logo" className="h-20 w-auto" />
      </div>

      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <motion.a
          href="https://www.linkedin.com/in/pallab-barman02/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-400 transition-colors"
          whileHover={{ scale: 1.2, rotate: 10 }} 
          transition={{ duration: 0.3 }} 
        >
          <FaLinkedin />
        </motion.a>
        <motion.a
          href="https://github.com/Pallabbarmon"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-400 transition-colors"
          whileHover={{ scale: 1.2, rotate: 10 }} 
          transition={{ duration: 0.3 }} 
        >
          <FaGithub />
        </motion.a>
        <motion.a
          href="https://x.com/PallabBormon"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-400 transition-colors"
          whileHover={{ scale: 1.2, rotate: 10 }} 
          transition={{ duration: 0.3 }} 
        >
          <FaSquareXTwitter />
        </motion.a>
        <motion.a
          href="https://www.instagram.com/pallabbarman02/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-400 transition-colors"
          whileHover={{ scale: 1.2, rotate: 10 }} 
          transition={{ duration: 0.3 }} 
        >
          <FaInstagram />
        </motion.a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
