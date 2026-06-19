export const BUSINESS = {
  name: "Fitness Fighter Club",
  tagline: "Train Hard. Hit Harder. Live Stronger.",
  shortDesc:
    "A neighbourhood martial arts & fitness club in Lahore — coaching kids and adults in kickboxing, gymnastics and disciplined strength training.",
  address:
    "Gulfishan Colony Children's Park, Gulfishan Colony, Lahore, 54000, Pakistan",
  plusCode: "G7WV+F8 Lahore, Pakistan",
  phone: "+92 324 4032714",
  whatsapp: "923244032714", // E.164 without + for wa.me
  hours: [
    { day: "Monday – Sunday", time: "Opens 8:00 PM" },
  ],
  rating: { value: 4.8, count: 14 },
  facebook: "https://facebook.com",
  mapsEmbed:
    "https://www.google.com/maps?q=Gulfishan+Colony+Children+Park+Lahore&output=embed",
  mapsLink:
    "https://www.google.com/maps/search/?api=1&query=Fitness+Fighter+Club+Gulfishan+Colony+Lahore",
};

export const waLink = (msg = "Hello, I found your website and would like more information.") =>
  `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(msg)}`;
