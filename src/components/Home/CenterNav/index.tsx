import React from "react";
import Story from "./Story";
import PostAdd from "@/components/Post/post-add";
import PostView from "@/components/Post/post-view";

const CenterNav = () => {
  return (
    <div className="flex flex-col items-center px-16 gap-5">
      <Story />
      <PostAdd />
      <PostView />
    </div>
  );
};

export default CenterNav;
