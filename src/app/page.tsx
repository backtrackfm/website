import { Button } from "@/components/ui/button";
import { AppWindow, Apple } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex gap-4 items-center">
        <Image src="/logo.svg" alt="⏮️" width={60} height={60} />
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Backtrack
        </h1>
      </div>
      <div className="w-3/5 text-justify">
        Backtrack solves a simple problem that I faced whilst producing some
        music: it&apos;s really hard to keep track of the latest version of a
        song. Backtrack solves this problem by providing the user a simple yet
        powerful tool customised to this exact experience.
        <br />
        Find out more{" "}
        <Link
          href="https://github.com/tika/backtrack-app#backtrack"
          className="underline"
        >
          here
        </Link>
        .
      </div>
      <div className="flex gap-4">
        <Button>
          Download for Mac
          <Apple className="w-4 h-4 ml-1" />
        </Button>
        <Button>
          Download for Windows
          <AppWindow className="w-4 h-4 ml-1" />
        </Button>
      </div>

      <div>
        <p className="leading-7 text-sm [&:not(:first-child)]:mt-6">
          Created & thought out by{" "}
          <Link href="https://github.com/tika" className="underline">
            Tika Capon
          </Link>
        </p>
      </div>
    </main>
  );
}
