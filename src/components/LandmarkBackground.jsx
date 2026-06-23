import { useTheme } from '../context/ThemeContext'

// Taj Mahal silhouette — central dome, minarets, archway, platform
function TajMahal({ className }) {
  return (
    <svg viewBox="0 0 180 280" fill="none" className={className} aria-hidden="true">

      {/* === PLATFORM (two-tier plinth) === */}
      <rect x="3"  y="242" width="175" height="10" rx="1" strokeWidth="1.2" stroke="currentColor" />
      <rect x="3" y="232" width="175" height="12" rx="1" strokeWidth="1.2" stroke="currentColor" />

      {/* === MAIN BUILDING BASE === */}
      <rect x="48"  y="162" width="84" height="70" rx="1" strokeWidth="1.3" stroke="currentColor" />
      <rect x="28"  y="174" width="20" height="58" rx="1" strokeWidth="1.2" stroke="currentColor" />
      <rect x="132" y="174" width="20" height="58" rx="1" strokeWidth="1.2" stroke="currentColor" />

      {/* === ARCHES === */}
      {/* Central iwan — tall pointed arch */}
      <path d="M67 232 L67 194 Q90 158 113 194 L113 232" strokeWidth="1.3" stroke="currentColor" />
      {/* Side arches on wings */}
      <path d="M30 232 L30 210 Q37 198 45 210 L45 232" strokeWidth="1.1" stroke="currentColor" />
      <path d="M134 232 L134 210 Q143 198 150 210 L150 232" strokeWidth="1.1" stroke="currentColor" />

      {/* === DRUM (base of dome) === */}
      <path d="M56 162 L56 148 L124 148 L124 162" strokeWidth="1.2" stroke="currentColor" />
      <line x1="56" y1="155" x2="124" y2="155" strokeWidth="0.8" stroke="currentColor" strokeDasharray="4 3" />

      {/* === MAIN DOME (onion-shaped, bulbous) === */}
      <path
        d="M58 160 C52 140, 52 108, 90 88 C128 108, 128 140, 122 160"
        strokeWidth="1.4" stroke="currentColor"
      />

      {/* === FINIAL (kalash) === */}
      <circle cx="90" cy="85" r="2.2" strokeWidth="1.2" stroke="currentColor" />
      <circle cx="90" cy="80" r="3"   strokeWidth="1.2" stroke="currentColor" />
      <line  x1="90" y1="70" x2="90" y2="78" strokeWidth="1.2" stroke="currentColor" />
      <circle cx="90" cy="70" r="1.4" strokeWidth="1.1" stroke="currentColor" />
      <line  x1="90" y1="76" x2="90" y2="73" strokeWidth="1.1" stroke="currentColor" />

      {/* === CHHATRIS (corner kiosks) === */}
      <path d="M33 162 C29 154, 29 146, 39 143 C49 146, 49 154, 45 162" strokeWidth="1" stroke="currentColor" />
      <line x1="39" y1="143" x2="39" y2="138" strokeWidth="1" stroke="currentColor" />
      <circle cx="39" cy="137" r="1.2" strokeWidth="1" stroke="currentColor" />
      <rect x="33"  y="162" width="12" height="12" rx="1" strokeWidth="1.2" stroke="currentColor" />

      <path d="M135 162 C131 154, 131 146, 141 143 C151 146, 151 154, 147 162" strokeWidth="1" stroke="currentColor" />
      <line x1="141" y1="143" x2="141" y2="138" strokeWidth="1" stroke="currentColor" />
      <circle cx="141" cy="137" r="1.2" strokeWidth="1" stroke="currentColor" />
      <rect x="135"  y="162" width="12" height="12" rx="1" strokeWidth="1.2" stroke="currentColor" />

      {/* === LEFT MINARET (tapered trapezoid) === */}
      <path d="M7 232 L10 116 L19 116 L22 232 Z" strokeWidth="1.2" stroke="currentColor" />
      <line x1="7.5"  y1="196" x2="21.5" y2="196" strokeWidth="1" stroke="currentColor" />
      <line x1="8.5"  y1="170" x2="20.5" y2="170" strokeWidth="1" stroke="currentColor" />
      <line x1="9.5"  y1="144" x2="19.5" y2="144" strokeWidth="1" stroke="currentColor" />
      <path d="M10 116 C8 108, 8 100, 14.5 96 C21 100, 21 108, 19 116" strokeWidth="1.1" stroke="currentColor" />
      <line x1="14.5" y1="96" x2="14.5" y2="91" strokeWidth="1" stroke="currentColor" />
      <circle cx="14.5" cy="90" r="1.5" strokeWidth="1" stroke="currentColor" />

      {/* === RIGHT MINARET === */}
      <path d="M158 232 L161 116 L170 116 L173 232 Z" strokeWidth="1.2" stroke="currentColor" />
      <line x1="158.5" y1="196" x2="172.5" y2="196" strokeWidth="1" stroke="currentColor" />
      <line x1="159.5" y1="170" x2="171.5" y2="170" strokeWidth="1" stroke="currentColor" />
      <line x1="160.5" y1="144" x2="170.5" y2="144" strokeWidth="1" stroke="currentColor" />
      <path d="M161 116 C159 108, 159 100, 165.5 96 C172 100, 172 108, 170 116" strokeWidth="1.1" stroke="currentColor" />
      <line x1="165.5" y1="96" x2="165.5" y2="91" strokeWidth="1" stroke="currentColor" />
      <circle cx="165.5" cy="90" r="1.5" strokeWidth="1" stroke="currentColor" />

    </svg>
  )
}

// India Gate — memorial arch
function IndiaGate({ className }) {
  return (
    <svg viewBox="0 -20 150 240" fill="none" className={className} aria-hidden="true">
      {/* Left pillar — widened (outer edge x=14, inner edge x=54) */}
      <rect x="8" y="97" width="45" height="108" rx="1" strokeWidth="1.5" stroke="currentColor" />
      {/* Right pillar — widened (inner edge x=86, outer edge x=126) */}
      <rect x="86" y="97" width="45" height="108" rx="1" strokeWidth="1.5" stroke="currentColor" />
      {/* Tall rectangles inside pillars */}
      <rect x="18" y="125" width="25" height="80" rx="1" strokeWidth="1.5" stroke="currentColor" />
      <rect x="96" y="125" width="25" height="80" rx="1" strokeWidth="1.5" stroke="currentColor" />
      {/* Small circle in the left pillar */}
      <circle cx="30" cy="113" r="6" strokeWidth="1.2" stroke="currentColor" />
      {/* Small circle in the right pillar */}
      <circle cx="108" cy="113" r="6" strokeWidth="1.2" stroke="currentColor" />
      {/* Top entablature */}
      <rect x="8" y="72" width="123" height="20" rx="1" strokeWidth="1.5" stroke="currentColor" />
      {/* Thin rectangle */}
      <rect x="2" y="92" width="134" height="5" rx="1" strokeWidth="1.5" stroke="currentColor" />
      {/* Arch */}
      <path d="M54 205 L54 122 Q70 100 86 122 L86 205" strokeWidth="1.5" stroke="currentColor" />
      {/* Attic / top section — wider */}
      <rect x="24" y="45" width="92" height="26" rx="1" strokeWidth="1.5" stroke="currentColor" />
      {/* Small rectangle in centre of attic, ~1/2 attic width (46 of 92) */}
      <rect x="47" y="52" width="46" height="11" rx="1" strokeWidth="1.2" stroke="currentColor" />
      {/* Tiny circles touching each side of the small rectangle */}
      <circle cx="41" cy="58" r="5" strokeWidth="1.2" stroke="currentColor" />
      <circle cx="99" cy="58" r="5" strokeWidth="1.2" stroke="currentColor" />
      {/* Small rectangle */}
      <rect x="40" y="40" width="60" height="5" rx="1" strokeWidth="1.5" stroke="currentColor" />
      {/* Top dome cupola — wider */}
      <path d="M60 40 Q70 30 80 40" strokeWidth="1.5" stroke="currentColor" />
      {/* Pillar detail lines */}
      <line x1="9" y1="135" x2="54" y2="135" strokeWidth="1" stroke="currentColor" />
      <line x1="9" y1="160" x2="54" y2="160" strokeWidth="1" stroke="currentColor" />
      <line x1="9" y1="193" x2="54" y2="193" strokeWidth="1" stroke="currentColor" />
      <line x1="86" y1="135" x2="130" y2="135" strokeWidth="1" stroke="currentColor" />
      <line x1="86" y1="160" x2="130" y2="160" strokeWidth="1" stroke="currentColor" />
      <line x1="86" y1="193" x2="130" y2="193" strokeWidth="1" stroke="currentColor" />
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

// Lotus Temple — 3 small base spikes + 4 outer inward spikes + 4 tall central spikes
function LotusTemple({ className }) {
  return (
    <svg viewBox="0 0 220 208" fill="none" className={className} aria-hidden="true">
      {/* 2-tier split platform (gap at center where building sits) */}
      <rect x="25" y="163" width="78" height="9" rx="1" strokeWidth="1.5" stroke="currentColor" />
      <rect x="117" y="163" width="78" height="9" rx="1" strokeWidth="1.5" stroke="currentColor" />
      <rect x="10" y="176" width="83" height="9" rx="1" strokeWidth="1.5" stroke="currentColor" />
      <rect x="125" y="176" width="83" height="9" rx="1" strokeWidth="1.5" stroke="currentColor" />

      {/* 4 OUTER INWARD-LEANING SPIKES — x=34–186 (slightly less wide; still wider than small spikes x=40–180) */}
      {/* Each spike 38 units wide, touching at x=72, x=110, x=148. Tips at y=97, symmetric around x=110 */}
      {/* Far-left: x=34–72, tip (64, 97) */}
      <path d="M34 161 C34 130 46 108 64 97 C62 110 60 136 72 161"
            strokeWidth="1.5" stroke="currentColor" />
      {/* Near-left: x=72–110, tip (101, 97) */}
      <path d="M72 161 C72 126 84 102 101 97 C101 102 108 128 110 161"
            strokeWidth="1.5" stroke="currentColor" />
      {/* Near-right: x=110–148, tip (119, 97) — mirror of near-left */}
      <path d="M110 161 C110 128 112 102 119 97 C136 102 148 126 148 161"
            strokeWidth="1.5" stroke="currentColor" />
      {/* Far-right: x=148–186, tip (156, 97) — mirror of far-left */}
      <path d="M148 161 C160 136 158 110 156 97 C174 108 186 130 186 161"
            strokeWidth="1.5" stroke="currentColor" />

      {/* 4 CENTRAL SPIKES — span x=59–161 (2/3 into far-left spike → 1/3 into far-right spike) */}
      {/* Each spike ~25 units wide, touching at x=85, x=110, x=135. Tips clustered at y=64, near x=110 */}
      {/* Spike 1: x=59–85, tip (104, 64) — leans strongly right toward center */}
      <path d="M59 161 C59 118 82 86 104 64 C104 88 92 130 85 161"
            strokeWidth="1.5" stroke="currentColor" />
      {/* Spike 2: x=85–110, tip (108, 64) — leans slightly right */}
      <path d="M85 161 C85 122 98 90 108 64 C108 90 110 126 110 161"
            strokeWidth="1.5" stroke="currentColor" />
      {/* Spike 3: x=110–135, tip (112, 64) — mirror of spike 2 */}
      <path d="M110 161 C110 126 112 90 112 64 C122 90 135 122 135 161"
            strokeWidth="1.5" stroke="currentColor" />
      {/* Spike 4: x=135–161, tip (116, 64) — mirror of spike 1 */}
      <path d="M135 161 C128 130 116 88 116 64 C138 86 161 118 161 161"
            strokeWidth="1.5" stroke="currentColor" />

      {/* 3 SMALL SPIKES low at the bottom */}
      {/* Left small */}
      <path d="M40 161 C42 152 44 143 47 136 C60 140 70 152 75 161"
            strokeWidth="1.4" stroke="currentColor" />
      {/* Center small — symmetric */}
      <path d="M85 161 C87 152 100 140 110 134 C120 140 133 152 135 161"
            strokeWidth="1.4" stroke="currentColor" />
      {/* Right small — mirror of left */}
      <path d="M180 161 C178 152 176 143 173 136 C160 140 150 152 145 161"
            strokeWidth="1.4" stroke="currentColor" />
    </svg>
  )
}

// Gateway of India — Bombay Gothic arch with 2 flanking turrets
function GatewayOfIndia({ className }) {
  return (
    <svg viewBox="0 0 180 210" fill="none" className={className} aria-hidden="true">
      {/* Base steps */}
      <rect x="5" y="200" width="173" height="8" rx="1" strokeWidth="1.5" stroke="currentColor" />

      {/* Wide base wall — full width, including flanking wings */}
      <rect x="11" y="114" width="162" height="85" rx="1" strokeWidth="1.5" stroke="currentColor" />

      {/* Central pointed arch (the main feature) */}
      <path d="M69 200 L69 150 Q93 100 116 150 L116 200" strokeWidth="1.5" stroke="currentColor" />

      {/* Top entablature band spanning the full width */}
      <rect x="12" y="92" width="158" height="15" rx="1" strokeWidth="1.5" stroke="currentColor" />

      {/* Thin rectangle */}
      <rect x="8" y="108" width="168" height="5" rx="1" strokeWidth="1.5" stroke="currentColor" />

      {/* Highest rectangles */}
      <rect x="65" y="67" width="55" height="25" rx="1" strokeWidth="1.5" stroke="currentColor" />
      <rect x="65" y="60" width="55" height="7" rx="1" strokeWidth="1.5" stroke="currentColor" />

      {/* TWO TURRETS — above either side of the central arch, no central dome */}
      {/* Left turret */}
      <rect x="50" y="49" width="15" height="150" rx="1" strokeWidth="1.5" stroke="currentColor" />
      <path d="M50 50 Q57 30 65 50" strokeWidth="1.5" stroke="currentColor" />
      <ellipse cx="57" cy="36" rx="3" ry="3" strokeWidth="1.5" stroke="currentColor" />
      <line x1="57" y1="33" x2="57" y2="28" strokeWidth="1.5" stroke="currentColor" />

      {/* Right turret */}
      <rect x="120" y="49" width="15" height="150" rx="1" strokeWidth="1.5" stroke="currentColor" />
      <path d="M120 50 Q126 30 135 50" strokeWidth="1.5" stroke="currentColor" />
      <ellipse cx="127" cy="36" rx="3" ry="3" strokeWidth="1.5" stroke="currentColor" />
      <line x1="127" y1="33" x2="127" y2="28" strokeWidth="1.5" stroke="currentColor" />

      {/* Roof pole */}
      <rect x="91" y="10" width="2" height="50" rx="1" strokeWidth="1.5" stroke="currentColor" />

      {/* Side arched doorways in the flanking wings */}
      <path d="M25 200 L25 145 Q34 125 45 145 L45 200" strokeWidth="1.2" stroke="currentColor" />
      <path d="M140 200 L140 145 Q150 125 160 145 L160 200" strokeWidth="1.2" stroke="currentColor" />
      <path d="M29 200 L29 185 Q34 165 41 185 L41 200" strokeWidth="1.2" stroke="currentColor" />
      <path d="M144 200 L144 185 Q149 165 156 185 L156 200" strokeWidth="1.2" stroke="currentColor" />

      {/* Decorative horizontal bands on wings */}
      <line x1="10" y1="128" x2="50" y2="128" strokeWidth="1" stroke="currentColor" />
      <line x1="135" y1="128" x2="172" y2="128" strokeWidth="1" stroke="currentColor" />
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
