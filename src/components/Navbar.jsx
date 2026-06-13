import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

const countryNav = [
  { label: 'Overview', to: '/country/india' },
  { label: 'Key Sectors', to: '/country/india/sectors' },
  { label: 'Guidelines', to: '/country/india/guidelines' },
  { label: 'Governance Gaps', to: '/country/india/gaps' },
  { label: 'News', to: '/country/india/blog' },
  { label: 'Suggest an Edit', to: '/country/india/suggest' },
]

function SunIcon() {
  return (
    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <circle cx="12" cy="12" r="4" />
      <path strokeLinecap="round" d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
  )
}

export default function Navbar() {
  const location = useLocation()
  const { isDark, toggle } = useTheme()
  const isCountryPage = location.pathname.startsWith('/country/india')

  return (
    <nav className="sticky top-0 z-50 bg-[var(--bg-nav)] border-b border-purple-200 dark:border-purple-900/60 backdrop-blur-sm transition-colors duration-150">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-14">
          <Link
            to="/"
            className="flex items-center gap-2 text-purple-600 dark:text-purple-300 font-semibold text-base tracking-wide hover:text-purple-900 dark:hover:text-white transition-colors"
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
                        ? 'bg-purple-100 dark:bg-purple-700/40 text-purple-800 dark:text-purple-200'
                        : 'text-purple-500 dark:text-purple-400 hover:text-purple-900 dark:hover:text-white hover:bg-purple-50 dark:hover:bg-purple-900/30'
                    }`}
                  >
                    {label}
                  </Link>
                )
              })}
            </div>
          )}

          <div className="flex items-center gap-2">
            <button
              onClick={toggle}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              className="flex items-center gap-1.5 h-7 px-2.5 rounded-full border border-purple-200 dark:border-purple-700/60 bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 hover:border-purple-400 dark:hover:border-purple-500 hover:bg-purple-100 dark:hover:bg-purple-800/40 transition-colors text-xs font-medium"
            >
              {isDark ? <SunIcon /> : <MoonIcon />}
              <span className="hidden sm:inline">{isDark ? 'Light' : 'Dark'}</span>
            </button>

            {isCountryPage && (
              <div className="flex items-center gap-2 bg-purple-100 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-800/50 rounded-full px-3 py-1">
                <span className="text-base">🇮🇳</span>
                <span className="text-sm text-purple-700 dark:text-purple-200 font-medium">India</span>
              </div>
            )}

            {!isCountryPage && (
              <span className="text-xs text-purple-400 dark:text-purple-600 font-medium uppercase tracking-widest hidden sm:block">
                Select a country
              </span>
            )}
          </div>
        </div>
      </div>

      {isCountryPage && (
        <div className="md:hidden flex gap-1 px-4 pb-2 overflow-x-auto">
          {countryNav.map(({ label, to }) => {
            const active = location.pathname === to
            return (
              <Link
                key={to}
                to={to}
                className={`whitespace-nowrap px-3 py-1 rounded-md text-xs font-medium transition-colors ${
                  active
                    ? 'bg-purple-100 dark:bg-purple-700/40 text-purple-800 dark:text-purple-200'
                    : 'text-purple-400 dark:text-purple-500 hover:text-purple-900 dark:hover:text-white hover:bg-purple-50 dark:hover:bg-purple-900/30'
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
