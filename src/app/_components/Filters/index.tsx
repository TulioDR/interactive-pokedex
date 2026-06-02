import FilterButton from "./FilterButton";
import FilterInput from "./FilterInput";

type Props = {};

export default function Filters({}: Props) {
   return (
      <div className="w-full h-14 mt-30 flex gap-2">
         <FilterInput />
         <FilterButton icon="tune" text="Filters" />
         <FilterButton icon="favorite" text="Favorites" favorite />
         <FilterButton icon="refresh" square />
      </div>
   );
}
