import Image from "next/image";

type Props = { pokemon: any };

export default function DataImage({ pokemon }: Props) {
   const imageSrc = pokemon.sprites.other["official-artwork"].front_default;
   return (
      <div className="relative aspect-square w-4/5">
         <div className="absolute aspect-square top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 bg-white rounded-full" />
         <Image
            src={imageSrc}
            alt={pokemon.name}
            fill
            sizes="100%"
            className="object-contain"
         />
      </div>
   );
}
