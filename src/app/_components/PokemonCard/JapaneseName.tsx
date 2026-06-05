type Props = {
   name: string;
};

export default function JapaneseName({ name }: Props) {
   return (
      <div className="text-black/40 text-center flex items-center justify-center text-2xl font-black absolute bottom-0 left-0 w-full h-10">
         <span>{name}</span>
      </div>
   );
}
