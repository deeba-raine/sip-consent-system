import { useEffect, useState } from "react";
import "./nurse.css";

function formatDate(value) {
  if (!value) return "Not provided";
  return new Date(value).toLocaleDateString();
}

function displayValue(value) {
  return value === null || value === undefined || value === "" ? "Not provided" : String(value);
}

function DetailSection({ title, children }) {
  return (
    <section className="detail-section">
      <h3>{title}</h3>
      <div className="detail-section-body">{children}</div>
    </section>
  );
}

function DetailGrid({ fields }) {
  return (
    <div className="detail-grid">
      {fields.map(([label, value]) => (
        <div className="student-detail" key={label}>
          <span>{label}</span>
          <strong>{displayValue(value)}</strong>
        </div>
      ))}
    </div>
  );
}

function StudentDetails({ student, onBack }) {
  return (
    <section className="nurse-card">
      <div className="nurse-card-header">
        <div>
          <p className="nurse-label">STUDENT DETAILS</p>
          <h2>{student.first_name} {student.last_name}</h2>
        </div>
        <button className="nurse-button secondary" onClick={onBack}>Back to records</button>
      </div>
      <div className="detail-sections">
        <DetailSection title="Student information">
          <DetailGrid fields={[
            ["First name", student.first_name], ["Last name", student.last_name],
            ["Date of birth", formatDate(student.dob)], ["Gender", student.gender],
            ["School", student.school], ["Grade", student.grade],
            ["Class", student.student_class], ["Teacher", student.teacher],
            ["ID card", student.card_number], ["Guardian phone", student.guardian_phone],
          ]} />
        </DetailSection>
        <DetailSection title="Vaccine history">
          <div className="detail-list">
            {(student.vaccine_history || []).map((item) => (
              <div className="detail-list-row" key={item.vaccine}>
                <strong>{item.vaccine}</strong>
                <span>Received: {displayValue(item.received)}</span>
                <span>Brand: {displayValue(item.brand)}</span>
                <span>Date: {formatDate(item.date_received)}</span>
              </div>
            ))}
            {!student.vaccine_history?.length && <p>Not provided</p>}
          </div>
        </DetailSection>
        <DetailSection title="Health history">
          <div className="detail-list">
            {(student.health_history || []).map((item) => (
              <div className="detail-list-row" key={item.question}>
                <strong>{item.question}</strong>
                <span>Answer: {displayValue(item.answer)}</span>
                <span>Details: {displayValue(item.details)}</span>
              </div>
            ))}
            {!student.health_history?.length && <p>Not provided</p>}
          </div>
        </DetailSection>
        <DetailSection title="Consent decisions">
          <div className="detail-list">
            {(student.vaccine_consent || []).map((item) => (
              <div className="detail-list-row" key={item.vaccine}>
                <strong>{item.vaccine}</strong><span>{displayValue(item.consent)}</span>
              </div>
            ))}
            {!student.vaccine_consent?.length && <p>Not provided</p>}
          </div>
        </DetailSection>
        <DetailSection title="Parent declaration">
          <DetailGrid fields={[
            ["Relationship", student.parent_declaration?.relationship],
            ["Parent first name", student.parent_declaration?.parent_first_name],
            ["Parent last name", student.parent_declaration?.parent_last_name],
            ["Email", student.parent_declaration?.email],
            ["Phone", student.parent_declaration?.phone],
            ["Signature", student.parent_declaration?.signature],
            ["Consent date", formatDate(student.parent_declaration?.consent_date)],
            ["Confirmed accuracy", student.parent_declaration?.confirmed_accuracy ? "Yes" : "No"],
          ]} />
        </DetailSection>
      </div>
      <p className="submitted-note">Submitted {formatDate(student.created_at)}</p>
    </section>
  );
}

function StudentRecords({ students, onSelect }) {
  return (
    <section className="nurse-card">
      <div className="nurse-card-header">
        <div>
          <p className="nurse-label">PARENT SUBMISSIONS</p>
          <h2>Consent records</h2>
        </div>
        <span className="record-count">{students.length} record{students.length === 1 ? "" : "s"}</span>
      </div>
      {students.length === 0 ? (
        <p className="empty-records">No consent forms have been submitted yet.</p>
      ) : (
        <div className="record-table-wrap">
          <table className="record-table">
            <thead>
              <tr>
                <th>Confirmation #</th>
                <th>Student Name</th>
                <th>Date of Birth</th>
                <th>Class</th>
                <th>Status</th>
                <th>Submitted</th>
                <th>Assessment</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id}>
                  <td className="record-id">CNF-{student.id}</td>
                  <td className="record-name">{student.last_name}, {student.first_name}</td>
                  <td>{formatDate(student.dob)}</td>
                  <td>{student.student_class || "—"}</td>
                  <td><span className="record-status">Submitted</span></td>
                  <td>{formatDate(student.created_at)}</td>
                  <td>—</td>
                  <td>
                    <button className="view-record" onClick={() => onSelect(student)}>View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}

export default function NursePortal() {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/api/consent")
      .then((response) => {
        if (!response.ok) throw new Error("Could not load consent records.");
        return response.json();
      })
      .then(setStudents)
      .catch((loadError) => {
        console.error("Error loading consent records:", loadError);
        setError("Could not load records. Make sure the backend is running.");
      });
  }, []);

  return (
    <div className="nurse-portal">
      <header className="nurse-header">
        <div>
          <p className="nurse-label">BOWLING GREEN PUBLIC SCHOOLS</p>
          <h1>Nurse Portal</h1>
        </div>
        <span>School Immunization Program</span>
      </header>
      <main className="nurse-main">
        {error && <p className="nurse-message error">{error}</p>}
        {selectedStudent ? (
          <StudentDetails student={selectedStudent} onBack={() => setSelectedStudent(null)} />
        ) : (
          <StudentRecords students={students} onSelect={setSelectedStudent} />
        )}
      </main>
    </div>
  );
}
