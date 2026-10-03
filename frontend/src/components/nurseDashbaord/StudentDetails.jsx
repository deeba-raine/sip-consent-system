function formatDate(value) {
  return value ? new Date(value).toLocaleDateString() : 'Not provided'
}

function displayValue(value) {
  return value === null || value === undefined || value === ''
    ? 'Not provided'
    : String(value)
}

function DetailSection({ title, children }) {
  return (
    <section className="detail-section">
      <h3>{title}</h3>
      <div className="detail-section-body">{children}</div>
    </section>
  )
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
  )
}

function StudentDetails({ student, onBack }) {
  return (
    <section className="nurse-card">
      <div className="nurse-card-header">
        <div>
          <p className="nurse-label">STUDENT DETAILS</p>
          <h2>{student.first_name} {student.last_name}</h2>
        </div>
        <button className="nurse-button secondary" onClick={onBack}>
          Back to records
        </button>
      </div>

      <div className="detail-sections">
        <DetailSection title="Student information">
          <DetailGrid fields={[
            ['First name', student.first_name],
            ['Last name', student.last_name],
            ['Date of birth', formatDate(student.dob)],
            ['Gender', student.gender],
            ['School', student.school],
            ['Grade', student.grade],
            ['Class', student.student_class],
            ['Teacher', student.teacher],
            ['ID card', student.card_number],
            ['Guardian phone', student.guardian_phone],
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
                <strong>{item.vaccine}</strong>
                <span>{displayValue(item.consent)}</span>
              </div>
            ))}
            {!student.vaccine_consent?.length && <p>Not provided</p>}
          </div>
        </DetailSection>

        <DetailSection title="Parent declaration">
          <DetailGrid fields={[
            ['Relationship', student.parent_declaration?.relationship],
            ['Parent first name', student.parent_declaration?.parent_first_name],
            ['Parent last name', student.parent_declaration?.parent_last_name],
            ['Email', student.parent_declaration?.email],
            ['Phone', student.parent_declaration?.phone],
            ['Signature', student.parent_declaration?.signature],
            ['Consent date', formatDate(student.parent_declaration?.consent_date)],
            ['Confirmed accuracy', student.parent_declaration?.confirmed_accuracy ? 'Yes' : 'No'],
          ]} />
        </DetailSection>
      </div>

      <p className="submitted-note">Submitted {formatDate(student.created_at)}</p>
    </section>
  )
}

export default StudentDetails
