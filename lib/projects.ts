// Project data types
export interface Project {
  id: number;
  name: string;
  tagline: string;
  description: string;
  imageUrl: string;
  category: "Mobile Applications" | "Desktop Applications" | "Branding";
  details?: string;
  role?: string;
  duration?: string;
  year?: string;
  processDetails?: string[];
}

// Extract project data from portfolio page to be reused across the site
export const projectData: Record<number, Project> = {
  // Mobile Applications (9)
  1: {
    id: 1,
    name: "CardSpace",
    tagline: "Your all-in-one loyalty app.",
    description: "CardSpace is a digital wallet platform for loyalty cards, gift cards, and rewards experiences, designed to replace the clutter of physical cards with a seamless, eco-friendly, and data-driven solution.",
    imageUrl: "/projects/cardspace/main.jpg",
    category: "Mobile Applications",
    details: "Users can: Scan and store loyalty cards in one app (no more carrying dozens of cards) and use digital cards at checkout via barcode scanning or tap-to-pay (coming soon).",
    role: "UX/UI Designer, AI/ML Engineer",
    duration: "12 months",
    year: "2024-25",
    processDetails: [
      "As, a mobile-first platform that digitizes physical loyalty and gift cards, CardSpace users scan, store, and redeem loyalty cards, eliminating the need to carry plastic cards. Businesses can create and manage digital loyalty programs, reducing printing costs and providing real-time insights.",
      "We also expored loyalty card scanning and storage, Virtual gift card system (SpaceGifts), Group contribution feature (CardSpace Pools), Business dashboard for tracking customer engagement, Eco-friendly and data-driven alternative to physical cards.",
      "I applied lean UX, worked across design and development using tools like React Native, Supabase, and AI-assisted design platforms to iterate quickly and reduce build costs."
    ]
  },
  2: {
    id: 2,
    name: "MyPerks",
    tagline: "Welcome to our world of customer and employee perks & incentives!",
    description: "MyPerks provides Kicks which are points organizations can use as incentives to unlock brand loyalty from their customers and employees.",
    imageUrl: "/projects/myperks/main.jpg",
    category: "Mobile Applications",
    details: "MyPerks also provides a wide variety of rewards, guaranteeing that every employee can find something that truly resonates with their preferences.",
    role: "UX/UI Designer, AI/ML Engineer",
    duration: "4 - 6 months",
    year: "2024",
    processDetails: [
      "With their awesome retail partners, users could enjoy the rewards and treat themselves to something special!"
    ]
  },
  3: {
    id: 3,
    name: "LexMasFT Coal App",
    tagline: "Track, manage and summarize weekly deliveries and pickups of material (like coal, duff, pease and blend) via containers",
    description: "This App is ideal for Coal or bulk mineral operations, Transport & logistics companies and site supervisers needing real-time oversight of stock and container movements.",
    imageUrl: "/projects/lexmasft-coal-app/main.jpg",
    category: "Mobile Applications",
    details: "It is designed for businesses that handle bulk materials like coal.",
    role: "UX Researcher, User Testing & Designer",
    duration: "6 - 8 months",
    year: "2023 - 2024",
    processDetails: [
      "It provides a weekly summary of deliveries and pickups, showing the total weight moved, scheduled dates, and container details. Users can monitor current stock levels by material type and view a daily activity heatmap to track operations. With clear container logs and real-time updates, the app helps streamline scheduling, improve visibility, and ensure efficient coordination across delivery and pickup activities."
    ]
  },
  4: {
    id: 4,
    name: "MTN SelfCare App",
    tagline: "Empowring users with 24/7 access to manage their account Anytime, Anywhere",
    description: "Self Care app is a mobile application that enables MTN customers to perform high-value transactions, from simple account updates to paying bills, viewing and managing customer data and services, managing support tickets, and more.",
    imageUrl: "/projects/mtn-selfcare-app/main.jpg",
    category: "Mobile Applications",
    details: "MTN planned to launch a 24/7 internet-based Self Care app for all subscribers (prepaid and postpaid). ",
    role: "Research, User Testing, Prototyping & Product Designer",
    duration: "8 months",
    year: "2024",
    processDetails: [
      "MTN users will be able to: Manage accounts, view billing, and request service changes instantly, Track real-time usage for voice, data, and SMS, Access and subscribe to MTN-CI products and services, Change tariff plans and add value-added services anytime & Top up or recharge accounts online with ease"
    ]
  },
  5: {
    id: 5,
    name: "Vodacom RED Rewards",
    tagline: "Vodacom Red Rewards is a premium loyalty and benefits program designed for Vodacom Red customers in South Africa.",
    description:
      "Vodacom RED Rewards offers exclusive perks and experiences such as: Discounts and vouchers on travel, dining, lifestyle, entertainment, exclusive event access, like concerts or sports games. Vodacom RED also offers travel benefits, including airport lounge access and concierge services.",
    imageUrl: "/projects/vodacom-red-rewards/main.jpg",
    category: "Mobile Applications",
    details: "Vodacom Red Rewards also offers exclusive travel, lifestyle, digital, and connectivity perks.",
    role: "UI Designer & Brand Identity",
    duration: "3 months",
    year: "2025",
    processDetails: [
      "The new interface simplifies reward discovery, highlights monthly perks, and brings clarity to loyalty tiers and top partner deals. With a cleaner layout, vibrant visuals, and intuitive navigation, the redesign elevates the overall user journey while encouraging reward redemption and increased engagement with Vodacom's partner ecosystem."
    ]
  },
  6: {
    id: 6,
    name: "Notify.Gov",
    tagline: "Notify.Gov is a platform that connects citizens with government services.",
    description:
      "Notify.Gov is a platform that connects citizens with government services through secure identity verification methods, including two-factor authentication, biometric facial recognition, and secure image capture.",
    imageUrl: "/projects/notify.gov/main.jpg",
    category: "Mobile Applications",
    details: "It allows users to receive notifications, report municipal issues, and access emergency services.",
    role: "Lead Designer",
    duration: "3 months",
    year: "2024",
    processDetails: [
      "A secure digital storage system enabling users to upload and manage personal documents, link to relatives and dependents, and view information such as credit scores and property details. An AI-powered virtual assistant that interacts with users to assess health, find qualified medical practitioners, book appointments, and monitor daily physical activity."
    ]
  },
  7: {
    id: 7,
    name: "CitizenC",
    tagline: "Your Daily Companion for Learning, Growth, and Wellbeing",
    description: "CitizenC is more than just a virtual school—it's a smart, supportive learning guide designed to meet students where they are.",
    imageUrl: "/projects/CitizenC/main.jpg",
    category: "Mobile Applications",
    details: "CitizenC helps students stay engaged, confident, and organized. From personalized learning paths and career-focused goal setting to daily challenges, reminders, and mental health check-ins.",
    role: "Lead Designer",
    duration: "4 months",
    year: "2024",
    processDetails: [
      "Whether you're dreaming of becoming a game developer, a doctor, or an entrepreneur, CitizenC adapts to your strengths, helps you tackle your weak spots, and celebrates every win—big or small.",
      "Key Features:",
      "• Personalized learning guided by 'Edu,' your smart companion",
      "• Career goal setting based on student aspirations",
      "• Gamified challenges and a rewards passport system",
      "• Homework planner, reminders, and progress tracker",
      "• Emoji mood check-ins and daily tips/jokes to keep it light",
      "• Literacy boosters like 'Word of the Day' and 'Book of the Week'",
      "• Built-in access to psycho-social support and wellness resources",
      "• Collaborative study groups and discussion forums",
      "• Strong parental controls and data privacy for peace of mind"
    ]
  },

  // Desktop Applications (4)
  10: {
    id: 10,
    name: "StudioFlow",
    tagline: "Creative workflow management for design teams.",
    description:
      "A comprehensive project management platform for creative teams that streamlines asset management.",
    imageUrl: "/projects/studioflow/main.jpg",
    category: "Desktop Applications",
    details: "StudioFlow is a comprehensive project management platform designed to help creative teams manage their assets more effectively. It provides a centralized location for storing and managing assets, allowing teams to collaborate more efficiently.",
    role: "Lead Designer",
    duration: "4 months",
    year: "2023",
    processDetails: [
      "The project began with a deep understanding of user needs and pain points in managing creative projects.",
      "User testing revealed that a visually engaging and interactive approach was essential for effective project management.",
      "The app was designed with a focus on visual representation of project progress to make it easier for users to track their progress and achieve their project goals."
    ]
  },
  11: {
    id: 11,
    name: "CodeCanvas",
    tagline: "Where coding meets visual thinking.",
    description: "An innovative IDE that combines traditional coding with visual programming elements.",
    imageUrl: "/projects/codecanvas/main.jpg",
    category: "Desktop Applications",
    details: "CodeCanvas is an innovative IDE that combines traditional coding with visual programming elements, allowing users to code and visualize their projects more effectively.",
    role: "Lead Designer",
    duration: "3 months",
    year: "2023",
    processDetails: [
      "The project began with a deep understanding of user needs and pain points in coding.",
      "User testing revealed that a visually engaging and interactive approach was essential for effective coding.",
      "The app was designed with a focus on visual representation of coding progress to make it easier for users to track their progress and achieve their coding goals."
    ]
  },
  12: {
    id: 12,
    name: "DataLoom",
    tagline: "Weaving complex data into clear insights.",
    description:
      "A powerful data visualization and analysis tool that transforms complex datasets into interactive dashboards.",
    imageUrl: "/projects/dataloom/main.jpg",
    category: "Desktop Applications",
    details: "DataLoom is a powerful data visualization and analysis tool designed to help users transform complex datasets into interactive dashboards. It provides a range of visualizations and analysis tools to help users gain insights from their data.",
    role: "Lead Designer",
    duration: "4 months",
    year: "2023",
    processDetails: [
      "The project began with a deep understanding of user needs and pain points in analyzing data.",
      "User testing revealed that a visually engaging and interactive approach was essential for effective data analysis.",
      "The app was designed with a focus on visual representation of data analysis to make it easier for users to gain insights from their data."
    ]
  },
  13: {
    id: 13,
    name: "SoundScape",
    tagline: "Professional audio production made accessible.",
    description: "A digital audio workstation designed for podcasters, musicians, and content creators.",
    imageUrl: "/projects/soundscape/main.jpg",
    category: "Desktop Applications",
    details: "SoundScape is a digital audio workstation designed for podcasters, musicians, and content creators. It provides a range of tools and features to help users create professional audio productions.",
    role: "Lead Designer",
    duration: "3 months",
    year: "2023",
    processDetails: [
      "The project began with a deep understanding of user needs and pain points in creating audio productions.",
      "User testing revealed that a visually engaging and interactive approach was essential for effective audio production.",
      "The app was designed with a focus on visual representation of audio production progress to make it easier for users to track their progress and achieve their audio production goals."
    ]
  },

  // Branding (2)
  14: {
    id: 14,
    name: "EcoEssence",
    tagline: "Sustainable branding for conscious businesses.",
    description:
      "A complete brand identity system for an eco-friendly product line, including logo design and packaging guidelines.",
    imageUrl: "/projects/ecoessence/main.jpg",
    category: "Branding",
    details: "EcoEssence is a complete brand identity system designed for an eco-friendly product line. It includes logo design, packaging guidelines, and a range of visual elements to create a cohesive and sustainable brand identity.",
    role: "Lead Designer",
    duration: "4 months",
    year: "2023",
    processDetails: [
      "The project began with a deep understanding of the eco-friendly product line's needs and pain points in branding.",
      "User testing revealed that a visually engaging and interactive approach was essential for effective branding.",
      "The brand identity system was designed with a focus on visual representation of branding progress to make it easier for users to track their progress and achieve their branding goals."
    ]
  },
  15: {
    id: 15,
    name: "TechNexus",
    tagline: "Bridging humanity and technology through design.",
    description:
      "A comprehensive rebranding project for a technology conglomerate, creating a cohesive visual language across diverse product lines while positioning the brand at the intersection of cutting-edge innovation and human-centered design.",
    imageUrl: "/projects/technexus/main.jpg",
    category: "Branding",
    details: "TechNexus is a comprehensive rebranding project for a technology conglomerate. It includes a range of visual elements to create a cohesive visual language across diverse product lines while positioning the brand at the intersection of cutting-edge innovation and human-centered design.",
    role: "Lead Designer",
    duration: "5 months",
    year: "2023",
    processDetails: [
      "The project began with a deep understanding of the technology conglomerate's needs and pain points in rebranding.",
      "User testing revealed that a visually engaging and interactive approach was essential for effective rebranding.",
      "The rebranding project was designed with a focus on visual representation of rebranding progress to make it easier for users to track their progress and achieve their rebranding goals."
    ]
  },
};

// Convert the object to an array for easier use in components
export const projectsArray: Project[] = Object.values(projectData); 