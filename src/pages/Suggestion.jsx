import { useState } from 'react'

const categories = [
  'Missing actor or institution',
  'Outdated information',
  'New policy or guideline',
  'Incorrect data',
  'New governance gap',
  'Other',
]

export default function Suggestion() {
  const [form, setForm] = useState({ name: '', email: '', category: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Suggestion submitted:', form)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="max-w-xl mx-auto px-6 py-20 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-900/40 border border-purple-200 dark:border-purple-700 mb-6">
          <span className="text-3xl text-purple-600 dark:text-purple-300">✓</span>
        </div>
        <h2 className="text-purple-950 dark:text-white text-xl font-bold mb-2">Thank you!</h2>
        <p className="text-purple-600 dark:text-purple-300 text-sm leading-relaxed mb-6">
          Your suggestion has been logged. We review all submissions and update the profile periodically.
        </p>
        <button
          onClick={() => { setSubmitted(false); setForm({ name: '', email: '', category: '', message: '' }) }}
          className="px-5 py-2 bg-purple-700 hover:bg-purple-600 text-white text-sm font-medium rounded-xl transition-colors"
        >
          Submit another
        </button>
      </div>
    )
  }

  const inputClass = "w-full bg-[var(--bg-card)] border border-purple-200 dark:border-purple-800/60 rounded-xl px-4 py-2.5 text-sm text-purple-950 dark:text-white placeholder-purple-300 dark:placeholder-purple-600 focus:outline-none focus:border-purple-400 dark:focus:border-purple-500 transition-colors shadow-sm dark:shadow-none"

  return (
    <div className="max-w-2xl mx-auto px-6 py-10">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-purple-950 dark:text-white tracking-tight mb-2">Suggest an Edit</h1>
        <p className="text-purple-500 dark:text-purple-400 text-sm leading-relaxed">
          Help us keep the India AI Governance Landscape accurate and up to date. All suggestions are reviewed by our editorial team.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-purple-500 dark:text-purple-300 text-xs font-medium mb-1.5 uppercase tracking-widest">
              Name <span className="text-purple-300 dark:text-purple-600">(optional)</span>
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className={inputClass}
            />
          </div>
          <div>
            <label className="block text-purple-500 dark:text-purple-300 text-xs font-medium mb-1.5 uppercase tracking-widest">
              Email <span className="text-purple-300 dark:text-purple-600">(optional)</span>
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="your@email.com"
              className={inputClass}
            />
          </div>
        </div>

        <div>
          <label className="block text-purple-500 dark:text-purple-300 text-xs font-medium mb-1.5 uppercase tracking-widest">
            Category <span className="text-red-400">*</span>
          </label>
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            required
            className={inputClass + ' appearance-none'}
          >
            <option value="" disabled>Select a category…</option>
            {categories.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-purple-500 dark:text-purple-300 text-xs font-medium mb-1.5 uppercase tracking-widest">
            Your suggestion <span className="text-red-400">*</span>
          </label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            rows={6}
            placeholder="Describe what should be added, changed, or corrected. Include links or sources if possible."
            className={inputClass + ' resize-none leading-relaxed'}
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-purple-700 hover:bg-purple-600 active:bg-purple-800 text-white font-semibold text-sm rounded-xl transition-colors"
        >
          Submit Suggestion
        </button>
      </form>

      <p className="mt-6 text-purple-400 dark:text-purple-600 text-xs text-center">
        No backend — submissions are logged to the console for now. Data shown is for research purposes only.
      </p>
    </div>
  )
}
