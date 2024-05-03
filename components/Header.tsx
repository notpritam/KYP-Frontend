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

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { Input } from "./ui/input";
import { Search } from "lucide-react";

function Header() {
  const { login, logout, user } = useKYPStore();

  const router = useRouter();

  const handleLogin = () => {
    router.push("/login");
  };

  return (
    <div className="flex lg:px-8 fixed items-center justify-between top-0 py-4  w-full border-b-[1px] bg-gray-50">
      <Link href={"/"} className="text-xl font-medium">
        KNOW YOUR PLACE
      </Link>
      <div className="flex lg:w-[600px] items-center border-b px-3 bg-white">
        <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
        <Input
          className={
            "flex h-11 border-none focus:border-none  w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
          }
        />
      </div>
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
