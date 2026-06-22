import { useTheme } from '../context/ThemeContext'

// Taj Mahal silhouette — central dome, minarets, archway, platform
function TajMahal({ className }) {
  return (
    <svg viewBox="0 0 180 260" fill="none" className={className} aria-hidden="true">
      {/* Platform / plinth */}
      <rect x="10" y="230" width="160" height="14" rx="1" strokeWidth="1.5" stroke="currentColor" />
      <rect x="20" y="222" width="140" height="10" rx="1" strokeWidth="1.5" stroke="currentColor" />
      {/* Main building base */}
      <rect x="30" y="170" width="120" height="54" rx="2" strokeWidth="1.5" stroke="currentColor" />
      {/* Central iwan arch */}
      <path d="M65 224 L65 188 Q90 164 115 188 L115 224" strokeWidth="1.5" stroke="currentColor" />
      {/* Side smaller arches */}
      <path d="M32 224 L32 200 Q44 188 56 200 L56 224" strokeWidth="1.5" stroke="currentColor" />
      <path d="M124 224 L124 200 Q136 188 148 200 L148 224" strokeWidth="1.5" stroke="currentColor" />
      {/* Octagonal drum */}
      <path d="M55 170 L55 152 L125 152 L125 170" strokeWidth="1.5" stroke="currentColor" />
      {/* Main dome */}
      <path d="M55 152 Q55 100 90 90 Q125 100 125 152" strokeWidth="1.5" stroke="currentColor" />
      {/* Finial */}
      <line x1="90" y1="90" x2="90" y2="72" strokeWidth="1.5" stroke="currentColor" />
      <circle cx="90" cy="70" r="3" strokeWidth="1.5" stroke="currentColor" />
      <line x1="90" y1="67" x2="90" y2="58" strokeWidth="1.5" stroke="currentColor" />
      {/* Left minaret */}
      <rect x="14" y="120" width="22" height="100" rx="2" strokeWidth="1.5" stroke="currentColor" />
      <path d="M14 120 Q25 104 36 120" strokeWidth="1.5" stroke="currentColor" />
      <ellipse cx="25" cy="102" rx="8" ry="4" strokeWidth="1.5" stroke="currentColor" />
      <line x1="25" y1="98" x2="25" y2="88" strokeWidth="1.5" stroke="currentColor" />
      <circle cx="25" cy="86" r="2.5" strokeWidth="1.5" stroke="currentColor" />
      {/* Right minaret */}
      <rect x="144" y="120" width="22" height="100" rx="2" strokeWidth="1.5" stroke="currentColor" />
      <path d="M144 120 Q155 104 166 120" strokeWidth="1.5" stroke="currentColor" />
      <ellipse cx="155" cy="102" rx="8" ry="4" strokeWidth="1.5" stroke="currentColor" />
      <line x1="155" y1="98" x2="155" y2="88" strokeWidth="1.5" stroke="currentColor" />
      <circle cx="155" cy="86" r="2.5" strokeWidth="1.5" stroke="currentColor" />
      {/* Minaret detail bands */}
      <line x1="14" y1="155" x2="36" y2="155" strokeWidth="1" stroke="currentColor" />
      <line x1="14" y1="185" x2="36" y2="185" strokeWidth="1" stroke="currentColor" />
      <line x1="144" y1="155" x2="166" y2="155" strokeWidth="1" stroke="currentColor" />
      <line x1="144" y1="185" x2="166" y2="185" strokeWidth="1" stroke="currentColor" />
      {/* Secondary domed kiosks */}
      <path d="M48 152 Q48 142 55 140 Q62 142 62 152" strokeWidth="1.2" stroke="currentColor" />
      <line x1="55" y1="140" x2="55" y2="134" strokeWidth="1.2" stroke="currentColor" />
      <path d="M118 152 Q118 142 125 140 Q132 142 132 152" strokeWidth="1.2" stroke="currentColor" />
      <line x1="125" y1="140" x2="125" y2="134" strokeWidth="1.2" stroke="currentColor" />
    </svg>
  )
}

// India Gate — memorial arch
function IndiaGate({ className }) {
  return (
    <svg viewBox="0 0 140 220" fill="none" className={className} aria-hidden="true">
      {/* Base platform */}
      <rect x="10" y="204" width="120" height="12" rx="1" strokeWidth="1.5" stroke="currentColor" />
      <rect x="25" y="196" width="90" height="10" rx="1" strokeWidth="1.5" stroke="currentColor" />
      {/* Left pillar */}
      <rect x="22" y="90" width="32" height="108" rx="1" strokeWidth="1.5" stroke="currentColor" />
      {/* Right pillar */}
      <rect x="86" y="90" width="32" height="108" rx="1" strokeWidth="1.5" stroke="currentColor" />
      {/* Top entablature */}
      <rect x="16" y="72" width="108" height="20" rx="1" strokeWidth="1.5" stroke="currentColor" />
      {/* Arch */}
      <path d="M54 192 L54 120 Q70 92 86 120 L86 192" strokeWidth="1.5" stroke="currentColor" />
      {/* Arch keystone */}
      <ellipse cx="70" cy="88" rx="14" ry="8" strokeWidth="1.5" stroke="currentColor" />
      {/* Attic / top section */}
      <rect x="30" y="48" width="80" height="26" rx="1" strokeWidth="1.5" stroke="currentColor" />
      {/* Top dome cupola */}
      <path d="M52 48 Q70 28 88 48" strokeWidth="1.5" stroke="currentColor" />
      <ellipse cx="70" cy="24" rx="10" ry="6" strokeWidth="1.5" stroke="currentColor" />
      <line x1="70" y1="18" x2="70" y2="8" strokeWidth="1.5" stroke="currentColor" />
      <circle cx="70" cy="6" r="3" strokeWidth="1.5" stroke="currentColor" />
      {/* Pillar detail lines */}
      <line x1="22" y1="130" x2="54" y2="130" strokeWidth="1" stroke="currentColor" />
      <line x1="22" y1="160" x2="54" y2="160" strokeWidth="1" stroke="currentColor" />
      <line x1="86" y1="130" x2="118" y2="130" strokeWidth="1" stroke="currentColor" />
      <line x1="86" y1="160" x2="118" y2="160" strokeWidth="1" stroke="currentColor" />
    </svg>
  )
}

// Qutub Minar — tapering tower with bands
function QutubMinar({ className }) {
  return (
    <svg viewBox="0 0 80 300" fill="none" className={className} aria-hidden="true">
      {/* Base */}
      <rect x="6" y="284" width="68" height="12" rx="1" strokeWidth="1.5" stroke="currentColor" />
      {/* Bottom section — widest */}
      <path d="M12 284 L12 230 Q14 226 40 226 Q66 226 68 230 L68 284" strokeWidth="1.5" stroke="currentColor" />
      {/* Band 1 */}
      <rect x="10" y="224" width="60" height="8" rx="1" strokeWidth="1.5" stroke="currentColor" />
      {/* Section 2 */}
      <path d="M17 224 L17 178 Q19 174 40 174 Q61 174 63 178 L63 224" strokeWidth="1.5" stroke="currentColor" />
      {/* Band 2 */}
      <rect x="14" y="172" width="52" height="8" rx="1" strokeWidth="1.5" stroke="currentColor" />
      {/* Section 3 */}
      <path d="M20 172 L20 130 Q22 126 40 126 Q58 126 60 130 L60 172" strokeWidth="1.5" stroke="currentColor" />
      {/* Band 3 */}
      <rect x="18" y="124" width="44" height="8" rx="1" strokeWidth="1.5" stroke="currentColor" />
      {/* Section 4 */}
      <path d="M24 124 L24 88 Q26 84 40 84 Q54 84 56 88 L56 124" strokeWidth="1.5" stroke="currentColor" />
      {/* Band 4 */}
      <rect x="22" y="82" width="36" height="8" rx="1" strokeWidth="1.5" stroke="currentColor" />
      {/* Top section — narrowest */}
      <path d="M28 82 L28 48 Q30 44 40 44 Q50 44 52 48 L52 82" strokeWidth="1.5" stroke="currentColor" />
      {/* Finial base */}
      <ellipse cx="40" cy="44" rx="14" ry="5" strokeWidth="1.5" stroke="currentColor" />
      {/* Top cupola */}
      <path d="M30 44 Q40 24 50 44" strokeWidth="1.5" stroke="currentColor" />
      <line x1="40" y1="24" x2="40" y2="12" strokeWidth="1.5" stroke="currentColor" />
      <circle cx="40" cy="10" r="3" strokeWidth="1.5" stroke="currentColor" />
      {/* Decorative vertical fluting lines on sections */}
      <line x1="26" y1="232" x2="26" y2="284" strokeWidth="0.8" stroke="currentColor" />
      <line x1="40" y1="232" x2="40" y2="284" strokeWidth="0.8" stroke="currentColor" />
      <line x1="54" y1="232" x2="54" y2="284" strokeWidth="0.8" stroke="currentColor" />
    </svg>
  )
}

// Lotus Temple — petal spike silhouette: 3 small low + 4 tall inward + 1 center tall
function LotusTemple({ className }) {
  return (
    <svg viewBox="0 0 220 208" fill="none" className={className} aria-hidden="true">
      {/* Reflecting pools — left and right of the platform */}
      <rect x="4" y="196" width="62" height="10" rx="5" strokeWidth="1.2" stroke="currentColor" />
      <rect x="154" y="196" width="62" height="10" rx="5" strokeWidth="1.2" stroke="currentColor" />

      {/* Stepped base platform — 3 tiers */}
      <rect x="8" y="186" width="204" height="12" rx="1" strokeWidth="1.5" stroke="currentColor" />
      <rect x="20" y="173" width="180" height="15" rx="1" strokeWidth="1.5" stroke="currentColor" />
      <rect x="34" y="161" width="152" height="14" rx="1" strokeWidth="1.5" stroke="currentColor" />

      {/* 4 TALL INWARD-LEANING SPIKES — 2 on each side, tips angled toward center */}
      {/* Far-left: base x=34-58, tip leans in to (68, 80) */}
      <path d="M34 161 C34 134 46 108 68 80 C64 108 56 134 58 161"
            strokeWidth="1.5" stroke="currentColor" />
      {/* Near-left: base x=65-88, tip leans in to (93, 66) */}
      <path d="M65 161 C65 126 75 98 93 66 C93 98 87 128 88 161"
            strokeWidth="1.5" stroke="currentColor" />
      {/* Near-right: base x=132-155, tip leans in to (127, 66) */}
      <path d="M132 161 C133 128 127 98 127 66 C145 98 155 126 155 161"
            strokeWidth="1.5" stroke="currentColor" />
      {/* Far-right: base x=162-186, tip leans in to (152, 80) */}
      <path d="M162 161 C162 134 158 108 152 80 C174 108 186 134 186 161"
            strokeWidth="1.5" stroke="currentColor" />

      {/* Subtle crown arc connecting the near-spike tips */}
      <path d="M93 66 Q110 50 127 66" strokeWidth="1.2" stroke="currentColor" />

      {/* 3 SMALL SPIKES low at the bottom — tight center cluster */}
      {/* Left small */}
      <path d="M87 161 C87 152 91 143 95 136 C99 143 103 152 103 161"
            strokeWidth="1.4" stroke="currentColor" />
      {/* Center small */}
      <path d="M101 161 C101 150 106 140 110 132 C114 140 119 150 119 161"
            strokeWidth="1.4" stroke="currentColor" />
      {/* Right small */}
      <path d="M117 161 C117 152 121 143 125 136 C129 143 133 152 133 161"
            strokeWidth="1.4" stroke="currentColor" />

      {/* CENTER BIG SPIKE — tallest, innermost petal, rises through the small cluster */}
      <path d="M103 161 C103 126 107 88 110 44 C113 88 117 126 117 161"
            strokeWidth="1.6" stroke="currentColor" />

      {/* Crown finial */}
      <ellipse cx="110" cy="40" rx="11" ry="5" strokeWidth="1.4" stroke="currentColor" />
      <line x1="110" y1="35" x2="110" y2="24" strokeWidth="1.4" stroke="currentColor" />
      <circle cx="110" cy="22" r="3" strokeWidth="1.3" stroke="currentColor" />
    </svg>
  )
}

// Gateway of India — Bombay Gothic arch with 2 flanking turrets
function GatewayOfIndia({ className }) {
  return (
    <svg viewBox="0 0 180 210" fill="none" className={className} aria-hidden="true">
      {/* Base steps */}
      <rect x="5" y="200" width="170" height="8" rx="1" strokeWidth="1.5" stroke="currentColor" />
      <rect x="12" y="190" width="156" height="12" rx="1" strokeWidth="1.5" stroke="currentColor" />

      {/* Wide base wall — full width, including flanking wings */}
      <rect x="14" y="108" width="152" height="84" rx="1" strokeWidth="1.5" stroke="currentColor" />

      {/* Central pointed arch (the main feature) */}
      <path d="M56 192 L56 148 Q90 108 124 148 L124 192" strokeWidth="1.5" stroke="currentColor" />

      {/* Top entablature band spanning the full width */}
      <rect x="12" y="92" width="156" height="18" rx="1" strokeWidth="1.5" stroke="currentColor" />

      {/* TWO TURRETS — above either side of the central arch, no central dome */}
      {/* Left turret, rising above the entablature beside the arch */}
      <rect x="32" y="42" width="32" height="52" rx="1" strokeWidth="1.5" stroke="currentColor" />
      <path d="M32 42 Q48 20 64 42" strokeWidth="1.5" stroke="currentColor" />
      <ellipse cx="48" cy="17" rx="12" ry="6" strokeWidth="1.5" stroke="currentColor" />
      <line x1="48" y1="11" x2="48" y2="2" strokeWidth="1.5" stroke="currentColor" />
      <circle cx="48" cy="0" r="2.5" strokeWidth="1.5" stroke="currentColor" />

      {/* Right turret */}
      <rect x="116" y="42" width="32" height="52" rx="1" strokeWidth="1.5" stroke="currentColor" />
      <path d="M116 42 Q132 20 148 42" strokeWidth="1.5" stroke="currentColor" />
      <ellipse cx="132" cy="17" rx="12" ry="6" strokeWidth="1.5" stroke="currentColor" />
      <line x1="132" y1="11" x2="132" y2="2" strokeWidth="1.5" stroke="currentColor" />
      <circle cx="132" cy="0" r="2.5" strokeWidth="1.5" stroke="currentColor" />

      {/* Side arched doorways in the flanking wings */}
      <path d="M18 192 L18 160 Q34 142 50 160 L50 192" strokeWidth="1.2" stroke="currentColor" />
      <path d="M130 192 L130 160 Q146 142 162 160 L162 192" strokeWidth="1.2" stroke="currentColor" />

      {/* Decorative horizontal bands on wings */}
      <line x1="14" y1="138" x2="56" y2="138" strokeWidth="1" stroke="currentColor" />
      <line x1="124" y1="138" x2="166" y2="138" strokeWidth="1" stroke="currentColor" />
    </svg>
  )
}

// Charminar — four-minaret mosque in Hyderabad; front view shows 2 prominent minarets
function Charminar({ className }) {
  return (
    <svg viewBox="0 0 180 290" fill="none" className={className} aria-hidden="true">
      {/* Base */}
      <rect x="8" y="278" width="164" height="10" rx="1" strokeWidth="1.5" stroke="currentColor" />

      {/* LEFT FRONT MINARET — slender, full height from ground */}
      <rect x="16" y="62" width="22" height="218" rx="2" strokeWidth="1.5" stroke="currentColor" />
      {/* Circular balcony rings at 3 levels */}
      <rect x="10" y="152" width="34" height="7" rx="3" strokeWidth="1.4" stroke="currentColor" />
      <rect x="10" y="196" width="34" height="7" rx="3" strokeWidth="1.4" stroke="currentColor" />
      <rect x="10" y="240" width="34" height="7" rx="3" strokeWidth="1.4" stroke="currentColor" />
      {/* Left minaret neck ring */}
      <ellipse cx="27" cy="60" rx="13" ry="5" strokeWidth="1.4" stroke="currentColor" />
      {/* Left minaret dome */}
      <path d="M14 60 Q27 38 40 60" strokeWidth="1.5" stroke="currentColor" />
      <ellipse cx="27" cy="34" rx="10" ry="5" strokeWidth="1.4" stroke="currentColor" />
      <line x1="27" y1="29" x2="27" y2="18" strokeWidth="1.5" stroke="currentColor" />
      <circle cx="27" cy="16" r="3" strokeWidth="1.4" stroke="currentColor" />

      {/* RIGHT FRONT MINARET */}
      <rect x="142" y="62" width="22" height="218" rx="2" strokeWidth="1.5" stroke="currentColor" />
      <rect x="136" y="152" width="34" height="7" rx="3" strokeWidth="1.4" stroke="currentColor" />
      <rect x="136" y="196" width="34" height="7" rx="3" strokeWidth="1.4" stroke="currentColor" />
      <rect x="136" y="240" width="34" height="7" rx="3" strokeWidth="1.4" stroke="currentColor" />
      <ellipse cx="153" cy="60" rx="13" ry="5" strokeWidth="1.4" stroke="currentColor" />
      <path d="M140 60 Q153 38 166 60" strokeWidth="1.5" stroke="currentColor" />
      <ellipse cx="153" cy="34" rx="10" ry="5" strokeWidth="1.4" stroke="currentColor" />
      <line x1="153" y1="29" x2="153" y2="18" strokeWidth="1.5" stroke="currentColor" />
      <circle cx="153" cy="16" r="3" strokeWidth="1.4" stroke="currentColor" />

      {/* MAIN BODY — square structure between and connecting the minarets */}
      {/* Ground level with large pointed central arch */}
      <rect x="36" y="196" width="108" height="84" rx="1" strokeWidth="1.5" stroke="currentColor" />
      <path d="M62 278 L62 238 Q90 200 118 238 L118 278" strokeWidth="1.5" stroke="currentColor" />
      {/* Side smaller arches at ground level */}
      <path d="M38 278 L38 252 Q52 234 66 252 L66 278" strokeWidth="1.2" stroke="currentColor" />
      <path d="M114 278 L114 252 Q128 234 142 252 L142 278" strokeWidth="1.2" stroke="currentColor" />

      {/* Second floor with arched windows */}
      <rect x="38" y="162" width="104" height="36" rx="1" strokeWidth="1.5" stroke="currentColor" />
      <path d="M54 198 L54 178 Q68 162 82 178 L82 198" strokeWidth="1.2" stroke="currentColor" />
      <path d="M98 198 L98 178 Q112 162 126 178 L126 198" strokeWidth="1.2" stroke="currentColor" />

      {/* Third floor / clock parapet */}
      <rect x="42" y="136" width="96" height="28" rx="1" strokeWidth="1.5" stroke="currentColor" />
      <line x1="42" y1="150" x2="138" y2="150" strokeWidth="1" stroke="currentColor" />

      {/* Top mosque level with small domes */}
      <rect x="48" y="110" width="84" height="28" rx="1" strokeWidth="1.5" stroke="currentColor" />
      <path d="M56 110 Q70 92 84 110" strokeWidth="1.2" stroke="currentColor" />
      <path d="M96 110 Q110 92 124 110" strokeWidth="1.2" stroke="currentColor" />
    </svg>
  )
}

export default function LandmarkBackground() {
  const { isDark } = useTheme()

  const strokeColour = isDark
    ? 'text-purple-300/[0.07]'
    : 'text-purple-700/[0.09]'

  return (
    <div
      className="pointer-events-none fixed inset-0 overflow-hidden z-0"
      aria-hidden="true"
    >
      {/* LEFT SIDE — stacked landmarks */}
      <div className={`absolute left-0 top-0 h-full flex flex-col items-start justify-around pl-2 w-48 ${strokeColour}`}>
        <TajMahal className="w-40 opacity-100" />
        <QutubMinar className="w-16 ml-8 opacity-100" />
        <LotusTemple className="w-44 opacity-100" />
      </div>

      {/* RIGHT SIDE — stacked landmarks */}
      <div className={`absolute right-0 top-0 h-full flex flex-col items-end justify-around pr-2 w-48 ${strokeColour}`}>
        <IndiaGate className="w-32 opacity-100" />
        <GatewayOfIndia className="w-40 opacity-100" />
        <Charminar className="w-36 opacity-100" />
      </div>
    </div>
  )
}
