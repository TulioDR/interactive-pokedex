import { useState } from "react";
import SettingsButton from "./SettingsButton";
import SettingsMenu from "./SettingsMenu";

type Props = {};

export default function Settings({}: Props) {
   const [isOpen, setIsOpen] = useState(false);

   return (
      <div
         tabIndex={0}
         onBlur={() => setIsOpen(false)}
         onClick={() => setIsOpen(!isOpen)}
         className="h-full aspect-square relative"
      >
         <SettingsButton isOpen={isOpen} />
         {isOpen && <SettingsMenu />}
      </div>
   );
}
