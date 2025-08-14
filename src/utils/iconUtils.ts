const base = "/HMI-Questionnaires/";

export const getIconForLink = (linkType: string): string | null => {
    switch (linkType) {
        case "website":
            // LICENSE: https://www.flaticon.com/free-icon/globe_900782?term=globe&page=1&position=2&origin=search&related_id=900782
            return base + "globe.png";
        case "doi":
            // LICENSE: Public Domain
            // Source: https://commons.wikimedia.org/wiki/File:DOI_logo.svg#Licensing
            return base + "doi.svg";
        case "git":
            // LICENSE: Creative Commons Attribution 3.0 Unported License
            // Source: https://git-scm.com/downloads/logos
            return base + "Git-Icon-Black.svg";
        case "osf":
            // LICENSE: CC0 1.0 Universal
            return base + "osf.svg";
        default:
            return null;
    }
};
