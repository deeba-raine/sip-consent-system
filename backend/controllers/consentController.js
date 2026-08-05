const db = require("../config/db");


const saveConsent = async (req, res) => {

    console.log("BODY RECEIVED:");
    console.log(req.body);


    const {
        studentInformation,
        vaccineHistory,
        healthHistory,
        consentForVaccination,
        consentDeclaration
    } = req.body;


    try {

        const [result] = await db.query(
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
                studentInformation.dob,
                studentInformation.school,
                studentInformation.grade,
                studentInformation.studentClass,
                studentInformation.teacher,
                studentInformation.guardianPhone
            ]
        );


        const studentId = result.insertId;


        // Keep all your other INSERT queries here:
        // vaccine_history
        // health_history
        // vaccine_consent
        // parent_declarations


        res.status(201).json({
            message: "Consent saved successfully",
            studentId: studentId
        });


    } catch(error) {

        console.error(error);

        res.status(500).json({
            message: "Failed to save",
            error: error.message
        });

    }

};


module.exports = saveConsent;