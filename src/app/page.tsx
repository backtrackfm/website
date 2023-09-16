import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AppWindow, Apple } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 md:p-24 bg-white text-black">
      <div className="bg-gradient-to-b from-primary to-yellow-500 w-full md:w-3/5 flex justify-center items-center h-32 rounded-lg">
        <div className="flex gap-4 items-center text-white">
          <Image src="/logo.svg" alt="⏮️" width={60} height={60} />
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Backtrack
          </h1>
        </div>
      </div>

      <div className="w-full md:w-3/5 text-justify">
        Backtrack solves a simple problem that I faced whilst producing some
        music: it&apos;s really hard to keep track of the latest version of a
        song. Backtrack solves this problem by providing the user a simple yet
        powerful tool customised to this exact experience.
        <br />
        Find out more{" "}
        <Link
          href="https://github.com/tika/backtrack-app#backtrack"
          className="underline hover:text-yellow-500"
        >
          on the open-source GitHub
        </Link>
        .
      </div>
      <div className="flex gap-4">
        <Link
          href="https://github.com/tika/backtrack-app/releases/download/v0.1.0/backtrack-installer.dmg"
          className={cn(buttonVariants({ variant: "default" }))}
        >
          Download for Mac
          <Apple className="w-4 h-4 ml-1" />
        </Link>
        <Link
          href="https://github.com/tika/backtrack-app/releases/download/v0.1.0/backtrack-installer.exe"
          className={cn(buttonVariants({ variant: "default" }))}
        >
          Download for Windows
          <AppWindow className="w-4 h-4 ml-1" />
        </Link>
      </div>

      <div className="text-center">
        <p className="leading-7 text-sm [&:not(:first-child)]:mt-6">
          A thought & creation of{" "}
          <Link
            href="https://github.com/tika"
            className="underline hover:text-yellow-500"
          >
            Tika Capon
          </Link>
          <br />
        </p>
      </div>
    </main>
  );
}
