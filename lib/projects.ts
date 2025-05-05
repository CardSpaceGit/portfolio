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
    tagline: "Explore like a local, anywhere in the world.",
    description:
      "A location-based travel companion that offers personalized recommendations, offline maps, and hidden gems curated by locals.",
    imageUrl: "/projects/cardspace/hero.jpg",
    category: "Mobile Applications",
    details: "CardSpace is a mobile application designed to transform how travelers explore new destinations. By combining location-based technology with curated recommendations from locals, it helps users discover authentic experiences beyond typical tourist attractions.",
    role: "UX/UI Designer & Product Manager",
    duration: "6 months",
    year: "2023",
    processDetails: [
      "The development of CardSpace began with extensive field research in various travel destinations, interviewing both tourists and locals to understand pain points in current travel experiences.",
      "User personas were created to target different types of travelers, from adventure seekers to cultural enthusiasts, informing feature prioritization and interface design.",
      "The offline functionality was a key technical challenge that required multiple iterations and user testing to ensure reliability in areas with limited connectivity."
    ]
  },
  2: {
    id: 2,
    name: "MealPrep Pro",
    tagline: "Meal planning simplified for busy professionals.",
    description:
      "An all-in-one meal planning app that generates personalized weekly meal plans based on dietary preferences.",
    imageUrl: "/projects/mealprep-pro/hero.jpg",
    category: "Mobile Applications",
    details: "MealPrep Pro solves the daily challenge of meal planning for health-conscious professionals with limited time. The app uses AI to generate customized meal plans that match users' dietary preferences, nutritional goals, and available cooking time.",
    role: "Lead Designer",
    duration: "4 months",
    year: "2022",
    processDetails: [
      "Research revealed that the biggest obstacle to consistent meal planning was the time required to search for recipes that fit specific dietary needs and preferences.",
      "We prototyped several approaches to recipe filtering and meal scheduling, ultimately landing on an AI-driven system that learns from user behavior.",
      "The visual design focused on making nutritional information quickly scannable while keeping the photography of the food as the hero element of the interface."
    ]
  },
  3: {
    id: 3,
    name: "FocusFlow",
    tagline: "Master your productivity, one focused session at a time.",
    description:
      "A productivity app combining the Pomodoro technique with flow state science, helping users achieve deep work.",
    imageUrl: "/projects/focusflow/hero.jpg",
    category: "Mobile Applications",
    details: "FocusFlow is designed for knowledge workers who struggle with distractions and procrastination. By combining proven productivity techniques with personalized insights, the app helps users optimize their work patterns for maximum focus and output.",
    role: "UX Researcher & Designer",
    duration: "5 months",
    year: "2023",
    processDetails: [
      "The project began with a deep dive into productivity research, consulting with cognitive psychologists to understand the science behind focus and flow states.",
      "User testing revealed that customizable work intervals were essential, as the traditional 25-minute Pomodoro cycle wasn't optimal for all tasks or individuals.",
      "The ambient soundscapes feature emerged from user feedback, addressing the need for audio environments that mask distractions without becoming distractions themselves."
    ]
  },
  4: {
    id: 4,
    name: "PocketClinic",
    tagline: "Healthcare in your pocket, anytime, anywhere.",
    description: "A telemedicine platform connecting patients with healthcare providers for virtual consultations.",
    imageUrl: "/projects/pocketclinic/hero.jpg",
    category: "Mobile Applications",
    details: "PocketClinic bridges the gap between patients and healthcare providers through secure video consultations, prescription management, and health monitoring tools, making quality healthcare accessible regardless of location.",
    role: "Product Designer",
    duration: "8 months",
    year: "2022",
    processDetails: [
      "Extensive stakeholder interviews with both healthcare providers and patients informed the development of a platform that would meet the needs of both groups.",
      "Security and privacy considerations were paramount, requiring close collaboration with compliance experts to ensure all features met HIPAA requirements.",
      "The interface was designed with accessibility as a core principle, ensuring the service would be usable by people with various disabilities and technical comfort levels."
    ]
  },
  5: {
    id: 5,
    name: "GreenThumb",
    tagline: "Your personal plant care assistant.",
    description:
      "A plant care companion app that identifies plants through image recognition and provides care schedules.",
    imageUrl: "/projects/greenthumb/hero.jpg",
    category: "Mobile Applications",
    details: "GreenThumb transforms plant care from guesswork to science with its AI-powered identification technology and personalized care recommendations, helping both novice and experienced plant enthusiasts keep their green friends thriving.",
    role: "UI Designer & Brand Identity",
    duration: "3 months",
    year: "2022",
    processDetails: [
      "The project began as a personal solution to the common problem of forgetting to water plants or providing incorrect care based on generic advice.",
      "The plant identification technology required extensive machine learning training on thousands of plant species, with multiple iterations to improve accuracy.",
      "User testing with both botanical experts and plant novices helped refine the care advice system to strike the right balance between scientific accuracy and practical usefulness."
    ]
  },
  6: {
    id: 6,
    name: "BudgetBuddy",
    tagline: "Making financial freedom achievable.",
    description:
      "A personal finance app that automatically categorizes expenses and provides visual spending insights.",
    imageUrl: "/projects/budgetbuddy/hero.jpg",
    category: "Mobile Applications",
    details: "BudgetBuddy is a personal finance app designed to help users manage their finances more effectively. It provides a comprehensive overview of income, expenses, and savings, allowing users to track their financial progress and make informed decisions about their money.",
    role: "Lead Designer",
    duration: "3 months",
    year: "2023",
    processDetails: [
      "The project began with a deep understanding of user needs and pain points in managing finances.",
      "User testing revealed that a simple and intuitive interface was essential for effective financial management.",
      "The app was designed with a focus on visual representation of financial data to make it easier for users to understand and manage their finances."
    ]
  },
  7: {
    id: 7,
    name: "FitSync",
    tagline: "Personalized fitness, perfectly synchronized.",
    description: "A fitness tracking app that adapts workouts based on user progress and available equipment.",
    imageUrl: "/projects/fitsync/hero.jpg",
    category: "Mobile Applications",
    details: "FitSync is a fitness tracking app designed to help users achieve their fitness goals by providing personalized workout plans based on their progress and available equipment.",
    role: "Lead Designer",
    duration: "4 months",
    year: "2023",
    processDetails: [
      "The project began with a deep understanding of user needs and pain points in managing fitness.",
      "User testing revealed that a personalized approach to workout planning was essential for effective fitness management.",
      "The app was designed with a focus on visual representation of fitness progress to make it easier for users to track their progress and achieve their goals."
    ]
  },
  8: {
    id: 8,
    name: "NightSky",
    tagline: "The universe in your hands.",
    description:
      "An augmented reality astronomy app that identifies celestial objects when pointing your phone at the sky.",
    imageUrl: "/projects/nightsky/hero.jpg",
    category: "Mobile Applications",
    details: "NightSky is an augmented reality astronomy app designed to help users explore the night sky and learn about celestial objects. It uses image recognition technology to identify stars, planets, and constellations when pointing your phone at the sky.",
    role: "UX Designer",
    duration: "3 months",
    year: "2023",
    processDetails: [
      "The project began with a deep understanding of user needs and pain points in learning about astronomy.",
      "User testing revealed that a visually engaging and interactive approach was essential for effective learning about astronomy.",
      "The app was designed with a focus on visual representation of celestial objects to make it easier for users to learn about astronomy."
    ]
  },
  9: {
    id: 9,
    name: "LinguaLeap",
    tagline: "Language learning that fits your life.",
    description: "An adaptive language learning app that uses AI to create personalized lesson plans.",
    imageUrl: "/projects/lingualeap/hero.jpg",
    category: "Mobile Applications",
    details: "LinguaLeap is an adaptive language learning app designed to help users learn new languages more effectively. It uses AI to create personalized lesson plans based on user progress and learning style.",
    role: "Lead Designer",
    duration: "5 months",
    year: "2023",
    processDetails: [
      "The project began with a deep understanding of user needs and pain points in learning languages.",
      "User testing revealed that a personalized approach to language learning was essential for effective learning.",
      "The app was designed with a focus on visual representation of language learning progress to make it easier for users to track their progress and achieve their language learning goals."
    ]
  },

  // Desktop Applications (4)
  10: {
    id: 10,
    name: "StudioFlow",
    tagline: "Creative workflow management for design teams.",
    description:
      "A comprehensive project management platform for creative teams that streamlines asset management.",
    imageUrl: "/projects/studioflow/hero.jpg",
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
    imageUrl: "/projects/codecanvas/hero.jpg",
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
    imageUrl: "/projects/dataloom/hero.jpg",
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
    imageUrl: "/projects/soundscape/hero.jpg",
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
    imageUrl: "/projects/ecoessence/hero.jpg",
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
    imageUrl: "/projects/technexus/hero.jpg",
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