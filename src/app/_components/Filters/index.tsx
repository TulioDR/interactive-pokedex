import FilterButton from "./FilterButton";
import FilterInput from "./FilterInput";

type Props = {
   openFilter: () => void;
};

export default function Filters({ openFilter }: Props) {
   return (
      <div className="w-full h-14 mt-30 flex gap-2">
         <FilterInput />
         <FilterButton icon="tune" text="Filters" onClick={openFilter} />
         <FilterButton
            icon="favorite"
            text="Favorites"
            onClick={() => {}}
            favorite
         />
         <FilterButton icon="refresh" square onClick={() => {}} />
      </div>
   );
}
