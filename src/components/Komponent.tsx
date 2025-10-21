import { ChevronRightIcon } from "@navikt/aksel-icons";
import { BodyLong, Heading } from "@navikt/ds-react";
import { getUrl } from "../utils/url";
import { BarnetrygdIkon } from "./BarnetrygdIkon";
import styles from "./Komponent.module.css";

interface Props {
  tittel: string;
  beskrivelse: string;
  url: URL;
}

const Komponent = ({ tittel, beskrivelse, url }: Props) => {
  const href = getUrl(url);
  return (
    <a className={styles.container} href={href}>
      <span className={styles.tekstOgIkonContainer}>
        <BarnetrygdIkon aria-hidden />
        <span>
          <Heading size="small" level="2">
            {tittel}
          </Heading>
          <BodyLong size="medium">{beskrivelse}</BodyLong>
        </span>
      </span>
      <ChevronRightIcon className={styles.chevron} aria-hidden fontSize="24px" />
    </a>
  );
};

export default Komponent;
