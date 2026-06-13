import { BaseFilterOptionType } from "../../types/FilterTypes";

export const SORT_BY_OPTIONS: BaseFilterOptionType[] = [
   { value: "id-asc", label: "ID: Lowest First", icon: "arrow_upward" },
   { value: "id-desc", label: "ID: Highest First", icon: "arrow_downward" },
   { value: "name-asc", label: "Name: A to Z", icon: "sort_by_alpha" },
   { value: "name-desc", label: "Name: Z to A", icon: "sort_by_alpha" },
];
