import { AlertCircle, Shield, Server, Database, Search } from 'lucide-react';

interface AlertTableProps {
  filter: string;
}

export default function AlertTable({ filter }: AlertTableProps) {
  
  const allAlerts = [
    { id: 1, service: 'VMware', msg: 'Nodo 4 Down: Pérdida de conectividad', level: 'Crítica', time: 'Hace 5 min', icon: <Server size={14} /> },
    { id: 2, service: 'Purview', msg: 'eDiscovery: Exportación de buzón completada', level: 'Baja', time: 'Hace 15 min', icon: <Search size={14} /> },
    { id: 3, service: 'SINCO ERP', msg: 'ADPRO: Carga de presupuestos finalizada', level: 'Baja', time: 'Hace 25 min', icon: <Database size={14} /> },
    { id: 4, service: 'Entra ID', msg: 'Intento de acceso inusual detectado', level: 'Alta', time: 'Hace 40 min', icon: <Shield size={14} /> },
    { id: 5, service: 'Purview', msg: 'Nueva política de retención aplicada', level: 'Media', time: 'Hace 1 hora', icon: <Shield size={14} /> },
  ];

  // Lógica de filtrado
  const filteredAlerts = filter === 'Todos' 
    ? allAlerts 
    : allAlerts.filter(alert => alert.service.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm">
      <div className="p-4 border-b border-slate-100 dark:border-slate-700 flex justify-between items-center bg-slate-50/50 dark:bg-slate-900/50">
        <h3 className="font-bold text-slate-800 dark:text-white flex items-center gap-2">
          <AlertCircle size={18} className="text-emerald-500" />
          Monitoreo de Infraestructura
        </h3>
        <span className="text-[10px] font-bold px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 rounded uppercase">
          {filter === 'Todos' ? 'Vista Global' : `Filtrado: ${filter}`}
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="bg-slate-50 dark:bg-slate-900/50 text-slate-400 uppercase text-[10px] font-bold">
            <tr>
              <th className="px-6 py-3">Servicio</th>
              <th className="px-6 py-3">Evento</th>
              <th className="px-6 py-3 text-center">Nivel</th>
              <th className="px-6 py-3 text-right">Tiempo</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
            {filteredAlerts.map((alert) => (
              <tr key={alert.id} className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-500">{alert.icon}</span>
                    <span className="font-bold text-slate-700 dark:text-slate-200">{alert.service}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-slate-600 dark:text-slate-400 font-medium">{alert.msg}</td>
                <td className="px-6 py-4 text-center">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                    alert.level === 'Crítica' ? 'bg-red-100 text-red-600 dark:bg-red-500/20' :
                    alert.level === 'Alta' ? 'bg-amber-100 text-amber-600 dark:bg-amber-500/20' :
                    'bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20'
                  }`}>
                    {alert.level}
                  </span>
                </td>
                <td className="px-6 py-4 text-right text-[10px] text-slate-400 font-mono italic">{alert.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}