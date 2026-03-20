// Finance.js — Financial management with modern tabs, tables, and budget cards
import React, { useState, useEffect } from 'react';
import AppLayout from '../components/ui/AppLayout';
import Card, { CardHeader, CardBody } from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import { TableSkeleton } from '../components/ui/Skeleton';
import EmptyState from '../components/ui/EmptyState';
import {
  ArrowDownCircle,
  ArrowUpCircle,
  Download,
  FileText,
  Receipt,
  Wallet,
  BarChart3,
} from 'lucide-react';

// Tab configuration
const tabs = [
  { id: 'transactions', label: 'Transactions', icon: Receipt },
  { id: 'budgets', label: 'Budgets', icon: Wallet },
  { id: 'reports', label: 'Reports', icon: BarChart3 },
];

function Finance() {
  const [activeTab, setActiveTab] = useState('transactions');
  const [transactions, setTransactions] = useState([]);
  const [budgets, setBudgets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Sample data — replace with API calls in production
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 800));

      setTransactions([
        { id: 1, date: '2023-10-15', description: 'Tuition Fee', amount: 2500, type: 'income', status: 'completed' },
        { id: 2, date: '2023-10-18', description: 'Library Fine', amount: 25, type: 'income', status: 'completed' },
        { id: 3, date: '2023-10-20', description: 'Maintenance', amount: 1200, type: 'expense', status: 'pending' },
        { id: 4, date: '2023-10-22', description: 'Scholarship', amount: 500, type: 'expense', status: 'completed' },
        { id: 5, date: '2023-10-25', description: 'Lab Equipment', amount: 3400, type: 'expense', status: 'completed' },
        { id: 6, date: '2023-10-28', description: 'Hostel Fee', amount: 1800, type: 'income', status: 'pending' },
      ]);

      setBudgets([
        { id: 1, category: 'Academics', allocated: 50000, spent: 42000, remaining: 8000 },
        { id: 2, category: 'Facilities', allocated: 30000, spent: 28500, remaining: 1500 },
        { id: 3, category: 'Events', allocated: 15000, spent: 8700, remaining: 6300 },
        { id: 4, category: 'Research', allocated: 25000, spent: 12000, remaining: 13000 },
      ]);

      setIsLoading(false);
    };

    fetchData();
  }, []);

  const handleExport = (type) => {
    alert(`Exporting ${type} data...`);
  };

  return (
    <AppLayout title="Finance">
      <div className="space-y-6 animate-fade-in">
        {/* Summary cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Card>
            <CardBody className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center">
                <ArrowDownCircle className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <p className="text-sm text-surface-500">Total Income</p>
                <p className="text-2xl font-bold text-surface-900">$4,325</p>
              </div>
            </CardBody>
          </Card>
          <Card>
            <CardBody className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center">
                <ArrowUpCircle className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <p className="text-sm text-surface-500">Total Expenses</p>
                <p className="text-2xl font-bold text-surface-900">$5,100</p>
              </div>
            </CardBody>
          </Card>
          <Card>
            <CardBody className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center">
                <Wallet className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <p className="text-sm text-surface-500">Net Balance</p>
                <p className="text-2xl font-bold text-surface-900">-$775</p>
              </div>
            </CardBody>
          </Card>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-1 bg-surface-100 rounded-xl p-1 w-fit">
          {tabs.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`
                flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                ${activeTab === id
                  ? 'bg-white text-surface-900 shadow-soft'
                  : 'text-surface-500 hover:text-surface-700'
                }
              `}
            >
              <Icon className="w-4 h-4" />
              {label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        {isLoading ? (
          <TableSkeleton columns={5} rows={5} />
        ) : (
          <>
            {/* Transactions Tab */}
            {activeTab === 'transactions' && (
              <Card>
                <CardHeader className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-surface-900">Recent Transactions</h3>
                  <Button variant="secondary" size="sm" icon={Download} onClick={() => handleExport('transactions')}>
                    Export
                  </Button>
                </CardHeader>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-surface-100">
                        <th className="text-left text-xs font-medium text-surface-500 uppercase tracking-wider px-6 py-3">Date</th>
                        <th className="text-left text-xs font-medium text-surface-500 uppercase tracking-wider px-6 py-3">Description</th>
                        <th className="text-left text-xs font-medium text-surface-500 uppercase tracking-wider px-6 py-3">Amount</th>
                        <th className="text-left text-xs font-medium text-surface-500 uppercase tracking-wider px-6 py-3">Type</th>
                        <th className="text-left text-xs font-medium text-surface-500 uppercase tracking-wider px-6 py-3">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-surface-100">
                      {transactions.map((t) => (
                        <tr key={t.id} className="hover:bg-surface-50 transition-colors">
                          <td className="px-6 py-4 text-sm text-surface-600">{t.date}</td>
                          <td className="px-6 py-4 text-sm font-medium text-surface-900">{t.description}</td>
                          <td className={`px-6 py-4 text-sm font-semibold ${t.type === 'income' ? 'text-emerald-600' : 'text-red-600'}`}>
                            {t.type === 'income' ? '+' : '-'}${t.amount.toLocaleString()}
                          </td>
                          <td className="px-6 py-4">
                            <Badge variant={t.type === 'income' ? 'success' : 'danger'}>
                              {t.type}
                            </Badge>
                          </td>
                          <td className="px-6 py-4">
                            <Badge variant={t.status === 'completed' ? 'success' : 'warning'}>
                              {t.status}
                            </Badge>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            )}

            {/* Budgets Tab */}
            {activeTab === 'budgets' && (
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-surface-900">Budget Allocation</h3>
                  <Button variant="secondary" size="sm" icon={Download} onClick={() => handleExport('budgets')}>
                    Export
                  </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {budgets.map((budget) => {
                    const percent = Math.round((budget.spent / budget.allocated) * 100);
                    const isHigh = percent > 90;
                    return (
                      <Card key={budget.id}>
                        <CardBody>
                          <div className="flex items-center justify-between mb-4">
                            <h4 className="font-semibold text-surface-900">{budget.category}</h4>
                            <Badge variant={isHigh ? 'danger' : 'success'}>{percent}% used</Badge>
                          </div>
                          {/* Progress bar */}
                          <div className="w-full h-2 bg-surface-100 rounded-full overflow-hidden mb-4">
                            <div
                              className={`h-full rounded-full transition-all duration-500 ${isHigh ? 'bg-red-500' : 'bg-emerald-500'}`}
                              style={{ width: `${percent}%` }}
                            />
                          </div>
                          <div className="grid grid-cols-3 gap-2 text-center">
                            <div>
                              <p className="text-xs text-surface-500">Allocated</p>
                              <p className="text-sm font-semibold text-surface-900">${budget.allocated.toLocaleString()}</p>
                            </div>
                            <div>
                              <p className="text-xs text-surface-500">Spent</p>
                              <p className="text-sm font-semibold text-surface-900">${budget.spent.toLocaleString()}</p>
                            </div>
                            <div>
                              <p className="text-xs text-surface-500">Remaining</p>
                              <p className={`text-sm font-semibold ${isHigh ? 'text-red-600' : 'text-emerald-600'}`}>
                                ${budget.remaining.toLocaleString()}
                              </p>
                            </div>
                          </div>
                        </CardBody>
                      </Card>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Reports Tab */}
            {activeTab === 'reports' && (
              <div>
                <h3 className="text-lg font-semibold text-surface-900 mb-4">Financial Reports</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { title: 'Income Statement', desc: 'View monthly income and expenses', icon: ArrowDownCircle },
                    { title: 'Balance Sheet', desc: 'Assets, liabilities and equity', icon: FileText },
                    { title: 'Cash Flow', desc: 'Track cash inflows and outflows', icon: ArrowUpCircle },
                  ].map(({ title, desc, icon: Icon }) => (
                    <Card key={title} hover>
                      <CardBody className="text-center space-y-3">
                        <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center mx-auto">
                          <Icon className="w-6 h-6 text-primary-600" />
                        </div>
                        <h4 className="font-semibold text-surface-900">{title}</h4>
                        <p className="text-xs text-surface-500">{desc}</p>
                        <Button variant="secondary" size="sm" className="w-full">
                          Generate
                        </Button>
                      </CardBody>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </AppLayout>
  );
}

export default Finance;