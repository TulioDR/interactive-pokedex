type Props = {
   onClick: () => void;
   text: string;
   icon?: string;
};

export default function ModalButton({ onClick, text, icon }: Props) {
   return (
      <button
         onClick={onClick}
         className="h-full px-5 rounded-lg bg-white outline outline-outline hover:bg-slate-800 hover:text-white cursor-pointer gap-1 flex items-center justify-center"
      >
         <span className="material-symbols-rounded">{icon}</span>
         <span className="">{text}</span>
      </button>
   );
}
