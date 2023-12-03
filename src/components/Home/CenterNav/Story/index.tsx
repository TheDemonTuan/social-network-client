import React from "react";
import Image from "next/image";
import StoryList from "./story-list";
import StoryAdd from "./story-add";

const Story = () => {
  return (
    <div className="grid grid-cols-4 w-full h-60 gap-2">
      <StoryAdd />
      <StoryList />
      <StoryList />
      <StoryList />
    </div>
  );
};

export default Story;
