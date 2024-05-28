const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        quizCreated: {
            type: Number,
            required: false,
            default: 0,
        },
        questionsCreated: {
            type: Number,
            required: false,
            default: 0,
        },
          totalImpressions: {
            type: Number,
            required: false,
            default: 0,
        },
    },
    { timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" } }
);

module.exports = mongoose.model("QuizUser", userSchema);