import { Routes, Route } from 'react-router-dom'
import { useTheme } from './context/ThemeContext'
import Navbar from './components/Navbar'
import CountrySelector from './pages/CountrySelector'
import CountryHome from './pages/CountryHome'
import KeySectors from './pages/KeySectors'
import GovGuidelineList from './pages/GovGuidelineList'
import GovGapList from './pages/GovGapList'
import Suggestion from './pages/Suggestion'
import CountryBlog from './pages/CountryBlog'

export default function App() {
  const { isDark } = useTheme()

  return (
    <div
      data-theme={isDark ? 'dark' : 'light'}
      className="min-h-screen bg-[var(--bg-page)] text-purple-950 dark:text-white transition-colors duration-150"
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<CountrySelector />} />
        <Route path="/country/india" element={<CountryHome />} />
        <Route path="/country/india/sectors" element={<KeySectors />} />
        <Route path="/country/india/guidelines" element={<GovGuidelineList />} />
        <Route path="/country/india/gaps" element={<GovGapList />} />
        <Route path="/country/india/blog" element={<CountryBlog />} />
        <Route path="/country/india/suggest" element={<Suggestion />} />
      </Routes>
    </div>
  )
}
