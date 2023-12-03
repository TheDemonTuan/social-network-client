import React from "react";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const StoryList = () => {
  return (
    <div className="relative group col-span-1 shadow-2xl rounded-xl cursor-pointer hover:opacity-90">
      <Avatar className="h-8 w-8 absolute z-10 left-3 top-2 ring-4 ring-blue-500">
        <AvatarImage src="./logo.png" />
        <AvatarFallback>Logo TBook</AvatarFallback>
      </Avatar>
      <Image className="rounded-xl" src="/story.jpg" alt="Avatar" fill />
      <span className="absolute bottom-2 left-0 right-0 grid place-items-center text-white font-semibold text-xs">
        Nguyen Viet Tuan
      </span>
    </div>
  );
};

export default StoryList;
