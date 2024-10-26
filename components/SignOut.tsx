"use client";

import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signOut } from "firebase/auth";
import { auth } from "@/config/firebase";
import { useRouter } from "next/navigation";

export default function SignOut() {
  const router = useRouter();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="bg-green-700 hover:bg-green-600 rounded-full size-9 flex justify-center items-center text-white">
          M
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-56"
        onClick={() => {
          // CookieServices.remove("secret-uuid");
          signOut(auth);
          router.push("./login");
        }}
      >
        <DropdownMenuItem>
          <LogOut className="mr-2 size-4" />
          <span>Log out</span>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
