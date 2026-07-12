import useThemeContext from "@/context/ThemeContext";

type Props = {
   children: React.ReactNode;
};

export default function PokedexContainer({ children }: Props) {
   const { themeColor } = useThemeContext();

   return (
      <div className="h-svh pt-30 pb-5 -mt-30 sticky top-0 hidden xl:block ">
         <div
            style={{ backgroundColor: themeColor }}
            className="aspect-1/2 h-full p-5 rounded-4xl border-2 border-white outline outline-outline flex flex-col shadow-xl"
         >
            {children}
         </div>
      </div>
   );
}
