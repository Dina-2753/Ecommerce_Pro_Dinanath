import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import NavLinks from "../Common_1/NavLinks";
const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <nav class="bg-white">
            <div class="flex items-center font-medium justify-around">
                <div class="z-50 md:w-auto w-full flex justify-between">
                    <img src="https://images.indianexpress.com/2021/01/myntra.png" alt="logo" class="md:cursor-pointer h-9" />
                    <div class="text-3xl md:hidden" onClick={() => setOpen(!open)}>
                        <HiMenu name={`${open ? "close" : "menu"}`}>gjhgbjh</HiMenu>
                    </div>
                </div>
                <ul class="md:flex hidden uppercase items-center gap-8 ">
                    <li>
                        <Link to="/" class="py-1 px-3 inline-block" style={{ textDecoration: "none", color: "#2f2d2d" }}>
                            Home
                        </Link>
                    </li>
                    <NavLinks />
                </ul>
                <div class="md:block hidden">

                </div>
                {/* Mobile nav */}
                <ul
                    class={`md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4 duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
                >
                    <li>
                        <Link to="/" class="py-7 px-3 inline-block">
                            Home
                        </Link>
                    </li>
                    <NavLinks />
                    <div class="py-5">

                    </div>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;