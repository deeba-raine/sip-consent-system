function ConsentForVaccination({ data, handleChange }) {
    return (
        <div className="form-section">
            <fieldset>
                <legend>Consent for Vaccination</legend>

                <p>
                    Please read each vaccine description carefully and provide
                    your consent decision for each vaccine below.
                </p>

                <p>
                    <span className="note-label">Note:</span> Consent is required
                    for each vaccine separately. You may consent to some and decline others.
                </p>

                <ul>

                    {/* Meningococcal */}
                    <li>
                        <p>Meningococcal Vaccine (1 dose)</p>

                        <div className="option-group">

                            <div className="option">
                                <input type="radio" id="meningococcalYes" name="meningococcal" value="yes" checked={data.meningococcal === "yes"} onChange={handleChange} />
                                <label htmlFor="meningococcalYes">Yes</label>
                            </div>

                            <div className="option">
                                <input type="radio" id="meningococcalNo" name="meningococcal" value="no" checked={data.meningococcal === "no"} onChange={handleChange} />
                                <label htmlFor="meningococcalNo">No</label>
                            </div>

                        </div>
                    </li>


                    {/* HPV */}
                    <li>
                        <p>Human Papillomavirus (HPV) Vaccine (2 or 3 doses)</p>

                        <div className="option-group">

                            <div className="option">
                                <input type="radio" id="hpvYes" name="hpv" value="yes" checked={data.hpv === "yes"} onChange={handleChange} />
                                <label htmlFor="hpvYes">Yes</label>
                            </div>

                            <div className="option">
                                <input type="radio" id="hpvNo" name="hpv" value="no" checked={data.hpv === "no"} onChange={handleChange} />
                                <label htmlFor="hpvNo">No</label>
                            </div>

                        </div>
                    </li>


                    {/* Hepatitis B */}
                    <li>
                        <p>Hepatitis B Vaccine (2 or 3 doses)</p>

                        <div className="option-group">

                            <div className="option">
                                <input type="radio" id="hepBYes" name="hepatitisB" value="yes" checked={data.hepatitisB === "yes"} onChange={handleChange} />
                                <label htmlFor="hepBYes">Yes</label>
                            </div>

                            <div className="option">
                                <input type="radio" id="hepBNo" name="hepatitisB" value="no" checked={data.hepatitisB === "no"} onChange={handleChange} />
                                <label htmlFor="hepBNo">No</label>
                            </div>

                        </div>
                    </li>

                </ul>

            </fieldset>
        </div>
    );
}

export default ConsentForVaccination;