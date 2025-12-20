"use client";
import { Playfair_Display, Dancing_Script } from "next/font/google";
import Xarrow from "react-xarrows";
import Link from "next/link";

export const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const ds = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-deep-space-blue-950">
      <h1
        className={`text-8xl font-semibold text-sky-100 ${ds.className} h-min text-center leading-[7rem] cursor-pointer`}
      >
        <span className="relative inline-block -left-10 hover:[text-shadow:var(--shadow-glow)]">
          Are you{" "}
        </span>
        <span
          id="elem1"
          className="relative left-6 -top-2 inline-block transition-all duration-300 ease-in-out hover:text-cerulean-200 hover:rotate-[-10deg] hover:[text-shadow:var(--shadow-glow)]"
        >
          Curious?
        </span>
        <br />
        <span
          id="elem3"
          className="inline-block relative transition-all duration-300 ease-in-out hover:text-cerulean-300 hover:-rotate-3 hover:[text-shadow:var(--shadow-glow)] top-6"
        >
          to{" "}
        </span>
        <Xarrow
          start="elem1"
          end="elem3"
          curveness={3.5}
          color="#89c7dc"
          strokeWidth={3}
          headSize={7}
          passProps = {{strokeDasharray:"5, 2",}}
        />
        <span
          id="elem2"
          className="relative -top-2 inline-block left-10 transition-all duration-300 ease-in-out hover:text-cerulean-200 rotate-[-10deg] hover:rotate-[0deg] cursor-pointer hover:[text-shadow:var(--shadow-glow)]"
        >
          know
        </span>
        <br />
        <span
          id="elem4"
          className="inline-block relative left-36 transition-all duration-300 ease-in-out hover:text-cerulean-300 rotate-3 hover:rotate-0 hover:[text-shadow:var(--shadow-glow)]"
        >
          oR
        </span>{" "}
        <br />
        <span
          id="elem5"
          className="inline-block relative top-2 -left-44 transition-all duration-300 ease-in-out hover:text-cerulean-300 rotate-[-2.5deg] hover:rotate-0"
        >
          <Link
            href="/about"
            className="hover:[text-shadow:var(--shadow-glow)]"
          >
            unexperiencedone?
          </Link>
        </span>
        <Xarrow
          start="elem4"
          end="elem5"
          curveness={3.5}
          color="#89c7dc"
          strokeWidth={3}
          headSize={7}
        />
        <span
          id="elem6"
          className="inline-block -right-24 relative top-2 transition-all duration-300 ease-in-out hover:text-cerulean-300 rotate-[5deg] hover:rotate-0 hover:[text-shadow:0_4px_8px_rgba(0,0,0,0.3)]"
        >
          <Link href="/work" className="hover:[text-shadow:var(--shadow-glow)]">
            's work
          </Link>
        </span>
        <Xarrow
          start="elem4"
          end="elem6"
          curveness={3.5}
          color="#89c7dc"
          strokeWidth={3}
          headSize={7}
          passProps={{strokeDasharray: "5, 2",}}
        />
      </h1>
    </main>
  );
}
