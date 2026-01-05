export type ClientStat = {
  label: string;
  value: string;
};

export type ClientTestimonial = {
  quote: string;
  author: string;
  role: string;
  avatar: string;
};

export type Client = {
  id: string;
  name: string;
  since: string;
  description: string;
  images: string[];
  stats: ClientStat[];
  testimonial?: ClientTestimonial;
  services: string[];
};

export const CLIENTS: Client[] = [
  {
    id: "amara",
    name: "Amara",
    since: "Client since 2023",
    description:
      "By merging design taste with performance discipline, we helped Amara scale their 100% organic snack line through data-driven creative, smarter experiments, and continuous iteration.",
    images: ["/amara-2.webp", "/amara-1.webp", "/amara-3.webp", "/amara-4.webp"],
    stats: [
      { value: "+70%", label: "Revenue attributable to Klaviyo" },
      { value: "+40%", label: "Increase AOV new customers" },
      { value: "+32%", label: "CVR (Conversion Rate) landing page" },
    ],
    testimonial: {
      quote:
        "We’ve been working with 551 (formerly Wingz Media) for more than two years, and their impact on our success has been tremendous.",
      author: "Kristy Kohler",
      role: "Marketing Team",
      avatar: "/kristy.png",
    },
    services: ["Performance Marketing", "Creative Strategy", "Conversion Optimization", "Paid Media"],
  },

  {
    id: "the-plug",
    name: "The Plug",
    since: "Client since 2023",
    description:
      "From their earliest days online, we helped The Plug identify the messaging, visuals, and offers that truly resonated.Through consistent creative iteration and simple, repeated tests, that foundation grew into 10,000x scale.",
    images: ["/plug-2.webp", "/plug-1.webp", "/plug-3.webp", "/plug-4.webp"],
    stats: [
      { value: "+45%", label: "Revenue attributable to Klaviyo" },
      { value: "+35%", label: "CVR landing page" },
      { value: "+15", label: "UGCs (User Generated Contents)" },
    ],
    testimonial: {
      quote:
        "“551 feels like another co-founder in the business providing strategy feedback on the paid/growth side that most agencies cannot provide and this is helped us continue to innovate and iterate on our vision, which has turned into compounded growth for us.”",
      author: "Ray Kim",
      role: "CEO",
      avatar: "/ray-kim.png",
    },
    services: ["Web", "Creative", "Paid Media Retention", "UGC"],
  },

  {
    id: "ezbombs",
    name: "Ez Bombs",
    since: "Client since 2024",
    description:
      "EZ Bombs went viral on TikTok Shop and needed email that did more than look good — it had to convert. Our work focused on turning that TikTok audience into repeat customers on Shopify.",
    images: ["/ezbombs.webp"],
    stats: [
      { value: "+50%", label: "Revenue attributable to Klaviyo" },
      { value: "+70%", label: "open rate" },
      { value: "+80%", label: "CTR (Click-Through Rate)" },
    ],
    services: ["Retention"],
  },

  {
    id: "pandj",
    name: "P&J Trading",
    since: "Client since 2024",
    description:
      "As Amazon’s leading scent-oil brand, P&J wanted to grow beyond the marketplace and strengthen their Shopify presence. We focused on conversion-driven design and a refreshed retention strategy to support that shift.",
    images: ["/pj.webp"],
    stats: [
      { value: "+20%", label: "CVR entire website" },
      { value: "+200%", label: "Revenue attributable to Klaviyo" },
      { value: "+90%", label: "Open Rate" },
    ],
    services: ["Web", "Retention"],
  },
];
