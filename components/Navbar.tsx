"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Vision", path: "/why" },
  { name: "Portfolio", path: "/portfolio" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4"
    >
      <div className="bg-white/80 backdrop-blur-md border border-white/20 shadow-lg rounded-full px-6 py-3 flex items-center gap-2 md:gap-8">
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link key={item.path} href={item.path} className="relative px-4 py-2 text-sm font-medium transition-colors">
              {isActive && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-orange-100 text-orange-600 rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className={isActive ? "text-orange-600" : "text-stone-600 hover:text-stone-900"}>
                {item.name}
              </span>
            </Link>
          );
        })}
      </div>
    </motion.nav>
  );
}