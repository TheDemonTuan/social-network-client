import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import LeftNav from "@/components/Home/LeftNav";
import CenterNav from "@/components/Home/CenterNav";
import RightNav from "@/components/Home/RightNav";

export default function Home() {
  return (
    <div className="grid grid-cols-4 p-2">
      <div className="col-span-1">
        <LeftNav />
      </div>
      <div className="col-span-2">
        <CenterNav />
      </div>
      <div className="col-span-1">
        <RightNav />
      </div>
    </div>
  );
}
