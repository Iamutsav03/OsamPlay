import dotenv from "dotenv";
import express from "express";
import mongoose, { connect } from "mongoose";
import dbconnect from "./db/db.js";
dotenv.config({path: "./.env"});

dbconnect()
.then(() => {
    const app = express();
    const PORT = process.env.PORT || 8000;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})
.catch((error) => console.error("MongoDB connection error:", error));