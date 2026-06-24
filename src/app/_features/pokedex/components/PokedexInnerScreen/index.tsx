type Props = {
   children: React.ReactNode;
};

export default function PokedexInnerScreen({ children }: Props) {
   return (
      <div className="scan-target-zone w-full flex-1 rounded-2xl bg-gray-900 border-10 border-black relative overflow-hidden">
         {children}
      </div>
   );
}
