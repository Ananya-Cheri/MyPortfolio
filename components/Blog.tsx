'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Calendar, Clock, ArrowRight } from 'lucide-react'

// PLACEHOLDER: Replace with your actual blog posts
const blogPosts = [
  {
    id: 1,
    title: 'Building Scalable Data Pipelines with Apache Airflow',
    excerpt: 'A comprehensive guide to designing and implementing production-ready data pipelines that scale to millions of records.',
    category: 'Data Engineering',
    date: '2024-01-15',
    readTime: '8 min read',
    tags: ['Airflow', 'Python', 'Data Engineering'],
    image: '📊',
    link: 'https://yourblog.com/post1' // PLACEHOLDER
  },
  {
    id: 2,
    title: 'MLOps Best Practices: From Notebook to Production',
    excerpt: 'Learn how to take your ML models from Jupyter notebooks to production-ready systems with proper monitoring and versioning.',
    category: 'AI/ML',
    date: '2024-01-10',
    readTime: '12 min read',
    tags: ['MLOps', 'Python', 'Docker', 'Kubernetes'],
    image: '🤖',
    link: 'https://yourblog.com/post2' // PLACEHOLDER
  },
  {
    id: 3,
    title: 'Automating Cloud Infrastructure with Terraform',
    excerpt: 'How to implement Infrastructure as Code to automate and manage your cloud resources efficiently.',
    category: 'Automation',
    date: '2024-01-05',
    readTime: '10 min read',
    tags: ['Terraform', 'AWS', 'DevOps'],
    image: '☁️',
    link: 'https://yourblog.com/post3' // PLACEHOLDER
  },
  {
    id: 4,
    title: 'Real-Time Stream Processing with Apache Kafka',
    excerpt: 'Deep dive into building real-time data streaming applications using Kafka and Spark Streaming.',
    category: 'Data Engineering',
    date: '2023-12-28',
    readTime: '15 min read',
    tags: ['Kafka', 'Spark', 'Streaming'],
    image: '⚡',
    link: 'https://yourblog.com/post4' // PLACEHOLDER
  },
  {
    id: 5,
    title: 'Fine-Tuning Large Language Models for Domain Tasks',
    excerpt: 'A practical guide to fine-tuning LLMs like BERT and GPT for specific business use cases.',
    category: 'AI/ML',
    date: '2023-12-20',
    readTime: '14 min read',
    tags: ['LLM', 'NLP', 'Transformers'],
    image: '🧠',
    link: 'https://yourblog.com/post5' // PLACEHOLDER
  },
  {
    id: 6,
    title: 'Data Quality: The Foundation of Reliable Analytics',
    excerpt: 'Implementing data quality checks and monitoring to ensure your analytics are built on solid foundations.',
    category: 'Data Engineering',
    date: '2023-12-15',
    readTime: '9 min read',
    tags: ['Data Quality', 'Testing', 'dbt'],
    image: '✅',
    link: 'https://yourblog.com/post6' // PLACEHOLDER
  },
  {
    id: 7,
    title: 'CI/CD for Data Pipelines: A Modern Approach',
    excerpt: 'How to implement continuous integration and deployment for your data engineering workflows.',
    category: 'Automation',
    date: '2023-12-10',
    readTime: '11 min read',
    tags: ['CI/CD', 'GitHub Actions', 'Testing'],
    image: '🔄',
    link: 'https://yourblog.com/post7' // PLACEHOLDER
  },
  {
    id: 8,
    title: 'Computer Vision at Scale: Lessons Learned',
    excerpt: 'Practical insights from deploying computer vision models in production serving millions of requests.',
    category: 'AI/ML',
    date: '2023-12-05',
    readTime: '13 min read',
    tags: ['Computer Vision', 'PyTorch', 'Production'],
    image: '👁️',
    link: 'https://yourblog.com/post8' // PLACEHOLDER
  },
  {
    id: 9,
    title: 'Cost Optimization Strategies for Cloud Data Warehouses',
    excerpt: 'Proven techniques to reduce your cloud data warehouse costs without sacrificing performance.',
    category: 'Infrastructure',
    date: '2023-11-28',
    readTime: '10 min read',
    tags: ['Snowflake', 'Cost Optimization', 'Cloud'],
    image: '💰',
    link: 'https://yourblog.com/post9' // PLACEHOLDER
  }
]

const categories = ['All', 'Data Engineering', 'AI/ML', 'Automation', 'Infrastructure']

export default function Blog() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory)

  return (
    <section id="blog" className="py-20 relative overflow-hidden">
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
            <span className="text-gradient">Blog & Articles</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Sharing insights, tutorials, and lessons learned from building data systems
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full font-semibold transition-all ${
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

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post, index) => (
            <motion.a
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-effect rounded-2xl overflow-hidden hover:bg-white/10 transition-all group"
              whileHover={{ y: -5 }}
            >
              {/* Post Image/Icon */}
              <div className="relative h-48 bg-gradient-to-br from-primary-500/10 to-accent-500/10 flex items-center justify-center border-b border-white/5">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center mx-auto mb-3">
                    <div className="text-xl font-bold text-primary-400">{post.category === 'Data Engineering' ? 'DE' : post.category === 'AI/ML' ? 'ML' : post.category === 'Automation' ? 'AT' : 'IN'}</div>
                  </div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">Article</div>
                </div>
                <div className="absolute top-4 right-4 px-3 py-1 glass-effect rounded-full text-xs font-semibold text-primary-400">
                  {post.category}
                </div>
              </div>

              {/* Post Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gradient transition-all">
                  {post.title}
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-3">{post.excerpt}</p>

                {/* Meta Info */}
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-white/5 rounded text-xs text-gray-400 border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Read More */}
                <div className="flex items-center gap-2 text-primary-400 font-semibold group-hover:gap-3 transition-all">
                  <span>Read More</span>
                  <ArrowRight size={18} />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="https://yourblog.com" // PLACEHOLDER
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 glass-effect rounded-lg text-white font-semibold hover:bg-white/10 transition-all group"
          >
            <span>View All Articles</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
