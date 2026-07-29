const express = require("express");
const cors = require("cors");
const db = require("./config/db");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 3000;

db.connect((err)=> {
    if(err) {
        console.log("Database connection failed:", err.message)
    }
    else {
        console.log("Connected to MySQL database");
    }
})

app.get('/', (req,res)=>{
    res.send("SIP backend is running")
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});