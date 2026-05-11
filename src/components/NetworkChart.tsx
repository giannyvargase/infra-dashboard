import { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { networkData, networkDataWeek } from '../data/mockInfrastructure';

export default function NetworkChart() {
  const [timeRange, setTimeRange] = useState('24h');
  const data = timeRange === '24h' ? networkData : networkDataWeek;

  return (
    <div className="mt-6 bg-slate-800 p-5 rounded-xl border border-slate-700 shadow-sm transition-colors">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-lg font-bold text-white">Latencia de Enlace Principal</h2>
          <p className="text-xs text-slate-400">Medido en milisegundos (ms)</p>
        </div>
        
        {/* BOTONES DE FILTRO */}
        <div className="flex gap-2 bg-slate-900 p-1 rounded-lg border border-slate-700">
          <button 
            onClick={() => setTimeRange('24h')}
            className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${timeRange === '24h' ? 'bg-slate-700 text-emerald-400 shadow-sm' : 'text-slate-400 hover:text-slate-200'}`}
          >
            24h
          </button>
          <button 
            onClick={() => setTimeRange('7d')}
            className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${timeRange === '7d' ? 'bg-slate-700 text-emerald-400 shadow-sm' : 'text-slate-400 hover:text-slate-200'}`}
          >
            7 Días
          </button>
        </div>
      </div>
      
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorLatency" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#34d399" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#34d399" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} opacity={0.5} />
            <XAxis dataKey="time" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
            <Tooltip 
              contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: '#f8fafc', borderRadius: '0.5rem' }}
              itemStyle={{ color: '#34d399', fontWeight: 'bold' }}
            />
            <Area type="monotone" dataKey="latency" name="Latencia" stroke="#34d399" strokeWidth={2} fillOpacity={1} fill="url(#colorLatency)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}