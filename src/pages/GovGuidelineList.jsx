const sutras = [
  { name: 'Trust is the Foundation', description: 'Trust must be embedded across the full AI value chain.' },
  { name: 'People First', description: 'Human-centric design, human oversight, and human empowerment.' },
  { name: 'Innovation over Restraint', description: 'Responsible innovation should be prioritised over cautionary restraint.' },
  { name: 'Fairness & Equity', description: 'Promote inclusive development and avoid discrimination.' },
  { name: 'Accountability', description: 'Clear allocation of responsibility and enforcement of regulations.' },
  { name: 'Understandable by Design', description: 'Disclosures and explanations understandable by users and regulators.' },
  { name: 'Safety, Resilience & Sustainability', description: 'Safe, secure, robust systems, environmentally responsible.' },
]

const policies = [
  { name: 'Information Technology Act, 2000', year: '2000', status: 'Active', description: 'Primary digital regulation; sections on impersonation (66D) and intermediary obligations (79) apply to AI-generated content and deepfakes.' },
  { name: 'Bharatiya Nyaya Sanhita, 2023', year: '2023', status: 'Active', description: 'Covers identity theft, deepfakes, defamation, and obscene content — applicable to AI-enabled cybercrimes.' },
  { name: 'Digital Personal Data Protection Act, 2023', year: '2023', status: 'Active', description: 'Governs AI model training data, consent, purpose limitation, and data minimisation.' },
  { name: 'Consumer Protection Act, 2019', year: '2019', status: 'Active', description: 'Applies to misleading AI-driven services, dark patterns, and opaque algorithms in e-commerce.' },
  { name: 'NITI Aayog National Strategy for AI, 2018', year: '2018', status: 'Active', description: 'Early framework focusing on AI adoption across five sectors: healthcare, agriculture, education, smart cities, transport.' },
  { name: 'IndiaAI Mission, 2024', year: '2024', status: 'Active', description: 'Government initiative to democratise AI access — covers compute (38,000+ GPUs), datasets (AIKosh), foundation models, and skilling programs.' },
  { name: 'India AI Governance Guidelines, 2025', year: '2025', status: 'Active', description: 'MeitY framework covering seven sutras, six pillars of recommendations, institutional structure, and action plan.' },
  { name: 'RBI FREE-AI Committee Report, 2025', year: '2025', status: 'Active', description: 'AI governance framework for the financial sector; seven sutras for responsible and ethical AI.' },
  { name: 'SEBI Consultation Paper on AI/ML in Securities Markets, 2025', year: '2025', status: 'Active', description: 'Guidelines for responsible AI use in Indian securities markets.' },
  { name: 'IT Amendment on AI Classification & Liability', year: 'Forthcoming', status: 'Proposed', description: 'Planned update to the IT Act to define roles of AI developers/deployers and clarify liability regimes.' },
  { name: 'Text and Data Mining (TDM) Exception (Copyright)', year: 'Forthcoming', status: 'Under Development', description: 'DPIIT committee reviewing copyright law to enable large-scale AI model training while protecting rights holders.' },
  { name: 'AI Governance and Economic Group (AIGEG), 2026', year: '2026', status: 'Active', description: 'Newly constituted inter-ministerial body to steer national AI policy and replace/extend the AIGG proposed in the 2025 Guidelines.' },
]

const institutions = [
  { name: 'AI Governance and Economic Group (AIGEG)', role: 'Coordinates national AI policy', domain: 'Cross-sectoral' },
  { name: 'MeitY', role: 'Nodal ministry for AI regulation', domain: 'Technology' },
  { name: 'AI Safety Institute (AISI)', role: 'Safety research, standards, testing', domain: 'Technical' },
  { name: 'NITI Aayog', role: 'Strategic advisory', domain: 'Policy' },
  { name: 'CERT-In', role: 'Cybersecurity and incident monitoring', domain: 'Security' },
  { name: 'RBI', role: 'AI governance in financial sector', domain: 'Finance' },
  { name: 'SEBI', role: 'AI/ML oversight in securities markets', domain: 'Finance' },
  { name: 'ICMR', role: 'Ethical guidelines for AI in healthcare', domain: 'Health' },
  { name: 'Bureau of Indian Standards (BIS)', role: 'AI standards development', domain: 'Standards' },
]

const themes = [
  {
    title: 'Voluntary vs. Mandatory',
    body: 'India has deliberately avoided a prescriptive EU-style law, preferring voluntary frameworks that can become mandatory as the ecosystem matures. Debate continues over whether this is sufficient.',
    accent: 'border-l-4 border-violet-400 bg-violet-50 dark:border-violet-600 dark:bg-violet-950/30',
    label: 'text-violet-700 dark:text-violet-400',
  },
  {
    title: 'Development vs. Safety',
    body: 'Ground-level implementation reveals tension between India\'s ambition to lead in AI and ensuring ethical safeguards reach vulnerable groups including women, children, and rural communities.',
    accent: 'border-l-4 border-amber-400 bg-amber-50 dark:border-amber-600 dark:bg-amber-950/20',
    label: 'text-amber-700 dark:text-amber-400',
  },
  {
    title: 'Global South Leadership',
    body: 'India positions itself as a bridge between Western regulatory models and Global South priorities, particularly around democratising AI access and multilingual AI.',
    accent: 'border-l-4 border-emerald-400 bg-emerald-50 dark:border-emerald-600 dark:bg-emerald-950/20',
    label: 'text-emerald-700 dark:text-emerald-400',
  },
  {
    title: 'Techno-Legal Approach',
    body: 'India is pioneering the use of Digital Public Infrastructure (DPI) like Aadhaar and UPI as a governance mechanism — embedding compliance into technical architecture rather than relying solely on law.',
    accent: 'border-l-4 border-sky-400 bg-sky-50 dark:border-sky-600 dark:bg-sky-950/20',
    label: 'text-sky-700 dark:text-sky-400',
  },
]

const resources = [
  {
    title: 'India AI Governance Guidelines',
    type: 'Government Document',
    meta: 'MeitY, November 2025',
    url: 'https://static.pib.gov.in/WriteReadData/specificdocs/documents/2025/nov/doc2025115685601.pdf',
  },
  {
    title: 'India\'s AI Governance Landscape: Insights from Elite Stakeholder Interviews',
    type: 'Research Paper',
    meta: 'CHI EA \'26, April 2026',
    url: 'https://dl.acm.org/doi/10.1145/3772363.3798776',
  },
]

const statusBadge = {
  Active:             'bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-300 dark:border-emerald-800/50',
  'Under Development':'bg-amber-50 text-amber-700 border border-amber-200 dark:bg-amber-950/60 dark:text-amber-300 dark:border-amber-800/50',
  Proposed:           'bg-blue-50 text-blue-700 border border-blue-200 dark:bg-blue-950/60 dark:text-blue-300 dark:border-blue-800/50',
}

const resourceTypeBadge = {
  'Government Document': 'bg-purple-50 text-purple-700 border border-purple-200 dark:bg-purple-900/40 dark:text-purple-300 dark:border-purple-800/40',
  'Research Paper':      'bg-indigo-50 text-indigo-700 border border-indigo-200 dark:bg-indigo-900/40 dark:text-indigo-300 dark:border-indigo-800/40',
}

const domainBadge = {
  'Cross-sectoral': 'bg-purple-50 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300',
  Technology:       'bg-violet-50 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300',
  Technical:        'bg-indigo-50 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300',
  Policy:           'bg-fuchsia-50 text-fuchsia-700 dark:bg-fuchsia-900/40 dark:text-fuchsia-300',
  Security:         'bg-red-50 text-red-700 dark:bg-red-900/40 dark:text-red-300',
  Finance:          'bg-emerald-50 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300',
  Health:           'bg-green-50 text-green-700 dark:bg-green-900/40 dark:text-green-300',
  Standards:        'bg-sky-50 text-sky-700 dark:bg-sky-900/40 dark:text-sky-300',
}

function SectionHeader({ number, title }) {
  return (
    <div className="flex items-baseline gap-3 mb-5">
      <span className="text-purple-400 dark:text-purple-700 text-xs font-bold font-mono">{String(number).padStart(2, '0')}</span>
      <h2 className="text-purple-950 dark:text-white font-bold text-lg tracking-tight">{title}</h2>
    </div>
  )
}

export default function GovGuidelineList() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-10 space-y-14">

      <div className="border-b border-purple-100 dark:border-purple-900/50 pb-8">
        <p className="text-purple-400 text-xs font-semibold uppercase tracking-widest mb-2">India</p>
        <h1 className="text-3xl font-bold text-purple-950 dark:text-white tracking-tight mb-1">
          AI Governance & Safety Landscape
        </h1>
        <p className="text-purple-500 dark:text-purple-400 text-sm">A structured overview of India's AI governance frameworks, institutions, and policy discourse.</p>
      </div>

      <section>
        <SectionHeader number={1} title="The State of AI Discourse in India" />
        <div className="bg-[var(--bg-card)] border border-purple-100 dark:border-purple-800/40 rounded-2xl p-6 shadow-sm dark:shadow-none">
          <p className="text-purple-800 dark:text-purple-100/80 text-sm leading-relaxed">
            India positions AI as central to its national development goals — enshrined in the Viksit Bharat 2047 vision and the
            long-standing <span className="text-purple-700 dark:text-purple-300 font-medium">&#34;AI for All&#34;</span> principle — aiming to make India
            a global AI powerhouse while ensuring benefits reach the last mile. The governance approach is
            deliberately <span className="text-purple-700 dark:text-purple-300 font-medium">pro-innovation</span>: voluntary guidelines and public-private
            partnerships are preferred over prescriptive legislation, with the explicit expectation that frameworks will harden into
            mandatory rules as the ecosystem matures. Significant tensions, however, exist between these developmental aspirations and
            ethical safeguards, particularly around ground-level implementation for vulnerable groups including women, children, and rural communities.
          </p>
        </div>
      </section>

      <section>
        <SectionHeader number={2} title="Guiding Principles — The Seven Sutras" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {sutras.map((sutra, i) => (
            <div
              key={sutra.name}
              className="bg-[var(--bg-card)] border border-purple-100 dark:border-purple-800/40 rounded-xl p-4 hover:border-purple-300 dark:hover:border-purple-700/60 transition-colors shadow-sm dark:shadow-none"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-purple-100 dark:bg-purple-800/60 border border-purple-200 dark:border-purple-700/50 flex items-center justify-center text-[10px] text-purple-600 dark:text-purple-400 font-bold">
                  {i + 1}
                </span>
                <h3 className="text-purple-900 dark:text-purple-200 font-semibold text-sm leading-snug">{sutra.name}</h3>
              </div>
              <p className="text-purple-500 dark:text-purple-400/80 text-xs leading-relaxed pl-7">{sutra.description}</p>
            </div>
          ))}
          <div className="bg-purple-50/60 dark:bg-purple-900/10 border border-purple-100 dark:border-purple-900/30 border-dashed rounded-xl p-4 flex items-center justify-center">
            <p className="text-purple-400 dark:text-purple-700 text-xs text-center italic">Source: India AI Governance Guidelines, MeitY 2025</p>
          </div>
        </div>
      </section>

      <section>
        <SectionHeader number={3} title="Existing Laws & Policies" />
        <div className="space-y-2.5">
          {policies.map((p) => (
            <div
              key={p.name}
              className="flex flex-col sm:flex-row sm:items-start gap-3 bg-[var(--bg-card)] border-l-2 border-purple-300 dark:border-purple-700/60 hover:border-l-purple-500 border border-purple-100 dark:border-purple-800/30 rounded-r-xl rounded-l-none pl-4 pr-5 py-4 transition-colors group shadow-sm dark:shadow-none"
            >
              <div className="flex-1 min-w-0">
                <span className="text-purple-950 dark:text-white font-semibold text-sm leading-snug">{p.name}</span>
                <p className="text-purple-500 dark:text-purple-300/70 text-xs leading-relaxed mt-1">{p.description}</p>
              </div>
              <div className="flex sm:flex-col items-start gap-2 flex-shrink-0">
                <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full whitespace-nowrap ${statusBadge[p.status]}`}>
                  {p.status}
                </span>
                <span className="text-purple-400 text-[10px] font-mono">{p.year}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <SectionHeader number={4} title="Key Institutions" />
        <div className="bg-[var(--bg-card)] border border-purple-100 dark:border-purple-800/40 rounded-2xl overflow-hidden shadow-sm dark:shadow-none">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-purple-100 dark:border-purple-900/60 bg-purple-50 dark:bg-purple-950/40">
                <th className="text-left px-4 py-3 text-purple-500 font-semibold uppercase tracking-widest">Institution</th>
                <th className="text-left px-4 py-3 text-purple-500 font-semibold uppercase tracking-widest hidden sm:table-cell">Role</th>
                <th className="text-left px-4 py-3 text-purple-500 font-semibold uppercase tracking-widest">Domain</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-purple-50 dark:divide-purple-900/30">
              {institutions.map((inst) => (
                <tr key={inst.name} className="hover:bg-purple-50/50 dark:hover:bg-purple-900/10 transition-colors">
                  <td className="px-4 py-3 text-purple-900 dark:text-purple-100 font-medium">{inst.name}</td>
                  <td className="px-4 py-3 text-purple-500 dark:text-purple-300/70 hidden sm:table-cell">{inst.role}</td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium ${domainBadge[inst.domain] || 'bg-purple-50 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300'}`}>
                      {inst.domain}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <SectionHeader number={5} title="The Discourse — Key Themes & Tensions" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {themes.map((theme) => (
            <div key={theme.title} className={`rounded-r-2xl rounded-l-none p-5 ${theme.accent}`}>
              <h3 className={`font-bold text-sm mb-2 ${theme.label}`}>{theme.title}</h3>
              <p className="text-purple-700 dark:text-purple-100/70 text-xs leading-relaxed">{theme.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-purple-100 dark:border-purple-900/40 pt-10">
        <SectionHeader number={6} title="Additional Resources" />
        <div className="space-y-3">
          {resources.map((r) => (
            <a
              key={r.url}
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 bg-[var(--bg-card)] border border-purple-100 dark:border-purple-800/40 hover:border-purple-300 dark:hover:border-purple-600/60 rounded-xl px-5 py-4 transition-colors group shadow-sm dark:shadow-none"
            >
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${resourceTypeBadge[r.type] || 'bg-purple-50 text-purple-700 border border-purple-200 dark:bg-purple-900/40 dark:text-purple-300 dark:border-purple-800/40'}`}>
                    {r.type}
                  </span>
                  <span className="text-purple-400 text-[10px]">{r.meta}</span>
                </div>
                <p className="text-purple-900 dark:text-purple-100 font-medium text-sm group-hover:text-purple-950 dark:group-hover:text-white transition-colors leading-snug">{r.title}</p>
              </div>
              <span className="text-purple-400 group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors flex-shrink-0 text-base">↗</span>
            </a>
          ))}
        </div>
      </section>

    </div>
  )
}
