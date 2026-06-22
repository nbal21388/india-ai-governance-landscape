import { Link } from 'react-router-dom'
import { indiaData } from '../data/india'

const sections = [
  {
    label: 'Key Sectors',
    to: '/country/india/sectors',
    icon: '⬡',
    description: 'Explore sectors and key actors shaping AI in India.',
    color: 'from-purple-100 to-purple-50 dark:from-purple-800/40 dark:to-purple-900/20',
    border: 'border-purple-200 dark:border-purple-700/50',
    accent: 'text-purple-600 dark:text-purple-400',
  },
  {
    label: 'Guidelines & Policies',
    to: '/country/india/guidelines',
    icon: '📋',
    description: 'India\'s AI laws, frameworks, and policy documents.',
    color: 'from-violet-100 to-violet-50 dark:from-violet-800/40 dark:to-violet-900/20',
    border: 'border-violet-200 dark:border-violet-700/50',
    accent: 'text-violet-600 dark:text-violet-400',
  },
  {
    label: 'Governance Gaps',
    to: '/country/india/gaps',
    icon: '⚠',
    description: 'Identified gaps, safety concerns, and targeted interventions.',
    color: 'from-fuchsia-100 to-fuchsia-50 dark:from-fuchsia-800/40 dark:to-fuchsia-900/20',
    border: 'border-fuchsia-200 dark:border-fuchsia-700/50',
    accent: 'text-fuchsia-600 dark:text-fuchsia-400',
  },
  {
    label: 'News & Updates',
    to: '/country/india/blog',
    icon: '✦',
    description: 'Latest analysis and news on AI governance in India.',
    color: 'from-indigo-100 to-indigo-50 dark:from-indigo-800/40 dark:to-indigo-900/20',
    border: 'border-indigo-200 dark:border-indigo-700/50',
    accent: 'text-indigo-600 dark:text-indigo-400',
  },
  {
    label: 'Suggest an Edit',
    to: '/country/india/suggest',
    icon: '✎',
    description: 'Help us keep this profile accurate and up to date.',
    color: 'from-pink-100 to-pink-50 dark:from-pink-800/40 dark:to-pink-900/20',
    border: 'border-pink-200 dark:border-pink-700/50',
    accent: 'text-pink-600 dark:text-pink-400',
  },
]

const { meta } = indiaData

export default function CountryHome() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <div className="mb-10">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-5xl">{meta.flag}</span>
          <div>
            <h1 className="text-3xl font-bold text-purple-950 dark:text-white tracking-tight">{meta.name}</h1>
            <p className="text-purple-500 dark:text-purple-400 text-sm mt-1 italic">{meta.tagline}</p>
          </div>
        </div>

        <p className="text-purple-700 dark:text-purple-200/80 text-sm leading-relaxed max-w-3xl">
          {meta.overview}
        </p>

        <div className="flex flex-wrap gap-3 mt-6">
          {[
            ['Sectors', meta.stats.sectors],
            ['Governance Frameworks', meta.stats.guidelines],
            ['Governance Gaps', meta.stats.gaps],
            ['Safety Concerns', meta.stats.safetyConcerns],
            ['Targeted Interventions', meta.stats.interventions],
            ['News Posts', meta.stats.blogPosts],
          ].map(([label, value]) => (
            <div
              key={label}
              className="bg-purple-50 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-800/50 rounded-xl px-4 py-2 text-center"
            >
              <div className="text-xl font-bold text-purple-700 dark:text-purple-300">{value}</div>
              <div className="text-xs text-purple-400 dark:text-purple-500 mt-0.5">{label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {sections.map(({ label, to, icon, description, color, border, accent }) => (
          <Link
            key={to}
            to={to}
            className={`group relative bg-gradient-to-br ${color} border ${border} rounded-2xl p-5 hover:scale-[1.02] transition-all duration-200 hover:shadow-lg hover:shadow-purple-100 dark:hover:shadow-purple-900/30`}
          >
            <div className={`text-2xl mb-3 ${accent}`}>{icon}</div>
            <h3 className="text-purple-950 dark:text-white font-semibold text-sm mb-1">{label}</h3>
            <p className="text-purple-500 dark:text-purple-300/70 text-xs leading-relaxed">{description}</p>
            <span className={`absolute bottom-4 right-4 text-sm ${accent} opacity-0 group-hover:opacity-100 transition-opacity`}>
              →
            </span>
          </Link>
        ))}
      </div>

      <div className="mt-10 p-4 bg-purple-50 dark:bg-purple-950/40 border border-purple-100 dark:border-purple-900/50 rounded-xl text-center">
        <p className="text-purple-400 dark:text-purple-400 text-xs">
          Data last updated: June 2025 · Data compiled for research purposes · Built at Breaking Barriers to AI Safety Hackathon by the London Initiative of AI Safety ·{' '}
          <Link to="/country/india/suggest" className="text-purple-600 dark:text-purple-300 hover:text-purple-900 dark:hover:text-white underline">
            Suggest a correction
          </Link>
        </p>
      </div>
    </div>
  )
}
