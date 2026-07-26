type Props = {};

export default function LoadingSpinner({}: Props) {
   return (
      <div className="absolute inset-0 flex items-center justify-center text-white z-20 ">
         <div className="animate-spin pointer-events-none w-full aspect-square flex items-center justify-center">
            <span className="material-symbols-rounded text-6xl!">
               progress_activity
            </span>
         </div>
      </div>
   );
}
