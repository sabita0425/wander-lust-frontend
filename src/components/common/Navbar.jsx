import React from "react";
import CustomButton from "./CustomButton";

export const Navbar = () => {
  return (
    <header className="flex justify-between items-center px-20 py-4 bg-amber-200">
      {/* left part */}
      <div>
        <h1 className="text-3xl font-semibold text-blue-700">WanderLust</h1>
      </div>
      {/* right part */}

      <div className="flex gap-20 iteams-center">
        <nav className="space-x-16 text-lg">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </nav>

        <CustomButton text="Log in" link="/login" />
      </div>
    </header>
  );
};

export default Navbar;
