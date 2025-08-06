import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto px-4"
      >
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Education & Certifications</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Education Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6 flex items-center dark:text-white">
              <GraduationCap className="mr-2" />
              Education
            </h3>
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold dark:text-white">Bachelor of Science in Information Systems</h4>
                <p className="text-gray-600 dark:text-gray-300">University of Texas at Arlington</p>
                <p className="text-gray-500 dark:text-gray-400">May 2025</p>
                <p className="text-gray-600 dark:text-gray-300 mt-2">Member of Nepalese Student Association</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold dark:text-white">Associate of Science</h4>
                <p className="text-gray-600 dark:text-gray-300">Dallas College</p>
                <p className="text-gray-500 dark:text-gray-400">2023</p>
                <p className="text-gray-600 dark:text-gray-300 mt-2">Phi Theta Kappa Honor Society – Alpha Zeta Eta Chapter</p>
              </div>
            </div>
          </div>

          {/* Certifications Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6 flex items-center dark:text-white">
              <Award className="mr-2" />
              Certifications
            </h3>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg space-y-4">
              {[
                'Foundations of Cybersecurity – Google (2024)',
                'Digital Marketing – Stukent (2024)',
                'Data Science – IBM (2024)',
                'Foundations of User Experience (UX) Design – Google (2024)',
                'SEO Foundation – 2024',
                'Microsoft Office Specialist (Word) – Microsoft 365 Apps'
              ].map((cert, index) => (
                <div key={index} className="flex items-center">
                  <BookOpen className="mr-2 text-blue-600 dark:text-blue-400" size={20} />
                  <p className="text-gray-600 dark:text-gray-300">{cert}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;