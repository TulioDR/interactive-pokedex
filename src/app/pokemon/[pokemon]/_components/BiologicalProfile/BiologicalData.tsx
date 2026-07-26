type Props = {
   name: string;
   data: string;
};

export default function BiologicalData({ name, data }: Props) {
   return (
      <div className="w-full flex gap-2 justify-between text-sm">
         <div className="text-light-text font-medium tracking-wider">
            {name}:
         </div>
         <div className="text-slate-800 font-bold">{data}</div>
      </div>
   );
}
