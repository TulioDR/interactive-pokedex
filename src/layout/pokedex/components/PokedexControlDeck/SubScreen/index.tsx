import Image from "next/image";
import usePokedexContext from "../../../context/PokedexContext";
import LoadingSpinner from "../../LoadingSpinner";

type Props = {};

export default function SubScreen({}: Props) {
  const { pokemon, loading, isPowerOn } = usePokedexContext();

  return (
    <div
      className={`border-4 border-black bg-[#51AD60] duration-200 items-center justify-center hidden 2xl:flex flex-1 overflow-hidden ${
        !!pokemon ? "brightness-100" : "brightness-50"
      }`}
    >
      {/* {isPowerOn} */}
      <div className="w-full h-full relative flex items-center justify-center">
        {loading && <LoadingSpinner />}
        {pokemon && (
          <Image
            key={pokemon.id}
            src={pokemon.sprites.front_default}
            alt="sprite"
            fill
            sizes="100%"
            className="object-contain"
          />
        )}
      </div>
    </div>
  );
}
