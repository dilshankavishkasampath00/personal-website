import { getImgPath } from "@/utils/image";

export const menuItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
];

export const count = [
    {
        icon: getImgPath("/images/counter/star.svg"),
        value: "2+",
        description: "Years of Experience in Software Development",
    },
    {
        icon: getImgPath("/images/counter/admin.svg"),
        value: "10+",
        description: "Projects Completed Successfully",
    },
    {
        icon: getImgPath("/images/counter/bag.svg"),
        value: "100%",
        description: "Client Satisfaction",
    },
];

export const Progress = [
    { title: 'C#', Progress: 90 },
    { title: 'Java', Progress: 90 },
    { title: 'PHP', Progress: 85 },
    { title: 'Flutter & Mobile Apps', Progress: 80 },
    { title: 'SQL', Progress: 85 },
    { title: 'React & React Native', Progress: 80 },
];

export const ExperienceList = [
    {
        icon: getImgPath('/images/services/ux-design-product_1.svg'),
        title: 'Freelance Developer',
        description: 'Fiverr (Aug 2023 - Present). Core skills in C#, Java, and PHP. Development of mobile applications and web solutions.',
    },
    {
        icon: getImgPath('/images/services/perfomance-optimization.svg'),
        title: 'Quality Control',
        description: 'Richard Pieris Natural Foams Ltd. (Apr 2022 - Present). Detail-oriented and process-driven approach to problem-solving.',
    },
    {
        icon: getImgPath('/images/services/ux-design-product_2.svg'),
        title: 'Student (HND in IT)',
        description: 'SLIATE (Aug 2023 - Present). Pursuing Higher National Diploma in Information Technology.',
    },
];

export const ServicesList = [
    {
        icon: "mdi:code-braces",
        title: 'Full-Stack Web Development',
        description: 'Building robust and scalable web applications using Java, Spring Boot, React, and Laravel with modern development practices.',
    },
    {
        icon: "mdi:cellphone",
        title: 'Mobile App Development',
        description: 'Creating cross-platform mobile applications with Flutter and React Native, ensuring excellent user experience and performance.',
    },
    {
        icon: "mdi:bug-check",
        title: 'Quality Control & Testing',
        description: 'Comprehensive quality assurance, testing strategies, and bug fixing to ensure product excellence and reliability.',
    },
];

export const Certifications = [
    {
        title: 'Speed Up Data Analysis and Presentation Building',
        provider: 'Google',
    },
    {
        title: 'Google Prompting Essentials',
        provider: 'Google',
    },
    {
        title: 'Use AI as a Creative or Expert Partner',
        provider: 'Google',
    },
    {
        title: 'Programming in Python - For Beginners',
        provider: '',
    },
    {
        title: 'Flutter mobile apps',
        provider: '',
    },
];

// Keeping this empty or minimal as per request to hide it, but keeping structure to avoid errors if imported
export const portfolioinfo = []