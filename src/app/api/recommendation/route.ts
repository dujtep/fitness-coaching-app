import { NextResponse } from "next/server";
import { z } from "zod";
import {
  calculateBmi,
  calculateHealthyWeightRange,
  calculateNutritionTarget,
  getBmiCategory,
  recommendProgram
} from "@/lib/calculations";

const recommendationSchema = z.object({
  age: z.number(),
  gender: z.enum(["female", "male", "other"]),
  height: z.number(),
  weight: z.number(),
  bodyFatPercentage: z.number().optional(),
  goal: z.enum(["fat-loss", "muscle-gain", "maintenance"]),
  bodyType: z.enum(["ectomorph", "mesomorph", "endomorph"]),
  trainingFrequency: z.number(),
  hasLowerBackPain: z.boolean(),
  hasShoulderPain: z.boolean(),
  hasKneeValgus: z.boolean(),
  workLifestyle: z.enum(["desk", "active", "mixed"])
});

export async function POST(request: Request) {
  const body = await request.json();
  const profile = recommendationSchema.parse(body);
  const bmi = calculateBmi(profile.weight, profile.height);

  return NextResponse.json({
    bmi,
    bmiCategory: getBmiCategory(bmi),
    healthyWeightRange: calculateHealthyWeightRange(profile.height),
    nutritionTarget: calculateNutritionTarget(profile),
    program: recommendProgram(profile)
  });
}
