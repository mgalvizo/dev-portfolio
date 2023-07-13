export const scrollToSection = (sectionToGo: Element): void => {
    let sectionCoords: DOMRect | undefined;
    let options: ScrollToOptions | undefined;

    if (sectionToGo) {
        sectionCoords = sectionToGo.getBoundingClientRect();
        options = {
            left: sectionCoords.left + window.scrollX,
            top: sectionCoords.top + window.scrollY,
            behavior: 'smooth',
        };
    }

    if (sectionCoords) {
        window.scrollTo(options);
    }

    return;
};
