import { useEffect, useRef } from 'react'

export default function AnimeGirl() {
  const armRef  = useRef<SVGGElement>(null)
  const bodyRef = useRef<SVGGElement>(null)

  useEffect(() => {
    let t1: ReturnType<typeof setTimeout>
    let t2: ReturnType<typeof setTimeout>

    const sipCycle = () => {
      const arm  = armRef.current
      const body = bodyRef.current
      if (!arm || !body) return

      // Lift arm to sip
      arm.style.transition  = 'transform 0.7s cubic-bezier(0.34,1.56,0.64,1)'
      arm.style.transform   = 'rotate(-18deg) translateY(-8px)'
      body.style.transition = 'transform 0.7s ease-in-out'
      body.style.transform  = 'rotate(2deg)'

      t1 = setTimeout(() => {
        // Return
        arm.style.transition  = 'transform 0.6s ease-in-out'
        arm.style.transform   = 'rotate(0deg) translateY(0px)'
        body.style.transition = 'transform 0.6s ease-in-out'
        body.style.transform  = 'rotate(0deg)'

        t2 = setTimeout(sipCycle, 4200)
      }, 1400)
    }

    const t0 = setTimeout(sipCycle, 1800)
    return () => { clearTimeout(t0); clearTimeout(t1); clearTimeout(t2) }
  }, [])

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      zIndex: 500,
      width: 220,
      height: 370,
      pointerEvents: 'none',
      userSelect: 'none',
    }}>
      <svg
        viewBox="0 0 220 400"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: '100%', overflow: 'visible' }}
      >
        <defs>
          <style>{`
            @keyframes breathe {
              0%,100% { transform: translateY(0px); }
              50%      { transform: translateY(-4px); }
            }
            @keyframes blink {
              0%,90%,100% { scaleY: 1; }
              94%          { transform: scaleY(0.05); }
            }
            @keyframes blinkAnim {
              0%,88%,100% { transform: scaleY(1); }
              93%          { transform: scaleY(0.05); }
            }
            @keyframes steam1 {
              0%   { transform: translate(0,0);    opacity:.8; }
              100% { transform: translate(3px,-22px); opacity:0; }
            }
            @keyframes steam2 {
              0%   { transform: translate(0,0);     opacity:.65; }
              100% { transform: translate(-4px,-20px); opacity:0; }
            }
            @keyframes steam3 {
              0%   { transform: translate(0,0);    opacity:.5; }
              100% { transform: translate(2px,-25px); opacity:0; }
            }
            .char-breathe { animation: breathe 3.4s ease-in-out infinite; }
            .eye-blink    { animation: blinkAnim 5s ease-in-out infinite; transform-origin: center 50%; }
            .stm1 { animation: steam1 2s ease-out infinite; }
            .stm2 { animation: steam2 2.3s ease-out .5s infinite; }
            .stm3 { animation: steam3 2.6s ease-out 1s infinite; }
          `}</style>

          {/* Skin gradient */}
          <radialGradient id="skinGrad" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#FDDBB4"/>
            <stop offset="100%" stopColor="#F0B98A"/>
          </radialGradient>
          {/* Hair gradient — dark teal */}
          <linearGradient id="hairGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2A5A52"/>
            <stop offset="50%" stopColor="#1D4840"/>
            <stop offset="100%" stopColor="#0F2E28"/>
          </linearGradient>
          {/* Hair highlight */}
          <radialGradient id="hairShine" cx="40%" cy="25%" r="40%">
            <stop offset="0%" stopColor="#4A8A7A" stopOpacity="0.6"/>
            <stop offset="100%" stopColor="#1D4840" stopOpacity="0"/>
          </radialGradient>
          {/* Jacket gradient — warm beige/tan */}
          <linearGradient id="jacketGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#C8A96E"/>
            <stop offset="100%" stopColor="#A8893E"/>
          </linearGradient>
          {/* Tumbler gradient — dark brown */}
          <linearGradient id="tumblerGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#6B4423"/>
            <stop offset="40%" stopColor="#8B5E33"/>
            <stop offset="100%" stopColor="#4A2E14"/>
          </linearGradient>
          {/* Tumbler shine */}
          <linearGradient id="tumblerShine" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="white" stopOpacity="0.3"/>
            <stop offset="50%" stopColor="white" stopOpacity="0.05"/>
            <stop offset="100%" stopColor="white" stopOpacity="0"/>
          </linearGradient>
          {/* Cheek blush */}
          <radialGradient id="blush" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#F4A0A0" stopOpacity="0.55"/>
            <stop offset="100%" stopColor="#F4A0A0" stopOpacity="0"/>
          </radialGradient>
          {/* Clip face */}
          <clipPath id="faceClip">
            <ellipse cx="115" cy="90" rx="36" ry="40"/>
          </clipPath>
          {/* Iris gradient */}
          <radialGradient id="irisGrad" cx="40%" cy="35%" r="60%">
            <stop offset="0%" stopColor="#6B4E2A"/>
            <stop offset="100%" stopColor="#2A1A08"/>
          </radialGradient>
          {/* Shadow under character */}
          <radialGradient id="shadowGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#6B7A50" stopOpacity="0.25"/>
            <stop offset="100%" stopColor="#6B7A50" stopOpacity="0"/>
          </radialGradient>
        </defs>

        {/* Ground shadow */}
        <ellipse cx="110" cy="398" rx="70" ry="8" fill="url(#shadowGrad)"/>

        {/* ═══════════════════════════════════════
            FULL CHARACTER — breathe wrapper
        ═══════════════════════════════════════ */}
        <g ref={bodyRef} className="char-breathe" style={{ transformOrigin: '110px 280px' }}>

          {/* ══ HAIR BACK LAYER ══ */}
          {/* Main hair volume */}
          <ellipse cx="115" cy="88" rx="42" ry="46" fill="url(#hairGrad)"/>
          {/* Left side hair flowing down */}
          <path d="M75 100 Q58 130 60 175 Q62 200 68 210 Q72 190 74 165 Q76 140 78 120 Z"
            fill="#1D4840"/>
          {/* Right side hair */}
          <path d="M155 100 Q168 125 166 165 Q164 185 160 200 Q156 180 155 155 Q154 130 152 115 Z"
            fill="#1D4840"/>
          {/* Bob cut ends — left */}
          <path d="M60 175 Q55 195 62 215 Q70 220 76 210 Q72 195 70 180 Z"
            fill="#0F2E28"/>
          {/* Bob cut ends — right */}
          <path d="M166 165 Q172 185 165 205 Q158 212 152 202 Q156 185 158 168 Z"
            fill="#0F2E28"/>
          {/* Hair shine overlay */}
          <ellipse cx="100" cy="72" rx="28" ry="20" fill="url(#hairShine)"/>

          {/* ══ NECK ══ */}
          <rect x="106" y="126" width="18" height="22" rx="6" fill="url(#skinGrad)"/>
          {/* Neck shadow */}
          <rect x="106" y="135" width="18" height="8" rx="3" fill="#E09A70" opacity="0.4"/>

          {/* ══ BODY ══ */}
          {/* Dark brown/black mesh turtleneck base */}
          <path d="M70 148 Q72 140 110 136 Q118 136 148 140 Q154 144 152 148 L158 280 Q158 295 110 295 Q62 295 64 280 Z"
            fill="#2A1E14"/>
          {/* Mesh texture lines horizontal */}
          {[155,165,175,185,195,205,215,225,235,245,255,265,275].map((y,i) => (
            <line key={i} x1="68" y1={y} x2="154" y2={y}
              stroke="#3A2E22" strokeWidth="1" opacity="0.5"/>
          ))}
          {/* Mesh texture lines vertical */}
          {[78,88,98,108,118,128,138,148].map((x,i) => (
            <line key={i} x1={x} y1="148" x2={x} y2="280"
              stroke="#3A2E22" strokeWidth="1" opacity="0.4"/>
          ))}

          {/* ══ JACKET — beige/tan ══ */}
          {/* Left jacket panel */}
          <path d="M64 280 L62 160 Q60 148 72 142 L95 148 Q88 158 86 175 L82 280 Z"
            fill="url(#jacketGrad)"/>
          {/* Right jacket panel */}
          <path d="M158 280 L158 160 Q160 148 148 142 L128 148 Q134 158 136 175 L140 280 Z"
            fill="url(#jacketGrad)"/>
          {/* Jacket lapel left */}
          <path d="M72 142 L95 148 Q88 162 84 170 L78 165 Q70 155 72 142 Z"
            fill="#B89850"/>
          {/* Jacket lapel right */}
          <path d="M148 142 L128 148 Q134 162 138 170 L142 165 Q150 155 148 142 Z"
            fill="#B89850"/>
          {/* Jacket shadow lines */}
          <path d="M82 175 L80 280" stroke="#A07830" strokeWidth="1.5" opacity="0.5"/>
          <path d="M140 175 L142 280" stroke="#A07830" strokeWidth="1.5" opacity="0.5"/>
          {/* Jacket bottom hem */}
          <rect x="62" y="275" width="98" height="8" rx="2" fill="#9A7228" opacity="0.6"/>

          {/* Necklace chains */}
          <path d="M100 136 Q110 145 120 136" fill="none"
            stroke="#C8A040" strokeWidth="1.2" opacity="0.9"/>
          <path d="M98 140 Q110 152 122 140" fill="none"
            stroke="#C8A040" strokeWidth="1" opacity="0.7"/>
          {/* Necklace pendant */}
          <circle cx="110" cy="153" r="2.5" fill="#C8A040" opacity="0.8"/>

          {/* ══ LEFT ARM — holds tumbler (right side from her perspective) ══ */}
          <g ref={armRef} style={{ transformOrigin: '148px 155px' }}>
            {/* Upper arm jacket */}
            <path d="M148 148 Q168 150 172 175 Q175 195 170 215 Q165 225 158 222 Q152 215 150 198 L148 165 Z"
              fill="url(#jacketGrad)"/>
            {/* Forearm skin */}
            <path d="M158 218 Q166 225 165 248 Q163 262 155 265 Q146 264 144 250 Q142 236 148 225 Z"
              fill="url(#skinGrad)"/>
            {/* Hand */}
            <ellipse cx="155" cy="268" rx="11" ry="9" fill="url(#skinGrad)"/>
            {/* Fingers curled around cup */}
            <path d="M145 262 Q140 268 143 276 Q147 280 152 278" fill="none"
              stroke="#E09A70" strokeWidth="3" strokeLinecap="round"/>
            <path d="M165 262 Q170 268 167 276 Q163 280 158 278" fill="none"
              stroke="#E09A70" strokeWidth="3" strokeLinecap="round"/>

            {/* ══ TUMBLER CUP ══ */}
            {/* Cup body */}
            <rect x="138" y="228" width="34" height="52" rx="6"
              fill="url(#tumblerGrad)"/>
            {/* Cup shine */}
            <rect x="139" y="230" width="10" height="48" rx="5"
              fill="url(#tumblerShine)"/>
            {/* Cup band/grip detail */}
            <rect x="137" y="248" width="36" height="14" rx="4"
              fill="#3A1E08" opacity="0.6"/>
            {/* Band texture lines */}
            <line x1="137" y1="252" x2="173" y2="252" stroke="#5A3018" strokeWidth="1" opacity="0.5"/>
            <line x1="137" y1="256" x2="173" y2="256" stroke="#5A3018" strokeWidth="1" opacity="0.5"/>
            <line x1="137" y1="260" x2="173" y2="260" stroke="#5A3018" strokeWidth="1" opacity="0.5"/>
            {/* Cup lid */}
            <rect x="136" y="222" width="38" height="10" rx="5"
              fill="#5A3018"/>
            <rect x="138" y="223" width="34" height="7" rx="4"
              fill="#6B4023"/>
            {/* Lid lip/seal ring */}
            <rect x="135" y="229" width="40" height="4" rx="2"
              fill="#3A1E08" opacity="0.7"/>
            {/* Straw / sipper spout */}
            <rect x="148" y="212" width="10" height="14" rx="4"
              fill="#4A2E14"/>
            <rect x="150" y="210" width="6" height="8" rx="3"
              fill="#3A1E08"/>
            {/* Cup bottom rim */}
            <rect x="140" y="276" width="30" height="5" rx="2.5"
              fill="#3A1E08" opacity="0.8"/>
            {/* Steam from sipper */}
            <path className="stm1"
              d="M151 210 Q149 204 152 200"
              fill="none" stroke="#C8A880" strokeWidth="1.8" strokeLinecap="round" opacity="0.7"/>
            <path className="stm2"
              d="M156 210 Q158 203 155 198"
              fill="none" stroke="#C8A880" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
            <path className="stm3"
              d="M153 210 Q155 203 152 197"
              fill="none" stroke="#C8A880" strokeWidth="1.3" strokeLinecap="round" opacity="0.5"/>
          </g>

          {/* ══ RIGHT ARM ══ */}
          {/* Upper arm */}
          <path d="M72 148 Q52 152 48 180 Q44 205 50 225 Q56 232 64 228 Q70 218 72 200 L74 165 Z"
            fill="url(#jacketGrad)"/>
          {/* Forearm */}
          <path d="M54 224 Q46 232 48 255 Q50 268 60 270 Q68 268 70 254 Q70 240 64 228 Z"
            fill="url(#skinGrad)"/>
          {/* Hand relaxed */}
          <ellipse cx="58" cy="272" rx="12" ry="9" fill="url(#skinGrad)"/>

          {/* ══ LOWER BODY / LEGS ══ */}
          {/* Dark pants */}
          <path d="M82 280 L78 380 L102 380 L108 310 L114 310 L120 380 L144 380 L140 280 Z"
            fill="#2A1E14"/>
          {/* Pants highlight */}
          <path d="M86 280 L84 380 L80 380 L82 280 Z" fill="#3A2E24" opacity="0.5"/>
          {/* Shoes */}
          <ellipse cx="90" cy="382" rx="18" ry="7" fill="#1A1410"/>
          <ellipse cx="132" cy="382" rx="18" ry="7" fill="#1A1410"/>
          <ellipse cx="88" cy="380" rx="16" ry="5" fill="#2A2018"/>
          <ellipse cx="130" cy="380" rx="16" ry="5" fill="#2A2018"/>

          {/* ══ FACE ══ */}
          {/* Face shape — slightly angular anime style */}
          <path d="M79 75 Q78 55 115 52 Q152 55 152 75 Q155 100 150 118 Q145 135 130 140 Q115 145 100 140 Q85 135 80 118 Q76 100 79 75 Z"
            fill="url(#skinGrad)"/>
          {/* Face shadow on sides */}
          <path d="M79 85 Q76 105 80 120 Q82 110 84 95 Z"
            fill="#D4956A" opacity="0.2"/>
          <path d="M151 85 Q154 105 150 120 Q148 110 146 95 Z"
            fill="#D4956A" opacity="0.2"/>
          {/* Under nose shadow */}
          <ellipse cx="115" cy="122" rx="8" ry="3" fill="#D4956A" opacity="0.15"/>

          {/* Cheek blush */}
          <ellipse cx="90" cy="112" rx="13" ry="8" fill="url(#blush)"/>
          <ellipse cx="140" cy="112" rx="13" ry="8" fill="url(#blush)"/>

          {/* ══ HAIR FRONT / BANGS ══ */}
          {/* Main bang mass */}
          <path d="M79 75 Q78 55 115 50 Q152 53 152 75 Q140 58 115 60 Q90 60 79 75 Z"
            fill="url(#hairGrad)"/>
          {/* Left bang strands falling */}
          <path d="M82 65 Q78 78 76 92 Q80 84 84 76 Z"
            fill="#1D4840"/>
          <path d="M88 60 Q84 75 82 90 Q86 80 90 70 Z"
            fill="#0F2E28"/>
          <path d="M94 57 Q91 70 90 85 Q94 75 97 65 Z"
            fill="#1D4840"/>
          {/* Center parted bangs */}
          <path d="M108 57 Q106 68 104 82 Q108 72 112 62 Z"
            fill="#0F2E28"/>
          <path d="M115 56 Q114 68 114 82 Q117 72 118 60 Z"
            fill="#1D4840"/>
          {/* Right bangs */}
          <path d="M122 57 Q125 68 126 82 Q122 72 119 62 Z"
            fill="#0F2E28"/>
          <path d="M132 60 Q136 72 136 86 Q132 76 129 66 Z"
            fill="#1D4840"/>
          {/* Hair shine on bangs */}
          <ellipse cx="105" cy="62" rx="16" ry="7" fill="#4A8A7A" opacity="0.3"/>
          {/* Left ear visible under hair */}
          <ellipse cx="79" cy="102" rx="6" ry="8" fill="#F0B98A"/>
          <ellipse cx="79" cy="102" rx="3.5" ry="5" fill="#E09A70" opacity="0.5"/>

          {/* ══ EYES ══ */}
          {/* Eye socket shadow */}
          <ellipse cx="100" cy="96" rx="13" ry="11" fill="#D4956A" opacity="0.12"/>
          <ellipse cx="130" cy="96" rx="13" ry="11" fill="#D4956A" opacity="0.12"/>

          {/* Eye whites */}
          <ellipse cx="100" cy="97" rx="11" ry="9" fill="white"/>
          <ellipse cx="130" cy="97" rx="11" ry="9" fill="white"/>

          {/* Irises + pupils — with blink */}
          <g className="eye-blink">
            {/* Left iris */}
            <ellipse cx="100" cy="98" rx="7.5" ry="7.5" fill="url(#irisGrad)"/>
            <ellipse cx="100" cy="98" rx="4.5" ry="4.5" fill="#1A0A00"/>
            {/* Left shine */}
            <circle cx="103" cy="95" r="2.5" fill="white" opacity="0.9"/>
            <circle cx="97" cy="100" r="1.2" fill="white" opacity="0.4"/>

            {/* Right iris */}
            <ellipse cx="130" cy="98" rx="7.5" ry="7.5" fill="url(#irisGrad)"/>
            <ellipse cx="130" cy="98" rx="4.5" ry="4.5" fill="#1A0A00"/>
            {/* Right shine */}
            <circle cx="133" cy="95" r="2.5" fill="white" opacity="0.9"/>
            <circle cx="127" cy="100" r="1.2" fill="white" opacity="0.4"/>
          </g>

          {/* Upper eyelids */}
          <path d="M89 91 Q100 87 111 91" fill="none"
            stroke="#2A1A10" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M119 91 Q130 87 141 91" fill="none"
            stroke="#2A1A10" strokeWidth="2.5" strokeLinecap="round"/>
          {/* Eyelid line */}
          <path d="M89 91 Q100 95 111 91" fill="none"
            stroke="#3A2A18" strokeWidth="1" opacity="0.4"/>
          <path d="M119 91 Q130 95 141 91" fill="none"
            stroke="#3A2A18" strokeWidth="1" opacity="0.4"/>

          {/* Lower eyelid */}
          <path d="M89 103 Q100 108 111 103" fill="none"
            stroke="#D4956A" strokeWidth="1" opacity="0.4"/>
          <path d="M119 103 Q130 108 141 103" fill="none"
            stroke="#D4956A" strokeWidth="1" opacity="0.4"/>

          {/* Lashes upper left */}
          <path d="M89 91 L86 87" stroke="#2A1A10" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M93 89 L91 85" stroke="#2A1A10" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M98 87.5 L97 83.5" stroke="#2A1A10" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M104 87.5 L104 83.5" stroke="#2A1A10" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M109 89 L110 85" stroke="#2A1A10" strokeWidth="1.5" strokeLinecap="round"/>

          {/* Lashes upper right */}
          <path d="M119 91 L117 87" stroke="#2A1A10" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M124 89 L122 85" stroke="#2A1A10" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M129 87.5 L128 83.5" stroke="#2A1A10" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M134 87.5 L135 83.5" stroke="#2A1A10" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M139 89 L141 85" stroke="#2A1A10" strokeWidth="1.5" strokeLinecap="round"/>

          {/* ══ GLASSES ══ */}
          {/* Round frames — olive green tinted */}
          <circle cx="100" cy="97" r="14"
            fill="none" stroke="#5A7048" strokeWidth="2.8"/>
          <circle cx="130" cy="97" r="14"
            fill="none" stroke="#5A7048" strokeWidth="2.8"/>
          {/* Lens tint */}
          <circle cx="100" cy="97" r="13.5" fill="#6B7A50" opacity="0.08"/>
          <circle cx="130" cy="97" r="13.5" fill="#6B7A50" opacity="0.08"/>
          {/* Bridge */}
          <path d="M114 96 Q117 93 116 96" fill="none"
            stroke="#5A7048" strokeWidth="2.5"/>
          {/* Left temple arm */}
          <path d="M86 91 Q80 89 76 90" fill="none"
            stroke="#5A7048" strokeWidth="2.2" strokeLinecap="round"/>
          {/* Right temple arm */}
          <path d="M144 91 Q150 89 154 90" fill="none"
            stroke="#5A7048" strokeWidth="2.2" strokeLinecap="round"/>
          {/* Lens reflection */}
          <path d="M89 88 Q92 86 95 88" fill="none"
            stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
          <path d="M119 88 Q122 86 125 88" fill="none"
            stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>

          {/* ══ NOSE ══ */}
          <path d="M113 112 Q115 116 117 112" fill="none"
            stroke="#D4956A" strokeWidth="1.5" strokeLinecap="round" opacity="0.7"/>
          <ellipse cx="113" cy="116" rx="2" ry="1.2" fill="#D4956A" opacity="0.3"/>
          <ellipse cx="117" cy="116" rx="2" ry="1.2" fill="#D4956A" opacity="0.3"/>
 
          {/* ══ MOUTH — slight smirk/sipping expression ══ */}
          {/* Lips */}
          <path d="M106 126 Q115 130 124 126" fill="#D4806A" opacity="0.8"/>
          <path d="M106 126 Q115 124 124 126" fill="#C06858" opacity="0.6"/>
          {/* Upper lip cupid bow */}
          <path d="M106 126 Q110 123 115 124 Q120 123 124 126"
            fill="none" stroke="#B05848" strokeWidth="1.2" opacity="0.7"/>
          {/* Smile line */}
          <path d="M104 127 Q105 130 107 128" fill="none"
            stroke="#D4956A" strokeWidth="1" opacity="0.4" strokeLinecap="round"/>
          {/* Slight smile */}
          <path d="M107 128 Q115 133 123 128" fill="none"
            stroke="#B05848" strokeWidth="1.5" strokeLinecap="round" opacity="0.8"/>

          {/* ══ HAIR ACCESSORY — small clip ══ */}
          <rect x="138" y="60" width="12" height="7" rx="3.5"
            fill="#D4920A"/>
          <ellipse cx="144" cy="63" rx="3" ry="2" fill="#F0A820"/>

        </g>{/* end char-breathe */}
      </svg>
    </div>
  )
}