import Image from "next/image";
import LoadingSpinner from "../../LoadingSpinner";

type Props = {
  pokemon: any;
  isLoading: boolean;
};

export default function SubScreen({ pokemon, isLoading }: Props) {
  return (
    <div
      className={`border-4 border-black bg-[#51AD60] duration-200 items-center justify-center hidden 2xl:flex flex-1 overflow-hidden ${
        !pokemon ? "brightness-50" : "brightness-100"
      }`}
    >
      <div className="w-full h-full relative flex items-center justify-center">
        {isLoading && <LoadingSpinner />}
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
