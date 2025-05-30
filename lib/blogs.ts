export interface BlogPost {
  id: number
  title: string
  slug: string
  excerpt: string
  content: string
  author: string
  publishedAt: string
  readTime: string
  category: string
  tags: string[]
  coverImage: string
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Future of Mobile App Design: Trends to Watch in 2024",
    slug: "future-mobile-app-design-trends-2024",
    excerpt: "Exploring the latest trends in mobile app design, from AI-powered interfaces to sustainable design practices that are shaping the future of user experience.",
    content: `
      <p>The mobile app design landscape is constantly evolving, and 2024 promises to bring some exciting new trends that will reshape how we interact with our devices. As a designer who's worked on numerous mobile applications, I've observed several key trends emerging that are worth paying attention to.</p>
      
      <h2>AI-Powered Personalization</h2>
      <p>Artificial intelligence is no longer just a buzzword—it's becoming an integral part of how we design user experiences. Apps are now capable of learning user preferences and adapting their interfaces accordingly. This means more personalized content, smarter navigation patterns, and interfaces that evolve with user behavior.</p>
      
      <h2>Sustainable Design Practices</h2>
      <p>With growing awareness of environmental impact, designers are focusing on creating more efficient apps that consume less battery and data. This includes optimizing images, reducing unnecessary animations, and implementing dark mode as a standard feature.</p>
      
      <h2>Voice and Gesture Interfaces</h2>
      <p>As devices become more sophisticated, we're seeing a shift towards more natural interaction methods. Voice commands and gesture controls are becoming more prevalent, requiring designers to think beyond traditional touch interfaces.</p>
      
      <p>The key to successful mobile app design in 2024 will be balancing innovation with usability, ensuring that new features enhance rather than complicate the user experience.</p>
    `,
    author: "Nqobile Dlamini",
    publishedAt: "2024-01-15",
    readTime: "5 min read",
    category: "Design Trends",
    tags: ["Mobile Design", "UX/UI", "AI", "Sustainability"],
    coverImage: "/blog/mobile-design-trends.jpg"
  },
  {
    id: 2,
    title: "Building Accessible Digital Products: A Designer's Guide",
    slug: "building-accessible-digital-products-guide",
    excerpt: "A comprehensive guide to creating inclusive digital experiences that work for everyone, covering practical tips and real-world examples from recent projects.",
    content: `
      <p>Accessibility in digital design isn't just about compliance—it's about creating products that truly serve all users. Throughout my career, I've learned that designing with accessibility in mind from the start leads to better products for everyone.</p>
      
      <h2>Understanding Your Users</h2>
      <p>The first step in creating accessible products is understanding the diverse needs of your users. This includes people with visual, auditory, motor, and cognitive disabilities, as well as situational limitations like using a device in bright sunlight or with one hand.</p>
      
      <h2>Color and Contrast</h2>
      <p>One of the most common accessibility issues I encounter is insufficient color contrast. The WCAG guidelines provide clear standards, but I always recommend going beyond the minimum requirements. Tools like Stark and Colour Contrast Analyser can help ensure your designs meet accessibility standards.</p>
      
      <h2>Typography and Readability</h2>
      <p>Font choice, size, and spacing play crucial roles in accessibility. Sans-serif fonts are generally more readable on screens, and maintaining adequate line spacing improves readability for users with dyslexia.</p>
      
      <h2>Interactive Elements</h2>
      <p>Buttons and interactive elements should be large enough to tap easily (at least 44px on mobile) and provide clear feedback when activated. This benefits not just users with motor disabilities, but anyone using a device while multitasking.</p>
      
      <p>Remember, accessibility is an ongoing process, not a one-time checklist. Regular testing with real users, including those with disabilities, is essential for creating truly inclusive products.</p>
    `,
    author: "Nqobile Dlamini",
    publishedAt: "2024-01-08",
    readTime: "7 min read",
    category: "Accessibility",
    tags: ["Accessibility", "Inclusive Design", "UX", "WCAG"],
    coverImage: "/blog/accessibility-guide.jpg"
  },
  {
    id: 3,
    title: "From Concept to Launch: My Process for Designing Mobile Apps",
    slug: "concept-to-launch-mobile-app-design-process",
    excerpt: "Take a behind-the-scenes look at my design process, from initial research and ideation to final implementation and post-launch optimization.",
    content: `
      <p>Every successful mobile app starts with a solid design process. Over the years, I've refined my approach to ensure that every project delivers both user value and business results. Here's a detailed look at my process from concept to launch.</p>
      
      <h2>Discovery and Research</h2>
      <p>Before touching any design tools, I spend significant time understanding the problem we're solving. This includes user interviews, competitive analysis, and stakeholder workshops. The insights gathered here inform every design decision that follows.</p>
      
      <h2>Information Architecture</h2>
      <p>Once I understand the user needs and business goals, I create the app's information architecture. This involves organizing content and features in a logical hierarchy that makes sense to users. Card sorting exercises with potential users are invaluable at this stage.</p>
      
      <h2>Wireframing and Prototyping</h2>
      <p>I start with low-fidelity wireframes to establish the basic layout and user flow. These evolve into interactive prototypes that allow for early user testing. Tools like Figma and Principle help bring these concepts to life quickly.</p>
      
      <h2>Visual Design</h2>
      <p>With the structure validated, I move to visual design. This is where the brand comes to life through color, typography, and imagery. I always design with the target platform's guidelines in mind—Material Design for Android and Human Interface Guidelines for iOS.</p>
      
      <h2>Testing and Iteration</h2>
      <p>User testing happens throughout the process, but becomes especially important once we have high-fidelity prototypes. I look for usability issues, confusion points, and opportunities for improvement.</p>
      
      <h2>Handoff and Implementation</h2>
      <p>Clear communication with developers is crucial. I provide detailed specifications, assets, and often create a design system to ensure consistency during implementation.</p>
      
      <p>The launch isn't the end—it's the beginning of a new phase of learning and optimization based on real user data.</p>
    `,
    author: "Nqobile Dlamini",
    publishedAt: "2024-01-01",
    readTime: "8 min read",
    category: "Process",
    tags: ["Design Process", "Mobile Apps", "UX Research", "Prototyping"],
    coverImage: "/blog/design-process.jpg"
  },
  {
    id: 4,
    title: "The Psychology of Color in Digital Interface Design",
    slug: "psychology-color-digital-interface-design",
    excerpt: "Understanding how color affects user behavior and emotions in digital products, with practical examples from successful app designs.",
    content: `
      <p>Color is one of the most powerful tools in a designer's arsenal. It can evoke emotions, guide user attention, and even influence behavior. Understanding color psychology is essential for creating effective digital interfaces.</p>
      
      <h2>The Emotional Impact of Color</h2>
      <p>Different colors trigger different emotional responses. Blue conveys trust and stability (think Facebook, LinkedIn), while red creates urgency and excitement (Netflix, YouTube). Green suggests growth and harmony, making it popular for financial and health apps.</p>
      
      <h2>Cultural Considerations</h2>
      <p>Color meanings vary across cultures. While white represents purity in Western cultures, it's associated with mourning in some Eastern cultures. When designing for global audiences, it's crucial to research color associations in your target markets.</p>
      
      <h2>Accessibility and Color</h2>
      <p>Color should never be the only way to convey information. Users with color blindness or visual impairments need alternative cues like icons, text labels, or patterns. This principle improves usability for all users.</p>
      
      <h2>Creating Effective Color Palettes</h2>
      <p>A good color palette typically includes a primary color (your brand color), secondary colors for variety, and neutral colors for balance. The 60-30-10 rule is a helpful guideline: 60% neutral, 30% secondary, and 10% accent colors.</p>
      
      <h2>Testing Color Choices</h2>
      <p>A/B testing different color schemes can provide valuable insights into user preferences and behavior. Small changes, like button color, can significantly impact conversion rates.</p>
      
      <p>Remember, the best color choices are those that serve your users and support your product's goals, not just follow the latest trends.</p>
    `,
    author: "Nqobile Dlamini",
    publishedAt: "2023-12-20",
    readTime: "6 min read",
    category: "Design Theory",
    tags: ["Color Theory", "Psychology", "UI Design", "User Behavior"],
    coverImage: "/blog/color-psychology.jpg"
  },
  {
    id: 5,
    title: "Designing for Different Screen Sizes: A Responsive Approach",
    slug: "designing-different-screen-sizes-responsive-approach",
    excerpt: "Best practices for creating designs that work seamlessly across all devices, from smartwatches to large desktop displays.",
    content: `
      <p>In today's multi-device world, designing for a single screen size is no longer sufficient. Users expect seamless experiences whether they're on a phone, tablet, laptop, or desktop. Here's how I approach responsive design to ensure optimal experiences across all devices.</p>
      
      <h2>Mobile-First Approach</h2>
      <p>I always start with mobile designs. This forces me to prioritize the most important content and features, creating a solid foundation that can be enhanced for larger screens. It's much easier to add complexity than to remove it.</p>
      
      <h2>Understanding Breakpoints</h2>
      <p>Rather than designing for specific devices, I focus on content breakpoints—points where the design needs to adapt to maintain readability and usability. Common breakpoints include 320px (small mobile), 768px (tablet), and 1024px (desktop).</p>
      
      <h2>Flexible Grid Systems</h2>
      <p>Grid systems provide structure while allowing flexibility. I use percentage-based widths and flexible margins to create layouts that adapt smoothly between breakpoints. CSS Grid and Flexbox are invaluable tools for this.</p>
      
      <h2>Scalable Typography</h2>
      <p>Typography needs to be readable at all sizes. I use relative units (em, rem) and CSS clamp() function to create fluid typography that scales appropriately with screen size.</p>
      
      <h2>Touch vs. Mouse Interactions</h2>
      <p>Different devices require different interaction patterns. Touch targets need to be larger (minimum 44px), while mouse interactions can be more precise. Hover states work on desktop but not on touch devices.</p>
      
      <h2>Performance Considerations</h2>
      <p>Responsive design isn't just about layout—it's also about performance. I optimize images for different screen densities and use techniques like lazy loading to ensure fast load times on all devices.</p>
      
      <p>The goal is to create one design system that provides an optimal experience regardless of how users access your product.</p>
    `,
    author: "Nqobile Dlamini",
    publishedAt: "2023-12-15",
    readTime: "7 min read",
    category: "Responsive Design",
    tags: ["Responsive Design", "Mobile-First", "CSS", "Performance"],
    coverImage: "/blog/responsive-design.jpg"
  }
]

export const getBlogBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug)
}

export const getAllBlogs = (): BlogPost[] => {
  return blogPosts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
}

export const getBlogsByCategory = (category: string): BlogPost[] => {
  return blogPosts.filter(post => post.category === category)
}

export const getBlogsByTag = (tag: string): BlogPost[] => {
  return blogPosts.filter(post => post.tags.includes(tag))
} 