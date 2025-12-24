// components/Navbar.tsx
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dancing_Script, Playfair_Display, Inter } from "next/font/google";
import { time } from "console";

export const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const inter = Inter({
  subsets: ["latin"],
});

export const ds = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});
const links = [
  { name: "Home", href: "/" },
  { name: "Blogs", href: "/blogs" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Work", href: "/work"}
];

export default function NavBar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleScroll = () => {
      clearTimeout(timeoutId);

      timeoutId = setTimeout(()=>{
          const threshold = window.innerHeight * 0.125;
          setIsScrolled(window.scrollY > threshold);
      }, 10)
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
        window.removeEventListener("scroll", handleScroll);
        clearTimeout(timeoutId)
    };
  }, []);

  return (
    <header className="h-min">
      <nav className={`fixed left-1/2 -translate-x-1/2 transition-all duration-700 cubic-bezier(0.4, 0, 0.2, 1) z-50 flex items-center justify-between
          ${isScrolled 
            ? "top-4 w-[90%] max-w-4xl rounded-2xl bg-deep-space-blue-700/40 backdrop-blur-md shadow-lg px-8 py-3 border-b border-light-blue-300" 
            : "top-0 w-full bg-deep-space-blue-900 px-6 py-4 border-b border-transparent"
          }`}>
        <h1 className={`text-3xl font-bold ${ds.className} text-air-force-blue-400`}>
          Unexperiencedone
        </h1>

        <ul className="flex gap-15">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative pb-1 transition-colors duration-200 
                after:absolute after:left-0
                after:-bottom-1 after:h-[2px] after:w-full after:bg-rich-cerulean-500
                after:scale-x-0 after:origin-left 
                after:transition-transform after:duration-300
                hover:after:scale-x-100 ${playfair.className}
                ${
                  isActive
                    ? "text-yale-blue-300 after:scale-x-100"
                    : "text-gray-500 hover:text-yale-blue-300"
                }`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
