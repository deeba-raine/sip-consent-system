function VaccineHistory() {
    return (
        <div className="form-section">
            <fieldset>
                <legend>Student Vaccination History</legend>
                <p>Please indicate which vaccines the student has previously received outside of the school program.</p>

                <ol>
                    <li>
                        <p className="vaccine-name">Meningococcal-ACYW Vaccine</p>
                        <div className="vaccine-question">
                            <label>Has the student received a Meningococcal vaccine?</label>
                            <div className="option-group">
                                <div className="option">
                                    <input type="radio" id="meningococcalHistoryYes" name="meningococcalHistory" value="yes" />
                                    <label htmlFor="meningococcalHistoryYes">Yes</label>
                                </div>
                                <div className="option">
                                    <input type="radio" id="meningococcalHistoryNo" name="meningococcalHistory" value="no" />
                                    <label htmlFor="meningococcalHistoryNo">No</label>
                                </div>
                            </div>
                        </div>
                        <div className="vaccine-details" id="meningococcalDetails">
                            <div className="form-field">
                                <label htmlFor="meningococcalBrand">Select Brand</label>
                                <select id="meningococcalBrand" name="meningococcalBrand">
                                    <option value="">-- Select Brand --</option>
                                    <option value="menactra">Menactra</option>
                                    <option value="menveo">MenveoTM</option>
                                    <option value="menquadfi">MenQuadfi</option>
                                    <option value="nimenrix">Nimenrix</option>
                                    <option value="unknown">Unknown</option>
                                </select>
                            </div>
                            <div className="form-field">
                                <label htmlFor="meningococcalDate">Date Received</label>
                                <input type="date" id="meningococcalDate" name="meningococcalDate" />
                            </div>
                        </div>
                    </li>

                    <li>
                        <p className="vaccine-name">Human Papillomavirus (HPV) Vaccine — 2 or 3 dose series</p>
                        <div className="vaccine-question">
                            <label>Has the student received an HPV vaccine?</label>
                            <div className="option-group">
                                <div className="option">
                                    <input type="radio" id="hpvHistoryYes" name="hpvHistory" value="yes" />
                                    <label htmlFor="hpvHistoryYes">Yes</label>
                                </div>
                                <div className="option">
                                    <input type="radio" id="hpvHistoryNo" name="hpvHistory" value="no" />
                                    <label htmlFor="hpvHistoryNo">No</label>
                                </div>
                            </div>
                        </div>
                        <div className="vaccine-details" id="hpvDetails">
                            <div className="form-field">
                                <label htmlFor="hpvBrand">Select Brand</label>
                                <select id="hpvBrand" name="hpvBrand">
                                    <option value="">-- Select Brand --</option>
                                    <option value="gardasil">Gardasil</option>
                                    <option value="gardasil_9">Gardasil-9</option>
                                    <option value="cervarix">Cervarix</option>
                                    <option value="unknown">Unknown</option>
                                </select>
                            </div>
                            <div className="form-field">
                                <label htmlFor="hpvDate">Date Received</label>
                                <input type="date" id="hpvDate" name="hpvDate" />
                            </div>
                        </div>
                    </li>

                    <li>
                        <p className="vaccine-name">Hepatitis B Vaccine — 2, 3 or 4 dose series</p>
                        <div className="vaccine-question">
                            <label>Has the student received a Hepatitis B vaccine?</label>
                            <div className="option-group">
                                <div className="option">
                                    <input type="radio" id="hepBHistoryYes" name="hepBHistory" value="yes" />
                                    <label htmlFor="hepBHistoryYes">Yes</label>
                                </div>
                                <div className="option">
                                    <input type="radio" id="hepBHistoryNo" name="hepBHistory" value="no" />
                                    <label htmlFor="hepBHistoryNo">No</label>
                                </div>
                            </div>
                        </div>
                        <div className="vaccine-details" id="hepBDetails">
                            <div className="form-field">
                                <label htmlFor="hepBBrand">Select Brand</label>
                                <select id="hepBBrand" name="hepBBrand">
                                    <option value="">-- Select Brand --</option>
                                    <option value="engerix">Engerix</option>
                                    <option value="recombivax_hb">Recombivax-HB</option>
                                    <option value="twinrix">Twinrix</option>
                                    <option value="pediarix">Pediarix</option>
                                    <option value="unknown">Unknown</option>
                                </select>
                            </div>
                            <div className="form-field">
                                <label htmlFor="hepBDate">Date Received</label>
                                <input type="date" id="hepBDate" name="hepBDate" />
                            </div>
                        </div>
                    </li>
                </ol>
            </fieldset>
        </div>
    );
}

export default VaccineHistory;