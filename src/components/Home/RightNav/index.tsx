import Image from "next/image";
import React from "react";
import { FaGift } from "react-icons/fa";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BsThreeDots } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";
import { FaCirclePlus } from "react-icons/fa6";

const RightNav = () => {
  return (
    <div className="sticky top-0 flex flex-col gap-3 overflow-y-auto max-h-screen divide-y divide-gray-800 px-2 pl-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-slate-700">Sponsored</h1>
        <div className="space-y-2 p-1">
          <div className="w-full h-40 relative">
            <Image src="/ad.png" alt="Avatar" fill />
          </div>
          <div className="w-full h-40 relative">
            <Image src="/ad.png" alt="Avatar" fill />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <h1 className="text-slate-700">Your Pages and profiles</h1>
          <BsThreeDots size={21} />
        </div>
        <div className="flex items-center gap-2 hover:bg-black/30 rounded-xl cursor-pointer p-1">
          <Avatar className="cursor-pointer shadow-2xl">
            <AvatarImage src="/logo.png" alt="@shadcn" />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
          <span>Nguyen Viet Tuan</span>
        </div>
      </div>
      <div className="flex flex-col">
        <h1 className="text-slate-700">Events</h1>
        <div className="flex items-center gap-2 p-1">
          <FaGift size={62} />
          <span>Nguyen Viet Tuan and 3 others friends have a birthday</span>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h1 className="text-slate-700">Contacts</h1>
          <div className="flex justify-center items-center gap-4">
            <IoIosSearch size={21} />
            <BsThreeDots size={21} />
          </div>
        </div>
        <div className="flex items-center gap-2 hover:bg-black/30 rounded-xl p-1 cursor-pointer">
          <div className="relative inline-block">
            <Avatar className="cursor-pointer shadow-2xl w-9 h-9">
              <AvatarImage src="/logo.png" alt="@shadcn" />
              <AvatarFallback>SC</AvatarFallback>
            </Avatar>
            <span className="absolute flex h-3 w-3 bottom-0 right-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
          </div>
          <span>Nguyen Viet Tuan</span>
        </div>
        <div className="flex items-center gap-2 hover:bg-black/30 rounded-xl p-1 cursor-pointer">
          <div className="relative inline-block">
            <Avatar className="cursor-pointer shadow-2xl w-9 h-9">
              <AvatarImage src="/logo.png" alt="@shadcn" />
              <AvatarFallback>SC</AvatarFallback>
            </Avatar>
            <span className="absolute flex h-3 w-3 bottom-0 right-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
          </div>
          <span>Nguyen Viet Tuan</span>
        </div>
        <div className="flex items-center gap-2 hover:bg-black/30 rounded-xl p-1 cursor-pointer">
          <div className="relative inline-block">
            <Avatar className="cursor-pointer shadow-2xl w-9 h-9">
              <AvatarImage src="/logo.png" alt="@shadcn" />
              <AvatarFallback>SC</AvatarFallback>
            </Avatar>
            <span className="absolute flex h-3 w-3 bottom-0 right-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
          </div>
          <span>Nguyen Viet Tuan</span>
        </div>
        <div className="flex items-center gap-2 hover:bg-black/30 rounded-xl p-1 cursor-pointer">
          <div className="relative inline-block">
            <Avatar className="cursor-pointer shadow-2xl w-9 h-9">
              <AvatarImage src="/logo.png" alt="@shadcn" />
              <AvatarFallback>SC</AvatarFallback>
            </Avatar>
            <span className="absolute flex h-3 w-3 bottom-0 right-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
          </div>
          <span>Nguyen Viet Tuan</span>
        </div>
        <div className="flex items-center gap-2 hover:bg-black/30 rounded-xl p-1 cursor-pointer">
          <div className="relative inline-block">
            <Avatar className="cursor-pointer shadow-2xl w-9 h-9">
              <AvatarImage src="/logo.png" alt="@shadcn" />
              <AvatarFallback>SC</AvatarFallback>
            </Avatar>
            <span className="absolute flex h-3 w-3 bottom-0 right-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
          </div>
          <span>Nguyen Viet Tuan</span>
        </div>
        <div className="flex items-center gap-2 hover:bg-black/30 rounded-xl p-1 cursor-pointer">
          <div className="relative inline-block">
            <Avatar className="cursor-pointer shadow-2xl w-9 h-9">
              <AvatarImage src="/logo.png" alt="@shadcn" />
              <AvatarFallback>SC</AvatarFallback>
            </Avatar>
            <span className="absolute flex h-3 w-3 bottom-0 right-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
          </div>
          <span>Nguyen Viet Tuan</span>
        </div>
        <div className="flex items-center gap-2 hover:bg-black/30 rounded-xl p-1 cursor-pointer">
          <div className="relative inline-block">
            <Avatar className="cursor-pointer shadow-2xl w-9 h-9">
              <AvatarImage src="/logo.png" alt="@shadcn" />
              <AvatarFallback>SC</AvatarFallback>
            </Avatar>
            <span className="absolute flex h-3 w-3 bottom-0 right-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
          </div>
          <span>Nguyen Viet Tuan</span>
        </div>
        <div className="flex items-center gap-2 hover:bg-black/30 rounded-xl p-1 cursor-pointer">
          <div className="relative inline-block">
            <Avatar className="cursor-pointer shadow-2xl w-9 h-9">
              <AvatarImage src="/logo.png" alt="@shadcn" />
              <AvatarFallback>SC</AvatarFallback>
            </Avatar>
            <span className="absolute flex h-3 w-3 bottom-0 right-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
          </div>
          <span>Nguyen Viet Tuan</span>
        </div>
        <div className="flex items-center gap-2 hover:bg-black/30 rounded-xl p-1 cursor-pointer">
          <div className="relative inline-block">
            <Avatar className="cursor-pointer shadow-2xl w-9 h-9">
              <AvatarImage src="/logo.png" alt="@shadcn" />
              <AvatarFallback>SC</AvatarFallback>
            </Avatar>
            <span className="absolute flex h-3 w-3 bottom-0 right-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
          </div>
          <span>Nguyen Viet Tuan</span>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <h1 className="text-slate-700">Group conversations</h1>
        <div className="flex items-center gap-2 hover:bg-black/30 rounded-xl p-1 cursor-pointer">
          <div className="relative inline-block">
            <Avatar className="cursor-pointer shadow-2xl w-9 h-9">
              <AvatarImage src="/logo.png" alt="@shadcn" />
              <AvatarFallback>SC</AvatarFallback>
            </Avatar>
            <span className="absolute flex h-3 w-3 bottom-0 right-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
          </div>
          <span>Nguyen Viet Tuan</span>
        </div>
        <div className="flex items-center gap-2 hover:bg-black/30 rounded-xl p-1 cursor-pointer">
          <div className="relative inline-block">
            <Avatar className="cursor-pointer shadow-2xl w-9 h-9">
              <AvatarImage src="/logo.png" alt="@shadcn" />
              <AvatarFallback>SC</AvatarFallback>
            </Avatar>
            <span className="absolute flex h-3 w-3 bottom-0 right-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
          </div>
          <span>Nguyen Viet Tuan</span>
        </div>
        <div className="flex items-center gap-2 hover:bg-black/30 rounded-xl p-1 cursor-pointer">
          <div className="relative inline-block">
            <Avatar className="cursor-pointer shadow-2xl w-9 h-9">
              <AvatarImage src="/logo.png" alt="@shadcn" />
              <AvatarFallback>SC</AvatarFallback>
            </Avatar>
            <span className="absolute flex h-3 w-3 bottom-0 right-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
          </div>
          <span>Nguyen Viet Tuan</span>
        </div>
        <div className="flex items-center gap-2 hover:bg-black/30 rounded-xl p-1 cursor-pointer">
          <div className="relative inline-block">
            <Avatar className="cursor-pointer shadow-2xl w-9 h-9">
              <AvatarImage src="/logo.png" alt="@shadcn" />
              <AvatarFallback>SC</AvatarFallback>
            </Avatar>
            <span className="absolute flex h-3 w-3 bottom-0 right-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
          </div>
          <span>Nguyen Viet Tuan</span>
        </div>
        <div className="flex items-center gap-2 hover:bg-black/30 rounded-xl p-1 cursor-pointer">
          <FaCirclePlus className="w-9 h-9" />
          <span>Create new group</span>
        </div>
      </div>
    </div>
  );
};

export default RightNav;
