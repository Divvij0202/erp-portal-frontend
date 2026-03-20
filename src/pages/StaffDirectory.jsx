// StaffDirectory.jsx — Staff management with card/table view, search, export
import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import Papa from 'papaparse';
import toast from 'react-hot-toast';

import AppLayout from '../components/ui/AppLayout';
import Card, { CardBody } from '../components/ui/Card';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Badge from '../components/ui/Badge';
import { TableSkeleton } from '../components/ui/Skeleton';
import EmptyState from '../components/ui/EmptyState';
import {
  Search,
  Download,
  FileText,
  RefreshCw,
  Users,
  Mail,
  Briefcase,
  Building2,
} from 'lucide-react';

function StaffDirectory() {
  const [staff, setStaff] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [departmentFilter, setDepartmentFilter] = useState('');

  const fetchStaff = async () => {
    try {
      setIsLoading(true);
      const staffCollection = collection(db, 'staff');
      const data = await getDocs(staffCollection);
      const staffList = data.docs.map((d) => ({ id: d.id, ...d.data() }));
      setStaff(staffList);
      setError(null);
    } catch (err) {
      console.error('Error fetching staff data:', err);
      setError('Failed to load staff data. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchStaff();
  }, []);

  // Unique departments for filter
  const departments = [...new Set(staff.map((m) => m.department).filter(Boolean))];

  const filteredStaff = staff.filter((member) => {
    const matchesSearch = member.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.email?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDept = departmentFilter ? member.department === departmentFilter : true;
    return matchesSearch && matchesDept;
  });

  const exportToPDF = () => {
    const doc = new jsPDF();
    doc.text('Staff Directory', 14, 15);
    doc.autoTable({
      startY: 20,
      head: [['Name', 'Email', 'Position', 'Department']],
      body: filteredStaff.map((s) => [s.name, s.email, s.position, s.department]),
      headStyles: { fillColor: [79, 70, 229] },
      styles: { fontSize: 10 },
    });
    doc.save('staff-directory.pdf');
    toast.success('PDF exported successfully');
  };

  const exportToCSV = () => {
    const csv = Papa.unparse(
      filteredStaff.map(({ name, email, position, department }) => ({
        Name: name, Email: email, Position: position, Department: department,
      })),
      { quotes: true, delimiter: ',', header: true }
    );
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.href = url;
    link.download = 'staff-directory.csv';
    document.body.appendChild(link);
    link.click();
    setTimeout(() => { document.body.removeChild(link); URL.revokeObjectURL(url); }, 100);
    toast.success('CSV exported successfully');
  };

  return (
    <AppLayout title="Staff Directory">
      <div className="space-y-6 animate-fade-in">
        {/* Error banner */}
        {error && (
          <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-center justify-between">
            {error}
            <Button variant="secondary" size="sm" onClick={fetchStaff}>Retry</Button>
          </div>
        )}

        {/* Toolbar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3 flex-wrap">
            <Input
              icon={Search}
              placeholder="Search staff..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full sm:w-64"
            />
            {departments.length > 0 && (
              <select
                value={departmentFilter}
                onChange={(e) => setDepartmentFilter(e.target.value)}
                className="rounded-xl border border-surface-300 bg-white px-4 py-2.5 text-sm text-surface-700 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
              >
                <option value="">All Departments</option>
                {departments.map((dept) => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>
            )}
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <Button variant="secondary" size="sm" icon={FileText} onClick={exportToPDF}>PDF</Button>
            <Button variant="secondary" size="sm" icon={Download} onClick={exportToCSV}>CSV</Button>
            <Button variant="secondary" size="sm" icon={RefreshCw} onClick={fetchStaff}>Refresh</Button>
          </div>
        </div>

        {/* Count */}
        {!isLoading && (
          <p className="text-sm text-surface-500">
            Showing <span className="font-medium text-surface-700">{filteredStaff.length}</span> of{' '}
            <span className="font-medium text-surface-700">{staff.length}</span> staff members
          </p>
        )}

        {/* Staff cards grid */}
        {isLoading ? (
          <TableSkeleton columns={4} rows={6} />
        ) : filteredStaff.length === 0 ? (
          <EmptyState
            icon={Users}
            title="No staff members found"
            description={searchTerm || departmentFilter ? 'Try adjusting your filters.' : 'No staff data available.'}
          />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredStaff.map((member) => (
              <Card key={member.id} hover>
                <CardBody className="flex items-start gap-4">
                  {/* Avatar */}
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center shrink-0">
                    <span className="text-lg font-bold text-white">
                      {member.name?.charAt(0)?.toUpperCase() || '?'}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-semibold text-surface-900 truncate">{member.name || '-'}</h4>
                    <div className="flex items-center gap-1.5 mt-1 text-xs text-surface-500">
                      <Mail className="w-3 h-3 shrink-0" />
                      <span className="truncate">{member.email || '-'}</span>
                    </div>
                    <div className="flex items-center gap-1.5 mt-1 text-xs text-surface-500">
                      <Briefcase className="w-3 h-3 shrink-0" />
                      <span className="truncate">{member.position || '-'}</span>
                    </div>
                    {member.department && (
                      <div className="mt-2">
                        <Badge variant="info">{member.department}</Badge>
                      </div>
                    )}
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        )}
      </div>
    </AppLayout>
  );
}

export default StaffDirectory;