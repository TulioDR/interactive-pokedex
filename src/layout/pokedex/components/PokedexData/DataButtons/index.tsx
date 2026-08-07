import { usePathname, useRouter, useSearchParams } from "next/navigation";
import NavigationButton from "./NavigationButton";
import PreviewButton from "./PreviewButton";
import usePokeDbContext from "@/layout/poke-db/context/PokeDbContext";
import { PadType } from "@/layout/pokedex/types/PadType";

type Props = {
  activePad: PadType;
  pokemon: any;
};

export default function DataButtons({ pokemon, activePad }: Props) {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();

  const { allPokemon } = usePokeDbContext();
  const currentIndex = allPokemon.findIndex((p: any) => p.id === pokemon.id);

  const prevPokemon = currentIndex > 0 ? allPokemon[currentIndex - 1] : null;
  const nextPokemon =
    currentIndex < allPokemon.length - 1 ? allPokemon[currentIndex + 1] : null;

  const createUpdatedUrl = (paramName: string, paramValue: string) => {
    // 2. Clonamos los parámetros actuales de la URL
    const params = new URLSearchParams(searchParams.toString());
    // 3. Añadimos o actualizamos solo el parámetro deseado
    params.set(paramName, paramValue);
    // 4. Retornamos la ruta completa combinada (ej: /pokedex?page=2&scanned=bulbasaur)
    return `${pathName}?${params.toString()}`;
  };

  const goToPokemon = () => {
    router.push(`/pokemon/${pokemon.name}`);
  };

  const getNextPokemon = () => {
    if (!nextPokemon) return;
    const nextUrl = createUpdatedUrl("scanned", nextPokemon.name);
    router.replace(nextUrl, { scroll: false });
  };

  const getPrevPokemon = () => {
    if (!prevPokemon) return;
    const prevUrl = createUpdatedUrl("scanned", prevPokemon.name);
    router.replace(prevUrl, { scroll: false });
  };

  return (
    <>
      <div className="w-full flex gap-2 p-2 border-t border-white/20">
        <PreviewButton
          icon="favorite"
          text="Add to favorite"
          favorite
          isActive={activePad === "favorite"}
          onClick={() => {}}
        />
        <PreviewButton
          icon="arrow_outward"
          text="Full page"
          isActive={activePad === "open"}
          onClick={goToPokemon}
        />
      </div>
      <div className="h-9 2xl:h-11 bg-white flex justify-between border-t border-white">
        <NavigationButton
          reverse
          pokemon={prevPokemon}
          isActive={activePad === "prev"}
          onClick={getPrevPokemon}
        />
        <NavigationButton
          pokemon={nextPokemon}
          isActive={activePad === "next"}
          onClick={getNextPokemon}
        />
      </div>
    </>
  );
}
