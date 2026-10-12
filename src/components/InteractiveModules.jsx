import React, { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { CreditCard, Clock, Briefcase, Award, BarChart3, CheckCircle2, MapPin } from 'lucide-react';

const modulesData = [
  {
    id: 'payroll',
    title: 'Payroll & Tax',
    icon: CreditCard,
    badge: 'Accurate Tax Withholdings',
    description: 'Run company-wide payroll in a few clicks. The system calculates statutory tax withholdings, deducts benefits, and generates bank transfer files for on-time disbursement.',
    stats: [
      { label: 'Pay Period', value: 'Oct 01 - Oct 15, 2026' },
      { label: 'Total Net Payroll', value: '$184,200.00' },
      { label: 'Direct Deposits', value: '148 of 148 Verified' }
    ]
  },
  {
    id: 'attendance',
    title: 'Time & Attendance',
    icon: Clock,
    badge: 'Verified Clock-Ins',
    description: 'Track clock-ins, shift schedules, breaks, and overtime with web check-ins, mobile attendance, and manager timesheet approvals.',
    stats: [
      { label: 'Clocked In Today', value: '142 of 148 (96%)' },
      { label: 'On Paid Leave', value: '6 Employees' },
      { label: 'Average Punctuality', value: '99.1%' }
    ]
  },
  {
    id: 'recruiting',
    title: 'Job Openings & ATS',
    icon: Briefcase,
    badge: 'Candidate Pipeline',
    description: 'Post open roles across major job boards, review applicant resumes, and guide candidates through each interview stage in an organized pipeline.',
    stats: [
      { label: 'Open Positions', value: '8 Active Roles' },
      { label: 'Active Candidates', value: '54 in Review' },
      { label: 'Average Time-to-Hire', value: '18 Days' }
    ]
  },
  {
    id: 'performance',
    title: 'Performance Reviews',
    icon: Award,
    badge: 'Quarterly Reviews',
    description: 'Set company and team goals, conduct peer reviews, log manager one-on-ones, and track quarterly achievements across every department.',
    stats: [
      { label: 'Q3 Reviews Submitted', value: '96% Complete' },
      { label: 'Goals on Track', value: '91.5%' },
      { label: '1-on-1s Logged', value: '98% on Schedule' }
    ]
  },
  {
    id: 'analytics',
    title: 'Workforce Reports',
    icon: BarChart3,
    badge: 'Exportable Reports',
    description: 'Monitor headcount growth, retention rates, and payroll spending by department with clear charts that can be exported to CSV or PDF.',
    stats: [
      { label: 'Annual Retention', value: '96.2%' },
      { label: 'Open Positions Filled', value: '94%' },
      { label: 'Audit Readiness', value: '100% Compliant' }
    ]
  }
];

const InteractiveModules = () => {
  const [activeTab, setActiveTab] = useState('payroll');
  const [payrollProcessed, setPayrollProcessed] = useState(false);
  const addToRefs = useScrollReveal();

  const currentModule = modulesData.find((m) => m.id === activeTab) || modulesData[0];

  return (
    <section id="interactive-preview" className="interactive-section">
      <div className="section-header scroll-reveal" ref={addToRefs}>
        <div className="section-pill">Interactive Product Tour</div>
        <h2 className="apple-header">See how the platform works.</h2>
        <p className="section-desc">
          Click between modules below to explore how PeopleDesk handles payroll, attendance, hiring, and team reviews.
        </p>
      </div>

      <div className="module-tabs-wrapper scroll-reveal" ref={addToRefs}>
        <div className="module-tabs-bar">
          {modulesData.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                className={`module-tab-btn ${isActive ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <Icon size={18} />
                <span>{tab.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="module-preview-container scroll-reveal" ref={addToRefs}>
        <div className="preview-top-bar">
          <div className="preview-meta">
            <span className="preview-badge">{currentModule.badge}</span>
            <h3 className="preview-title">{currentModule.title}</h3>
          </div>
          <div className="preview-stats-row">
            {currentModule.stats.map((s, idx) => (
              <div key={idx} className="preview-stat-item">
                <span className="stat-label">{s.label}</span>
                <span className="stat-val">{s.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="preview-screen-body">
          {activeTab === 'payroll' && (
            <div className="mock-payroll-view">
              <div className="payroll-table-toolbar">
                <div className="toolbar-left">
                  <span className="batch-id">Pay Run #PR-2026-10A</span>
                  <span className="period-tag">Semi-Monthly (Oct 1 - Oct 15)</span>
                </div>
                <button
                  className={`btn ${payrollProcessed ? 'btn-success' : 'btn-primary'} btn-sm`}
                  onClick={() => setPayrollProcessed(!payrollProcessed)}
                >
                  {payrollProcessed ? <><CheckCircle2 size={16} /> Direct Deposit Sent</> : 'Approve & Run Payroll'}
                </button>
              </div>

              <div className="mock-table">
                <div className="mock-tr mock-th">
                  <span>Employee Name</span>
                  <span>Department &amp; Role</span>
                  <span>Gross Pay</span>
                  <span>Tax Withholdings</span>
                  <span>Benefits Deductions</span>
                  <span>Net Pay</span>
                  <span>Status</span>
                </div>
                <div className="mock-tr">
                  <span className="emp-cell"><strong>Deepa Krishnan</strong></span>
                  <span>Product Design Lead</span>
                  <span>$6,400.00</span>
                  <span>-$1,490.00</span>
                  <span>-$330.00</span>
                  <span className="emp-net">$4,580.00</span>
                  <span className="status active">Verified</span>
                </div>
                <div className="mock-tr">
                  <span className="emp-cell"><strong>Aravind Swaminathan</strong></span>
                  <span>Software Engineer</span>
                  <span>$5,850.00</span>
                  <span>-$1,360.00</span>
                  <span>-$290.00</span>
                  <span className="emp-net">$4,200.00</span>
                  <span className="status active">Verified</span>
                </div>
                <div className="mock-tr">
                  <span className="emp-cell"><strong>Kavitha Rajendran</strong></span>
                  <span>Marketing Manager</span>
                  <span>$5,200.00</span>
                  <span>-$1,210.00</span>
                  <span>-$260.00</span>
                  <span className="emp-net">$3,730.00</span>
                  <span className="status active">Verified</span>
                </div>
                <div className="mock-tr">
                  <span className="emp-cell"><strong>Manoj Kumar</strong></span>
                  <span>Operations Coordinator</span>
                  <span>$4,300.00</span>
                  <span>-$990.00</span>
                  <span>-$210.00</span>
                  <span className="emp-net">$3,100.00</span>
                  <span className="status active">Verified</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'attendance' && (
            <div className="mock-attendance-view">
              <div className="attendance-grid">
                <div className="punch-box">
                  <div className="punch-header">Chennai OMR Campus Clock-In Kiosk</div>
                  <div className="punch-clock">08:58:20 AM</div>
                  <div className="punch-location"><MapPin size={14} /> OMR IT Corridor, Chennai (Verified On-Site)</div>
                  <div className="punch-status-pill">Scheduled Shift: 09:00 AM - 05:30 PM &bull; On Time</div>
                </div>
                <div className="timesheet-summary">
                  <div className="ts-header">Weekly Timesheet Approvals (Engineering Team)</div>
                  <div className="ts-item">
                    <div>
                      <strong>Naveen Chandran</strong>
                      <div className="text-muted">40.0 hrs regular &bull; 2.5 hrs overtime</div>
                    </div>
                    <span className="status active">Approved</span>
                  </div>
                  <div className="ts-item">
                    <div>
                      <strong>Lavanya Pandian</strong>
                      <div className="text-muted">38.0 hrs regular &bull; 0 hrs overtime</div>
                    </div>
                    <span className="status active">Approved</span>
                  </div>
                  <div className="ts-item">
                    <div>
                      <strong>Dinesh Karthik</strong>
                      <div className="text-muted">40.0 hrs regular &bull; 1.0 hr overtime</div>
                    </div>
                    <span className="status onboarding">Pending Review</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'recruiting' && (
            <div className="mock-ats-view">
              <div className="kanban-pipeline">
                <div className="kanban-col">
                  <div className="col-title">New Applications (24)</div>
                  <div className="kanban-card">
                    <span className="role-tag">Senior Backend Dev</span>
                    <strong>Revathi Sridhar</strong>
                    <div className="card-sub">6 yrs experience &bull; Resume reviewed</div>
                  </div>
                  <div className="kanban-card">
                    <span className="role-tag">Product Designer</span>
                    <strong>Gokulnath Perumal</strong>
                    <div className="card-sub">Portfolio review completed</div>
                  </div>
                </div>
                <div className="kanban-col">
                  <div className="col-title">Technical Interview (6)</div>
                  <div className="kanban-card highlight">
                    <span className="role-tag">Staff Systems Engineer</span>
                    <strong>Suresh Kannan</strong>
                    <div className="card-sub">Coding assessment &bull; Passed (4/4)</div>
                  </div>
                </div>
                <div className="kanban-col">
                  <div className="col-title">Final Interview (2)</div>
                  <div className="kanban-card">
                    <span className="role-tag">Head of People</span>
                    <strong>Gayathri Ramanathan</strong>
                    <div className="card-sub">Culture interview with CEO scheduled</div>
                  </div>
                </div>
                <div className="kanban-col">
                  <div className="col-title">Offer Accepted (1)</div>
                  <div className="kanban-card success">
                    <span className="role-tag">DevOps Specialist</span>
                    <strong>Vasanth Kumar</strong>
                    <div className="card-sub">Offer signed &bull; Starts next Monday</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'performance' && (
            <div className="mock-performance-view">
              <div className="perf-grid">
                <h4>Q3 Team Goals &amp; Progress</h4>
                <div className="goal-item">
                  <div className="goal-info">
                    <span>Core Application Uptime (99.9%)</span>
                    <span>99.98%</span>
                  </div>
                  <div className="bar-bg"><div className="bar-fill" style={{width: '99%'}}></div></div>
                </div>
                <div className="goal-item">
                  <div className="goal-info">
                    <span>Annual Employee Retention (&gt; 90%)</span>
                    <span>95.4%</span>
                  </div>
                  <div className="bar-bg"><div className="bar-fill" style={{width: '95%'}}></div></div>
                </div>
                <div className="goal-item">
                  <div className="goal-info">
                    <span>Engineering Sprint Delivery Rate</span>
                    <span>91%</span>
                  </div>
                  <div className="bar-bg"><div className="bar-fill" style={{width: '91%'}}></div></div>
                </div>
              </div>
              <div className="perf-card">
                <h4>Peer Reviews &amp; Evaluations</h4>
                <div className="review-stat-row">
                  <div className="rev-box">
                    <span className="rev-num">96%</span>
                    <span className="rev-label">Reviews Completed</span>
                  </div>
                  <div className="rev-box">
                    <span className="rev-num">4.8</span>
                    <span className="rev-label">Average Team Rating</span>
                  </div>
                </div>
                <div className="feedback-snippet">
                  <em>&ldquo;Delivered the multi-region database migration two weeks ahead of schedule and led technical onboarding for three new engineers.&rdquo;</em>
                  <div className="snippet-author">&mdash; Annual Review Summary &bull; Murugesan P. (Engineering Director)</div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'analytics' && (
            <div className="mock-analytics-view">
              <div className="analytics-grid">
                <div className="analytics-card">
                  <div className="card-head">Headcount Growth (Last 6 Months)</div>
                  <div className="chart-preview-bars">
                    <div className="chart-col"><div className="bar" style={{height: '55%'}}></div><span>May</span></div>
                    <div className="chart-col"><div className="bar" style={{height: '65%'}}></div><span>Jun</span></div>
                    <div className="chart-col"><div className="bar" style={{height: '75%'}}></div><span>Jul</span></div>
                    <div className="chart-col"><div className="bar" style={{height: '82%'}}></div><span>Aug</span></div>
                    <div className="chart-col"><div className="bar" style={{height: '92%'}}></div><span>Sep</span></div>
                    <div className="chart-col"><div className="bar active" style={{height: '100%'}}></div><span>Oct</span></div>
                  </div>
                  <div className="analytics-footer-note">148 Total Staff &bull; +4 net new hires this month</div>
                </div>
                <div className="analytics-card">
                  <div className="card-head">Monthly Payroll by Department</div>
                  <div className="budget-breakdown">
                    <div className="budget-row">
                      <span>Engineering &amp; Product</span>
                      <span>42% &bull; $77.4k</span>
                    </div>
                    <div className="budget-row">
                      <span>Sales &amp; Marketing</span>
                      <span>28% &bull; $51.6k</span>
                    </div>
                    <div className="budget-row">
                      <span>Customer Support</span>
                      <span>18% &bull; $33.2k</span>
                    </div>
                    <div className="budget-row">
                      <span>Operations &amp; Admin</span>
                      <span>12% &bull; $22.0k</span>
                    </div>
                  </div>
                  <div className="analytics-footer-note">All records exportable to Excel / CSV / PDF</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default InteractiveModules;
