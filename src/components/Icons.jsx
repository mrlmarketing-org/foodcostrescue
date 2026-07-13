// Minimal hand-drawn line-icon set — replaces emoji throughout the site.
// Every icon shares the same stroke weight and viewBox so they sit together cleanly.

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function IconCheck(props) {
  return (
    <svg {...base} width={props.size ?? 22} height={props.size ?? 22} className={props.className}>
      <path d="m4 12.5 5 5L20 6" />
    </svg>
  );
}

// Duotone icon set for Why Us — bolder and more filled than the base
// line-icon set above, meant to carry more visual weight inside a large
// badge rather than sit small next to a line of text.

export function IconPricingExpertise(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" width={props.size ?? 36} height={props.size ?? 36} className={props.className}>
      <path
        d="M11.5 2.5H4A1.5 1.5 0 0 0 2.5 4v7.5c0 .4.16.78.44 1.06l9 9a1.5 1.5 0 0 0 2.12 0l7.5-7.5a1.5 1.5 0 0 0 0-2.12l-9-9a1.5 1.5 0 0 0-1.06-.44Z"
        fill="currentColor"
        fillOpacity="0.16"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <circle cx="7.75" cy="7.75" r="1.75" fill="currentColor" />
      <path d="m9.5 15 3 3 5-5.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconBenchmarkBars(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" width={props.size ?? 36} height={props.size ?? 36} className={props.className}>
      <rect x="3" y="13" width="4.2" height="8" rx="1.2" fill="currentColor" fillOpacity="0.2" />
      <rect x="9.9" y="8" width="4.2" height="13" rx="1.2" fill="currentColor" fillOpacity="0.4" />
      <rect x="16.8" y="3" width="4.2" height="18" rx="1.2" fill="currentColor" fillOpacity="0.65" />
      <path d="M3 12.5 9.5 7l4 3 7-6" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconToughCall(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" width={props.size ?? 36} height={props.size ?? 36} className={props.className}>
      <path
        d="M5 4h3l1.5 4.5L7.5 10a11 11 0 0 0 6.5 6.5l1.5-2L20 16v3a2 2 0 0 1-2 2 16 16 0 0 1-15-15 2 2 0 0 1 2-2Z"
        fill="currentColor"
        fillOpacity="0.18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path d="M14.5 2.5c2.2.4 3.9 2.1 4.3 4.3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M14.5 6.2c1.1.25 1.95 1.1 2.2 2.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function IconLifeRing(props) {
  return (
    <svg {...base} width={props.size ?? 22} height={props.size ?? 22} className={props.className}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="4" />
      <path d="m5.8 5.8 2.8 2.8M18.2 5.8l-2.8 2.8M5.8 18.2l2.8-2.8M18.2 18.2l-2.8-2.8" />
    </svg>
  );
}

export function IconPlus(props) {
  return (
    <svg {...base} width={props.size ?? 22} height={props.size ?? 22} className={props.className}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

export function IconMinus(props) {
  return (
    <svg {...base} width={props.size ?? 22} height={props.size ?? 22} className={props.className}>
      <path d="M5 12h14" />
    </svg>
  );
}

export function IconMail(props) {
  return (
    <svg {...base} width={props.size ?? 22} height={props.size ?? 22} className={props.className}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 6.5 8 6 8-6" />
    </svg>
  );
}

export function IconPhone(props) {
  return (
    <svg {...base} width={props.size ?? 22} height={props.size ?? 22} className={props.className}>
      <path d="M5 4h3l1.5 4.5L7.5 10a11 11 0 0 0 6.5 6.5l1.5-2L20 16v3a2 2 0 0 1-2 2 16 16 0 0 1-15-15 2 2 0 0 1 2-2Z" />
    </svg>
  );
}

export function IconMapPin(props) {
  return (
    <svg {...base} width={props.size ?? 22} height={props.size ?? 22} className={props.className}>
      <path d="M12 21s7-6.6 7-12a7 7 0 0 0-14 0c0 5.4 7 12 7 12Z" />
      <circle cx="12" cy="9" r="2.4" />
    </svg>
  );
}

export function IconReceipt(props) {
  return (
    <svg {...base} width={props.size ?? 22} height={props.size ?? 22} className={props.className}>
      <path d="M6 3h12v18l-2.5-1.5L13 21l-2.5-1.5L8 21l-2-1.5V3Z" />
      <path d="M9 8h6M9 12h6" />
    </svg>
  );
}

// "What we flag" icon set — About Us section, one glyph per overcharge type.

export function IconTrendUp(props) {
  return (
    <svg {...base} width={props.size ?? 22} height={props.size ?? 22} className={props.className}>
      <path d="M4 16.5 9.5 11l3.5 3.5L20 7" />
      <path d="M14.5 7h5.5v5.5" />
    </svg>
  );
}

export function IconContractMismatch(props) {
  return (
    <svg {...base} width={props.size ?? 22} height={props.size ?? 22} className={props.className}>
      <path d="M6 3h9l3 3v15H6Z" />
      <path d="M9 16h6" />
      <path d="m9.8 9.5 4.4 4M14.2 9.5l-4.4 4" />
    </svg>
  );
}

export function IconPercentFlag(props) {
  return (
    <svg {...base} width={props.size ?? 22} height={props.size ?? 22} className={props.className}>
      <path d="M6 18 18 6" />
      <circle cx="8" cy="8" r="2.1" />
      <circle cx="16" cy="16" r="2.1" />
    </svg>
  );
}

export function IconLock(props) {
  return (
    <svg {...base} width={props.size ?? 22} height={props.size ?? 22} className={props.className}>
      <rect x="5" y="10.5" width="14" height="9.5" rx="2" />
      <path d="M8 10.5V7.5a4 4 0 0 1 8 0v3" />
    </svg>
  );
}

// Social glyphs — symbol only, no wordmarks, so they read at small sizes.

export function IconInstagram(props) {
  return (
    <svg {...base} width={props.size ?? 22} height={props.size ?? 22} className={props.className}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="16.8" cy="7.2" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconLinkedIn(props) {
  return (
    <svg {...base} width={props.size ?? 22} height={props.size ?? 22} className={props.className}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4" />
      <circle cx="8" cy="9" r="0.9" fill="currentColor" stroke="none" />
      <path d="M8 12v5" />
      <path d="M12 17v-3.2c0-1.2.9-1.8 1.8-1.8.9 0 1.7.6 1.7 1.8V17" />
      <path d="M12 12v5" />
    </svg>
  );
}

export function IconX(props) {
  return (
    <svg {...base} width={props.size ?? 22} height={props.size ?? 22} className={props.className}>
      <path d="M5 5l14 14M19 5 5 19" />
    </svg>
  );
}

export function IconFacebook(props) {
  return (
    <svg {...base} width={props.size ?? 22} height={props.size ?? 22} className={props.className}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <path d="M13.5 20v-6.5h2.2l.3-2.5h-2.5V9.4c0-.72.2-1.2 1.24-1.2H16V6c-.22-.03-.97-.1-1.85-.1-1.83 0-3.08 1.12-3.08 3.17V11H9v2.5h2.07V20" />
    </svg>
  );
}
