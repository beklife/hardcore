// Mock data for Limes Müllem

export const upcomingEvents = [
  {
    id: 1,
    date: "2025-08-15",
    dayOfWeek: "Freitag",
    time: "20:00",
    band: "Die Kassierer",
    genre: "Punk Rock / Comedy Punk",
    price: "8€",
    description: "Legendärer Auftritt der Comedy-Punk-Ikonen. Laut, dreckig, lustig.",
    soldOut: false
  },
  {
    id: 2,
    date: "2025-08-22",
    dayOfWeek: "Freitag",
    time: "19:30",
    band: "Turbostaat",
    genre: "Punk / Hardcore",
    price: "12€",
    description: "Politischer Punk aus dem Norden. Support: Local Heroes.",
    soldOut: false
  },
  {
    id: 3,
    date: "2025-08-29",
    dayOfWeek: "Freitag",
    time: "20:00",
    band: "Soli-Konzert: Antifa Benefiz",
    genre: "Hardcore / Crust",
    price: "Spende",
    description: "Benefit-Show gegen Rechts. Alle Einnahmen gehen an lokale antifaschistische Initiativen.",
    soldOut: false
  },
  {
    id: 4,
    date: "2025-09-05",
    dayOfWeek: "Freitag",
    time: "20:00",
    band: "Pascow",
    genre: "Punk Rock",
    price: "10€",
    description: "Melodischer Punk mit deutschen Texten. Ausverkauft erwartet!",
    soldOut: true
  },
  {
    id: 5,
    date: "2025-09-12",
    dayOfWeek: "Freitag",
    time: "19:00",
    band: "Open Mic Night",
    genre: "Acoustic / DIY",
    price: "Frei",
    description: "Bring deine Gitarre, deine Texte, deine Wut. Anmeldung an der Theke.",
    soldOut: false
  }
];

export const drinks = [
  { name: "Kölsch vom Fass", price: "1,60€", description: "Das muss sein" },
  { name: "Müllem Pils", price: "2,00€", description: "Lokales Craft Beer" },
  { name: "Augustiner", price: "2,50€", description: "Der Klassiker" },
  { name: "Bier des Monats", price: "3,00€", description: "Wechselnde Auswahl" },
  { name: "Cuba Libre", price: "5,00€", description: "" },
  { name: "Vodka Energy", price: "5,00€", description: "" },
  { name: "Mate", price: "2,50€", description: "Club Mate & Flora Power" },
  { name: "Spezi / Limo", price: "2,00€", description: "Ohne Alkohol" },
  { name: "Kaffee / Espresso", price: "2,00€", description: "Fair Trade" }
];

export const food = [
  { 
    name: "Tagesgericht", 
    price: "6,50€", 
    description: "Täglich wechselnd, immer vegetarisch, auf Wunsch vegan",
    vegan: true
  },
  { 
    name: "Hausgemachter Kuchen", 
    price: "3,50€", 
    description: "Wechselnde Sorten – Schoko, Apfel, Karotte. Oft vegan!",
    vegan: true
  },
  { 
    name: "Vegane Waffel", 
    price: "4,00€", 
    description: "Mit Apfelmus, Zimt oder Puderzucker",
    vegan: true
  },
  { 
    name: "Antipasti Teller", 
    price: "5,50€", 
    description: "Oliven, eingelegtes Gemüse, Brot",
    vegan: false
  },
  { 
    name: "Suppe des Tages", 
    price: "4,50€", 
    description: "Mit frischem Brot, meistens vegan",
    vegan: true
  }
];

export const openingHours = {
  bar: [
    { day: "Montag", hours: "Geschlossen" },
    { day: "Dienstag", hours: "19:00 – 01:00" },
    { day: "Mittwoch", hours: "19:00 – 01:00" },
    { day: "Donnerstag", hours: "19:00 – 02:00" },
    { day: "Freitag", hours: "19:00 – 03:00" },
    { day: "Samstag", hours: "19:00 – 03:00" },
    { day: "Sonntag", hours: "Geschlossen" }
  ],
  cafe: [
    { day: "Montag", hours: "Geschlossen" },
    { day: "Dienstag", hours: "Geschlossen" },
    { day: "Mittwoch", hours: "15:00 – 19:00" },
    { day: "Donnerstag", hours: "15:00 – 19:00" },
    { day: "Freitag", hours: "15:00 – 19:00" },
    { day: "Samstag", hours: "14:00 – 19:00" },
    { day: "Sonntag", hours: "14:00 – 19:00" }
  ]
};

export const contactInfo = {
  address: {
    street: "Mülheimer Freiheit 150",
    postalCode: "51063",
    city: "Köln",
    district: "Mülheim"
  },
  phone: "+49 221 12345678",
  email: "info@limes-muellem.de",
  social: {
    instagram: "https://instagram.com/limesmuellem",
    facebook: "https://facebook.com/limesmuellem"
  },
  mapCoordinates: {
    lat: 50.9606,
    lng: 7.0297
  }
};

export const galleryImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=800",
    alt: "Live concert at Limes Müllem",
    type: "concert"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800",
    alt: "Packed crowd at punk show",
    type: "crowd"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800",
    alt: "Band on stage",
    type: "concert"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1598387993281-cecf8b71a8f8?w=800",
    alt: "Bar interior",
    type: "bar"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=800",
    alt: "Homemade cakes",
    type: "food"
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1533928298208-27ff66555d8d?w=800",
    alt: "Coffee and cake",
    type: "cafe"
  }
];

export const houseRules = [
  "Kein Platz für Nazis, Rassist*innen, Sexist*innen, Homophobe oder andere Arschlöcher",
  "Respekt für alle Menschen – egal welche Herkunft, Geschlecht, Sexualität",
  "Konzerte enden um 22:00 Uhr – Rücksicht auf die Nachbar*innen",
  "Draußen bitte leise – wir wollen hier noch lange spielen können",
  "Saufen ja, Stress nein – bei Ärger fliegst du raus",
  "Foto & Video nur mit Zustimmung der Leute im Bild"
];