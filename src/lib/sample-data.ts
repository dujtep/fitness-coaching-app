import type { TrackingEntry } from "@/lib/calculations";

export const trackingData: TrackingEntry[] = [
  { date: "Mon", calories: 1960, protein: 126, waterIntake: 2.4, bodyWeight: 76.4, workoutCompleted: true },
  { date: "Tue", calories: 2050, protein: 132, waterIntake: 2.8, bodyWeight: 76.2, workoutCompleted: false },
  { date: "Wed", calories: 1880, protein: 121, waterIntake: 3.1, bodyWeight: 75.9, workoutCompleted: true },
  { date: "Thu", calories: 2010, protein: 135, waterIntake: 2.7, bodyWeight: 75.8, workoutCompleted: true },
  { date: "Fri", calories: 1930, protein: 128, waterIntake: 3.0, bodyWeight: 75.5, workoutCompleted: true },
  { date: "Sat", calories: 2120, protein: 118, waterIntake: 2.5, bodyWeight: 75.6, workoutCompleted: false },
  { date: "Sun", calories: 1980, protein: 130, waterIntake: 3.2, bodyWeight: 75.2, workoutCompleted: true }
];

export const workouts = [
  {
    title: "Upper Body Strength",
    time: "18:00",
    exercises: ["Incline push-up", "Seated row", "Dumbbell press", "Lat pulldown"]
  },
  {
    title: "Mobility + Core",
    time: "07:30",
    exercises: ["Dead bug", "Side plank", "Hip flexor stretch", "Shoulder CARs"]
  }
];

export const products = [
  { name: "Training Tee", price: 590, stock: 24, tag: "Apparel" },
  { name: "Grip Socks", price: 290, stock: 36, tag: "Support" },
  { name: "Water Bottle", price: 390, stock: 18, tag: "Hydration" },
  { name: "Resistance Band", price: 250, stock: 42, tag: "Training" }
];
