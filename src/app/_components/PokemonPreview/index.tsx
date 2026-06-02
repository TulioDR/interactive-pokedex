import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

type Props = {
   draggedId: number | null;
};

interface CompletePokemonData {
   base: any; // Holds the complete raw object from /pokemon/[id]
   species: any; // Holds the complete raw object from /pokemon-species/[id]
}

export default function PokemonPreview({ draggedId }: Props) {
   const [selectedId, setSelectedId] = useState<number | null>(null);
   const [pokemon, setPokemon] = useState<CompletePokemonData | null>(null);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(false);

   useEffect(() => {
      if (!selectedId) return;

      async function fetchAllPokemonDetails() {
         try {
            setLoading(true);
            setError(false);

            // Fetch BOTH complete data pools in parallel
            const [baseRes, speciesRes] = await Promise.all([
               fetch(`https://pokeapi.co/api/v2/pokemon/${selectedId}`),
               fetch(`https://pokeapi.co/api/v2/pokemon-species/${selectedId}`),
            ]);

            if (!baseRes.ok || !speciesRes.ok) {
               throw new Error("Failed to capture complete registry profiles.");
            }

            const baseData = await baseRes.json();
            const speciesData = await speciesRes.json();

            // 💾 Save the complete untamed objects directly into state
            setPokemon({
               base: baseData,
               species: speciesData,
            });
         } catch (err) {
            console.error("Scanning decryption malfunction:", err);
            setError(true);
         } finally {
            setLoading(false);
         }
      }

      fetchAllPokemonDetails();
   }, [selectedId]);

   const handleAnimationComplete = (e: any) => {
      if (e.scaleX === 1) {
         setSelectedId(draggedId);
      }
   };

   useEffect(() => {
      console.log(pokemon);
   }, [pokemon]);

   return (
      <div className="h-svh sticky top-0 pb-5 pt-30">
         <div className="aspect-1/2 h-full p-2 rounded-4xl border-2 border-white shadow-md bg-[#D31027] flex flex-col">
            <div className="scan-target-zone w-full h-full bg-linear-to-br from-cyan-400 to-blue-600 rounded-3xl border-black border-8 relative overflow-hidden">
               <AnimatePresence>
                  {draggedId && draggedId !== selectedId && (
                     <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1, transition: { duration: 1 } }}
                        exit={{ opacity: 0, transition: { duration: 0.2 } }}
                        onAnimationComplete={handleAnimationComplete}
                        className="absolute inset-0 pointer-events-none bg-linear-to-r from-transparent to-white origin-left"
                     ></motion.div>
                  )}
               </AnimatePresence>
               {!pokemon && (
                  <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg">
                     <div className="w-1/2 text-center text-base">
                        {error
                           ? "Scan failed. Please try again."
                           : "Drag a Pokémon card here to scan it!"}
                     </div>
                  </div>
               )}
            </div>
         </div>
      </div>
   );
}
