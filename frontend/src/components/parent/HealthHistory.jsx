function HealthHistory({ data }) {
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
                                    name="allergy"
                                    value="yes"
                                    checked={data.allergy.hasAllergy === "yes"}
                                />
                                <label htmlFor="allergyYes">Yes</label>
                            </div>

                            <div className="option">
                                <input
                                    type="radio"
                                    id="allergyNo"
                                    name="allergy"
                                    value="no"
                                    checked={data.allergy.hasAllergy === "no"}
                                />
                                <label htmlFor="allergyNo">No</label>
                            </div>

                        </div>

                        <div className="form-field">
                            <label htmlFor="allergyDetails">
                                Please explain:
                            </label>

                            <textarea
                                id="allergyDetails"
                                name="allergyDetails"
                                rows="2"
                                value={data.allergy.details}
                            />
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
                                    name="vaccineReaction"
                                    value="yes"
                                    checked={data.vaccineReaction.hasReaction === "yes"}
                                />
                                <label htmlFor="vaccineReactionYes">
                                    Yes
                                </label>
                            </div>


                            <div className="option">
                                <input
                                    type="radio"
                                    id="vaccineReactionNo"
                                    name="vaccineReaction"
                                    value="no"
                                    checked={data.vaccineReaction.hasReaction === "no"}
                                />
                                <label htmlFor="vaccineReactionNo">
                                    No
                                </label>
                            </div>

                        </div>


                        <div className="form-field">
                            <label htmlFor="vaccineReactionDetails">
                                Please explain:
                            </label>

                            <textarea
                                id="vaccineReactionDetails"
                                name="vaccineReactionDetails"
                                rows="2"
                                value={data.vaccineReaction.details}
                            />

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
                                    name="fainting"
                                    value="yes"
                                    checked={data.fainting.hasHistory === "yes"}
                                />
                                <label htmlFor="faintingYes">
                                    Yes
                                </label>
                            </div>


                            <div className="option">
                                <input
                                    type="radio"
                                    id="faintingNo"
                                    name="fainting"
                                    value="no"
                                    checked={data.fainting.hasHistory === "no"}
                                />
                                <label htmlFor="faintingNo">
                                    No
                                </label>
                            </div>

                        </div>


                        <div className="form-field">
                            <label htmlFor="faintingDetails">
                                Please explain:
                            </label>

                            <textarea
                                id="faintingDetails"
                                name="faintingDetails"
                                rows="2"
                                value={data.fainting.details}
                            />

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
                                    name="immuneSystem"
                                    value="yes"
                                    checked={data.immuneSystem.hasCondition === "yes"}
                                />

                                <label htmlFor="immuneSystemYes">
                                    Yes
                                </label>
                            </div>


                            <div className="option">
                                <input
                                    type="radio"
                                    id="immuneSystemNo"
                                    name="immuneSystem"
                                    value="no"
                                    checked={data.immuneSystem.hasCondition === "no"}
                                />

                                <label htmlFor="immuneSystemNo">
                                    No
                                </label>
                            </div>

                        </div>


                        <div className="form-field">
                            <label htmlFor="immuneSystemDetails">
                                Please explain:
                            </label>

                            <textarea
                                id="immuneSystemDetails"
                                name="immuneSystemDetails"
                                rows="2"
                                value={data.immuneSystem.details}
                            />

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
                                    name="seriousCondition"
                                    value="yes"
                                    checked={data.seriousMedicalCondition.hasCondition === "yes"}
                                />

                                <label htmlFor="seriousConditionYes">
                                    Yes
                                </label>

                            </div>


                            <div className="option">

                                <input
                                    type="radio"
                                    id="seriousConditionNo"
                                    name="seriousCondition"
                                    value="no"
                                    checked={data.seriousMedicalCondition.hasCondition === "no"}
                                />

                                <label htmlFor="seriousConditionNo">
                                    No
                                </label>

                            </div>

                        </div>


                        <div className="form-field">

                            <label htmlFor="seriousConditionDetails">
                                Please explain:
                            </label>


                            <textarea
                                id="seriousConditionDetails"
                                name="seriousConditionDetails"
                                rows="2"
                                value={data.seriousMedicalCondition.details}
                            />

                        </div>


                    </li>

                </ol>

            </fieldset>
        </div>
    );
}

export default HealthHistory;