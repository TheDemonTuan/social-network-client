import LeftSide from "@/components/Friends/left-side";
import RightSide from "@/components/Friends/right-side";
import React from "react";

const Friends = () => {
  return (
    <div className="flex max-h-screen">
      <LeftSide />
      <RightSide />
    </div>
  );
};

export default Friends;
