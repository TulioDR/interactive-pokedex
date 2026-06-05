type Props = {
   name: string;
};

export default function TabName({ name }: Props) {
   return (
      <div className="font-bold text-white uppercase mb-2 text-sm text-center ">
         {name}
      </div>
   );
}
