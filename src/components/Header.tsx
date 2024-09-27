"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { BiLoaderCircle } from "react-icons/bi";
import { Menu } from "lucide-react";

export default function Header() {
  const [initialLoading, setInitialLoading] = useState<boolean>(true);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status !== "loading") {
      setInitialLoading(false);
    }
  }, [status, session]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed top-0 w-full bg-black border-b border-white/60 p-3 z-50">
      <div className="flex justify-between items-center">
        <Link href="/">
          <h2 className="font-bold text-xl sm:text-2xl">StableMax</h2>
        </Link>
        <div className="hidden sm:flex">
          {renderAuthButtons()}
        </div>
        <button className="sm:hidden" onClick={toggleMenu}>
          <Menu size={24} />
        </button>
      </div>
      {isMenuOpen && (
        <div className="mt-3 sm:hidden">
          {renderAuthButtons()}
        </div>
      )}
    </div>
  );

  function renderAuthButtons() {
    if (initialLoading && status === "loading") {
      return <BiLoaderCircle className="animate-spin" />;
    } else if (!session) {
      return (
        <div className="__menu">
          <Button onClick={() => signIn("google")} className="w-full sm:w-auto">Login</Button>
        </div>
      );
    } else {
      return (
        <div className="flex flex-col sm:flex-row gap-3 items-center">
          <Button onClick={() => signOut()} variant="destructive" className="w-full sm:w-auto">
            Logout
          </Button>
          <Link href="/profile">
            <Avatar>
              <AvatarImage src={session.user?.image || ""} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </Link>
        </div>
      );
    }
  }
}