type Props = {
   name: string;
};

export default function CardName({ name }: Props) {
   return (
      <div className=" font-black text-lg text-white uppercase w-full tracking-wider">
         {name}
      </div>
   );
}
