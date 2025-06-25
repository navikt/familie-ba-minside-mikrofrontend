import useTranslate from "./language/useTranslate.jsx";
import Komponent from "./components/Komponent";
import "@navikt/ds-css";

function App() {
  return (
    <section>
      <Komponent tittel={useTranslate("microfrontendTitle")} beskrivelse={useTranslate("microfrontendDescription")} />
    </section>
  );
}

export default App;
