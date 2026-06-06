type Props = {
   onClick: () => void;
   children: React.ReactNode;
};

export default function MenuItem({ onClick, children }: Props) {
   return (
      <button
         onClick={onClick}
         className="w-full h-14 cursor-pointer bg-white hover:bg-hover hover:text-white text-hover px-2 text-sm"
      >
         {children}
      </button>
   );
}
