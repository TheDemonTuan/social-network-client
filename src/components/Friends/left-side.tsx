import React from "react";
import { IoIosSettings } from "react-icons/io";
import styles from "@/styles/Friends/left-side.module.css";
import { LeftSideData } from "./left-side.data";

const LeftSide = () => {
  return (
    <div className={`${styles["left-side"]} bg-slate-700 flex flex-col p-2 gap-3 text-white shadow-2xl border-r border-black`}>
      <div className="flex justify-between w-full text-2xl font-bold p-3">
        <span>Friends</span>
        <IoIosSettings size={32} />
      </div>
      {LeftSideData.map((item, index) => (
        <div key={index} className="flex gap-3 items-center p-2 hover:bg-black/30 rounded-lg cursor-pointer">
          <item.icon className="rounded-full p-2 bg-slate-500 h-9 w-9" />
          <span>{item.title}</span>
        </div>
      ))}
    </div>
  );
};

export default LeftSide;
