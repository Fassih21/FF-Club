export const BUSINESS = {
  name: "Shark Karate Gymnastic & Fitness Academy",
  tagline: "Train Hard. Hit Harder. Live Stronger.",
  shortDesc:
    "A neighbourhood martial arts & fitness club in Lahore — coaching kids and adults in kickboxing, gymnastics and disciplined strength training.",
  address:
    "Samnabad Children's Park, Samnabad, Lahore, 54000, Pakistan",
  plusCode: "G7WV+F8 Lahore, Pakistan",
  phone: "+92 324 4032714",
  whatsapp: "923244032714", // E.164 without + for wa.me
  hours: [
    { day: "Monday – Sunday", time: "Opens 8:00 PM" },
  ],
  rating: { value: 4.8, count: 14 },
  facebook: "https://facebook.com",
  instagram: "https://www.instagram.com/hashmihashir?igsh=YjM0ajU2M3Z5NTQ1",
  tiktok: "https://www.tiktok.com/@martialartsclubx",
  mapsEmbed:
    "https://maps.app.goo.gl/4o6YzjEAE2PAjFWZ6?g_st=aw",
      mapsLink:
        "https://www.google.com/maps/search/?api=1&query=Shark+Karate+Gymnastic+%26+Fitness+Academy+Samnabad+Lahore",
};

export const waLink = (msg = "Hello, I found your website and would like more information.") =>
  `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(msg)}`;