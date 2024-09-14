import React, { FC, PropsWithChildren } from "react";
import Navbar from "./Navbar";
import { Toaster } from "@/components/ui/toaster"

const Layout: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="px-40">{children}</main>
      <Toaster />
    </>
  );
};

export default Layout;
