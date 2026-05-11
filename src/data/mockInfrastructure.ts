// 1. Datos de las tarjetas superiores
export const kpiData = [
  { id: 1, title: 'VMware Nodos', value: '3/4 UP', status: 'Saludable', color: 'emerald' },
  { id: 2, title: 'Microsoft Purview', value: 'eDiscovery Activo', status: 'Custodia OK', color: 'emerald' },
  { id: 3, title: 'SINCO ERP', value: 'ADPRO Operacional', status: 'Presupuestos OK', color: 'emerald' },
  { id: 4, title: 'Entra ID / M365', value: '145/150 Lic.', status: 'Límite', color: 'amber' },
];

// 2. Datos de la tabla
export const alertsData = [
  { id: 1, severity: 'critical', time: '10:45 AM', service: 'VMware ESXi', message: 'Nodo 4 no responde al ping (Down)' },
  { id: 2, severity: 'warning', time: '09:15 AM', service: 'Entra ID', message: 'Múltiples fallos MFA' },
  { id: 3, severity: 'info', time: '02:00 AM', service: 'Veeam Backup', message: 'Job Base de Datos completado' },
];

// 3. Datos de la gráfica (24 horas)
export const networkData = [
  { time: '00:00', latency: 45 },
  { time: '04:00', latency: 50 },
  { time: '08:00', latency: 120 },
  { time: '12:00', latency: 65 },
  { time: '16:00', latency: 85 },
  { time: '20:00', latency: 40 },
  { time: '24:00', latency: 45 },
];

// 4. Datos de la gráfica (Semanal)
export const networkDataWeek = [
  { time: 'Lun', latency: 45 },
  { time: 'Mar', latency: 55 },
  { time: 'Mie', latency: 130 },
  { time: 'Jue', latency: 60 },
  { time: 'Vie', latency: 85 },
  { time: 'Sab', latency: 40 },
  { time: 'Dom', latency: 42 },
];