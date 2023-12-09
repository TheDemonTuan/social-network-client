import React from "react";
import styles from "@/styles/Friends/right-side.module.css";

const RightSide = () => {
  return <div className={`${styles["right-side"]} flex-auto text-black p-4`}>
    <span className="font-bold text-xl">People you may know</span>
  </div>;
};

export default RightSide;
