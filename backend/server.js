const express = require("express")
const path = require("path");
const app = express();
const db = require("./config/db");

require("dotenv").config();
const PORT = 3000


app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "..", "frontend", "public")));

app.get("/", (req, res) => {
    res.send("You are connected to the Server")
})

app.post("/login", async (req, res) => {
    const { email, hash_password } = req.body;
    console.log(email)
    console.log(hash_password )

    if(email === "user@example.com") {
        console.log("Success!")
        }
    else{
     
        console.log("login failed")
    }
    res.end()
})



app.listen(PORT, (err)=> {
    if(err) {
        console.log("Your connectio to server failed", err.message)
        return;
    }
    console.log(`Your Server is Running on PORT ${PORT}`)
})