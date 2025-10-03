import { motion } from "framer-motion";

const metrics = [
  {
    value: "6+",
    label: "Years Experience",
    description: "Building scalable web applications",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    value: "200K+",
    label: "Users Served",
    description: "Across production platforms",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
  {
    value: "70%",
    label: "Performance Gains",
    description: "Load time improvements",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    value: "100%",
    label: "Conversion Increase",
    description: "Through UX optimization",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
    ),
  },
];

export default function ImpactMetrics({ delay = 0 }) {
  return (
    <section className="mb-12">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: delay }}
        className="mb-4"
      >
        <h2 className="text-xl text-gray-300 font-bold">Impact at a Glance</h2>
      </motion.div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            className="metric-card bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-800 rounded-lg p-4 hover:border-gray-700 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: delay + 0.1 + index * 0.1 }}
          >
            <div className="flex items-start justify-between mb-2">
              <div className="text-blue-400">{metric.icon}</div>
            </div>
            <div className="text-3xl font-bold text-white mb-1">
              {metric.value}
            </div>
            <div className="text-sm font-semibold text-gray-300 mb-1">
              {metric.label}
            </div>
            <div className="text-xs text-gray-500">{metric.description}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
