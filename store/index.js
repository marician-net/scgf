export const state = () => ({
    scrollToMenu: "",
    contributors: [
      {
        id: 1,
        img: "1.png",
        name: "Laura Weindorf",
        title: "Founder",
        address: "Michigan, USA",
        sosmed: {
          twitter: "https://twitter.com/@",
          linkedin: "https://linkedin.com/@",
          github: "https://github.com/@",
          telegram: "https://t.com/@",
        },
      },
      {
        id: 2,
        img: "2.png",
        name: "Kate",
        title: "Designer",
        address: "St. Petersburg, Russia",
        sosmed: {
          twitter: "https://twitter.com/@",
          linkedin: "https://linkedin.com/@",
          github: "https://github.com/@",
          telegram: "https://t.com/@",
        },
      },
      {
        id: 3,
        img: "3.png",
        name: "Julia",
        title: "Girl Friday",
        address: "Virginia, USA",
        sosmed: {
          twitter: "https://twitter.com/@",
          linkedin: "https://linkedin.com/@",
          github: "https://github.com/@",
          telegram: "https://t.com/@",
        },
      },
      {
        id: 4,
        img: "4.png",
        name: "Abhishek",
        title: "Blockchain Wizard",
        address: "Chandigarh, India",
        sosmed: {
          twitter: "https://twitter.com/@",
          linkedin: "https://linkedin.com/@",
          github: "https://github.com/@",
          telegram: "https://t.com/@",
        },
      },
      {
        id: 5,
        img: "5.png",
        name: "Jeff Puttstrife",
        title: "UX/UI Bro",
        address: "Bangkok, Thailand",
        sosmed: {
          twitter: "https://twitter.com/@",
          linkedin: "https://linkedin.com/@",
          github: "https://github.com/@",
          telegram: "https://t.com/@",
        },
      },
      {
        id: 6,
        img: "6.png",
        name: "Yamate",
        title: "Front End Shinobi",
        address: "Tokyo, Japan",
        sosmed: {
          twitter: "https://twitter.com/@",
          linkedin: "https://linkedin.com/@",
          github: "https://github.com/@",
          telegram: "https://t.com/@",
        },
      },
      {
        id: 7,
        img: "7.png",
        name: "Zachariah Farhang",
        title: "Front End Rockstar",
        address: "Herat, Afghanistan",
        sosmed: {
          twitter: "https://twitter.com/@",
          linkedin: "https://linkedin.com/@",
          github: "https://github.com/@",
          telegram: "https://t.com/@",
        },
      },
      {
        id: 8,
        img: "8.png",
        name: "Lourenco",
        title: "Front End Chad",
        address: "Lisbon, Portugal",
        sosmed: {
          twitter: "https://twitter.com/@",
          linkedin: "https://linkedin.com/@",
          github: "https://github.com/@",
          telegram: "https://t.com/@",
        },
      },
    ]
  })
  export const mutations = {
    scrollToMenu(state,data) {
      state.scrollToMenu = data
    }
  }