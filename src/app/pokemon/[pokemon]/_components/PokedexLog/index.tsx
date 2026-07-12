import { CompletePokemonType } from "@/layout/pokedex/types/CompletePokemonType";
import SectionContainer from "../SectionContainer";
import SectionTitle from "../SectionContainer/SectionTitle";

type Props = {
   pokemon: CompletePokemonType;
};

export default function PokedexLog({ pokemon }: Props) {
   return (
      <SectionContainer className="">
         <SectionTitle icon="book_ribbon" title="Pokedex Log" />
         <div className="text-sm text-light-text font-medium tracking-wider">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo quod
            harum laboriosam nostrum cumque sapiente aspernatur reprehenderit
            maiores. Vel, natus molestiae aut incidunt iusto eligendi dolorum
            porro nobis ipsa earum quis neque iure error velit nisi? Blanditiis.
         </div>
      </SectionContainer>
   );
}
