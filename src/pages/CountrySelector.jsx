import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from 'react-simple-maps'

const GEO_URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json'

const availableCountries = [
  {
    name: 'India',
    slug: 'india',
    flag: '🇮🇳',
    coordinates: [78.96, 20.59],
    tagline: 'Building an AI-Powered $5 Trillion Economy',
    stats: ['5 Key Sectors', '6 Frameworks', '3 Governance Gaps'],
  },
]

const sectionLinks = [
  { label: 'Key Sectors', path: '/country/india/sectors', icon: '⬡' },
  { label: 'Guidelines', path: '/country/india/guidelines', icon: '📋' },
  { label: 'Governance Gaps', path: '/country/india/gaps', icon: '⚠' },
  { label: 'Blog', path: '/country/india/blog', icon: '✦' },
]

export default function CountrySelector() {
  const [selected, setSelected] = useState(null)
  const navigate = useNavigate()

  return (
    <div className="relative" style={{ height: 'calc(100vh - 56px)' }}>
      <div className="absolute inset-0 bg-[#0d0820]">
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{ scale: 160, center: [20, 15] }}
          style={{ width: '100%', height: '100%' }}
        >
          <ZoomableGroup>
            <Geographies geography={GEO_URL}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="#1a0f3a"
                    stroke="#2d1b69"
                    strokeWidth={0.4}
                    style={{
                      default: { outline: 'none' },
                      hover: { fill: '#2d1b55', outline: 'none' },
                      pressed: { outline: 'none' },
                    }}
                  />
                ))
              }
            </Geographies>

            {availableCountries.map((country) => (
              <Marker
                key={country.slug}
                coordinates={country.coordinates}
                onClick={() =>
                  setSelected(selected?.slug === country.slug ? null : country)
                }
                style={{ cursor: 'pointer' }}
              >
                <circle
                  r={8}
                  fill="#7c3aed"
                  stroke="#c4b5fd"
                  strokeWidth={2}
                  opacity={0.9}
                />
                <circle r={14} fill="#7c3aed" opacity={0.2} />
                <text
                  textAnchor="middle"
                  y={-16}
                  style={{
                    fontSize: 10,
                    fill: '#c4b5fd',
                    fontWeight: 600,
                    pointerEvents: 'none',
                    fontFamily: 'system-ui, sans-serif',
                  }}
                >
                  {country.name}
                </text>
              </Marker>
            ))}
          </ZoomableGroup>
        </ComposableMap>
      </div>

      <div className="absolute top-6 left-1/2 -translate-x-1/2 text-center pointer-events-none">
        <h1 className="text-2xl font-bold text-white mb-1 tracking-tight">
          AI Governance Landscape
        </h1>
        <p className="text-purple-400 text-sm">
          Click a highlighted country to explore its AI governance profile
        </p>
      </div>

      {selected && (
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[420px] max-w-[90vw] bg-[#130d2e] border border-purple-800/60 rounded-2xl shadow-2xl shadow-purple-900/40 p-6 z-50">
          <button
            onClick={() => setSelected(null)}
            className="absolute top-3 right-4 text-purple-500 hover:text-white text-lg font-light transition-colors"
          >
            ✕
          </button>

          <div className="flex items-center gap-3 mb-3">
            <span className="text-3xl">{selected.flag}</span>
            <div>
              <h2 className="text-white font-bold text-lg leading-tight">{selected.name}</h2>
              <p className="text-purple-400 text-xs mt-0.5">{selected.tagline}</p>
            </div>
          </div>

          <div className="flex gap-2 mb-4">
            {selected.stats.map((s) => (
              <span
                key={s}
                className="text-xs bg-purple-900/40 border border-purple-800/50 text-purple-300 px-2 py-0.5 rounded-full"
              >
                {s}
              </span>
            ))}
          </div>

          <button
            onClick={() => navigate(`/country/${selected.slug}`)}
            className="w-full mb-3 py-2.5 bg-purple-700 hover:bg-purple-600 text-white text-sm font-semibold rounded-xl transition-colors"
          >
            View Full Profile →
          </button>

          <div className="grid grid-cols-2 gap-2">
            {sectionLinks.map(({ label, path, icon }) => (
              <button
                key={path}
                onClick={() => navigate(path)}
                className="flex items-center gap-2 px-3 py-2 bg-purple-900/20 hover:bg-purple-900/40 border border-purple-800/40 rounded-lg text-purple-300 hover:text-white text-xs font-medium transition-colors text-left"
              >
                <span className="text-purple-500">{icon}</span>
                {label}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="absolute bottom-6 right-6 flex items-center gap-2">
        <span className="w-3 h-3 rounded-full bg-purple-600 border border-purple-400"></span>
        <span className="text-purple-500 text-xs">Data available</span>
      </div>
    </div>
  )
}
