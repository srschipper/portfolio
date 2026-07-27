import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    title: "Appian Website Redesign",
    accentColor: "var(--accent-appian)",
    description:
      "Led content strategy, creative direction, and UX optimization for a 200+ page enterprise website redesign that strengthened brand storytelling and improved the customer experience.",
    tags: ["Content Strategy", "UX Optimization", "AEM", "Lead Generation"],
    image: "/images/project-appian.svg",
    galleries: [
      {
        label: "Homepage Redesign",
        images: [
          { src: "/images/appian/before.jpg", width: 1600, height: 1400, caption: "Before" },
          { src: "/images/appian/after.jpg", width: 1600, height: 1400, caption: "After" },
        ],
      },
    ],
  },
  {
    title: "The Andrew McDonough B+ Foundation - UDance Dance Marathon",
    accentColor: "var(--accent-udance)",
    description:
      "Led brand and digital marketing for a large-scale nonprofit dance marathon, designing merch, campaign graphics, and event-day branding that helped drive $1.78M in fundraising for childhood cancer research.",
    tags: ["Brand Design", "Social Media", "Event Branding", "Fundraising"],
    image: "/images/udance/graphics-1.jpg",
    galleries: [
      {
        label: "Social Graphics",
        images: [
          { src: "/images/udance/graphics-1.jpg", width: 787, height: 1400 },
          { src: "/images/udance/graphics-2.jpg", width: 787, height: 1400 },
          { src: "/images/udance/graphics-3.jpg", width: 787, height: 1400 },
          { src: "/images/udance/graphics-4.jpg", width: 940, height: 788 },
          { src: "/images/udance/graphics-5.jpg", width: 787, height: 1400 },
          { src: "/images/udance/graphics-6.jpg", width: 787, height: 1400 },
          { src: "/images/udance/graphics-7.jpg", width: 787, height: 1400 },
        ],
      },
      {
        label: "Event Day-Of",
        images: [
          { src: "/images/udance/dayof-1.jpg", width: 1400, height: 1332 },
          { src: "/images/udance/dayof-2.png", width: 1144, height: 1400 },
          { src: "/images/udance/dayof-3.png", width: 1080, height: 1080 },
          { src: "/images/udance/event-photo-1.jpg", width: 1050, height: 1400 },
          { src: "/images/udance/event-photo-2.jpg", width: 1050, height: 1400 },
          { src: "/images/udance/event-photo-4.jpg", width: 1050, height: 1400 },
          { src: "/images/udance/event-photo-6.jpg", width: 1050, height: 1400 },
        ],
      },
      {
        label: "Merch Design",
        images: [
          { src: "/images/udance/merch-2.jpg", width: 1400, height: 788 },
          { src: "/images/udance/merch-3.jpg", width: 1400, height: 788 },
          { src: "/images/udance/merch-4.jpg", width: 1400, height: 788 },
          { src: "/images/udance/merch-5.jpg", width: 1400, height: 788 },
          { src: "/images/udance/merch-6.jpg", width: 1400, height: 788 },
        ],
      },
    ],
  },
  {
    title: "HUSTLE Cycle + Strength Social Content",
    accentColor: "var(--accent-hustle)",
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
    accentColor: "var(--accent-photo)",
    description:
      "Portrait, lifestyle, and pet photography brand showcasing creative visual storytelling across Instagram.",
    tags: ["Photography", "Lightroom", "Creative Direction", "Instagram"],
    liveUrl: "https://instagram.com/shot.by.sabrina",
    image: "/images/project-photography.svg",
    galleries: [
      {
        label: "Photography",
        images: [
          { src: "/images/photography/photo-1.jpg", width: 1400, height: 935 },
          { src: "/images/photography/photo-2.jpg", width: 1400, height: 933 },
          { src: "/images/photography/photo-3.jpg", width: 933, height: 1400 },
          { src: "/images/photography/photo-4.jpg", width: 933, height: 1400 },
          { src: "/images/photography/photo-5.jpg", width: 933, height: 1400 },
          { src: "/images/photography/photo-6.jpg", width: 1400, height: 933 },
          { src: "/images/photography/photo-7.jpg", width: 1400, height: 933 },
          { src: "/images/photography/photo-8.jpg", width: 1400, height: 933 },
          { src: "/images/photography/photo-9.jpg", width: 933, height: 1400 },
          { src: "/images/photography/photo-10.jpg", width: 1400, height: 933 },
          { src: "/images/photography/photo-11.jpg", width: 933, height: 1400 },
          { src: "/images/photography/photo-12.jpg", width: 1400, height: 933 },
          { src: "/images/photography/photo-13.jpg", width: 1400, height: 933 },
          { src: "/images/photography/photo-14.jpg", width: 1400, height: 933 },
        ],
      },
    ],
  },
  {
    title: "@milo.the.puggle",
    accentColor: "var(--accent-milo)",
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
