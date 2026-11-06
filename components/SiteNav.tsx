"use client";

import { HERO_ID, navItems, type NavItem } from "@/content/navigation";
import { site } from "@/content/site";
import type { SectionId } from "@/content/types";
import { useActiveSection } from "@/hooks/useActiveSection";

/** Module-level constant so the hook's effect does not re-run on every render. */
const TRACKED_IDS: readonly (SectionId | typeof HERO_ID)[] = [
  HERO_ID,
  ...navItems.map((item) => item.id),
];

type NavLinkProps = {
  item: NavItem;
  isActive: boolean;
  variant: "mobile" | "desktop";
};

function NavLink({ item, isActive, variant }: NavLinkProps) {
  const color = isActive ? "text-accent" : "text-muted hover:text-foreground";
  const size = variant === "mobile" ? "text-[13px]" : "gap-3 text-[15px]";

  return (
    <a
      href={`#${item.id}`}
      aria-current={isActive ? "location" : undefined}
      className={`inline-flex min-h-11 items-center tracking-[0.12em] uppercase motion-safe:transition-colors ${size} ${color}`}
    >
      {variant === "desktop" && (
        <span
          aria-hidden="true"
          className={`h-px w-6 motion-safe:transition-colors ${isActive ? "bg-accent" : "bg-transparent"}`}
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
        <a
          href={`#${HERO_ID}`}
          className="self-start font-serif text-[19px] leading-tight italic"
        >
          {site.name}
        </a>
        <nav aria-label="Main">
          <ul className="flex gap-6">
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
        <a
          href={`#${HERO_ID}`}
          className="font-serif text-2xl leading-tight italic"
        >
          {site.name}
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