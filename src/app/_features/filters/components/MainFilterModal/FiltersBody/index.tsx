import FilterCard from "./FilterCard";
import FilterContainer from "./FilterContainer";
import useFiltersContext from "../../../context/FiltersContext";
import { GENERATION_OPTIONS } from "../../../constants/FILTER_OPTIONS/GENERATION_OPTIONS";
import { REGION_OPTIONS } from "../../../constants/FILTER_OPTIONS/REGION_OPTIONS";
import { TYPE_OPTIONS } from "../../../constants/FILTER_OPTIONS/TYPE_OPTIONS";
import { SPECIAL_OPTIONS } from "../../../constants/FILTER_OPTIONS/SPECIAL_OPTIONS";
import { SORT_BY_OPTIONS } from "../../../constants/FILTER_OPTIONS/SORT_BY_OPTIONS";
import { BODY_OPTIONS } from "../../../constants/FILTER_OPTIONS/BODY_OPTIONS";
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
      <div className="flex flex-col gap-5 flex-1 w-full overflow-y-scroll overscroll-none py-5 pr-2 border-y-2 border-outline text-slate-500">
         <FilterContainer icon="category" name="Type">
            <div className="grid grid-cols-6 gap-2">
               {TYPE_OPTIONS.map((type) => (
                  <FilterCard
                     key={type.value}
                     icon={type.icon}
                     text={type.label}
                     onClick={() => toggleType(type.value)}
                     isActive={draft.types.includes(type.value)}
                     fixedHeight
                  />
               ))}
            </div>
         </FilterContainer>

         <FilterContainer icon="token" name="Body">
            <div className="grid grid-cols-6 gap-2">
               {BODY_OPTIONS.map((shape) => (
                  <FilterCard
                     key={shape.value}
                     text={shape.value}
                     isActive={draft.shapes.includes(shape.value)}
                     onClick={() => toggleShape(shape.value)}
                     fixedHeight
                  />
               ))}
            </div>
         </FilterContainer>

         <div className="grid grid-cols-2 gap-5 w-full shrink-0">
            <FilterContainer icon="timeline" name="Generation">
               <div className="grid grid-cols-3 gap-2 grid-rows-3">
                  {GENERATION_OPTIONS.map((gen) => (
                     <FilterCard
                        onClick={() => toggleGeneration(gen.value)}
                        isActive={draft.generations.includes(gen.value)}
                        key={gen.value}
                        text={gen.label}
                        fixedHeight
                     />
                  ))}
               </div>
            </FilterContainer>
            <FilterContainer icon="map" name="Region">
               <div className="grid grid-cols-3 gap-2 grid-rows-3">
                  {REGION_OPTIONS.map((gen) => (
                     <FilterCard
                        onClick={() => toggleGeneration(gen.value)}
                        isActive={draft.generations.includes(gen.value)}
                        key={gen.value}
                        text={gen.label}
                        fixedHeight
                     />
                  ))}
               </div>
            </FilterContainer>
         </div>

         <div className="grid grid-cols-2 gap-5 w-full shrink-0">
            <FilterContainer icon="swap_vert" name="Sort by">
               <div className="grid grid-cols-2 grid-rows-2 gap-2">
                  {SORT_BY_OPTIONS.map((option, index) => (
                     <FilterCard
                        onClick={() => setSortBy(option.value)}
                        key={index}
                        text={option.label}
                        fixedHeight
                        isActive={draft.sortBy === option.value}
                     />
                  ))}
               </div>
            </FilterContainer>

            <FilterContainer icon="star" name="Special pokemons">
               <div className="grid grid-cols-2 grid-rows-1 gap-2 ">
                  {SPECIAL_OPTIONS.map((option, index) => (
                     <FilterCard
                        onClick={() => toggleSpecial(option.value)}
                        key={index}
                        text={option.label}
                        isActive={draft.special.includes(option.value)}
                     />
                  ))}
               </div>
            </FilterContainer>
         </div>
      </div>
   );
}
