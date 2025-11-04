'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Database, Workflow, Brain, Code, Cloud, Zap } from 'lucide-react'

const skills = [
  {
    icon: Database,
    title: 'Data Engineering',
    description: 'Building scalable data pipelines, ETL processes, and data warehouses',
    tags: ['Python', 'SQL', 'Spark', 'Airflow', 'Kafka', 'Snowflake'],
    color: 'from-primary-400 to-primary-600'
  },
  {
    icon: Workflow,
    title: 'Automation & Workflows',
    description: 'Designing intelligent automation systems that optimize business processes',
    tags: ['Python', 'APIs', 'CI/CD', 'Docker', 'Kubernetes', 'Terraform'],
    color: 'from-accent-400 to-accent-600'
  },
  {
    icon: Brain,
    title: 'AI/ML Engineering',
    description: 'Developing and deploying machine learning models at scale',
    tags: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'MLflow', 'Hugging Face'],
    color: 'from-primary-500 to-accent-500'
  }
]

const journey = [
  {
    year: '2025',
    title: 'Master\'s in Data Science',
    company: 'University of Sydney',
    description: 'Pursuing advanced studies in data science, machine learning, and predictive analytics'
  },
  {
    year: '2023',
    title: 'Data Engineer',
    company: 'SAAC IT Solutions',
    description: 'Built relational databases, designed robust triggers, and worked with real-world datasets'
  },
  {
    year: '2022',
    title: 'Secretary, IEEE GRIET SB',
    company: 'GRIET',
    description: 'Led technical projects and organized events, honing leadership and organizational skills'
  }
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-gradient">About Me</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {/* PLACEHOLDER: Replace with your bio */}
            I'm a passionate Data Science Engineer with a strong foundation in Computer Science and growing expertise in SQL Server, Python, predictive analytics, and data-driven storytelling. Currently pursuing my Master's in Data Science at the University of Sydney, I thrive on transforming complex datasets into actionable insights that drive smarter decisions.
          </p>
        </motion.div>

        {/* Skill Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="glass-effect rounded-2xl p-8 hover:bg-white/10 transition-all group"
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <skill.icon size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">{skill.title}</h3>
              <p className="text-gray-400 mb-6">{skill.description}</p>
              <div className="flex flex-wrap gap-2">
                {skill.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-white/5 rounded-full text-sm text-gray-300 border border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Journey Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="text-gradient">My Journey</span>
          </h3>
          <div className="space-y-8">
            {journey.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                className="flex gap-6 group"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-400 to-accent-400 flex items-center justify-center font-bold text-white group-hover:scale-110 transition-transform">
                    {item.year.slice(2)}
                  </div>
                  {index < journey.length - 1 && (
                    <div className="w-0.5 h-full bg-gradient-to-b from-primary-400/50 to-transparent mt-2" />
                  )}
                </div>
                <div className="glass-effect rounded-xl p-6 flex-1 group-hover:bg-white/10 transition-all">
                  <div className="text-sm text-primary-400 font-semibold mb-1">{item.year}</div>
                  <h4 className="text-xl font-bold text-white mb-1">{item.title}</h4>
                  <div className="text-gray-400 mb-2">{item.company}</div>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Skills/Tools */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-bold mb-8 text-gray-300">Technologies & Tools</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {/* PLACEHOLDER: Add your actual tech stack */}
            {['Python', 'SQL', 'R', 'C++', 'MySQL', 'SQL Server', 'Machine Learning', 
              'Predictive Analytics', 'Data Visualization', 'Tableau', 'Data Modeling',
              'Random Forest', 'SVM', 'TensorFlow', 'Scikit-learn', 'Pandas', 'tidyverse',
              'Query Optimization', 'ER/RM Diagrams', 'Git', 'Data Storytelling'].map((tech) => (
              <motion.span
                key={tech}
                className="px-4 py-2 glass-effect rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
