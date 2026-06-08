type Props = {
   name: string;
};

export default function PreviewName({ name }: Props) {
   return (
      <div className=" font-black text-lg text-white uppercase">{name}</div>
   );
}
