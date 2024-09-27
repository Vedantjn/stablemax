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
    <header className="fixed top-0 left-0 right-0 bg-black border-b border-white/60 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/">
              <h2 className="font-bold text-xl sm:text-2xl">StableMax</h2>
            </Link>
          </div>
          <div className="hidden sm:block">
            {renderAuthButtons()}
          </div>
          <div className="sm:hidden">
            <button onClick={toggleMenu} className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="sr-only">Open main menu</span>
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {renderAuthButtons()}
          </div>
        </div>
      )}
    </header>
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
        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
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