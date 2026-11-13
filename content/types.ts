import type { StaticImageData } from "next/image";

/** Section anchors used by the navigation. */
export type SectionId = "about" | "works" | "contact";

export type ImageAsset = {
  /** Static import, so next/image knows width, height and blur placeholder. */
  src: StaticImageData;
  alt: string;
  /** Per-image credit, only when it differs from the project credit. */
  credit?: string;
};

export type Video = {
  title: string;
  provider: "youtube" | "vimeo";
  /** The video ID only, not the full URL. */
  id: string;
};

export type Project = {
  /** URL anchor, e.g. "action-is-overtaken" → /#action-is-overtaken */
  slug: string;
  title: string;
  /** Free text, en dash with spaces for ranges: "2017", "2018 – 2019", "2020 – ongoing". */
  years: string;
  /** null until Nícola confirms it. */
  role: string | null;
  description: string;
  /** null until the photo arrives; the component renders a placeholder. */
  leadImage: ImageAsset | null;
  gallery: ImageAsset[];
  videos: Video[];
  /** Project-level credit line, e.g. "Photos: Eduardo Vial Paúl (2019)". */
  credits: string | null;
};

export type PressItem = {
  title: string;
  outlet: string;
  /** Free text, e.g. "July 2023". */
  date: string | null;
  url: string;
};

export type AboutBlock = {
  title: string;
  body: string;
  image: ImageAsset | null;
  credits: string | null;
};

export type About = {
  bio: string;
  /** Image next to the bio (still from 'Action is Overtaken'). */
  bioImage: ImageAsset | null;
  linesOfInquiry: string[];
  practice: AboutBlock;
  research: AboutBlock;
  press: PressItem[];
};

export type Site = {
  /** Short name for nav and metadata. */
  name: string;
  /** Full name for the hero. */
  fullName: string;
  roles: string[];
  heroImage: ImageAsset | null;
  email: string;
  linkedinUrl: string;
};