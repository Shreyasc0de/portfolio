import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skillCategories = [
  {
    title: 'Programming',
    skills: ['Python', 'JavaScript', 'React', '.NET', 'HTML', 'CSS', 'SQL', 'Oracle']
  },
  {
    title: 'Tools & Platforms',
    skills: ['SAP', 'Power BI', 'MS Excel', 'MS Access', 'SEO & Digital Marketing']
  },
  {
    title: 'Specializations',
    skills: ['Cybersecurity', 'Data Science', 'UI/UX Design', 'Project Management']
  }
];

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Key Proficiencies</h2>
        <div
          ref={ref}
          className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-6 dark:text-white">{category.title}</h3>
              <div className="grid gap-4">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: (categoryIndex * 0.2) + (index * 0.1) }}
                    className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium dark:text-white">{skill}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;