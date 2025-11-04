'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ExternalLink, Github, X } from 'lucide-react'

// PLACEHOLDER: Replace with your actual projects
const projects = [
  {
    id: 1,
    title: 'Predictive Crime Analytics for NSW',
    category: 'AI/ML',
    tags: ['R', 'Random Forest', 'SVM', 'Predictive Analytics'],
    description: 'Forecasting High-Priority Emerging Threats using 30 years of crime data',
    longDescription: 'Developed a predictive analytics model to forecast High-Priority Emerging Threats (HPE_Threats) across New South Wales. Analyzed 30 years of monthly incident data from NSW BOCSAR, achieving 95% accuracy with Random Forest and SVM classifiers. The model helps law enforcement allocate resources proactively by identifying crime categories likely to escalate beyond historical medians.',
    image: '/placeholder-project-1.jpg', // PLACEHOLDER
    github: 'https://github.com/ananyacheripally/nsw-crime-analytics',
    demo: 'https://linkedin.com/in/ananya-cheripally',
    metrics: ['95% accuracy', '30 years data', 'Proactive policing']
  },
  {
    id: 2,
    title: 'ML Model Deployment Platform',
    category: 'AI/ML',
    tags: ['Python', 'FastAPI', 'Docker', 'Kubernetes'],
    description: 'Created an end-to-end ML platform for model training, versioning, and deployment',
    longDescription: 'Developed a comprehensive ML platform that streamlines the entire ML lifecycle from experimentation to production. Features include automated model versioning, A/B testing capabilities, real-time monitoring, and auto-scaling. Reduced model deployment time from weeks to hours.',
    image: '/placeholder-project-2.jpg', // PLACEHOLDER
    github: 'https://github.com/yourusername/project2',
    demo: 'https://demo.example.com',
    metrics: ['50+ models deployed', '90% faster deployment', '5x cost reduction']
  },
  {
    id: 3,
    title: 'Intelligent Workflow Automation',
    category: 'Automation',
    tags: ['Python', 'Airflow', 'APIs', 'PostgreSQL'],
    description: 'Automated complex business workflows saving 100+ hours per week',
    longDescription: 'Designed and implemented an intelligent workflow automation system that orchestrates complex multi-step processes across various systems. Features include dynamic task scheduling, error recovery, and intelligent retry mechanisms. Reduced manual work by 80% and improved accuracy.',
    image: '/placeholder-project-3.jpg', // PLACEHOLDER
    github: 'https://github.com/yourusername/project3',
    demo: 'https://demo.example.com',
    metrics: ['100+ hours saved/week', '80% less manual work', '99% accuracy']
  },
  {
    id: 4,
    title: 'Data Warehouse Modernization',
    category: 'Data Engineering',
    tags: ['SQL', 'Snowflake', 'dbt', 'Python'],
    description: 'Migrated legacy data warehouse to modern cloud architecture',
    longDescription: 'Led the migration of a legacy on-premise data warehouse to Snowflake, implementing modern data modeling practices with dbt. Created automated data quality tests, documentation, and lineage tracking. Improved query performance by 10x and reduced costs by 60%.',
    image: '/placeholder-project-4.jpg', // PLACEHOLDER
    github: 'https://github.com/yourusername/project4',
    demo: 'https://demo.example.com',
    metrics: ['10x faster queries', '60% cost reduction', '100% test coverage']
  },
  {
    id: 5,
    title: 'NLP-Powered Analytics',
    category: 'AI/ML',
    tags: ['Python', 'Transformers', 'PyTorch', 'FastAPI'],
    description: 'Built NLP models for automated text analysis and insights extraction',
    longDescription: 'Developed custom NLP models using transformer architectures for automated text classification, sentiment analysis, and entity extraction. Processed millions of documents to extract actionable insights. Deployed models as scalable APIs serving 1000+ requests per second.',
    image: '/placeholder-project-5.jpg', // PLACEHOLDER
    github: 'https://github.com/yourusername/project5',
    demo: 'https://demo.example.com',
    metrics: ['95% accuracy', '1000+ req/s', 'Multi-language support']
  },
  {
    id: 6,
    title: 'Infrastructure as Code Platform',
    category: 'Automation',
    tags: ['Terraform', 'AWS', 'Python', 'CI/CD'],
    description: 'Created IaC framework for automated infrastructure provisioning',
    longDescription: 'Built a comprehensive Infrastructure as Code platform using Terraform and custom Python tooling. Automated the provisioning and management of cloud resources across multiple environments. Implemented GitOps workflows with automated testing and deployment.',
    image: '/placeholder-project-6.jpg', // PLACEHOLDER
    github: 'https://github.com/yourusername/project6',
    demo: 'https://demo.example.com',
    metrics: ['100% automated', '5 min deployments', 'Zero downtime']
  }
]

const categories = ['All', 'Data Engineering', 'AI/ML', 'Automation']

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory)

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-gradient">Featured Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A selection of projects showcasing my expertise in data engineering, automation, and AI/ML
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white'
                  : 'glass-effect text-gray-300 hover:bg-white/10'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-effect rounded-2xl overflow-hidden group cursor-pointer hover:bg-white/10 transition-all"
              whileHover={{ y: -10 }}
              onClick={() => setSelectedProject(project)}
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-primary-500/10 to-accent-500/10 overflow-hidden border-b border-white/5">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center mx-auto mb-3">
                      <div className="text-2xl font-bold text-primary-400">{project.category === 'AI/ML' ? 'ML' : project.category === 'Data Engineering' ? 'DE' : 'AT'}</div>
                    </div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">Project Preview</div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950 to-transparent opacity-40" />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="text-sm text-primary-400 font-semibold mb-2">{project.category}</div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gradient transition-all">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-2">{project.description}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-white/5 rounded text-xs text-gray-300 border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="glass-effect rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Project Image */}
            <div className="relative h-64 bg-gradient-to-br from-primary-500/10 to-accent-500/10 border-b border-white/5">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center mx-auto mb-4">
                    <div className="text-4xl font-bold text-primary-400">{selectedProject.category === 'AI/ML' ? 'ML' : selectedProject.category === 'Data Engineering' ? 'DE' : 'AT'}</div>
                  </div>
                  <div className="text-sm text-gray-500 uppercase tracking-wider">Project Details</div>
                </div>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 glass-effect rounded-full hover:bg-white/20 transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              <div className="text-sm text-primary-400 font-semibold mb-2">{selectedProject.category}</div>
              <h3 className="text-3xl font-bold text-white mb-4">{selectedProject.title}</h3>
              <p className="text-gray-300 mb-6 text-lg">{selectedProject.longDescription}</p>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {selectedProject.metrics.map((metric, index) => (
                  <div key={index} className="glass-effect rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-gradient">{metric.split(' ')[0]}</div>
                    <div className="text-sm text-gray-400">{metric.split(' ').slice(1).join(' ')}</div>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-white/5 rounded-full text-sm text-gray-300 border border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-primary-500/50 transition-all"
                >
                  <Github size={20} />
                  View Code
                </a>
                <a
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 glass-effect rounded-lg text-white font-semibold hover:bg-white/10 transition-all"
                >
                  <ExternalLink size={20} />
                  Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}
