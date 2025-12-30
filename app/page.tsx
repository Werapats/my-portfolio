"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Code2, Sparkles, Cpu, Terminal, Mail, Github, Facebook } from "lucide-react"; 
import TiltedCard from "./TiltedCard";

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
        
        {/* --- ส่วนข้อความ (ซ้าย) --- */}
        <div className="text-center md:text-left md:w-3/5 relative space-y-8">
          
          {/* ส่วนหัว: Badge + ชื่อ */}
          <div className="space-y-4">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              <span className="text-xs font-medium text-stone-300 tracking-wide uppercase">
                โรงเรียนสตรีอ่างทอง
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight"
            >
              วีรภัทร{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">
                ถนอมศรี
              </span>
            </motion.h1>
          </div>

          {/* กล่องข้อมูล (Info Box) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm inline-flex flex-col md:flex-row md:items-center gap-4 hover:bg-white/10 transition-colors duration-300"
          >
              <div className="flex items-center gap-3">
                  <div className="p-2 bg-orange-500/20 rounded-lg">
                    <Code2 className="w-5 h-5 text-orange-400" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-stone-400 uppercase tracking-wider">Program</p>
                    <p className="text-sm font-medium text-stone-200">ห้องเรียนพิเศษวิทย์-คณิต-คอมฯ</p>
                  </div>
              </div>
              
              <div className="hidden md:block w-[1px] h-8 bg-white/10"></div>

              <div className="flex gap-2 justify-center">
                   <span className="px-2 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-[10px] text-blue-300 font-mono flex items-center gap-1">
                      <Terminal size={10} /> Coding
                   </span>
                   <span className="px-2 py-1 rounded-md bg-purple-500/10 border border-purple-500/20 text-[10px] text-purple-300 font-mono flex items-center gap-1">
                      <Cpu size={10} /> IoT
                   </span>
              </div>
          </motion.div>

          {/* คำอธิบาย */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-stone-400 text-base md:text-lg leading-relaxed max-w-lg mx-auto md:mx-0"
          >
           <span className="text-stone-200 font-medium">ผมมีความตั้งใจศึกษาต่อในสาขาวิชาวิศวกรรมคอมพิวเตอร์ คณะวิศวกรรมศาสตร์ มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี</span> เพราะเชื่อว่าจะช่วยต่อยอดความรู้ และศักยภาพในการเรียน และสร้างสรรค์เทคโนโลยีใหม่ๆ ที่ตอบโจทย์ทั้งความฝันของผมเอง และเป็นประโยชน์ต่อผู้คนกับสังคม เหมือนกับที่เทคโนโลยีได้เป็นส่วนสำคัญในชีวิตของเราทุกวันนี้

          </motion.p>

          {/* ปุ่ม Action + Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col items-center md:items-start gap-6"
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/why">
                <button className="group relative px-8 py-3 bg-white text-stone-950 rounded-full font-bold text-sm hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(249,115,22,0.4)] flex items-center gap-2">
                  ทำไมต้องที่นี่?
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link href="/portfolio">
                <button className="px-8 py-3 rounded-full font-medium text-sm text-stone-400 hover:text-white border border-stone-800 hover:border-stone-600 transition-all">
                  ดูผลงาน
                </button>
              </Link>
            </div>

            {/* Social Icons Bar */}
            <div className="flex items-center gap-4 pt-2 border-t border-white/5 w-full md:w-auto justify-center md:justify-start">
               <span className="text-xs text-stone-600 uppercase font-bold tracking-widest">Connect</span>
               <div className="flex gap-3">
                  {/* GitHub */}
                  <a 
                    href="https://github.com/Werapats" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-stone-400 hover:text-[#2dba4e] transition-colors"
                  >
                    <Github size={18} />
                  </a>

                  {/* Facebook */}
                  <a 
                    href="https://www.facebook.com/profile.php?id=61570937945066&locale=th_TH" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-stone-400 hover:text-[#1877F2] transition-colors"
                  >
                    <Facebook size={18} />
                  </a>

                  {/* --- Email Logic: แสดงผลตามอุปกรณ์ --- */}
                  
                  {/* 1. Mobile Only: ใช้ mailto (แสดงเฉพาะหน้าจอเล็ก md:hidden) */}
                  <a 
                    href="mailto:dueiwo67@gmail.com" 
                    className="md:hidden p-2 rounded-full bg-white/5 hover:bg-white/10 text-stone-400 hover:text-[#EA4335] transition-colors"
                  >
                    <Mail size={18} />
                  </a>

                  {/* 2. PC Only: ใช้ Gmail Web (แสดงเฉพาะหน้าจอกลางขึ้นไป md:block) */}
                  <a 
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=dueiwo67@gmail.com"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hidden md:block p-2 rounded-full bg-white/5 hover:bg-white/10 text-stone-400 hover:text-[#EA4335] transition-colors"
                  >
                    <Mail size={18} />
                  </a>
                  
               </div>
            </div>
          </motion.div>
        </div>

        {/* --- รูปภาพโปรไฟล์ (ขวา) แบบ Tilted 3D + Auto Float --- */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: 1, 
            scale: 1, 
            y: [0, -15, 0],    
            rotate: [0, 2, -2, 0] 
          }}
          transition={{ 
            opacity: { duration: 1 },
            scale: { duration: 1, type: "spring" },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 7, repeat: Infinity, ease: "easeInOut" }
          }}
          className="relative md:w-[450px] md:h-[450px] flex items-center justify-center shrink-0"
        >
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-500 to-purple-600 rounded-full blur-[80px] opacity-20 animate-pulse pointer-events-none"></div>
            
            <TiltedCard
              imageSrc="https://i.ibb.co/pj3mK75q/SUN-6991-1.jpg"
              altText="Weerapat Thanomsri Profile"
              captionText="Weerapat Thanomsri"
              containerHeight="500px"
              containerWidth="350px"
              imageHeight="500px"
              imageWidth="350px"
              rotateAmplitude={12}
              scaleOnHover={1.05}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={
                <div className="absolute bottom-6 right-6 p-3 bg-[#1a1a1a]/90 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl flex items-center gap-3 transform translate-z-10">
                    <div className="bg-orange-500/20 p-2 rounded-full">
                        <Sparkles className="w-5 h-5 text-orange-400" />
                    </div>
                    <div>
                        <p className="text-[10px] text-stone-400 uppercase tracking-wider">Passion</p>
                        <p className="text-xs font-bold text-white">KMUTT</p>
                    </div>
                </div>
              }
            />
        </motion.div>

      </div>
    </main>
  );
}