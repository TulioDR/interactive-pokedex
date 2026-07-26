import { useState } from "react";
import PreviewTab from "./PreviewTab";
import PreviewTabContainer from "./PreviewTabContainer";
import Entry from "./Tabs/Entry";
import Evolution from "./Tabs/Evolution";
import Stats from "./Tabs/Stats";
import Profile from "./Tabs/Profile";

type Props = {
   pokemon: any;
};

export default function DataTabs({ pokemon }: Props) {
   const TABS = [
      { text: "Profile", icon: "fingerprint" },
      { text: "Stats", icon: "bar_chart" },
      { text: "Evolutions", icon: "account_tree" },
      { text: "dex", icon: "close" },
   ];

   const [selectedTab, setSelectedTab] = useState(0);

   return (
      <div className="flex-1 flex flex-col w-full overflow-hidden">
         <div className="flex w-full bg-black/20">
            {TABS.map((tab, index) => (
               <PreviewTab
                  isSelected={selectedTab === index}
                  key={tab.text}
                  icon={tab.icon}
                  text={tab.text}
                  onClick={() => setSelectedTab(index)}
               />
            ))}
         </div>
         <PreviewTabContainer>
            {selectedTab === 0 && <Entry pokemon={pokemon} />}
            {selectedTab === 1 && <Stats pokemon={pokemon} />}
            {selectedTab === 2 && <Evolution pokemon={pokemon} />}
            {selectedTab === 3 && <Profile pokemon={pokemon} />}
         </PreviewTabContainer>
      </div>
   );
}
