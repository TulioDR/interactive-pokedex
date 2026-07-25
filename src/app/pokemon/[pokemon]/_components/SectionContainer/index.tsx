type Props = {
   children: React.ReactNode;
   className?: string;
};

export default function SectionContainer({ children, className = "" }: Props) {
   return (
      <div
         className={`bg-white rounded-lg outline outline-outline p-5 lg:p-10 flex flex-col gap-5 shadow-md ${className}`}
      >
         {children}
      </div>
   );
}
