import Image from "next/image";
import Link from "next/link";
import { Karla } from "next/font/google";
import { cn } from "@/lib/utils";

const karla = Karla({ subsets: ["latin"], weight: "500" });

export const Logo = () => {
  return (
    <div className="flex items-center">
      <Link href={"/"}>
        <Image
          src="/noun-wizard-657243.svg"
          height={40}
          width={40}
          alt="logo"
        />
      </Link>
      <h2 className={cn("text-2xl ml-2", karla.className)}>wizardly</h2>
    </div>
  );
};
