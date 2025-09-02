export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Voices of Drought",
  description:
    "Community Conversations & Survey by Lifeline Central West.",
  urls: {
    qualtricsSurvey: "https://lifelinetraining.syd1.qualtrics.com/jfe/form/SV_2njS3NnLkkyPSK2?Q_CHL=gl&Q_EmbeddedDataPreserve=false",
    humanitixRegister: "https://events.humanitix.com/llcw-community-focus-groups-have-your-say",
    crisiChat: "https://www.lifeline.org.au/crisis-chat/#",
    crisisText: "https://www.lifeline.org.au/crisis-text/",
  },
  contacts: {
    phone: "1300 798 258",
    email: "info@lifelinecentralwest.org.au",
    crisisLine: "13 11 14",
    emergency: "000"
  },
  locations: [
    {
      lga: "Cowra Shire",
      towns: ["Cowra (×2)", "Woodstock", "Gooloogong", "Wattamondara"],
    },
    {
      lga: "Blayney Shire",
      towns: ["Blayney", "Millthorpe", "Carcoar", "Neville", "Lyndhurst"],
    },
    {
      lga: "Weddin Shire",
      towns: ["Grenfell", "Caragabal", "Greenethorpe", "Quandialla"],
    },
    {
      lga: "Orange City",
      towns: ["Orange"],
    },
    {
      lga: "Cabonne Shire",
      towns: ["Molong", "Canowindra", "Cudal", "Eugowra", "Yeoval"],
    },
  ],
  faqs: [
    {
      question: "Is it confidential?",
      answer: "Yes—sessions are de-identified and survey data is anonymous.",
    },
    {
      question: "How long is it?",
      answer: "Conversations are approximately 90 minutes; the survey takes 10–15 minutes.",
    },
    {
      question: "Who can take part?",
      answer: "Residents 18+. Ages 16–17 are welcome with guardian consent.",
    },
    {
      question: "What if I feel upset during a session?",
      answer: "Facilitators and a dedicated support person are on hand. You can pause or leave at any time, no questions asked.",
    },
    {
      question: "How does the prize draw work?",
      answer: "Entry is optional and collected via a separate form to keep your responses anonymous. Winners are drawn randomly after the participation period closes.",
    },
  ],
};
