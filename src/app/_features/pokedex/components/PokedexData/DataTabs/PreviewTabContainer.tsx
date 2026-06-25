type Props = {
   children: React.ReactNode;
};

export default function PreviewTabContainer({ children }: Props) {
   return (
      <div className="flex-1 w-full overflow-hidden flex flex-col overflow-y-scroll h-full p-4">
         {children}
      </div>
   );
}
