type Props = {
   text: string;
};

export default function PreviewMessage({ text }: Props) {
   return (
      <div className="w-full h-full flex items-center justify-center text-slate-500">
         {text}
      </div>
   );
}
