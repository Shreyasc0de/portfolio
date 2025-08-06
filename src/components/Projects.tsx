import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, Database, Layout } from 'lucide-react';

const projects = [
  {
    title: 'Study Time Tracker',
    description:
      'A secure study log web app using Python, Streamlit, and SQLite. Features login system, progress tracker, daily charts, and editable study logs.',
    image: '/public/images/study.png',
    tags: ['Python', 'Streamlit', 'SQLite', 'UI Design'],
    icon: <Layout className="w-6 h-6" />,
    demo: 'https://shreyasc0de-study-time-tracker.streamlit.app',
    github: 'https://github.com/Shreyasc0de/study-time-tracker'
  },
  {
  
      title: 'E-Commerce Clothing Store',
      description: 'A responsive shopping site with dynamic product display, cart management, and Material UI design. Built with React and TypeScript.',
      image: '/public/images/web.png',
      tags: ['React', 'TypeScript', 'Material UI', 'Context API'],
      icon: <Layout className="w-6 h-6" />,
      demo: 'http://localhost:3000/',
      github: 'https://github.com/Shreyasc0de/shreyas-company'
    },
  {
    title: 'Culture Swap: Recipes & Stories',
    description: 'A community app where users share traditional recipes and cultural stories. Built with Streamlit and styled for a friendly experience.',
    image: '/public/images/culture.png',
    tags: ['Python', 'Streamlit', 'Pandas', 'UI/UX'],
    icon: <Layout className="w-6 h-6" />,
    demo: 'http://localhost:8501', 
    github: 'https://github.com/Shreyasc0de/culture'
  }
  
];

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Featured Projects</h2>
        <div ref={ref} className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="aspect-video relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 p-2 bg-white dark:bg-gray-800 rounded-full shadow-lg">
                  {project.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-sm rounded-full dark:text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;