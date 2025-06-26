import { describe, expect, it } from "vitest";
import { render, screen } from "../utils/test-utils";
import Komponent from "./Komponent";

describe("Visningstest", () => {
  it("Den viser tekst", () => {
    render(<Komponent tittel="tittel" beskrivelse="beskrivelse" />);
    expect(screen.getByText(/tittel/)).toBeDefined();
    expect(screen.getByText(/beskrivelse/)).toBeDefined();
  });
});
