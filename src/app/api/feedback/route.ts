import { NextResponse } from "next/server";
import { z } from "zod";
import { summarizeProgress } from "@/lib/calculations";

const feedbackSchema = z.object({
  proteinTarget: z.number(),
  entries: z.array(
    z.object({
      date: z.string(),
      calories: z.number(),
      protein: z.number(),
      waterIntake: z.number(),
      bodyWeight: z.number(),
      workoutCompleted: z.boolean()
    })
  )
});

export async function POST(request: Request) {
  const { proteinTarget, entries } = feedbackSchema.parse(await request.json());
  const summary = summarizeProgress(entries);
  const feedback = `Completion rate is ${summary.completionRate}%. Average protein is ${summary.averageProtein}g against a ${proteinTarget}g target. Keep workouts consistent and adjust calories gradually.`;

  return NextResponse.json({
    summary,
    feedback,
    source: "MVP rule-based feedback; OpenAI API can replace this service when OPENAI_API_KEY is configured."
  });
}
