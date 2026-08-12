"use client";

import { useEffect } from "react";
import { useParams, useSearchParams } from "next/navigation";
import PokedexContent from "./PokedexContent";

export default function Pokedex() {
  const params = useParams();
  const routeParam = params?.pokemon as string | undefined;

  const searchParams = useSearchParams();
  const queryParam = searchParams.get("scanned");

  const rawIdentifier = queryParam || routeParam;

  useEffect(() => {
    console.log("identifier", rawIdentifier);
  }, [rawIdentifier]);

  return (
    <PokedexContent key={rawIdentifier} pokemonName={rawIdentifier || ""} />
  );
}
