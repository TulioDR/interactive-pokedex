import { useState } from "react";
import PreviewTab from "./PreviewTab";
import PreviewTabContainer from "./PreviewTabContainer";
import TabName from "./TabName";
import Entry from "./Tabs/Entry";
import Evolution from "./Tabs/Evolution";
import Profile from "./Tabs/Profile";
import Stats from "./Tabs/Stats";

type Props = {
   pokemon: any;
};

export default function DataTabs({ pokemon }: Props) {
   const TABS = [
      { text: "Dex entry", icon: "auto_stories" },
      { text: "Stats", icon: "bar_chart" },
      { text: "Evolutions", icon: "account_tree" },
      { text: "Profile", icon: "fingerprint" },
   ];

   const [selectedTab, setSelectedTab] = useState(0);

   return (
      <>
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
      </>
   );
}
