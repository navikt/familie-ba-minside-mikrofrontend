import { useContext } from "react";
import { LanguageContext, Language } from "./LanguageProvider";

type Text = {
  [key: string]: { [key in Language]: string };
};

const text: Text = {
  microfrontendTitle: {
    nb: "Barnetrygd",
    nn: "Barnetrygd",
    en: "Child benefit",
  },
  microfrontendDescription: {
    nb: "Se dokumenter og meld endringer",
    nn: "Sjå dokument og meld endringar",
    en: "View documents and report changes",
  },
};

export default function useTranslate(id: string) {
  const language = useContext(LanguageContext);
  return text[id][language];
}
