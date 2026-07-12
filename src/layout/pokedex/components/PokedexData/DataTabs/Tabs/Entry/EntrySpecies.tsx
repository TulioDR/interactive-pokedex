type Props = {
   species: "legendary" | "mythical" | "baby";
};

export default function EntrySpecies({ species }: Props) {
   const isLegendary = species === "legendary";
   const isMythical = species === "mythical";
   const isBaby = species === "baby";

   return (
      <div
         className={`w-full border text-center py-1 rounded-md font-bold uppercase tracking-wider text-xs animate-pulse
         ${isLegendary ? "bg-amber-500/20 border-amber-500 text-amber-300" : ""}
         ${isMythical ? "bg-purple-500/20 border-purple-500 text-purple-300" : ""}
         ${isBaby ? "bg-emerald-500/20 border-emerald-500 text-emerald-300" : ""}
       `}
      >
         {isLegendary && <span>⚠️ Legendary Entity Detected</span>}
         {isMythical && <span>✨ Mythical Entity Detected</span>}
         {isBaby && <span>🌱 Baby Form Confirmed</span>}
      </div>
   );
}
