import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { AiOutlineSearch } from "react-icons/ai";
import Link from "next/link";
import { FiHome } from "react-icons/fi";
import { FaUserFriends } from "react-icons/fa";
import { MdGroups2 } from "react-icons/md";
import { SiYoutubegaming } from "react-icons/si";
import { CgMenuGridO } from "react-icons/cg";
import { IoIosNotifications } from "react-icons/io";
import { FiMessageSquare } from "react-icons/fi";
import UserNav from "./user-nav";
import { useAuth } from "@/hooks/useAuth";
import CenterSide from "./center-side";

const Header = () => {
  const { authData, authIsFetching } = useAuth();
  if (!authIsFetching && !authData) return null;
  return (
    <>
      <div className="fixed flex items-center justify-between bg-slate-700 p-5 w-full top-0 left-0 h-14 text-white/90 z-[100]">
        <div className="flex items-center gap-2">
          <Avatar className="w-12 h-12">
            <Link href="/">
              <AvatarImage src="./logo.png" />
            </Link>
            <AvatarFallback>Logo TBook</AvatarFallback>
          </Avatar>
          {!authIsFetching && (
            <div className="relative flex items-center w-full h-10 rounded-full focus-within:shadow-lg bg-white overflow-hidden">
              <div className="grid place-items-center h-full w-12 text-gray-400">
                <AiOutlineSearch size={24} />
              </div>
              <Input
                className="h-full w-full text-sm text-gray-700 focus-visible:ring-0 border-0 p-0"
                type="text"
                placeholder="Search TBook"
              />
            </div>
          )}
        </div>
        {!authIsFetching && <CenterSide />}
        <div className="flex justify-center items-center gap-3">
          {authIsFetching && (
            <>
              <div className="animate-pulse bg-slate-800 w-10 h-10 rounded-full shrink-0" />
              <div className="animate-pulse bg-slate-800 w-10 h-10 rounded-full shrink-0" />
              <div className="animate-pulse bg-slate-800 w-10 h-10 rounded-full shrink-0" />
              <div className="animate-pulse bg-slate-800 w-10 h-10 rounded-full shrink-0" />
            </>
          )}
          {!authIsFetching && (
            <>
              <CgMenuGridO className="bg-slate-800 p-2 rounded-full h-10 w-10" />
              <FiMessageSquare className="bg-slate-800 p-2 rounded-full h-10 w-10" />
              <IoIosNotifications className="bg-slate-800 p-2 rounded-full h-10 w-10" />
              <UserNav />
            </>
          )}
        </div>
      </div>
      <div className="pb-14" />
    </>
  );
};

export default Header;
