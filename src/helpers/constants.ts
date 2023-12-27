import { v4 as uuidv4 } from 'uuid';
import { ReactComponent as Github } from '../assets/icon-github.svg';
import { ReactComponent as FrontEndMentor } from '../assets/icon-frontend-mentor.svg';
import { ReactComponent as LinkedIn } from '../assets/icon-linkedin.svg';
import ELearningLandingPageSmall from '../assets/e-learning-landing-page-small.webp';
import ELearningLandingPageLarge from '../assets/e-learning-landing-page-large.webp';
import EqualizerLandingPageSmall from '../assets/equalizer-lading-page-small.webp';
import EqualizerLandingPageLarge from '../assets/equalizer-lading-page-large.webp';
import BmiCalculatorSmall from '../assets/bmi-calculator-small.webp';
import BmiCalculatorLarge from '../assets/bmi-calculator-large.webp';
import GitHubUserSearchAppSmall from '../assets/github-user-search-app-small.webp';
import GitHubUserSearchAppLarge from '../assets/github-user-search-app-large.webp';
import ClockAppSmall from '../assets/clock-app-small.webp';
import ClockAppLarge from '../assets/clock-app-large.webp';
import PlanetsFactSiteSmall from '../assets/planets-fact-site-small.webp';
import PlanetsFactSiteLarge from '../assets/planets-fact-site-large.webp';
import MultiStepFormSmall from '../assets/multi-step-form-small.webp';
import MultiStepFormLarge from '../assets/multi-step-form-large.webp';

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
    { id: uuidv4(), skill: 'TypeScript', experience: '1 Year Experience' },
    { id: uuidv4(), skill: 'React', experience: '1 Year Experience' },
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
        image: {
            smallSrc: ELearningLandingPageSmall,
            largeSrc: ELearningLandingPageLarge,
        },
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
        image: {
            smallSrc: EqualizerLandingPageSmall,
            largeSrc: EqualizerLandingPageLarge,
        },
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
        image: { smallSrc: BmiCalculatorSmall, largeSrc: BmiCalculatorLarge },
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
        image: {
            smallSrc: GitHubUserSearchAppSmall,
            largeSrc: GitHubUserSearchAppLarge,
        },
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
        image: { smallSrc: ClockAppSmall, largeSrc: ClockAppLarge },
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
        image: {
            smallSrc: PlanetsFactSiteSmall,
            largeSrc: PlanetsFactSiteLarge,
        },
        href: {
            project:
                'https://mgalvizo.github.io/planets-fact-site/#/planets/earth/overview',
            code: 'https://github.com/mgalvizo/planets-fact-site',
        },
    },
    {
        id: uuidv4(),
        title: 'Multi Step Form',
        skills: [
            { id: uuidv4(), projectSkill: 'HTML' },
            { id: uuidv4(), projectSkill: 'CSS' },
            { id: uuidv4(), projectSkill: 'JavaScript' },
        ],
        image: {
            smallSrc: MultiStepFormSmall,
            largeSrc: MultiStepFormLarge,
        },
        href: {
            project:
                'https://mgalvizo.github.io/multi-step-form/#/personal-info',
            code: 'https://github.com/mgalvizo/multi-step-form',
        },
    },
];

export const EMAIL_REGEX =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
