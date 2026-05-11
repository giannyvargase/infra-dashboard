import { useState } from 'react';
import { ArrowLeft, Save, Bell, Monitor, Shield, Mail, MessageSquare, Globe, Fingerprint } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Settings() {
  // Estado para controlar qué pestaña se muestra
  const [activeTab, setActiveTab] = useState('general');
  
  // Estado para los interruptores (Toggles)
  const [notifSettings, setNotifSettings] = useState({
    email: true,
    telegram: false,
    sound: true
  });

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* CABECERA */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Link to="/" className="p-2 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-full transition-colors text-slate-600 dark:text-slate-300">
            <ArrowLeft size={20} />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-slate-800 dark:text-white">Configuración</h1>
            <p className="text-xs text-slate-500 font-medium">Personalización de InfraDash</p>
          </div>
        </div>
        <button className="flex items-center gap-2 px-6 py-2 bg-emerald-500 text-white rounded-lg font-bold hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-500/20">
          <Save size={18} /> Guardar
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* MENÚ DE PESTAÑAS (Lateral) */}
        <nav className="flex flex-col gap-1">
          <button 
            onClick={() => setActiveTab('general')}
            className={`flex items-center gap-3 px-4 py-2 rounded-lg font-medium text-sm transition-all ${activeTab === 'general' ? 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-500/20' : 'text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
          >
            <Monitor size={18} /> General
          </button>
          <button 
            onClick={() => setActiveTab('notificaciones')}
            className={`flex items-center gap-3 px-4 py-2 rounded-lg font-medium text-sm transition-all ${activeTab === 'notificaciones' ? 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-500/20' : 'text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
          >
            <Bell size={18} /> Notificaciones
          </button>
          <button 
            onClick={() => setActiveTab('seguridad')}
            className={`flex items-center gap-3 px-4 py-2 rounded-lg font-medium text-sm transition-all ${activeTab === 'seguridad' ? 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-500/20' : 'text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
          >
            <Shield size={18} /> Seguridad
          </button>
        </nav>

        {/* CONTENIDO DEL PANEL */}
        <div className="md:col-span-2 space-y-6">
          
          {/* VISTA: GENERAL */}
          {activeTab === 'general' && (
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm animate-in slide-in-from-right-4">
              <h2 className="font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2">
                <Monitor size={18} className="text-emerald-500" /> Preferencias del Sistema
              </h2>
              <div className="space-y-4">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-slate-500 uppercase">Frecuencia de actualización</label>
                  <select className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg p-2 text-sm outline-none text-slate-700 dark:text-slate-200">
                    <option>Cada 30 segundos</option>
                    <option>Cada 1 minuto</option>
                    <option>Cada 5 minutos</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* VISTA: NOTIFICACIONES */}
          {activeTab === 'notificaciones' && (
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm animate-in slide-in-from-right-4">
              <h2 className="font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2">
                <Bell size={18} className="text-emerald-500" /> Canales de Alerta
              </h2>
              <div className="space-y-4">
                <ToggleOption 
                  icon={<Mail size={16} />}
                  title="Alertas por Email" 
                  desc="Reportes diarios de Veeam Backup" 
                  active={notifSettings.email}
                  toggle={() => setNotifSettings({...notifSettings, email: !notifSettings.email})}
                />
                <ToggleOption 
                  icon={<MessageSquare size={16} />}
                  title="Bot de Telegram" 
                  desc="Notificar fallos de VMware en tiempo real" 
                  active={notifSettings.telegram}
                  toggle={() => setNotifSettings({...notifSettings, telegram: !notifSettings.telegram})}
                />
              </div>
            </div>
          )}

          {/* VISTA: SEGURIDAD */}
          {activeTab === 'seguridad' && (
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm animate-in slide-in-from-right-4">
              <h2 className="font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2">
                <Shield size={18} className="text-emerald-500" /> Seguridad y Acceso
              </h2>
              <div className="space-y-6">
                {/* MFA - Conexión con Entra ID */}
                <div className="p-4 bg-emerald-50 dark:bg-emerald-500/5 border border-emerald-200 dark:border-emerald-500/20 rounded-lg">
                  <div className="flex gap-3">
                    <Fingerprint className="text-emerald-500" size={20} />
                    <div>
                      <p className="text-sm font-bold text-emerald-700 dark:text-emerald-400">Autenticación Multifactor (MFA)</p>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">Protección activa con Microsoft Authenticator y Entra ID.</p>
                      <button className="mt-2 text-[10px] font-bold bg-emerald-500 text-white px-3 py-1.5 rounded hover:bg-emerald-600 transition-colors">Configurar ahora</button>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 pt-2">
                  <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Sesiones del Administrador</h3>
                  <div className="flex items-center justify-between p-2 rounded hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors border border-transparent hover:border-slate-100 dark:hover:border-slate-700">
                    <div className="flex items-center gap-3">
                      <Globe size={14} className="text-slate-400" />
                      <span className="text-xs text-slate-600 dark:text-slate-300 font-medium">Windows 11 • Barranquilla, CO</span>
                    </div>
                    <span className="text-[10px] font-bold text-emerald-500 px-2 py-0.5 bg-emerald-50 dark:bg-emerald-500/10 rounded-full uppercase">Activa ahora</span>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

// SUB-COMPONENTE: Toggle Estético
function ToggleOption({ icon, title, desc, active, toggle }: { icon: React.ReactNode, title: string, desc: string, active: boolean, toggle: () => void }) {
  return (
    <div className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors">
      <div className="flex gap-3">
        <div className="mt-1 text-slate-400">{icon}</div>
        <div>
          <p className="text-sm font-medium text-slate-700 dark:text-slate-200">{title}</p>
          <p className="text-[11px] text-slate-500">{desc}</p>
        </div>
      </div>
      <button 
        onClick={toggle}
        className={`w-10 h-5 rounded-full relative transition-colors duration-200 ${active ? 'bg-emerald-500' : 'bg-slate-300 dark:bg-slate-600'}`}
      >
        <div className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-all duration-200 ${active ? 'left-6' : 'left-1'}`}></div>
      </button>
    </div>
  );
}