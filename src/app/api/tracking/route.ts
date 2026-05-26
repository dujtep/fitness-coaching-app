import { NextResponse } from "next/server";
import { z } from "zod";
import { summarizeProgress } from "@/lib/calculations";
import { trackingData } from "@/lib/sample-data";

const trackingSchema = z.object({
  date: z.string(),
  calories: z.number().int().nonnegative(),
  protein: z.number().int().nonnegative(),
  waterIntake: z.number().nonnegative(),
  bodyWeight: z.number().positive(),
  workoutCompleted: z.boolean()
});

export async function GET() {
  return NextResponse.json({
    entries: trackingData,
    summary: summarizeProgress(trackingData)
  });
}

export async function POST(request: Request) {
  const entry = trackingSchema.parse(await request.json());
  const entries = [...trackingData, entry];

  return NextResponse.json({
    entry,
    summary: summarizeProgress(entries)
  });
}
