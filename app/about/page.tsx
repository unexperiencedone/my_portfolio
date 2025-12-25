"use client";
import NavBar from "@components/NavBar";
import { Playfair_Display, Dancing_Script } from "next/font/google";
import Image from "next/image";
import JourneyTimeline from "@/components/JourneyTimeline";

export const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const ds = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function About() {
  return (
    <div className="min-h-screen items-center">
      <NavBar></NavBar>
      <main className="flex flex-col justify-around bg-deep-space-blue-950 min-h-screen p-20">
        <div
          id="scroll_phase"
          className="min-h-screen flex lg:flex-row items-center lg:items-start justify-center gap-12 lg:gap-20 px-4 md:px-12 lg:px-20 py-10 text-steel-blue-200 ${playfair.className} p-8 leading-loose cursor-pointer w-full max-w-7xl mx-auto items-center"
        >
          <h1
            className={`${ds.className} text-center flex flex-col justify-center flex-1 text-8xl gap-16 p-30`}
          >
            <span className="transition-all duration-300 inline-block relative text-light-blue-400 scroll-hybrid rotate-3 hover:rotate-0 hover:[text-shadow:0_4px_8px_#91c0d4]">
              Scroll a bit
            </span>
            <span className="inline-block relative scroll-hybrid rotate-3">
              to
            </span>
            <span className=" transition-all duration-300 inline-block relative text-light-blue-400 scroll-hybrid -rotate-3 hover:rotate-0 hover:[text-shadow:0_4px_8px_#91c0d4]">
              Explore.
            </span>
          </h1>
        </div>
        <div
          id="who_Am_i"
          className={`min-h-max flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-20 px-4 md:px-12 lg:px-20 py-10 text-steel-blue-200 ${playfair.className} p-8 leading-loose cursor-pointer w-full max-w-7xl mx-auto`}
        >
          <div id="text1" className="flex-1 max-w-2xl">
            <h1 className={`text-3xl scroll-hybrid`}>
              This is{" "}
              <span
                className={`text-yale-blue-300 ${ds.className} inline-block -top-2 relative left-1 -rotate-6 hover:rotate-0 hover:[text-shadow:var(--shadow-glow)] `}
              >
                {" "}
                ME!
              </span>
            </h1>
            <br />
            <p className="scroll-hybrid">
              Hey, how you are doing. This side is{" "}
              <span
                className={`inline-block font-bold hover:[text-shadow:var(--shadow-glow)] ${ds.className} text-xl text-yale-blue-300 left-0.5 right-0.5 -translate-y-1 rotate-2 hover:rotate-0 duration-100`}
              >
                Aakshant Kumar
              </span>{" "}
              aka
              <span className="inline-block relative transition-all [text-shadow:var(--shadow-glow)] left-0.5 text-yale-blue-300">
                unexperiencedone
              </span>{" "}
              . <br /> And what's your intro, do you have one. Well it really
              doesn't matter <br /> I will not be able to read or hear you.{" "}
              <br /> Also this is my portfolio so it's doesn't matter any way.
              <br />
              Let's move on ever heard of a{" "}
              <span
                className={`text-yale-blue-300 hover:[text-shadow:var(--shadow-glow)] ${ds.className} -rotate-2 hover:rotate-0 -translate-y-1 transition-all inline-block text-xl font-semibold duration-100`}
              >
                Developer
              </span>{" "}
              who is a jack of all trades.
              <br />
              Well that's me Thank me later for not making the suspense.
              <br />
              Take a breather and now delve with me in the journey i had gone{" "}
              <span
                className={`text-yale-blue-300 hover:[text-shadow:var(--shadow-glow)] ${ds.className} rotate-2 hover:rotate-0 -translate-y-1 transition-all inline-block text-xl font-semibold duration-100`}
              >
                through . . .
              </span>
            </p>
          </div>
          <div
            id="graphics"
            className="text-xl flex justify-start min-h-min flex-col flex-1 items-center lg:items-end gap-8 lg:gap-14"
          >
            <div className="leading-loose">
              <h3 className="scroll-hybrid">
                Wanna see{" "}
                <span
                  className={`inline-block relative text-yale-blue-300 ${ds.className} hover:[text-shadow:var(--shadow-glow)] -rotate-5 hover:rotate-0 transition-all -translate-y-1 `}
                >
                  me
                </span>{" "}
                <br />A little{" "}
                <span
                  className={`inline-block relative text-yale-blue-300 ${ds.className} hover:[text-shadow:var(--shadow-glow)] transition-all rotate-5 hover:rotate-0`}
                >
                  hover
                </span>{" "}
                can do the trick . . .
              </h3>
            </div>
            <div
              className=" relative w-60 h-60 lg:w-72 lg:h-72  border-cerulean-500 border-4 rounded-full overflow-hidden shadow-[0_0_30px_#afd8e9] hover:shadow-[0_0_40px_#ebf5fa]
             scroll-hybrid"
            >
              <Image
                src="/myimage.jpeg"
                alt="I am the one who's portfolio this is . . ."
                width={500}
                height={600}
                className="object-cover -top-12 transition-all duration-500 grayscale blur-xs hover:blur-none"
              />
            </div>
          </div>
        </div>
        <div
          id="journey"
          className={`min-h-max flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-20 px-4 md:px-12 lg:px-20 py-10 text-steel-blue-200 ${playfair.className} p-8 leading-loose cursor-pointer w-full max-w-7xl mx-auto`}
        >
          <div className="flex flex-1 scroll-hybrid">
            <JourneyTimeline></JourneyTimeline>
          </div>
          <div id="text-2" className="flex flex-col flex-1">
            <h1 className="text-3xl scroll-hybrid">
              The{" "}
              <span
                className={`inline-block font-bold relative  transition-all -top-2 -rotate-6 hover:rotate-0 hover:[text-shadow:var(--shadow-glow)] text-yale-blue-300 ${ds.className} underline`}
              >
                Journey
              </span>
            </h1>
            <br />
            <p className="scroll-hybrid">
              Well about my{" "}
              <span
                className={`inline-block font-bold hover:[text-shadow:var(--shadow-glow)] ${ds.className} text-[18px] text-yale-blue-300 m-1 -translate-y-1 rotate-2 hover:rotate-0 duration-100`}
              >
                journey
              </span>
              . To be frank it's not been long since i started
              <br />
              to know and understand this line of field and I am glad that i did
              not hesitate to do that.
              <br />
              You would undertand it by now if not, then i havent seen someone
              as{" "}
              <span
                className={`inline-block font-bold hover:[text-shadow:var(--shadow-glow)] ${ds.className} text-[18px] text-yale-blue-300 m-1 -translate-y-1 -rotate-2 hover:rotate-0 duration-100`}
              >
                dumb
              </span>{" "}
              as you. <br />
              To simplify things let's start from where i started to know <br />
              what the hell is coding `(oh my{" "}
              <span className="inline-block relative transition-all [text-shadow:var(--shadow-glow)] m-1 text-yale-blue-300">
                manners
              </span>
              )` . <br />
              Forget manners let's talk, gibberish in your sense, meaningful in
              mine. <br />I started it all in the september of{" "}
              <span
                className={`inline-block font-bold hover:[text-shadow:var(--shadow-glow)] ${ds.className} text-yale-blue-300 m-1 -translate-y-1 rotate-2 hover:rotate-0 duration-100`}
              >
                2024
              </span>{" "}
              by getting introduced to <br />
              C language that was the point which led to what I am, <br />
              and still building ... <br />
              Still not{" "}
              <span
                className={`inline-block font-bold hover:[text-shadow:var(--shadow-glow)] ${ds.className} text-yale-blue-300 m-1 -translate-y-1 text-[18px] -rotate-2 hover:rotate-0 duration-100`}
              >
                satisfied
              </span>{" "}
              go through timeline just beside.
            </p>
          </div>
        </div>
        <div
          id="skills"
          className={`min-h-screen flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-20 px-4 md:px-12 lg:px-20 py-10 text-steel-blue-200 ${playfair.className} p-8 leading-loose cursor-pointer w-full max-w-7xl mx-auto`}
        >
          <div id="text-3" className={`flex flex-col flex-1 items-center`}>
            <h1 className="text-3xl text-center scroll-hybrid">
              Skills{" "}
              <span
                className={`inline-block font-bold relative  transition-all -top-2 rotate-4 hover:rotate-0 hover:[text-shadow:var(--shadow-glow)] text-yale-blue-300 ${ds.className} underline`}
              >
                Acquired.
              </span>
              <span
                className={`inline-block ${ds.className} text-[20px] left-4 relative`}
              >
                On the go . . .
              </span>
            </h1>
            <br />
            <p className="scroll-hybrid text-center text-[20px]">
              Speaking of{" "}
              <span
                className={`inline-block font-bold hover:[text-shadow:var(--shadow-glow)] ${ds.className} text-yale-blue-300 m-1 -translate-y-1 text-[18px] rotate-2 hover:rotate-0 duration-100`}
              >
                skills
              </span>{" "}
              <br />I do have a lot in the
              <span
                className={`inline-block font-bold hover:[text-shadow:var(--shadow-glow)] ${ds.className} text-yale-blue-300 m-1 -translate-y-1 text-[18px] -rotate-2 hover:rotate-0 duration-100`}
              >
                arsenal
              </span>
              of mine. <br />
              <span
                className={`inline-block relative transition-all [text-shadow:var(--shadow-glow)] m-1 text-yale-blue-300`}
              >
                Intereseted!
              </span>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
