import { FaUserFriends } from "react-icons/fa";

const currentPath = "/friends";

export const LeftSideData = [
  {
    title: "Home",
    icon: FaUserFriends,
    path: [currentPath],
  },
  {
    title: "Friend Requests",
    icon: FaUserFriends,
    path: [currentPath, "requests"],
  },
  {
    title: "Suggestions",
    icon: FaUserFriends,
    path: [currentPath, "suggestions"],
  },
  {
    title: "All friends",
    icon: FaUserFriends,
    path: [currentPath, "list"],
  },
  {
    title: "Birthdays",
    icon: FaUserFriends,
    path: [currentPath, "birthdays"],
  },
  {
    title: "Custom Lists",
    icon: FaUserFriends,
    path: [currentPath, "friendlist"],
  },
];
