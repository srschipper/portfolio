import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    title: "Appian Website Redesign",
    description:
      "Led content strategy, creative direction, and UX optimization for a 200+ page enterprise website redesign that strengthened brand storytelling and improved the customer experience.",
    tags: ["Content Strategy", "UX Optimization", "AEM", "Lead Generation"],
    image: "/images/project-appian.svg",
  },
  {
    title: "UDance Digital Campaign",
    description:
      "Led brand and digital marketing for a large-scale nonprofit dance marathon, designing merch, campaign graphics, and event-day branding that helped drive $1.78M in fundraising for childhood cancer research.",
    tags: ["Brand Design", "Social Media", "Event Branding", "Fundraising"],
    image: "/images/udance/graphics-1.jpg",
    galleries: [
      {
        label: "Merch Design",
        images: [
          { src: "/images/udance/merch-1.jpg", width: 1400, height: 788 },
          { src: "/images/udance/merch-2.jpg", width: 1400, height: 788 },
          { src: "/images/udance/merch-3.jpg", width: 1400, height: 788 },
        ],
      },
      {
        label: "Social Graphics",
        images: [
          { src: "/images/udance/graphics-1.jpg", width: 787, height: 1400 },
          { src: "/images/udance/graphics-2.jpg", width: 787, height: 1400 },
          { src: "/images/udance/graphics-3.jpg", width: 787, height: 1400 },
        ],
      },
      {
        label: "Event Day-Of",
        images: [
          { src: "/images/udance/dayof-1.jpg", width: 1400, height: 1332 },
          { src: "/images/udance/dayof-2.png", width: 1144, height: 1400 },
          { src: "/images/udance/dayof-3.png", width: 1080, height: 1080 },
        ],
      },
    ],
  },
  {
    title: "HUSTLE Cycle + Strength Social Content",
    description:
      "Owned social media content and campaign design for a boutique fitness studio, creating coach spotlights and promo graphics that grew brand awareness and drove membership inquiries.",
    tags: ["Social Media", "Graphic Design", "Content Strategy", "Meta Ads"],
    image: "/images/hustle/campaign-1.jpg",
    galleries: [
      {
        label: "Coach Spotlights",
        images: [
          { src: "/images/hustle/spotlight-1.jpg", width: 787, height: 1400 },
          { src: "/images/hustle/spotlight-2.jpg", width: 787, height: 1400 },
          { src: "/images/hustle/spotlight-3.jpg", width: 787, height: 1400 },
        ],
      },
      {
        label: "Campaign Graphics",
        images: [
          { src: "/images/hustle/campaign-1.jpg", width: 787, height: 1400 },
          { src: "/images/hustle/campaign-2.jpg", width: 787, height: 1400 },
          { src: "/images/hustle/campaign-3.jpg", width: 787, height: 1400 },
          { src: "/images/hustle/campaign-4.jpg", width: 787, height: 1400 },
        ],
      },
    ],
  },
  {
    title: "Shot by Sabrina",
    description:
      "Portrait, lifestyle, and pet photography brand showcasing creative visual storytelling across Instagram.",
    tags: ["Photography", "Lightroom", "Creative Direction", "Instagram"],
    liveUrl: "https://instagram.com/shot.by.sabrina",
    image: "/images/project-photography.svg",
  },
  {
    title: "@milo.the.puggle",
    description:
      "Social media content creator building an engaged TikTok audience with 5.3K followers, 650K+ likes, and a top video reaching 2M+ views.",
    tags: ["TikTok", "Short-Form Video", "Content Creation", "Community Growth"],
    liveUrl: "https://tiktok.com/@milo.the.puggle",
    image: "/images/project-tiktok.svg",
    tiktokEmbeds: [
      "https://www.tiktok.com/@milo.the.puggle/video/7534339921750789406",
      "https://www.tiktok.com/@milo.the.puggle/video/7596815484972993822",
      "https://www.tiktok.com/@milo.the.puggle/photo/7516919676740406559",
      "https://www.tiktok.com/@milo.the.puggle/photo/7548459445571915039",
    ],
  },
];
