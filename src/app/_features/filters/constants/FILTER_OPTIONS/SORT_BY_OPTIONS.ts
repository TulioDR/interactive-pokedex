import { BaseFilterOptionType } from "../../types/FilterTypes";

export const SORT_BY_OPTIONS: BaseFilterOptionType[] = [
   { value: "id-asc", label: "ID: Lowest First" },
   { value: "id-desc", label: "ID: Highest First" },
   { value: "name-asc", label: "Name: A to Z" },
   { value: "name-desc", label: "Name: Z to A" },
];
