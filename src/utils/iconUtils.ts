const base = import.meta.env.BASE_URL;

export const getIconForLink = (
  linkType: string,
  isDarkMode?: boolean
): string | null => {
  switch (linkType) {
    case "website":
      // LICENSE: Apache License 2.0
      // Source: https://fonts.google.com/icons (Material Icons)
      return (
        base + (isDarkMode ? "open_in_new-white.svg" : "open_in_new-black.svg")
      );
    case "doi":
      // LICENSE: Public Domain
      // Source: https://commons.wikimedia.org/wiki/File:DOI_logo.svg#Licensing
      return base + "doi.svg";
    case "git":
      // LICENSE: Creative Commons Attribution 3.0 Unported License
      // Source: https://git-scm.com/downloads/logos
      return base + (isDarkMode ? "Git-Icon-White.svg" : "Git-Icon-Black.svg");
    case "osf":
      // LICENSE: CC0 1.0 Universal
      return base + (isDarkMode ? "osf-white.svg" : "osf.svg");
    default:
      return null;
  }
};
