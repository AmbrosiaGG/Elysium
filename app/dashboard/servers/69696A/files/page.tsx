"use client";

import Image from "next/image";
import * as React from "react";
import Link from "next/link";
import {
  Server,
  Calendar,
  CreditCard,
  ScrollText,
  Smile,
  User,
  EthernetPort,
  HardDrive,
  Cpu,
  MemoryStick,
  GitMerge,
  Terminal,
  SquareTerminal,
  Files,
  Database,
  Clock,
  DatabaseBackup,
  Globe,
  UploadCloud,
  FolderArchive,
  Folder,
  FileIcon,
  File,
  FileText,
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
import Nav from "../../../../.././components/cust/nav"
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

        <div className="max-w-full mx-auto p-2">
          <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center">
            <div>
              <h2 className="text-lg font-semibold text-neutral-200">
                /home/container
              </h2>
            </div>

            <div>
              <div className="inline-flex gap-x-2">
                <a
                  className="transition-all py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-accent bg-card text-neutral-400 shadow-sm hover:bg-card/45 focus:outline-none focus:bg-card/45 disabled:opacity-50 disabled:pointer-events-none"
                  href="#"
                >
                  <UploadCloud
                    className="shrink-0 size-4"
                    width="24"
                    height="24"
                  />
                  Upload
                </a>

                <a
                  className="transition-all py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-accent bg-card text-neutral-400 shadow-sm hover:bg-card/45 focus:outline-none focus:bg-card/45 disabled:opacity-50 disabled:pointer-events-none"
                  href="#"
                >
                  <Folder className="shrink-0 size-4" width="24" height="24" />
                  Make A Folder
                </a>

                <a
                  className="transition-all py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-accent bg-card text-neutral-400 shadow-sm hover:bg-card/45 focus:outline-none focus:bg-card/45 disabled:opacity-50 disabled:pointer-events-none"
                  href="#"
                >
                  <FileIcon
                    className="shrink-0 size-4"
                    width="24"
                    height="24"
                  />
                  Create a File
                </a>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 mx-2">
            <div className="p-3 bg-neutral-800 hover:bg-neutral-700/55 rounded-md mb-1 flex items-center justify-between border border-neutral-700/45 transition-all">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="shrink-0 size-5 mb-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                />
                <Folder
                  fill="currentColor"
                  className="ml-4 mr-2 text-neutral-400"
                />
                <p className="text-neutral-400 font-calsans mt-1">src</p>
              </div>
              <div className="flex items-center">
                <p className="text-neutral-400 mr-5">9/11/2024</p>
                <div className="hs-dropdown [--placement:bottom-right] relative inline-block">
                  <button
                    id="hs-table-dropdown-4"
                    type="button"
                    className="hs-dropdown-toggle py-1.5 px-2 inline-flex justify-center items-center gap-2 rounded-lg align-middle disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all text-sm text-neutral-400 hover:text-white focus:ring-offset-gray-800"
                    aria-haspopup="menu"
                    aria-expanded="false"
                    aria-label="Dropdown"
                  >
                    <svg
                      className="size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                    </svg>
                  </button>
                  <div
                    className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden divide-y min-w-40 z-20 shadow-2xl rounded-lg p-2 mt-2 divide-neutral-700/35 bg-neutral-800/35 border border-neutral-700/35 filter backdrop-blur-md"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="hs-table-dropdown-4"
                  >
                    <div className="py-2 first:pt-0 last:pb-0">
                      <span className="block py-2 px-3 text-xs font-medium uppercase text-neutral-300">
                        Actions
                      </span>
                      <a
                        className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm focus:outline-none text-neutral-400 hover:bg-neutral-700/35 hover:text-neutral-300 focus:bg-neutral-700/35 focus:text-neutral-300 transition-all"
                        href="#"
                      >
                        Rename folder
                      </a>
                      <a
                        className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm focus:outline-none text-neutral-400 hover:bg-neutral-700/35 hover:text-neutral-300 focus:bg-neutral-700/35 focus:text-neutral-300 transition-all"
                        href="#"
                      >
                        Move
                      </a>
                      <a
                        className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm focus:outline-none text-neutral-400 hover:bg-neutral-700/35 hover:text-neutral-300 focus:bg-neutral-700/35 focus:text-neutral-300 transition-all"
                        href="#"
                      >
                        Archive
                      </a>
                      <a
                        className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm focus:outline-none text-neutral-400 hover:bg-neutral-700/35 hover:text-neutral-300 focus:bg-neutral-700/35 focus:text-neutral-300 transition-all"
                        href="#"
                      >
                        Permissions
                      </a>
                    </div>
                    <div className="py-2 first:pt-0 last:pb-0">
                      <a
                        className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 text-red-500 hover:bg-neutral-700/35 hover:text-red-400 transition-all"
                        href="#"
                      >
                        Delete
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-3 bg-neutral-800 hover:bg-neutral-700/55 rounded-md mb-1 flex items-center justify-between border border-neutral-700/45 transition-all">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="shrink-0 size-5 mb-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                />
                <Folder
                  fill="currentColor"
                  className="ml-4 mr-2 text-neutral-400"
                />
                <p className="text-neutral-400 font-calsans mt-1">src</p>
              </div>
              <div className="flex items-center">
                <p className="text-neutral-400 mr-5">9/11/2024</p>
                <div className="hs-dropdown [--placement:bottom-right] relative inline-block">
                  <button
                    id="hs-table-dropdown-4"
                    type="button"
                    className="hs-dropdown-toggle py-1.5 px-2 inline-flex justify-center items-center gap-2 rounded-lg align-middle disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all text-sm text-neutral-400 hover:text-white focus:ring-offset-gray-800"
                    aria-haspopup="menu"
                    aria-expanded="false"
                    aria-label="Dropdown"
                  >
                    <svg
                      className="size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                    </svg>
                  </button>
                  <div
                    className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden divide-y min-w-40 z-20 shadow-2xl rounded-lg p-2 mt-2 divide-neutral-700/35 bg-neutral-800/35 border border-neutral-700/35 filter backdrop-blur-md"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="hs-table-dropdown-4"
                  >
                    <div className="py-2 first:pt-0 last:pb-0">
                      <span className="block py-2 px-3 text-xs font-medium uppercase text-neutral-300">
                        Actions
                      </span>
                      <a
                        className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm focus:outline-none text-neutral-400 hover:bg-neutral-700/35 hover:text-neutral-300 focus:bg-neutral-700/35 focus:text-neutral-300 transition-all"
                        href="#"
                      >
                        Rename folder
                      </a>
                      <a
                        className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm focus:outline-none text-neutral-400 hover:bg-neutral-700/35 hover:text-neutral-300 focus:bg-neutral-700/35 focus:text-neutral-300 transition-all"
                        href="#"
                      >
                        Move
                      </a>
                      <a
                        className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm focus:outline-none text-neutral-400 hover:bg-neutral-700/35 hover:text-neutral-300 focus:bg-neutral-700/35 focus:text-neutral-300 transition-all"
                        href="#"
                      >
                        Archive
                      </a>
                      <a
                        className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm focus:outline-none text-neutral-400 hover:bg-neutral-700/35 hover:text-neutral-300 focus:bg-neutral-700/35 focus:text-neutral-300 transition-all"
                        href="#"
                      >
                        Permissions
                      </a>
                    </div>
                    <div className="py-2 first:pt-0 last:pb-0">
                      <a
                        className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 text-red-500 hover:bg-neutral-700/35 hover:text-red-400 transition-all"
                        href="#"
                      >
                        Delete
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-3 bg-neutral-800 hover:bg-neutral-700/55 rounded-md mb-1 flex items-center justify-between border border-neutral-700/45 transition-all">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="shrink-0 size-5 mb-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                />
                <Folder
                  fill="currentColor"
                  className="ml-4 mr-2 text-neutral-400"
                />
                <p className="text-neutral-400 font-calsans mt-1">src</p>
              </div>
              <div className="flex items-center">
                <p className="text-neutral-400 mr-5">9/11/2024</p>
                <div className="hs-dropdown [--placement:bottom-right] relative inline-block">
                  <button
                    id="hs-table-dropdown-4"
                    type="button"
                    className="hs-dropdown-toggle py-1.5 px-2 inline-flex justify-center items-center gap-2 rounded-lg align-middle disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all text-sm text-neutral-400 hover:text-white focus:ring-offset-gray-800"
                    aria-haspopup="menu"
                    aria-expanded="false"
                    aria-label="Dropdown"
                  >
                    <svg
                      className="size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                    </svg>
                  </button>
                  <div
                    className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden divide-y min-w-40 z-20 shadow-2xl rounded-lg p-2 mt-2 divide-neutral-700/35 bg-neutral-800/35 border border-neutral-700/35 filter backdrop-blur-md"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="hs-table-dropdown-4"
                  >
                    <div className="py-2 first:pt-0 last:pb-0">
                      <span className="block py-2 px-3 text-xs font-medium uppercase text-neutral-300">
                        Actions
                      </span>
                      <a
                        className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm focus:outline-none text-neutral-400 hover:bg-neutral-700/35 hover:text-neutral-300 focus:bg-neutral-700/35 focus:text-neutral-300 transition-all"
                        href="#"
                      >
                        Rename folder
                      </a>
                      <a
                        className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm focus:outline-none text-neutral-400 hover:bg-neutral-700/35 hover:text-neutral-300 focus:bg-neutral-700/35 focus:text-neutral-300 transition-all"
                        href="#"
                      >
                        Move
                      </a>
                      <a
                        className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm focus:outline-none text-neutral-400 hover:bg-neutral-700/35 hover:text-neutral-300 focus:bg-neutral-700/35 focus:text-neutral-300 transition-all"
                        href="#"
                      >
                        Archive
                      </a>
                      <a
                        className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm focus:outline-none text-neutral-400 hover:bg-neutral-700/35 hover:text-neutral-300 focus:bg-neutral-700/35 focus:text-neutral-300 transition-all"
                        href="#"
                      >
                        Permissions
                      </a>
                    </div>
                    <div className="py-2 first:pt-0 last:pb-0">
                      <a
                        className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 text-red-500 hover:bg-neutral-700/35 hover:text-red-400 transition-all"
                        href="#"
                      >
                        Delete
                      </a>
                    </div>
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
