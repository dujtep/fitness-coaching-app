# Fitness & Nutrition Coaching App

## Overview

Fitness & Nutrition Coaching App เป็นแอปสำหรับช่วยลูกค้าเริ่มต้นดูแลรูปร่าง สุขภาพ โภชนาการ และการออกกำลังกายแบบมีระบบ โดยเริ่มจากการเก็บข้อมูลร่างกาย ประเมินรูปร่าง ประเมินอาการบาดเจ็บ โรคประจำตัว ไลฟ์สไตล์การทำงาน และความสะดวกในการออกกำลังกาย จากนั้นระบบจะจ่ายโปรแกรมโภชนาการและโปรแกรมฝึกที่เหมาะสมให้กับลูกค้า

เป้าหมายหลักของแอปคือช่วยให้ลูกค้าสามารถเริ่มต้นโปรแกรมได้ด้วยตัวเอง ติดตามอาหาร น้ำหนักตัว การดื่มน้ำ และการฝึกประจำวัน พร้อมมีระบบสรุปผลและ feedback เชิงให้กำลังใจเมื่อจบโปรแกรม

---

## Key Objectives

- เก็บข้อมูลพื้นฐานของลูกค้าเพื่อประเมินสุขภาพเบื้องต้น
- คำนวณ BMI และประเมินน้ำหนักที่เหมาะสม
- ประเมินรูปร่างเบื้องต้นจาก body type
- ประเมินอาการบาดเจ็บหรือข้อจำกัดในการฝึก
- ตรวจสอบโรคประจำตัว เช่น ความดันโลหิต
- จ่ายโปรแกรมออกกำลังกายและโภชนาการที่เหมาะสม
- ให้ลูกค้าสามารถเริ่มโปรแกรมและติดตามผลได้ด้วยตัวเอง
- มีระบบ feedback สรุปผลเมื่อจบโปรแกรม
- มีกราฟสรุปความก้าวหน้า เช่น น้ำหนักตัว และแคลอรี่รวม
- รองรับการขายสินค้าเสริม เช่น เสื้อยืด ถุงเท้า
- รองรับระบบติดต่อเทรนเนอร์แบบเสียค่าใช้จ่ายเพิ่มเติม

---

# User Onboarding Flow

## 1. Customer Body Information

ระบบจะสอบถามข้อมูลพื้นฐานของลูกค้า ได้แก่

- น้ำหนักตัว
- ส่วนสูง
- Body Fat %
- เพศ
- อายุ
- เป้าหมายหลัก เช่น ลดไขมัน เพิ่มกล้ามเนื้อ รักษารูปร่าง

ข้อมูลเหล่านี้จะถูกใช้เพื่อประเมิน:

- ค่า BMI
- น้ำหนักที่เหมาะสม
- น้ำหนักที่สามารถลดได้อย่างเหมาะสม
- น้ำหนักที่สามารถเพิ่มได้อย่างเหมาะสม
- เป้าหมายสารอาหารเบื้องต้น

---

## BMI Calculation

ระบบจะคำนวณ BMI จากสูตร:

```text
BMI = น้ำหนักตัว (kg) / ส่วนสูง (m)^2
```

ตัวอย่าง:

```text
น้ำหนัก = 70 kg
ส่วนสูง = 1.75 m

BMI = 70 / (1.75 x 1.75)
BMI = 22.86
```

### BMI Category

| BMI | Category |
|---|---|
| ต่ำกว่า 18.5 | น้ำหนักน้อย |
| 18.5 - 22.9 | สมส่วน |
| 23.0 - 24.9 | น้ำหนักเกิน |
| 25.0 - 29.9 | อ้วนระดับ 1 |
| 30 ขึ้นไป | อ้วนระดับ 2 |

> หมายเหตุ: BMI เป็นเพียงค่าประเมินเบื้องต้นเท่านั้น ควรใช้ร่วมกับ Body Fat %, รูปร่าง, พฤติกรรมการใช้ชีวิต และข้อมูลสุขภาพอื่น ๆ

---

## 2. Body Type Selection

หลังจากกรอกข้อมูลพื้นฐาน ลูกค้าจะต้องเลือกรูปร่างที่ใกล้เคียงกับตัวเองมากที่สุดจากภาพตัวอย่าง 3 รูปแบบ

### Body Types

### 1. Ectomorph

ลักษณะ:

- ผอมสูง
- เผาผลาญไว
- น้ำหนักขึ้นยาก
- สร้างกล้ามเนื้อยาก
- เหมาะกับโปรแกรมเพิ่มกล้ามเนื้อและเพิ่มพลังงานจากอาหาร

### 2. Mesomorph

ลักษณะ:

- หุ่นนักกีฬา
- สร้างกล้ามเนื้อได้ง่าย
- เผาผลาญดี
- ปรับรูปร่างได้ง่ายกว่ากลุ่มอื่น
- เหมาะกับโปรแกรมสร้างกล้ามเนื้อ ลดไขมัน หรือรักษารูปร่าง

### 3. Endomorph

ลักษณะ:

- รูปร่างท้วม
- สะสมไขมันง่าย
- สร้างกล้ามเนื้อได้ดี
- ต้องควบคุมอาหารมากขึ้น
- ควรเน้นเวทเทรนนิ่งร่วมกับคาร์ดิโอ

---

## 3. Injury & Posture Assessment

ระบบจะสอบถามอาการบาดเจ็บหรือความผิดปกติของร่างกายเบื้องต้น โดยอาจมีภาพประกอบให้ลูกค้าเปรียบเทียบ

### Assessment Questions

### Lower Back Pain

```text
คุณมีอาการปวดหลังล่างไหม?
```

ใช้เพื่อประเมินว่าควรหลีกเลี่ยงหรือปรับท่าฝึกบางท่าหรือไม่ เช่น

- Deadlift หนัก
- Back Squat หนัก
- Good Morning
- ท่าที่มีแรงกดลงกระดูกสันหลังสูง

---

### Neck, Shoulder & Office Syndrome

```text
คุณรู้สึกปวดเมื่อยบ่าและไหล่จากการนั่งทำงานนาน ๆ ไหม?
```

ใช้เพื่อประเมินอาการจากการนั่งทำงาน เช่น

- ไหล่งุ้ม
- คอยื่น
- บ่าตึง
- หลังช่วงบนตึง

อาจจ่ายโปรแกรมเสริม เช่น

- Shoulder mobility
- Upper back activation
- Chest stretching
- Posture correction exercise

---

### Knee Valgus

```text
จากภาพ คุณมีลักษณะหัวเข่าที่หุบเข้าหากันไหม?
```

ใช้เพื่อประเมินความเสี่ยงของเข่าล้มเข้าด้านในระหว่างฝึก เช่น ตอน Squat, Lunge หรือ Jump

หากพบความเสี่ยง ระบบควรแนะนำ:

- Glute activation
- Hip stability exercise
- Squat regression
- หลีกเลี่ยงการกระโดดหรือโหลดหนักในช่วงแรก

---

### Flat Feet / Overpronation

```text
จากภาพ คุณมีอาการเท้าล้มไหม?
```

ใช้เพื่อประเมินปัญหาเท้าล้ม ซึ่งอาจส่งผลต่อเข่า สะโพก และหลังล่าง

หากพบความเสี่ยง ระบบควรแนะนำ:

- Foot arch activation
- Calf mobility
- Balance exercise
- ปรับท่าฝึก lower body ให้ปลอดภัยขึ้น

---

## 4. Medical Condition Assessment

ระบบจะสอบถามโรคประจำตัวของลูกค้า เช่น

- ความดันโลหิตสูง
- เบาหวาน
- โรคหัวใจ
- โรคเกี่ยวกับข้อหรือกระดูก
- โรคอื่น ๆ ที่เกี่ยวข้องกับการออกกำลังกาย

### Hypertension Warning

หากลูกค้ามีภาวะความดันโลหิตสูง ควรหลีกเลี่ยงหรือระวังท่าฝึกบางประเภท เช่น

- ท่าที่ต้องกลั้นหายใจ
- ท่าที่ใช้แรงเบ่งสูง
- Heavy Squat
- Heavy Deadlift
- Heavy Overhead Press
- HIIT ที่หนักเกินไป
- ท่าที่ทำให้หัวอยู่ต่ำกว่าหัวใจเป็นเวลานาน

ระบบควรแนะนำให้ลูกค้า:

- ฝึกด้วยความหนักระดับปานกลาง
- หายใจตลอดเวลา ไม่กลั้นหายใจ
- พักระหว่างเซ็ตให้เพียงพอ
- ปรึกษาแพทย์ก่อนเริ่มโปรแกรม หากมีโรคประจำตัวรุนแรง

> Disclaimer: แอปนี้ไม่ใช่เครื่องมือวินิจฉัยโรค โปรแกรมที่จ่ายเป็นคำแนะนำทั่วไป ลูกค้าที่มีโรคประจำตัวควรปรึกษาแพทย์หรือผู้เชี่ยวชาญก่อนเริ่มออกกำลังกาย

---

## 5. Work Lifestyle Assessment

ระบบจะสอบถามสไตล์การทำงานของลูกค้า เพื่อปรับโปรแกรมให้เหมาะสมกับพฤติกรรมในชีวิตประจำวัน

### Example Question

```text
สไตล์การทำงานของคุณเป็นประมาณไหน?
```

ตัวเลือกตัวอย่าง:

- นั่งทำงานหน้าคอมพิวเตอร์เป็นเวลานาน
- เดินหรือยืนทำงานเป็นส่วนใหญ่
- งานใช้แรงกาย
- ทำงานเป็นกะ
- ทำงานไม่เป็นเวลา
- เดินทางบ่อย
- มีเวลาพักน้อย

ข้อมูลนี้จะใช้เพื่อปรับ:

- ปริมาณการฝึก
- ความหนักของโปรแกรม
- การจัดวันพัก
- โปรแกรม mobility
- คำแนะนำด้านโภชนาการ
- คำแนะนำด้านการนอนและการฟื้นตัว

---

## 6. Training Frequency

ระบบจะถามจำนวนวันที่ลูกค้าสะดวกออกกำลังกายต่อสัปดาห์

```text
คุณสะดวกออกกำลังกายสัปดาห์ละกี่ครั้ง?
```

ตัวเลือกตัวอย่าง:

- 2 วันต่อสัปดาห์
- 3 วันต่อสัปดาห์
- 4 วันต่อสัปดาห์
- 5 วันต่อสัปดาห์
- 6 วันต่อสัปดาห์

ระบบจะใช้ข้อมูลนี้เพื่อเลือกโปรแกรมที่เหมาะสม เช่น

| Frequency | Program Type |
|---|---|
| 2 วัน/สัปดาห์ | Full Body |
| 3 วัน/สัปดาห์ | Full Body / Upper-Lower Mix |
| 4 วัน/สัปดาห์ | Upper / Lower Split |
| 5 วัน/สัปดาห์ | Push Pull Legs / Hybrid |
| 6 วัน/สัปดาห์ | Advanced Split |

---

## 7. Program Recommendation

หลังจากระบบเก็บข้อมูลครบแล้ว ระบบจะจ่ายโปรแกรมให้ลูกค้า โดยพิจารณาจาก:

- น้ำหนัก
- ส่วนสูง
- Body Fat %
- BMI
- Body Type
- เป้าหมายของลูกค้า
- อาการบาดเจ็บ
- โรคประจำตัว
- สไตล์การทำงาน
- จำนวนวันที่สะดวกออกกำลังกายต่อสัปดาห์

### Program Types

### Normal Program

เหมาะสำหรับลูกค้าที่ไม่มีอาการบาดเจ็บหรือข้อจำกัดด้านสุขภาพ

ตัวอย่าง:

- Fat Loss Program
- Muscle Gain Program
- Body Recomposition Program
- General Fitness Program

### Injury-Based Program

เหมาะสำหรับลูกค้าที่มีอาการบาดเจ็บหรือ posture issue

ตัวอย่าง:

- Lower Back Friendly Program
- Shoulder & Office Syndrome Program
- Knee Valgus Correction Program
- Flat Feet Support Program

### Customer Choice

ลูกค้าสามารถเลือกได้ว่า:

- ต้องการใช้โปรแกรมที่ระบบแนะนำ
- ต้องการเลือกโปรแกรมปกติ
- ต้องการโปรแกรมที่ปรับตามอาการบาดเจ็บ
- ต้องการติดต่อเทรนเนอร์เพื่อปรับโปรแกรมแบบส่วนตัว

---

## 8. Nutrition Guide & E-book

ระบบจะจ่ายคู่มือ e-book สั้น ๆ ให้ลูกค้า เพื่อช่วยให้เข้าใจการควบคุมอาหารแบบง่าย

### E-book Content

เนื้อหาที่ควรมีใน e-book:

- วิธีประเมินปริมาณอาหารด้วยมือ
- วิธีจัดจานอาหาร
- หลักการแบ่งสัดส่วนอาหารตามแนวทาง สสส.
- กฎ 2:2:1
- กฎ 6:6:1
- วิธีอ่านฉลากโภชนาการเบื้องต้น
- วิธีเลือกโปรตีน คาร์โบไฮเดรต และไขมัน
- ตัวอย่างมื้ออาหาร
- วิธีชั่งอาหารเบื้องต้น
- วิธี track calories แบบง่าย

### Hand Portion Guide

ตัวอย่างการกะอาหารด้วยมือ:

| Food Type | Portion Guide |
|---|---|
| Protein | 1 ฝ่ามือ |
| Carbohydrate | 1 กำมือ |
| Vegetable | 1-2 กำปั้น |
| Fat | 1 นิ้วโป้ง |

### Plate Method

ตัวอย่างการจัดจาน:

- ผัก 1 ส่วน
- โปรตีน 1 ส่วน
- คาร์โบไฮเดรต 1 ส่วน

หรือปรับตามเป้าหมาย เช่น ลดไขมัน เพิ่มกล้ามเนื้อ หรือควบคุมน้ำหนัก

### Optional Video Content

ระบบอาจมีคลิปแนะนำสั้น ๆ เช่น

- วิธีชั่งอาหาร
- วิธีจัดจาน
- วิธีเลือกอาหารนอกบ้าน
- วิธีอ่านฉลากโภชนาการ
- วิธี track อาหารในแอป

---

## 9. Day 1 Program Start

เมื่อลูกค้าพร้อมเริ่มโปรแกรม ระบบจะมีหน้าเริ่มต้นวันที่ 1

### Day 1 Features

ในแอปจะมีข้อมูลดังนี้:

- เป้าหมายสารอาหารที่ระบบคำนวณให้
- เป้าหมายแคลอรี่ต่อวัน
- เป้าหมายโปรตีน
- เป้าหมายคาร์โบไฮเดรต
- เป้าหมายไขมัน
- เป้าหมายการดื่มน้ำ 3 ลิตรต่อวัน
- โปรแกรมฝึกประจำวัน
- คลิปสอนท่าฝึกทุกท่า
- ปุ่มเริ่มโปรแกรมด้วยตัวเอง

### Customer Action

ลูกค้าจะต้องกด:

```text
Start Program
```

หรือ

```text
เริ่มโปรแกรม
```

หลังจากนั้นระบบจะเริ่มนับวันโปรแกรม และแสดง task รายวันให้ลูกค้าทำเอง

---

## 10. Daily Tracking

ลูกค้าสามารถ track ข้อมูลรายวันได้ด้วยตัวเอง

### Nutrition Tracking

ลูกค้าสามารถบันทึก:

- แคลอรี่ที่กิน
- โปรตีน
- คาร์โบไฮเดรต
- ไขมัน
- ปริมาณน้ำดื่ม
- น้ำหนักตัว

### Workout Tracking

ลูกค้าสามารถบันทึก:

- ท่าที่ฝึก
- จำนวนเซ็ต
- จำนวนครั้ง
- น้ำหนักที่ใช้
- ความรู้สึกหลังฝึก
- ทำครบหรือไม่ครบ

### Water Tracking

ค่าเริ่มต้นของเป้าหมายการดื่มน้ำ:

```text
3 ลิตรต่อวัน
```

ระบบควรให้ลูกค้ากดบันทึกปริมาณน้ำที่ดื่มในแต่ละวัน

---

## 11. Exercise Program

แต่ละโปรแกรมฝึกควรมีข้อมูลดังนี้:

- ชื่อท่า
- จำนวนเซ็ต
- จำนวนครั้ง
- เวลาพัก
- คำแนะนำการเล่น
- ข้อควรระวัง
- คลิปวิดีโอสอนท่า
- กล้ามเนื้อหลักที่ใช้
- กล้ามเนื้อรองที่ใช้

### Example Exercise Card

```text
Exercise: Goblet Squat
Sets: 3
Reps: 10-12
Rest: 60-90 seconds
Video: exercise-video-url
Note: Keep your chest up and knees aligned with toes.
```

---

## 12. AI Workout Form Feedback

หากเป็นไปได้ ระบบควรมีฟีเจอร์ AI feedback ฟอร์มการฝึก

### Possible AI Feedback Features

- วิเคราะห์วิดีโอการฝึกของลูกค้า
- ตรวจสอบ posture ระหว่างฝึก
- แจ้งเตือนหากหลังงอ เข่าหุบ หรือไหล่ยก
- ให้คำแนะนำการปรับฟอร์ม
- สรุปข้อผิดพลาดที่พบบ่อย
- แนะนำ regression exercise หากลูกค้ายังทำท่าได้ไม่ดี

### Example Feedback

```text
Your squat depth is good, but your knees slightly collapse inward during the lowering phase.
Try pushing your knees outward and activate your glutes before starting the movement.
```

---

## 13. End Program Feedback

เมื่อจบโปรแกรม ลูกค้าจะกด:

```text
Complete Program
```

หรือ

```text
สำเร็จโปรแกรม
```

หลังจากนั้นระบบจะสรุปผลให้ลูกค้าโดยอัตโนมัติ

### Summary Data

ระบบควรสรุป:

- จำนวนวันที่ทำโปรแกรมครบ
- จำนวนวันที่ขาด
- แคลอรี่เฉลี่ยต่อวัน
- โปรตีนเฉลี่ยต่อวัน
- ปริมาณน้ำเฉลี่ยต่อวัน
- น้ำหนักตัวเริ่มต้น
- น้ำหนักตัวล่าสุด
- น้ำหนักที่ลดหรือเพิ่ม
- ความสม่ำเสมอในการฝึก
- ความสม่ำเสมอในการ track อาหาร

### AI Feedback Summary

ระบบควรให้ feedback แบบสั้น เข้าใจง่าย และให้กำลังใจ

ตัวอย่าง:

```text
คุณทำได้ดีมาก โปรแกรมนี้คุณทำสำเร็จไปแล้ว 85% ของแผนทั้งหมด
แคลอรี่เฉลี่ยของคุณใกล้เคียงกับเป้าหมาย แต่ยังมีบางวันที่โปรตีนต่ำกว่า target
หากคุณเพิ่มโปรตีนให้สม่ำเสมอมากขึ้น ผลลัพธ์เรื่องการรักษากล้ามเนื้อและการลดไขมันจะดีขึ้น

อย่ากังวลกับวันที่ทำไม่ได้ครบทุกอย่าง ความสม่ำเสมอโดยรวมของคุณถือว่าดีมาก
โปรแกรมถัดไปเราจะค่อย ๆ ปรับให้เหมาะกับร่างกายของคุณมากขึ้น
```

---

## 14. Progress Dashboard

ระบบควรมี dashboard สำหรับแสดงความก้าวหน้าของลูกค้า

### Progress Metrics

- น้ำหนักตัว
- Body Fat %
- แคลอรี่รวม
- แคลอรี่เฉลี่ยต่อวัน
- ปริมาณโปรตีนเฉลี่ย
- ปริมาณน้ำเฉลี่ย
- จำนวนวันที่ออกกำลังกาย
- จำนวนวันที่ทำครบตามแผน
- จำนวนวันที่ขาด

### Graphs

กราฟที่ควรมี:

- Weight Progress Graph
- Total Calories Graph
- Daily Calories Graph
- Workout Completion Graph
- Water Intake Graph

### 1RM

ฟีเจอร์ 1RM สามารถเพิ่มภายหลังได้

```text
1RM feature will be considered in future versions.
```

---

## 15. Calendar & Reminder System

ระบบควรมีปฏิทินสำหรับแจ้งเตือนวันฝึก

### Calendar Features

- แสดงวันฝึก
- แสดงวันพัก
- แสดงโปรแกรมประจำวัน
- แจ้งเตือนก่อนถึงเวลาฝึก
- แจ้งเตือนให้ดื่มน้ำ
- แจ้งเตือนให้ track อาหาร
- แจ้งเตือนให้ชั่งน้ำหนักตามรอบที่กำหนด

### Reminder Examples

```text
วันนี้มีโปรแกรมฝึก Upper Body เวลา 18:00 น.
```

```text
อย่าลืมดื่มน้ำให้ครบ 3 ลิตรวันนี้
```

```text
อย่าลืมบันทึกอาหารเย็นของคุณ
```

---

## 16. Trainer Contact System

ระบบควรมีฟีเจอร์ติดต่อเทรนเนอร์ โดยเป็นบริการเสริมที่ต้องเสียค่าใช้จ่ายเพิ่มเติม

### Trainer Contact Features

- ส่งข้อความหาเทรนเนอร์
- ขอปรับโปรแกรม
- ขอ feedback ฟอร์มการฝึก
- ขอคำแนะนำด้านโภชนาการ
- นัดหมาย consultation
- แนบรูปอาหารหรือวิดีโอการฝึก

### Payment Rule

```text
Contacting a trainer requires an additional payment.
```

---

## 17. Merchandise Store

ระบบสามารถมีสินค้าเล็ก ๆ สำหรับแจกหรือขายให้ลูกค้า

### Product Examples

- เสื้อยืด
- ถุงเท้า
- ผ้าขนหนู
- ขวดน้ำ
- กระเป๋าออกกำลังกาย
- Resistance band

### Store Features

- แสดงรายการสินค้า
- รายละเอียดสินค้า
- ราคา
- จำนวนคงเหลือ
- ระบบสั่งซื้อ
- สถานะการจัดส่ง
- Coupon หรือ reward สำหรับลูกค้าที่ทำโปรแกรมสำเร็จ

---

# Main App Features

## Customer Features

- Register / Login
- Body information form
- Body type selection
- Injury assessment
- Medical condition assessment
- Work lifestyle assessment
- Training frequency selection
- Program recommendation
- Nutrition target
- Water target
- Daily workout program
- Exercise video guide
- Nutrition e-book
- Food tracking
- Water tracking
- Weight tracking
- Calendar reminder
- Progress dashboard
- AI summary feedback
- Trainer contact add-on
- Merchandise store

## Admin / Trainer Features

- Manage programs
- Manage exercises
- Upload exercise videos
- Manage nutrition guide
- Manage customers
- View customer progress
- Review customer feedback
- Manage trainer consultation
- Manage products
- Manage orders

---

# User Flow Summary

```text
Customer Register / Login
        ↓
Input Body Information
        ↓
Calculate BMI & Estimate Suitable Weight
        ↓
Select Body Type
        ↓
Answer Injury Assessment
        ↓
Answer Medical Condition Assessment
        ↓
Answer Work Lifestyle
        ↓
Select Training Frequency
        ↓
System Recommends Program
        ↓
Customer Receives Nutrition Guide & Program
        ↓
Customer Starts Day 1 Program
        ↓
Customer Tracks Food, Water, Weight, and Workout
        ↓
System Shows Progress Dashboard
        ↓
Customer Completes Program
        ↓
AI Generates Final Feedback Summary
```

---

# Suggested Pages

## Public Pages

- Landing Page
- Pricing Page
- Program Overview Page
- Login Page
- Register Page

## Customer App Pages

- Dashboard
- Onboarding Form
- Body Type Selection
- Injury Assessment
- Medical Condition Form
- Program Recommendation
- Nutrition Target
- Daily Workout
- Exercise Detail
- Food Tracking
- Water Tracking
- Weight Tracking
- Calendar
- Progress Dashboard
- Program Summary
- Trainer Contact
- Store

## Admin Pages

- Customer Management
- Program Management
- Exercise Management
- Video Management
- Nutrition Guide Management
- Trainer Request Management
- Product Management
- Order Management

---

# Suggested Data Models

## Customer

```text
id
name
email
password
gender
age
height
weight
bodyFatPercentage
goal
bodyType
medicalCondition
workLifestyle
trainingFrequency
createdAt
updatedAt
```

## InjuryAssessment

```text
id
customerId
hasLowerBackPain
hasShoulderPain
hasKneeValgus
hasFlatFeet
notes
createdAt
updatedAt
```

## Program

```text
id
name
type
goal
bodyType
trainingFrequency
description
durationWeeks
isInjuryBased
createdAt
updatedAt
```

## Exercise

```text
id
name
description
targetMuscle
secondaryMuscle
sets
reps
restTime
videoUrl
warning
createdAt
updatedAt
```

## WorkoutPlan

```text
id
programId
dayNumber
title
description
createdAt
updatedAt
```

## NutritionTarget

```text
id
customerId
dailyCalories
protein
carbohydrate
fat
waterTarget
createdAt
updatedAt
```

## DailyTracking

```text
id
customerId
date
calories
protein
carbohydrate
fat
waterIntake
bodyWeight
workoutCompleted
notes
createdAt
updatedAt
```

## ProgramFeedback

```text
id
customerId
programId
completionRate
averageCalories
averageProtein
averageWaterIntake
startWeight
endWeight
weightChange
aiFeedback
createdAt
updatedAt
```

## Product

```text
id
name
description
price
stock
imageUrl
createdAt
updatedAt
```

---

# MVP Scope

## MVP Features

- Customer onboarding
- Body information form
- BMI calculation
- Body type selection
- Injury assessment
- Medical condition form
- Work lifestyle form
- Training frequency selection
- Program recommendation
- Nutrition target calculation
- Water target 3 liters/day
- Daily workout plan
- Exercise video display
- Food tracking
- Water tracking
- Weight tracking
- Progress graph
- Program completion summary
- Basic AI feedback summary
- Calendar reminder
- Merchandise listing
- Trainer contact add-on page

## Not Included in MVP

- Full AI video form analysis
- 1RM calculation
- Advanced wearable integration
- Full payment system
- Real-time trainer chat
- Advanced meal plan generation

---

# Future Enhancements

- AI form checking from exercise video
- 1RM calculation and strength progression graph
- Personalized meal plan generator
- Barcode scanner for food tracking
- Integration with smart watch
- Payment gateway
- Subscription system
- In-app trainer chat
- Community challenge
- Reward system
- Coupon for merchandise
- Advanced body composition analysis

---

# Safety & Disclaimer

แอปนี้เป็นเครื่องมือช่วยแนะนำการออกกำลังกายและโภชนาการเบื้องต้น ไม่ใช่เครื่องมือวินิจฉัยโรคหรือใช้แทนคำแนะนำจากแพทย์

ลูกค้าที่มีโรคประจำตัว เช่น ความดันโลหิตสูง โรคหัวใจ เบาหวาน หรือมีอาการบาดเจ็บ ควรปรึกษาแพทย์ นักกายภาพบำบัด หรือผู้เชี่ยวชาญก่อนเริ่มโปรแกรม

หากมีอาการเจ็บผิดปกติ แน่นหน้าอก เวียนหัว หายใจไม่ออก หรือปวดรุนแรงระหว่างออกกำลังกาย ควรหยุดทันทีและปรึกษาผู้เชี่ยวชาญ

---

# Success Metrics

ตัวชี้วัดความสำเร็จของระบบ:

- จำนวนลูกค้าที่สมัครใช้งาน
- จำนวนลูกค้าที่เริ่มโปรแกรม
- Completion rate ของโปรแกรม
- จำนวนวันที่ลูกค้า track อาหาร
- จำนวนวันที่ลูกค้าออกกำลังกายครบ
- ค่าเฉลี่ยน้ำหนักที่ลดหรือเพิ่มตามเป้าหมาย
- จำนวนลูกค้าที่กลับมาใช้โปรแกรมต่อ
- จำนวนลูกค้าที่ซื้อบริการ trainer add-on
- จำนวนสินค้าที่ขายได้
- Customer satisfaction score

---

# Key Message

Fitness & Nutrition Coaching App ช่วยให้ลูกค้าเริ่มต้นดูแลสุขภาพได้อย่างเป็นระบบ ตั้งแต่ประเมินร่างกาย เลือกโปรแกรม ฝึกตามแผน ติดตามผล และรับ feedback เมื่อจบโปรแกรม โดยเน้นให้ลูกค้าทำเองได้ง่าย ปลอดภัย และเหมาะกับเป้าหมายของแต่ละคน
