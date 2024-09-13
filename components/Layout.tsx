import React, { FC, PropsWithChildren } from "react";
import Navbar from "./Navbar";

const Layout: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="px-40">{children}</main>
    </>
  );
};

export default Layout;
