export const BUSINESS = {
  name: "Shark Karate Gymnastic & Fitness Academy",
  tagline: "Train Hard. Hit Harder. Live Stronger.",
  shortDesc:
    "A neighbourhood martial arts & fitness club in Lahore — coaching kids and adults in kickboxing, gymnastics and disciplined strength training.",
  address:
    "Near first, round-about, Samanabad Main Boulevard, near Kim's restaurant, Samanabad Town, Lahore, 54000, Pakistan",
  plusCode: "G7WV+F8 Lahore, Pakistan",
  phone: "+92 324 4032714",
  phone2: "+92 322 2221548",
  whatsapp: "923244032714",
  hours: [
    { day: "Monday – Friday", time: "Slot 1: 7:15 PM – 8:15 PM" },
    { day: "Monday – Friday", time: "Slot 2: 8:30 PM – 9:30 PM" },
  ],
  rating: { value: 4.8, count: 14 },
  facebook: "https://facebook.com",
  instagram: "https://www.instagram.com/hashmihashir?igsh=YjM0ajU2M3Z5NTQ1",
  tiktok: "https://www.tiktok.com/@martialartsclubx",
  mapsLink: "https://maps.app.goo.gl/4o6YzjEAE2PAjFWZ6?g_st=aw",
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3400.3448060191618!2d74.3010182!3d31.542150499999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919030f4af90acd%3A0x529998c165794ab7!2sShark%20Karate%20Gymnastic%20%26%20Fitness%20Academy!5e0!3m2!1sen!2s!4v1782059560432!5m2!1sen!2s",
};

export const waLink = (msg = "Hello, I found your website and would like more information.") =>
  `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(msg)}`;