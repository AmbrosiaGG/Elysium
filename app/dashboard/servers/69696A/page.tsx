"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Server,
  User,
  EthernetPort,
  HardDrive,
  Cpu,
  MemoryStick,
  GitMerge
} from "lucide-react";

import {
  CommandDialog,
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { Console } from "console";
import Nav from "../../../.././components/cust/nav"
import Avatar from "@/components/cust/avatar";
import TopNav from "@/components/cust/topnav";

export default function Dashboard() {

  return (
    <>
     <TopNav />
      <main id="content">
        {/* Sticky Navbar */}
         <Nav />

        {/* Main Content */}
        <div className="max-w-[80rem] mx-auto py-10 px-4 sm:px-6 lg:px-8">
          <h1 className="text-white font-bold text-[30px] mb-2 font-calsans w-full">
            Server 1
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-[80rem] min-h-[2.5rem]">
            {/* Console (3 Columns on large screens) */}
            <div className="col-span-1 md:col-span-3">
              <div className="w-full h-full bg-card border border-accent rounded-lg flex flex-col justify-between">
                <div className="font-srcode text-sm p-2 text-neutral-200 rounded-b-lg">
                  <p>
                    <span className="text-green-500">container@elysium:</span>
                    <span className="text-blue-400">/home/container</span> $ ls
                  </p>
                  <p>src index.js config.js tailwind.config.js</p>

                  <p className="mt-2">
                    <span className="text-green-500">container@elysium:</span>
                    <span className="text-blue-400">/home/container</span> $ cd
                    Projects
                  </p>
                  <p>
                    <span className="text-green-500">container@elysium:</span>
                    <span className="text-blue-400">/home/container</span> $ git
                    status
                  </p>
                  <p>
                    On branch <span className="text-yellow-400">main</span>
                  </p>
                  <p>nothing to commit, working tree clean</p>

                  <p className="mt-2">
                    <span className="text-green-500">container@elysium:</span>
                    <span className="text-blue-400">/home/container</span> $
                    <span className="animate-pulse duration-300">|</span>
                  </p>
                </div>

                {/* Command input at the bottom of the console */}
                <div className="bg-card w-full border-t-accent rounded-b-md">
                  <input
                    className="rounded-none rounded-b-md hover:bg-none font-srcode p-2 focus:outline-none w-full text-neutral-400 placeholder:text-neutral-400 bg-card border border-accent"
                    placeholder="/op DuccDebb"
                  />
                </div>
              </div>
            </div>

            {/* Server Controls and Info (1 Column on small screens, 1 Column on medium and large) */}
            <div className="w-full">
              <div className="mb-2 bg-card border border-accent p-2 rounded-md flex justify-between">
                <button className="px-4 py-2 rounded-md border-none bg-teal-800/30 hover:bg-teal-800/50 focus:scale-95 text-teal-500 font-semibold  mr-1 w-full">
                  Start
                </button>
                <button className="px-4 py-2 rounded-md border-none bg-yellow-800/30 hover:bg-yellow-800/50 focus:scale-95 text-yellow-500 font-semibold  mr-1 w-full">
                  Restart
                </button>
                <button className="px-4 py-2 rounded-md border-none bg-red-800/30 hover:bg-red-800/50 focus:scale-95 text-red-500 font-semibold w-full">
                  End
                </button>
              </div>

              {/* Server Info Cards */}
              <div className="flex flex-col bg-card border border-accent shadow-sm rounded-xl mb-2">
                <div className="p-4 md:p-5 flex gap-x-4">
                  <div className="shrink-0 flex justify-center items-center size-[46px] rounded-lg text-neutral-500 bg-neutral-700">
                    <EthernetPort />
                  </div>
                  <div className="grow">
                    <p className="text-xs uppercase tracking-wide text-neutral-500">
                      IP Address
                    </p>
                    <h3 className="text-lg font-medium text-neutral-200 mt-1">
                      100.100.1.4
                    </h3>
                  </div>
                </div>
              </div>

              <div className="flex flex-col bg-card border border-accent shadow-sm rounded-xl mb-2">
                <div className="p-4 md:p-5 flex gap-x-4">
                  <div className="shrink-0 flex justify-center items-center size-[46px] rounded-lg text-neutral-500 bg-neutral-700">
                    <Cpu />
                  </div>
                  <div className="grow">
                    <p className="text-xs uppercase tracking-wide text-neutral-500">
                      CPU
                    </p>
                    <h3 className="text-lg font-medium text-neutral-200 mt-1">
                      25%
                    </h3>
                  </div>
                </div>
              </div>

              <div className="flex flex-col bg-card border border-accent shadow-sm rounded-xl mb-2">
                <div className="p-4 md:p-5 flex gap-x-4">
                  <div className="shrink-0 flex justify-center items-center size-[46px] rounded-lg text-neutral-500 bg-neutral-700">
                    <MemoryStick />
                  </div>
                  <div className="grow">
                    <p className="text-xs uppercase tracking-wide text-neutral-500">
                      Memory
                    </p>
                    <h3 className="text-lg font-medium text-neutral-200 mt-1">
                      3GB / 5GB
                    </h3>
                  </div>
                </div>
              </div>

              <div className="flex flex-col bg-card border border-accent shadow-sm rounded-xl mb-2">
                <div className="p-4 md:p-5 flex gap-x-4">
                  <div className="shrink-0 flex justify-center items-center size-[46px] rounded-lg text-neutral-500 bg-neutral-700">
                    <HardDrive />
                  </div>
                  <div className="grow">
                    <p className="text-xs uppercase tracking-wide text-neutral-500">
                      Disk
                    </p>
                    <h3 className="text-lg font-medium text-neutral-200 mt-1">
                      8GB / 10GB
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
