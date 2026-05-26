export type Goal = "fat-loss" | "muscle-gain" | "maintenance";
export type BodyType = "ectomorph" | "mesomorph" | "endomorph";

export type FitnessProfile = {
  age: number;
  gender: "female" | "male" | "other";
  height: number;
  weight: number;
  bodyFatPercentage?: number;
  goal: Goal;
  bodyType: BodyType;
  trainingFrequency: number;
  hasLowerBackPain: boolean;
  hasShoulderPain: boolean;
  hasKneeValgus: boolean;
  workLifestyle: "desk" | "active" | "mixed";
};

export type TrackingEntry = {
  date: string;
  calories: number;
  protein: number;
  waterIntake: number;
  bodyWeight: number;
  workoutCompleted: boolean;
};

export function calculateBmi(weightKg: number, heightCm: number) {
  const meters = heightCm / 100;
  return Number((weightKg / (meters * meters)).toFixed(1));
}

export function getBmiCategory(bmi: number) {
  if (bmi < 18.5) return "Underweight";
  if (bmi <= 22.9) return "Healthy range";
  if (bmi <= 24.9) return "Overweight";
  if (bmi <= 29.9) return "Obesity level 1";
  return "Obesity level 2";
}

export function calculateHealthyWeightRange(heightCm: number) {
  const meters = heightCm / 100;
  return {
    min: Math.round(18.5 * meters * meters),
    max: Math.round(22.9 * meters * meters)
  };
}

export function calculateNutritionTarget(profile: FitnessProfile) {
  const base =
    10 * profile.weight +
    6.25 * profile.height -
    5 * profile.age +
    (profile.gender === "female" ? -161 : 5);
  const activityMultiplier = 1.2 + Math.min(profile.trainingFrequency, 6) * 0.06;
  const maintenance = base * activityMultiplier;
  const goalAdjustment =
    profile.goal === "fat-loss" ? -450 : profile.goal === "muscle-gain" ? 300 : 0;
  const dailyCalories = Math.round((maintenance + goalAdjustment) / 10) * 10;
  const protein = Math.round(profile.weight * (profile.goal === "muscle-gain" ? 2 : 1.7));
  const fat = Math.round((dailyCalories * 0.25) / 9);
  const carbohydrate = Math.round((dailyCalories - protein * 4 - fat * 9) / 4);

  return {
    dailyCalories,
    protein,
    carbohydrate,
    fat,
    waterTarget: 3
  };
}

export function recommendProgram(profile: FitnessProfile) {
  const injuryNotes = [
    profile.hasLowerBackPain ? "avoid heavy spinal loading early" : null,
    profile.hasShoulderPain ? "add shoulder mobility and upper back activation" : null,
    profile.hasKneeValgus ? "prioritize glute medius and squat control drills" : null
  ].filter(Boolean);

  const base =
    profile.goal === "fat-loss"
      ? "Fat Loss Foundation"
      : profile.goal === "muscle-gain"
        ? "Lean Muscle Builder"
        : "Sustainable Body Recomposition";

  const focus =
    profile.bodyType === "ectomorph"
      ? "higher calorie consistency and progressive strength work"
      : profile.bodyType === "endomorph"
        ? "strength training paired with moderate cardio and meal consistency"
        : "balanced strength blocks with measurable progression";

  return {
    name: base,
    durationWeeks: 8,
    weeklyFrequency: profile.trainingFrequency,
    focus,
    injuryNotes,
    split:
      profile.trainingFrequency <= 3
        ? ["Full Body A", "Full Body B", "Mobility + Zone 2"]
        : ["Upper Body", "Lower Body", "Zone 2 Cardio", "Full Body Strength", "Mobility"]
  };
}

export function summarizeProgress(entries: TrackingEntry[]) {
  const total = entries.length || 1;
  const completionRate =
    (entries.filter((entry) => entry.workoutCompleted).length / total) * 100;
  const averageCalories =
    entries.reduce((sum, entry) => sum + entry.calories, 0) / total;
  const averageProtein =
    entries.reduce((sum, entry) => sum + entry.protein, 0) / total;
  const averageWater =
    entries.reduce((sum, entry) => sum + entry.waterIntake, 0) / total;
  const firstWeight = entries[0]?.bodyWeight ?? 0;
  const lastWeight = entries[entries.length - 1]?.bodyWeight ?? firstWeight;

  return {
    completionRate: Math.round(completionRate),
    averageCalories: Math.round(averageCalories),
    averageProtein: Math.round(averageProtein),
    averageWater: Number(averageWater.toFixed(1)),
    weightChange: Number((lastWeight - firstWeight).toFixed(1))
  };
}
