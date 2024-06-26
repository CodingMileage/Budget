import React, { useState } from "react";

export const Test = () => {
  const [theme, setTheme] = useState(false);

  console.log(theme);

  return (
    <>
      <div
        className={
          "text-green-400 text-6xl min-h-screen grid grid-cols-1 sm:grid-cols-3 " +
          (theme ? "bg-slate-900 text-white" : "bg-yellow-200 text-violet-700")
        }
      >
        {/* <h1 className="text-[#654321] border p-[100px] mb-24">Hello</h1> */}
        <button
          onClick={() => {
            setTheme(!theme);
          }}
          className="bg-white sm:col-span-2 after:content-['hello'] after:absolute after:bg-green-300 after:inset-0 after:z-0 after:blur
            before:absolute before:bg-blue-300 before:-top-10 before:-left-10 before:h-full before:w-full before:z-0 before:blur
           relative text-slate-900 group p-10 rounded hover:opacity-50 duration-300
            flex items-center gap-4"
        >
          <h1 className="z-10">Button</h1>
          <span className="z-10 h-10 w-10 bg-amber-800 group-hover:rotate-45 duration-300"></span>
        </button>

        <button
          className="bg-white after:content-['hello'] after:absolute after:bg-rose-300 after:inset-0 after:z-0 after:blur
            before:absolute before:bg-amber-300 before:-top-10 before:-left-10 before:h-full before:w-full before:z-0 before:blur
           relative text-slate-900 group p-10 rounded hover:opacity-50 duration-300
            flex items-center gap-4"
        >
          <h1 className="z-10">Button</h1>
          <span
            className="z-10 h-10 w-10 rounded-full relative after:absolute after:inset-1
            after:bg-white after:rounded-full before:absolute before:bg-white before:h-full
            before:w-2 before:top-4 before:left-1/2 before:-translate-x-1/2 overflow-hidden bg-amber-800 group-hover:animate-spin duration-300"
          ></span>
        </button>
      </div>
    </>
  );
};
