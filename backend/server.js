const express = require("express");
const cors = require("cors");

require("dotenv").config();

const consentRoutes = require("./routes/consentRoutes");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;


// Routes
app.use("/api", consentRoutes);


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});