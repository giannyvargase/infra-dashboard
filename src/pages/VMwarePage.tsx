import { Server } from 'lucide-react';

export default function VMwarePage() {
  const hosts = [
    { id: 'Host-01', status: 'Online', cpu: '45%', ram: '62%', temp: '42°C' },
    { id: 'Host-02', status: 'Online', cpu: '30%', ram: '40%', temp: '38°C' },
    { id: 'Host-03', status: 'Online', cpu: '85%', ram: '90%', temp: '55°C' },
    { id: 'Host-04', status: 'Offline', cpu: '0%', ram: '0%', temp: 'N/A' },
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <header>
        <h1 className="text-2xl font-bold text-slate-800 dark:text-white">Infraestructura VMware</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">Gestión de Clúster y Hosts ESXi</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {hosts.map((host) => (
          <div key={host.id} className={`p-4 rounded-xl border ${host.status === 'Offline' ? 'border-red-200 bg-red-50 dark:bg-red-900/10' : 'border-slate-200 bg-white dark:bg-slate-800'}`}>
            <div className="flex justify-between items-start mb-4">
              <Server size={20} className={host.status === 'Offline' ? 'text-red-500' : 'text-emerald-500'} />
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase ${host.status === 'Offline' ? 'bg-red-100 text-red-600' : 'bg-emerald-100 text-emerald-600'}`}>
                {host.status}
              </span>
            </div>
            <h3 className="font-bold text-slate-700 dark:text-slate-200">{host.id}</h3>
            <div className="mt-4 space-y-3">
              <ResourceBar label="CPU" value={host.cpu} />
              <ResourceBar label="RAM" value={host.ram} />
              <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase mt-2">
                <span>Temp</span>
                <span className={parseInt(host.temp) > 50 ? 'text-amber-500' : ''}>{host.temp}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ResourceBar({ label, value }: { label: string, value: string }) {
  return (
    <div>
      <div className="flex justify-between text-[10px] font-bold text-slate-500 mb-1 uppercase">
        <span>{label}</span>
        <span>{value}</span>
      </div>
      <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
        <div className="bg-emerald-500 h-full" style={{ width: value }}></div>
      </div>
    </div>
  );
}