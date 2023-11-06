import { CvData } from "../interfaces/cv.model";

export const MOCK_CV_DATA: CvData = {
    profileImage: {
        src: '../../../../assets/img/cvimg5.png',
        alt: 'Wiktor Wróbel'
    },
    name: 'Wiktor Wróbel',
    title: 'Frontend developer',
    about: 'Hello, my name is Wiktor Wróbel and I am a Junior Frontend Developer specializing in Angular technology at Comarch. I have solid experience working with Angular, TypeScript, Node.js, REST API, SASS, RxJS, and JavaScript. I am ambitious and hard-working, always striving to hone my skills and advance my career in the technology field During my year at Comarch, I have contributed to numerous projects, delivering effective and efficient frontend solutions. I hold certifications validating my proficiency in Angular technology as well as my knowledge of the English language. I value the opportunity to learn and leverage new technologies to create innovative solutions. I believe that continuous skill improvement is key to success in the fast-paced world of technology. I am open to establishing new professional connections and career development opportunities. Feel free to reach out!',
    contactInfo: {
        phone: '+48 793 672 049',
        email: 'wiktor_wrobel@wp.pl',
        linkedInUrl: 'https://www.linkedin.com/in/wiktorwrobel/',
        githubUrl: 'https://github.com/wrobelhehe',
        location: 'Cracow, Poland'
    },
    education: [{
        institution: 'Politechnika Krakowska im. Tadeusza Kościuszki',
        degree: 'Applied computer science',
        period: '2019 - 2023'
    }],
    languages: [
        { language: 'English', level: 80 },
        { language: 'Polish', level: 100 }
    ],
    experience: [{
        period: '2022 - present',
        company: 'Comarch',
        role: 'Frontend developer',
        technologies: ['Angular', 'Typescript', 'Rxjs', 'Node.js', 'CSS', 'SCSS', 'HTML', 'Javascript', 'Rest API', 'Gulp', 'Webpack']
    }],
    skills: [
        { name: 'Angular', level: 70 },
        { name: 'Typescript', level: 70 },
        { name: 'Rxjs', level: 60 },

        { name: 'Node.js', level: 50 },

        { name: 'CSS', level: 90 },

        { name: 'SCSS', level: 80 },

        { name: 'HTML', level: 100 },

        { name: 'Javascript', level: 70 },

        { name: 'Rest API', level: 60 },

        { name: 'GULP', level: 70 },
        { name: 'Webpack', level: 60 },


    ],
    interests: [
        { name: 'Gym' },
        { name: 'Programming' },
        { name: 'Healthy lifestyle' }
    ],
    agreement: ' I agree to the processing of personal data provided in this document for realising the recruitment process pursuant to the Personal Data Protection Act of 10 May 2018 (Journal of Laws 2018, item 1000) and in agreement with Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons with regard to the processing of personal data and on the free movement of such data, and repealing Directive 95/46/EC (General Data Protection Regulation).'
};
