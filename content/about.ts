import type { About } from "./types";
import bioImage from "./images/action-is-overtaken/escena-18-a-26-1.jpg";
import practiceImage from "./images/pam-berry/cv-pbe-041.jpg";
import researchImage from "./images/mister-the-earrings/1g4a7175.jpg";

// Texts validated by Nícola (7 Nov); name updated to "Vilander-Gajardo" (11 Nov).
// Images added on 13 Nov. Pending: practice photo credit and press links.
export const about: About = {
  bio: "Nícola Vilander-Gajardo is a Chilean transdisciplinary artist, performer, and educator working across opera, theatre, and artistic research. Her practice approaches opera and performance as entangled bio-socio-cultural phenomena. Grounded in trans experience, social justice frameworks, and inclusive pedagogies, her work engages human and more-than-human bodies as collaborators. By deliberately blurring the boundaries between artist, performer, and audience, her practice foregrounds collective authorship, affective circulation, and embodied modes of knowing that challenge canonical, colonial, and binary structures within opera and performance.",

  bioImage: {
    src: bioImage,
    alt: "A performer lies back among ferns on the forest floor",
    credit: "Still from ‘Action is Overtaken’, dir. Nícola Vilander-Gajardo (2021)",
  },

  linesOfInquiry: [
    "Posthumanism",
    "Affect",
    "Embodiment",
    "Trans+",
    "Voice",
    "Opera",
    "Ecologies",
    "Technologies",
    "Communities",
    "Performance Practice-as-Research",
    "Pedagogy",
    "Collective Authorship",
    "Social Justice",
  ],

  practice: {
    title: "Operatic & Vocal Practice",
    body: "From witnessing La Traviata at the age of eight in southern Chile, through works such as Elektra and Divas, to the ongoing imagination of a transcultural, transdisciplinary, and more-than-human opera, opera has remained Nícola’s primary ground of transformation. Her practice approaches the operatic bodies as resonant matter, explored through distortion, looping, improvisation, and field recording. Current experiments engage voice as both human and nonhuman vibration.",
    image: {
      src: practiceImage,
      alt: "A performer in a dark coat sits on a red ball, one hand raised, in front of a giant red circle on stage",
      // TODO: credit pending — Pam Berry photographer by session.
    },
    credits: null,
  },

  research: {
    title: "Research & Networks",
    body: "Nícola’s research explores how voice, affect, and materiality operate as epistemic tools within artistic creation. Since September 2026, she has been undertaking an MPhil/PhD in Drama, Theatre and Production Arts at the Guildhall School of Music and Drama in London, with her thesis A More-than-Human Opera. She has presented papers and performance-lectures at the CSSM Conference (University of Helsinki, 2026), the Performance Studies Network (Guildhall School, 2025), the 6th Interdisciplinary Research in Education Congress (PUC Chile, 2024), and the SIEF Congress (Brno, 2023). She is a member of the International Federation for Theatre Research (IFTR) and the Trans+ Virtual Centre of Excellence.",
    image: {
      src: researchImage,
      alt: "A performer in a long black dress addresses a seated audience in front of a projected text and purple curtains",
      credit: "Photo: Guildhall School",
    },
    credits: null,
  },

  // TODO: URLs, outlets and dates pending from Nícola:
  // - "Mi profe es trans": Profesores transgénero en colegios de Chile (July 2023)
  // - La transición de una profesora
  // - Pam Berry — Centro Gabriela Mistral (GAM)
  // - Interview with Ana Luz Ormazábal and Nícola Vilander (YouTube)
  press: [],
};