const db = require("../config/db");

async function getConsents(req, res) {
    try {
        const [students] = await db.query(`
            SELECT
                id,
                first_name,
                last_name,
                card_number,
                gender,
                dob,
                school,
                grade,
                student_class,
                teacher,
                guardian_phone,
                created_at
            FROM students
            ORDER BY created_at DESC, id DESC
        `);

        for (const student of students) {
            const [vaccineHistory] = await db.query(
                "SELECT vaccine, received, brand, date_received FROM vaccine_history WHERE student_id = ?",
                [student.id]
            );
            const [healthHistory] = await db.query(
                "SELECT question, answer, details FROM health_history WHERE student_id = ?",
                [student.id]
            );
            const [vaccineConsent] = await db.query(
                "SELECT vaccine, consent FROM vaccine_consent WHERE student_id = ?",
                [student.id]
            );
            const [parentDeclarations] = await db.query(
                `SELECT relationship, parent_first_name, parent_last_name, email, phone,
                        signature, consent_date, confirmed_accuracy
                 FROM parent_declarations WHERE student_id = ?`,
                [student.id]
            );

            student.vaccine_history = vaccineHistory;
            student.health_history = healthHistory;
            student.vaccine_consent = vaccineConsent;
            student.parent_declaration = parentDeclarations[0] || null;
        }

        res.json(students);
    } catch (error) {
        console.error("Failed to load consent records:", error);
        res.status(500).json({ message: "Failed to load consent records" });
    }
}

module.exports = getConsents;
