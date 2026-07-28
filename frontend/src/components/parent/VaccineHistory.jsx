function VaccineHistory({ data }) {
    return (
        <div className="form-section">
            <fieldset>
                <legend>Student Vaccination History</legend>

                <p>
                    Please indicate which vaccines the student has previously
                    received outside of the school program.
                </p>

                <ol>

                    {/* Meningococcal */}
                    <li>
                        <p className="vaccine-name">
                            Meningococcal-ACYW Vaccine
                        </p>

                        <div className="vaccine-question">
                            <label>
                                Has the student received a Meningococcal vaccine?
                            </label>

                            <div className="option-group">

                                <div className="option">
                                    <input
                                        type="radio"
                                        id="meningococcalHistoryYes"
                                        name="meningococcal"
                                        value="yes"
                                        checked={
                                            data.meningococcal.received === "yes"
                                        }
                                    />

                                    <label htmlFor="meningococcalHistoryYes">
                                        Yes
                                    </label>
                                </div>


                                <div className="option">
                                    <input
                                        type="radio"
                                        id="meningococcalHistoryNo"
                                        name="meningococcal"
                                        value="no"
                                        checked={
                                            data.meningococcal.received === "no"
                                        }
                                    />

                                    <label htmlFor="meningococcalHistoryNo">
                                        No
                                    </label>
                                </div>

                            </div>
                        </div>


                        <div className="vaccine-details">

                            <div className="form-field">

                                <label htmlFor="meningococcalBrand">
                                    Select Brand
                                </label>

                                <select
                                    id="meningococcalBrand"
                                    name="meningococcalBrand"
                                    value={data.meningococcal.brand}
                                >
                                    <option value="">
                                        -- Select Brand --
                                    </option>
                                    <option value="menactra">
                                        Menactra
                                    </option>
                                    <option value="menveo">
                                        MenveoTM
                                    </option>
                                    <option value="menquadfi">
                                        MenQuadfi
                                    </option>
                                    <option value="nimenrix">
                                        Nimenrix
                                    </option>
                                    <option value="unknown">
                                        Unknown
                                    </option>
                                </select>

                            </div>


                            <div className="form-field">

                                <label htmlFor="meningococcalDate">
                                    Date Received
                                </label>

                                <input
                                    type="date"
                                    id="meningococcalDate"
                                    name="meningococcalDate"
                                    value={data.meningococcal.dateReceived}
                                />

                            </div>

                        </div>

                    </li>




                    {/* HPV */}
                    <li>

                        <p className="vaccine-name">
                            Human Papillomavirus (HPV) Vaccine — 2 or 3 dose series
                        </p>


                        <div className="vaccine-question">

                            <label>
                                Has the student received an HPV vaccine?
                            </label>


                            <div className="option-group">

                                <div className="option">

                                    <input
                                        type="radio"
                                        id="hpvHistoryYes"
                                        name="hpv"
                                        value="yes"
                                        checked={data.hpv.received === "yes"}
                                    />

                                    <label htmlFor="hpvHistoryYes">
                                        Yes
                                    </label>

                                </div>


                                <div className="option">

                                    <input
                                        type="radio"
                                        id="hpvHistoryNo"
                                        name="hpv"
                                        value="no"
                                        checked={data.hpv.received === "no"}
                                    />

                                    <label htmlFor="hpvHistoryNo">
                                        No
                                    </label>

                                </div>

                            </div>

                        </div>


                        <div className="vaccine-details">

                            <div className="form-field">

                                <label htmlFor="hpvBrand">
                                    Select Brand
                                </label>


                                <select
                                    id="hpvBrand"
                                    name="hpvBrand"
                                    value={data.hpv.brand}
                                >

                                    <option value="">
                                        -- Select Brand --
                                    </option>

                                    <option value="gardasil">
                                        Gardasil
                                    </option>

                                    <option value="gardasil_9">
                                        Gardasil-9
                                    </option>

                                    <option value="cervarix">
                                        Cervarix
                                    </option>

                                    <option value="unknown">
                                        Unknown
                                    </option>

                                </select>

                            </div>


                            <div className="form-field">

                                <label htmlFor="hpvDate">
                                    Date Received
                                </label>

                                <input
                                    type="date"
                                    id="hpvDate"
                                    name="hpvDate"
                                    value={data.hpv.dateReceived}
                                />

                            </div>

                        </div>

                    </li>




                    {/* Hepatitis B */}
                    <li>

                        <p className="vaccine-name">
                            Hepatitis B Vaccine — 2, 3 or 4 dose series
                        </p>


                        <div className="vaccine-question">

                            <label>
                                Has the student received a Hepatitis B vaccine?
                            </label>


                            <div className="option-group">

                                <div className="option">

                                    <input
                                        type="radio"
                                        id="hepBHistoryYes"
                                        name="hepatitisB"
                                        value="yes"
                                        checked={
                                            data.hepatitisB.received === "yes"
                                        }
                                    />

                                    <label htmlFor="hepBHistoryYes">
                                        Yes
                                    </label>

                                </div>


                                <div className="option">

                                    <input
                                        type="radio"
                                        id="hepBHistoryNo"
                                        name="hepatitisB"
                                        value="no"
                                        checked={
                                            data.hepatitisB.received === "no"
                                        }
                                    />

                                    <label htmlFor="hepBHistoryNo">
                                        No
                                    </label>

                                </div>

                            </div>

                        </div>


                        <div className="vaccine-details">

                            <div className="form-field">

                                <label htmlFor="hepBBrand">
                                    Select Brand
                                </label>


                                <select
                                    id="hepBBrand"
                                    name="hepBBrand"
                                    value={data.hepatitisB.brand}
                                >

                                    <option value="">
                                        -- Select Brand --
                                    </option>

                                    <option value="engerix">
                                        Engerix
                                    </option>

                                    <option value="recombivax_hb">
                                        Recombivax-HB
                                    </option>

                                    <option value="twinrix">
                                        Twinrix
                                    </option>

                                    <option value="pediarix">
                                        Pediarix
                                    </option>

                                    <option value="unknown">
                                        Unknown
                                    </option>

                                </select>

                            </div>


                            <div className="form-field">

                                <label htmlFor="hepBDate">
                                    Date Received
                                </label>


                                <input
                                    type="date"
                                    id="hepBDate"
                                    name="hepBDate"
                                    value={data.hepatitisB.dateReceived}
                                />

                            </div>

                        </div>

                    </li>

                </ol>

            </fieldset>
        </div>
    );
}

export default VaccineHistory;