export const site = {
  name: "Aditya Packers and Movers",
  tagline: "Safe • Secure • On Time",
  city: "Rajahmundry",
  state: "Andhra Pradesh",
  yearsExperience: 10,
  phonePrimaryDisplay: "+91 85000 83803",
  phonePrimaryTel: "tel:+918500083803",
  phoneSecondaryDisplay: "+91 89855 98006",
  phoneSecondaryTel: "tel:+918985598006",
  whatsappDisplay: "+91 85000 83803",
  whatsappBase: "https://wa.me/918500083803",
  email: "adityapakersandmovers@gmail.com",
  emailHref: "mailto:adityapakersandmovers@gmail.com",
  addressLine: "Lalitha Nagar 1st Street, near Krishna Temple, Paper Mill Road",
  addressCity: "Rajahmundry",
  addressRegion: "Andhra Pradesh",
  addressCountry: "IN",
  addressFull:
    "Lalitha Nagar 1st Street, near Krishna Temple, Paper Mill Road, Rajahmundry, Andhra Pradesh",
  instagram: "https://www.instagram.com/aditya_packers_and_movers_rjy/",
  hoursLabel: "Open every day",
  hoursDetail: "Monday to Sunday, 7:00 AM – 9:00 PM",
  hoursShort: "Open Every Day · 7 AM–9 PM",
} as const;

export const mapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  site.addressFull,
)}`;

export const mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
  site.addressFull,
)}&output=embed`;

/** Builds a wa.me link with a URL-encoded message. */
export function whatsappUrl(message: string) {
  return `${site.whatsappBase}?text=${encodeURIComponent(message)}`;
}

export const quickEnquiryMessage = `Hello ${site.name}, I would like a free moving quote.`;

export type QuoteFields = {
  name: string;
  mobile: string;
  movingFrom: string;
  movingTo: string;
  service: string;
  date: string;
  details?: string;
};

export function buildQuoteMessage(v: QuoteFields) {
  const lines = [
    `🙏 *Hello Aditya Packers and Movers!*`,
    `I would like to request a *free moving quote*.`,
    ``,
    `━━━━━━━━━━━━━━━━━━━━`,
    `📋 *ENQUIRY DETAILS*`,
    `━━━━━━━━━━━━━━━━━━━━`,
    ``,
    `👤 *Name:* ${v.name}`,
    `📱 *Mobile:* ${v.mobile}`,
    ``,
    `📦 *Service Required:* ${v.service}`,
    ``,
    `📍 *Moving From:* ${v.movingFrom}`,
    `🏠 *Moving To:* ${v.movingTo}`,
    ``,
    `📅 *Preferred Date:* ${v.date}`,
  ];
  if (v.details && v.details.trim()) {
    lines.push(``);
    lines.push(`📝 *Additional Details:*`);
    lines.push(v.details.trim());
  }
  lines.push(``);
  lines.push(`━━━━━━━━━━━━━━━━━━━━`);
  lines.push(`Please confirm availability and share a quote at your earliest convenience.`);
  lines.push(``);
  lines.push(`Thank you! 🙏`);
  return lines.join("\n");
}

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "MovingCompany",
  name: site.name,
  slogan: site.tagline,
  description:
    "Packers and movers in Rajahmundry offering household shifting, office relocation, packing and unpacking, vehicle transportation and domestic relocation.",
  telephone: ["+918500083803", "+918985598006"],
  email: site.email,
  areaServed: [
    { "@type": "City", name: "Rajahmundry" },
    { "@type": "Country", name: "India" },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Lalitha Nagar 1st Street, near Krishna Temple, Paper Mill Road",
    addressLocality: "Rajahmundry",
    addressRegion: "Andhra Pradesh",
    addressCountry: "IN",
  },
  sameAs: [site.instagram],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "07:00",
      closes: "21:00",
    },
  ],
};
