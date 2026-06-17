type Props = {
   onClick: () => void;
   children: React.ReactNode;
   onPointerEnter?: () => void;
   onPointerLeave?: () => void;
};

export default function MenuItem({
   onClick,
   children,
   onPointerEnter,
   onPointerLeave,
}: Props) {
   return (
      <button
         onClick={onClick}
         onPointerEnter={onPointerEnter}
         onPointerLeave={onPointerLeave}
         className="w-full h-14 cursor-pointer bg-white hover:bg-hover hover:text-white text-hover px-2 rounded-lg overflow-hidden"
      >
         {children}
      </button>
   );
}
