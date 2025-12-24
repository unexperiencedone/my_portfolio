"use client";
import { useState, useRef } from "react";
import { Playfair_Display, Dancing_Script } from "next/font/google";
import Xarrow from "react-xarrows";

export const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const ds = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function JourneyTimeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const contentRef = useRef(null);
  const journeyData = [
    {
      month: "Sep–Oct 2024",
      title: "Where It All Actually Started",
      description:
        "I started with C and C++. Not because I was brave or ambitious, but because I wanted to know what really goes on under the hood. Memory, logic, flow — things that don’t look exciting at first, but quietly change how you think forever.",
    },
    {
      month: "Nov–Dec 2024",
      title: "Confusion, But the Useful Kind",
      description:
        "This is where things got uncomfortable. Data structures, OOP, constructors, destructors — half of it didn’t make sense immediately. But instead of running away, I stayed. Turns out confusion is not a bad sign; it’s usually where learning actually happens.",
    },
    {
      month: "Jan 2025",
      title: "Python Felt Like Breathing",
      description:
        "Then I met Python. Suddenly, code stopped fighting back. I could finally focus on logic instead of syntax. I rewrote old ideas and realized something important — clarity in tools gives clarity in thought.",
    },
    {
      month: "Feb 2025",
      title: "OOP, Finally Understood",
      description:
        "At some point, OOP stopped feeling like rules to memorize. Classes started making sense as ideas, not containers. This was less about code and more about learning how to structure thought itself.",
    },
    {
      month: "Mar 2025",
      title: "So This Is Machine Learning",
      description:
        "My first proper encounter with machine learning. Training models was easy. Understanding why they worked was not. It exposed gaps in my math and intuition, which was humbling — but necessary.",
    },
    {
      month: "Apr 2025",
      title: "Data Is the Real Boss",
      description:
        "This month taught me a simple truth: most problems aren’t algorithm problems, they’re data problems. Cleaning, fixing imbalance, creating features — none of it glamorous, all of it essential.",
    },
    {
      month: "May 2025",
      title: "Reality via Hackathons",
      description:
        "Hackathons don’t let you overthink. Limited time, messy data, half-formed ideas — you either build or you don’t. I learned to prioritize, cut scope, and ship something real.",
    },
    {
      month: "Jun 2025",
      title: "When Context Started Matterin",
      description:
        "Working with maps and spatial data changed how I saw ML. GeoPandas, Shapely, accident hotspots — predictions stopped being numbers and started becoming insights tied to the real world.",
    },
    {
      month: "Jul–Aug 2025",
      title: "Models Aren’t the Product",
      description:
        "Deep learning, APIs, interfaces — this phase made one thing clear. A model sitting in a notebook means nothing. Impact begins when systems talk to users, maps, and decisions.",
    },
    {
      month: "Sep–Oct 2025",
      title: "Thinking Beyond Learning",
      description:
        "Somewhere along the way, I stopped asking ‘what should I learn next?’ and started asking ‘what am I building?’ Accuracy mattered, but so did design, robustness, and intent. This felt like a shift — from student to builder.",
    },
    {
      month: "Oct–Dec 2025",
      title: "Slowing Down to See Clearly",
      description:
        "Less rushing, more reflection. Revisiting ideas, refining systems, and understanding why certain things worked — and why others didn’t. This phase wasn’t loud, but it mattered.",
    },
    {
      month: "2026",
      title: "A Bright Future",
      description: "Still in development.",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row h-[500px] flex-1 gap-30 rounded-2x backdrop-blur-md">
      {/* LEFT: DATE PICKER (Vertical Navigation) */}
      <div className="flex md:flex-col overflow-y-visible no-scrollbar border-l-2 border-yale-blue-300/30 pl-4 space-y-2">
        {journeyData.map((item, index) => (
          <button
            key={index}
            id={`date-${index}`}
            onClick={() => setActiveIndex(index)}
            className={`text-left transition-all duration-300 py-2 px-4 rounded-lg font-bold ${
              activeIndex === index
                ? "text-yale-blue-300 text-xl scale-110 translate-x-2"
                : "text-steel-blue-400 text-xs hover:text-yale-blue-100"
            } ${ds.className}`} // Using your Dancing Script font
          >
            {item.month}
          </button>
        ))}
      </div>

      {/* RIGHT: CONTENT DISPLAY */}
      <div className="flex-1 relative flex items-center justify-center">
        {journeyData.map((item, index) => (
          <div
            key={index}
            id={`content-box-${index}`}
            className={`absolute inset-0 flex flex-col items-center justify-center  text-center transition-all duration-500 transform ${
              activeIndex === index
                ? "opacity-100 scale-100 translate-y-0"
                : "opacity-0 scale-95 translate-y-10 pointer-events-none"
            }`}
          >
            <h2
              className={`text-4xl text-yale-blue-300 mb-4 ${ds.className}`}
            >
              {item.title}
            </h2>
            <p className="text-steel-blue-200 text-[16px] max-w-md leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
      <Xarrow
        start={`date-${activeIndex}`}
        end={`content-box-${activeIndex}`}
        color="#afd8e9" // Using your sky blue color
        strokeWidth={2}
        path="smooth"
        startAnchor="right"
        endAnchor="left"
        dashness={{ animation: true }} // Makes the line "flow"
        headSize={4}
      />
    </div>
  );
}
