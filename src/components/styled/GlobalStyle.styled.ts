import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
:root {
    --max-content-width: 1110px;
    --max-design-width: 1440px;
    --base-fsz: 62.5%;
    --body-ffam: 'Space Grotesk', sans-serif;
    --body-fsz-s: 1.6rem;
    --body-fsz-l: 1.8rem;
    --body-lht: 1.5;
    /* COLORS */
    --black: #151515;
    --dark-gray: #242424;
    --gray: #D9D9D9;
    --green: #4EE1A0;
    --white: #FFFFFF;
    --red: #FF6F5B;
    /* HEADINGS */
    --heading-s-fsz: 2.4rem;
    --heading-s-lht: 1.3;
    --heading-m-fsz: 3.2rem;
    --heading-m-lht: 1.25;
    --heading-m-ls: -1px;
    --heading-l-fsz: 4.8rem;
    --heading-l-lht: 1.15;
    --heading-l-ls: -1.5px;
    --heading-xl-fsz: 8.8rem;
    --heading-xl-lht: 1;
    --heading-xl-ls: -2.5px;
    /* SPACING */
    --web-padding-xs: 4px;
    --web-padding-s: 8px;
    --web-padding-m: 16px;
    --web-padding-l: 24px;
    --web-padding-xl: 32px;
    --web-padding-xl2: 40px;
    --web-margin-xs: 4px;
    --web-margin-s: 8px;
    --web-margin-m: 16px;
    --web-margin-l: 24px;
    --web-margin-xl: 32px;
    --web-margin-xl2: 40px;
    /* MISC */
    --rings-width: 530px;
    --rings-height: 129px;
    --circle-width: 129px;
    --circle-height: 129px;
    --input-height: 43px;
    --textarea--height: 107px;
    --button-carousel-arrow-sz: 43px;
    --button-carousel-arrow-bg-color: rgba(255,255,255, 0.5);
    --button-carousel-arrow-bg-color-hover: rgba(255,255,255, 0.75);
    /* MEDIA */
    --media-min: 20em; /* 320px */
    --media-tablet: 30em; /* 480px */
    --media-tablet-small-desktop: 38.75em; /* 620px */
    --media-small-desktop: 48em; /* 768px */
    --media-s-l-desktop: 56.25em; /* 900px */
    --media-large-desktop: 64em; /* 1024px */
    --large-desktop-max: 77em; /* 1232px */
    --media-max: 90em; /* 1440px */
}

* {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    border: 0;
}

html {
    width: 100%;
    box-sizing: border-box;
    font-size: var(--base-fsz);
    font-family: sans-serif;
    overflow-y: scroll;
    scrollbar-gutter: stable;
}

body {
    background-color: var(--black);
    color: var(--gray);
    font-size: var(--body-fsz-s);
    font-family: var(--body-ffam);
    line-height: var(--body-lht);
    overflow-x: hidden;
}

main {
    width: 100%;
}

img, 
svg {
    width: auto;
    max-width: 100%;
    vertical-align: middle;
}

a:link,
a:visited {
    font-weight: bold;
    color: var(--white);
    text-decoration: none;

    &:hover {
        text-decoration: none;
    }
}

button {
    color: var(--white);
    font-family: inherit;
    font-size: inherit;
    font-weight: bold;
    outline: none;
    line-height: inherit;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    color: var(--white);
}

#root {
    overflow-x: hidden;
}

.visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    overflow: hidden;
    border: 0;
    clip: rect(1px 1px 1px 1px);
    /* IE6, IE7 */
    clip: rect(1px, 1px, 1px, 1px);
}

.carousel-container {
    padding-top: var(--web-padding-s);
    padding-bottom: var(--web-padding-l);
}

.react-multiple-carousel__arrow {
    background-color: var(--button-carousel-arrow-bg-color);

    &:hover {
        background-color: var(--button-carousel-arrow-bg-color-hover);
    }
}

.react-multiple-carousel__arrow--left {
    left: 0;
}

.react-multiple-carousel__arrow--right {
    right: 0;
}

.react-multi-carousel-dot-list {
    display: none;
}

// 480px
@media only screen and (min-width: 30em) {}

// 620px
@media only screen and (min-width: 38.75em) {}

// 768px
@media only screen and (min-width: 48em) {
    body {
        font-size: var(--body-fsz-l);
    }

    .react-multi-carousel-dot-list {
        display: flex;
    }
}

// 900px
@media only screen and (min-width: 56.25em) {}

// 1024px
@media only screen and (min-width: 64em) {}

// 1232px
@media only screen and (min-width: 77em) {}

// 1336px
@media only screen and (min-width: 83.5em) {}

// 1440px
@media only screen and (min-width: 90em) {}
`;

export default GlobalStyle;
