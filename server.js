
const express = require("express");
const connectDB = require("./Database/connection");
const authRoute = require("./routes/auth");




const app = express();
app.use(express.json());


connectDB();

app.get("/api/health", (req, res) => {
    res.json({
        service: "Backend Quiz server",
        status: "active",
        time: new Date(),
    });
});

app.use("/api/v1/auth", authRoute);

app.use("*", (req, res) => {
    res.status(404).json({ errorMessage: "Route not found!" });
});




const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});