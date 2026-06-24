type Props = {
   name: string;
};

export default function PreviewName({ name }: Props) {
   return (
      <div className=" font-medium text-xl text-white uppercase">{name}</div>
   );
}
