import React, { useState, useEffect } from 'react';
import { Users, DollarSign, Calendar, Settings, Bell, Search, Clock, Award, ShieldCheck, CheckCircle2 } from 'lucide-react';

const employeeList = [
  { id: 1, name: 'Karthik Subramanian', role: 'Lead Software Engineer • Chennai, OMR', dept: 'Engineering', meta: 'Started Sept 15, 2026', status: 'Active', avatar: 'KS', color: 'blue' },
  { id: 2, name: 'Priya Natarajan', role: 'Product Designer • Coimbatore, TN', dept: 'Design', meta: 'Tax Forms & Bank Verified', status: 'Active', avatar: 'PN', color: 'green' },
  { id: 3, name: 'Anand Selvam', role: 'Customer Operations Lead • Bengaluru, KA', dept: 'Support', meta: 'Direct Deposit Set Up', status: 'Active', avatar: 'AS', color: 'purple' },
  { id: 4, name: 'Divya Ramachandran', role: 'Senior Financial Analyst • Chennai, Guindy', dept: 'Finance', meta: 'Benefits Enrolled', status: 'Active', avatar: 'DR', color: 'blue' },
  { id: 5, name: 'Senthil Kumar', role: 'DevOps & Cloud Engineer • Madurai, TN', dept: 'Engineering', meta: 'Onboarding Checklist (3/4)', status: 'Onboarding', avatar: 'SK', color: 'green' }
];

const Hero = () => {
  const [activeTab, setActiveTab] = useState('directory');
  const [searchQuery, setSearchQuery] = useState('');
  const [leaveStatus, setLeaveStatus] = useState({ 1: false, 2: false });

  useEffect(() => {
    const timer = setTimeout(() => {
      document.querySelectorAll('.hero-anim').forEach((el) => el.classList.add('is-visible'));
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const filteredEmployees = employeeList.filter((emp) =>
    emp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    emp.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
    emp.dept.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleLeaveApproval = (id) => {
    setLeaveStatus((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-badge hero-anim fade-in-up">Human Resource Management System</div>
        <h1 className="hero-title hero-anim fade-in-up">All your HR tasks, payroll, and team records in one place.</h1>
        <p className="hero-subtitle hero-anim fade-in-up delay-1">
          Calculate accurate payroll taxes, track daily attendance, manage employee records, and approve time-off requests with PeopleDesk.
        </p>
        <div className="hero-cta hero-anim fade-in-up delay-2">
          <a href="#pricing" className="btn btn-primary btn-large">Start free 14-day trial</a>
          <a href="#interactive-preview" className="btn btn-secondary btn-large">View live demo &gt;</a>
        </div>
      </div>
      
      <div className="hero-visual hero-anim fade-in-up delay-3">
         <div className="dashboard-mockup">
            {/* Interactive Sidebar */}
            <div className="dash-sidebar">
                <div className="dash-logo">PeopleDesk</div>
                <div className="dash-nav">
                    <button
                      type="button"
                      className={`dash-nav-item ${activeTab === 'directory' ? 'active' : ''}`}
                      onClick={() => setActiveTab('directory')}
                      style={{ background: activeTab === 'directory' ? '#161822' : 'transparent', border: 'none', width: '100%', textAlign: 'left', cursor: 'pointer', fontFamily: 'inherit' }}
                    >
                      <Users size={16} /> Directory
                    </button>
                    <button
                      type="button"
                      className={`dash-nav-item ${activeTab === 'payroll' ? 'active' : ''}`}
                      onClick={() => setActiveTab('payroll')}
                      style={{ background: activeTab === 'payroll' ? '#161822' : 'transparent', border: 'none', width: '100%', textAlign: 'left', cursor: 'pointer', fontFamily: 'inherit' }}
                    >
                      <DollarSign size={16} /> Payroll &amp; Tax
                    </button>
                    <button
                      type="button"
                      className={`dash-nav-item ${activeTab === 'attendance' ? 'active' : ''}`}
                      onClick={() => setActiveTab('attendance')}
                      style={{ background: activeTab === 'attendance' ? '#161822' : 'transparent', border: 'none', width: '100%', textAlign: 'left', cursor: 'pointer', fontFamily: 'inherit' }}
                    >
                      <Clock size={16} /> Attendance
                    </button>
                    <button
                      type="button"
                      className={`dash-nav-item ${activeTab === 'leave' ? 'active' : ''}`}
                      onClick={() => setActiveTab('leave')}
                      style={{ background: activeTab === 'leave' ? '#161822' : 'transparent', border: 'none', width: '100%', textAlign: 'left', cursor: 'pointer', fontFamily: 'inherit' }}
                    >
                      <Calendar size={16} /> Leave (PTO)
                    </button>
                    <button
                      type="button"
                      className={`dash-nav-item ${activeTab === 'performance' ? 'active' : ''}`}
                      onClick={() => setActiveTab('performance')}
                      style={{ background: activeTab === 'performance' ? '#161822' : 'transparent', border: 'none', width: '100%', textAlign: 'left', cursor: 'pointer', fontFamily: 'inherit' }}
                    >
                      <Award size={16} /> Reviews
                    </button>
                    <button
                      type="button"
                      className="dash-nav-item"
                      style={{ background: 'transparent', border: 'none', width: '100%', textAlign: 'left', cursor: 'pointer', fontFamily: 'inherit' }}
                    >
                      <Settings size={16} /> Settings
                    </button>
                </div>
                <div className="sidebar-footer">
                  <div className="compliance-tag">
                    <ShieldCheck size={14} /> SOC 2 Type II Certified
                  </div>
                </div>
            </div>

            {/* Main Interactive Screen */}
            <div className="dash-main">
                <div className="dash-header">
                    <div className="dash-search">
                      <Search size={14} />
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search by name, role, or team..."
                        style={{
                          background: 'transparent',
                          border: 'none',
                          outline: 'none',
                          color: '#fff',
                          fontSize: '0.8rem',
                          fontFamily: 'inherit',
                          width: '100%'
                        }}
                      />
                    </div>
                    <div className="dash-profile">
                        <div className="org-indicator">Kaveri Tech Systems &bull; Chennai HQ &bull; 148 Staff</div>
                        <Bell size={16} />
                        <div className="avatar">MS</div>
                    </div>
                </div>

                <div className="dash-content">
                    {/* Key Stats Bar */}
                    <div className="dash-stats">
                        <div className="stat-card">
                            <div className="stat-title">Total Employees</div>
                            <div className="stat-value">148</div>
                            <div className="stat-trend positive">+4 joined this month</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-title">October Payroll</div>
                            <div className="stat-value">$184,200</div>
                            <div className="stat-trend">Direct Deposit Scheduled</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-title">Present Today</div>
                            <div className="stat-value">142</div>
                            <div className="stat-trend positive">6 employees on paid leave</div>
                        </div>
                    </div>

                    {/* Dynamic View Tab Body */}
                    <div className="dash-table-area">
                        {activeTab === 'directory' && (
                          <>
                            <div className="table-header-row">
                              <span className="table-title">
                                {searchQuery ? `Search Results (${filteredEmployees.length})` : 'Employee Directory'}
                              </span>
                              <span className="table-action" onClick={() => setSearchQuery('')}>
                                {searchQuery ? 'Clear Filter' : 'Full Team Directory →'}
                              </span>
                            </div>

                            {filteredEmployees.length === 0 ? (
                              <div style={{ padding: '1.5rem', textAlign: 'center', color: '#71717a', fontSize: '0.85rem' }}>
                                No employees found matching &quot;{searchQuery}&quot;
                              </div>
                            ) : (
                              filteredEmployees.slice(0, 3).map((emp) => (
                                <div key={emp.id} className="table-row">
                                  <div className="user-info">
                                    <div className={`avatar sm ${emp.color}`}>{emp.avatar}</div>
                                    <div>
                                      <div className="user-name">{emp.name}</div>
                                      <div className="user-role">{emp.role}</div>
                                    </div>
                                  </div>
                                  <div className="table-meta">{emp.meta}</div>
                                  <div className={`status ${emp.status.toLowerCase()}`}>{emp.status}</div>
                                </div>
                              ))
                            )}
                          </>
                        )}

                        {activeTab === 'payroll' && (
                          <>
                            <div className="table-header-row">
                              <span className="table-title">Semi-Monthly Pay Run (Oct 1 - Oct 15)</span>
                              <span className="table-action">Direct Deposit: Oct 15</span>
                            </div>
                            <div className="table-row">
                              <div className="user-info">
                                <div className="avatar sm blue">KS</div>
                                <div>
                                  <div className="user-name">Karthik Subramanian</div>
                                  <div className="user-role">Gross: $6,200.00 &bull; Taxes: -$1,450.00</div>
                                </div>
                              </div>
                              <div className="table-meta" style={{ color: '#10b981', fontWeight: 600 }}>Net $4,440.00</div>
                              <div className="status active">Direct Deposit</div>
                            </div>
                            <div className="table-row">
                              <div className="user-info">
                                <div className="avatar sm green">PN</div>
                                <div>
                                  <div className="user-name">Priya Natarajan</div>
                                  <div className="user-role">Gross: $5,900.00 &bull; Taxes: -$1,380.00</div>
                                </div>
                              </div>
                              <div className="table-meta" style={{ color: '#10b981', fontWeight: 600 }}>Net $4,225.00</div>
                              <div className="status active">Direct Deposit</div>
                            </div>
                            <div className="table-row">
                              <div className="user-info">
                                <div className="avatar sm purple">AS</div>
                                <div>
                                  <div className="user-name">Anand Selvam</div>
                                  <div className="user-role">Gross: $4,100.00 &bull; Taxes: -$960.00</div>
                                </div>
                              </div>
                              <div className="table-meta" style={{ color: '#10b981', fontWeight: 600 }}>Net $2,920.00</div>
                              <div className="status active">Direct Deposit</div>
                            </div>
                          </>
                        )}

                        {activeTab === 'attendance' && (
                          <>
                            <div className="table-header-row">
                              <span className="table-title">Today's Check-In Records</span>
                              <span className="table-action">Chennai &amp; Remote Staff</span>
                            </div>
                            <div className="table-row">
                              <div className="user-info">
                                <div className="avatar sm blue">KS</div>
                                <div>
                                  <div className="user-name">Karthik Subramanian</div>
                                  <div className="user-role">Chennai Tidel Park Campus &bull; Badge In</div>
                                </div>
                              </div>
                              <div className="table-meta">08:58 AM</div>
                              <div className="status active">On Time</div>
                            </div>
                            <div className="table-row">
                              <div className="user-info">
                                <div className="avatar sm green">PN</div>
                                <div>
                                  <div className="user-name">Priya Natarajan</div>
                                  <div className="user-role">Remote (Coimbatore) &bull; Web Check-In</div>
                                </div>
                              </div>
                              <div className="table-meta">09:02 AM</div>
                              <div className="status active">On Time</div>
                            </div>
                            <div className="table-row">
                              <div className="user-info">
                                <div className="avatar sm purple">AS</div>
                                <div>
                                  <div className="user-name">Anand Selvam</div>
                                  <div className="user-role">Guindy Tech Center &bull; Mobile Check-In</div>
                                </div>
                              </div>
                              <div className="table-meta">08:52 AM</div>
                              <div className="status active">On Time</div>
                            </div>
                          </>
                        )}

                        {activeTab === 'leave' && (
                          <>
                            <div className="table-header-row">
                              <span className="table-title">Pending Leave Requests</span>
                              <span className="table-action">Manager Approval Needed</span>
                            </div>
                            <div className="table-row">
                              <div className="user-info">
                                <div className="avatar sm blue">KS</div>
                                <div>
                                  <div className="user-name">Karthik Subramanian</div>
                                  <div className="user-role">Festival Leave &bull; Nov 14 - Nov 18 (5 days)</div>
                                </div>
                              </div>
                              <div className="table-meta">Balance: 12 days left</div>
                              <button
                                type="button"
                                onClick={() => toggleLeaveApproval(1)}
                                style={{
                                  background: leaveStatus[1] ? 'rgba(16, 185, 129, 0.12)' : 'rgba(59, 130, 246, 0.15)',
                                  color: leaveStatus[1] ? '#10b981' : '#60a5fa',
                                  border: '1px solid currentColor',
                                  borderRadius: '99px',
                                  padding: '0.2rem 0.6rem',
                                  fontSize: '0.7rem',
                                  cursor: 'pointer',
                                  fontWeight: 500,
                                  fontFamily: 'inherit'
                                }}
                              >
                                {leaveStatus[1] ? 'Approved ✓' : 'Approve Request'}
                              </button>
                            </div>
                            <div className="table-row">
                              <div className="user-info">
                                <div className="avatar sm green">PN</div>
                                <div>
                                  <div className="user-name">Priya Natarajan</div>
                                  <div className="user-role">Personal Leave &bull; Oct 24 (1 day)</div>
                                </div>
                              </div>
                              <div className="table-meta">Balance: 9 days left</div>
                              <button
                                type="button"
                                onClick={() => toggleLeaveApproval(2)}
                                style={{
                                  background: leaveStatus[2] ? 'rgba(16, 185, 129, 0.12)' : 'rgba(59, 130, 246, 0.15)',
                                  color: leaveStatus[2] ? '#10b981' : '#60a5fa',
                                  border: '1px solid currentColor',
                                  borderRadius: '99px',
                                  padding: '0.2rem 0.6rem',
                                  fontSize: '0.7rem',
                                  cursor: 'pointer',
                                  fontWeight: 500,
                                  fontFamily: 'inherit'
                                }}
                              >
                                {leaveStatus[2] ? 'Approved ✓' : 'Approve Request'}
                              </button>
                            </div>
                          </>
                        )}

                        {activeTab === 'performance' && (
                          <>
                            <div className="table-header-row">
                              <span className="table-title">Annual Performance Reviews</span>
                              <span className="table-action">Q3 Completed</span>
                            </div>
                            <div className="table-row">
                              <div className="user-info">
                                <div className="avatar sm blue">KS</div>
                                <div>
                                  <div className="user-name">Karthik Subramanian</div>
                                  <div className="user-role">Platform Architecture &bull; Self &amp; Manager Review</div>
                                </div>
                              </div>
                              <div className="table-meta">Rating: 4.8 / 5.0</div>
                              <div className="status active">Exceeds Expectations</div>
                            </div>
                            <div className="table-row">
                              <div className="user-info">
                                <div className="avatar sm green">PN</div>
                                <div>
                                  <div className="user-name">Priya Natarajan</div>
                                  <div className="user-role">Design System &bull; Peer Review Completed</div>
                                </div>
                              </div>
                              <div className="table-meta">Rating: 4.9 / 5.0</div>
                              <div className="status active">Exceeds Expectations</div>
                            </div>
                          </>
                        )}
                    </div>
                </div>
            </div>
         </div>
      </div>

      {/* Trust & Credibility Metrics Strip */}
      <div className="trust-strip hero-anim fade-in-up delay-3">
        <div className="trust-item">
          <span className="trust-num">1,400+</span>
          <span className="trust-label">Active Companies</span>
        </div>
        <div className="trust-divider"></div>
        <div className="trust-item">
          <span className="trust-num">99.8%</span>
          <span className="trust-label">On-Time Payroll Delivery</span>
        </div>
        <div className="trust-divider"></div>
        <div className="trust-item">
          <span className="trust-num">15 min</span>
          <span className="trust-label">Average Onboarding Time</span>
        </div>
        <div className="trust-divider"></div>
        <div className="trust-item">
          <span className="trust-num">50 States</span>
          <span className="trust-label">Full Tax Law Compliance</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
