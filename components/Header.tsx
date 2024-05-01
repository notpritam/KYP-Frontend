"use client";
import { Button } from "@/components/ui/button";
import { useKYPStore } from "@/lib/store";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";
import Link from "next/link";

function Header() {
  const { login, logout, user } = useKYPStore();

  const router = useRouter();

  const handleLogin = () => {
    router.push("/login");
  };

  return (
    <div className="flex lg:px-8 fixed items-center justify-between top-0 py-4 h-[4rem] w-full bg-red-200">
      <Link href={"/"} className="text-xl font-medium">
        KNOW YOUR PLACE
      </Link>

      {user ? (
        <div className="flex items-center gap-4">
          <span>{user.name}</span>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel onClick={() => router.push("/profile")}>
                My Account
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem onClick={logout}>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ) : (
        <Button onClick={handleLogin}>Login</Button>
      )}
    </div>
  );
}

export default Header;
