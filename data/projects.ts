import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    title: "Cribl",
    accentColor: "var(--accent-cribl)",
    description:
      "Developed audience-specific digital marketing strategies across web, social, email, and content channels, including paid social campaigns that drove webinar registrations and audience engagement.",
    tags: [
      "Paid Social",
      "Digital Marketing",
      "Webinars",
      "Content Management",
      "A/B Testing",
      "Web Optimization",
      "Integrated Marketing",
      "Campaign Management",
    ],
    image: "/images/cribl/paid-social-1.jpg",
    galleries: [
      {
        label: "Paid Social Ads",
        images: [
          { src: "/images/cribl/paid-social-1.jpg", width: 456, height: 577 },
          { src: "/images/cribl/paid-social-2.jpg", width: 457, height: 609 },
          { src: "/images/cribl/paid-social-3.jpg", width: 456, height: 581 },
        ],
      },
      {
        label: "Landing Page Optimization",
        images: [
          { src: "/images/cribl/landing-1.jpg", width: 1400, height: 1500, caption: "Webinar Landing Page" },
          { src: "/images/cribl/landing-2.jpg", width: 1400, height: 1500, caption: "Webinars Hub Page" },
        ],
      },
    ],
  },
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
      {
        label: "PR & Media",
        instagramEmbeds: ["https://www.instagram.com/reel/CrdzGrOOOGi/"],
        links: [
          {
            title: "UDance 2022 raises $1.8 million for childhood cancer",
            source: "Town Square Delaware",
            url: "https://townsquaredelaware.com/udance-2022-raises-1-8-million-for-childhood-cancer/",
            description:
              "Coverage of the 2022 marathon, featuring an interview with Sabrina, UDance's media engagement and website chair.",
          },
          {
            title: "7,000 to attend UDance, raise $$$ for childhood cancer",
            source: "Delaware LIVE News",
            url: "https://delawarelive.com/7000-to-attend-udance-raise-for-childhood-cancer/",
            description:
              "Preview coverage of the 2023 marathon, featuring an interview with Sabrina as UDance's digital communications director.",
          },
          {
            title: "UDance 2023 raises more than $1.7 million",
            source: "UDaily, University of Delaware",
            url: "https://www.udel.edu/udaily/2023/april/udance-dance-marathon-andrew-mcdonough-childhood-cancer-charity/",
            description: "The University of Delaware's official recap of the 17th annual dance marathon.",
          },
        ],
      },
      {
        label: "Brand Partnerships",
        brands: ["Little Words Project", "Bubble Skincare", "High 5 Hospitality", "Grotto Pizza"],
        links: [
          {
            title: "Partnership post: Little Words Project",
            source: "Instagram",
            url: "https://www.instagram.com/p/CpfWOsnucVm/",
            description: "Collaboration post with Little Words Project supporting UDance.",
          },
          {
            title: "Partnership post: Bubble Skincare",
            source: "Instagram",
            url: "https://www.instagram.com/p/CpfWOsnucVm/",
            description: "Collaboration post with Bubble Skincare supporting UDance.",
          },
          {
            title: "Partnership post: High 5 Hospitality",
            source: "Instagram",
            url: "https://www.instagram.com/p/CpfWOsnucVm/",
            description: "Collaboration post with High 5 Hospitality supporting UDance.",
          },
          {
            title: "Partnership post: Grotto Pizza",
            source: "Instagram",
            url: "https://www.instagram.com/p/CpfWOsnucVm/",
            description: "Collaboration post with Grotto Pizza supporting UDance.",
          },
        ],
      },
      {
        label: "TikTok Content",
        tiktokEmbeds: [
          "https://www.tiktok.com/@udancedelaware/video/7196743748171140394",
          "https://www.tiktok.com/@udancedelaware/video/7223828012658117931",
        ],
      },
      {
        label: "Instagram Content",
        instagramEmbeds: [
          "https://www.instagram.com/p/CgW_55luU36/",
          "https://www.instagram.com/p/CoUre4IufIk/",
          "https://www.instagram.com/p/CjDSsxENZ4x/",
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
      {
        label: "Short-Form Video Content",
        instagramEmbeds: [
          "https://www.instagram.com/reel/DHb3y3RyDEH/",
          "https://www.instagram.com/reel/DDPtHasRq-1/",
          "https://www.instagram.com/reel/C_teJIZyDFy/",
          "https://www.instagram.com/reel/DETFohtSmqt/",
        ],
      },
      {
        label: "Social Media Posts",
        instagramEmbeds: [
          "https://www.instagram.com/p/C_1hlGYyBbp/",
          "https://www.instagram.com/p/DGEbcwNSCtg/",
          "https://www.instagram.com/p/DH56UXSxBSO/",
        ],
      },
    ],
  },
  {
    title: "Shot by Sabrina",
    accentColor: "var(--accent-photo)",
    description: "Portrait, lifestyle, event, and pet photography brand",
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
