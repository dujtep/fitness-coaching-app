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

ใช้สำหรับ:

- Customer web app
- Onboarding form
- Body type selection
- Injury assessment form
- Daily workout page
- Food / water / weight tracking
- Progress dashboard
- Admin dashboard
- Trainer dashboard

---

## Backend

- Next.js API Routes
- TypeScript
- REST API
- JWT Authentication
- Role-based Access Control

ใช้สำหรับ:

- Customer authentication
- Program recommendation logic
- Nutrition target calculation
- Daily tracking API
- Workout program API
- Progress summary API
- Product / merchandise API
- Trainer contact add-on API
- Admin management API

---

## Database

- PostgreSQL
- Prisma ORM

ใช้สำหรับเก็บข้อมูลหลักของระบบ เช่น

- Customer profile
- Body information
- Body type
- Injury assessment
- Medical condition
- Work lifestyle
- Training frequency
- Workout program
- Exercise list
- Nutrition target
- Daily tracking
- Progress data
- AI feedback summary
- Products
- Orders
- Trainer contact requests

---

## Storage

สำหรับ MVP จะใช้ Database Storage ไปก่อน และค่อยย้ายไป S3-compatible storage ภายหลัง

### MVP Storage Approach

```text
Storage: PostgreSQL Database
Media Metadata: Stored in database
Small Image Files: Stored in database
Large Video Files: Store metadata first, migrate actual files later
Future Storage: S3-compatible object storage
```

### Stored Media Data

ใช้สำหรับเก็บ:

- Body type reference images
- Injury assessment reference images
- Product images
- Exercise video metadata
- E-book file metadata

### Recommended MVP Rule

```text
MVP: Store small images and file metadata in database.
Future: Move large files to S3-compatible object storage.
```

### Future Storage Migration

ในอนาคตสามารถย้ายไปใช้:

- AWS S3
- Cloudflare R2
- Supabase Storage
- Cloudinary

### Future Storage Structure

```text
Database:
- fileId
- fileName
- fileType
- fileSize
- fileUrl
- storageProvider
- relatedEntityType
- relatedEntityId

S3 / External Storage:
- Actual image files
- Actual video files
- E-book files
```

---

## Authentication

- NextAuth.js หรือ Clerk

รองรับ:

- Customer login
- Admin login
- Trainer login
- Role-based access control

### User Roles

```text
Customer
Admin
Trainer
```

---

## AI Features

- OpenAI API

ใช้สำหรับ:

- สรุปผลหลังจบโปรแกรม
- ให้ feedback เชิงให้กำลังใจ
- วิเคราะห์ข้อมูล calorie, protein, water intake และ workout completion
- สร้างคำแนะนำเบื้องต้นจาก progress ของลูกค้า
- สรุปว่าลูกค้าทำได้ใกล้เป้าหมายหรือไม่
- อธิบายว่าถ้าทำไม่ถึงเป้าหมาย จะส่งผลต่อผลลัพธ์อย่างไร

### MVP AI Scope

```text
AI Summary Feedback after program completion
```

### Future AI Scope

```text
AI workout form feedback from exercise video
AI meal recommendation
AI program adjustment
```

> AI workout form feedback จากวิดีโอควรอยู่ใน Future Enhancement เพราะซับซ้อนกว่า MVP

---

## Charts & Progress Tracking

- Recharts

ใช้สำหรับ:

- Weight Progress Graph
- Total Calories Graph
- Daily Calories Graph
- Workout Completion Graph
- Water Intake Graph

### MVP Graphs

```text
Weight Progress Graph
Total Calories Graph
```

### Future Graphs

```text
Body Fat Progress Graph
Workout Volume Graph
Strength Progress Graph
1RM Progress Graph
```

---

## Calendar & Reminder

- FullCalendar หรือ React Big Calendar
- Email Notification
- Push Notification ในอนาคต

ใช้สำหรับ:

- แสดงวันฝึก
- แสดงวันพัก
- แจ้งเตือนวันฝึก
- แจ้งเตือนให้ดื่มน้ำ
- แจ้งเตือนให้ track อาหาร
- แจ้งเตือนให้ชั่งน้ำหนัก

---

## Payment

สำหรับ MVP สามารถเริ่มจาก manual payment ก่อน

### MVP Payment

```text
Manual payment confirmation
```

ใช้สำหรับ:

- Trainer contact add-on
- Merchandise order

### Future Payment Gateway

สามารถต่อยอดเป็น:

- Stripe
- Omise
- 2C2P
- PromptPay QR

---

## E-commerce

ใช้ระบบภายในแอปก่อนสำหรับ MVP

รองรับ:

- Product listing
- Product detail
- Product image
- Price
- Stock
- Order status
- Basic order management

ตัวอย่างสินค้า:

- เสื้อยืด
- ถุงเท้า
- ขวดน้ำ
- ผ้าขนหนู
- Resistance band

---

## Deployment

- Vercel สำหรับ Frontend / Full-stack Next.js
- Neon หรือ Supabase สำหรับ PostgreSQL
- Railway หรือ Render ถ้าแยก Backend ในอนาคต

### Recommended MVP Deployment

```text
Frontend / Backend: Vercel
Database: Neon หรือ Supabase PostgreSQL
Storage: PostgreSQL Database first
```

---

## Development Tools

- GitHub
- GitHub Actions
- ESLint
- Prettier
- Husky
- lint-staged
- Docker optional

ใช้สำหรับ:

- Version control
- Code quality
- Formatting
- Pre-commit validation
- CI/CD pipeline
- Automated test execution

---

## Testing

- Jest หรือ Vitest
- React Testing Library
- Playwright optional

### Test Types

```text
Unit Test
Integration Test
End-to-End Test
```

ใช้สำหรับ:

- ทดสอบ business logic
- ทดสอบ form validation
- ทดสอบ API
- ทดสอบ user flow สำคัญ
- ทดสอบ dashboard และ tracking flow

---

# Recommended MVP Stack

```text
Frontend: Next.js + React + TypeScript + Tailwind CSS + shadcn/ui
Backend: Next.js API Routes
Database: PostgreSQL + Prisma
Auth: NextAuth.js หรือ Clerk
Storage: PostgreSQL Database first, migrate to S3 later
AI: OpenAI API
Charts: Recharts
Calendar: FullCalendar หรือ React Big Calendar
Payment: Manual payment first
Deployment: Vercel + Neon/Supabase
```

---

# Simple Architecture

```text
Customer Web App
        ↓
Next.js Frontend
        ↓
Next.js API Routes
        ↓
Prisma ORM
        ↓
PostgreSQL Database

External Services:
- OpenAI API for AI feedback
- Email / Push service for reminders
- Future S3-compatible storage for media files
- Future payment gateway for trainer add-on and products
```

---

# System Modules

## Customer Module

ใช้สำหรับ:

- Register / Login
- กรอกข้อมูลร่างกาย
- เลือก body type
- ทำ injury assessment
- กรอกโรคประจำตัว
- เลือกจำนวนวันฝึก
- เริ่มโปรแกรม
- Track อาหาร น้ำ น้ำหนัก และ workout
- ดู progress dashboard
- ดู AI feedback summary

---

## Program Module

ใช้สำหรับ:

- จัดการ workout program
- จัดการ nutrition program
- จัดการ injury-based program
- จัดการ normal program
- จ่ายโปรแกรมตามข้อมูลลูกค้า

---

## Exercise Module

ใช้สำหรับ:

- จัดการท่าออกกำลังกาย
- จัดการจำนวนเซ็ต
- จัดการจำนวนครั้ง
- จัดการเวลาพัก
- จัดการคำแนะนำการเล่น
- จัดการวิดีโอสอนท่า

---

## Tracking Module

ใช้สำหรับ:

- Track calories
- Track protein
- Track carbohydrate
- Track fat
- Track water intake
- Track body weight
- Track workout completion

---

## AI Feedback Module

ใช้สำหรับ:

- วิเคราะห์ข้อมูลหลังจบโปรแกรม
- สรุปความสม่ำเสมอ
- สรุปว่าแคลอรี่ถึงเป้าหมายหรือไม่
- สรุปผลต่อเป้าหมาย
- ให้ feedback เชิงให้กำลังใจ

---

## Calendar Module

ใช้สำหรับ:

- แสดงวันฝึก
- แสดงวันพัก
- แจ้งเตือน workout
- แจ้งเตือน water tracking
- แจ้งเตือน food tracking

---

## Trainer Contact Module

ใช้สำหรับ:

- ลูกค้าติดต่อเทรนเนอร์
- ขอปรับโปรแกรม
- ขอ feedback เพิ่มเติม
- เป็น paid add-on feature

---

## Merchandise Module

ใช้สำหรับ:

- แสดงสินค้า
- ขายสินค้า
- จัดการ stock
- จัดการ order
- ใช้เป็น reward หรือ add-on product

---

# Why This Stack

- เหมาะกับการทำ MVP ได้เร็ว
- ใช้ TypeScript ทั้ง frontend และ backend
- Next.js ทำได้ทั้ง frontend และ API ใน repo เดียว
- PostgreSQL เหมาะกับข้อมูล customer, tracking, program และ order
- Prisma ช่วยให้จัดการ database ง่าย
- Tailwind CSS และ shadcn/ui ช่วยให้ทำ UI ได้เร็วและดู professional
- Recharts เหมาะกับ progress dashboard
- OpenAI API รองรับ AI feedback summary
- Vercel deploy ง่าย
- Storage ใช้ database ก่อนได้ ลดความซับซ้อนของ MVP
- อนาคตสามารถ migrate media files ไป S3 ได้โดยไม่ต้องเปลี่ยน architecture หลัก
