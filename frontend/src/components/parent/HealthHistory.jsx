function HealthHistory() {
    return (
        <div className="form-section">
            <fieldset>
                <legend>Health History</legend>
                <ol>
                    <li>
                        <p>Is the student allergic to yeast, alum, latex, diphtheria or tetanus toxoid protein? Or any other allergies?</p>
                        <div className="option-group">
                            <div className="option">
                                <input type="radio" id="allergyYes" name="allergy" value="yes" />
                                <label htmlFor="allergyYes">Yes</label>
                            </div>
                            <div className="option">
                                <input type="radio" id="allergyNo" name="allergy" value="no" />
                                <label htmlFor="allergyNo">No</label>
                            </div>
                        </div>
                        <div className="form-field" id="allergyDetails">
                            <label htmlFor="allergyDetailsText">Please explain:</label>
                            <textarea id="allergyDetailsText" name="allergyDetails" rows="2"></textarea>
                        </div>
                    </li>

                    <li>
                        <p>Has the student ever had a reaction to a vaccine?</p>
                        <div className="option-group">
                            <div className="option">
                                <input type="radio" id="vaccineReactionYes" name="vaccineReaction" value="yes" />
                                <label htmlFor="vaccineReactionYes">Yes</label>
                            </div>
                            <div className="option">
                                <input type="radio" id="vaccineReactionNo" name="vaccineReaction" value="no" />
                                <label htmlFor="vaccineReactionNo">No</label>
                            </div>
                        </div>
                        <div className="form-field" id="vaccineReactionDetails">
                            <label htmlFor="vaccineReactionDetailsText">Please explain:</label>
                            <textarea id="vaccineReactionDetailsText" name="vaccineReactionDetails" rows="2"></textarea>
                        </div>
                    </li>

                    <li>
                        <p>Does the student have a history of fainting?</p>
                        <div className="option-group">
                            <div className="option">
                                <input type="radio" id="faintingYes" name="fainting" value="yes" />
                                <label htmlFor="faintingYes">Yes</label>
                            </div>
                            <div className="option">
                                <input type="radio" id="faintingNo" name="fainting" value="no" />
                                <label htmlFor="faintingNo">No</label>
                            </div>
                        </div>
                        <div className="form-field" id="faintingDetails">
                            <label htmlFor="faintingDetailsText">Please explain:</label>
                            <textarea id="faintingDetailsText" name="faintingDetails" rows="2"></textarea>
                        </div>
                    </li>

                    <li>
                        <p>Does the student have a weak immune system, or take medication that weakens the immune system or increases risk of infection?</p>
                        <div className="option-group">
                            <div className="option">
                                <input type="radio" id="immuneSystemYes" name="immuneSystem" value="yes" />
                                <label htmlFor="immuneSystemYes">Yes</label>
                            </div>
                            <div className="option">
                                <input type="radio" id="immuneSystemNo" name="immuneSystem" value="no" />
                                <label htmlFor="immuneSystemNo">No</label>
                            </div>
                        </div>
                        <div className="form-field" id="immuneSystemDetails">
                            <label htmlFor="immuneSystemDetailsText">Please explain:</label>
                            <textarea id="immuneSystemDetailsText" name="immuneSystemDetails" rows="2"></textarea>
                        </div>
                    </li>

                    <li>
                        <p>Does the student have a serious medical condition?</p>
                        <div className="option-group">
                            <div className="option">
                                <input type="radio" id="seriousConditionYes" name="seriousCondition" value="yes" />
                                <label htmlFor="seriousConditionYes">Yes</label>
                            </div>
                            <div className="option">
                                <input type="radio" id="seriousConditionNo" name="seriousCondition" value="no" />
                                <label htmlFor="seriousConditionNo">No</label>
                            </div>
                        </div>
                        <div className="form-field" id="seriousConditionDetails">
                            <label htmlFor="seriousConditionDetailsText">Please explain:</label>
                            <textarea id="seriousConditionDetailsText" name="seriousConditionDetails" rows="2"></textarea>
                        </div>
                    </li>
                </ol>
            </fieldset>
        </div>
    );
}

export default HealthHistory;