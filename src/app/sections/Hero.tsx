import { promises as fs } from "fs";

const Hero = async () => {
  // const file = await fs.readFile(
  //   process.cwd() + "/src/app/backgroundText.json",
  //   "utf8",
  // );
  // const data = JSON.parse(file);

  return (
    <main className="grid h-screen place-content-center bg-gradient-to-t from-zinc-950 to-gray-950 font-sans">
      <p className="-mb-4 ml-5 text-7xl font-bold opacity-50 drop-shadow">
        Hi, I&apos;m
      </p>
      <h1 className="text-center text-[12rem] font-bold uppercase leading-none drop-shadow">
        Dominik
      </h1>
      <h2 className="ml-5 text-5xl font-semibold uppercase opacity-50 drop-shadow">
        Front End & WordPress Developer
      </h2>
      <div className="animate-fade-in absolute bottom-16 left-1/2 grid h-20 w-12 -translate-x-1/2 place-content-center rounded-3xl border-2 border-white opacity-25">
        <div className="animate-scroll h-6 w-2 rounded-full bg-white"></div>
      </div>
    </main>
  );
};

export default Hero;
