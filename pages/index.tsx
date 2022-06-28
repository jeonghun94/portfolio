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

{
  /* <div class="flex h-full w-full gap-10 bg-red-100 p-10">
  <div class="h-full w-full border bg-white px-5 py-5">
    <h1 class="mb-5 text-2xl font-bold">Weater</h1>
    <div class="mb-4 flex h-full w-full items-center justify-between gap-3 rounded border border-b-2 border-black py-3 px-4">
      <div>
        <p class="font-bold">Casius</p>
        <p class="text-xs">Mars, 12AM</p>
      </div>
      <div>
        <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path></svg>
      </div>
      <div class="text-2xl font-bold">85°</div>
    </div>
    <div class="mb-4 flex h-full w-full items-center justify-between gap-3 rounded border border-b-2 border-black bg-yellow-400 py-3 px-4">
      <div>
        <p class="font-bold">Dlacria</p>
        <p class="text-xs">Mars, 12AM</p>
      </div>
      <div>
        <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path></svg>
      </div>
      <div class="text-2xl font-bold">85°</div>
    </div>
    <div class="mb-4 flex h-full w-full items-center justify-between gap-3 rounded border border-b-2 border-black bg-green-500 py-3 px-4">
      <div>
        <p class="font-bold">New York</p>
        <p class="text-xs">USA, 12AM</p>
      </div>
      <div>
        <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
      </div>
      <div class="text-2xl font-bold">85°</div>
    </div>
    <div class="mb-4 flex h-full w-full items-center justify-between gap-3 rounded border border-b-2 border-black bg-red-500 py-3 px-4 text-white">
      <div>
        <p class="font-bold">Zomato</p>
        <p class="text-xs">India, 12AM</p>
      </div>
      <div>
        <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
      </div>
      <div class="text-2xl font-bold">85°</div>
    </div>
    <div class="flex justify-center"><div class="flex h-10 w-10 items-center justify-center rounded-full border border-black text-lg">+</div></div>
  </div>
  <div class="h-full w-full border bg-white p-5">
    <div class="flex h-8 w-8 items-center justify-center rounded-full border border-b-2 border-black text-sm">X</div>
    <div class="my-5 flex justify-center text-xs font-bold">SIMPLE TAG</div>
    <div class="text-center text-2xl font-bold">Work with best designers</div>
    <div class="mt-5 grid grid-cols-2 gap-2">
      <div class="flex h-24 w-full items-center justify-center rounded-md border border-black bg-yellow-400 text-white">
        <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
      </div>
      <div class="flex h-24 w-full items-center justify-center rounded-md border border-black bg-green-400 text-white">
        <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
      </div>
      <div class="flex h-24 w-full items-center justify-center rounded-md border border-black bg-pink-400 text-white">
        <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
      </div>
      <div class="flex h-24 w-full items-center justify-center rounded-md border border-black bg-red-400 text-white">
        <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
      </div>
    </div>
    <div class="my-5 w-full rounded-md border border-white bg-blue-700 py-1 text-center text-white">Let' get it done</div>
  </div>
  <div class="h-24 w-full border border-sky-500"></div>
</div>
 */
}
