import type { SectionId } from "./types";

export type NavItem = {
  id: SectionId;
  label: string;
};

export const navItems: readonly NavItem[] = [
  { id: "about", label: "About" },
  { id: "works", label: "Works" },
  { id: "contact", label: "Contact" },
];

/** Hero anchor: not in the menu, but tracked so nothing is highlighted over the hero. */
export const HERO_ID = "top";