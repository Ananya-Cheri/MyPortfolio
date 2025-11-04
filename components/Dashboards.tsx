'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { BarChart3, LineChart, PieChart, TrendingUp } from 'lucide-react'

// PLACEHOLDER: Replace with your actual dashboards
const dashboards = [
  {
    id: 1,
    title: 'Sales Analytics Dashboard',
    description: 'Real-time sales performance tracking with predictive analytics',
    type: 'Power BI',
    icon: BarChart3,
    embedUrl: 'https://placeholder-embed.com', // PLACEHOLDER
    tags: ['Power BI', 'SQL', 'Python'],
    metrics: ['Real-time', '50+ KPIs', 'Predictive Models']
  },
  {
    id: 2,
    title: 'ML Model Performance Monitor',
    description: 'Track model accuracy, drift, and performance metrics in production',
    type: 'Streamlit',
    icon: TrendingUp,
    embedUrl: 'https://placeholder-embed.com', // PLACEHOLDER
    tags: ['Streamlit', 'Python', 'MLflow'],
    metrics: ['Live Monitoring', 'Drift Detection', 'A/B Testing']
  },
  {
    id: 3,
    title: 'Data Pipeline Health Dashboard',
    description: 'Monitor data pipeline health, SLAs, and data quality metrics',
    type: 'Grafana',
    icon: LineChart,
    embedUrl: 'https://placeholder-embed.com', // PLACEHOLDER
    tags: ['Grafana', 'Prometheus', 'Airflow'],
    metrics: ['99.9% Uptime', 'Real-time Alerts', 'SLA Tracking']
  },
  {
    id: 4,
    title: 'Customer Insights Dashboard',
    description: 'Comprehensive customer behavior analysis and segmentation',
    type: 'Tableau',
    icon: PieChart,
    embedUrl: 'https://placeholder-embed.com', // PLACEHOLDER
    tags: ['Tableau', 'SQL', 'Python'],
    metrics: ['10+ Segments', 'Behavioral Analysis', 'Churn Prediction']
  }
]

export default function Dashboards() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedDashboard, setSelectedDashboard] = useState(dashboards[0])

  return (
    <section id="dashboards" className="py-20 relative overflow-hidden">
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
            <span className="text-gradient">Dashboards & Visualizations</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Interactive dashboards and data visualizations that drive decision-making
          </p>
        </motion.div>

        {/* Dashboard Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-8"
        >
          {dashboards.map((dashboard, index) => (
            <motion.button
              key={dashboard.id}
              onClick={() => setSelectedDashboard(dashboard)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
                selectedDashboard.id === dashboard.id
                  ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg'
                  : 'glass-effect text-gray-300 hover:bg-white/10'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            >
              <dashboard.icon size={20} />
              <span className="hidden sm:inline">{dashboard.title}</span>
              <span className="sm:hidden">{dashboard.type}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Dashboard Display */}
        <motion.div
          key={selectedDashboard.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="glass-effect rounded-2xl overflow-hidden"
        >
          {/* Dashboard Info */}
          <div className="p-6 border-b border-white/10">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">{selectedDashboard.title}</h3>
                <p className="text-gray-400">{selectedDashboard.description}</p>
              </div>
              <span className="px-4 py-2 bg-primary-500/20 text-primary-400 rounded-lg font-semibold">
                {selectedDashboard.type}
              </span>
            </div>

            {/* Metrics */}
            <div className="flex flex-wrap gap-4 mb-4">
              {selectedDashboard.metrics.map((metric) => (
                <div key={metric} className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-primary-400 rounded-full" />
                  <span className="text-gray-300">{metric}</span>
                </div>
              ))}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {selectedDashboard.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-white/5 rounded-full text-sm text-gray-300 border border-white/10"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Dashboard Embed Placeholder */}
          <div className="relative h-[600px] bg-gradient-to-br from-primary-500/10 to-accent-500/10">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <selectedDashboard.icon size={80} className="text-gray-600 mx-auto mb-4" />
                <p className="text-gray-500 text-lg mb-2">Dashboard Embed Placeholder</p>
                <p className="text-gray-600 text-sm max-w-md">
                  {/* PLACEHOLDER: Replace with actual iframe embed */}
                  Replace this section with your actual Power BI, Tableau, Streamlit, or Grafana embed code
                </p>
                <div className="mt-6 p-4 glass-effect rounded-lg inline-block">
                  <code className="text-xs text-gray-400">
                    &lt;iframe src="{selectedDashboard.embedUrl}" /&gt;
                  </code>
                </div>
              </div>
            </div>
            
            {/* Simulated Dashboard Elements */}
            <div className="absolute inset-0 p-8 opacity-20">
              <div className="grid grid-cols-4 gap-4 mb-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="glass-effect rounded-lg p-4 h-24" />
                ))}
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="glass-effect rounded-lg h-64" />
                <div className="glass-effect rounded-lg h-64" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 mb-4">
            These dashboards are built using modern BI and visualization tools
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {['Power BI', 'Tableau', 'Streamlit', 'Grafana', 'Plotly', 'D3.js'].map((tool) => (
              <span
                key={tool}
                className="px-4 py-2 glass-effect rounded-lg text-gray-300"
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
