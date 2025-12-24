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
      <div className="fixed top-20 left-10 w-72 h-72 bg-yale-blue-500/20 blur-[120px] rounded-full -z-10" />
      <div className="fixed bottom-20 right-10 w-96 h-96 bg-cerulean-500/10 blur-[150px] rounded-full -z-10" />
      <NavBar></NavBar>
      <main className="flex flex-col justify-around bg-deep-space-blue-950 min-h-screen p-20 ">
        <div
          id="who_Am_i"
          className={`min-h-max flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-20 px-4 md:px-12 lg:px-20 py-10 text-steel-blue-200 ${playfair.className} p-8 leading-loose cursor-pointer w-full max-w-7xl mx-auto`}
        >
          <div id="text1" className="flex-1 max-w-2xl">
            <h1 className={`text-3xl`}>
              This is{" "}
              <span
                className={`text-yale-blue-300 ${ds.className} inline-block -top-2 relative left-1 -rotate-6 hover:rotate-0 hover:[text-shadow:var(--shadow-glow)] `}
              >
                {" "}
                ME!
              </span>
            </h1>
            <br />
            <p>
              Hey, how you are doing. This side is{" "}
              <span
                className={`inline-block font-bold text-shadow:var(--shadow-glow)] ${ds.className} text-xl text-yale-blue-300 left-0.5 right-0.5 -translate-y-1 rotate-2 hover:rotate-0 duration-100`}
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
              <h3>
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
             "
            >
              <Image
                src="/myimage.jpeg"
                alt="I am the one who's portfolio this is . . ."
                width={500}
                height={600}
                className="object-cover -top-12 transition-all duration-500 grayscale blur-xs hover:blur-none  "
              />
            </div>
          </div>
        </div>
        <div
          id="journey"
          className={`min-h-max flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-20 px-4 md:px-12 lg:px-20 py-10 text-steel-blue-200 ${playfair.className} p-8 leading-loose cursor-pointer w-full max-w-7xl mx-auto`}
        >
          <div className="flex flex-col flex-1">
            <h1 className="text-3xl ">
              The{" "}
              <span
                className={`inline-block font-bold relative  transition-all -top-2 -rotate-6 hover:rotate-0 hover:[text-shadow:var(--shadow-glow)] text-yale-blue-300 ${ds.className} underline`}
              >
                Journey
              </span>
            </h1>
            <br />
            <p>
              Well about my journey. To be frank it's not been long since i
              started to
              <br />
              know and understand this line of field and I am glad that i did
              not hesitate to do that, <br />
              You would undertand it by now if not, then i havent seen someone
              as dumb as you. <br />
              To simplify things let's start from where i started to know <br />
              what the hell is coding `(oh my manners)` . <br />
              Forget manners let's talk, gibberish in your sense, meaningful in
              mine. <br />
            </p>
          </div>
          <div className="flex flex-1">
            <JourneyTimeline></JourneyTimeline>
          </div>
        </div>
      </main>
    </div>
  );
}
