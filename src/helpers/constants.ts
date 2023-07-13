import { v4 as uuidv4 } from 'uuid';
import { ReactComponent as Github } from '../assets/icon-github.svg';
import { ReactComponent as FrontEndMentor } from '../assets/icon-frontend-mentor.svg';
import { ReactComponent as LinkedIn } from '../assets/icon-linkedin.svg';

export const SOCIAL_MEDIA = [
    {
        id: uuidv4(),
        svg: Github,
        href: 'https://github.com/mgalvizo',
    },
    {
        id: uuidv4(),
        svg: FrontEndMentor,
        href: 'https://www.frontendmentor.io/profile/mgalvizo',
    },
    {
        id: uuidv4(),
        svg: LinkedIn,
        href: 'https://www.linkedin.com/in/miguelangelgarciaalvizo/',
    },
];

export const SKILLS = [
    { id: uuidv4(), skill: 'HTML', experience: '6 Years Experience' },
    { id: uuidv4(), skill: 'CSS', experience: '6 Years Experience' },
    { id: uuidv4(), skill: 'SASS', experience: '6 Years Experience' },
    { id: uuidv4(), skill: 'JavaScript', experience: '3 Years Experience' },
    { id: uuidv4(), skill: 'React', experience: '1 Years Experience' },
    { id: uuidv4(), skill: 'Accessibility', experience: '3 Years Experience' },
];

export const PROJECTS = [
    {
        id: uuidv4(),
        title: 'E-Learning Landing Page',
        skills: [
            { id: uuidv4(), projectSkill: 'HTML' },
            { id: uuidv4(), projectSkill: 'CSS' },
        ],
        image: { smallSrc: '', largeSrc: '' },
        href: {
            project: 'https://mgalvizo.github.io/skilled-e-learning/',
            code: 'https://github.com/mgalvizo/skilled-e-learning',
        },
    },
    {
        id: uuidv4(),
        title: 'Equalizer Landing Page',
        skills: [
            { id: uuidv4(), projectSkill: 'HTML' },
            { id: uuidv4(), projectSkill: 'CSS' },
        ],
        image: { smallSrc: '', largeSrc: '' },
        href: {
            project: 'https://mgalvizo.github.io/equalizer-landing-page/',
            code: 'https://github.com/mgalvizo/equalizer-landing-page',
        },
    },
    {
        id: uuidv4(),
        title: 'Body Mass Index Calculator',
        skills: [
            { id: uuidv4(), projectSkill: 'HTML' },
            { id: uuidv4(), projectSkill: 'CSS' },
            { id: uuidv4(), projectSkill: 'JavaScript' },
        ],
        image: { smallSrc: '', largeSrc: '' },
        href: {
            project: 'https://mgalvizo.github.io/bmi-calculator/',
            code: 'https://github.com/mgalvizo/bmi-calculator',
        },
    },
    {
        id: uuidv4(),
        title: 'GitHub User Search App',
        skills: [
            { id: uuidv4(), projectSkill: 'HTML' },
            { id: uuidv4(), projectSkill: 'CSS' },
            { id: uuidv4(), projectSkill: 'JavaScript' },
        ],
        image: { smallSrc: '', largeSrc: '' },
        href: {
            project: 'https://mgalvizo.github.io/github-user-search-app/',
            code: 'https://github.com/mgalvizo/github-user-search-app',
        },
    },
    {
        id: uuidv4(),
        title: 'Clock App',
        skills: [
            { id: uuidv4(), projectSkill: 'HTML' },
            { id: uuidv4(), projectSkill: 'CSS' },
            { id: uuidv4(), projectSkill: 'JavaScript' },
        ],
        image: { smallSrc: '', largeSrc: '' },
        href: {
            project: 'https://mgalvizo.github.io/clock-app/',
            code: 'https://github.com/mgalvizo/clock-app',
        },
    },
    {
        id: uuidv4(),
        title: 'Planets Fact Site',
        skills: [
            { id: uuidv4(), projectSkill: 'HTML' },
            { id: uuidv4(), projectSkill: 'CSS' },
            { id: uuidv4(), projectSkill: 'JavaScript' },
        ],
        image: { smallSrc: '', largeSrc: '' },
        href: {
            project:
                'https://mgalvizo.github.io/planets-fact-site/#/planets/earth/overview',
            code: 'https://github.com/mgalvizo/planets-fact-site',
        },
    },
];

export const EMAIL_REGEX =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
