# Tech Stack

## Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- React Hook Form
- Zod
- Recharts

## Backend

- Next.js API Routes หรือ NestJS
- TypeScript
- REST API
- JWT Authentication
- Role-based Access Control

## Database

- PostgreSQL
- Prisma ORM

## Storage

- Cloudinary หรือ AWS S3

ใช้สำหรับเก็บ:

- รูปภาพสินค้า
- วิดีโอสอนท่าออกกำลังกาย
- รูปประกอบ body type
- รูปประกอบ injury assessment

## Authentication

- NextAuth.js หรือ Clerk

รองรับ:

- Customer login
- Admin login
- Trainer login

## AI Features

- OpenAI API

ใช้สำหรับ:

- สรุปผลหลังจบโปรแกรม
- ให้ feedback เชิงให้กำลังใจ
- วิเคราะห์ข้อมูล calorie, protein, water intake, workout completion
- สร้างคำแนะนำเบื้องต้นจาก progress ของลูกค้า

> AI workout form feedback จากวิดีโอควรอยู่ใน Future Enhancement เพราะซับซ้อนกว่า MVP

## Charts & Progress Tracking

- Recharts

ใช้สำหรับ:

- Weight Progress Graph
- Total Calories Graph
- Daily Calories Graph
- Workout Completion Graph
- Water Intake Graph

## Calendar & Reminder

- FullCalendar หรือ React Big Calendar
- Email Notification
- Push Notification ในอนาคต

## Payment

สำหรับ MVP อาจเริ่มจาก manual payment ก่อน

Future:

- Stripe
- Omise
- 2C2P
- PromptPay QR

## E-commerce

ใช้ระบบภายในแอปก่อนสำหรับ MVP

รองรับ:

- Product listing
- Product detail
- Order status
- Stock management

## Deployment

- Vercel สำหรับ Frontend / Full-stack Next.js
- Supabase หรือ Neon สำหรับ PostgreSQL
- Railway หรือ Render ถ้าแยก Backend
- Cloudinary สำหรับ media storage

## Development Tools

- GitHub
- GitHub Actions
- ESLint
- Prettier
- Husky
- lint-staged
- Docker optional

## Recommended MVP Stack

```text
Frontend: Next.js + React + TypeScript + Tailwind CSS + shadcn/ui
Backend: Next.js API Routes
Database: PostgreSQL + Prisma
Auth: NextAuth.js หรือ Clerk
Storage: Cloudinary
AI: OpenAI API
Charts: Recharts
Deployment: Vercel + Neon/Supabase
