import React from "react";
import Image from "next/image";
import { FaPlus } from "react-icons/fa";

const StoryAdd = () => {
  return (
    <div className="relative overflow-hidden group col-span-1 shadow-2xl rounded-xl cursor-pointer hover:opacity-90">
      <Image className="rounded-xl group-hover:scale-105" src="/story.jpg" alt="Avatar" fill />
      <div className="absolute bottom-8 left-0 right-0 grid place-items-center">
        <FaPlus className="bg-cyan-400 font-bold rounded-full text-white p-1 z-10 ring-4 ring-slate-700 group-hover:scale-105" size={28} />
      </div>
      <span className="absolute bottom-0 left-0 right-0 grid place-items-center text-white font-bold shadow-2xl text-xs bg-slate-700 h-1/5">
        Create Story
      </span>
    </div>
  );
};

export default StoryAdd;
