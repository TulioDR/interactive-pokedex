import { FilterState } from "@/app/_utils/filterPokemon";
import FilterCard from "./FilterCard";
import FilterContainer from "./FilterContainer";
import POKEMON_GENERATIONS from "@/constants/POKEMON_GENERATIONS";
import POKEMON_SHAPES from "@/constants/POKEMON_SHAPES";
import POKEMON_TYPES from "@/constants/POKEMON_TYPES";
import SORT_OPTIONS from "@/constants/SORT_OPTIONS";
import useFiltersContext from "../../../context/FiltersContext";
type Props = {};

interface InterfaceOptions {
   value: "legendary" | "mythical";
   label: string;
   icon: string;
}

const SPECIAL_OPTIONS: InterfaceOptions[] = [
   { value: "legendary", label: "Legendary", icon: "workspace_premium" },
   { value: "mythical", label: "Mythical", icon: "magic_button" },
];

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
               {POKEMON_TYPES.map((type) => (
                  <FilterCard
                     key={type.name}
                     icon={type.icon}
                     text={type.name}
                     onClick={() => toggleType(type.name)}
                     isActive={draft.types.includes(type.name)}
                     fixedHeight
                  />
               ))}
            </div>
         </FilterContainer>

         <FilterContainer icon="token" name="Body">
            <div className="grid grid-cols-6 gap-2">
               {POKEMON_SHAPES.map((shape) => (
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

         <div className="grid grid-cols-2 gap-5 w-full grid-rows-5 shrink-0">
            <FilterContainer icon="timeline" name="Generation" rowSpan={5}>
               <div className="grid grid-cols-3 gap-2 grid-rows-3">
                  {POKEMON_GENERATIONS.map((gen) => (
                     <FilterCard
                        onClick={() => toggleGeneration(gen.id)}
                        isActive={draft.generations.includes(gen.id)}
                        key={gen.id}
                        text={gen.label}
                     />
                  ))}
               </div>
            </FilterContainer>

            <FilterContainer icon="swap_vert" name="Sort by" rowSpan={3}>
               <div className="grid grid-cols-2 grid-rows-2 gap-2">
                  {SORT_OPTIONS.map((option, index) => (
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

            <FilterContainer icon="star" name="Special pokemons" rowSpan={2}>
               <div className="grid grid-cols-2 grid-rows-1 gap-2 ">
                  {SPECIAL_OPTIONS.map((option, index) => (
                     <FilterCard
                        onClick={() => toggleSpecial(option.value)}
                        key={index}
                        text={option.label}
                        fixedHeight
                        isActive={draft.special.includes(option.value)}
                     />
                  ))}
               </div>
            </FilterContainer>
         </div>
      </div>
   );
}
