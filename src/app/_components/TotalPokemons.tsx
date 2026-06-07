type Props = {
   total: number;
};

export default function TotalPokemons({ total }: Props) {
   return (
      <p className="text-xs font-mono text-slate-400">
         Found {total} matching entries
      </p>
   );
}
