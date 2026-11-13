import type { Site } from "./types";
import heroImage from "./images/pam-berry/cv-pbe-069.jpg";

// Name confirmed by Nícola (11 Nov): "Vilander-Gajardo", with hyphen.
// TODO: order of the hero roles — Nícola is reviewing it.
// Hero image is provisional (still from Pam Berry, confirmed by Nícola on 13 Nov) until she sends a portrait.
// TODO: credit for the hero photo (Pam Berry photographer by session).
export const site: Site = {
  // TODO: switch to the custom domain once it is bought and connected (2 Dec).
  url: "https://nicola-vilander-portfolio.vercel.app",
  name: "Nícola Vilander-Gajardo",
  fullName: "Nícola Iris Vilander-Gajardo",
  roles: [
    "Transdisciplinary Artist, Actress, Director & Researcher",
    "PhD student in Drama, Theatre and Production Arts",
  ],
  heroImage: {
    src: heroImage,
    alt: "Nícola Vilander-Gajardo in a nun’s veil, arms outstretched, in front of a large red sphere in Pam Berry",
  },
  email: "nicola.vilander@gmail.com",
  linkedinUrl: "https://www.linkedin.com/in/nicolavilander",
};