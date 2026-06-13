import { useState } from 'react'
import { indiaData } from '../data/india'

const typeColors = {
  Policy:       'bg-purple-100 text-purple-700 dark:bg-purple-900/50 dark:text-purple-300',
  Advisory:     'bg-violet-100 text-violet-700 dark:bg-violet-900/50 dark:text-violet-300',
  Report:       'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300',
  Research:     'bg-fuchsia-100 text-fuchsia-700 dark:bg-fuchsia-900/50 dark:text-fuchsia-300',
  Framework:    'bg-pink-100 text-pink-700 dark:bg-pink-900/50 dark:text-pink-300',
  Guidelines:   'bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300',
  Statement:    'bg-sky-100 text-sky-700 dark:bg-sky-900/50 dark:text-sky-300',
  Programme:    'bg-teal-100 text-teal-700 dark:bg-teal-900/50 dark:text-teal-300',
  Procurement:  'bg-orange-100 text-orange-700 dark:bg-orange-900/50 dark:text-orange-300',
  Partnership:  'bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300',
  Charter:      'bg-rose-100 text-rose-700 dark:bg-rose-900/50 dark:text-rose-300',
  Dataset:      'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/50 dark:text-yellow-300',
  Submission:   'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/50 dark:text-cyan-300',
  Registry:     'bg-lime-100 text-lime-700 dark:bg-lime-900/50 dark:text-lime-300',
  Legislation:  'bg-red-100 text-red-700 dark:bg-red-900/50 dark:text-red-300',
  Milestone:    'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300',
  Event:        'bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-300',
  Sandbox:      'bg-purple-100 text-purple-700 dark:bg-purple-900/50 dark:text-purple-300',
  Declaration:  'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300',
  Consultation: 'bg-violet-100 text-violet-700 dark:bg-violet-900/50 dark:text-violet-300',
  Product:      'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/50 dark:text-cyan-300',
}

function getTypeClass(type) {
  return typeColors[type] || 'bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300'
}

export default function KeySectors() {
  const { sectors, actors } = indiaData
  const [selectedSector, setSelectedSector] = useState(null)
  const [selectedActor, setSelectedActor] = useState(null)

  const closeSector = () => { setSelectedSector(null); setSelectedActor(null) }
  const closeActor = () => setSelectedActor(null)

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-purple-950 dark:text-white tracking-tight mb-2">Key Sectors</h1>
        <p className="text-purple-500 dark:text-purple-400 text-sm">
          Select a sector to explore the key actors and institutions shaping AI governance in India.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {sectors.map((sector) => (
          <button
            key={sector.id}
            onClick={() => { setSelectedSector(sector); setSelectedActor(null) }}
            className={`group text-left bg-gradient-to-br ${sector.color} border ${sector.border} rounded-2xl p-6 hover:scale-[1.02] transition-all duration-200 hover:shadow-xl hover:shadow-purple-100 dark:hover:shadow-purple-950/50`}
          >
            <div className="text-3xl mb-3">{sector.icon}</div>
            <h3 className="text-purple-950 dark:text-white font-semibold text-base mb-1">{sector.name}</h3>
            <p className="text-purple-500 dark:text-purple-200/60 text-xs leading-relaxed">{sector.description}</p>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-xs text-purple-400 dark:text-purple-400">
                {actors[sector.id]?.length || 0} actors
              </span>
              <span className="text-purple-500 dark:text-purple-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                Explore →
              </span>
            </div>
          </button>
        ))}
      </div>

      {selectedSector && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 dark:bg-black/70 backdrop-blur-sm">
          <div className="bg-[var(--bg-card)] border border-purple-200 dark:border-purple-800/60 rounded-2xl shadow-2xl shadow-purple-200/30 dark:shadow-purple-900/50 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            {!selectedActor ? (
              <>
                <div className="flex items-center justify-between p-6 border-b border-purple-100 dark:border-purple-900/50">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{selectedSector.icon}</span>
                    <div>
                      <h2 className="text-purple-950 dark:text-white font-bold text-lg">{selectedSector.name}</h2>
                      <p className="text-purple-400 dark:text-purple-400 text-xs mt-0.5">
                        {actors[selectedSector.id]?.length || 0} key actors
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={closeSector}
                    className="text-purple-400 hover:text-purple-900 dark:hover:text-white transition-colors text-xl font-light w-8 h-8 flex items-center justify-center rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/30"
                  >
                    ✕
                  </button>
                </div>

                <div className="p-4 space-y-2">
                  {(actors[selectedSector.id] || []).map((actor) => (
                    <button
                      key={actor.id}
                      onClick={() => setSelectedActor(actor)}
                      className="w-full text-left p-4 bg-purple-50 dark:bg-purple-900/20 hover:bg-purple-100 dark:hover:bg-purple-900/40 border border-purple-100 dark:border-purple-800/40 hover:border-purple-300 dark:hover:border-purple-700/60 rounded-xl transition-all group"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-purple-950 dark:text-white font-semibold text-sm">{actor.name}</div>
                          <div className="text-purple-500 dark:text-purple-400 text-xs mt-0.5">{actor.fullName}</div>
                        </div>
                        <span className="text-purple-400 dark:text-purple-500 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                          →
                        </span>
                      </div>
                      <p className="text-purple-500 dark:text-purple-300/60 text-xs mt-2 line-clamp-2 leading-relaxed">
                        {actor.summary}
                      </p>
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <>
                <div className="flex items-center justify-between p-6 border-b border-purple-100 dark:border-purple-900/50">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={closeActor}
                      className="text-purple-500 hover:text-purple-900 dark:hover:text-white text-sm transition-colors flex items-center gap-1"
                    >
                      ← Back
                    </button>
                    <span className="text-purple-300 dark:text-purple-700">|</span>
                    <div>
                      <h2 className="text-purple-950 dark:text-white font-bold text-lg">{selectedActor.name}</h2>
                      <p className="text-purple-400 text-xs">{selectedActor.fullName}</p>
                    </div>
                  </div>
                  <button
                    onClick={closeSector}
                    className="text-purple-400 hover:text-purple-900 dark:hover:text-white transition-colors text-xl font-light w-8 h-8 flex items-center justify-center rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/30"
                  >
                    ✕
                  </button>
                </div>

                <div className="p-6 space-y-6">
                  <div>
                    <h3 className="text-purple-400 dark:text-purple-400 text-xs font-semibold uppercase tracking-widest mb-2">
                      Executive Summary
                    </h3>
                    <p className="text-purple-800 dark:text-purple-100/80 text-sm leading-relaxed">{selectedActor.summary}</p>
                  </div>

                  <div>
                    <h3 className="text-purple-400 dark:text-purple-400 text-xs font-semibold uppercase tracking-widest mb-2">
                      Official Website
                    </h3>
                    <a
                      href={selectedActor.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-300 hover:text-purple-900 dark:hover:text-white text-sm underline underline-offset-4 transition-colors"
                    >
                      {selectedActor.url}
                      <span className="text-xs">↗</span>
                    </a>
                  </div>

                  <div>
                    <h3 className="text-purple-400 dark:text-purple-400 text-xs font-semibold uppercase tracking-widest mb-3">
                      Recent Activity
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-xs">
                        <thead>
                          <tr className="border-b border-purple-100 dark:border-purple-900/60">
                            <th className="text-left py-2 pr-4 text-purple-400 font-medium w-24">Date</th>
                            <th className="text-left py-2 pr-4 text-purple-400 font-medium">Document / Activity</th>
                            <th className="text-left py-2 text-purple-400 font-medium w-28">Type</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-purple-100 dark:divide-purple-900/30">
                          {selectedActor.recentActivity.map((item, i) => (
                            <tr key={i} className="hover:bg-purple-50 dark:hover:bg-purple-900/10 transition-colors">
                              <td className="py-2.5 pr-4 text-purple-400 font-mono whitespace-nowrap">
                                {item.date}
                              </td>
                              <td className="py-2.5 pr-4">
                                <a
                                  href={item.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-purple-700 dark:text-purple-200 hover:text-purple-950 dark:hover:text-white transition-colors hover:underline"
                                >
                                  {item.title}
                                </a>
                              </td>
                              <td className="py-2.5">
                                <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium ${getTypeClass(item.type)}`}>
                                  {item.type}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
