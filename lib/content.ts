// ============================================================================
// SONET — structured content layer (ENGLISH source of truth)
// File: lib/content.ts
// Companion: i18n/bn.ts — the full Bangla dictionary. It exports `bn` typed
// as SiteContent, i.e. THE SAME shape as `content` below, field for field.
// The implementation agent renders a page by picking `content` (lang "en")
// or `bn` (lang "bn") and reading the same paths — no key lookups, no
// guessing. Proper names, brand names, URLs, emails, phone numbers and
// file paths stay identical in both files; only human-readable copy differs.
// Conventions:
//   - `placeholder: true` means "owner must fill / confirm this before it
//     goes live". Never render a placeholder as a verified fact.
//   - `date: null` means "no verified date exists"; render nothing, or an
//     editable placeholder, never an invented date.
//   - No percentages anywhere (spec forbids them). Levels are words only.
//   - No emoji anywhere. No invented facts, dates, titles, awards, URLs.
//   - Brand: SONET. Colours / fonts live in the design layer, not here.
// ============================================================================

export interface Stat {
  figure: string;
  label: string;
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface WhatIDoItem {
  title: string;
  description: string;
}

export interface PersonalDetail {
  label: string;
  value: string;
}

export interface EducationEntry {
  degree: string;
  institution: string;
  /** Year range as printed on the original site, e.g. "Completed 2024". */
  date: string | null;
  detail: string;
  cgpa: string | null;
  coursesCompleted: string | null;
  placeholder?: boolean;
}

export interface ExperienceRole {
  title: string;
  organisation: string;
  dates: string;
  location: string | null;
  responsibilities: string[];
  placeholder?: boolean;
}

export interface SessionCard {
  title: string;
  durationMinutes: number;
  durationLabel: string;
  price: string;
  description: string;
}

export interface LeadershipItem {
  title: string;
  organisation: string | null;
  /** Role held, only where the original site states one. */
  role: string | null;
  date: string | null;
  description: string;
  image: string | null;
  imageAlt: string | null;
  placeholder?: boolean;
  placeholderNote?: string;
}

export interface SkillCategory {
  category: string;
  tags: string[];
}

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  category: string;
  role: string;
  objectives: string[];
  tools: string[];
  status: "Live" | "In Development" | "Concept";
  results: Stat[];
  /** Real external URL only. null = no URL exists; never invent one. */
  url: string | null;
  urlLabel: string | null;
  /** Real image from public/images/ only. null = typographic cover. */
  coverImage: string | null;
  coverImageAlt: string | null;
  /** YouTube video shown in the card and on the detail page. Omit = no video. */
  videoId?: string | null;
  videoTitle?: string | null;
  tags: string[];
  placeholder?: boolean;
  placeholderNote?: string;
}

export interface Achievement {
  title: string;
  description: string;
  /** null = no verified date; do not invent one. */
  date: string | null;
  image: string | null;
  imageAlt: string | null;
  placeholder?: boolean;
}

export interface Certification {
  title: string;
  issuer: string | null;
  date: string | null;
  detail: string;
  credential: string | null;
  /** Filter key — one of the English filter labels ("Language", "Teaching",
   *  "Leadership", "Digital & AI", "Other"). Kept identical in bn.ts so
   *  filtering works in both languages. */
  category: string;
  /** "real" = verified from the original site / master prompt. "aggregate"
   *  = a count from the original site, not one named certificate.
   *  "placeholder" = empty slot for the owner to fill. */
  kind: "real" | "aggregate" | "placeholder";
  placeholder?: boolean;
}

export interface Book {
  title: string;
  kind: string;
  description: string | null;
  coverImage: string | null;
  coverImageAlt: string | null;
  /** "book-bishorjon.jpg" is only 310x163: render as a small thumb only. */
  coverNote: string | null;
  placeholder?: boolean;
}

export interface GalleryPhoto {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
}

export interface SocialLink {
  label: string;
  url: string | null;
  handle: string | null;
  placeholder?: boolean;
}

export interface SiteContent {
  personal: {
    name: string;
    shortName: string;
    tagline: string;
    location: string;
    nationality: string;
    born: string;
    faith: string;
    portraitImage: string;
    portraitAlt: string;
    formalImage: string;
    formalImageAlt: string;
  };
  seo: { title: string; description: string; keywords: string; ogImageAlt: string };
  nav: NavItem[];
  footerNav: NavItem[];
  hero: {
    eyebrow: string;
    headline: string;
    quote1: string;
    quote2: string;
    primaryCta: string;
    primaryCtaHref: string;
    secondaryCta: string;
    secondaryCtaHref: string;
    proofLine: string;
  };
  snapshotStats: Stat[];
  whatIDo: { label: string; heading: string; intro: string; items: WhatIDoItem[] };
  about: {
    label: string;
    heading: string;
    bio: string;
    mission: string;
    paragraphs: string[];
    details: PersonalDetail[];
    values: string[];
    vision: string;
    reflectionQuote: string;
  };
  education: {
    label: string;
    heading: string;
    intro: string;
    degree: EducationEntry;
    ielts: {
      title: string;
      subtitle: string;
      date: string;
      body: string;
      resultLabel: string;
      resultValue: string;
      nextLabel: string;
      nextValue: string;
    };
    mediumOfInstruction: string;
    stats: Stat[];
    researchInterests: string[];
    higherEducationGoals: string[];
    timelineNote: string;
  };
  experience: {
    label: string;
    heading: string;
    intro: string;
    title: string;
    yearsExperience: string;
    studentsPerDay: string;
    materialsPerMonth: string;
    responsibilities: string[];
    roles: ExperienceRole[];
    services: string[];
    sessions: SessionCard[];
    stats: Stat[];
    teachingImages: { src: string; width: number; height: number; alt: string }[];
    acting: {
      label: string;
      heading: string;
      intro: string;
      playTitle: string;
      cards: { title: string; description: string }[];
      images: { src: string; width: number; height: number; alt: string; caption: string | null }[];
    };
  };
  leadership: {
    label: string;
    heading: string;
    intro: string;
    joinCta: string;
    joinCtaHref: string;
    items: LeadershipItem[];
    activities: { title: string; description: string }[];
    photos: { src: string; width: number; height: number; alt: string }[];
    stats: Stat[];
    scope: Stat[];
  };
  skills: {
    label: string;
    heading: string;
    intro: string;
    categories: SkillCategory[];
    digitalTools: string[];
    languages: { name: string; level: string }[];
    stats: Stat[];
    aiCapabilities: string[];
    aiCourses: { title: string; description: string }[];
    apps: { name: string; purpose: string }[];
  };
  projects: { label: string; heading: string; intro: string; items: Project[] };
  achievements: {
    label: string;
    heading: string;
    intro: string;
    items: Achievement[];
    stats: Stat[];
    carousel: { src: string; width: number; height: number; caption: string; sub: string }[];
  };
  certifications: {
    label: string;
    heading: string;
    intro: string;
    filterLabel: string;
    filters: string[];
    items: Certification[];
  };
  publications: {
    label: string;
    heading: string;
    intro: string;
    body: string;
    writingServices: string[];
    stats: Stat[];
    booksHeading: string;
    books: Book[];
    featuredChannel: {
      name: string;
      description: string;
      topics: string[];
      url: string | null;
      placeholderNote: string | null;
    };
    podcast: {
      name: string;
      description: string;
      body: string;
      topics: string[];
      images: { src: string; width: number; height: number; alt: string }[];
    };
    adobeStock: {
      label: string;
      heading: string;
      intro: string;
      body: string;
      guides: { title: string; description: string }[];
      stats: Stat[];
    };
  };
  gallery: {
    label: string;
    heading: string;
    intro: string;
    stats: Stat[];
    photos: GalleryPhoto[];
    albumLinkLabel: string;
    albumUrl: string;
  };
  hobbies: {
    label: string;
    heading: string;
    intro: string;
    sports: { title: string; description: string }[];
    images: { src: string; width: number; height: number; alt: string; caption: string }[];
    activitiesHeading: string;
    activities: string[];
    plantsHeading: string;
    plants: string[];
  };
  careerInterests: {
    label: string;
    heading: string;
    intro: string;
    roles: string[];
    sectors: string[];
    higherEducation: string[];
  };
  contact: {
    label: string;
    heading: string;
    intro: string;
    description: string;
    finalCtaHeading: string;
    finalCtaText: string;
    finalCtaLabel: string;
    email: string;
    whatsappDisplay: string;
    whatsappUrl: string;
    socials: SocialLink[];
    bookingHeading: string;
    bookingIntro: string;
    bookingHelper: string;
    sessionTypes: string[];
  };
  footer: { bio: string; copyright: string; quickLinksHeading: string; contactHeading: string };
  notFound: { heading: string; body: string; backLabel: string; backHref: string };
  /** UI chrome strings (nav controls, form labels, badges, filters).
   *  Everything the design layer renders that is not page content. */
  ui: {
    brand: string;
    downloadCv: string;
    skipToContent: string;
    navLabel: string;
    menuLabel: string;
    openMenu: string;
    closeMenu: string;
    themeLabel: string;
    themeSystem: string;
    themeLight: string;
    themeDark: string;
    languageLabel: string;
    bookSession: string;
    appearanceSettings: string;
    appearanceSubtitle: string;
    appearanceClose: string;
    themeSectionLabel: string;
    themeWarmName: string;
    themeWarmDesc: string;
    themeOriginalName: string;
    themeOriginalDesc: string;
    themeDefaultBadge: string;
    displayModeLabel: string;
    websiteLanguageLabel: string;
    advancedLabel: string;
    textSizeLabel: string;
    textSizeStandard: string;
    textSizeComfortable: string;
    motionLabel: string;
    motionStandard: string;
    motionReduced: string;
    resetDefaults: string;
    exploreWork: string;
    featuredProjects: string;
    viewAllProjects: string;
    viewProject: string;
    watchVideo: string;
    backToProjects: string;
    backToHome: string;
    statusLive: string;
    statusInDevelopment: string;
    statusConcept: string;
    conceptNote: string;
    objectives: string;
    tools: string;
    role: string;
    results: string;
    visitSite: string;
    filterLabel: string;
    filterAll: string;
    comingSoonCert: string;
    aggregateNote: string;
    placeholderNote: string;
    linkedInPlaceholder: string;
    languagesHeading: string;
    digitalToolsHeading: string;
    formName: string;
    formNamePlaceholder: string;
    formEmail: string;
    formEmailPlaceholder: string;
    formSubject: string;
    formSubjectPlaceholder: string;
    formMessage: string;
    formMessagePlaceholder: string;
    formSubmit: string;
    formWhatsAppNote: string;
    formSending: string;
    formErrorName: string;
    formErrorEmail: string;
    formErrorSubject: string;
    formErrorMessage: string;
    formErrorGeneric: string;
    formSuccessTitle: string;
    formSuccessBody: string;
    formSendAnother: string;
    bookingContact: string;
    bookingContactPlaceholder: string;
    bookingType: string;
    bookingDate: string;
    bookingOptional: string;
    bookingSubmit: string;
    bookingSuccessTitle: string;
    bookingSuccessBody: string;
    contactInfoHeading: string;
    privacyLink: string;
    termsLink: string;
    educationCgpa: string;
    educationCourses: string;
    educationMedium: string;
    educationResearchHeading: string;
    educationResearchInterests: string;
    educationHigherGoals: string;
    experienceResponsibilities: string;
    experienceServices: string;
    aboutValues: string;
    aboutVision: string;
    leadershipRoles: string;
    leadershipCommunity: string;
    leadershipVolunteering: string;
    leadershipYouth: string;
    leadershipEvents: string;
    leadershipSocial: string;
    leadershipPhotosHeading: string;
    skillsAiHeading: string;
    categoryLabel: string;
    achievementsPhotosHeading: string;
    opportunitiesRoles: string;
    opportunitiesSectors: string;
    opportunitiesHigherEd: string;
  };
}

export const content: SiteContent = {
  personal: {
    name: "Md. Sonet Mia",
    shortName: "Sonet",
    tagline: "Educator. Leader. Innovator.",
    location: "Tangail, Bangladesh",
    nationality: "Bangladeshi",
    born: "12 January 2000",
    faith: "Islam (Sunni)",
    portraitImage: "/images/hero-portrait.webp",
    portraitAlt: "Portrait of Md. Sonet Mia",
    formalImage: "/images/about-formal.jpg",
    formalImageAlt: "Md. Sonet Mia in a suit",
  },

  seo: {
    title: "Md. Sonet Mia | Educator, Community Leader & Digital Innovator",
    description:
      "Explore the professional portfolio of Md. Sonet Mia, featuring education, teaching experience, community leadership, digital innovation, projects and professional achievements in Bangladesh.",
    keywords:
      "Md Sonet Mia, English teacher Tangail, AI creator Bangladesh, Sweet Smart Calendar, PromptEx, Sweet CGI Lab, SiteIncome Lab",
    ogImageAlt: "Portrait of Md. Sonet Mia",
  },

  nav: [
    { id: "home", label: "Home", href: "/" },
    { id: "about", label: "About", href: "/about" },
    { id: "experience", label: "Experience", href: "/experience" },
    { id: "education", label: "Education", href: "/education" },
    { id: "leadership", label: "Leadership", href: "/leadership" },
    { id: "projects", label: "Projects", href: "/projects" },
    { id: "achievements", label: "Achievements", href: "/achievements" },
    { id: "certifications", label: "Certifications", href: "/certifications" },
    { id: "publications", label: "Publications", href: "/publications" },
    { id: "contact", label: "Contact", href: "/contact" },
  ],
  footerNav: [
    { id: "about", label: "About", href: "/about" },
    { id: "projects", label: "Projects", href: "/projects" },
    { id: "skills", label: "Skills", href: "/skills" },
    { id: "contact", label: "Contact", href: "/contact" },
  ],

  hero: {
    eyebrow: "Educator. Leader. Innovator.",
    headline: "Md. Sonet Mia",
    quote1:
      "I am a multidisciplinary professional from Bangladesh with an academic background in English Language and Literature and experience in education, community engagement, leadership and digital innovation.",
    quote2:
      "I am passionate about creating meaningful learning opportunities, empowering communities and exploring how technology can make education more accessible.",
    primaryCta: "Get in Touch",
    primaryCtaHref: "/contact",
    secondaryCta: "See my projects",
    secondaryCtaHref: "/projects",
    proofLine: "Teaching 2+ years, 50 to 70 students a day.",
  },

  snapshotStats: [
    { figure: "2+", label: "Years Teaching Experience" },
    { figure: "50–70", label: "Students Taught Daily" },
    { figure: "13+", label: "Certifications" },
    { figure: "10+", label: "Community Events" },
  ],

  whatIDo: {
    label: "What I do",
    heading: "Education, community and digital innovation",
    intro:
      "Four areas of work, all connected by one aim: learning that reaches more people.",
    items: [
      {
        title: "Education & Teaching",
        description:
          "English Language Teaching, Lesson Planning, Educational Content Development and Student Assessment.",
      },
      {
        title: "Leadership & Community Development",
        description:
          "Youth Engagement, Volunteering, Event Coordination and Community Initiatives.",
      },
      {
        title: "Technology & Digital Innovation",
        description:
          "AI Tools, Prompt Engineering, Automation and Digital Learning Solutions.",
      },
      {
        title: "Entrepreneurship & Content Creation",
        description:
          "Digital Products, Educational Initiatives, Content Creation and Project Development.",
      },
    ],
  },

  about: {
    label: "About me",
    heading: "The story behind the vision",
    bio: "I am Md. Sonet Mia, a multidisciplinary professional from Bangladesh with an academic background in English Language and Literature. My professional interests span education, teaching, community development, leadership and digital innovation. Through teaching and community engagement, I have developed an interest in creating inclusive learning opportunities and supporting meaningful social development. I am also interested in exploring how artificial intelligence and digital technologies can improve education, creativity and access to knowledge. I aspire to contribute to education, international development and community-focused initiatives while continuing to grow as a lifelong learner.",
    mission:
      "My mission is to contribute to a more inclusive and accessible learning environment through education, leadership, community engagement and technology.",
    paragraphs: [
      "From a young age, I loved the beauty of language and the power of stories. Growing up in Tangail, Bangladesh, curiosity led me through literature, teaching, and technology.",
      "As an English graduate, I pair my love of language with modern digital tools: educational content, AI driven creativity, and mentoring the next generation of learners and thinkers.",
      "My faith in Islam (Sunni) and my commitment to community service shape everything I do — from volunteering to building apps that serve others.",
    ],
    details: [
      { label: "Full Name", value: "Md. Sonet Mia" },
      { label: "Born", value: "12 January 2000" },
      { label: "Nationality", value: "Bangladeshi" },
      { label: "Location", value: "Tangail, Bangladesh" },
    ],
    values: [
      "Inclusive learning opportunities for every student",
      "Community service and social development",
      "Lifelong learning",
      "Honest, practical use of technology in education",
    ],
    vision:
      "A more inclusive and accessible learning environment, where education, leadership, community engagement and technology work together.",
    reflectionQuote:
      "Every achievement is by the mercy of Allah and the support of my parents and sister.",
  },

  education: {
    label: "Education",
    heading: "Academic journey",
    intro: "A passion for language, communication, and lifelong learning.",
    degree: {
      degree: "BA (Honours) in English",
      institution: "Sheikh Fazilatunnesa Mujib University",
      date: "Completed 2024",
      detail:
        "Deep study of English literature, linguistics, and communication — building a strong foundation for teaching, writing, and creative work.",
      cgpa: "3.38 out of 4.00",
      coursesCompleted: "40+",
    },
    ielts: {
      title: "IELTS Completed",
      subtitle: "International English Proficiency",
      date: "Completed 2025",
      body: "Successfully completed the IELTS examination, demonstrating strong English proficiency across all four modules.",
      resultLabel: "Result",
      resultValue: "Overall Band 6.0",
      nextLabel: "Next Target",
      nextValue: "7.5",
    },
    mediumOfInstruction: "English",
    stats: [
      { figure: "4+", label: "Years of Study" },
      { figure: "40+", label: "Courses Completed" },
      { figure: "3", label: "Languages" },
      { figure: "5+", label: "Certifications" },
    ],
    researchInterests: [
      "English Language Education",
      "Inclusive Education",
      "Education and Social Development",
      "Youth Empowerment",
      "Digital Learning",
    ],
    higherEducationGoals: [
      "MA in Education",
      "TESOL / Applied Linguistics",
      "International Development",
      "Educational Leadership",
      "Erasmus Mundus",
    ],
    timelineNote:
      "Earlier schooling is not stated on the original site. Add it here only when the owner confirms the school names and years.",
  },

  experience: {
    label: "Experience",
    heading: "Quality English teaching that empowers students",
    intro: "2+ years teaching, 50 to 70 students a day, 15+ lecture materials a month.",
    title: "English Language Educator",
    yearsExperience: "2+ years",
    studentsPerDay: "50–70 students a day",
    materialsPerMonth: "15+ lecture materials a month",
    responsibilities: [
      "English language instruction",
      "Lesson planning",
      "Classroom management",
      "Student assessment",
      "Educational material development",
      "Student engagement",
    ],
    roles: [
      {
        title: "Assistant Teacher (English Language & Grammar)",
        organisation: "Sobuz Kuri Laboratory School & College",
        dates: "2022–2023",
        location: null,
        responsibilities: [
          "English language instruction",
          "Lesson planning",
          "Classroom management",
          "Student assessment",
          "Educational material development",
          "Student engagement",
        ],
      },
      {
        title: "Assistant Teacher (English Language & Grammar)",
        organisation: "Prativa Preparatory School & College",
        dates: "2023–2024",
        location: null,
        responsibilities: [
          "English language instruction",
          "Lesson planning",
          "Classroom management",
          "Student assessment",
          "Educational material development",
          "Student engagement",
        ],
      },
    ],
    services: [
      "English grammar coaching",
      "Spoken English improvement",
      "Writing improvement",
      "Student mentoring",
    ],
    sessions: [
      {
        title: "Grammar Mastery Session",
        durationMinutes: 60,
        durationLabel: "60 min",
        price: "Contact for pricing",
        description: "Deep dive into English grammar rules, common mistakes, and advanced usage.",
      },
      {
        title: "Spoken English Coaching",
        durationMinutes: 45,
        durationLabel: "45 min",
        price: "Contact for pricing",
        description: "Build confidence in spoken English with guided practice and feedback.",
      },
      {
        title: "Exam Preparation Guidance",
        durationMinutes: 90,
        durationLabel: "90 min",
        price: "Contact for pricing",
        description: "Strategic preparation for English exams with tips, practice, and review.",
      },
    ],
    stats: [
      { figure: "2", label: "Schools" },
      { figure: "200+", label: "Students" },
      { figure: "500+", label: "Sessions" },
      { figure: "2+", label: "Years" },
    ],
    teachingImages: [
      { src: "/images/teaching-english.jpg", width: 1920, height: 1279, alt: "Md. Sonet Mia teaching a group with a microphone" },
      { src: "/images/teaching-presenting.jpg", width: 1279, height: 1920, alt: "Md. Sonet Mia presenting on stage with a microphone" },
      { src: "/images/teaching-speaking.jpg", width: 1359, height: 1369, alt: "Md. Sonet Mia speaking into a microphone while seated" },
    ],
    acting: {
      label: "Acting and theatre",
      heading: "On the stage",
      intro: "Bringing classic literature to life through performance.",
      playTitle: "The Merchant of Venice",
      cards: [
        {
          title: "The Merchant of Venice",
          description:
            "Performed in William Shakespeare's iconic tragedy, showcasing dramatic range and stage presence at a university-level production.",
        },
        {
          title: "Stage Performance",
          description:
            "Delivered a compelling portrayal that combined classical English literature with expressive theatrical storytelling.",
        },
        {
          title: "Drama & Expression",
          description:
            "Passionate about using theatre as a medium to bring classic literature to life and connect with audiences.",
        },
      ],
      images: [
        { src: "/images/merchant-venice-1.jpg", width: 1920, height: 1279, alt: "Md Sonet Mia performing in The Merchant of Venice", caption: "The Merchant of Venice, on stage." },
        { src: "/images/merchant-venice-2.jpg", width: 1158, height: 651, alt: "A scene from The Merchant of Venice performance", caption: null },
      ],
    },
  },

  leadership: {
    label: "Leadership",
    heading: "Serving communities",
    intro: "Making a real impact through social service, education, and youth empowerment.",
    joinCta: "Join my volunteer network",
    joinCtaHref: "/contact",
    items: [
      {
        title: "Chief Sergeant at Arms",
        organisation: "Rotaract Club",
        role: "Chief Sergeant at Arms",
        date: null,
        description:
          "A leadership role in the Rotaract Club, shown in the original site's achievements gallery.",
        image: "/images/chief-sergeant.jpg",
        imageAlt: "Chief Sergeant at Arms",
        placeholder: true,
        placeholderNote:
          "Organisation link is inferred from the Rotaract gallery photos and the role caption on the original site; the owner must confirm the club name and the dates before this goes live.",
      },
      {
        title: "Volunteers for Bangladesh",
        organisation: "Volunteers for Bangladesh",
        role: null,
        date: null,
        description:
          "Community volunteering with Volunteers for Bangladesh. Position and dates to be confirmed by the owner.",
        image: null,
        imageAlt: null,
        placeholder: true,
        placeholderNote: "Named in the master prompt only. No position, dates or description are verified; owner to fill.",
      },
      {
        title: "Medhabikash Library",
        organisation: "Medhabikash Library",
        role: null,
        date: null,
        description:
          "Community work with Medhabikash Library. Position and dates to be confirmed by the owner.",
        image: null,
        imageAlt: null,
        placeholder: true,
        placeholderNote: "Named in the master prompt only. No position, dates or description are verified; owner to fill.",
      },
    ],
    activities: [
      { title: "Community Education", description: "Teaching underprivileged children and spreading educational awareness in rural areas." },
      { title: "Youth Leadership", description: "Mentoring young people and organizing community-building events and workshops." },
      { title: "Social Campaigns", description: "Leading awareness campaigns on education, health, and environmental issues." },
      { title: "Disaster Relief", description: "Volunteering in relief efforts and distributing aid during natural disasters." },
      { title: "Book Distribution", description: "Providing educational materials and books to underserved communities." },
      { title: "Cultural Preservation", description: "Promoting Bangladeshi culture, language, and heritage through community events." },
    ],
    photos: [
      { src: "/images/volunteer-kids-1.jpg", width: 1008, height: 756, alt: "Volunteering with children" },
      { src: "/images/volunteer-kids-2.jpg", width: 1920, height: 1440, alt: "Community outreach with kids" },
      { src: "/images/presentation-group.jpg", width: 720, height: 480, alt: "Group presentation" },
      { src: "/images/cultural-dress.jpg", width: 1920, height: 864, alt: "Cultural engagement" },
    ],
    stats: [
      { figure: "117+", label: "Social Activities" },
      { figure: "500+", label: "Lives Impacted" },
      { figure: "12+", label: "Certified Training Completed" },
      { figure: "13+", label: "Organizations" },
    ],
    scope: [
      { figure: "4", label: "International" },
      { figure: "6", label: "National" },
      { figure: "3", label: "Local" },
    ],
  },

  skills: {
    label: "Skills",
    heading: "Tools and technologies",
    intro: "Skills as tags. No percentage bars; levels are plain words.",
    categories: [
      {
        category: "Education",
        tags: ["English language instruction", "Lesson planning", "Classroom management", "Student assessment", "Educational material development", "Student mentoring", "Creative writing mentoring", "Poetry writing workshop", "Story writing guidance"],
      },
      {
        category: "Communication",
        tags: ["Spoken English", "Public speaking", "Debate", "Presentation", "Writing"],
      },
      {
        category: "Leadership",
        tags: ["Youth leadership", "Community engagement", "Volunteer coordination", "Event organisation", "Mentoring"],
      },
      {
        category: "Digital",
        tags: ["Microsoft Word", "Excel", "PowerPoint", "Photoshop", "Internet Research", "Email Management"],
      },
      {
        category: "AI & Technology",
        tags: ["AI Tools (ChatGPT, Gemini, DeepSeek +)", "Prompt writing", "Content creation", "Video generation", "Creative strategy", "AI image creation", "AI video generation"],
      },
      {
        category: "Entrepreneurship",
        tags: ["Microstock content creation", "Website monetization", "Content strategy", "Digital product ideas"],
      },
    ],
    digitalTools: [
      "Microsoft Word",
      "Excel",
      "PowerPoint",
      "Photoshop",
      "Internet Research",
      "Email Management",
      "AI Tools (ChatGPT, Gemini, DeepSeek +)",
    ],
    languages: [
      { name: "Bangla", level: "Native" },
      { name: "English", level: "Advanced" },
      { name: "Hindi", level: "Fluent" },
      { name: "Arabic", level: "Reading" },
      { name: "Urdu", level: "Reading" },
      { name: "Korean", level: "Reading" },
    ],
    stats: [
      { figure: "15+", label: "Tools Mastered" },
      { figure: "8+", label: "AI Platforms" },
    ],
    aiCapabilities: ["Prompt writing", "Content creation", "Video generation", "Creative strategy"],
    aiCourses: [
      { title: "AI Prompt Masterclass", description: "Learn to write effective prompts for ChatGPT, Gemini, and other AI tools." },
      { title: "AI Content Strategy", description: "Develop a content strategy powered by AI for maximum reach and engagement." },
      { title: "AI Video Workshop", description: "Generate creative video concepts using AI-driven brainstorming techniques." },
    ],
    apps: [
      { name: "Sweet Calculator", purpose: "A clean, intuitive calculator for everyday math." },
      { name: "Sweet AI", purpose: "AI powered assistant for learning and productivity." },
      { name: "Sweet Note", purpose: "Minimal note taking app for quick ideas." },
      { name: "Sweet Traffic Hero", purpose: "Traffic safety awareness educational tool." },
      { name: "Sweet Learning English", purpose: "Interactive English learning companion." },
      { name: "Sweet Spoken English", purpose: "Practice spoken English with guided exercises." },
      { name: "Sweet Volunteering", purpose: "Track and manage volunteer activities." },
      { name: "SDG Tracker", purpose: "Monitor Sustainable Development Goals progress." },
      { name: "All in One", purpose: "Multi purpose productivity suite." },
      { name: "Sweet Problem Solver", purpose: "Smart problem solving assistant." },
    ],
  },

  projects: {
    label: "Projects",
    heading: "Work that is already live",
    intro: "Projects built for real people: learners, creators, and readers. Concepts are labelled as concepts; only live work links out.",
    items: [
      {
        id: "microstock-journey",
        title: "Microstock Journey With Sonet",
        shortDescription:
          "An educational initiative that helps learners find the right season to create and upload stock content, with AI-powered digital asset creation, metadata optimization and stock marketplace workflows.",
        category: "Education",
        role: "Founder and educator",
        objectives: [
          "Teach learners to create and upload stock content in the right season",
          "Teach AI-powered digital asset creation and metadata optimization",
          "Teach stock marketplace workflows",
        ],
        tools: ["Sweet Smart Calendar", "AI tools", "Adobe Stock"],
        status: "Live",
        results: [
          { figure: "53", label: "Approved students" },
          { figure: "216", label: "Bilingual topics" },
        ],
        url: "https://sweet-smart-calendar.vercel.app",
        urlLabel: "Visit Sweet Smart Calendar",
        coverImage: null,
        coverImageAlt: null,
        videoId: "OvYWjGALJ0Y",
        videoTitle: "ফ্রিল্যান্সিং করছ, আইসক্রিম করছ... Microstocking",
        tags: ["Microstock", "Teaching", "Web app"],
      },
      {
        id: "promptex",
        title: "AI Microstock Metadata Generator Pro",
        shortDescription:
          "PromptEx: a free microstock metadata and image-to-prompt tool that works with your own API keys.",
        category: "AI tools",
        role: "Creator",
        objectives: [
          "Generate microstock metadata (titles, keywords, descriptions) for free",
          "Turn an image into a prompt",
          "Let each user bring their own API keys",
        ],
        tools: ["PromptEx", "Gemini", "Groq", "OpenRouter", "Together", "Mistral", "HuggingFace"],
        status: "Live",
        results: [{ figure: "Free", label: "To use, with your own API keys" }],
        url: "https://promptex-nine.vercel.app",
        urlLabel: "Visit PromptEx",
        coverImage: null,
        coverImageAlt: null,
        videoId: "vjTXhOmEzIU",
        videoTitle: "Turn Images into Sell-Ready Metadata in Seconds | PromptEx",
        tags: ["AI tools", "Metadata", "Free"],
      },
      {
        id: "sweet-smart-calculator",
        title: "Sweet Smart Calculator",
        shortDescription:
          "A clean, intuitive calculator for everyday math.",
        category: "App",
        role: "Creator",
        objectives: ["Do everyday math in a clean, intuitive calculator"],
        tools: ["Sweet Smart Calculator"],
        status: "Live",
        results: [],
        url: null,
        urlLabel: null,
        coverImage: null,
        coverImageAlt: null,
        videoId: "QEMB14UxTkk",
        videoTitle: "You Missed Christmas. Don't Miss the Next Season! Sweet Smart Calculator (For team members only)",
        tags: ["App", "Calculator", "Video"],
      },
      {
        id: "sonet-english-academy",
        title: "Sonet English Academy",
        shortDescription:
          "A planned English language learning initiative. Details to be confirmed by the owner.",
        category: "Education",
        role: "Founder",
        objectives: [],
        tools: [],
        status: "Concept",
        results: [],
        url: null,
        urlLabel: null,
        coverImage: "/images/project-sonet-english-academy.webp",
        coverImageAlt: "Sonet English Academy — Learn English for Real Progress",
        tags: ["English", "Teaching"],
        placeholder: true,
        placeholderNote:
          "Concept named in the master prompt only. No description, objectives, tools or URL are verified; owner to fill before this is shown as more than a concept.",
      },
      {
        id: "jobmatch-bangladesh",
        title: "JobMatch Bangladesh",
        shortDescription:
          "A planned job-matching initiative for Bangladesh. Details to be confirmed by the owner.",
        category: "Employment",
        role: "Founder",
        objectives: [],
        tools: [],
        status: "Concept",
        results: [],
        url: null,
        urlLabel: null,
        coverImage: "/images/project-jobmatch-bangladesh.webp",
        coverImageAlt: "JobMatch Bangladesh — Jobs Matched to Your CV",
        tags: ["Jobs", "Bangladesh"],
        placeholder: true,
        placeholderNote:
          "Concept named in the master prompt only. No description, objectives, tools or URL are verified; owner to fill before this is shown as more than a concept.",
      },
      {
        id: "skillverse-by-sonet",
        title: "SkillVerse By Sonet",
        shortDescription:
          "A YouTube channel for skills and learning.",
        category: "YouTube",
        role: "Creator",
        objectives: ["Publish skills and learning videos on YouTube"],
        tools: ["YouTube"],
        status: "Live",
        results: [{ figure: "66", label: "Subscribers" }],
        url: "https://www.youtube.com/@SkillVersebySonet",
        urlLabel: "Visit SkillVerse on YouTube",
        coverImage: "/images/project-skillverse.webp",
        coverImageAlt: "SkillVerse by Sonet — Microstock Journey channel",
        tags: ["YouTube", "Learning"],
      },
      {
        id: "sweet-cgi-lab",
        title: "Sweet CGI Lab",
        shortDescription:
          "A YouTube Shorts channel where impossible ideas become realistic CGI in short, satisfying clips.",
        category: "YouTube Shorts",
        role: "Creator",
        objectives: [
          "Turn impossible ideas into realistic CGI short clips",
          "Publish satisfying short-form video for a US audience",
        ],
        tools: ["CGI video", "YouTube Shorts"],
        status: "Live",
        results: [
          { figure: "72", label: "Subscribers" },
          { figure: "98,000+", label: "Views" },
        ],
        url: "https://www.youtube.com/@SweetCGILab",
        urlLabel: "Visit Sweet CGI Lab on YouTube",
        coverImage: "/images/project-sweet-cgi-lab.webp",
        coverImageAlt: "Sweet CGI Lab — Unreal CGI car Shorts",
        tags: ["YouTube Shorts", "CGI", "Video"],
      },
      {
        id: "siteincome-lab",
        title: "SiteIncome Lab",
        shortDescription:
          "A blog about website monetization, written for beginners who want to earn from a site they own.",
        category: "Blog",
        role: "Author",
        objectives: [
          "Teach beginners how to earn from a website they own",
          "Explain website monetization in plain language",
        ],
        tools: ["Blogger", "Adsterra"],
        status: "Live",
        results: [{ figure: "18", label: "Posts live" }],
        url: "https://siteincomelab.blogspot.com",
        urlLabel: "Visit SiteIncome Lab",
        coverImage: "/images/project-siteincome-lab.webp",
        coverImageAlt: "SiteIncome Lab — Practical Guides to Make Money Online",
        tags: ["Blog", "Monetization", "Writing"],
      },
    ],
  },

  achievements: {
    label: "Achievements",
    heading: "Recognition and growth",
    intro: "Continuous learning, service, and excellence.",
    items: [
      { title: "Rising Star Award", description: "Recognized for outstanding growth and contribution.", date: null, image: null, imageAlt: null },
      { title: "Best Volunteer Award", description: "Honored for exceptional community service and dedication.", date: null, image: null, imageAlt: null },
      { title: "Debate Competition Certificates", description: "Multiple recognitions in competitive debate events.", date: null, image: null, imageAlt: null },
      { title: "Chess Championship Certificates", description: "Achievements in strategic chess tournaments.", date: null, image: null, imageAlt: null },
      { title: "17+ Online Course Certifications", description: "Continuous learning across diverse digital disciplines.", date: null, image: null, imageAlt: null },
      { title: "6+ Training Completed", description: "Professional development training in leadership, capacity building, and youth empowerment.", date: null, image: null, imageAlt: null },
    ],
    stats: [
      { figure: "5+", label: "Awards" },
      { figure: "17+", label: "Certifications" },
      { figure: "6+", label: "Trainings" },
      { figure: "30+", label: "Events" },
    ],
    carousel: [
      { src: "/images/chief-sergeant.jpg", width: 960, height: 943, caption: "Chief Sergeant at Arms", sub: "Leadership Role" },
      { src: "/images/event-group.jpg", width: 720, height: 450, caption: "Youth event", sub: "Youth Events" },
      { src: "/images/event-volunteer.jpg", width: 720, height: 434, caption: "Volunteer event", sub: "Community Service" },
      { src: "/images/training-portrait.jpg", width: 723, height: 569, caption: "Capacity building training", sub: "Professional Training" },
      { src: "/images/speaking-mic.jpg", width: 932, height: 950, caption: "Public speaking", sub: "Public Speaking" },
    ],
  },

  certifications: {
    label: "Certifications",
    heading: "Certifications",
    intro: "Verified certificates first. Empty slots are for the owner to fill; they must not be shown as earned certificates.",
    filterLabel: "Filter by category",
    filters: ["All", "Language", "Teaching", "Leadership", "Digital & AI", "Other"],
    items: [
      {
        title: "IELTS Academic",
        issuer: null,
        date: "Completed 2025",
        detail: "International English Language Testing System, Academic module.",
        credential: "Overall Band 6.0",
        category: "Language",
        kind: "real",
      },
      {
        title: "Online course certifications",
        issuer: null,
        date: null,
        detail: "17+ online course certifications across diverse digital disciplines, as listed on the original site. Individual course names are not on record.",
        credential: "17+ certificates",
        category: "Digital & AI",
        kind: "aggregate",
      },
      {
        title: "Professional development training",
        issuer: null,
        date: null,
        detail: "6+ trainings completed in leadership, capacity building, and youth empowerment, as listed on the original site. Individual training names are not on record.",
        credential: "6+ trainings",
        category: "Leadership",
        kind: "aggregate",
      },
      { title: "", issuer: null, date: null, detail: "", credential: null, category: "Other", kind: "placeholder", placeholder: true },
      { title: "", issuer: null, date: null, detail: "", credential: null, category: "Other", kind: "placeholder", placeholder: true },
      { title: "", issuer: null, date: null, detail: "", credential: null, category: "Other", kind: "placeholder", placeholder: true },
      { title: "", issuer: null, date: null, detail: "", credential: null, category: "Other", kind: "placeholder", placeholder: true },
      { title: "", issuer: null, date: null, detail: "", credential: null, category: "Other", kind: "placeholder", placeholder: true },
      { title: "", issuer: null, date: null, detail: "", credential: null, category: "Other", kind: "placeholder", placeholder: true },
    ],
  },

  publications: {
    label: "Publications",
    heading: "Words that inspire",
    intro: "Exploring human emotion and motivation through writing.",
    body: "Writing has been my lifelong companion. From poetry to motivational books, I use words to connect, inspire, and spark change in readers around the world.",
    writingServices: ["Creative writing mentoring", "Poetry writing workshop", "Story writing guidance"],
    stats: [
      { figure: "5", label: "Books" },
      { figure: "3", label: "Published" },
      { figure: "4", label: "Genres" },
    ],
    booksHeading: "My books",
    books: [
      { title: "A Story of Two Hearts", kind: "Story Book", description: null, coverImage: "/images/book-two-hearts.jpg", coverImageAlt: "A Story of Two Hearts book", coverNote: null },
      { title: "Smritimoy Kabya", kind: "Joint Poetry Book (Published)", description: null, coverImage: "/images/book-smritimoy-kabya.jpg", coverImageAlt: "Smritimoy Kabya book cover", coverNote: null },
      { title: "বিসর্জন", kind: "Published on Bortoi.com", description: null, coverImage: "/images/book-bishorjon.jpg", coverImageAlt: "বিসর্জন book", coverNote: "Cover is only 310x163: render as a small thumbnail, never full-bleed." },
      { title: "One More Step", kind: "Motivational eBook", description: null, coverImage: null, coverImageAlt: null, coverNote: "No cover image on record: text-only entry." },
      { title: "Why?", kind: "Motivational English Book", description: null, coverImage: null, coverImageAlt: null, coverNote: "No cover image on record: text-only entry." },
    ],
    featuredChannel: {
      name: "SkillVerse By Sonet",
      description: "Featured YouTube channel for skills and learning.",
      topics: ["English Grammar", "Motivation", "Life Hacks", "Book Reviews"],
      url: null,
      placeholderNote: "No channel URL is on record. Do not invent or guess one; show the channel name only until the owner supplies the link.",
    },
    podcast: {
      name: "Think and Spark",
      description: "A faceless YouTube podcast that educates and inspires listeners around the world.",
      body: "Think and Spark is built for listeners: clear ideas, honest conversation, lessons you can use the same day.",
      topics: ["English Grammar", "Motivation", "Life Hacks", "Book Reviews"],
      images: [
        { src: "/images/speaking-stage.jpg", width: 1920, height: 1279, alt: "Md Sonet Mia speaking on stage for the Think and Spark podcast" },
        { src: "/images/capacity-building.jpg", width: 1655, height: 1228, alt: "Capacity building training session" },
        { src: "/images/teamwork.jpg", width: 1920, height: 1279, alt: "Teamwork and collaboration" },
      ],
    },
    adobeStock: {
      label: "Adobe Stock",
      heading: "Stock content creator",
      intro: "Creating visual content for the global marketplace.",
      body: "As an Adobe Stock contributor, I create images and video for buyers around the world.",
      guides: [
        { title: "AI image creation guidance", description: "How to create stock ready images with AI tools, and what to check before upload." },
        { title: "AI video generation guidance", description: "How to plan short stock clips that buyers actually search for." },
        { title: "Stock content strategy", description: "Choosing topics by season and demand, not by guesswork." },
      ],
      stats: [
        { figure: "1,143", label: "Total Downloads" },
        { figure: "$1,122.44", label: "Total Earnings" },
        { figure: "Active Contributor", label: "Status" },
      ],
    },
  },

  gallery: {
    label: "Gallery",
    heading: "Captured moments",
    intro: "A visual journey through my experiences, events, and memories.",
    stats: [
      { figure: "20+", label: "Photos" },
      { figure: "15+", label: "Events" },
      { figure: "∞", label: "Memories" },
    ],
    photos: [
      { src: "/images/gallery-01.jpg", width: 1280, height: 960, alt: "Teaching at school", caption: "Teaching at school" },
      { src: "/images/gallery-02.jpg", width: 1593, height: 972, alt: "Rotaract Club meeting", caption: "Rotaract Club meeting" },
      { src: "/images/gallery-03.jpg", width: 1280, height: 960, alt: "Heritage site visit", caption: "Heritage site visit" },
      { src: "/images/gallery-04.jpg", width: 1920, height: 1148, alt: "Award ceremony", caption: "Award ceremony" },
      { src: "/images/gallery-05.jpg", width: 1002, height: 736, alt: "Group photo with trophy", caption: "Group photo with trophy" },
      { src: "/images/gallery-06.jpg", width: 720, height: 912, alt: "Holding a book", caption: "Holding a book" },
      { src: "/images/gallery-07.jpg", width: 720, height: 525, alt: "Event group photo", caption: "Event group photo" },
      { src: "/images/gallery-08.jpg", width: 1920, height: 1088, alt: "Boat ride with friends", caption: "Boat ride with friends" },
      { src: "/images/gallery-09.jpg", width: 930, height: 689, alt: "Community event with children", caption: "Community event with children" },
      { src: "/images/gallery-10.jpg", width: 1920, height: 1080, alt: "A Story of Two Hearts book", caption: "A Story of Two Hearts book" },
      { src: "/images/gallery-11.jpg", width: 1527, height: 1279, alt: "Speaking at event", caption: "Speaking at event" },
      { src: "/images/gallery-12.jpg", width: 1101, height: 647, alt: "Workshop session", caption: "Workshop session" },
      { src: "/images/gallery-13.jpg", width: 934, height: 672, alt: "Rotaract certificate ceremony", caption: "Rotaract certificate ceremony" },
      { src: "/images/gallery-14.jpg", width: 1280, height: 852, alt: "Community fair market", caption: "Community fair market" },
      { src: "/images/gallery-15.jpg", width: 719, height: 531, alt: "Group photo at workshop", caption: "Group photo at workshop" },
      { src: "/images/gallery-16.jpg", width: 705, height: 778, alt: "Food distribution event", caption: "Food distribution event" },
      { src: "/images/gallery-17.jpg", width: 720, height: 609, alt: "Distribution of fans with children", caption: "Distribution of fans with children" },
      { src: "/images/gallery-18.jpg", width: 1920, height: 1440, alt: "Formal gathering with friends", caption: "Formal gathering with friends" },
      { src: "/images/gallery-19.jpg", width: 1920, height: 1440, alt: "Meeting at library", caption: "Meeting at library" },
      { src: "/images/gallery-20.jpg", width: 720, height: 700, alt: "Tree planting campaign", caption: "Tree planting campaign" },
    ],
    albumLinkLabel: "View the full album on Facebook",
    albumUrl: "https://www.facebook.com/media/set/?set=a.694677762083396&type=3",
  },

  hobbies: {
    label: "Hobbies and sports",
    heading: "Beyond the classroom",
    intro: "Creative pursuits and competitive sports — moments of passion and growth.",
    sports: [
      { title: "Football player", description: "Active team player in university and local football matches." },
      { title: "Badminton player", description: "Enjoys competitive and recreational badminton." },
      { title: "Chess champion", description: "Championship certificates in strategic chess tournaments." },
      { title: "Debate champion", description: "Multiple recognitions in competitive debate events." },
    ],
    images: [
      { src: "/images/football-team.jpg", width: 1024, height: 576, alt: "Md Sonet Mia with his football team", caption: "Football with the university team." },
      { src: "/images/speaking-podium.jpg", width: 1229, height: 864, alt: "Md Sonet Mia speaking at a podium during a debate event", caption: "Debate and public speaking." },
    ],
    activitiesHeading: "Activities I Love",
    activities: ["Reading Books", "Gardening", "Calligraphy", "Handmade Flower Art", "Technology Exploration"],
    plantsHeading: "Plants in My Room",
    plants: ["Beli", "Hasnahena", "Nagchampa", "Rose", "Allamanda"],
  },

  careerInterests: {
    label: "Open to Opportunities",
    heading: "Open to opportunities",
    intro: "I welcome opportunities for collaboration, education, research, professional development and community initiatives.",
    roles: [
      "English Language Educator",
      "Education Programme Assistant",
      "Programme Coordinator",
      "Community Development Officer",
      "Training & Facilitation Officer",
      "Youth Development Professional",
      "Education Project Assistant",
    ],
    sectors: [
      "Educational Institutions",
      "NGOs & INGOs",
      "International Development Organizations",
      "Education Technology",
      "Youth Development Organizations",
    ],
    higherEducation: [
      "MA in Education",
      "TESOL / Applied Linguistics",
      "International Development",
      "Educational Leadership",
      "Erasmus Mundus",
    ],
  },

  contact: {
    label: "Contact",
    heading: "Get in touch",
    intro: "The fastest way to reach Sonet is WhatsApp. Email works too.",
    description:
      "I welcome opportunities for collaboration, education, research, professional development and community initiatives.",
    finalCtaHeading: "Let's Connect and Create Meaningful Impact.",
    finalCtaText:
      "I welcome opportunities for collaboration, education, research, professional development and community initiatives.",
    finalCtaLabel: "Get in Touch",
    email: "md.sonet.mia01@gmail.com",
    whatsappDisplay: "WhatsApp 01797953059",
    whatsappUrl: "https://wa.me/8801797953059",
    socials: [
      { label: "Facebook", url: "https://facebook.com/mdsont.mia.777", handle: "facebook.com/mdsont.mia.777" },
      { label: "WhatsApp", url: "https://wa.me/8801797953059", handle: "01797953059" },
      { label: "YouTube", url: "https://www.youtube.com/@SweetCGILab", handle: "@SweetCGILab" },
      { label: "GitHub", url: "https://github.com/mdsonetmia04-cmyk", handle: "mdsonetmia04-cmyk" },
      { label: "LinkedIn", url: null, handle: null, placeholder: true },
    ],
    bookingHeading: "Let's work together",
    bookingIntro: "Tell Sonet what you need help with.",
    bookingHelper:
      "Sending opens WhatsApp with your request ready to send. No payment is taken on this site.",
    sessionTypes: [
      "English guidance session",
      "Writing consultation",
      "AI prompt masterclass",
      "AI content strategy",
      "AI video workshop",
      "Creative Discussion",
      "Something else",
    ],
  },

  footer: {
    bio: "Writer, Educator, AI Creator & Digital Thinker from Tangail, Bangladesh.",
    copyright: "© 2026 Md. Sonet Mia. All rights reserved.",
    quickLinksHeading: "Quick Links",
    contactHeading: "Contact",
  },

  notFound: {
    heading: "Page not found",
    body: "This page does not exist, or it moved. The home page has everything else.",
    backLabel: "Back to the home page",
    backHref: "/",
  },

  ui: {
    brand: "SONET.",
    downloadCv: "Download CV",
    skipToContent: "Skip to content",
    navLabel: "Main navigation",
    menuLabel: "Menu",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    themeLabel: "Theme",
    themeSystem: "System",
    themeLight: "Light",
    themeDark: "Dark",
    languageLabel: "Language",
    bookSession: "Book a Session",
    appearanceSettings: "Appearance Settings",
    appearanceSubtitle: "Customize your browsing experience.",
    appearanceClose: "Close settings",
    themeSectionLabel: "Choose Your Theme",
    themeWarmName: "Warm Editorial",
    themeWarmDesc: "Warm cream and gold — minimal and editorial.",
    themeOriginalName: "Original Theme",
    themeOriginalDesc: "The site's original look.",
    themeDefaultBadge: "Default",
    displayModeLabel: "Display Mode",
    websiteLanguageLabel: "Website Language",
    advancedLabel: "Advanced Appearance",
    textSizeLabel: "Text Size",
    textSizeStandard: "Standard",
    textSizeComfortable: "Comfortable",
    motionLabel: "Motion",
    motionStandard: "Standard Motion",
    motionReduced: "Reduced Motion",
    resetDefaults: "Reset to Defaults",
    exploreWork: "Explore My Work",
    featuredProjects: "Featured Projects",
    viewAllProjects: "View all projects",
    viewProject: "View project",
    watchVideo: "Watch the video",
    backToProjects: "Back to all projects",
    backToHome: "Back to home",
    statusLive: "Live",
    statusInDevelopment: "In Development",
    statusConcept: "Concept",
    conceptNote: "Concept — details to be confirmed by the owner.",
    objectives: "Objectives",
    tools: "Tools & Technologies",
    role: "Role",
    results: "Results",
    visitSite: "Visit site",
    filterLabel: "Filter by category",
    filterAll: "All",
    comingSoonCert: "Coming soon — the owner will add this certificate.",
    aggregateNote: "Count from the original site — individual names are not on record.",
    placeholderNote: "Details to be confirmed by the owner.",
    linkedInPlaceholder: "LinkedIn profile — link to be added.",
    languagesHeading: "Languages",
    digitalToolsHeading: "Digital Tools",
    formName: "Name",
    formNamePlaceholder: "Your name",
    formEmail: "Email",
    formEmailPlaceholder: "you@example.com",
    formSubject: "Subject",
    formSubjectPlaceholder: "Message subject",
    formMessage: "Message",
    formMessagePlaceholder: "Write your message…",
    formSubmit: "Send via WhatsApp",
    formWhatsAppNote: "Your message will open in WhatsApp to send to Sonet.",
    formSending: "Checking…",
    formErrorName: "Please enter your name (at least 2 characters).",
    formErrorEmail: "Please enter a valid email address.",
    formErrorSubject: "Please add a subject.",
    formErrorMessage: "Please write a message.",
    formErrorGeneric: "Something went wrong. Please try again.",
    formSuccessTitle: "Ready to open WhatsApp",
    formSuccessBody: "Your message is prepared in WhatsApp. Press send and it will reach Sonet.",
    formSendAnother: "Send another message",
    bookingContact: "Email or phone",
    bookingContactPlaceholder: "you@example.com or 01XXXXXXXXX",
    bookingType: "Session type",
    bookingDate: "Preferred date",
    bookingOptional: "Optional",
    bookingSubmit: "Send request via WhatsApp",
    bookingSuccessTitle: "Ready to open WhatsApp",
    bookingSuccessBody: "Your session request is prepared in WhatsApp. Press send and it will reach Sonet.",
    contactInfoHeading: "Contact details",
    privacyLink: "Privacy policy",
    termsLink: "Terms",
    educationCgpa: "CGPA",
    educationCourses: "Courses completed",
    educationMedium: "Medium of instruction",
    educationResearchHeading: "Research & goals",
    educationResearchInterests: "Research interests",
    educationHigherGoals: "Higher-education goals",
    experienceResponsibilities: "Responsibilities",
    experienceServices: "Services",
    aboutValues: "Values",
    aboutVision: "Vision",
    leadershipRoles: "Leadership Roles",
    leadershipCommunity: "Community Engagement",
    leadershipVolunteering: "Volunteering",
    leadershipYouth: "Youth Development",
    leadershipEvents: "Event Coordination",
    leadershipSocial: "Social Initiatives",
    leadershipPhotosHeading: "Volunteering in photos",
    skillsAiHeading: "AI capabilities",
    categoryLabel: "Category",
    achievementsPhotosHeading: "Recognition in photos",
    opportunitiesRoles: "Roles",
    opportunitiesSectors: "Sectors",
    opportunitiesHigherEd: "Higher education",
  },
};
