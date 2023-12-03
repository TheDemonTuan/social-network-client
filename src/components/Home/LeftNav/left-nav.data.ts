import React from "react";
import { FaUserFriends } from "react-icons/fa";
import { MdGroups } from "react-icons/md";
import { CiBookmark } from "react-icons/ci";
import { GoVideo } from "react-icons/go";
import { FaFlag } from "react-icons/fa";
import { MdEventAvailable } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";
import { IoChevronDownCircle } from "react-icons/io5";

export const LeftNavData = [
  {
    title: "User",
    icon: FaUserFriends,
    path: "/",
  },
  {
    title: "Friends",
    icon: FaUserFriends,
    path: "/",
  },
  {
    title: "Groups",
    icon: MdGroups,
    path: "/",
  },
  {
    title: "Saved",
    icon: CiBookmark,
    path: "/",
  },
  {
    title: "Videos",
    icon: GoVideo,
    path: "/",
  },
  {
    title: "Pages",
    icon: FaFlag,
    path: "/",
  },
  {
    title: "Events",
    icon: MdEventAvailable,
    path: "/",
  },
  {
    title: "Memories",
    icon: FaRegClock,
    path: "/",
  },
  {
    title: "See More",
    icon: IoChevronDownCircle,
    path: "/",
  },
];
