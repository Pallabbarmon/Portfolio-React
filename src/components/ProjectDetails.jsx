import { useParams } from "react-router-dom";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = PROJECTS.find((p) => p.id === id);

  if (!project) {
    return <div className="p-4 text-red-500">Project not found.</div>;
  }

  return (
    <motion.div
      className="p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
      <img
        src={project.image}
        alt={project.title}
        className="mb-4 rounded w-full max-w-md"
      />
      <p className="mb-4 text-neutral-300">{project.description}</p>

      <h4 className="mb-2 font-semibold text-neutral-100">Technologies:</h4>
      <div className="flex flex-wrap mb-6">
        {project.technologies.map((tech, index) => (
          <span
            key={index}
            className="mr-2 mb-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
          >
            {tech}
          </span>
        ))}
      </div>

      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded bg-purple-700 px-4 py-2 text-white font-semibold hover:bg-purple-600 transition"
        >
          Visit Project
        </a>
      )}
    </motion.div>
  );
};

export default ProjectDetails;
