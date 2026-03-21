import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc, writeBatch, query, where } from "firebase/firestore";

// Read Firebase config from environment or hardcode
const firebaseConfig = {
  apiKey: "AIzaSyAr9IEL0ylviKTPflup9A39883GM5EGMxQ",
  authDomain: "project1-d9e1a.firebaseapp.com",
  projectId: "project1-d9e1a",
  storageBucket: "project1-d9e1a.appspot.com",
  messagingSenderId: "776904102098",
  appId: "1:776904102098:web:8c826b983a51aa65d75d0b",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Actual data extracted from BITS Pilani II Semester 2025-26 Timetable
const BITS_COURSES = [
  {
    code: "CS F111",
    title: "COMPUTER PROGRAMMING",
    department: "Computer Science",
    credits: 4,
    instructor: "R GURURAJ",
    room: "F105",
    days: ["Tue", "Thu"],
    startTime: "09:00",
    endTime: "09:50",
    studentsEnrolled: 120
  },
  {
    code: "CS F211",
    title: "DATA STRUCTURES & ALGO",
    department: "Computer Science",
    credits: 4,
    instructor: "LALITA BHANU MURTHY NETI",
    room: "F102",
    days: ["Tue", "Thu"],
    startTime: "16:00",
    endTime: "16:50",
    studentsEnrolled: 85
  },
  {
    code: "CS F212",
    title: "DATA BASE SYSTEMS",
    department: "Computer Science",
    credits: 4,
    instructor: "PRAJNA DEVI UPADHYAY",
    room: "F102",
    days: ["Mon", "Wed", "Fri"],
    startTime: "08:00",
    endTime: "08:50",
    studentsEnrolled: 95
  },
  {
    code: "BITS F111",
    title: "THERMODYNAMICS",
    department: "Mechanical",
    credits: 3,
    instructor: "RAMENDRA KISHOR PAL",
    room: "F103",
    days: ["Tue", "Thu"],
    startTime: "09:00",
    endTime: "09:50",
    studentsEnrolled: 200
  },
  {
    code: "BIO F101",
    title: "INTRODUCTION TO BIOLOGICAL SCIENCE",
    department: "Biology",
    credits: 3,
    instructor: "DEBASRI BANDYOPADHYAY",
    room: "F102",
    days: ["Tue", "Thu"],
    startTime: "09:00",
    endTime: "09:50",
    studentsEnrolled: 150
  },
  {
    code: "EEE F111",
    title: "ELECTRICAL SCIENCES",
    department: "Electrical",
    credits: 3,
    instructor: "AMIT KUMAR PANDA",
    room: "F104",
    days: ["Mon", "Wed", "Fri"],
    startTime: "10:00",
    endTime: "10:50",
    studentsEnrolled: 180
  },
  {
    code: "MATH F113",
    title: "PROBABILITY AND STATISTICS",
    department: "Mathematics",
    credits: 3,
    instructor: "FARIDA PARVEZ BARBHUIYA",
    room: "F103",
    days: ["Mon", "Wed", "Fri"],
    startTime: "16:00",
    endTime: "16:50",
    studentsEnrolled: 160
  },
  {
    code: "BITS F225",
    title: "ENVIRONMENTAL STUDIES",
    department: "Humanities",
    credits: 3,
    instructor: "JAGADEESH ANMALA",
    room: "F105",
    days: ["Mon", "Wed", "Fri"],
    startTime: "11:00",
    endTime: "11:50",
    studentsEnrolled: 250
  }
];

async function seedDatabase() {
  console.log("🌱 Beginning BITS Pilani database seeding process...");
  
  try {
    // 1. Clear existing courses to avoid clutter
    console.log("Cleaning up old courses...");
    const coursesSnapshot = await getDocs(collection(db, "courses"));
    const batchDelete = writeBatch(db);
    coursesSnapshot.docs.forEach((d) => batchDelete.delete(d.ref));
    await batchDelete.commit();

    console.log("Cleaning up old timetable slots...");
    const ttSnapshot = await getDocs(collection(db, "timetable"));
    const batchDeleteTt = writeBatch(db);
    ttSnapshot.docs.forEach((d) => batchDeleteTt.delete(d.ref));
    await batchDeleteTt.commit();

    // 2. Insert Official BITS Courses
    console.log("Inserting authentic BITS Pilani courses...");
    const courseIds = [];
    
    for (const course of BITS_COURSES) {
      // Add Course
      const courseRef = await addDoc(collection(db, "courses"), {
        code: course.code,
        title: course.title,
        department: course.department,
        credits: course.credits,
        description: `Official BITS Pilani course offered in Semester II 2025-26. Instructor In-Charge: ${course.instructor}.`,
        createdAt: new Date()
      });
      
      courseIds.push(course.code);

      // Add Timetable slots for this course based on the PDF
      for (const day of course.days) {
        await addDoc(collection(db, "timetable"), {
          courseId: courseRef.id,
          courseCode: course.code,
          courseName: course.title,
          day: day,
          startTime: course.startTime,
          endTime: course.endTime,
          room: course.room,
          instructor: course.instructor,
          section: "L1",
          type: "Lecture"
        });
      }
      console.log(`✅ Added: ${course.code} - ${course.title} (Room ${course.room})`);
    }

    console.log("🎉 Database seeded successfully with genuine BITS Pilani data!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Error seeding database:", error);
    process.exit(1);
  }
}

seedDatabase();
