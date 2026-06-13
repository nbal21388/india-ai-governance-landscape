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

// Lotus Temple — petal roof
function LotusTemple({ className }) {
  return (
    <svg viewBox="0 0 200 180" fill="none" className={className} aria-hidden="true">
      {/* Reflecting pool / base */}
      <ellipse cx="100" cy="165" rx="90" ry="10" strokeWidth="1.5" stroke="currentColor" />
      {/* Stepped platform */}
      <path d="M36 164 L36 152 L164 152 L164 164" strokeWidth="1.5" stroke="currentColor" />
      <path d="M50 152 L50 142 L150 142 L150 152" strokeWidth="1.5" stroke="currentColor" />
      {/* Outer petals — 9 large petals forming the shell */}
      <path d="M100 142 Q68 120 60 80 Q80 90 100 82 Q120 90 140 80 Q132 120 100 142Z" strokeWidth="1.5" stroke="currentColor" />
      <path d="M60 80 Q40 60 46 30 Q62 50 76 44 Q72 68 60 80Z" strokeWidth="1.5" stroke="currentColor" />
      <path d="M140 80 Q160 60 154 30 Q138 50 124 44 Q128 68 140 80Z" strokeWidth="1.5" stroke="currentColor" />
      <path d="M46 30 Q44 4 70 8 Q66 26 76 44 Q60 38 46 30Z" strokeWidth="1.5" stroke="currentColor" />
      <path d="M154 30 Q156 4 130 8 Q134 26 124 44 Q140 38 154 30Z" strokeWidth="1.5" stroke="currentColor" />
      {/* Inner petals */}
      <path d="M100 130 Q78 112 76 88 Q88 96 100 92 Q112 96 124 88 Q122 112 100 130Z" strokeWidth="1.2" stroke="currentColor" />
      {/* Center opening */}
      <ellipse cx="100" cy="88" rx="16" ry="10" strokeWidth="1.2" stroke="currentColor" />
      {/* Entrance arches at base */}
      <path d="M68 142 L68 128 Q76 118 84 128 L84 142" strokeWidth="1.2" stroke="currentColor" />
      <path d="M116 142 L116 128 Q124 118 132 128 L132 142" strokeWidth="1.2" stroke="currentColor" />
    </svg>
  )
}

// Gateway of India — triumphal arch in Bombay Gothic
function GatewayOfIndia({ className }) {
  return (
    <svg viewBox="0 0 160 200" fill="none" className={className} aria-hidden="true">
      {/* Base steps */}
      <rect x="5" y="185" width="150" height="12" rx="1" strokeWidth="1.5" stroke="currentColor" />
      <rect x="15" y="176" width="130" height="12" rx="1" strokeWidth="1.5" stroke="currentColor" />
      {/* Main base wall */}
      <rect x="20" y="100" width="120" height="78" rx="1" strokeWidth="1.5" stroke="currentColor" />
      {/* Central arch */}
      <path d="M52 178 L52 128 Q80 96 108 128 L108 178" strokeWidth="1.5" stroke="currentColor" />
      {/* Side turrets */}
      <rect x="20" y="60" width="34" height="42" rx="1" strokeWidth="1.5" stroke="currentColor" />
      <rect x="106" y="60" width="34" height="42" rx="1" strokeWidth="1.5" stroke="currentColor" />
      {/* Turret tops — Mughal-inspired domes */}
      <path d="M20 60 Q37 40 54 60" strokeWidth="1.5" stroke="currentColor" />
      <ellipse cx="37" cy="38" rx="10" ry="5" strokeWidth="1.5" stroke="currentColor" />
      <line x1="37" y1="33" x2="37" y2="24" strokeWidth="1.5" stroke="currentColor" />
      <circle cx="37" cy="22" r="3" strokeWidth="1.5" stroke="currentColor" />
      <path d="M106 60 Q123 40 140 60" strokeWidth="1.5" stroke="currentColor" />
      <ellipse cx="123" cy="38" rx="10" ry="5" strokeWidth="1.5" stroke="currentColor" />
      <line x1="123" y1="33" x2="123" y2="24" strokeWidth="1.5" stroke="currentColor" />
      <circle cx="123" cy="22" r="3" strokeWidth="1.5" stroke="currentColor" />
      {/* Top entablature between turrets */}
      <rect x="54" y="56" width="52" height="16" rx="1" strokeWidth="1.5" stroke="currentColor" />
      {/* Top centre dome */}
      <path d="M64 56 Q80 34 96 56" strokeWidth="1.5" stroke="currentColor" />
      <ellipse cx="80" cy="30" rx="12" ry="6" strokeWidth="1.5" stroke="currentColor" />
      <line x1="80" y1="24" x2="80" y2="14" strokeWidth="1.5" stroke="currentColor" />
      <circle cx="80" cy="12" r="3" strokeWidth="1.5" stroke="currentColor" />
      {/* Side door arches */}
      <path d="M24 178 L24 148 Q37 136 50 148 L50 178" strokeWidth="1.2" stroke="currentColor" />
      <path d="M110 178 L110 148 Q123 136 136 148 L136 178" strokeWidth="1.2" stroke="currentColor" />
      {/* Decorative lattice band */}
      <line x1="20" y1="118" x2="140" y2="118" strokeWidth="1" stroke="currentColor" />
      <line x1="20" y1="112" x2="140" y2="112" strokeWidth="0.8" stroke="currentColor" />
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
        <LotusTemple className="w-40 opacity-100" />
      </div>

      {/* RIGHT SIDE — stacked landmarks */}
      <div className={`absolute right-0 top-0 h-full flex flex-col items-end justify-around pr-2 w-48 ${strokeColour}`}>
        <IndiaGate className="w-32 opacity-100" />
        <GatewayOfIndia className="w-40 opacity-100" />
        <QutubMinar className="w-16 mr-8 opacity-100 scale-x-[-1]" />
      </div>
    </div>
  )
}
