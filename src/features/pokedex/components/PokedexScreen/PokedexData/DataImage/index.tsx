import Image from "next/image";

type Props = { pokemon: any };

export default function DataImage({ pokemon }: Props) {
  const imageSrc = pokemon.sprites.front_default;

  return (
    <div className="relative aspect-square w-4/5">
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
