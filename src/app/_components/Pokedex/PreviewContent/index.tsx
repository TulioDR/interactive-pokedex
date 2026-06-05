import ColorContainer from "./ColorContainer";
import PreviewName from "./PreviewName";
import PreviewNumber from "./PreviewNumber";
import PreviewTab from "./PreviewTab";
import { useState } from "react";
import PreviewTabContainer from "./PreviewTabContainer";
import PreviewButton from "./PreviewButton";
import TabName from "./Tabs/TabName";
import Entry from "./Tabs/Entry";
import Stats from "./Tabs/Stats";
import Evolution from "./Tabs/Evolution";
import Profile from "./Tabs/Profile";
import NavigationButton from "./NavigationButton";
import ActivePadType from "@/app/_types/ActivePadType";

interface CompletePokemonData {
   base: any;
   species: any;
}
type Props = {
   pokemon: CompletePokemonData;
   changeSelectedId: (id: number | null) => void;
   syncedData: any[];
   activePad: ActivePadType;
   changeActivePad: (pad: ActivePadType) => void;
   prevPokemon: any;
   nextPokemon: any;
   getNextPokemon: () => void;
   getPrevPokemon: () => void;
};

export default function PreviewContent({
   pokemon,
   syncedData,
   activePad,
   changeActivePad,
   getNextPokemon,
   getPrevPokemon,
}: Props) {
   const TABS = [
      { text: "Dex entry", icon: "auto_stories" },
      { text: "Stats", icon: "bar_chart" },
      { text: "Evolutions", icon: "account_tree" },
      { text: "Profile", icon: "fingerprint" },
   ];

   const [selectedTab, setSelectedTab] = useState(0);

   const currentIndex = syncedData.findIndex(
      (p: any) => p.id === pokemon.base.id,
   );

   const prevPokemon = currentIndex > 0 ? syncedData[currentIndex - 1] : null;

   const nextPokemon =
      currentIndex < syncedData.length - 1
         ? syncedData[currentIndex + 1]
         : null;

   return (
      <ColorContainer type={pokemon.base.types[0].type.name}>
         <div className="flex-1 w-full flex flex-col gap-2 overflow-hidden">
            <div className="flex items-end gap-1">
               <PreviewName name={pokemon.base.name} />
               <PreviewNumber number={pokemon.base.id} />
            </div>

            <div className="flex w-full border-b border-white/50">
               {TABS.map((tab, index) => (
                  <PreviewTab
                     isSelected={selectedTab === index}
                     key={tab.text}
                     icon={tab.icon}
                     onClick={() => setSelectedTab(index)}
                  />
               ))}
            </div>
            <PreviewTabContainer contentKey={TABS[selectedTab].text}>
               <TabName name={TABS[selectedTab].text} />
               {selectedTab === 0 && <Entry pokemon={pokemon} />}
               {selectedTab === 1 && <Stats pokemon={pokemon} />}
               {selectedTab === 2 && <Evolution pokemon={pokemon} />}
               {selectedTab === 3 && <Profile pokemon={pokemon} />}
            </PreviewTabContainer>
            <div className="h-11 rounded-full w-full flex gap-2">
               <PreviewButton
                  icon="favorite"
                  text="Add to favorite"
                  favorite
                  isActive={activePad === "favorite"}
                  changeActivePad={changeActivePad}
               />
               <PreviewButton
                  icon="arrow_outward"
                  text="Full page"
                  isActive={activePad === "open"}
                  changeActivePad={changeActivePad}
               />
            </div>
            <div className="h-11 rounded-full bg-white flex p-0.5 gap-0.5">
               <NavigationButton
                  reverse
                  pokemon={prevPokemon}
                  isActive={activePad === "prev"}
                  changeActivePad={changeActivePad}
                  onClick={getPrevPokemon}
               />
               <div className="h-full w-px bg-black/50"></div>
               <NavigationButton
                  pokemon={nextPokemon}
                  isActive={activePad === "next"}
                  changeActivePad={changeActivePad}
                  onClick={getNextPokemon}
               />
            </div>
         </div>
      </ColorContainer>
   );
}
