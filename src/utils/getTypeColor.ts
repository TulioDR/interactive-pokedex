import { TYPE_OPTIONS } from "@/app/_features/filters/constants/FILTER_OPTIONS/TYPE_OPTIONS";

const getTypeColor = (name: string) => {
   return TYPE_OPTIONS.find((type) => type.value === name)?.hex;
};

export default getTypeColor;
