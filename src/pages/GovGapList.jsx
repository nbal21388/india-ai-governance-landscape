import { indiaData } from '../data/india'

export default function GovGapList() {
  const { gaps, safetyConcerns, interventions } = indiaData

  return (
    <div className="max-w-4xl mx-auto px-6 py-10 space-y-14">
      <section>
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-amber-400 text-lg">⚠</span>
            <h1 className="text-2xl font-bold text-white tracking-tight">Governance Gaps</h1>
          </div>
          <p className="text-purple-400 text-sm">
            The top three structural gaps in India's AI governance, tied to cultural norms and geopolitical context.
          </p>
        </div>

        <div className="space-y-4">
          {gaps.map((gap, i) => (
            <div
              key={gap.id}
              className="bg-[#130d2e] border border-amber-900/40 rounded-2xl p-6 hover:border-amber-800/60 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-900/40 border border-amber-700/50 flex items-center justify-center text-amber-400 font-bold text-sm">
                  {i + 1}
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold text-base mb-2">{gap.title}</h3>
                  <p className="text-purple-200/80 text-sm leading-relaxed mb-3">{gap.description}</p>
                  <div className="bg-amber-950/30 border border-amber-900/30 rounded-xl p-3">
                    <p className="text-xs text-amber-400/80 font-semibold uppercase tracking-widest mb-1">
                      Cultural & Geopolitical Context
                    </p>
                    <p className="text-amber-200/70 text-xs leading-relaxed">{gap.context}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-red-400 text-lg">🛡</span>
            <h2 className="text-xl font-bold text-white tracking-tight">AI Safety Concerns</h2>
          </div>
          <p className="text-purple-400 text-sm">
            Safety risks unique to India's scale, infrastructure, and social context.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {safetyConcerns.map((concern, i) => (
            <div
              key={concern.id}
              className="bg-[#130d2e] border border-red-900/40 rounded-2xl p-5 hover:border-red-800/60 transition-colors"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-red-400 uppercase tracking-widest">
                  Concern {i + 1}
                </span>
              </div>
              <h3 className="text-white font-semibold text-sm mb-2 leading-snug">{concern.title}</h3>
              <p className="text-purple-200/60 text-xs leading-relaxed">{concern.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-emerald-400 text-lg">✦</span>
            <h2 className="text-xl font-bold text-white tracking-tight">Targeted Interventions</h2>
          </div>
          <p className="text-purple-400 text-sm">
            Specific, actionable interventions tailored to India's governance context — not generic best practices.
          </p>
        </div>

        <div className="space-y-4">
          {interventions.map((intervention, i) => (
            <div
              key={intervention.id}
              className="bg-[#130d2e] border border-emerald-900/40 rounded-2xl p-6 hover:border-emerald-800/60 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-900/40 border border-emerald-700/50 flex items-center justify-center text-emerald-400 font-bold text-sm">
                  {i + 1}
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold text-base mb-2">{intervention.title}</h3>
                  <p className="text-purple-200/80 text-sm leading-relaxed mb-3">{intervention.description}</p>
                  <div className="bg-emerald-950/30 border border-emerald-900/30 rounded-xl p-3">
                    <p className="text-xs text-emerald-400/80 font-semibold uppercase tracking-widest mb-1">
                      Why This Intervention
                    </p>
                    <p className="text-emerald-200/70 text-xs leading-relaxed">{intervention.rationale}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
