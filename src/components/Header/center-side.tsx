import React from "react";
import { CenterSideData } from "./center-side.data";
import Link from "next/link";
import { usePathsName } from "@/hooks/usePathsName";
import { cn } from "@/lib/utils";

const CenterSide = () => {
  const { paths } = usePathsName();

  return (
    <div className="grid grid-flow-col justify-center items-center gap-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      {CenterSideData.map((item, index) => (
        <Link
          href={`/${item?.path}`}
          key={index}
          className={cn(
            "w-full h-full p-2 px-10",
            paths[1]?.includes(item?.path) && paths[1]?.length === item?.path?.length
              ? "text-black/50 font-bold border-b-4 border-black/50 hover:bg-none hover:rounded-none"
              : "hover:bg-black/40 hover:rounded-lg"
          )}>
          <item.icon size={27} />
        </Link>
      ))}
    </div>
  );
};

export default CenterSide;
