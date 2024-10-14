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
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Card, CardContent } from "@/components/ui/card";
import { GripVertical } from "lucide-react";
import Avatar from "../../components/cust/avatar"
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

  type Item = {
    id: string;
    content: string;
    port: number;
  };

  const initialItems: Item[] = [
    { id: "item1", content: "Item 1", port: 1111 },
    { id: "item2", content: "Item 2", port: 1112 },
    { id: "item3", content: "Item 3", port: 1113 },
    { id: "item4", content: "Item 4", port: 1114 },
    { id: "item5", content: "Item 5", port: 1115 },
  ];

  const [items, setItems] = React.useState(initialItems);
  const [draggedItem, setDraggedItem] = React.useState<Item | null>(null);

  const onDragStart = (e: React.DragEvent<HTMLLIElement>, item: Item) => {
    setDraggedItem(item);
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/html", e.currentTarget.innerHTML);
    e.currentTarget.style.opacity = "0.4";
  };

  const onDragEnd = (e: React.DragEvent<HTMLLIElement>) => {
    e.currentTarget.style.opacity = "1";
    setDraggedItem(null);
  };

  const onDragOver = (e: React.DragEvent<HTMLLIElement>) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };

  const onDrop = (e: React.DragEvent<HTMLLIElement>, targetItem: Item) => {
    e.preventDefault();
    if (!draggedItem) return;

    const newItems = items.filter((item) => item.id !== draggedItem.id);
    const targetIndex = newItems.findIndex((item) => item.id === targetItem.id);
    newItems.splice(targetIndex, 0, draggedItem);

    setItems(newItems);
    setDraggedItem(null);
  };
  return (
    <>
      <header className="sticky top-0 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-[48] w-full border-b text-sm py-2.5  bg-neutral-800 border-neutral-700">
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
        <div className="md:py-4 bg-white md:border-b border-gray-200 dark:bg-neutral-800 dark:border-neutral-700">
          <nav className="relative max-w-[85rem] w-full mx-auto md:flex md:items-center md:gap-3 px-4 sm:px-6 lg:px-8">
            <div
              id="hs-secondaru-navbar"
              className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block"
              aria-labelledby="hs-secondaru-navbar-collapse"
            >
              <div className="overflow-hidden overflow-y-auto max-h-[75vh] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
                <div className="py-2 md:py-0 flex flex-col md:flex-row md:items-center gap-y-0.5 md:gap-y-0 md:gap-x-6">
                  <a
                    className="py-2 md:py-0 flex items-center font-medium text-sm focus:outline-none transition text-purple-300 hover:text-purple-400 focus:text-purple-400"
                    href="#"
                    aria-current="page"
                  >
                    Dashboard
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </div>

        <div className="max-w-[85rem] min-h-[75rem] mx-auto py-10 px-4 sm:px-6 lg:px-8">
          {items.map((item: any) => {
            return (
              <li
                key={item.id}
                draggable
                onDragStart={(e) => onDragStart(e, item)}
                onDragEnd={onDragEnd}
                onDragOver={onDragOver}
                onDrop={(e) => onDrop(e, item)}
                className="list-none gap-2"
              >
                <div className="hs-tooltip [--trigger:hover] ">
                  <a
                    href="/dashboard/servers/69696A"
                    className="hs-tooltip-toggle"
                  >
                    <Card className="mb-2 bg-neutral-800 border border-neutral-700 hs-tooltip-toggle cursor-pointer">
                      <CardContent className="p-4 flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="rounded-r-full rounded-l-full bg-neutral-600 p-2 px-6">
                            <Server className="size-5 text-white" />
                          </div>
                          <h1 className="font-semibold ml-2 text-white">
                            {item.content}
                          </h1>
                        </div>
                        <div className="flex items-center gap-x-2">
                          <div className="text-neutral-300 flex items-center mr-2">
                            <EthernetPort className="text-neutral-400 size-5" />
                            <h1 className="text-neutral-400 ml-1 text-sm font-semibold">
                              100.100.1.4:{item.port}
                            </h1>
                          </div>
                          <div className="relative flex h-2 w-2 items-center mr-2">
                            <span className="animate-ping absolute inline-flex w-2 p-2 rounded-full bg-green-500 opacity-75"></span>
                            <span className="relative inline-flex rounded-full w-2 p-2 bg-green-500"></span>
                          </div>
                        </div>
                      </CardContent>
                      <div className="hs-tooltip-content hs-tooltip-shown:visible hidden  flex items-center p-2 border bg-neutral-800/45 border-neutral-700/45 filter backdrop-blur-md rounded-md m-3">
                        <p className="text-neutral-300 ml-2">CPU: 54%</p>
                        <div className="h-6 w-[1px] bg-white opacity-25 mx-5"></div>
                        <p className="text-neutral-300">RAM: 3GB/10GB</p>
                        <div className="h-6 w-[1px] bg-white opacity-25 mx-5"></div>
                        <p className="text-neutral-300 mr-2">Disk: 9GB/10GB</p>
                      </div>
                    </Card>
                  </a>
                </div>
              </li>
            );
          })}
          <CommandDialog open={open} onOpenChange={setOpen}>
            <Command className="transition-all rounded-lg border border-secondary/25 bg-secondary/45 filter backdrop-blur-md md:min-w-[450px] text-secondary-foreground">
              <CommandInput
                placeholder="Type a command or search..."
                className="text-primary"
              />
              <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Suggestions" className="text-primary">
                  <CommandItem className="hover:bg-primary hover:text-primary-foreground rounded-lg">
                    <Server className="mr-2 h-4 w-4" />
                    <span>Servers</span>
                  </CommandItem>
                  <CommandItem className="hover:bg-primary hover:text-primary-foreground rounded-lg">
                    <User className="mr-2 h-4 w-4" />
                    <span>User Account</span>
                  </CommandItem>
                  <CommandItem disabled className="opacity-50 rounded-lg">
                    <ScrollText className="mr-2 h-4 w-4" />
                    <span>Documentation</span>
                  </CommandItem>
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading="Settings" className="text-primary">
                  <CommandItem className="hover:bg-primary hover:text-primary-foreground rounded-lg">
                    <Server className="mr-2 h-4 w-4" />
                    <span>Servers</span>
                  </CommandItem>
                  <CommandItem className="hover:bg-primary hover:text-primary-foreground rounded-lg">
                    <User className="mr-2 h-4 w-4" />
                    <span>User Account</span>
                  </CommandItem>
                  <CommandItem disabled className="opacity-50 foreground rounded-lg">
                    <ScrollText className="mr-2 h-4 w-4" />
                    <span>Documentation</span>
                  </CommandItem>
                </CommandGroup>
              </CommandList>
            </Command>{" "}
          </CommandDialog>
        </div>
      </main>
    </>
  );
}
