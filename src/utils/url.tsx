const urlIMiljø = {
  prod: "https://www.nav.no/barnetrygd/min-barnetrygd",
  dev: "https://familie-ba-minside.intern.dev.nav.no/barnetrygd/min-barnetrygd",
};
export const getUrl = (url: URL) => {
  const erDev = url.href.includes("www.ansatt.dev.nav.no") || url.href.includes("www.intern.dev.nav.no");
  return erDev ? urlIMiljø.dev : urlIMiljø.prod;
};
