import React from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between p-16 sm:px-40 max-w-7xl m-auto">
      <Link href={"/"}>
        <h1>AJ Site - Title/Logo</h1>
      </Link>
      <div>
        <Drawer direction="bottom">
          <DrawerTrigger>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </DrawerTrigger>
          <DrawerContent className="bg-sky-900 border-none">
            <DrawerHeader>
              <Link href={"/"} className="hover:underline">
                Home
              </Link>
              <Link href={"/about"} className="hover:underline">
                About
              </Link>
              <Link href={"/podcasts"} className="hover:underline">
                Podcasts
              </Link>
              <Link href={"/blog"} className="hover:underline">
                Blog
              </Link>
            </DrawerHeader>
            <DrawerFooter>
              <DrawerClose>
                <Button
                  variant="outline"
                  className="border-white hover:bg-sky-950"
                >
                  Close
                </Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </nav>
  );
};

export default Navbar;
