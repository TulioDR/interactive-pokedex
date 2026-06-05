export default function getPokemonId(id: number) {
   return `#${String(id).padStart(4, "0")}`;
}
