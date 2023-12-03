import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaEarthAfrica } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";
import { GrLike } from "react-icons/gr";
import { FaRegComments, FaShare } from "react-icons/fa";

const PostView = () => {
  return (
    <div className="flex flex-col rounded-xl w-full max-h-fit bg-slate-700 shadow-lg p-3 px-4 gap-2">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Avatar className="hover:opacity-70 cursor-pointer shadow-2xl">
            <AvatarImage src="/logo.png" alt="@shadcn" />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-1">
            <span className="text-white text-sm font-medium">Nguyen Viet Tuan</span>
            <div className="flex items-center gap-2 text-gray-400">
              <span className="text-xs">5 hours ago</span>
              <FaEarthAfrica size={14} />
            </div>
          </div>
        </div>
        <div className="flex gap-3 justify-center text-slate-300">
          <BsThreeDots size={28} />
          <IoMdClose size={28} />
        </div>
      </div>
      <div className="text-white font-light">tuanpromaxvipprodaika123 😆</div>
      <div className="flex justify-between text-gray-300 text-sm">
        <span>👍❤️😆 100</span>
        <span>100 comments</span>
      </div>
      <div className="border-t border-gray-500" />
      <div className="grid grid-cols-3 text-gray-300">
        <div className="col-span-1 flex items-center justify-center gap-2 hover:bg-black/25 rounded-md cursor-pointer p-1">
          <GrLike size={21} />
          <span>Like</span>
        </div>
        <div className="col-span-1 flex items-center justify-center gap-2 hover:bg-black/25 rounded-md cursor-pointer p-1">
          <FaRegComments size={21} />
          <span>Comment</span>
        </div>
        <div className="col-span-1 flex items-center justify-center gap-2 hover:bg-black/25 rounded-md cursor-pointer p-1">
          <FaShare size={21} />
          <span>Share</span>
        </div>
      </div>
      <div className="border-t border-gray-500" />
      <div className="flex flex-col gap-2 text-sm text-gray-300">
        <span className="hover:underline cursor-pointer">View more comments</span>
        <div className="flex items-start justify-start w-full gap-2 group">
          <Avatar className="w-8 h-8">
            <AvatarImage src="/logo.png" alt="@shadcn" />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
          <div className="flex flex-col justify-center items-start gap-1">
            <div className="flex gap-3 items-center">
              <div className="flex flex-col gap-1 bg-white/95 rounded-2xl p-2 text-black text-xs">
                <span className="font-bold">Nguyen Viet Tuan</span>
                <span>Quá tuyệt là vời</span>
              </div>
              <BsThreeDots
                className="hidden group-hover:block cursor-pointer hover:bg-black/20 rounded-full"
                size={20}
              />
            </div>
            <div className="flex gap-3 text-xs ml-2">
              <span className="hover:underline cursor-pointer">Like</span>
              <span className="hover:underline cursor-pointer">Reply</span>
              <span className="hover:underline cursor-pointer">Share</span>
              <span className="text-gray-400 hover:underline cursor-pointer">3 hours</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostView;
