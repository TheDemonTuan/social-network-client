import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { LeftNavData } from "./left-nav.data";

const LeftNav = () => {
  return (
    <div className="sticky top-0 flex flex-col w-full max-h-screen overflow-y-auto">
      {LeftNavData.map((item, index) => (
        <Link
          href={index ? item.path : "/profile"}
          key={index}
          className="flex justify-start items-center gap-3 p-2 px-3 rounded-full hover:bg-black/20">
          {index ? (
            <item.icon size={32} />
          ) : (
            <Avatar className="h-8 w-8">
              <AvatarImage src="./logo.png" />
              <AvatarFallback>Logo TBook</AvatarFallback>
            </Avatar>
          )}
          <span className="text-sm font-semibold">{index ? item.title : "Nguyen Viet Tuan"}</span>
        </Link>
      ))}
      <div className="border-t border-gray-400" />
      <div className="flex flex-col gap-3 p-4">
        <span className="text-black font-medium text-lg ">Your shortcuts</span>
        <div className="flex gap-2 items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src="./logo.png" />
            <AvatarFallback>Logo TBook</AvatarFallback>
          </Avatar>
          <span className="font-medium">Tuấn promax</span>
        </div>
        <div className="flex gap-2 items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src="./ad.png" />
            <AvatarFallback>Logo TBook</AvatarFallback>
          </Avatar>
          <span className="font-medium">Tuấn promax</span>
        </div>
        <div className="flex gap-2 items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src="./logo.png" />
            <AvatarFallback>Logo TBook</AvatarFallback>
          </Avatar>
          <span className="font-medium">Tuấn promax</span>
        </div>
      </div>
    </div>
  );
};

export default LeftNav;
