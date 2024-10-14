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
import Nav from "../../../../.././components/cust/nav";
import Avatar from "@/components/cust/avatar";

export default function Dashboard() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "/" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const [openOC, setOpenOC] = React.useState(false);

  function commandOpenClick() {
    setOpen((openOC) => !openOC);
  }

  return (
    <>
      <header className="top-0 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-[48] w-full border-b text-sm py-2.5  bg-neutral-800 border-neutral-700">
        <nav className="max-w-[85rem] mx-auto w-full px-4 sm:px-6 lg:px-8 flex basis-full items-center w-full mx-auto">
          <div className="me-5">
            <a
              className="flex-none rounded-md text-xl inline-block font-semibold focus:outline-none focus:opacity-80"
              href="#"
              aria-label="Preline"
            >
              <Image
                src="/images/ambrosia.png"
                className="mt-1.5"
                width={50}
                height={50}
                alt="Hi"
              />
            </a>
          </div>

          <div className="w-full flex items-center justify-end ms-auto md:justify-between gap-x-1 md:gap-x-3">
            <div className="md:hidden">
              <button
                type="button"
                className="hs-collapse-toggle size-[38px] relative inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                id="hs-secondaru-navbar-collapse"
                aria-expanded="false"
                aria-controls="hs-secondaru-navbar"
                aria-label="Toggle navigation"
                data-hs-collapse="#hs-secondaru-navbar"
              >
                <svg
                  className="hs-collapse-open:hidden size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="3" x2="21" y1="6" y2="6" />
                  <line x1="3" x2="21" y1="12" y2="12" />
                  <line x1="3" x2="21" y1="18" y2="18" />
                </svg>
                <svg
                  className="hs-collapse-open:block shrink-0 hidden size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
                <span className="sr-only">Toggle navigation</span>
              </button>
            </div>

            <div className="hidden md:block">
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-3.5">
                  <svg
                    className="shrink-0 size-4 text-white/60"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                  </svg>
                </div>
                <input
                  type="text"
                  className="py-2 ps-10 pe-16 block w-full rounded-lg text-sm focus:outline-none focus:border-blue-500 border disabled:opacity-50 disabled:pointer-events-none bg-neutral-800 border-neutral-700 text-neutral-400 placeholder:text-neutral-400 focus:ring-neutral-600"
                  placeholder="Search"
                  onClick={commandOpenClick} // Event handler in JSX
                />
                <div className="hidden absolute inset-y-0 end-0 flex items-center pointer-events-none z-20 pe-1">
                  <button
                    type="button"
                    className="inline-flex shrink-0 justify-center items-center size-6 rounded-full text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:text-neutral-500 dark:hover:text-blue-500 dark:focus:text-blue-500"
                    aria-label="Close"
                  >
                    <span className="sr-only">Close</span>
                    <svg
                      className="shrink-0 size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="m15 9-6 6" />
                      <path d="m9 9 6 6" />
                    </svg>
                  </button>
                </div>
                <div className="absolute inset-y-0 end-0 flex items-center pointer-events-none z-20 pe-3 text-gray-400">
                  <svg
                    className="shrink-0 size-3 text-gray-400 dark:text-white/60"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
                  </svg>
                  <span className="mx-1">
                    <svg
                      className="shrink-0 size-3 text-gray-400 dark:text-white/60"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="M12 5v14" />
                    </svg>
                  </span>
                  <span className="text-xs">/</span>
                </div>
              </div>
            </div>

            <div className="flex flex-row items-center justify-end gap-1">
              <button
                type="button"
                className="md:hidden size-[38px] relative inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
              >
                <svg
                  className="shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
                <span className="sr-only">Search</span>
              </button>

              <Avatar />
            </div>
          </div>
        </nav>
      </header>

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

            {/** Tooketh from Files :lmao: */}
            <div>
              <div className="inline-flex gap-x-2">
                <a
                  className="transition-all py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-neutral-700/65 bg-neutral-800 text-neutral-400 shadow-sm hover:bg-neutral-800/45 focus:outline-none focus:bg-neutral-800/45 disabled:opacity-50 disabled:pointer-events-none"
                  href="#"
                >
                  <Database
                    className="shrink-0 size-4"
                    width="24"
                    height="24"
                  />
                  New Database
                </a>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 mx-2">
            <div className="p-3 bg-neutral-800 hover:bg-neutral-700/55 rounded-md mb-1 flex items-center justify-between border border-neutral-700/45 transition-all hs-tooltip-toggle">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="shrink-0 size-5 mb-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                />
                <Database className="ml-4 mr-2 text-neutral-400" />
                <p className="text-neutral-400 font-calsans mt-1">Database</p>
              </div>
              <div className="flex items-center">
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
                        Edit Database
                      </a>
                      <a
                        className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm focus:outline-none text-neutral-400 hover:bg-neutral-700/35 hover:text-neutral-300 focus:bg-neutral-700/35 focus:text-neutral-300 transition-all"
                        href="#"
                      >
                        View Info
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
        {/* Command Dialog (This section can remain as it is) */}
        <CommandDialog open={open} onOpenChange={setOpen}>
          <Command className="transition-all rounded-lg border shadow-md md:min-w-[450px] bg-secondary backdrop-blur-md filter-backdrop text-secondary-foreground">
            <CommandInput
              placeholder="Type a command or search..."
              className="text-primary"
            />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Suggestions" className="text-primary">
                <CommandItem className="hover:bg-primary hover:text-primary-foreground">
                  <Server className="mr-2 h-4 w-4" />
                  <span>Servers</span>
                </CommandItem>
                <CommandItem className="hover:bg-primary hover:text-primary-foreground">
                  <User className="mr-2 h-4 w-4" />
                  <span>Players</span>
                </CommandItem>
                <CommandItem className="hover:bg-primary hover:text-primary-foreground">
                  <GitMerge className="mr-2 h-4 w-4" />
                  <span>Git</span>
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
            </CommandList>
          </Command>
        </CommandDialog>
      </main>
    </>
  );
}
