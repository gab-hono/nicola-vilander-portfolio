import type { Site } from "./types";
import heroImage from "./images/pam-berry/cv-pbe-069.jpg";

// Name confirmed by Nícola (11 Nov): "Vilander-Gajardo", with hyphen.
// Hero roles and their order confirmed by Nícola (17 Nov).
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
    // Keeps the face in frame when the desktop hero is shorter than the photo.
    position: "50% 25%",
  },
  email: "nicola.vilander@gmail.com",
  linkedinUrl: "https://www.linkedin.com/in/nicolavilander",
};