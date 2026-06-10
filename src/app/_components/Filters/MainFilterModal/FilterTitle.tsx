import CircularLens from "@/components/CircularLens";

type Props = {};

export default function FilterTitle({}: Props) {
   return (
      <div className="flex gap-2 items-center h-full">
         <div className="outline-2 outline-outline aspect-square rounded-full flex items-center justify-center">
            <CircularLens status={false} />
         </div>
         <h2 className="text-4xl font-black text-hover">Pokemon Filters</h2>
      </div>
   );
}
