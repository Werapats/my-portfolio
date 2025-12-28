"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Code2, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center p-6 bg-[#050505] text-white overflow-hidden relative selection:bg-orange-500/30 selection:text-orange-200">
      
      {/* --- Background Effects --- */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>

      {/* Container */}
      <div className="max-w-6xl w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12 relative z-10">
        
        {/* ข้อความ (ซ้าย) */}
        <div className="text-center md:text-left space-y-6 md:w-3/5">
          
          {/* Badge โรงเรียน */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            <span className="text-xs font-medium text-stone-300 tracking-wide uppercase">
              โรงเรียนสตรีอ่างทอง
            </span>
          </motion.div>
          
          {/* ชื่อและตำแหน่ง (แก้ไขตรงนี้ให้เป็นบรรทัดเดียว) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {/* ปรับขนาดตัวอักษรเล็กน้อยสำหรับมือถือ เพื่อไม่ให้ล้นจอ (text-4xl -> md:text-7xl) */}
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-2 tracking-tight leading-tight">
              วีรภัทร{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">
                ถนอมศรี
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-stone-400 font-light flex items-center justify-center md:justify-start gap-2">
              <Code2 className="w-5 h-5 text-orange-500" />
              แผนการเรียนพิเศษวิทย์-คณิต-คอมฯ
            </p>
          </motion.div>

          {/* คำอธิบาย */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-stone-400 text-base md:text-lg leading-relaxed max-w-lg mx-auto md:mx-0"
          >
           <span className="text-stone-200 font-medium">ผมมีความตั้งใจศึกษาต่อ</span>ในสาขาวิชาวิศวกรรมคอมพิวเตอร์ คณะวิศวกรรมศาสตร์ มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี เพราะเชื่อว่าจะช่วยต่อยอดความรู้ และศักยภาพในการเรียน และสร้างสรรค์เทคโนโลยีใหม่ๆ ที่ตอบโจทย์ทั้งความฝันของผมเอง และเป็นประโยชน์ต่อผู้คนกับสังคม เหมือนกับที่เทคโนโลยีได้เป็นส่วนสำคัญในชีวิตของเราทุกวันนี้
          </motion.p>

          {/* ปุ่ม Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="pt-4 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <Link href="/why">
              <button className="group relative px-8 py-3 bg-white text-stone-950 rounded-full font-bold text-sm hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(249,115,22,0.4)] flex items-center gap-2 mx-auto sm:mx-0">
                ทำไมต้องที่นี่?
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </motion.div>
        </div>

        {/* รูปภาพโปรไฟล์ (ขวา) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, type: "spring" }}
          className="relative w-64 h-64 md:w-[400px] md:h-[400px] shrink-0"
        >
            {/* วงแหวนตกแต่งด้านหลัง */}
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-500 to-purple-600 rounded-full blur-[60px] opacity-30 animate-pulse"></div>
            
            {/* Card กรอบรูป */}
            <div className="relative w-full h-full rounded-full border-2 border-white/10 p-2 bg-white/5 backdrop-blur-sm">
                <div className="w-full h-full rounded-full overflow-hidden relative border-4 border-[#050505]">
                    <Image 
                        src="https://i.ibb.co/RkgwjxKz/2025-10-05-004233.png"
                        alt="Profile"
                        fill
                        className="object-cover hover:scale-110 transition-transform duration-700"
                    />
                </div>
                
                {/* Floating Badge (ตกแต่ง) */}
                <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    className="absolute -bottom-2 -left-2 bg-[#1a1a1a] border border-white/10 p-3 rounded-2xl shadow-xl flex items-center gap-3"
                >
                    <div className="bg-orange-500/20 p-2 rounded-full">
                        <Sparkles className="w-5 h-5 text-orange-400" />
                    </div>
                    <div>
                        <p className="text-[10px] text-stone-400 uppercase tracking-wider">Passion</p>
                        <p className="text-xs font-bold text-white">Kmutt</p>
                    </div>
                </motion.div>
            </div>
        </motion.div>

      </div>
    </main>
  );
}