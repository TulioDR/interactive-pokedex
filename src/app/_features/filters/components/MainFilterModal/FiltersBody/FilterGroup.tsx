import FilterContainer from "./FilterContainer";
import FilterCard from "./FilterCard";
import { BaseFilterOptionType } from "../../../types/FilterTypes";

// 1. Props interface becomes highly compact
interface FilterSectionGridProps<T extends BaseFilterOptionType> {
   name: string;
   icon: string;
   items: T[];
   getItemIsActive: (item: T) => boolean;
   onItemClick: (value: string) => void;
   autoHeight?: true;
   className?: string;
   innerClassName?: string;
   description: string;
}

// 2. Component clean implementation
export default function FilterGroup<T extends BaseFilterOptionType>({
   name,
   icon,
   className = "",
   innerClassName = "",
   items,
   getItemIsActive,
   onItemClick,
   autoHeight,
   description,
}: FilterSectionGridProps<T>) {
   return (
      <FilterContainer
         icon={icon}
         name={name}
         className={className}
         innerClassName={innerClassName}
         description={description}
      >
         {items.map((item) => (
            <FilterCard
               key={item.value}
               text={item.label}
               icon={item.icon}
               isActive={getItemIsActive(item)}
               onClick={() => onItemClick(item.value)}
               autoHeight={autoHeight}
            />
         ))}
      </FilterContainer>
   );
}
