import { brand } from "../data/content.js";

// Every "Book a call" CTA renders through here so they all open the same
// Calendly popup widget (loaded globally in index.html). Falls back to
// opening Calendly in a new tab if the widget script hasn't loaded yet.
export default function BookCallButton({ className, children, onClick }) {
  const handleClick = (e) => {
    e.preventDefault();
    onClick?.();

    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: brand.calendlyUrl });
    } else {
      window.open(brand.calendlyUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <a href={brand.calendlyUrl} className={className} onClick={handleClick}>
      {children}
    </a>
  );
}
