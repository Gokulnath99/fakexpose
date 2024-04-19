"use client";

import Link from "next/link";
import Logo from "./Logo";
import { buttonVariants } from "./ui/button";
import NavMenu from "../components/NavigationMenu";
import {
  SignInButton,
  SignUpButton,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const { scrollY } = useScroll();

  const [scroll, setScroll] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  });

  return (
    <motion.nav
      variants={{
        visible: {
          backgroundColor: "#00274C",
          boxShadow: "0 25px 25px rgb(0 0 0 / 0.15)",
        },
        hidden: { padding: "50px", y: 0 },
      }}
      animate={scroll ? "visible" : "hidden"}
      transition={{ duration: 0.5 }}
      className="sticky inset-x-0 top-0 z-30 p-6 -translate-y-full text-white"
    >
      <div className="hidden md:flex flex-row items-center">
        <Link className="basis-1/2 items-center" href="/">
          <Logo />
        </Link>
        <NavMenu />

        <div className="grid grid-flow-col gap-4 mx-5">
          <UserButton afterSignOutUrl="/" />

          <SignedOut>
            <div
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <SignInButton afterSignInUrl="/" mode="modal" />
            </div>
            <div
              className={buttonVariants({
                variant: "secondary",
                size: "sm",
              })}
            >
              <SignUpButton afterSignUpUrl="/" />
            </div>
          </SignedOut>
        </div>
      </div>
      <div className="md:hidden">
        <p>=</p>
      </div>
    </motion.nav>
  );
}
