import FilterCard from "./FilterCard";
import FilterContainer from "./FilterContainer";
import POKEMON_GENERATIONS from "@/constants/POKEMON_GENERATIONS";
import POKEMON_SHAPES from "@/constants/POKEMON_SHAPES";
import POKEMON_TYPES from "@/constants/POKEMON_TYPES";
type Props = {};

export default function Filters({}: Props) {
   return (
      <div className="flex flex-col gap-5 flex-1 w-full overflow-y-auto py-5 border-y-2 border-outline">
         <FilterContainer icon="filter_alt" name="Type">
            <div className="grid grid-cols-6 gap-2">
               {POKEMON_TYPES.map((type) => (
                  <FilterCard
                     key={type.name}
                     icon={type.icon}
                     text={type.name}
                     fixedHeight
                  />
               ))}
            </div>
         </FilterContainer>
         <FilterContainer icon="filter_alt" name="Body">
            <div className="grid grid-cols-6 gap-2">
               {POKEMON_SHAPES.map((shape) => (
                  <FilterCard
                     key={shape.value}
                     text={shape.value}
                     fixedHeight
                  />
               ))}
            </div>
         </FilterContainer>

         <div className="grid grid-cols-2 gap-5 w-full grid-rows-5 shrink-0">
            <FilterContainer
               icon="filter_alt"
               name="Generation"
               className="row-span-5"
            >
               <div className="grid grid-cols-3 gap-2 grid-rows-3 h-full w-full">
                  {POKEMON_GENERATIONS.map((gen) => (
                     <FilterCard key={gen.id} text={gen.label} />
                  ))}
               </div>
            </FilterContainer>

            <FilterContainer
               icon="filter_alt"
               name="Sort by"
               className="row-span-3"
            >
               <div className="grid grid-cols-2 grid-rows-2 gap-2 h-full w-full">
                  {Array.from({ length: 4 }).map((_, index) => (
                     <FilterCard key={index} text={"FEfef"} fixedHeight />
                  ))}
               </div>
            </FilterContainer>
            <FilterContainer
               icon="filter_alt"
               name="Special pokemons"
               className="row-span-2"
            >
               <div className="grid grid-cols-2 grid-rows-1 gap-2 h-full w-full">
                  {Array.from({ length: 2 }).map((_, index) => (
                     <FilterCard key={index} text={"FEfef"} fixedHeight />
                  ))}
               </div>
            </FilterContainer>
         </div>
      </div>
   );
}
