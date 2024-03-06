"use client";
import Link from "next/link";
import React, { useState } from "react";


const Navbar = () => {

  return (
    <nav>
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          href={"/"}
          className="text-2xl md:text-5xl text-white font-semibold"
        >
          LOGO
        </Link>
        <div className="menu"></div> 
      </div> 
    </nav>
  );
};

export default Navbar;
