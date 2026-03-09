export const QUIZ_DATA = {
  questions: [
    {
      id: 1,
      question: "How do you prefer to start your productive morning?",
      options: [
        { text: "Sleek, high-rise coworking space with a city view.", weights: { Gangnam: 5, Hannam: 1, Seongsu: 1 } },
        { text: "Specialty coffee in a converted industrial warehouse.", weights: { Seongsu: 5, Euljiro: 3, Hongdae: 1 } },
        { text: "A quiet walk through a sophisticated, hilly village.", weights: { Hannam: 5, Gangnam: 2, Seongsu: 1 } },
        { text: "Vibrant cafe surrounded by students and street art.", weights: { Hongdae: 5, Seongsu: 1, Euljiro: 1 } }
      ]
    },
    {
      id: 2,
      question: "What kind of 'after-work' vibe are you looking for?",
      options: [
        { text: "Exploring hidden 'Newtro' bars in narrow alleys.", weights: { Euljiro: 5, Seongsu: 2, Hongdae: 2 } },
        { text: "World-class dining or a wine bar with expats.", weights: { Hannam: 5, Gangnam: 3, Seongsu: 1 } },
        { text: "Live indie music and affordable street drinks.", weights: { Hongdae: 5, Euljiro: 1, Seongsu: 1 } },
        { text: "High-end shopping and luxury gym sessions.", weights: { Gangnam: 5, Hannam: 2 } }
      ]
    },
    {
      id: 3,
      question: "Which aesthetic inspires your creativity the most?",
      options: [
        { text: "Raw concrete, exposed brick, and craftsmanship.", weights: { Seongsu: 5, Euljiro: 3, Hongdae: 2 } },
        { text: "Polished glass, neon lights, and futuristic tech.", weights: { Gangnam: 5, Hannam: 1, Hongdae: 1 } },
        { text: "Minimalist luxury, art galleries, and quiet greenery.", weights: { Hannam: 5, Gangnam: 2, Seongsu: 2 } },
        { text: "DIY posters, murals, and quirky vintage shops.", weights: { Hongdae: 5, Euljiro: 2, Seongsu: 2 } }
      ]
    },
    {
        id: 4,
        question: "Pick your ideal 'Nomad Fuel' lunch:",
        options: [
          { text: "Healthy grain bowl in a minimalist cafe.", weights: { Hannam: 5, Seongsu: 4, Gangnam: 3 } },
          { text: "Classic Korean street food on a budget.", weights: { Hongdae: 5, Euljiro: 4, Seongsu: 1 } },
          { text: "Quick, efficient meal at a high-end salad bar.", weights: { Gangnam: 5, Hannam: 2 } },
          { text: "Steaming noodles in a gritty traditional market.", weights: { Euljiro: 5, Hongdae: 2, Seongsu: 2 } }
        ]
    }
  ],
  results: {
    Seongsu: {
      title: "Seongsu-dong",
      vibe: "The Brooklyn of Seoul",
      desc: "You thrive in creative, industrial spaces where old-school grit meets high-tech innovation.",
      color: "bg-red-400"
    },
    Hannam: {
      title: "Hannam-dong",
      vibe: "The Global Village",
      desc: "You appreciate the finer things: art galleries, international vibes, and quiet hilltop luxury.",
      color: "bg-blue-400"
    },
    Hongdae: {
      title: "Hongdae",
      vibe: "The Indie Heartbeat",
      desc: "You are fueled by youth culture, street art, and the non-stop energy of the underground scene.",
      color: "bg-yellow-400"
    },
    Euljiro: {
      title: "Euljiro",
      vibe: "The Hipjiro Legend",
      desc: "You love the 'Newtro' aesthetic—finding hidden gems in the gritty, authentic alleys of old Seoul.",
      color: "bg-green-400"
    },
    Gangnam: {
      title: "Gangnam",
      vibe: "The Modern Metropolis",
      desc: "You belong in the fast lane. Sleek, efficient, and professional is your way of life.",
      color: "bg-purple-400"
    }
  }
};
