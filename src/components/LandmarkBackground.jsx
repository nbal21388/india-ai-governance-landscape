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

// Lotus Temple — 27 marble petal shell rising from wide platform with reflecting pools
function LotusTemple({ className }) {
  return (
    <svg viewBox="0 0 220 200" fill="none" className={className} aria-hidden="true">
      {/* Reflecting pools flanking the base */}
      <rect x="6" y="186" width="68" height="10" rx="5" strokeWidth="1.2" stroke="currentColor" />
      <rect x="146" y="186" width="68" height="10" rx="5" strokeWidth="1.2" stroke="currentColor" />

      {/* Stepped platform — 3 tiers */}
      <rect x="8" y="176" width="204" height="12" rx="1" strokeWidth="1.5" stroke="currentColor" />
      <rect x="22" y="163" width="176" height="15" rx="1" strokeWidth="1.5" stroke="currentColor" />
      <rect x="38" y="152" width="144" height="13" rx="1" strokeWidth="1.5" stroke="currentColor" />

      {/* OUTER PETAL SHELL — the defining lotus form */}
      {/* Overall outer envelope: sweeps wide at base, curves dramatically inward at top */}
      {/* Left outer edge */}
      <path d="M38 152 C14 130 8 96 20 60 C30 76 38 66 50 60 C44 96 40 128 38 152Z"
            strokeWidth="1.5" stroke="currentColor" />
      {/* Second petal from left */}
      <path d="M60 152 C40 128 36 92 48 58 C58 74 68 66 80 60 C76 94 68 128 60 152Z"
            strokeWidth="1.5" stroke="currentColor" />
      {/* Centre-left petal */}
      <path d="M84 152 C68 128 66 90 76 56 C86 74 100 66 114 56 C124 90 152 128 136 152Z"
            strokeWidth="1.5" stroke="currentColor" />
      {/* Centre-right petal */}
      <path d="M136 152 C152 128 156 92 144 58 C134 74 122 66 110 60 C106 94 124 128 136 152Z"
            strokeWidth="1.5" stroke="currentColor" />
      {/* Second petal from right */}
      <path d="M160 152 C180 128 184 92 172 58 C162 74 152 66 140 60 C144 94 152 128 160 152Z"
            strokeWidth="1.5" stroke="currentColor" />
      {/* Right outer edge */}
      <path d="M182 152 C206 130 212 96 200 60 C190 76 182 66 170 60 C176 96 180 128 182 152Z"
            strokeWidth="1.5" stroke="currentColor" />

      {/* MIDDLE PETAL LAYER — partially visible between outer petals */}
      <path d="M50 148 C36 122 34 88 46 58" strokeWidth="1.2" stroke="currentColor" />
      <path d="M76 148 C62 120 58 84 70 54" strokeWidth="1.2" stroke="currentColor" />
      <path d="M110 148 C104 120 104 84 110 52" strokeWidth="1.2" stroke="currentColor" />
      <path d="M144 148 C158 120 162 84 150 54" strokeWidth="1.2" stroke="currentColor" />
      <path d="M170 148 C184 122 186 88 174 58" strokeWidth="1.2" stroke="currentColor" />

      {/* CROWN — where all petals converge at the top */}
      <path d="M20 60 C30 34 50 22 110 18 C170 22 190 34 200 60"
            strokeWidth="1.5" stroke="currentColor" />
      <ellipse cx="110" cy="16" rx="28" ry="10" strokeWidth="1.4" stroke="currentColor" />
      <ellipse cx="110" cy="12" rx="14" ry="6" strokeWidth="1.2" stroke="currentColor" />

      {/* Nine entrance portals at base of shell */}
      <path d="M52 152 L52 136 Q62 124 72 136 L72 152" strokeWidth="1.1" stroke="currentColor" />
      <path d="M96 152 L96 136 Q110 122 124 136 L124 152" strokeWidth="1.1" stroke="currentColor" />
      <path d="M148 152 L148 136 Q158 124 168 136 L168 152" strokeWidth="1.1" stroke="currentColor" />
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
