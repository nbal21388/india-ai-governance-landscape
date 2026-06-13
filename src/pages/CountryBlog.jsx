import { indiaData } from '../data/india'

const tagColors = [
  'bg-purple-900/40 text-purple-300 border border-purple-800/40',
  'bg-violet-900/40 text-violet-300 border border-violet-800/40',
  'bg-fuchsia-900/40 text-fuchsia-300 border border-fuchsia-800/40',
  'bg-indigo-900/40 text-indigo-300 border border-indigo-800/40',
  'bg-pink-900/40 text-pink-300 border border-pink-800/40',
]

function tagClass(i) {
  return tagColors[i % tagColors.length]
}

export default function CountryBlog() {
  const { blogPosts } = indiaData
  const sorted = [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date))
  const [featured, ...rest] = sorted

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white tracking-tight mb-2">
          India AI Governance — Blog & Updates
        </h1>
        <p className="text-purple-400 text-sm">
          Analysis, commentary, and news on AI governance developments in India.
        </p>
      </div>

      <div className="mb-6 bg-gradient-to-br from-purple-900/30 to-violet-900/20 border border-purple-700/50 rounded-2xl p-7 hover:border-purple-600/70 transition-colors group">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[10px] font-bold text-purple-400 bg-purple-900/50 border border-purple-800/50 px-2 py-0.5 rounded-full uppercase tracking-widest">
            Latest
          </span>
          <span className="text-purple-600 text-xs font-mono">{featured.date}</span>
        </div>
        <h2 className="text-white font-bold text-lg leading-snug mb-3">{featured.title}</h2>
        <p className="text-purple-200/80 text-sm leading-relaxed mb-4">{featured.summary}</p>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-1.5">
            {featured.tags.map((tag, i) => (
              <span key={tag} className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${tagClass(i)}`}>
                {tag}
              </span>
            ))}
          </div>
          <a
            href={featured.readMoreUrl}
            className="text-purple-300 hover:text-white text-xs font-semibold transition-colors opacity-0 group-hover:opacity-100"
          >
            Read more →
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {rest.map((post) => (
          <div
            key={post.id}
            className="bg-[#130d2e] border border-purple-800/40 rounded-2xl p-5 hover:border-purple-700/60 transition-colors group flex flex-col"
          >
            <span className="text-purple-600 text-xs font-mono mb-2">{post.date}</span>
            <h3 className="text-white font-semibold text-sm leading-snug mb-2">{post.title}</h3>
            <p className="text-purple-200/60 text-xs leading-relaxed flex-1">{post.summary}</p>
            <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
              <div className="flex flex-wrap gap-1">
                {post.tags.map((tag, i) => (
                  <span key={tag} className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${tagClass(i)}`}>
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={post.readMoreUrl}
                className="text-purple-400 hover:text-white text-xs font-semibold transition-colors opacity-0 group-hover:opacity-100"
              >
                Read →
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 p-4 bg-purple-950/30 border border-purple-900/40 rounded-xl text-center">
        <p className="text-purple-500 text-xs">
          Blog posts are hardcoded for research purposes. Links point to # as placeholders.
          Want to contribute a post?{' '}
          <a href="/country/india/suggest" className="text-purple-300 hover:text-white underline">
            Suggest a submission
          </a>
          .
        </p>
      </div>
    </div>
  )
}
