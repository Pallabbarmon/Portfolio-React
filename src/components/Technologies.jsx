import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { motion } from "framer-motion";

// Each icon has a link
const techIcons = [
  {
    icon: <RiReactjsLine className="text-7xl text-cyan-400" />,
    key: "react",
    link: "https://reactjs.org"
  },
  {
    icon: <TbBrandNextjs className="text-7xl" />,
    key: "nextjs",
    link: "https://nextjs.org"
  },
  {
    icon: <FaNodeJs className="text-7xl text-green-500" />,
    key: "node",
    link: "https://nodejs.org"
  },
  {
    icon: <SiMongodb className="text-7xl text-green-400" />,
    key: "mongo",
    link: "https://mongodb.com"
  },
  {
    icon: <DiRedis className="text-7xl text-red-500" />,
    key: "redis",
    link: "https://redis.io"
  },
  {
    icon: <BiLogoPostgresql className="text-7xl text-sky-700" />,
    key: "postgres",
    link: "https://www.postgresql.org"
  }
];

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 py-24">
      <motion.h2
        className="my-20 text-center text-4xl text-neutral-300"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Technologies
      </motion.h2>

      <div className="flex flex-wrap items-center justify-center gap-6">
        {techIcons.map((tech, index) => (
          <motion.a
            key={tech.key}
            href={tech.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.15, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="rounded-2xl border-4 border-neutral-800 p-6 transition-transform"
          >
            {tech.icon}
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
