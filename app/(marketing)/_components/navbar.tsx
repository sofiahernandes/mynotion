"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import Link from "next/link";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { useConvexAuth } from "convex/react";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import { Spinner } from "@/components/ui/spinner";

export const Navbar = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  const scrolled = useScrollTop();

  return (
    <div className={cn(
      "z-50 bg-background dark:bg-[#1F1F1F] fixed top-0 flex items-center w-full p-6",
      scrolled && "border-b shadow-sm"
    )}>
      <Logo/>

      <div className="md:ml:auto md:justify-end justify-between w-full flex items-center gap-x-2">
        {isLoading && (
          <Spinner/>
        )}

        {!isAuthenticated && !isLoading && (
          <>
            <SignInButton mode="modal"> {/* Setting this to 'modal' will open a modal on the current route. */}
              <Button variant="ghost" size="sm">
                Log in
              </Button>
            </SignInButton>

          <SignInButton mode="modal"> {/* Setting this to 'modal' will open a modal on the current route. */}
            <Button size="sm">
              Sign Up Free
            </Button>
          </SignInButton>
        </>
        )}

        {isAuthenticated && !isLoading && (
          <>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/documents">
                Enter My Notion
              </Link>
            </Button>
            <UserButton
              afterSwitchSessionUrl="/"
            />
          </>
        )}

        <ModeToggle/>
      </div>
    </div>
  );
}