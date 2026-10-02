const db = require("../config/db");
const { validationResult } = require("express-validator");


const saveConsent = async (req, res) => {

    // Check validation errors first
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        });
    }


    console.log("BODY RECEIVED:");
    console.log(req.body);


    const {
        studentInformation,
        vaccineHistory,
        healthHistory,
        consentForVaccination,
        consentDeclaration
    } = req.body;


    const connection = await db.getConnection();

    try {
        await connection.beginTransaction();

        const [result] = await connection.query(
            `
            INSERT INTO students
            (
                first_name,
                last_name,
                card_number,
                gender,
                dob,
                school,
                grade,
                student_class,
                teacher,
                guardian_phone
            )
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            `,
            [
                studentInformation.firstName,
                studentInformation.lastName,
                studentInformation.cardNumber,
                studentInformation.gender,
                studentInformation.dob || null,
                studentInformation.school,
                studentInformation.grade,
                studentInformation.studentClass,
                studentInformation.teacher,
                studentInformation.guardianPhone
            ]
        );


        const studentId = result.insertId;

        for (const [vaccine, history] of Object.entries(vaccineHistory)) {
            await connection.query(
                `INSERT INTO vaccine_history
                 (student_id, vaccine, received, brand, date_received)
                 VALUES (?, ?, ?, ?, ?)`,
                [studentId, vaccine, history.received || null, history.brand || null, history.dateReceived || null]
            );
        }

        for (const [question, history] of Object.entries(healthHistory)) {
            const answer = history.hasAllergy || history.hasReaction || history.hasHistory || history.hasCondition || null;
            await connection.query(
                `INSERT INTO health_history (student_id, question, answer, details)
                 VALUES (?, ?, ?, ?)`,
                [studentId, question, answer, history.details || null]
            );
        }

        for (const [vaccine, consent] of Object.entries(consentForVaccination)) {
            await connection.query(
                `INSERT INTO vaccine_consent (student_id, vaccine, consent)
                 VALUES (?, ?, ?)`,
                [studentId, vaccine, consent || null]
            );
        }

        await connection.query(
            `INSERT INTO parent_declarations
             (student_id, relationship, parent_first_name, parent_last_name, email, phone, signature, consent_date, confirmed_accuracy)
             VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [
                studentId,
                consentDeclaration.relationshipToStudent || null,
                consentDeclaration.parentFirstName || null,
                consentDeclaration.parentLastName || null,
                consentDeclaration.parentEmail || null,
                consentDeclaration.parentPhone || null,
                consentDeclaration.signature || null,
                consentDeclaration.consentDate || null,
                consentDeclaration.confirmAccuracy ? 1 : 0
            ]
        );

        await connection.commit();

        res.status(201).json({
            message: "Consent saved successfully",
            studentId: studentId
        });


    } catch(error) {
        await connection.rollback();
        console.error(error);

        res.status(500).json({
            message: "Failed to save consent",
            error: error.message
        });

    } finally {
        connection.release();
    }
};


module.exports = saveConsent;