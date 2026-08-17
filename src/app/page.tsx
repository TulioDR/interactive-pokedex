import { Suspense } from "react";
import HomePageContent from "./_components/HomePageContent";

export default function Home() {
  return (
    <Suspense
      fallback={<div className="p-5 text-center">Cargando Pokémon...</div>}
    >
      <HomePageContent />
    </Suspense>
  );
}
