import Image from "next/image";

type Props = {
   src: string;
   alt: string;
};

export default function PreviewImage({ src, alt }: Props) {
   return (
      <div className="flex-1 aspect-square relative">
         <Image
            alt={alt}
            fill
            sizes="100%"
            src={src}
            className="object-contain"
         />
      </div>
   );
}
