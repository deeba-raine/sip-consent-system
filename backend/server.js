const express = require("express");
const cors = require("cors");
const db = require("./config/db");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send("SIP backend is running");
});

app.post("/api/consent", async (req, res) => {
  const {
    studentInformation,
    vaccineHistory,
    healthHistory,
    consentForVaccination,
    consentDeclaration,
  } = req.body;

  try {
    // 1. Save student info
    const [result] = await db.query(
      `INSERT INTO students
       (first_name, last_name, card_number, gender, dob, school, grade, student_class, teacher, guardian_phone)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
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
        studentInformation.guardianPhone,
      ]
    );

    const studentId = result.insertId;

    // 2. Save vaccine history (one row per vaccine)
    for (const [vaccine, info] of Object.entries(vaccineHistory)) {
      await db.query(
        `INSERT INTO vaccine_history (student_id, vaccine, received, brand, date_received)
         VALUES (?, ?, ?, ?, ?)`,
        [studentId, vaccine, info.received, info.brand || null, info.dateReceived || null]
      );
    }

    // 3. Save health history (one row per question)
    for (const [question, info] of Object.entries(healthHistory)) {
      const answer = info.hasAllergy ?? info.hasReaction ?? info.hasHistory ?? info.hasCondition ?? "";
      await db.query(
        `INSERT INTO health_history (student_id, question, answer, details)
         VALUES (?, ?, ?, ?)`,
        [studentId, question, answer, info.details || null]
      );
    }

    // 4. Save vaccine consent (one row per vaccine)
    for (const [vaccine, consentValue] of Object.entries(consentForVaccination)) {
      await db.query(
        `INSERT INTO vaccine_consent (student_id, vaccine, consent)
         VALUES (?, ?, ?)`,
        [studentId, vaccine, consentValue]
      );
    }

    // 5. Save parent declaration (one row total)
    await db.query(
      `INSERT INTO parent_declarations
       (student_id, relationship, parent_first_name, parent_last_name, email, phone, signature, consent_date, confirmed_accuracy)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        studentId,
        consentDeclaration.relationshipToStudent,
        consentDeclaration.parentFirstName,
        consentDeclaration.parentLastName,
        consentDeclaration.parentEmail,
        consentDeclaration.parentPhone,
        consentDeclaration.signature,
        consentDeclaration.consentDate,
        consentDeclaration.confirmAccuracy,
      ]
    );

    res.status(201).json({ message: "Consent saved successfully", studentId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to save", error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});