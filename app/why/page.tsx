"use client";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen, Lightbulb, Users, Quote } from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

export default function WhyPage() {
  return (
    // h-screen + overflow-hidden คือหัวใจสำคัญที่ทำให้หน้าไม่เลื่อน
    <main className="h-screen w-full flex flex-col lg:flex-row bg-[#050505] text-white overflow-hidden relative selection:bg-orange-500/30 selection:text-orange-200">
      
      {/* --- Background Effects --- */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-600/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 mix-blend-overlay pointer-events-none"></div>

      {/* ---------------- Left Section: Image (50%) ---------------- */}
      {/* ตัด border-r ออกเพื่อให้ดูลื่นไหล หรือจะใส่ border-white/5 คืนก็ได้ */}
      <motion.div 
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="hidden lg:block lg:w-1/2 h-full relative overflow-hidden group"
      >
        <Image 
          src="https://www.kmutt.ac.th/wp-content/uploads/2020/09/KMUTT_CI_Semi_Logo-normal-full-1061x1200.png" 
          alt="KMUTT Atmosphere"
          fill
          className="object-cover transition-transform duration-[3s] group-hover:scale-105 opacity-80"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#050505]/20 to-[#050505]" />
        
        <div className="absolute top-8 left-8 bg-white/10 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full">
            <span className="text-xs font-bold tracking-widest text-orange-400 uppercase">My Vision</span>
        </div>
      </motion.div>

      {/* ---------------- Right Section: Content (50%) ---------------- */}
      {/* ใช้ h-full และ flex-col เพื่อจัดเนื้อหาให้เต็มความสูงพอดี */}
      <div className="w-full lg:w-1/2 h-full flex flex-col justify-center px-6 lg:px-12 xl:px-20 py-6 relative z-10">
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col h-full justify-center max-h-[900px]" // max-h เพื่อไม่ให้ยืดจนน่าเกลียดในจอแนวตั้งยาวๆ
        >
          {/* 1. Header Section */}
          <motion.div variants={itemVariants} className="mb-4 shrink-0">
            <div className="flex items-center gap-3 text-orange-500 font-bold text-xs tracking-[0.2em] uppercase mb-2">
              <span className="w-6 h-[2px] bg-orange-500 inline-block"></span>
              Vision & Passion
            </div>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-white mb-1">
              Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">KMUTT?</span>
            </h1>
            <p className="text-stone-500 text-sm lg:text-base font-light">
              ทำไมต้องเป็นที่นี่? <span className="text-stone-700 mx-2">|</span> คำตอบจากใจและความตั้งใจจริง
            </p>
          </motion.div>
          
          {/* 2. Reasons Grid (Flexible Height) */}
          {/* flex-1 จะสั่งให้ส่วนนี้ขยายกินพื้นที่ว่างทั้งหมด ทำให้ดูเต็มจอพอดี */}
          <div className="flex-1 flex flex-col justify-center gap-3 lg:gap-4 py-2">
            
            <ReasonCard 
              icon={<BookOpen className="w-4 h-4 text-orange-400" />}
              title="Project-based Learning"
              desc="ผมศึกษาโครงสร้างหลักสูตรของที่นี่มาละเอียดครับ ชอบตรงที่ 'วิชาเรียนมันไม่อยู่นิ่ง' ปรับเปลี่ยนตาม Tech Trend ตลอดเวลา ทำให้ผมมั่นใจว่าทุกบรรทัดที่โค้ด ทุกโปรเจกต์ที่ทำ จะเป็นสกิลที่เอาไปใช้งานจริงได้ทันที"
            />

            <ReasonCard 
              icon={<Users className="w-4 h-4 text-orange-400" />}
              title="Developer Community"
              desc="สารภาพตรงๆ ว่า 'ที่นี่คือเป้าหมายแรกและเป้าหมายเดียว' ของผมมาตลอดครับ จุดเปลี่ยนสำคัญคือวัน Open House ที่ผมไม่ได้แค่เดินดู แต่ได้เข้าไป พูดคุยและซักถามรุ่นพี่แบบเจาะลึก เกี่ยวกับสาขา ยิ่งได้ฟังคำตอบและเห็น Passion ของพี่ๆ ตอนอธิบาย มันเหมือนภาพในหัวผมมันชัดขึ้นทันทีว่า 'ต้องเป็นที่นี่แหละ' ที่จะเป็นบ้านหลังที่สองของผมครับ"
            />

            <ReasonCard 
              icon={<Lightbulb className="w-4 h-4 text-orange-400" />}
              title="Innovation & Future (Ant Spirit)"
              desc="ผมชอบ Culture 'ความสู้งาน' (Ant Spirit) ของบางมดครับ ผมรู้กิตติศัพท์ว่าที่นี่เรียนโหดและเน้นผลงานจริง ซึ่งมัน 'ตรงจริต' ผมมาก ผมไม่ได้มองหาที่เรียนสบายๆ แต่อยากเอาตัวเองมาอยู่ในที่ที่คนเก่งๆ เขาขยันกัน เพื่อกดดันให้ผมพัฒนาตัวเองแบบก้าวกระโดดครับ"
            />

          </div>

          {/* 3. Button Section */}
          <motion.div variants={itemVariants} className="shrink-0 mt-4">
            <Link href="/portfolio">
              <button className="group relative inline-flex items-center gap-3 px-6 py-3 bg-white text-black rounded-full font-bold text-xs lg:text-sm tracking-widest hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-orange-500/25">
                ดูผลงาน
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </motion.div>

        </motion.div>
      </div>
    </main>
  );
}

// Compact Card Design
function ReasonCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <motion.div 
      variants={itemVariants}
      // ใช้ p-3 หรือ p-4 เพื่อประหยัดพื้นที่แนวตั้ง
      className="group relative p-3 lg:p-4 rounded-xl bg-[#111] border border-white/5 hover:border-orange-500/30 hover:bg-white/[0.02] transition-all duration-300"
    >
      <div className="flex gap-4 items-start">
        {/* Icon Box */}
        <div className="mt-1 w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center shrink-0 border border-orange-500/20 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        
        {/* Content */}
        <div className="flex-1">
          <h3 className="text-base lg:text-lg font-bold text-white mb-1 group-hover:text-orange-400 transition-colors">
            {title}
          </h3>
          <div className="relative">
             {/* Quote icon เล็กๆ */}
            <Quote className="absolute -top-1 -left-1 w-2 h-2 text-stone-700 transform -scale-x-100 opacity-0 group-hover:opacity-100 transition-opacity" />
            
            {/* ปรับขนาดตัวหนังสือข้อความ (Description) ให้พอดี */}
            <p className="text-stone-400 text-xs lg:text-[13px] xl:text-sm leading-relaxed font-light group-hover:text-stone-300 transition-colors">
              {desc}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}