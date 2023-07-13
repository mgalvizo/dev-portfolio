import { v4 as uuidv4 } from 'uuid';
import { ReactComponent as Github } from '../assets/icon-github.svg';
import { ReactComponent as FrontEndMentor } from '../assets/icon-frontend-mentor.svg';
import { ReactComponent as LinkedIn } from '../assets/icon-linkedin.svg';
import { ReactComponent as Twitter } from '../assets/icon-twitter.svg';
import smallProject1 from '../assets/thumbnail-project-1-small.webp';
import largeProject1 from '../assets/thumbnail-project-1-large.webp';
import smallProject2 from '../assets/thumbnail-project-2-small.webp';
import largeProject2 from '../assets/thumbnail-project-2-large.webp';
import smallProject3 from '../assets/thumbnail-project-3-small.webp';
import largeProject3 from '../assets/thumbnail-project-3-large.webp';
import smallProject4 from '../assets/thumbnail-project-4-small.webp';
import largeProject4 from '../assets/thumbnail-project-4-large.webp';
import smallProject5 from '../assets/thumbnail-project-5-small.webp';
import largeProject5 from '../assets/thumbnail-project-5-large.webp';
import smallProject6 from '../assets/thumbnail-project-6-small.webp';
import largeProject6 from '../assets/thumbnail-project-6-large.webp';

export const SOCIAL_MEDIA = [
    {
        id: uuidv4(),
        svg: Github,
        // href: '#',
    },
    {
        id: uuidv4(),
        svg: FrontEndMentor,
        // href: '#',
    },
    {
        id: uuidv4(),
        svg: LinkedIn,
        // href: '#',
    },
    {
        id: uuidv4(),
        svg: Twitter,
        // href: '#',
    },
];

export const SKILLS = [
    { id: uuidv4(), skill: 'HTML', experience: '4 Years Experience' },
    { id: uuidv4(), skill: 'CSS', experience: '4 Years Experience' },
    { id: uuidv4(), skill: 'JavaScript', experience: '4 Years Experience' },
    { id: uuidv4(), skill: 'Accessibility', experience: '4 Years Experience' },
    { id: uuidv4(), skill: 'React', experience: '3 Years Experience' },
    { id: uuidv4(), skill: 'Sass', experience: '3 Years Experience' },
];

export const PROJECTS = [
    {
        id: uuidv4(),
        title: 'Design Portfolio',
        skills: [
            { id: uuidv4(), projectSkill: 'HTML' },
            { id: uuidv4(), projectSkill: 'CSS' },
        ],
        image: { smallSrc: smallProject1, largeSrc: largeProject1 },
    },
    {
        id: uuidv4(),
        title: 'E-Learning Landing Page',
        skills: [
            { id: uuidv4(), projectSkill: 'HTML' },
            { id: uuidv4(), projectSkill: 'CSS' },
        ],
        image: { smallSrc: smallProject2, largeSrc: largeProject2 },
    },
    {
        id: uuidv4(),
        title: 'Todo Web App',
        skills: [
            { id: uuidv4(), projectSkill: 'HTML' },
            { id: uuidv4(), projectSkill: 'CSS' },
            { id: uuidv4(), projectSkill: 'JavaScript' },
        ],
        image: { smallSrc: smallProject3, largeSrc: largeProject3 },
    },
    {
        id: uuidv4(),
        title: 'Entertainment Web App',
        skills: [
            { id: uuidv4(), projectSkill: 'HTML' },
            { id: uuidv4(), projectSkill: 'CSS' },
            { id: uuidv4(), projectSkill: 'JavaScript' },
        ],
        image: { smallSrc: smallProject4, largeSrc: largeProject4 },
    },
    {
        id: uuidv4(),
        title: 'Memory Game',
        skills: [
            { id: uuidv4(), projectSkill: 'HTML' },
            { id: uuidv4(), projectSkill: 'CSS' },
            { id: uuidv4(), projectSkill: 'JavaScript' },
        ],
        image: { smallSrc: smallProject5, largeSrc: largeProject5 },
    },
    {
        id: uuidv4(),
        title: 'Art Gallery Showcase',
        skills: [
            { id: uuidv4(), projectSkill: 'HTML' },
            { id: uuidv4(), projectSkill: 'CSS' },
            { id: uuidv4(), projectSkill: 'JavaScript' },
        ],
        image: { smallSrc: smallProject6, largeSrc: largeProject6 },
    },
];

export const EMAIL_REGEX =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
