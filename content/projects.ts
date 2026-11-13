import type { Project } from "./types";
import actionLead from "./images/action-is-overtaken/escena-11-a-17-14.jpg";
import actionLake from "./images/action-is-overtaken/escena-11-a-17-9.jpg";
import actionHouse from "./images/action-is-overtaken/escena-2-a-10-2.jpg";
import divasLead from "./images/divas/pict1163.jpg";
import divasFabric from "./images/divas/pict1159.jpg";
import divasStage from "./images/divas/pict1186.jpg";
import misterLead from "./images/mister-the-earrings/1g4a7052.jpg";
import misterSeated from "./images/mister-the-earrings/1g4a6984.jpg";
import misterAudience from "./images/mister-the-earrings/1g4a7117.jpg";
import pamBerryLead from "./images/pam-berry/pam-berry-25.jpg";
import pamBerryDuo from "./images/pam-berry/cv-pbe-052.jpg";
import pamBerryBall from "./images/pam-berry/cv-pbe-107.jpg";

// Texts validated by Nícola (7 Nov); roles and credits updated with her answers (11 Nov).
// Images added on 13 Nov (Action is Overtaken, Pam Berry, Mister, Divas).
// Pending from Nícola: Pam Berry photo credits, Mister description, remaining images and video IDs.
export const projects: Project[] = [
  {
    slug: "a-more-than-human-opera",
    title: "A More-than-Human Opera",
    years: "2025",
    role: "Director, Performer, Playwright",
    description:
      "A More-than-Human Opera is an immersive, practice-as-research project that reconceives opera as a more-than-human assemblage in which voice, audience, technology, and environment are co-constitutive agents. Through AI-mediated vocal processing, immersive staging, and participatory dramaturgies, the work interrogates how binary operatic norms are materially produced and how they might be destabilised through trans* vocal embodiment and technological non-recognition.",
    leadImage: null,
    gallery: [],
    videos: [],
    credits: "Photos: Nícola Vilander-Gajardo",
  },
  {
    slug: "listening-southward",
    title: "Listening Southward / Kaksi etelää",
    years: "2026 – ongoing",
    role: "Performer, Creative Director, Author",
    description:
      "Listening Southward / Kaksi etelää opens a line of enquiry grounded in more-than-human thinking and biosociocultural justice: opera as a sensory method for listening to human–microbial relations between Patagonia and Finland. Its first paper, co-authored with Claudia Matus, was presented at the CSSM 2026 Conference (University of Helsinki).",
    leadImage: null,
    gallery: [],
    videos: [],
    credits: "Photos: Adriana García Picasso",
  },
  {
    slug: "mister-the-earrings",
    title: "Mister, the earrings look too good on you",
    years: "2023 – ongoing",
    role: "Performer, Creative Director, Author",
    // TODO: Nícola to send 2–3 more sentences.
    description:
      "Affects and the first transition of a teacher in an elite British school in Chile. Performances in London (2025), Santiago (2024), and Brno (2023).",
    leadImage: {
      src: misterLead,
      alt: "Black-and-white photo of a performer raising both hands above the head beside a grand piano",
    },
    gallery: [
      {
        src: misterSeated,
        alt: "A performer in a long black dress sits beside a music stand, holding sheets of paper, in front of purple curtains",
      },
      {
        src: misterAudience,
        alt: "A performer in a long black dress addresses an audience seated in the foreground, with a piano and a screen behind",
      },
    ],
    videos: [],
    credits: "Photos: Guildhall School",
  },
  {
    slug: "action-is-overtaken",
    title: "Action is Overtaken",
    years: "2020 – ongoing",
    role: "Director & Playwright",
    description:
      "A performative film and site-specific project set in the director’s homeland in southern Chile, a territory marked by the entangled histories of the Mapuche people, German colonisation, and ecological collapse. After a devastating fire engulfs the hills of Santiago, a group of artists seeks refuge in an ancestral wooden house built in 1917. The architecture begins to act: objects, wind, and rain take over the dramaturgy, leading the ensemble into the surrounding forests where new, more-than-human bodies emerge.",
    leadImage: {
      src: actionLead,
      alt: "Three performers in white and black lie entangled on the forest floor",
    },
    gallery: [
      {
        src: actionLake,
        alt: "Three figures stand facing a lake, with forested mountains and low clouds beyond",
      },
      {
        src: actionHouse,
        alt: "A figure at the foot of a wooden staircase, backlit by a tall window",
      },
    ],
    // TODO: teaser and sound composition video IDs pending.
    videos: [],
    credits: "Still frames from ‘Action is Overtaken’, dir. Nícola Vilander-Gajardo (2021)",
  },
  {
    slug: "pam-berry",
    title: "Pam Berry",
    years: "2022 – 2025",
    role: "Performer",
    description:
      "A musical-theatrical piece written by Rae del Cerro on lesbian love and solitude in Chile. Directed by Ana Luz Ormazábal, the work fuses opera, metal, and reggaeton in a soundscape of passion, liberation, and rage. Nícola performs a lesbian nun trapped in a convent and a wounded circus lion, embodying queer persistence through song and complex vocal constructions. Winner of the XX Muestra Nacional de Dramaturgia (2022).",
    leadImage: {
      src: pamBerryLead,
      alt: "Two performers on a dark stage: one crouches in a cold spotlight, the other, veiled and in a long coat, raises both arms in red light",
    },
    gallery: [
      {
        src: pamBerryDuo,
        alt: "Two performers sit on the stage floor, one in a nun’s habit, under warm light",
      },
      {
        src: pamBerryBall,
        alt: "A performer leans against a large red ball on stage, lit in red and blue",
      },
    ],
    videos: [],
    // Kept from the PDF until Nícola confirms them.
    credits: "Photos: Muestra Nacional de Dramaturgia (2022), @agradablesujeto (2024)",
  },
  {
    slug: "pedagogy-of-the-affect",
    title: "Pedagogy of the Affect",
    years: "2021 – 2025",
    role: "Theatre Education & Creativity",
    description:
      "As Senior School Drama Teacher at The Grange School Chile (Cambridge IGCSE & A-Level Drama), Nícola led bilingual performance education grounded in embodiment and affect theory. Her Pedagogy of the Affect reconsiders more-than-human encounters within the classroom: how atmosphere, emotion, and voice co-shape collective learning. She has directed and mentored numerous student productions: Tragic (2023), Angels in America, The Just Assassins, The Bald Soprano (2024), and A Midsummer Night’s Dream (2025).",
    leadImage: null,
    gallery: [],
    videos: [],
    credits: "Photos: Vicente Fernández & The Grange School",
  },
  {
    slug: "divas",
    title: "Divas",
    years: "2018 – 2019",
    role: "Director, Performer, Playwright",
    description:
      "Divas was a 50-minute, 360° immersive, experimental theatre work critically examining representations of women and gender within the operatic canon. Structured as a fictional television interview with three retired opera divas from the 1980s, the piece generated Dead Divas, a speculative “new opera” that dismantled and recomposed La Traviata, Carmen, and Madama Butterfly. Vocal excess, instability, repetition, and breakdown were treated as material forces rather than expressive effects.",
    leadImage: {
      src: divasLead,
      alt: "Black-and-white close-up of a hand and a body against creased fabric",
    },
    gallery: [
      {
        src: divasFabric,
        alt: "Black-and-white photo of a figure lying on creased fabric, partly in shadow",
      },
      {
        src: divasStage,
        alt: "Black-and-white photo of performers in light clothing reaching out on a dark stage",
      },
    ],
    videos: [],
    credits: "Photos: Eduardo Vial Paúl (2019)",
  },
  {
    slug: "elektra",
    title: "Elektra",
    years: "2017",
    role: "Director & Playwright",
    description:
      "Elektra was a bilingual (German–Spanish), immersive reworking of Hugo von Hofmannsthal’s text created with an all-women cast in resonance with the Chilean feminist uprising. All performers were trained to embody the same roles—often simultaneously—merging contemporary dance practices with the foundations of lyric voice. The work incorporated live sound mixing and video projection as active dramaturgical agents.",
    leadImage: null,
    gallery: [],
    videos: [],
    credits: "Photos: Juan Ramírez Jardua",
  },
];