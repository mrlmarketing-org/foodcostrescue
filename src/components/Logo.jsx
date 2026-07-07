// Brand mark: two curved strokes crossing paths, each resolving into an
// arrowhead — direction and movement standing in for "flow, corrected."
// Fully abstract, no literal document/checkmark/coin imagery.

export function LogoMark({ size = 40 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
      {/* path B — curves down-right, dusty blue */}
      <path
        d="M14,14 C18,24 24,29 30,32 C36,35 43,42 50,49"
        fill="none"
        stroke="var(--coral)"
        strokeWidth="6.2"
        strokeLinecap="round"
      />
      <path
        d="M42,47 L50,49 L48,41"
        fill="none"
        stroke="var(--coral)"
        strokeWidth="6.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* path A — curves up-right, deep slate */}
      <path
        d="M13,50 C13,38 20,34 26,32 C34,29 40,24 47,17"
        fill="none"
        stroke="var(--ink)"
        strokeWidth="6.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M39,19 L47,17 L45,25"
        fill="none"
        stroke="var(--ink)"
        strokeWidth="6.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Wordmark({ size = 28 }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.42em",
        fontFamily: "var(--font-display)",
        fontWeight: 800,
        letterSpacing: "-0.015em",
        fontSize: size,
        color: "var(--ink)",
        whiteSpace: "nowrap",
      }}
    >
      <LogoMark size={size * 1.15} />
      <span>foodcostrescue</span>
    </span>
  );
}
