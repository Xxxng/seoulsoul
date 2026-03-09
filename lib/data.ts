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
      color: "bg-red-400",
      fullGuide: {
        intro: "Seongsu-dong has undergone a dramatic transformation from a shoe-making industrial district to Seoul's premier creative hub. It's where luxury fashion houses host pop-ups next to gritty, working factories.",
        pros: ["Endless specialty coffee options", "Creative energy and networking", "Proximity to Seoul Forest Park", "High density of trendy pop-up stores"],
        cons: ["Can get extremely crowded on weekends", "Rapidly rising rent and prices", "Some parts still under heavy construction"],
        topSpots: ["Cafe Onion Seongsu", "Daelim Changgo", "LCDC Seoul", "Seoul Forest Park"],
        livingTip: "Look for apartments near Ttukseom Station for a slightly quieter vibe while remaining minutes away from the main Seongsu action."
      }
    },
    Hannam: {
      title: "Hannam-dong",
      vibe: "The Global Village",
      desc: "You appreciate the finer things: art galleries, international vibes, and quiet hilltop luxury.",
      color: "bg-blue-400",
      fullGuide: {
        intro: "Hannam-dong is perhaps Seoul's most international neighborhood, nestled between Namsan Mountain and the Han River. It serves as home to many embassies, luxury residences, and a refined arts scene.",
        pros: ["Truly international culinary scene", "Quiet, upscale residential atmosphere", "Home to Leeum Museum of Art", "Centrally located for easy access to north and south Seoul"],
        cons: ["Steep hills can be challenging to walk", "Generally higher cost of living", "Limited large-scale grocery stores nearby"],
        topSpots: ["Leeum Museum of Art", "Anthracite Coffee", "Gourmet 494", "Hannam-dong Cafe Street"],
        livingTip: "The 'UN Village' area is the most exclusive, but the alleys near Hannam Station offer a more vibrant, accessible expat life."
      }
    },
    Hongdae: {
      title: "Hongdae",
      vibe: "The Indie Heartbeat",
      desc: "You are fueled by youth culture, street art, and the non-stop energy of the underground scene.",
      color: "bg-yellow-400",
      fullGuide: {
        intro: "Hongdae is the epicentre of Korea's youth culture and indie arts scene. Named after Hongik University, the area is alive 24/7 with buskers, nightlife, and experimental fashion.",
        pros: ["Unbeatable nightlife and social scene", "Budget-friendly dining and shopping", "Excellent public transport connections", "Young, energetic, and accepting atmosphere"],
        cons: ["Noise levels are high at night", "Can feel overwhelming for those seeking peace", "Tourism has led to some commercialization"],
        topSpots: ["Hongdae Walking Street", "Gyeongui Line Forest Park", "Object Concept Store", "T1 Base Camp"],
        livingTip: "For a quieter experience, look toward Yeonnam-dong or Hapjeong, which offer 'Hongdae vibes' with significantly less noise."
      }
    },
    Euljiro: {
      title: "Euljiro",
      vibe: "The Hipjiro Legend",
      desc: "You love the 'Newtro' aesthetic—finding hidden gems in the gritty, authentic alleys of old Seoul.",
      color: "bg-green-400",
      fullGuide: {
        intro: "Euljiro represents the perfect intersection of Seoul's industrial past and its trendy present. Known as 'Hipjiro', its narrow alleys hide the city's coolest speakeasies and restaurants.",
        pros: ["Authentic, 'real' Seoul atmosphere", "Incredible hidden bars and dining", "Central location near Myeongdong and palaces", "Lower cost for unique, vintage-style spaces"],
        cons: ["Narrow, gritty alleys can be confusing", "Many buildings are older with less modern amenities", "The industrial noise during business hours"],
        topSpots: ["Coffee Hanyakbang", "Eulji Daobang", "Manseon Hof", "Sewoon Plaza"],
        livingTip: "Staying near Euljiro 3-ga puts you at the heart of the action, but look at the newly built officetels for modern comfort in this historic area."
      }
    },
    Gangnam: {
      title: "Gangnam",
      vibe: "The Modern Metropolis",
      desc: "You belong in the fast lane. Sleek, efficient, and professional is your way of life.",
      color: "bg-purple-400",
      fullGuide: {
        intro: "Gangnam is the symbol of modern Korea's rapid economic rise. It is the city's business, fashion, and plastic surgery capital, characterized by glass skyscrapers and high-speed living.",
        pros: ["Ultra-modern infrastructure and services", "Best shopping and high-end dining in Korea", "Extremely safe and well-lit at all hours", "Central business networking hub"],
        cons: ["Highest cost of living in the city", "Congested traffic during peak hours", "Can feel sterile or impersonal to some"],
        topSpots: ["COEX Mall & Starfield Library", "Apgujeong Rodeo Street", "Bongeunsa Temple", "Gangnam Station Underground Shopping"],
        livingTip: "Sinsa or Nonhyeon-dong offer a slightly more 'neighborhood' feel with great local food while still being in the heart of Gangnam."
      }
    }
  }
};

export const FAQ_DATA = [
  {
    q: "What is the best neighborhood in Seoul for digital nomads?",
    a: "Seongsu-dong and Hongdae are top choices. Seongsu offers a more professional creative vibe with incredible coworking cafes, while Hongdae/Yeonnam-dong provides a youthful energy and cheaper living costs."
  },
  {
    q: "Is it expensive to live in Seoul?",
    a: "The cost of living varies greatly. Gangnam and Hannam are the most expensive. However, areas like Hongdae or the outskirts offer affordable housing and excellent, cheap public transport and food."
  },
  {
    q: "How fast is the internet in Seoul neighborhoods?",
    a: "South Korea has some of the world's fastest internet. Most cafes in any neighborhood will offer free Wi-Fi with speeds exceeding 100Mbps, and 5G coverage is nearly universal."
  },
  {
    q: "Which area is best for a first-time visitor?",
    a: "Hannam-dong or the areas near Myeongdong/Euljiro are great because they are central and offer a mix of traditional culture and modern convenience."
  }
];
