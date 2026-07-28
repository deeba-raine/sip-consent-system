function HealthHistory({ data, handleNestedChange }) {
    return (
        <div className="form-section">
            <fieldset>
                <legend>Health History</legend>

                <ol>

                    {/* Allergy */}
                    <li>
                        <p>
                            Is the student allergic to yeast, alum, latex,
                            diphtheria or tetanus toxoid protein? Or any other allergies?
                        </p>

                        <div className="option-group">

                            <div className="option">
                                <input
                                    type="radio"
                                    id="allergyYes"
                                    name="allergyStatus"
                                    value="yes"
                                    checked={data.allergy.hasAllergy === "yes"}
                                    onChange={() => handleNestedChange("allergy", { target: { name: "hasAllergy", value: "yes" } })}
                                />
                                <label htmlFor="allergyYes">Yes</label>
                            </div>

                            <div className="option">
                                <input
                                    type="radio"
                                    id="allergyNo"
                                    name="allergyStatus"
                                    value="no"
                                    checked={data.allergy.hasAllergy === "no"}
                                    onChange={() => handleNestedChange("allergy", { target: { name: "hasAllergy", value: "no" } })}
                                />
                                <label htmlFor="allergyNo">No</label>
                            </div>

                        </div>

                        <div className="form-field">
                            <label htmlFor="allergyDetails">Please explain:</label>

                            <textarea id="allergyDetails" name="details" rows="2" value={data.allergy.details} onChange={(e) => handleNestedChange("allergy", e)} />
                        </div>
                    </li>


                    {/* Vaccine Reaction */}
                    <li>
                        <p>
                            Has the student ever had a reaction to a vaccine?
                        </p>

                        <div className="option-group">

                            <div className="option">
                                <input
                                    type="radio"
                                    id="vaccineReactionYes"
                                    name="vaccineReactionStatus"
                                    value="yes"
                                    checked={data.vaccineReaction.hasReaction === "yes"}
                                    onChange={() => handleNestedChange("vaccineReaction", { target: { name: "hasReaction", value: "yes" } })}
                                />
                                <label htmlFor="vaccineReactionYes">Yes</label>
                            </div>

                            <div className="option">
                                <input
                                    type="radio"
                                    id="vaccineReactionNo"
                                    name="vaccineReactionStatus"
                                    value="no"
                                    checked={data.vaccineReaction.hasReaction === "no"}
                                    onChange={() => handleNestedChange("vaccineReaction", { target: { name: "hasReaction", value: "no" } })}
                                />
                                <label htmlFor="vaccineReactionNo">No</label>
                            </div>

                        </div>


                        <div className="form-field">
                            <label htmlFor="vaccineReactionDetails">Please explain:</label>

                            <textarea id="vaccineReactionDetails" name="details" rows="2" value={data.vaccineReaction.details} onChange={(e) => handleNestedChange("vaccineReaction", e)} />
                        </div>

                    </li>


                    {/* Fainting */}
                    <li>
                        <p>
                            Does the student have a history of fainting?
                        </p>

                        <div className="option-group">

                            <div className="option">
                                <input
                                    type="radio"
                                    id="faintingYes"
                                    name="faintingStatus"
                                    value="yes"
                                    checked={data.fainting.hasHistory === "yes"}
                                    onChange={() => handleNestedChange("fainting", { target: { name: "hasHistory", value: "yes" } })}
                                />
                                <label htmlFor="faintingYes">Yes</label>
                            </div>

                            <div className="option">
                                <input
                                    type="radio"
                                    id="faintingNo"
                                    name="faintingStatus"
                                    value="no"
                                    checked={data.fainting.hasHistory === "no"}
                                    onChange={() => handleNestedChange("fainting", { target: { name: "hasHistory", value: "no" } })}
                                />
                                <label htmlFor="faintingNo">No</label>
                            </div>

                        </div>


                        <div className="form-field">
                            <label htmlFor="faintingDetails">Please explain:</label>

                            <textarea id="faintingDetails" name="details" rows="2" value={data.fainting.details} onChange={(e) => handleNestedChange("fainting", e)} />
                        </div>

                    </li>


                    {/* Immune System */}
                    <li>
                        <p>
                            Does the student have a weak immune system,
                            or take medication that weakens the immune system
                            or increases risk of infection?
                        </p>

                        <div className="option-group">

                            <div className="option">
                                <input
                                    type="radio"
                                    id="immuneSystemYes"
                                    name="immuneSystemStatus"
                                    value="yes"
                                    checked={data.immuneSystem.hasCondition === "yes"}
                                    onChange={() => handleNestedChange("immuneSystem", { target: { name: "hasCondition", value: "yes" } })}
                                />
                                <label htmlFor="immuneSystemYes">Yes</label>
                            </div>

                            <div className="option">
                                <input
                                    type="radio"
                                    id="immuneSystemNo"
                                    name="immuneSystemStatus"
                                    value="no"
                                    checked={data.immuneSystem.hasCondition === "no"}
                                    onChange={() => handleNestedChange("immuneSystem", { target: { name: "hasCondition", value: "no" } })}
                                />
                                <label htmlFor="immuneSystemNo">No</label>
                            </div>

                        </div>


                        <div className="form-field">
                            <label htmlFor="immuneSystemDetails">Please explain:</label>

                            <textarea id="immuneSystemDetails" name="details" rows="2" value={data.immuneSystem.details} onChange={(e) => handleNestedChange("immuneSystem", e)} />
                        </div>

                    </li>


                    {/* Serious Medical Condition */}
                    <li>
                        <p>
                            Does the student have a serious medical condition?
                        </p>

                        <div className="option-group">

                            <div className="option">
                                <input
                                    type="radio"
                                    id="seriousConditionYes"
                                    name="seriousConditionStatus"
                                    value="yes"
                                    checked={data.seriousMedicalCondition.hasCondition === "yes"}
                                    onChange={() => handleNestedChange("seriousMedicalCondition", { target: { name: "hasCondition", value: "yes" } })}
                                />
                                <label htmlFor="seriousConditionYes">Yes</label>
                            </div>

                            <div className="option">
                                <input
                                    type="radio"
                                    id="seriousConditionNo"
                                    name="seriousConditionStatus"
                                    value="no"
                                    checked={data.seriousMedicalCondition.hasCondition === "no"}
                                    onChange={() => handleNestedChange("seriousMedicalCondition", { target: { name: "hasCondition", value: "no" } })}
                                />
                                <label htmlFor="seriousConditionNo">No</label>
                            </div>

                        </div>


                        <div className="form-field">
                            <label htmlFor="seriousConditionDetails">Please explain:</label>

                            <textarea id="seriousConditionDetails" name="details" rows="2" value={data.seriousMedicalCondition.details} onChange={(e) => handleNestedChange("seriousMedicalCondition", e)} />
                        </div>

                    </li>

                </ol>

            </fieldset>
        </div>
    );
}

export default HealthHistory;
