const erDev =
  window.location.href.includes("www.ansatt.dev.nav.no") || window.location.href.includes("www.intern.dev.nav.no");

const urlIMiljø = {
  prod: "https://www.nav.no/barnetrygd/min-barnetrygd",
  dev: "https://familie-ba-minside.intern.dev.nav.no/barnetrygd/min-barnetrygd",
};

export const url = erDev ? urlIMiljø.dev : urlIMiljø.prod;
