// components/data/projectsData.js

const projects = [
  {
    id: "talebot", // slug -> /en/talebot
    i18nKey: "projects.items.talebot",
    title: "TALEBOT",
    subtitle: "DESIGN • DEVELOPMENT",
    img: "/logos/talebotlogo.png",

    // Case study template data (şimdilik skeleton)
    caseStudy: {
      hero: {
        cover: null,
        coverAlt: "Talebot cover",
      },
      meta: {
        year: null,
        role: null,
        client: null,
        tools: [],
      },
      blocks: [],
    },
  },

  {
    id: "dismas",
    i18nKey: "projects.items.dismas",
    title: "DISMAS STUDIO",
    subtitle: "DESIGN • DEVELOPMENT",
    img: "/logos/dismaslogo.png",

    caseStudy: {
      hero: {
        cover: null,
        coverAlt: "Dismas Studio cover",
      },
      meta: {
        year: null,
        role: null,
        client: null,
        tools: [],
      },
      blocks: [],
    },
  },

  {
    id: "arnavutkoy-bel",
    i18nKey: "projects.items.arnavutkoyBel",
    title: "ARNAVUTKÖY BEL.",
    subtitle: "CSS DEVELOPMENT",
    img: "/logos/arnavutkoy-bel.png",

    caseStudy: {
      hero: {
        cover: null,
        coverAlt: "Arnavutköy Belediyesi cover",
      },
      meta: {
        year: null,
        role: null,
        client: "Arnavutköy Belediyesi",
        tools: [],
      },
      blocks: [],
    },
  },

  {
    id: "yildiztas",
    i18nKey: "projects.items.yildiztas",
    title: "YILDIZTAŞ",
    subtitle: "DESIGN • DEVELOPMENT",
    img: "/logos/yildiztas.png",

    caseStudy: {
      hero: {
        cover: null,
        coverAlt: "Yıldıztaş cover",
      },
      meta: {
        year: null,
        role: null,
        client: "Yıldıztaş",
        tools: [],
      },
      blocks: [],
    },
  },

  {
    id: "bikibris",
    i18nKey: "projects.items.bikibris",
    title: "BİKIBRIS",
    subtitle: "MOBILE APP DESIGN",
    img: "/logos/bikibris.png",

    caseStudy: {
      hero: {
        cover: null,
        coverAlt: "BiKıbrıs cover",
      },
      meta: {
        year: null,
        role: "Mobile App Design",
        client: null,
        tools: [],
      },
      blocks: [],
    },
  },

  {
    id: "when",
    i18nKey: "projects.items.when",
    title: "WHEN",
    subtitle: "DESIGN • DEVELOPMENT",
    img: "/logos/when.png",

    caseStudy: {
      hero: {
        cover: null,
        coverAlt: "When cover",
      },
      meta: {
        year: null,
        role: null,
        client: null,
        tools: [],
      },
      blocks: [],
    },
  },
];

export default projects;
