import { CompletePokemonType } from "@/layout/pokedex/types/CompletePokemonType";
import getPokemonId from "@/utils/getPokemonId";

type Props = {
   pokemon: CompletePokemonType;
};

export default function PokemonInfoOne({ pokemon }: Props) {
   return (
      <div className="flex-1 min-w-0 flex flex-col gap-10 bg-white outline-outline outline rounded-lg p-10">
         <div className="flex flex-col">
            <div className="flex flex-col">
               <span className="text-lg text-black/70">
                  {getPokemonId(pokemon.base.id)}
               </span>
               <span className="text-3xl text-black capitalize font-bold">
                  {pokemon?.base.name}
               </span>
            </div>
            <div className="flex gap-10">
               <h2
                  style={{ writingMode: "vertical-lr" }}
                  className="rotate-180 text-base font-black text-black tracking-tighter italic"
               >
                  Region: Kanto
               </h2>
               <div className="flex flex-col gap-5">
                  <div className="text-7xl text-black/40 z-10">JAPANESE</div>
                  <div className="flex flex-col font-black text-black tracking-tighter text-base">
                     <div>Height: 5m</div>
                     <div>Weight: 50kg</div>
                  </div>
               </div>
            </div>
         </div>
         <div className="flex gap-10 text-black">
            <div className="flex flex-col">
               <div className="text-sm">Class</div>
               <div className="text-base font-black italic">sfsef</div>
            </div>
            <div className="flex flex-col">
               <div className="text-sm">Habitat</div>
               <div className="text-base font-black italic">sfsef</div>
            </div>
         </div>

         <div className="text-sm font-black italic text-black">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, voluptate. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quisquam, voluptate.
         </div>
      </div>
   );
}
