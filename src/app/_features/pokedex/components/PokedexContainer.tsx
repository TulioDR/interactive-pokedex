import useThemeContext from "@/context/ThemeContext";

type Props = {
   children: React.ReactNode;
};

export default function PokedexContainer({ children }: Props) {
   const { themeColor } = useThemeContext();

   return (
      <div className="h-svh sticky top-0 pb-5 pt-30 hidden xl:block">
         <div
            style={{ backgroundColor: themeColor }}
            className="aspect-1/2 h-full px-5 pb-5 rounded-4xl border-2 border-white outline outline-outline flex flex-col shadow-xl"
         >
            {children}
         </div>
      </div>
   );
}
