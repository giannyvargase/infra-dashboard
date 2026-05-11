import { Activity } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string;
  status: string;
  color: string;
}

export default function StatCard({ title, value, status, color }: StatCardProps) {
  return (
    <div className="bg-slate-800 p-5 rounded-xl border border-slate-700 shadow-sm flex flex-col hover:border-slate-600 transition-colors">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-slate-400 text-sm font-medium">{title}</h3>
        <Activity size={18} className={color} />
      </div>
      
      <p className="text-2xl font-bold text-white mb-1">{value}</p>
      
      <div className="flex items-center mt-2">
        {/* Usamos el color dinámico que viene de los datos para el texto */}
        <span className={`text-xs font-medium px-2 py-1 rounded-md bg-slate-900 border border-slate-700 ${color}`}>
          {status}
        </span>
      </div>
    
      <div className="cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-lg active:scale-95 border border-transparent hover:border-emerald-500/50">
        {/* Contenido de la tarjeta */}
      </div>
    </div>
  );
}