import { indiaData } from '../data/india'

const typeStyles = {
  Legislation: 'bg-red-900/40 text-red-300 border border-red-800/40',
  'National Mission': 'bg-purple-900/40 text-purple-300 border border-purple-800/40',
  Advisory: 'bg-violet-900/40 text-violet-300 border border-violet-800/40',
  'Industry Framework': 'bg-fuchsia-900/40 text-fuchsia-300 border border-fuchsia-800/40',
  'Government Report': 'bg-indigo-900/40 text-indigo-300 border border-indigo-800/40',
  'National Strategy': 'bg-blue-900/40 text-blue-300 border border-blue-800/40',
}

const statusDot = {
  Enacted: 'bg-green-400',
  Active: 'bg-emerald-400',
  Reference: 'bg-purple-400',
}

export default function GovGuidelineList() {
  const { guidelines } = indiaData
  const sorted = [...guidelines].sort((a, b) => new Date(b.date) - new Date(a.date))

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white tracking-tight mb-2">
          AI Guidelines & Policies
        </h1>
        <p className="text-purple-400 text-sm">
          India's existing AI laws, policy frameworks, and governance documents — most recent first.
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-3 top-0 bottom-0 w-px bg-purple-900/60"></div>

        <div className="space-y-6">
          {sorted.map((g) => (
            <div key={g.id} className="relative pl-10">
              <div className="absolute left-1.5 top-4 w-3 h-3 rounded-full bg-purple-700 border-2 border-purple-500 z-10"></div>

              <div className="bg-[#130d2e] border border-purple-800/50 rounded-2xl p-6 hover:border-purple-700/70 transition-colors">
                <div className="flex flex-wrap items-start gap-2 mb-3">
                  <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${typeStyles[g.type] || 'bg-purple-900/40 text-purple-300 border border-purple-800/40'}`}>
                    {g.type}
                  </span>
                  <span className={`flex items-center gap-1.5 text-[10px] font-medium px-2 py-0.5 rounded-full bg-[#0d0820] border border-purple-900/50 text-purple-400`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${statusDot[g.status] || 'bg-purple-400'}`}></span>
                    {g.status}
                  </span>
                  <span className="ml-auto text-purple-500 text-xs font-mono">{g.date}</span>
                </div>

                <h2 className="text-white font-bold text-base mb-2 leading-snug">{g.title}</h2>
                <p className="text-purple-200/70 text-sm leading-relaxed">{g.description}</p>

                <div className="mt-4 pt-4 border-t border-purple-900/40">
                  <a
                    href={g.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-purple-400 hover:text-purple-200 text-xs transition-colors group"
                  >
                    <span className="underline underline-offset-2">Source document</span>
                    <span className="text-purple-600 group-hover:text-purple-400 transition-colors">↗</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 p-5 bg-purple-950/30 border border-purple-900/40 rounded-2xl">
        <h3 className="text-purple-300 font-semibold text-sm mb-3">Additional Resources</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {[
            ['MeitY Official Portal', 'https://www.meity.gov.in'],
            ['IndiaAI Mission', 'https://indiaai.gov.in'],
            ['NITI Aayog AI Hub', 'https://niti.gov.in'],
            ['NASSCOM Policy Hub', 'https://nasscom.in/policy'],
          ].map(([label, url]) => (
            <a
              key={url}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between px-4 py-2.5 bg-purple-900/20 hover:bg-purple-900/40 border border-purple-800/30 rounded-xl text-purple-300 hover:text-white text-xs transition-all group"
            >
              <span>{label}</span>
              <span className="text-purple-600 group-hover:text-purple-300 transition-colors">↗</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
