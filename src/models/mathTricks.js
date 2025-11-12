import mongoose from "mongoose";

const TrickSchema = new mongoose.Schema(
    {
        id: { type: Number, required: true },
        category: { type: String, required: true },
        title: { type: String, required: true },
        difficulty: { type: String, required: true },
        description: { type: String, required: true },
        steps: { type: [String], required: true },
        example: { type: String, required: true },
        tip: { type: String },
    },
    { collection: "math_tricks" }
);

export default mongoose.models.Trick || mongoose.model("Trick", TrickSchema);