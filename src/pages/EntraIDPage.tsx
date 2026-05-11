import { ShieldCheck, Users, Smartphone, Key, AlertTriangle, CheckCircle2 } from 'lucide-react';

export default function EntraIDPage() {
  // Datos simulados basados en una infraestructura corporativa típica
  const licenseStats = [
    { label: 'M365 Business Premium', assigned: 45, total: 50, color: 'bg-emerald-500' },
    { label: 'Microsoft 365 E3', assigned: 12, total: 15, color: 'bg-blue-500' },
  ];

  const securityAlerts = [
    { id: 1, user: 'Usuario A', event: 'Intento MFA Fallido', location: 'Bogotá, CO', status: 'Bloqueado', severity: 'high' },
    { id: 2, user: 'Usuario B', event: 'Inicio sesión inusual', location: 'Madrid, ES', status: 'Revisión', severity: 'medium' },
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      {/* HEADER */}
      <header className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 dark:text-white">Microsoft Entra ID</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">Gestión de Identidades y Cumplimiento de Seguridad</p>
        </div>
        <div className="flex gap-2">
          <span className="flex items-center gap-1 text-[10px] font-bold bg-emerald-100 text-emerald-600 px-3 py-1 rounded-full uppercase">
            <ShieldCheck size={12} /> Sincronización OK
          </span>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* COLUMNA IZQUIERDA: LICENCIAS E INTUNE */}
        <div className="lg:col-span-1 space-y-6">
          <section className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
              <Users size={16} /> Estado de Licencias
            </h2>
            <div className="space-y-4">
              {licenseStats.map((lic) => (
                <div key={lic.label}>
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span className="text-slate-700 dark:text-slate-300">{lic.label}</span>
                    <span className="text-slate-500">{lic.assigned}/{lic.total}</span>
                  </div>
                  <div className="h-2 w-full bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                    <div 
                      className={`${lic.color} h-full transition-all duration-1000`} 
                      style={{ width: `${(lic.assigned / lic.total) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
              <Smartphone size={16} /> Cumplimiento Intune
            </h2>
            <div className="flex items-center justify-center p-4">
              <div className="relative w-32 h-32 flex items-center justify-center rounded-full border-8 border-emerald-500 border-t-slate-100 dark:border-t-slate-700 rotate-45">
                <div className="-rotate-45 text-center">
                  <span className="text-2xl font-black text-slate-800 dark:text-white">92%</span>
                  <p className="text-[9px] text-slate-400 font-bold uppercase">Compliance</p>
                </div>
              </div>
            </div>
            <p className="text-[11px] text-center text-slate-500 mt-2 italic">58 dispositivos monitoreados</p>
          </section>
        </div>

        {/* COLUMNA DERECHA: ALERTAS DE SEGURIDAD */}
        <div className="lg:col-span-2 space-y-6">
          <section className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
              <Key size={16} /> Auditoría de Inicios de Sesión (MFA)
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-slate-100 dark:border-slate-700 text-[10px] text-slate-400 uppercase">
                    <th className="pb-3 font-bold">Usuario</th>
                    <th className="pb-3 font-bold">Evento</th>
                    <th className="pb-3 font-bold">Ubicación</th>
                    <th className="pb-3 font-bold">Estado</th>
                  </tr>
                </thead>
                <tbody className="text-xs">
                  {securityAlerts.map((alert) => (
                    <tr key={alert.id} className="border-b border-slate-50 dark:border-slate-700/50 last:border-0">
                      <td className="py-3 font-medium text-slate-800 dark:text-slate-200">{alert.user}</td>
                      <td className="py-3 text-slate-500 dark:text-slate-400">{alert.event}</td>
                      <td className="py-3 text-slate-500 dark:text-slate-400">{alert.location}</td>
                      <td className="py-3">
                        <span className={`px-2 py-0.5 rounded-full font-bold text-[9px] uppercase ${
                          alert.severity === 'high' ? 'bg-red-100 text-red-600' : 'bg-amber-100 text-amber-600'
                        }`}>
                          {alert.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-100 dark:border-emerald-500/20 rounded-xl">
              <div className="flex gap-3 items-center">
                <CheckCircle2 className="text-emerald-500" size={24} />
                <div>
                  <h4 className="text-sm font-bold text-emerald-900 dark:text-emerald-400 uppercase">Respaldo Purview</h4>
                  <p className="text-[11px] text-emerald-700 dark:text-emerald-500">Backups de eDiscovery completados hoy.</p>
                </div>
              </div>
            </div>
            <div className="p-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl">
              <div className="flex gap-3 items-center">
                <AlertTriangle className="text-slate-400" size={24} />
                <div>
                  <h4 className="text-sm font-bold text-slate-700 dark:text-slate-300 uppercase">Políticas MDM</h4>
                  <p className="text-[11px] text-slate-500">2 dispositivos pendientes de actualización.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}