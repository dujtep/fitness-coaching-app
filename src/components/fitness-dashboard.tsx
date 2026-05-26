"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  Activity,
  CalendarDays,
  CheckCircle2,
  ClipboardList,
  Droplets,
  Dumbbell,
  MessageSquareText,
  Package,
  Save,
  ShieldAlert,
  Sparkles,
  type LucideIcon
} from "lucide-react";
import { useMemo, useState, type ReactElement, type ReactNode } from "react";
import { useForm, type UseFormRegisterReturn } from "react-hook-form";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import { z } from "zod";
import {
  calculateBmi,
  calculateHealthyWeightRange,
  calculateNutritionTarget,
  getBmiCategory,
  recommendProgram,
  summarizeProgress,
  type FitnessProfile
} from "@/lib/calculations";
import { products, trackingData, workouts } from "@/lib/sample-data";

const profileSchema = z.object({
  age: z.coerce.number().min(13).max(90),
  gender: z.enum(["female", "male", "other"]),
  height: z.coerce.number().min(120).max(230),
  weight: z.coerce.number().min(30).max(250),
  bodyFatPercentage: z.coerce.number().min(3).max(70).optional(),
  goal: z.enum(["fat-loss", "muscle-gain", "maintenance"]),
  bodyType: z.enum(["ectomorph", "mesomorph", "endomorph"]),
  trainingFrequency: z.coerce.number().min(1).max(6),
  workLifestyle: z.enum(["desk", "active", "mixed"]),
  hasLowerBackPain: z.boolean(),
  hasShoulderPain: z.boolean(),
  hasKneeValgus: z.boolean()
});

type ProfileForm = z.infer<typeof profileSchema>;

type NavItem = [string, LucideIcon];

const defaultProfile: ProfileForm = {
  age: 32,
  gender: "female",
  height: 168,
  weight: 76,
  bodyFatPercentage: 29,
  goal: "fat-loss",
  bodyType: "endomorph",
  trainingFrequency: 4,
  workLifestyle: "desk",
  hasLowerBackPain: false,
  hasShoulderPain: true,
  hasKneeValgus: false
};

export function FitnessDashboard() {
  const [profile, setProfile] = useState<FitnessProfile>(defaultProfile);
  const { register, handleSubmit, watch } = useForm<ProfileForm>({
    resolver: zodResolver(profileSchema),
    defaultValues: defaultProfile
  });
  const parsedLiveProfile = profileSchema.safeParse(watch());
  const liveProfile = parsedLiveProfile.success ? parsedLiveProfile.data : profile;
  const bmi = calculateBmi(liveProfile.weight, liveProfile.height);
  const healthyWeight = calculateHealthyWeightRange(liveProfile.height);
  const nutrition = calculateNutritionTarget(profile);
  const program = recommendProgram(profile);
  const progress = summarizeProgress(trackingData);

  const aiSummary = useMemo(() => {
    const trend =
      progress.weightChange < 0
        ? `weight is down ${Math.abs(progress.weightChange)} kg`
        : `weight changed ${progress.weightChange} kg`;
    return `Consistency is strong at ${progress.completionRate}%. ${trend}. Keep protein near ${nutrition.protein}g and protect recovery on high-workload days.`;
  }, [nutrition.protein, progress]);

  function onSubmit(values: ProfileForm) {
    setProfile(values);
  }

  const navItems: NavItem[] = [
    ["Onboarding", ClipboardList],
    ["Program", Activity],
    ["Tracking", Droplets],
    ["Calendar", CalendarDays],
    ["Trainer", MessageSquareText],
    ["Store", Package]
  ];

  return (
    <main className="app-shell px-4 py-5 text-slate-100 md:px-7 lg:px-10">
      <section className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[280px_1fr]">
        <aside className="panel h-fit p-4 lg:sticky lg:top-5">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Dumbbell size={22} />
            </div>
            <div>
              <p className="text-sm font-bold text-orange-300">FitCoach MVP</p>
              <h1 className="text-xl font-black">Coaching Hub</h1>
            </div>
          </div>

          <nav className="grid gap-2 text-sm font-semibold text-slate-300">
            {navItems.map(([label, Icon]) => (
              <a
                className="flex items-center gap-2 rounded-lg px-3 py-2 hover:bg-white/10"
                href={`#${label.toLowerCase()}`}
                key={label}
              >
                <Icon size={17} />
                {label}
              </a>
            ))}
          </nav>

          <div className="mt-5 rounded-lg border border-orange-400/30 bg-orange-500/10 p-3 text-sm text-orange-100">
            <div className="mb-1 flex items-center gap-2 font-bold">
              <ShieldAlert size={16} />
              Safety note
            </div>
            This app gives basic fitness guidance. Users with medical conditions should consult a professional.
          </div>
        </aside>

        <div className="grid gap-5">
          <header className="grid gap-4 rounded-lg bg-slate-950/90 p-5 text-white shadow-soft md:grid-cols-[1.35fr_0.65fr]">
            <div>
              <p className="mb-2 text-sm font-bold uppercase tracking-[0.18em] text-orange-300">Customer web app</p>
              <h2 className="max-w-3xl text-3xl font-black leading-tight md:text-5xl">
                Personalized fitness, nutrition, and progress tracking in one workspace.
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300">
                MVP implementation based on the README: onboarding, BMI, program recommendation,
                nutrition targets, daily tracking, calendar, AI-style feedback, trainer add-on, and merchandise.
              </p>
            </div>
            <div className="grid content-end gap-3">
              <Metric label="BMI" value={bmi.toString()} hint={getBmiCategory(bmi)} />
              <Metric label="Weekly training" value={`${profile.trainingFrequency} days`} hint={program.name} />
            </div>
          </header>

          <section className="grid gap-5 xl:grid-cols-[1fr_380px]" id="onboarding">
            <form className="panel p-4" onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4 flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-bold text-orange-300">Onboarding form</p>
                  <h2 className="text-2xl font-black">Body information</h2>
                </div>
                <button className="icon-button bg-primary text-primary-foreground shadow-lg shadow-orange-950/40" type="submit">
                  <Save size={17} />
                  Save
                </button>
              </div>

              <div className="grid gap-3 md:grid-cols-3">
                <Field label="Age"><input className="field" type="number" {...register("age")} /></Field>
                <Field label="Gender">
                  <select className="field" {...register("gender")}>
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                    <option value="other">Other</option>
                  </select>
                </Field>
                <Field label="Goal">
                  <select className="field" {...register("goal")}>
                    <option value="fat-loss">Fat loss</option>
                    <option value="muscle-gain">Muscle gain</option>
                    <option value="maintenance">Maintenance</option>
                  </select>
                </Field>
                <Field label="Height (cm)"><input className="field" type="number" {...register("height")} /></Field>
                <Field label="Weight (kg)"><input className="field" type="number" {...register("weight")} /></Field>
                <Field label="Body fat %"><input className="field" type="number" {...register("bodyFatPercentage")} /></Field>
                <Field label="Body type">
                  <select className="field" {...register("bodyType")}>
                    <option value="ectomorph">Ectomorph</option>
                    <option value="mesomorph">Mesomorph</option>
                    <option value="endomorph">Endomorph</option>
                  </select>
                </Field>
                <Field label="Training days / week">
                  <input className="field" max={6} min={1} type="number" {...register("trainingFrequency")} />
                </Field>
                <Field label="Work lifestyle">
                  <select className="field" {...register("workLifestyle")}>
                    <option value="desk">Desk work</option>
                    <option value="active">Active job</option>
                    <option value="mixed">Mixed</option>
                  </select>
                </Field>
              </div>

              <div className="mt-4 grid gap-2 md:grid-cols-3">
                <Check label="Lower back pain" register={register("hasLowerBackPain")} />
                <Check label="Shoulder / neck pain" register={register("hasShoulderPain")} />
                <Check label="Knee valgus" register={register("hasKneeValgus")} />
              </div>
            </form>

            <div className="panel grid gap-3 p-4">
              <h2 className="text-xl font-black">Assessment result</h2>
              <div className="grid grid-cols-2 gap-3">
                <Metric label="Healthy weight" value={`${healthyWeight.min}-${healthyWeight.max} kg`} hint="Asian BMI range" />
                <Metric label="Water target" value={`${nutrition.waterTarget} L`} hint="daily baseline" />
                <Metric label="Calories" value={`${nutrition.dailyCalories}`} hint="kcal / day" />
                <Metric label="Protein" value={`${nutrition.protein} g`} hint="daily target" />
              </div>
              <div className="rounded-lg border border-white/10 bg-[#171d29] p-3 text-sm leading-6 text-slate-200">
                <b>{program.name}</b> focuses on {program.focus}. {program.injuryNotes.length ? program.injuryNotes.join(", ") : "No injury restriction was flagged."}
              </div>
            </div>
          </section>

          <section className="grid gap-5 xl:grid-cols-[0.9fr_1.1fr]" id="program">
            <div className="panel p-4">
              <div className="mb-4 flex items-center gap-2">
                <Dumbbell className="text-orange-300" size={22} />
                <h2 className="text-2xl font-black">Today workout</h2>
              </div>
              <div className="grid gap-3">
                {workouts.map((workout) => (
                  <div className="rounded-lg border border-white/10 bg-[#171d29] p-3" key={workout.title}>
                    <div className="mb-2 flex items-center justify-between gap-3">
                      <h3 className="font-black">{workout.title}</h3>
                      <span className="rounded-md bg-orange-500/15 px-2 py-1 text-xs font-bold text-orange-200">{workout.time}</span>
                    </div>
                    <div className="grid gap-2 sm:grid-cols-2">
                      {workout.exercises.map((exercise) => (
                        <div className="flex items-center gap-2 text-sm" key={exercise}>
                          <CheckCircle2 className="text-orange-300" size={16} />
                          {exercise}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="panel p-4" id="tracking">
              <div className="mb-4 flex items-center gap-2">
                <Activity className="text-orange-300" size={22} />
                <h2 className="text-2xl font-black">Progress dashboard</h2>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <Chart title="Weight progress">
                  <LineChart data={trackingData}>
                    <CartesianGrid stroke="#3a4354" strokeDasharray="3 3" />
                    <XAxis dataKey="date" tick={{ fill: "#cbd5e1", fontSize: 12 }} />
                    <YAxis domain={["dataMin - 1", "dataMax + 1"]} tick={{ fill: "#cbd5e1", fontSize: 12 }} />
                    <Tooltip />
                    <Line dataKey="bodyWeight" stroke="#f36a2e" strokeWidth={3} type="monotone" />
                  </LineChart>
                </Chart>
                <Chart title="Total calories">
                  <BarChart data={trackingData}>
                    <CartesianGrid stroke="#3a4354" strokeDasharray="3 3" />
                    <XAxis dataKey="date" tick={{ fill: "#cbd5e1", fontSize: 12 }} />
                    <YAxis tick={{ fill: "#cbd5e1", fontSize: 12 }} />
                    <Tooltip />
                    <Bar dataKey="calories" fill="#f8a11f" radius={[6, 6, 0, 0]} />
                  </BarChart>
                </Chart>
              </div>
            </div>
          </section>

          <section className="grid gap-5 xl:grid-cols-3">
            <div className="panel p-4" id="calendar">
              <div className="mb-4 flex items-center gap-2">
                <CalendarDays className="text-orange-300" size={22} />
                <h2 className="text-xl font-black">Calendar reminders</h2>
              </div>
              {["Workout Upper Body at 18:00", "Drink water to reach 3 liters", "Log dinner and body weight"].map((item) => (
                <div className="mb-2 rounded-lg border border-white/10 bg-[#171d29] p-3 text-sm font-semibold text-slate-200" key={item}>
                  {item}
                </div>
              ))}
            </div>

            <div className="panel p-4" id="trainer">
              <div className="mb-4 flex items-center gap-2">
                <MessageSquareText className="text-orange-300" size={22} />
                <h2 className="text-xl font-black">Trainer add-on</h2>
              </div>
              <textarea className="field min-h-28" defaultValue="Please review my program and shoulder-friendly alternatives." />
              <button className="icon-button mt-3 w-full bg-primary text-white shadow-lg shadow-orange-950/40" type="button">
                <MessageSquareText size={17} />
                Request consultation
              </button>
            </div>

            <div className="panel p-4">
              <div className="mb-4 flex items-center gap-2">
                <Sparkles className="text-orange-300" size={22} />
                <h2 className="text-xl font-black">AI feedback summary</h2>
              </div>
              <p className="rounded-lg border border-orange-400/20 bg-orange-500/10 p-3 text-sm leading-6 text-orange-50">{aiSummary}</p>
            </div>
          </section>

          <section className="panel p-4" id="store">
            <div className="mb-4 flex items-center gap-2">
              <Package className="text-orange-300" size={22} />
              <h2 className="text-2xl font-black">Merchandise store</h2>
            </div>
            <div className="grid gap-3 md:grid-cols-4">
              {products.map((product) => (
                <div className="rounded-lg border border-white/10 bg-[#171d29] p-3" key={product.name}>
                  <div className="mb-3 flex h-24 items-center justify-center rounded-lg bg-[#242c3b] text-orange-300">
                    <Package size={28} />
                  </div>
                  <p className="text-xs font-bold uppercase text-orange-300">{product.tag}</p>
                  <h3 className="font-black">{product.name}</h3>
                  <div className="mt-2 flex items-center justify-between text-sm text-slate-300">
                    <b>THB {product.price}</b>
                    <span>{product.stock} left</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="grid gap-1 text-sm font-bold text-slate-300">
      {label}
      {children}
    </label>
  );
}

function Check({ label, register }: { label: string; register: UseFormRegisterReturn }) {
  return (
    <label className="flex min-h-12 items-center gap-2 rounded-lg border border-white/10 bg-[#171d29] px-3 text-sm font-bold text-slate-200">
      <input className="h-4 w-4 accent-orange-600" type="checkbox" {...register} />
      {label}
    </label>
  );
}

function Metric({ label, value, hint }: { label: string; value: string; hint: string }) {
  return (
    <div className="rounded-lg border border-white/10 bg-[#202838] p-3 text-slate-50">
      <p className="text-xs font-bold uppercase text-orange-300">{label}</p>
      <p className="mt-1 text-2xl font-black">{value}</p>
      <p className="text-xs font-semibold text-slate-400">{hint}</p>
    </div>
  );
}

function Chart({ title, children }: { title: string; children: ReactElement }) {
  return (
    <div>
      <h3 className="mb-2 font-black">{title}</h3>
      <div className="h-64">
        <ResponsiveContainer height="100%" width="100%">
          {children}
        </ResponsiveContainer>
      </div>
    </div>
  );
}
