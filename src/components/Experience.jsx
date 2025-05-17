import React from 'react';
import { EXPERIENCES } from '../constants';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <motion.div
      className="border-b border-neutral-900 pb-4"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="my-20 text-center text-4xl text-neutral-300"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Experience
        </motion.h2>

        <div>
          {EXPERIENCES.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="mb-12 flex flex-wrap lg:justify-center"
            >
              <motion.div
                className="w-full lg:w-1/4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
              </motion.div>

              <div className="w-full max-w-xl lg:w-3/4">
                <motion.h6
                  className="mb-2 font-semibold"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  {experience.role} -{' '}
                  <span className="text-sm text-purple-100">
                    {experience.company}
                  </span>
                </motion.h6>

                <motion.p
                  className="mb-4 text-neutral-400"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  {experience.description}
                </motion.p>

                <div className="flex flex-wrap">
                  {experience.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      className="mr-2 mb-2 inline-block rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.4 + techIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
