function ConsentDeclaration() {
    return (
        <div className="form-section">
            <fieldset>
                <legend>Consent Declaration</legend>

                <div className="form-field">
                    <label htmlFor="relationshipToStudent">Relationship to Student</label>
                    <select id="relationshipToStudent" name="relationshipToStudent" required>
                        <option value="">-- Select --</option>
                        <option value="parent">Parent</option>
                        <option value="legal_guardian">Legal Guardian</option>
                    </select>
                </div>

                <div className="form-field">
                    <label htmlFor="parentFirstName">First Name</label>
                    <input type="text" id="parentFirstName" name="parentFirstName" required />
                </div>

                <div className="form-field">
                    <label htmlFor="parentLastName">Last Name</label>
                    <input type="text" id="parentLastName" name="parentLastName" required />
                </div>

                <div className="form-field">
                    <label htmlFor="parentEmail">Email</label>
                    <input type="email" id="parentEmail" name="parentEmail" required />
                </div>

                <div className="form-field">
                    <label htmlFor="parentPhoneDeclaration">Phone Number</label>
                    <input type="tel" id="parentPhoneDeclaration" name="parentPhoneDeclaration" maxLength="10" required />
                </div>

                <div className="form-field">
                    <label htmlFor="signature">Electronic Signature (type your full name)</label>
                    <input type="text" id="signature" name="signature" placeholder="Type your full name" required />
                </div>

                <div className="form-field">
                    <label htmlFor="consentDate">Date</label>
                    <input type="date" id="consentDate" name="consentDate" required />
                </div>

                <div className="option">
                    <input type="checkbox" id="confirmAccuracy" name="confirmAccuracy" required />
                    <label htmlFor="confirmAccuracy">I confirm that the information provided is accurate and complete to the best of my knowledge.</label>
                </div>
            </fieldset>
        </div>
    );
}

export default ConsentDeclaration;