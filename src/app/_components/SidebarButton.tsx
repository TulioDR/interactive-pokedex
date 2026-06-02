import React from "react";

type Props = {
   icon: string;
};

export default function SidebarButton({ icon }: Props) {
   return (
      <div className="h-14 aspect-square rounded-full flex items-center justify-center text-black/50">
         <span className="material-icons text-4xl!">{icon}</span>
      </div>
   );
}
