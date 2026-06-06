type Props = {
   children: React.ReactNode;
};

export default function PokedexContainer({ children }: Props) {
   return (
      <div className="h-svh sticky top-0 pb-5 pt-30 hidden xl:block">
         <div className="aspect-1/2 h-full px-5 pb-5 rounded-4xl border-2 border-white bg-[#D31027] outline outline-outline flex flex-col shadow-xl">
            {children}
         </div>
      </div>
   );
}
