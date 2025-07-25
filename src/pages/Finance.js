import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import '../styles/Finance.css';

// Icons (place these in your assets folder)
import invoiceIcon from '../assets/invoice.png';
import paymentIcon from '../assets/payment.png';
import budgetIcon from '../assets/budget.png';
import reportIcon from '../assets/finance-report.png';
import exportIcon from '../assets/export.png';

function Finance() {
  const [activeTab, setActiveTab] = useState('transactions');
  const [transactions, setTransactions] = useState([]);
  const [budgets, setBudgets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  // Sample data - replace with API calls in a real app
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 800));
      
      setTransactions([
        { id: 1, date: '2023-10-15', description: 'Tuition Fee', amount: 2500, type: 'income', status: 'completed' },
        { id: 2, date: '2023-10-18', description: 'Library Fine', amount: 25, type: 'income', status: 'completed' },
        { id: 3, date: '2023-10-20', description: 'Maintenance', amount: 1200, type: 'expense', status: 'pending' },
        { id: 4, date: '2023-10-22', description: 'Scholarship', amount: 500, type: 'expense', status: 'completed' },
      ]);

      setBudgets([
        { id: 1, category: 'Academics', allocated: 50000, spent: 42000, remaining: 8000 },
        { id: 2, category: 'Facilities', allocated: 30000, spent: 28500, remaining: 1500 },
        { id: 3, category: 'Events', allocated: 15000, spent: 8700, remaining: 6300 },
      ]);

      setIsLoading(false);
    };

    fetchData();
  }, []);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate('/login');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const handleGenerateInvoice = () => {
    // Implement invoice generation logic
    alert('Invoice generation would be implemented here');
  };

  const handleExport = (type) => {
    // Implement export logic
    alert(`Exporting ${type} data...`);
  };

  return (
    <div className="finance-container">
      <header className="finance-header">
        <h1>Financial Management System</h1>
        <div className="header-controls">
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </header>

      <div className="finance-dashboard">
        <div className="finance-sidebar">
          <div 
            className={`sidebar-item ${activeTab === 'transactions' ? 'active' : ''}`}
            onClick={() => setActiveTab('transactions')}
          >
            <img src={paymentIcon} alt="Transactions" />
            <span>Transactions</span>
          </div>
          <div 
            className={`sidebar-item ${activeTab === 'budgets' ? 'active' : ''}`}
            onClick={() => setActiveTab('budgets')}
          >
            <img src={budgetIcon} alt="Budgets" />
            <span>Budgets</span>
          </div>
          <div 
            className={`sidebar-item ${activeTab === 'reports' ? 'active' : ''}`}
            onClick={() => setActiveTab('reports')}
          >
            <img src={reportIcon} alt="Reports" />
            <span>Reports</span>
          </div>
          <div className="sidebar-actions">
            <button className="action-btn" onClick={handleGenerateInvoice}>
              <img src={invoiceIcon} alt="Generate Invoice" />
              New Invoice
            </button>
          </div>
        </div>

        <div className="finance-content">
          {isLoading ? (
            <div className="loading-spinner">Loading financial data...</div>
          ) : (
            <>
              {activeTab === 'transactions' && (
                <div className="transactions-section">
                  <div className="section-header">
                    <h2>Recent Transactions</h2>
                    <button 
                      className="export-btn"
                      onClick={() => handleExport('transactions')}
                    >
                      <img src={exportIcon} alt="Export" />
                      Export
                    </button>
                  </div>
                  <table className="transactions-table">
                    <thead>
                      <tr>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Amount</th>
                        <th>Type</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {transactions.map((transaction) => (
                        <tr key={transaction.id}>
                          <td>{transaction.date}</td>
                          <td>{transaction.description}</td>
                          <td className={`amount ${transaction.type}`}>
                            {transaction.type === 'income' ? '+' : '-'}${transaction.amount}
                          </td>
                          <td>
                            <span className={`type-badge ${transaction.type}`}>
                              {transaction.type}
                            </span>
                          </td>
                          <td>
                            <span className={`status-badge ${transaction.status}`}>
                              {transaction.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {activeTab === 'budgets' && (
                <div className="budgets-section">
                  <div className="section-header">
                    <h2>Budget Allocation</h2>
                    <button 
                      className="export-btn"
                      onClick={() => handleExport('budgets')}
                    >
                      <img src={exportIcon} alt="Export" />
                      Export
                    </button>
                  </div>
                  <div className="budget-cards">
                    {budgets.map((budget) => (
                      <div key={budget.id} className="budget-card">
                        <h3>{budget.category}</h3>
                        <div className="budget-progress">
                          <div 
                            className="progress-bar"
                            style={{
                              width: `${(budget.spent / budget.allocated) * 100}%`,
                              backgroundColor: (budget.spent / budget.allocated) > 0.9 ? '#f56565' : '#48bb78'
                            }}
                          ></div>
                        </div>
                        <div className="budget-details">
                          <div>
                            <span>Allocated:</span>
                            <span>${budget.allocated.toLocaleString()}</span>
                          </div>
                          <div>
                            <span>Spent:</span>
                            <span>${budget.spent.toLocaleString()}</span>
                          </div>
                          <div>
                            <span>Remaining:</span>
                            <span>${budget.remaining.toLocaleString()}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'reports' && (
                <div className="reports-section">
                  <h2>Financial Reports</h2>
                  <div className="report-cards">
                    <div className="report-card">
                      <h3>Income Statement</h3>
                      <p>View monthly income and expenses</p>
                      <button className="generate-btn">Generate</button>
                    </div>
                    <div className="report-card">
                      <h3>Balance Sheet</h3>
                      <p>Assets, liabilities and equity</p>
                      <button className="generate-btn">Generate</button>
                    </div>
                    <div className="report-card">
                      <h3>Cash Flow</h3>
                      <p>Track cash inflows and outflows</p>
                      <button className="generate-btn">Generate</button>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Finance;