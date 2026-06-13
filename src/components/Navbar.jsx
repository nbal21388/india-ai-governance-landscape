import { Link, useLocation } from 'react-router-dom'

const countryNav = [
  { label: 'Overview', to: '/country/india' },
  { label: 'Key Sectors', to: '/country/india/sectors' },
  { label: 'Guidelines', to: '/country/india/guidelines' },
  { label: 'Governance Gaps', to: '/country/india/gaps' },
  { label: 'Blog', to: '/country/india/blog' },
  { label: 'Suggest an Edit', to: '/country/india/suggest' },
]

export default function Navbar() {
  const location = useLocation()
  const isCountryPage = location.pathname.startsWith('/country/india')

  return (
    <nav className="sticky top-0 z-50 bg-[#09051a] border-b border-purple-900/60 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-14">
          <Link
            to="/"
            className="flex items-center gap-2 text-purple-300 font-semibold text-base tracking-wide hover:text-white transition-colors"
          >
            <span className="text-purple-500 text-lg">◈</span>
            AI Governance Landscape
          </Link>

          {isCountryPage && (
            <div className="hidden md:flex items-center gap-1">
              {countryNav.map(({ label, to }) => {
                const active = location.pathname === to
                return (
                  <Link
                    key={to}
                    to={to}
                    className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                      active
                        ? 'bg-purple-700/40 text-purple-200'
                        : 'text-purple-400 hover:text-white hover:bg-purple-900/30'
                    }`}
                  >
                    {label}
                  </Link>
                )
              })}
            </div>
          )}

          {isCountryPage ? (
            <div className="flex items-center gap-2 bg-purple-900/30 border border-purple-800/50 rounded-full px-3 py-1">
              <span className="text-base">🇮🇳</span>
              <span className="text-sm text-purple-200 font-medium">India</span>
            </div>
          ) : (
            <span className="text-xs text-purple-600 font-medium uppercase tracking-widest">
              Select a country
            </span>
          )}
        </div>
      </div>

      {isCountryPage && (
        <div className="md:hidden flex gap-1 px-4 pb-2 overflow-x-auto scrollbar-hide">
          {countryNav.map(({ label, to }) => {
            const active = location.pathname === to
            return (
              <Link
                key={to}
                to={to}
                className={`whitespace-nowrap px-3 py-1 rounded-md text-xs font-medium transition-colors ${
                  active
                    ? 'bg-purple-700/40 text-purple-200'
                    : 'text-purple-500 hover:text-white hover:bg-purple-900/30'
                }`}
              >
                {label}
              </Link>
            )
          })}
        </div>
      )}
    </nav>
  )
}
