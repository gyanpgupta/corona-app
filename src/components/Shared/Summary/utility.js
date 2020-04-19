export const getMappedColors = (key) =>
  ({
    NewConfirmed: "#8a2be2",
    TotalConfirmed: "#8a2be2",
    NewDeaths: "#cf1322",
    TotalDeaths: "#cf1322",
    NewRecovered: "#3f8600",
    TotalRecovered: "#3f8600",
  }[key]);
