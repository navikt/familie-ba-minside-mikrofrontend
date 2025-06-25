import { BodyLong, Heading } from "@navikt/ds-react";
import styles from "./Komponent.module.css";
import { BarnetrygdIkon } from "./BarnetrygdIkon";
import { ChevronRightIcon } from "@navikt/aksel-icons";
import { url } from "../utils/url";

interface Props {
  tittel: string;
  beskrivelse: string;
}

const Komponent = ({ tittel, beskrivelse }: Props) => {
  return (
    <a className={styles.container} href={url}>
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
