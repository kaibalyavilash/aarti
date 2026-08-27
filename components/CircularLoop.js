export default function CircularLoop() {
  return (
    <div className="circle-diagram hero-loop">
      <svg viewBox="0 0 200 200">
        <defs>
          <linearGradient id="cgradHero" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e0592a" />
            <stop offset="100%" stopColor="#2fa98c" />
          </linearGradient>
          <path id="loopArcNhero" d="M 53,19 A 94,94 0 0 1 147,19" />
          <path id="loopArcEhero" d="M 181,53 A 94,94 0 0 1 181,147" />
          <path id="loopArcShero" d="M 147,181 A 94,94 0 0 1 53,181" />
          <path id="loopArcWhero" d="M 19,147 A 94,94 0 0 1 19,53" />
        </defs>
        <g className="loop-spin">
          <circle cx="100" cy="100" r="70" fill="none" stroke="rgba(243,241,236,0.28)" strokeWidth="1" />
          <circle
            cx="100"
            cy="100"
            r="70"
            fill="none"
            stroke="url(#cgradHero)"
            strokeWidth="2.5"
            strokeDasharray="360 80"
            strokeLinecap="round"
            transform="rotate(-90 100 100)"
          />
          <g fontFamily="JetBrains Mono" fontSize="8" fill="#e4e2db" letterSpacing="1">
            <text textAnchor="middle"><textPath href="#loopArcNhero" startOffset="50%">SCRAP IN</textPath></text>
            <text textAnchor="middle"><textPath href="#loopArcEhero" startOffset="50%">EAF MELT</textPath></text>
            <text textAnchor="middle"><textPath href="#loopArcShero" startOffset="50%">ROLLED STEEL</textPath></text>
            <text textAnchor="middle"><textPath href="#loopArcWhero" startOffset="50%">END OF LIFE</textPath></text>
          </g>
        </g>
        <text x="100" y="94" textAnchor="middle" fill="#f3f1ec" fontFamily="Oswald" fontSize="15" fontWeight="600">CIRCULAR</text>
        <text x="100" y="114" textAnchor="middle" fill="#d8d5cd" fontFamily="JetBrains Mono" fontSize="9" letterSpacing="2">STEEL LOOP</text>
      </svg>
    </div>
  );
}
