import { useState } from 'react'; // Necesario para el ordenamiento
import { ArrowLeft, Download, User, ChevronUp, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function NotificationsReport() {
  // 1. ESTADO PARA EL ORDENAMIENTO
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

  // Datos base (los mismos 30 casos)
  const initialHistory = [
    { id: 1, service: 'VMware', event: 'Nodo 4 Down', status: 'Solucionado', priority: 'Crítica', user: 'Gianny Vargas', date: '2026-05-02 10:50', responseTime: '5 min' },
    { id: 2, service: 'Entra ID', event: 'Bloqueo MFA - g.vargas', status: 'Solucionado', priority: 'Alta', user: 'Daniel Franco', date: '2026-05-02 09:30', responseTime: '12 min' },
    { id: 3, service: '3CX', event: 'Troncal SIP Restablecida', status: 'Solucionado', priority: 'Baja', user: 'Sistema', date: '2026-05-02 08:15', responseTime: '2 min' },
    ...Array.from({ length: 26 }, (_, i) => ({
      id: i + 4,
      service: i % 3 === 0 ? 'VMware' : i % 3 === 1 ? '3CX' : 'Entra ID',
      event: `Mantenimiento preventivo #${i + 205}`,
      status: 'Solucionado',
      priority: 'Baja',
      user: i % 2 === 0 ? 'Gianny Vargas' : 'Daniel Franco',
      date: `2026-04-${28 - Math.floor(i/5)} 11:30`,
      responseTime: '15 min'
    })),
    { id: 30, service: 'Fortinet', event: 'Intento de intrusión bloqueado', status: 'Solucionado', priority: 'Crítica', user: 'Daniel Franco', date: '2026-04-23 19:15', responseTime: '4 min' },
  ];

  // 2. LÓGICA DE ORDENAMIENTO DINÁMICO
  const sortedHistory = [...initialHistory].sort((a, b) => {
    return sortOrder === 'asc' 
      ? new Date(a.date).getTime() - new Date(b.date).getTime()
      : new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  const toggleSort = () => {
    setSortOrder(sortOrder === 'desc' ? 'asc' : 'desc');
  };

  const handleDownload = () => {
    const headers = "ID,Servicio,Evento,Estado,Responsable,Tiempo_Solucion,Fecha\n";
    const rows = sortedHistory.map(item => 
      `${item.id},${item.service},${item.event},${item.status},${item.user},${item.responseTime},${item.date}`
    ).join("\n");
    
    const blob = new Blob([headers + rows], { type: 'text/csv;charset=utf-8;' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Reporte_Gestion_InfraDash.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      {/* CABECERA (Igual a la anterior) */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex items-center gap-4">
          <Link to="/" className="p-2 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-full transition-colors">
            <ArrowLeft size={20} />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-slate-800 dark:text-white">Reporte de Gestión</h1>
            <p className="text-xs text-slate-500">Mayo 2026 • Barranquilla, CO</p>
          </div>
        </div>
        <button onClick={handleDownload} className="flex items-center gap-2 px-6 py-2 bg-emerald-500 text-white rounded-lg font-bold hover:bg-emerald-600 transition-all">
          <Download size={18} /> Exportar (.csv)
        </button>
      </div>

      {/* TABLA CON ORDENAMIENTO */}
      <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 dark:bg-slate-900/50 text-slate-500 dark:text-slate-400 uppercase text-[10px] font-bold">
              <tr>
                <th className="px-6 py-4">Prioridad</th>
                <th className="px-6 py-4">Servicio</th>
                <th className="px-6 py-4">Evento</th>
                <th className="px-6 py-4">Responsable</th>
                <th className="px-6 py-4 text-center">T. Solución</th>
                {/* 3. ENCABEZADO CON FLECHAS DE ORDEN */}
                <th 
                  className="px-6 py-4 text-right cursor-pointer hover:text-emerald-500 transition-colors select-none group"
                  onClick={toggleSort}
                >
                  <div className="flex items-center justify-end gap-1">
                    Fecha
                    {sortOrder === 'desc' ? (
                      <ChevronDown size={14} className="text-emerald-500" />
                    ) : (
                      <ChevronUp size={14} className="text-emerald-500" />
                    )}
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
              {sortedHistory.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50 dark:hover:bg-slate-700/30 transition-colors">
                  <td className="px-6 py-4">
                    <span className={`px-2 py-0.5 rounded text-[9px] font-bold uppercase ${
                      item.priority === 'Crítica' ? 'bg-red-100 text-red-600 dark:bg-red-500/20' : 'bg-emerald-100 text-emerald-600'
                    }`}>
                      {item.priority}
                    </span>
                  </td>
                  <td className="px-6 py-4 font-bold">{item.service}</td>
                  <td className="px-6 py-4 text-slate-500 font-medium">{item.event}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-xs">
                      <User size={12} className="text-slate-400" /> {item.user}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center font-mono text-xs">{item.responseTime}</td>
                  <td className="px-6 py-4 text-right font-mono text-[10px] text-slate-400">{item.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}