const marco = {
  fill: "#ffffff",
  stroke: "#ececec",
}

export function DiagramaProceso({ numero }: { numero: string }) {
  return (
    <svg viewBox="0 0 340 230" aria-hidden="true">
      <rect width="340" height="230" rx="18" fill="#f6f6f6" />
      {numero === "01" ? <Negocio /> : null}
      {numero === "02" ? <Encargo /> : null}
      {numero === "03" ? <Programa /> : null}
      {numero === "04" ? <Enlace /> : null}
      <style>{`
        text { font-family: "Helvetica Neue LT Pro", Helvetica, Arial, sans-serif; }
      `}</style>
    </svg>
  )
}

function Negocio() {
  return (
    <>
      <rect x="34" y="28" width="272" height="174" rx="14" fill={marco.fill} stroke={marco.stroke} />
      <text x="52" y="56" fontSize="12" fill="#8a8a8a">
        El negocio
      </text>
      <rect x="52" y="72" width="16" height="16" rx="4" fill="#FF5F1F" />
      <path d="M56 80 l3 3 6-6" fill="none" stroke="#fff" strokeWidth="1.6" />
      <rect x="80" y="76" width="96" height="8" rx="4" fill="#e4e4e4" />
      <rect x="52" y="102" width="16" height="16" rx="4" fill="none" stroke="#d4d4d4" />
      <rect x="80" y="106" width="128" height="8" rx="4" fill="#ececec" />
      <rect x="52" y="132" width="16" height="16" rx="4" fill="none" stroke="#d4d4d4" />
      <rect x="80" y="136" width="78" height="8" rx="4" fill="#ececec" />
      <rect x="52" y="168" width="196" height="4" rx="2" fill="#ececec" />
      <rect x="52" y="168" width="74" height="4" rx="2" fill="#FF5F1F" />
    </>
  )
}

function Encargo() {
  return (
    <>
      <rect x="34" y="28" width="272" height="174" rx="14" fill={marco.fill} stroke={marco.stroke} />
      <text x="52" y="56" fontSize="12" fill="#8a8a8a">
        Encargo
      </text>
      <rect x="52" y="72" width="168" height="7" rx="3.5" fill="#e4e4e4" />
      <rect x="52" y="88" width="124" height="7" rx="3.5" fill="#ececec" />
      <rect x="52" y="104" width="146" height="7" rx="3.5" fill="#ececec" />
      <rect x="52" y="128" width="58" height="22" rx="11" fill="#f3f3f3" />
      <rect x="118" y="128" width="58" height="22" rx="11" fill="#f3f3f3" />
      <rect x="184" y="128" width="64" height="22" rx="11" fill="#fff" stroke="#FF5F1F" />
      <text x="198" y="143" fontSize="10" fill="#FF5F1F">
        Plazo
      </text>
      <line x1="58" y1="174" x2="250" y2="174" stroke="#e4e4e4" strokeWidth="2" />
      <circle cx="58" cy="174" r="4" fill="#cfcfcf" />
      <circle cx="154" cy="174" r="4" fill="#FF5F1F" />
      <circle cx="250" cy="174" r="4" fill="#cfcfcf" />
    </>
  )
}

function Programa() {
  return (
    <>
      <rect x="46" y="26" width="248" height="178" rx="14" fill={marco.fill} stroke={marco.stroke} />
      <circle cx="66" cy="44" r="3.5" fill="#e0e0e0" />
      <circle cx="78" cy="44" r="3.5" fill="#e0e0e0" />
      <circle cx="90" cy="44" r="3.5" fill="#d0d0d0" />
      <rect x="64" y="60" width="212" height="62" rx="8" fill="#f1f1f1" />
      <rect x="64" y="134" width="120" height="7" rx="3.5" fill="#e4e4e4" />
      <rect x="64" y="148" width="86" height="7" rx="3.5" fill="#ececec" />
      <rect x="64" y="170" width="72" height="18" rx="9" fill="#FF5F1F" />
    </>
  )
}

function Enlace() {
  return (
    <>
      <rect x="36" y="78" width="92" height="64" rx="14" fill="#fff" stroke="#e4e4e4" />
      <rect x="52" y="98" width="60" height="7" rx="3.5" fill="#e4e4e4" />
      <rect x="52" y="112" width="40" height="7" rx="3.5" fill="#ececec" />
      <text x="58" y="74" fontSize="11" fill="#8a8a8a">
        Web
      </text>
      <path d="M128 110 H196" stroke="#FF5F1F" strokeWidth="2" />
      <circle cx="196" cy="110" r="4" fill="#FF5F1F" />
      <rect x="208" y="70" width="96" height="86" rx="14" fill="#fff" stroke="#e4e4e4" />
      <path
        d="M256 96c-5.2 0-9 3.7-9 8.6 0 6.4 9 14.4 9 14.4s9-8 9-14.4c0-4.9-3.8-8.6-9-8.6z"
        fill="none"
        stroke="#FF5F1F"
        strokeWidth="1.8"
      />
      <circle cx="256" cy="104.5" r="2.4" fill="#FF5F1F" />
      <text x="232" y="64" fontSize="11" fill="#8a8a8a">
        Ficha
      </text>
    </>
  )
}
