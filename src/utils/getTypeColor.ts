import POKEMON_TYPES from "@/constants/POKEMON_TYPES";

const getTypeColor = (name: string) => {
   return POKEMON_TYPES.find((type) => type.name === name)?.hex;
};

export default getTypeColor;
