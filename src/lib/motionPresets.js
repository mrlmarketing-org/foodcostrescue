// Shared scroll-reveal preset for every `whileInView` section on the site.
//
// On mobile, the viewport crosses section boundaries far more often per
// scroll than on desktop, and the desktop treatment — large slide offsets,
// re-triggering every time a section enters/leaves (`viewport.once: false`)
// — reads as everything constantly sliding around rather than a subtle
// reveal. Mobile gets a single, smaller, one-time fade-in instead; desktop
// keeps the original re-triggering treatment.
//
// `axis` picks which prop the offset animates on ("y" for slide-up-fade,
// "x" for slide-in-from-a-side); pass `distance: 0` for an opacity-only fade.
export function reveal(isMobile, { axis = "y", distance = 24, delay = 0, duration = 0.6, amount = 0.4 } = {}) {
  if (isMobile) {
    const sign = distance < 0 ? -1 : 1;
    const mobileDistance = Math.min(Math.abs(distance), 12) * sign;
    return {
      initial: { opacity: 0, [axis]: mobileDistance },
      whileInView: { opacity: 1, [axis]: 0 },
      viewport: { once: true, amount: Math.min(amount, 0.2) },
      transition: { duration: Math.min(duration, 0.4), delay: Math.min(delay, 0.25), ease: "easeOut" },
    };
  }

  return {
    initial: { opacity: 0, [axis]: distance },
    whileInView: { opacity: 1, [axis]: 0 },
    viewport: { once: false, amount },
    transition: { duration, delay, ease: "easeOut" },
  };
}
