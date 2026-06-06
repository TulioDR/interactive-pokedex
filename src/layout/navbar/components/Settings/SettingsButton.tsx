type Props = {
   isOpen: boolean;
   onClick: () => void;
};

export default function SettingsButton({ isOpen, onClick }: Props) {
   return (
      <button
         onClick={onClick}
         className={`rounded-full h-full aspect-square flex items-center justify-center cursor-pointer 
               ${isOpen ? "bg-white text-black" : "text-white hover:bg-white hover:text-black"}
            `}
      >
         <span
            style={{ fontVariationSettings: `'FILL' ${isOpen ? 1 : 0}` }}
            className="material-symbols-rounded text-3xl! "
         >
            settings
         </span>
      </button>
   );
}
