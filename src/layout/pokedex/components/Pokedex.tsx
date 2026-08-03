"use client";

import { PokedexProvider } from "../context/PokedexContext";
import PokedexContent from "./PokedexContent";

type Props = {};

export default function Pokedex({}: Props) {
  return (
    <PokedexProvider>
      <PokedexContent />
    </PokedexProvider>
  );
}
