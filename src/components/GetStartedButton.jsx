import { Link } from "react-router-dom";

// The single sitewide CTA — every "Get Started Now" button links here.
// Kept as its own component (rather than inlining <Link to="/get-started">
// everywhere) so the destination only has to change in one place.
export default function GetStartedButton({ className, children, onClick }) {
  return (
    <Link to="/get-started" className={className} onClick={onClick}>
      {children || "Get Started Now"}
    </Link>
  );
}
