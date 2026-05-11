import { Database, HardDrive, CheckCircle2, Clock } from 'lucide-react';
export default function SincoPage() {
  // Datos simulados de la infraestructura del ERP
  const databaseStats = [
    { label: 'DB Producción (ADPRO)', status: 'Online', latency: '12ms', load: '24%' },
    { label: 'DB Consultas / Reportes', status: 'Online', latency: '8ms', load: '15%' },
  ];

  const erpServices = [
    { name: 'Servidor de Aplicaciones', status: 'Running', uptime: '14d 6h' },
    { name: 'Servicio de Facturación Electrónica', status: 'Running', uptime: '45d 2h' },
    { name: 'Portal de Proveedores', status: 'Warning', uptime: '1d 12h' },
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      {/* HEADER */}
      <header className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 dark:text-white">SINCO ERP | Monitoreo ADPRO</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">Estado de Base de Datos y Servicios Core</p>
        </div>
        <div className="bg-white dark:bg-slate-800 px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Estado General</p>
          <div className="flex items-center gap-2 text-emerald-500 font-bold">
            <CheckCircle2 size={16} /> <span>Operativo</span>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* SQL SERVER STATUS */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
            <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2">
              <Database size={16} /> Instancias SQL Server
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {databaseStats.map((db) => (
                <div key={db.label} className="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-100 dark:border-slate-800">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-bold text-slate-700 dark:text-slate-200">{db.label}</h3>
                    <span className="text-[9px] bg-emerald-500/10 text-emerald-500 px-2 py-0.5 rounded-full font-bold uppercase">Online</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-[10px] text-slate-400 uppercase font-bold">Latencia</p>
                      <p className="text-lg font-bold text-slate-800 dark:text-white">{db.latency}</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400 uppercase font-bold">Carga CPU</p>
                      <p className="text-lg font-bold text-slate-800 dark:text-white">{db.load}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* PERFORMANCE CHART SIMULADO */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
            <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
               Tráfico de Usuarios en Tiempo Real
            </h2>
            <div className="h-40 w-full flex items-end gap-1 px-2">
              {[40, 55, 45, 60, 75, 50, 40, 65, 80, 90, 70, 60, 50, 45, 55, 70].map((h, i) => (
                <div 
                  key={i} 
                  className="flex-1 bg-emerald-500/20 hover:bg-emerald-500 transition-all rounded-t-sm" 
                  style={{ height: `${h}%` }}
                ></div>
              ))}
            </div>
            <div className="flex justify-between mt-2 text-[9px] text-slate-400 font-bold uppercase">
              <span>08:00 AM</span>
              <span>12:00 PM</span>
              <span>04:00 PM</span>
            </div>
          </div>
        </div>

        {/* SERVICIOS Y ALMACENAMIENTO */}
        <div className="space-y-6">
          <section className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
              <HardDrive size={16} /> Storage ADPRO
            </h2>
            <div className="space-y-4">
               <div>
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span className="text-slate-700 dark:text-slate-300">Disco Datos (S:)</span>
                    <span className="text-slate-500">750GB / 1TB</span>
                  </div>
                  <div className="h-2 w-full bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                    <div className="bg-amber-500 h-full" style={{ width: '75%' }}></div>
                  </div>
               </div>
            </div>
          </section>

          <section className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
               Servicios de Aplicación
            </h2>
            <div className="space-y-3">
              {erpServices.map((service) => (
                <div key={service.name} className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors">
                  <div>
                    <p className="text-xs font-bold text-slate-700 dark:text-slate-200">{service.name}</p>
                    <p className="text-[10px] text-slate-400 flex items-center gap-1">
                      <Clock size={10} /> Up: {service.uptime}
                    </p>
                  </div>
                  <div className={`w-2 h-2 rounded-full ${service.status === 'Warning' ? 'bg-amber-500 animate-pulse' : 'bg-emerald-500'}`}></div>
                </div>
              ))}
            </div>
          </section>
        </div>

      </div>
    </div>
  );
}