import Image from "next/image";
import { Brain, CircleGauge, Lightbulb } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Top Section: Hero Banner */}
      <section
        className="flex flex-col-reverse md:flex-row items-center justify-between 
                   w-full min-h-[80vh] 
                   bg-linear-to-br from-gray-900 via-gray-950 to-black
                   px-4 sm:px-6 md:px-10 lg:px-16 py-12 gap-10"
      >
        {/* Left Section: Text + CTA */}
        <div className="flex flex-col justify-center text-white w-full md:w-1/2 text-center md:text-left">
          <p className="text-gray-400 text-lg sm:text-xl md:text-2xl mb-2">
            Welcome to
          </p>
          <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6">
            Mental Master — Unlock <br className="hidden sm:block" />
            Your Inner Calculator!
          </h1>
          <Link
            href="/home"
            className="mx-auto md:mx-0 bg-teal-500 hover:bg-teal-600 text-white 
                       font-bold py-3 px-8 rounded-lg w-fit
                       transition duration-300 ease-in-out text-lg shadow-lg"
          >
            Start Your Journey
          </Link>
        </div>

        {/* Right Section: Brain Image */}
        <div className="flex justify-center md:justify-end w-full md:w-1/2">
          <Image
            src="/brain-illustration.png"
            alt="Abstract brain with math symbols"
            width={400}
            height={400}
            className="rounded-full border-4 border-gray-800 max-w-[80%] sm:max-w-[60%] md:max-w-[75%] lg:max-w-[400px]"
            priority
          />
        </div>
      </section>

      {/* ⚡ Bottom Section: Experience */}
      <section className="bg-gray-900 w-full py-12 md:py-20 text-white text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10">
          What You'll Experience
        </h2>

        <div className="flex flex-wrap justify-center gap-6 md:gap-10 lg:gap-16 max-w-6xl mx-auto px-4">
          {/* Card 1 */}
          <div className="flex flex-col items-center text-center bg-gray-800 rounded-2xl p-6 w-full sm:w-[300px] transition hover:scale-105 hover:bg-gray-700 duration-300">
            <CircleGauge size={60} strokeWidth={1.5} className="text-teal-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Dynamic Challenges</h3>
            <p className="text-gray-400">
              Dive into endless, challenging math problems tailored to boost your speed.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center text-center bg-gray-800 rounded-2xl p-6 w-full sm:w-[300px] transition hover:scale-105 hover:bg-gray-700 duration-300">
            <Brain size={60} strokeWidth={1.5} className="text-teal-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Speed & Accuracy Training</h3>
            <p className="text-gray-400">
              Refine your ability to solve complex calculations quickly and correctly.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center text-center bg-gray-800 rounded-2xl p-6 w-full sm:w-[300px] transition hover:scale-105 hover:bg-gray-700 duration-300">
            <Lightbulb size={60} strokeWidth={1.5} className="text-teal-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Cognitive Enhancement</h3>
            <p className="text-gray-400">
              Improve focus, memory, and overall problem-solving skills beyond math.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}