import { Link } from "react-router-dom";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pd-4">
      <motion.h2
        className="my-20 text-center text-4xl text-neutral-300"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="mb-8 flex flex-wrap lg:justify-center"
          >
            <div className="w-full lg:w-1/4">
              <Link to={`/projects/${project.id}`}>
                <motion.img
                  src={project.image}
                  width={150}
                  height={150}
                  alt={project.title}
                  className="mb-6 rounded cursor-pointer"
                  whileHover={{ scale: 1.1 }} 
                  transition={{ duration: 0.3 }} 
                />
              </Link>
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <Link to={`/projects/${project.id}`}>
                <h6 className="mb-2 font-semibold cursor-pointer text-purple-400 hover:underline">
                  {project.title}
                </h6>
              </Link>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
