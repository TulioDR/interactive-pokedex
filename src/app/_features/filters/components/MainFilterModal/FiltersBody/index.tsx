import useFiltersContext from "../../../context/FiltersContext";
import { GENERATION_OPTIONS } from "../../../constants/FILTER_OPTIONS/GENERATION_OPTIONS";
import { REGION_OPTIONS } from "../../../constants/FILTER_OPTIONS/REGION_OPTIONS";
import { TYPE_OPTIONS } from "../../../constants/FILTER_OPTIONS/TYPE_OPTIONS";
import { SPECIAL_OPTIONS } from "../../../constants/FILTER_OPTIONS/SPECIAL_OPTIONS";
import { SORT_BY_OPTIONS } from "../../../constants/FILTER_OPTIONS/SORT_BY_OPTIONS";
import { BODY_OPTIONS } from "../../../constants/FILTER_OPTIONS/BODY_OPTIONS";
import FilterGroup from "./FilterGroup";
type Props = {};

export default function FiltersBody({}: Props) {
   const {
      toggleSpecial,
      setSortBy,
      toggleGeneration,
      toggleShape,
      draft,
      toggleType,
   } = useFiltersContext();

   return (
      <div className="flex-1 w-full overflow-y-scroll overscroll-none py-5 pr-2 border-y-2 border-outline text-slate-500">
         <div className="grid grid-cols-2 gap-5 min-h-max">
            <FilterGroup
               name="Type"
               icon="category"
               items={TYPE_OPTIONS}
               getItemIsActive={(item) => draft.types.includes(item.value)}
               onItemClick={toggleType}
               className="col-span-2"
               innerClassName="grid-cols-6"
               description="Max 2 choices"
            />
            <FilterGroup
               name="Body"
               icon="token"
               items={BODY_OPTIONS}
               getItemIsActive={(item) => draft.shapes.includes(item.value)}
               onItemClick={toggleShape}
               className="col-span-2"
               innerClassName="grid-cols-6"
               description="Can choose multiple"
            />
            <FilterGroup
               name="Generation"
               icon="timeline"
               items={GENERATION_OPTIONS}
               getItemIsActive={(item) =>
                  draft.generations.includes(item.value)
               }
               onItemClick={toggleGeneration}
               className="col-span-1"
               innerClassName="grid-cols-3"
               description="Can choose multiple"
            />
            <FilterGroup
               name="Region"
               icon="map"
               items={REGION_OPTIONS}
               getItemIsActive={(item) =>
                  draft.generations.includes(item.value)
               }
               onItemClick={toggleGeneration}
               className="col-span-1"
               innerClassName="grid-cols-3"
               description="Can choose multiple"
            />
            <FilterGroup
               name="Sort by"
               icon="swap_vert"
               items={SORT_BY_OPTIONS}
               getItemIsActive={(item) => draft.sortBy === item.value}
               onItemClick={setSortBy}
               className="col-span-1"
               innerClassName="grid-cols-2"
               description="Can choose only one"
            />
            <FilterGroup
               name="Special pokemons"
               icon="star"
               items={SPECIAL_OPTIONS}
               getItemIsActive={(item) => draft.special.includes(item.value)}
               onItemClick={(value) =>
                  toggleSpecial(value as "legendary" | "mythical")
               }
               className="col-span-1"
               innerClassName="grid-cols-2 "
               autoHeight
               description="Can choose multiple"
            />
         </div>
      </div>
   );
}
