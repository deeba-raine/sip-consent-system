import './assessment.css'

function Assessment({ student, onBack }) {
  return (
    <section className="assessment-card">
      <div className="assessment-header">
        <div>
          <p className="nurse-label">CLINIC ASSESSMENT</p>
          <h2>{student.first_name} {student.last_name}</h2>
          <p className="assessment-student">
            Class: {student.student_class || 'Not provided'}
          </p>
        </div>
        <button className="nurse-button secondary" type="button" onClick={onBack}>
          Back to records
        </button>
      </div>

      <form
        className="assessment-form"
        onSubmit={(event) => event.preventDefault()}
      >
        <label>
          Vaccine administered
          <select required defaultValue="">
            <option value="" disabled>Select a vaccine</option>
            <option>Meningococcal</option>
            <option>HPV</option>
            <option>Hepatitis B</option>
          </select>
        </label>

        <label>
          Date administered
          <input type="date" required />
        </label>

        <label>
          Dose number
          <input type="number" min="1" placeholder="e.g. 1" required />
        </label>

        <label>
          Notes
          <textarea rows="4" placeholder="Add clinic notes" />
        </label>

        <button className="assess-submit" type="submit">
          Save assessment
        </button>
      </form>
    </section>
  )
}

export default Assessment
