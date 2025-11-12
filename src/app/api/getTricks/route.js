import { connectDB } from "@/lib/db";
import Trick from "@/models/mathTricks";
import { NextResponse } from "next/server";

export async function GET(request) {
    try {
        await connectDB();

        // Extract query params (page, limit)
        const { searchParams } = new URL(request.url);
        const page = parseInt(searchParams.get("page")) || 1;
        const limit = parseInt(searchParams.get("limit")) || 10;
        const skip = (page - 1) * limit;

        // Fetch paginated tricks
        const tricks = await Trick.find()
            .skip(skip)
            .limit(limit);

        return NextResponse.json({
            success: true,
            tricks,
        });
    } catch (err) {
        return NextResponse.json(
            { success: false, error: "Failed to fetch tricks" },
            { status: 500 }
        );
    }
}