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

export function IconSend(props) {
  return (
    <svg {...base} width={props.size ?? 22} height={props.size ?? 22} className={props.className}>
      <path d="M21 3 3 11l7 2 2 7 9-17Z" />
      <path d="M21 3 10 13" />
    </svg>
  );
}

export function IconSearch(props) {
  return (
    <svg {...base} width={props.size ?? 22} height={props.size ?? 22} className={props.className}>
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

export function IconChart(props) {
  return (
    <svg {...base} width={props.size ?? 22} height={props.size ?? 22} className={props.className}>
      <path d="M4 20V10" />
      <path d="M11 20V4" />
      <path d="M18 20v-7" />
      <path d="M3 20h18" />
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

export function IconShield(props) {
  return (
    <svg {...base} width={props.size ?? 22} height={props.size ?? 22} className={props.className}>
      <path d="M12 3 4.5 6v5.5C4.5 16.2 7.7 20 12 21c4.3-1 7.5-4.8 7.5-9.5V6L12 3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function IconCoin(props) {
  return (
    <svg {...base} width={props.size ?? 22} height={props.size ?? 22} className={props.className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v10M9.5 9.3c0-1.1 1.1-2 2.5-2s2.5.7 2.5 1.7c0 2.6-5 1.3-5 3.9 0 1 1.1 1.8 2.5 1.8s2.5-.7 2.5-1.8" />
    </svg>
  );
}

export function IconPartners(props) {
  return (
    <svg {...base} width={props.size ?? 22} height={props.size ?? 22} className={props.className}>
      <circle cx="9" cy="10" r="4" />
      <circle cx="16" cy="11" r="3.4" />
      <path d="M3.5 20c.6-3 2.8-5 5.5-5s4.9 2 5.5 5" />
      <path d="M14.8 15.2c2.2.3 3.9 2.1 4.4 4.8" />
    </svg>
  );
}

export function IconTrendingUp(props) {
  return (
    <svg {...base} width={props.size ?? 22} height={props.size ?? 22} className={props.className}>
      <path d="m3 17 6-6 4 4 8-9" />
      <path d="M15 6h6v6" />
    </svg>
  );
}

export function IconCheck(props) {
  return (
    <svg {...base} width={props.size ?? 22} height={props.size ?? 22} className={props.className}>
      <path d="m4 12.5 5 5L20 6" />
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

export function IconTarget(props) {
  return (
    <svg {...base} width={props.size ?? 22} height={props.size ?? 22} className={props.className}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none" />
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
