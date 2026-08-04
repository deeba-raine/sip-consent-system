// 1. Import modules
const express = require("express");
const cors = require("cors");
const db = require("./config/db");
require("dotenv").config();


// 2. Create Express application
const app = express();


// 3. Middleware
app.use(cors());
app.use(express.json());


// 4. Port
const PORT = process.env.PORT || 3000;


// 5. Test route
app.get("/", (req, res) => {
    res.send("SIP backend is running");
});


// 6. POST route
app.post("/api/consent", async (req, res) => {

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


        res.status(201).json({
            message: "Student saved",
            studentId: result.insertId
        });


    } catch(error) {

        console.error(error);

        res.status(500).json({
            message:"Failed to save",
            error:error.message
        });

    }

});


// 7. Start server
app.listen(PORT, () => {

    console.log(`Server running on port ${PORT}`);

});