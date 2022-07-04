import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="bg-red-500 w-1/2 h-full flex items-center gap-2 bor">
      <h1 className="text-blue-500 justify-center">Hello Next.js</h1>
      <div className="aspect-square w-4 h-4 bg-slate-500 "></div>
    </div>
  );
};

export default Home;
