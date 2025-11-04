'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Brain, ChevronDown, ChevronUp, ExternalLink, Github } from 'lucide-react'

// PLACEHOLDER: Replace with your actual AI/ML experiments
const experiments = [
  {
    id: 1,
    title: 'Computer Vision for Object Detection',
    category: 'Computer Vision',
    description: 'Custom YOLOv8 model for real-time object detection with 95% accuracy',
    details: 'Trained a custom YOLOv8 model on a dataset of 50,000+ images. Implemented data augmentation, transfer learning, and model optimization techniques. Deployed as a FastAPI service handling 100+ FPS on GPU.',
    tags: ['PyTorch', 'YOLOv8', 'OpenCV', 'FastAPI'],
    metrics: ['95% mAP', '100+ FPS', '50K+ images'],
    notebook: 'https://github.com/yourusername/notebook1', // PLACEHOLDER
    demo: 'https://demo.example.com',
    image: '🎯'
  },
  {
    id: 2,
    title: 'Time Series Forecasting with Transformers',
    category: 'Time Series',
    description: 'Transformer-based model for multi-step time series forecasting',
    details: 'Implemented a custom transformer architecture for time series forecasting. Compared performance against LSTM, GRU, and Prophet models. Achieved 20% improvement in RMSE over baseline models. Used for demand forecasting in production.',
    tags: ['TensorFlow', 'Transformers', 'Pandas', 'Plotly'],
    metrics: ['20% better RMSE', 'Multi-step ahead', 'Production ready'],
    notebook: 'https://github.com/yourusername/notebook2', // PLACEHOLDER
    demo: 'https://demo.example.com',
    image: '📈'
  },
  {
    id: 3,
    title: 'NLP: Sentiment Analysis at Scale',
    category: 'NLP',
    description: 'Fine-tuned BERT model for multi-class sentiment analysis',
    details: 'Fine-tuned BERT-base model on custom dataset of 100K+ reviews. Implemented efficient inference pipeline using ONNX Runtime. Achieved 92% F1-score across 5 sentiment classes. Processes 1000+ documents per second.',
    tags: ['Hugging Face', 'BERT', 'ONNX', 'Python'],
    metrics: ['92% F1-score', '1000+ docs/s', '5 classes'],
    notebook: 'https://github.com/yourusername/notebook3', // PLACEHOLDER
    demo: 'https://demo.example.com',
    image: '💬'
  },
  {
    id: 4,
    title: 'Recommendation System with Deep Learning',
    category: 'Recommender Systems',
    description: 'Neural collaborative filtering for personalized recommendations',
    details: 'Built a hybrid recommendation system combining collaborative filtering and content-based approaches. Used neural networks to learn user and item embeddings. Improved click-through rate by 35% in A/B tests.',
    tags: ['PyTorch', 'Embeddings', 'MLflow', 'Redis'],
    metrics: ['35% CTR increase', '10M+ users', 'Real-time'],
    notebook: 'https://github.com/yourusername/notebook4', // PLACEHOLDER
    demo: 'https://demo.example.com',
    image: '🎬'
  },
  {
    id: 5,
    title: 'Anomaly Detection in IoT Data',
    category: 'Anomaly Detection',
    description: 'Unsupervised learning for detecting anomalies in sensor data',
    details: 'Implemented multiple anomaly detection algorithms including Isolation Forest, Autoencoder, and LSTM-based approaches. Compared performance and selected best model for production. Reduced false positives by 60%.',
    tags: ['Scikit-learn', 'TensorFlow', 'Kafka', 'Docker'],
    metrics: ['60% fewer false positives', 'Real-time detection', '99.5% uptime'],
    notebook: 'https://github.com/yourusername/notebook5', // PLACEHOLDER
    demo: 'https://demo.example.com',
    image: '🔍'
  },
  {
    id: 6,
    title: 'Generative AI: Text-to-Image',
    category: 'Generative AI',
    description: 'Fine-tuned Stable Diffusion for domain-specific image generation',
    details: 'Fine-tuned Stable Diffusion model on custom dataset for generating domain-specific images. Implemented LoRA for efficient fine-tuning. Created web interface for easy experimentation. Generated 10,000+ high-quality images.',
    tags: ['Stable Diffusion', 'LoRA', 'Gradio', 'PyTorch'],
    metrics: ['10K+ images', 'Custom style', 'Web interface'],
    notebook: 'https://github.com/yourusername/notebook6', // PLACEHOLDER
    demo: 'https://demo.example.com',
    image: '🎨'
  }
]

const categories = ['All', 'Computer Vision', 'NLP', 'Time Series', 'Recommender Systems', 'Anomaly Detection', 'Generative AI']

export default function AIExperiments() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [expandedId, setExpandedId] = useState<number | null>(null)

  const filteredExperiments = selectedCategory === 'All' 
    ? experiments 
    : experiments.filter(e => e.category === selectedCategory)

  return (
    <section id="ai-experiments" className="py-20 relative overflow-hidden">
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
            <span className="text-gradient">AI/ML Experiments</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Research projects, Kaggle competitions, and experimental ML models
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
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
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

        {/* Experiments Accordion */}
        <div className="max-w-5xl mx-auto space-y-4">
          {filteredExperiments.map((experiment, index) => (
            <motion.div
              key={experiment.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-effect rounded-2xl overflow-hidden hover:bg-white/10 transition-all"
            >
              {/* Experiment Header */}
              <button
                onClick={() => setExpandedId(expandedId === experiment.id ? null : experiment.id)}
                className="w-full p-6 flex items-start gap-4 text-left"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center flex-shrink-0">
                  <div className="text-lg font-bold text-primary-400">{experiment.category === 'Computer Vision' ? 'CV' : experiment.category === 'NLP' ? 'NLP' : experiment.category === 'Time Series' ? 'TS' : experiment.category === 'Recommender Systems' ? 'RS' : experiment.category === 'Anomaly Detection' ? 'AD' : 'GEN'}</div>
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{experiment.title}</h3>
                      <p className="text-sm text-primary-400 font-semibold">{experiment.category}</p>
                    </div>
                    <motion.div
                      animate={{ rotate: expandedId === experiment.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown size={24} className="text-gray-400" />
                    </motion.div>
                  </div>
                  <p className="text-gray-400">{experiment.description}</p>
                  
                  {/* Metrics */}
                  <div className="flex flex-wrap gap-3 mt-4">
                    {experiment.metrics.map((metric) => (
                      <span
                        key={metric}
                        className="px-3 py-1 bg-primary-500/20 text-primary-400 rounded-full text-xs font-semibold"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>
              </button>

              {/* Expanded Content */}
              <motion.div
                initial={false}
                animate={{
                  height: expandedId === experiment.id ? 'auto' : 0,
                  opacity: expandedId === experiment.id ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6 pt-0 border-t border-white/10">
                  <p className="text-gray-300 mb-6 mt-6">{experiment.details}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {experiment.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-white/5 rounded-full text-sm text-gray-300 border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex flex-wrap gap-4">
                    <a
                      href={experiment.notebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg text-white font-semibold text-sm hover:shadow-lg hover:shadow-primary-500/50 transition-all"
                    >
                      <Github size={18} />
                      View Notebook
                    </a>
                    <a
                      href={experiment.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 glass-effect rounded-lg text-white font-semibold text-sm hover:bg-white/10 transition-all"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Kaggle & Competitions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-6 text-gray-300">Competitions & Achievements</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* PLACEHOLDER: Replace with your actual achievements */}
            <div className="glass-effect rounded-xl p-6 text-center">
              <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl font-bold text-primary-400">5%</div>
              </div>
              <div className="text-2xl font-bold text-gradient mb-2">Top 5%</div>
              <div className="text-gray-400">Kaggle Competition</div>
            </div>
            <div className="glass-effect rounded-xl p-6 text-center">
              <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl font-bold text-primary-400">15+</div>
              </div>
              <div className="text-2xl font-bold text-gradient mb-2">15+</div>
              <div className="text-gray-400">Published Notebooks</div>
            </div>
            <div className="glass-effect rounded-xl p-6 text-center">
              <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl font-bold text-primary-400">★</div>
              </div>
              <div className="text-2xl font-bold text-gradient mb-2">Expert</div>
              <div className="text-gray-400">Kaggle Rank</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
