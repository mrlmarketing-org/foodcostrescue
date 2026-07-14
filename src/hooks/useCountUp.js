import { useEffect, useRef, useState } from "react";

// Animates from 0 to `target` each time `start` flips from false to true,
// resetting to 0 when it flips back to false — so it replays every time the
// caller's in-view check re-triggers (see AboutUs.jsx's invoice mock).
export function useCountUp(target, { start = false, duration = 1400, skip = false } = {}) {
  const [value, setValue] = useState(skip ? target : 0);
  const running = useRef(false);

  useEffect(() => {
    if (skip) {
      setValue(target);
      return;
    }

    if (!start) {
      running.current = false;
      setValue(0);
      return;
    }

    if (running.current) return;
    running.current = true;

    let raf;
    const t0 = performance.now();
    function tick(now) {
      const p = Math.min((now - t0) / duration, 1);
      setValue(target * p);
      if (p < 1) raf = requestAnimationFrame(tick);
      else setValue(target);
    }
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, target, duration, skip]);

  return value;
}
