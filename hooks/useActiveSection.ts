import { useEffect, useState } from "react";

/**
 * Returns the id of the last section whose top has passed the reading line
 * (a fraction of the viewport height). At the very bottom of the page the
 * last id wins, so a short final section can still become active.
 */
export function useActiveSection<T extends string>(
  ids: readonly T[],
  readingLine = 0.4,
): T | null {
  const [active, setActive] = useState<T | null>(null);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;

      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;

      if (atBottom) {
        setActive(ids[ids.length - 1] ?? null);
        return;
      }

      const line = window.innerHeight * readingLine;
      let current: T | null = null;

      for (const id of ids) {
        const element = document.getElementById(id);
        if (element && element.getBoundingClientRect().top <= line) {
          current = id;
        }
      }

      setActive(current);
    };

    const schedule = () => {
      if (frame === 0) frame = requestAnimationFrame(update);
    };

    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);

    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame !== 0) cancelAnimationFrame(frame);
    };
  }, [ids, readingLine]);

  return active;
}