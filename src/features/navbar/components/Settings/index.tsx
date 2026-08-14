import { useState } from "react";
import SettingsButton from "./SettingsButton";
import SettingsMenu from "./SettingsMenu";

export default function Settings() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      tabIndex={0}
      onBlur={() => setIsOpen(false)}
      className="h-full aspect-square relative z-20"
    >
      <SettingsButton onClick={() => setIsOpen(!isOpen)} isOpen={isOpen} />
      {isOpen && <SettingsMenu />}
    </div>
  );
}
