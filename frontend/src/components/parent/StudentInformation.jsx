function StudentInformation({ data, handleChange }) {
    return (
        <div className="form-section">
            <fieldset>
                <legend>Student Information</legend>

                <div className="form-field">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" name="lastName" value={data.lastName} onChange={handleChange} required />
                </div>

                <div className="form-field">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" name="firstName" value={data.firstName} onChange={handleChange} required />
                </div>

                <div className="form-field">
                    <label htmlFor="cardNumber">ID Card</label>
                    <input type="text" id="cardNumber" name="cardNumber" value={data.cardNumber} onChange={handleChange} />
                </div>

                <div className="nested-fieldset">
                    <legend>Gender</legend>
                    <div className="option-group">
                        <div className="option">
                            <input type="radio" id="male" name="gender" value="male" checked={data.gender === "male"} onChange={handleChange} />
                            <label htmlFor="male">Male</label>
                        </div>
                        <div className="option">
                            <input type="radio" id="female" name="gender" value="female" checked={data.gender === "female"} onChange={handleChange} />
                            <label htmlFor="female">Female</label>
                        </div>
                    </div>
                </div>

                <div className="form-field">
                    <label htmlFor="dob">Date of Birth</label>
                    <input type="date" id="dob" name="dob" value={data.dob} onChange={handleChange} required />
                </div>

                <div className="form-field">
                    <label htmlFor="school">School</label>
                    <input type="text" id="school" name="school" list="schools" value={data.school} onChange={handleChange} />
                    <datalist id="schools">
                        <option value="Harvard University" />
                        <option value="Stanford University" />
                        <option value="Massachusetts Institute of Technology" />
                        <option value="University of Toronto" />
                        <option value="Western Kentucky University" />
                    </datalist>
                </div>

                <div className="form-field">
                    <label htmlFor="grade">Grade</label>
                    <select id="grade" name="grade" value={data.grade} onChange={handleChange}>
                        <option value="">-- Select Grade --</option>
                        <option value="7">Grade 7</option>
                        <option value="8">Grade 8</option>
                    </select>
                </div>

                <div className="form-field">
                    <label htmlFor="studentClass">Class</label>
                    <input type="text" id="studentClass" name="studentClass" value={data.studentClass} onChange={handleChange} />
                </div>

                <div className="form-field">
                    <label htmlFor="teacher">Teacher</label>
                    <input type="text" id="teacher" name="teacher" value={data.teacher} onChange={handleChange} />
                </div>

                <div className="form-field">
                    <label htmlFor="guardianPhone">Parent/Legal Guardian Phone</label>
                    <input type="tel" id="guardianPhone" name="guardianPhone" maxLength="10" value={data.guardianPhone} onChange={handleChange} />
                </div>
            </fieldset>
        </div>
    );
}

export default StudentInformation;