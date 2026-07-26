import Image from "next/image";

type Props = {
   alt: string;
   src: string;
};

export default function CardImage({ alt, src }: Props) {
   return (
      <div className="w-full relative flex-1 overflow-hidden p-8 -mt-8 z-10">
         <div className="w-full h-full relative">
            <Image
               src={src}
               alt={alt}
               className="object-contain"
               fill
               sizes="100%"
               draggable={false}
            />
         </div>
      </div>
   );
}
