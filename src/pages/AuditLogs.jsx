import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, query, orderBy, onSnapshot, limit } from 'firebase/firestore';
import AppLayout from '../components/ui/AppLayout';
import Card, { CardBody, CardHeader } from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import { TableSkeleton } from '../components/ui/Skeleton';
import EmptyState from '../components/ui/EmptyState';
import { History, Search } from 'lucide-react';

export default function AuditLogs() {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Only fetch the latest 100 logs to optimize performance
    const q = query(collection(db, 'audit_logs'), orderBy('timestamp', 'desc'), limit(100));
    const unsub = onSnapshot(q, (snapshot) => {
      setLogs(snapshot.docs.map(d => ({ id: d.id, ...d.data() })));
      setLoading(false);
    });
    return () => unsub();
  }, []);

  const filteredLogs = logs.filter(log => 
    log.action?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    log.userId?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    log.collection?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <AppLayout title="System Audit Logs">
      <div className="max-w-6xl space-y-6 animate-fade-in">
        <Card>
          <CardHeader className="flex justify-between items-center sm:flex-row flex-col gap-4">
            <div>
              <h3 className="font-bold text-lg text-surface-900 flex items-center gap-2">
                <History className="w-5 h-5 text-primary-600" />
                Track System Activity
              </h3>
              <p className="text-sm text-surface-500">Showing the latest 100 system events</p>
            </div>
            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-surface-400" />
              <input 
                type="text" 
                placeholder="Search action or user ID..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-surface-50 border border-surface-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
          </CardHeader>
          <div className="overflow-x-auto">
            {loading ? <div className="p-6"><TableSkeleton columns={5} rows={5} /></div> : filteredLogs.length === 0 ? (
              <EmptyState icon={History} title="No Logs Found" description="There are no audit logs matching your criteria." />
            ) : (
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-surface-50 border-y border-surface-200">
                    <th className="px-6 py-3 text-xs font-bold text-surface-500 uppercase tracking-wider">Timestamp</th>
                    <th className="px-6 py-3 text-xs font-bold text-surface-500 uppercase tracking-wider">Action</th>
                    <th className="px-6 py-3 text-xs font-bold text-surface-500 uppercase tracking-wider">Target</th>
                    <th className="px-6 py-3 text-xs font-bold text-surface-500 uppercase tracking-wider">User ID</th>
                    <th className="px-6 py-3 text-xs font-bold text-surface-500 uppercase tracking-wider">Details</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-100">
                  {filteredLogs.map(log => {
                    const dateStr = log.timestamp?.toDate ? log.timestamp.toDate().toLocaleString() : 'Pending...';
                    return (
                      <tr key={log.id} className="hover:bg-surface-50 transition-colors">
                        <td className="px-6 py-4 text-sm text-surface-500 whitespace-nowrap">{dateStr}</td>
                        <td className="px-6 py-4 text-sm font-medium text-surface-900">
                          <Badge variant={log.action.includes('CREATE') ? 'success' : log.action.includes('UPDATE') || log.action.includes('GRADE') ? 'warning' : log.action.includes('DELETE') ? 'danger' : 'primary'}>
                            {log.action}
                          </Badge>
                        </td>
                        <td className="px-6 py-4 text-sm text-surface-600">
                          <span className="font-semibold">{log.collection}</span> 
                          <span className="text-surface-400 text-xs block truncate w-32" title={log.docId}>{log.docId}</span>
                        </td>
                        <td className="px-6 py-4 text-sm font-mono text-surface-500 truncate max-w-[120px]" title={log.userId}>{log.userId}</td>
                        <td className="px-6 py-4 text-sm text-surface-600 max-w-[200px] truncate" title={JSON.stringify(log.details)}>
                          {JSON.stringify(log.details)}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </div>
        </Card>
      </div>
    </AppLayout>
  );
}
