function StudentInformation() {
    return (
        <div className="form-section">
            <fieldset>
                <legend>Student Information</legend>

                <div className="form-field">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" name="lastName" required />
                </div>

                <div className="form-field">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" name="firstName" required />
                </div>

                <div className="form-field">
                    <label htmlFor="cardNumber">ID Card</label>
                    <input type="text" id="cardNumber" name="cardNumber" />
                </div>

                <div className="nested-fieldset">
                    <legend>Gender</legend>
                    <div className="option-group">
                        <div className="option">
                            <input type="radio" id="male" name="gender" value="male" required />
                            <label htmlFor="male">Male</label>
                        </div>
                        <div className="option">
                            <input type="radio" id="female" name="gender" value="female" />
                            <label htmlFor="female">Female</label>
                        </div>
                    </div>
                </div>

                <div className="form-field">
                    <label htmlFor="dob">Date of Birth</label>
                    <input type="date" id="dob" name="dob" required />
                </div>

                <div className="form-field">
                    <label htmlFor="school">School</label>
                    <input type="text" id="school" name="school" list="schools" />
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
                    <select id="grade" name="grade">
                        <option value="">-- Select Grade --</option>
                        <option value="7">Grade 7</option>
                        <option value="8">Grade 8</option>
                    </select>
                </div>

                <div className="form-field">
                    <label htmlFor="studentClass">Class</label>
                    <input type="text" id="studentClass" name="studentClass" />
                </div>

                <div className="form-field">
                    <label htmlFor="teacher">Teacher</label>
                    <input type="text" id="teacher" name="teacher" />
                </div>

                <div className="form-field">
                    <label htmlFor="guardianPhone">Parent/Legal Guardian Phone</label>
                    <input type="tel" id="guardianPhone" name="guardianPhone" maxLength="10" />
                </div>
            </fieldset>
        </div>
    );
}

export default StudentInformation;