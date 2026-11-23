"use client";

import type { CSSProperties } from "react";
import { HERO_ID, navItems, type NavItem } from "@/content/navigation";
import { site } from "@/content/site";
import type { SectionId } from "@/content/types";
import { useActiveSection } from "@/hooks/useActiveSection";
import { Signature } from "./Signature";

/** Module-level constant so the hook's effect does not re-run on every render. */
const TRACKED_IDS: readonly (SectionId | typeof HERO_ID)[] = [
  HERO_ID,
  ...navItems.map((item) => item.id),
];

/**
 * The brush squiggle is used as a mask, so its color comes from the
 * background utility (bg-accent) and follows the accent token.
 * It is a 128×51 alpha PNG (~3 KB): the original was a traced bitmap
 * (1 440 SVG paths, ~188 KB) for a 32×12 px icon.
 */
const SQUIGGLE_MASK: CSSProperties = {
  maskImage: "url(/squiggle.png)",
  maskSize: "contain",
  maskRepeat: "no-repeat",
  maskPosition: "center",
  WebkitMaskImage: "url(/squiggle.png)",
  WebkitMaskSize: "contain",
  WebkitMaskRepeat: "no-repeat",
  WebkitMaskPosition: "center",
};

type NavLinkProps = {
  item: NavItem;
  isActive: boolean;
  variant: "mobile" | "desktop";
};

function NavLink({ item, isActive, variant }: NavLinkProps) {
  const color = isActive ? "text-accent" : "text-muted hover:text-foreground";
  const size = variant === "mobile" ? "text-[15px]" : "gap-3 text-[17px]";

  return (
    <a
      href={`#${item.id}`}
      aria-current={isActive ? "location" : undefined}
      className={`inline-flex min-h-11 items-center motion-safe:transition-colors ${size} ${color}`}
    >
      {variant === "desktop" && (
        <span
          aria-hidden="true"
          style={SQUIGGLE_MASK}
          className={`h-3 w-8 shrink-0 motion-safe:transition-colors ${isActive ? "bg-accent" : "bg-transparent"}`}
        />
      )}
      {item.label}
    </a>
  );
}

export function SiteNav() {
  const active = useActiveSection(TRACKED_IDS);

  return (
    <>
      {/* Mobile and tablet: fixed top bar, no hamburger. */}
      <header className="fixed inset-x-0 top-0 z-40 flex h-(--header-height) flex-col justify-center gap-1 border-b border-line bg-background px-5 lg:hidden">
        {/* w-28: 112×43px, so the name and the 44px links fit in the 96px bar. */}
        <a href={`#${HERO_ID}`} className="self-start">
          <Signature label={site.name} className="w-28" />
        </a>
        <nav aria-label="Main">
          {/* gap-5: the four links (15px, no uppercase) take ~240px, so they fit down to a 320px screen. */}
          <ul className="flex gap-5">
            {navItems.map((item) => (
              <li key={item.id}>
                <NavLink
                  item={item}
                  isActive={active === item.id}
                  variant="mobile"
                />
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Desktop: fixed side menu. */}
      <header className="fixed inset-y-0 left-0 z-40 hidden w-70 flex-col gap-12 overflow-y-auto px-10 py-12 lg:flex">
        {/* w-50: the full 200px left inside the 280px menu by its 40px side padding. */}
        <a href={`#${HERO_ID}`} className="self-start">
          <Signature label={site.name} className="w-50" />
        </a>
        <nav aria-label="Main">
          <ul className="flex flex-col gap-2">
            {navItems.map((item) => (
              <li key={item.id}>
                <NavLink
                  item={item}
                  isActive={active === item.id}
                  variant="desktop"
                />
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}