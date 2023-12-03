import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { RiLiveLine } from "react-icons/ri";
import { IoMdPhotos } from "react-icons/io";
import { FaRegFaceGrinBeam } from "react-icons/fa6";

const PostAdd = () => {
  return (
    <div className="flex flex-col gap-2 w-full h-32 bg-slate-700 rounded-xl p-4 divide-y divide-gray-500">
      <div className="flex justify-center">
        <Avatar className="hover:opacity-70 cursor-pointer shadow-2xl">
          <AvatarImage src="/logo.png" alt="@shadcn" />
          <AvatarFallback>SC</AvatarFallback>
        </Avatar>
        <Input
          className="w-full ml-4 rounded-full cursor-pointer ring-0 focus-visible:ring-0 bg-white hover:opacity-80"
          placeholder="What's on your mind, Tuan?"
          readOnly
        />
      </div>
      <div className="grid grid-cols-3 gap-4 justify-between items-center p-2 text-gray-300">
        <div className="col-span-1 flex gap-2 justify-center items-center hover:bg-slate-500 p-1 rounded-lg cursor-pointer">
          <RiLiveLine size={32} className="text-red-600" />
          <span>Live video</span>
        </div>
        <div className="col-span-1 flex gap-2 justify-center items-center hover:bg-slate-500 p-1 rounded-lg cursor-pointer">
          <IoMdPhotos size={32} className="text-green-500" />
          <span>Live video</span>
        </div>
        <div className="col-span-1 flex gap-2 justify-center items-center hover:bg-slate-500 p-1 rounded-lg cursor-pointer">
          <FaRegFaceGrinBeam size={32} className="text-yellow-300" />
          <span>Live video</span>
        </div>
      </div>
    </div>
  );
};

export default PostAdd;
