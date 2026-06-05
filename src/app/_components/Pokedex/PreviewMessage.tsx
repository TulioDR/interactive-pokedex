type Props = {
   error: boolean;
};

export default function PreviewMessage({ error }: Props) {
   return (
      <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg">
         <div className="w-1/2 text-center text-base">
            {error
               ? "Scan failed. Please try again."
               : "Drag a Pokémon card here to scan it!"}
         </div>
      </div>
   );
}
