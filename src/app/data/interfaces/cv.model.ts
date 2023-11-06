
export interface ProfileImage {
    src: string;
    alt: string;
}

export interface ContactInfo {
    phone: string;
    email: string;
    linkedInUrl: string;
    githubUrl: string;
    location: string;
}

export interface EducationDetail {
    institution: string;
    degree: string;
    period: string;
}

export interface LanguageProficiency {
    language: string;
    level: number;
}

export interface Experience {
    period: string;
    company: string;
    role: string;
    technologies: string[];
}

export interface Skill {
    name: string;
    level: number
}

export interface Interest {
    name: string;
}

export interface CvData {
    profileImage: ProfileImage;
    name: string;
    title: string;
    about: string;
    contactInfo: ContactInfo;
    education: EducationDetail[];
    languages: LanguageProficiency[];
    experience: Experience[];
    skills: Skill[];
    interests: Interest[];
    agreement: string;
}