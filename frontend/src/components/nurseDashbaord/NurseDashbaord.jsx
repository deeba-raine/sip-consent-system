import { useState } from 'react'
import './nurse-dashboard.css'
import Assessment from './Assessment'
import StudentDetails from './StudentDetails'
import StudentRecords from './StudentRecords'

const sampleStudents = [
  {
    id: 1,
    first_name: 'Emma',
    last_name: 'Johnson',
    dob: '2015-05-10',
    student_class: '5A',
    created_at: '2026-10-03',
    gender: 'Female',
    school: 'Bowling Green Elementary',
    grade: '5',
    teacher: 'Ms. Smith',
    guardian_phone: '(270) 555-0142',
    vaccine_history: [],
    health_history: [],
    vaccine_consent: [],
    parent_declaration: {
      relationship: 'Parent',
      parent_first_name: 'Sarah',
      parent_last_name: 'Johnson',
      email: 'sarah.johnson@example.com',
      phone: '(270) 555-0142',
      signature: 'Sarah Johnson',
      consent_date: '2026-10-03',
      confirmed_accuracy: true,
    },
  },
]

function NurseDashboard() {
  const [students] = useState(sampleStudents)
  const [selectedStudent, setSelectedStudent] = useState(null)
  const [assessmentStudent, setAssessmentStudent] = useState(null)

  return (
    <div className="app">
      <aside className="sidebar">
        <p className="program-title">School Immunization Consent Program</p>
        <nav className="sidebar-nav">
            
         
          <button className="nav-item active">📊 Dashboard</button>
          
          <div className="nav-section-label">Clinic Day</div>
          <button className="nav-item">🏥 Today&apos;s Clinic</button>
          <button className="nav-item">📋 Add Assessment</button>
          <div className="nav-section-label">Records</div>
          <button className="nav-item">✍️ Manual Entry</button>
        </nav>

        <div className="sidebar-user">
          <div className="user-avatar">SJ</div>
          <div className="user-info">
            <div className="name">Sarah Johnson</div>
            <div className="role">Public Health Nurse</div>
          </div>
          <button className="logout-btn" title="Logout">⏻</button>
        </div>
      </aside>

      <div className="main-content">
        <header className="topbar">
          <div className="topbar-title">Nurse Portal</div>
          <div className="topbar-right">
            <span className="clinic-badge">● Clinic Active</span>
            <span className="today-date">October 3, 2026</span>
          </div>
        </header>

        <main className="nurse-main">
          {assessmentStudent ? (
            <Assessment
              student={assessmentStudent}
              onBack={() => setAssessmentStudent(null)}
            />
          ) : selectedStudent ? (
            <StudentDetails
              student={selectedStudent}
              onBack={() => setSelectedStudent(null)}
            />
          ) : (
            <>
              <div className="stats-grid">
                <div className="stat-card">
                  <span className="stat-label">Total Consents</span>
                  <strong className="stat-value">{students.length}</strong>
                  <span className="stat-sub">Current records</span>
                </div>
                <div className="stat-card green">
                  <span className="stat-label">Submitted</span>
                  <strong className="stat-value">{students.length}</strong>
                  <span className="stat-sub">Ready for review</span>
                </div>
                <div className="stat-card gold">
                  <span className="stat-label">Pending</span>
                  <strong className="stat-value">0</strong>
                  <span className="stat-sub">Awaiting submission</span>
                </div>
                <div className="stat-card red">
                  <span className="stat-label">Assessed Today</span>
                  <strong className="stat-value">0</strong>
                  <span className="stat-sub">Clinic assessments</span>
                </div>
              </div>
              <StudentRecords
                students={students}
                onSelect={setSelectedStudent}
                onAssess={setAssessmentStudent}
              />
            </>
          )}
        </main>
      </div>
    </div>
  )
}

export default NurseDashboard
