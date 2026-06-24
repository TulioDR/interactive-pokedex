import { CompletePokemonType } from "@/app/_features/pokedex/types/CompletePokemonType";

type Props = {
   pokemon: CompletePokemonType | null;
};

export default function PokemonPageContent({ pokemon }: Props) {
   return (
      <div className="fixed top-0 left-0 h-svh w-full flex items-center justify-center bg-black/50">
         <span className="text-4xl font-black text-white">
            {pokemon?.base.name}
         </span>
      </div>
   );
}
