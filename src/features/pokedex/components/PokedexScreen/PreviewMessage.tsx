type Props = {
   error: boolean;
};

export default function PreviewMessage({ error }: Props) {
   return (
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-white font-bold text-lg">
         <div className="w-1/2 text-center text-base">
            {error
               ? "Scan failed. Please try again."
               : "Drag a Pokémon card here to scan it!"}
         </div>
         {/* <div className="">

         <span className="material-symbols-rounded"></span>
         </div> */}
      </div>
   );
}
