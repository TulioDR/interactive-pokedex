type Props = {
   name: string;
};

export default function CardName({ name }: Props) {
   return (
      <div className="text-base uppercase w-full font-black text-white tracking-tighter italic">
         {name}
      </div>
   );
}
