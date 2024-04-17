"use client";

import React from "react";
import { BarLoader } from "react-spinners";
import LoadingBar from "@/components/LoadingBar";
import Header from "@/components/Header";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-full">
      <Header>{children}</Header>
    </div>
  );
};

export default layout;
