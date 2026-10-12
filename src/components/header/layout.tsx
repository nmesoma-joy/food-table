import type { ReactNode } from "react";

import { NavBar } from "./NavBar";
import { UserMenu } from "./UserMenu";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-slate-50">
      <NavBar />

      <UserMenu />

      <main className="ml-60 pt-16">
        <div className="mx-auto max-w-[1600px] p-6">
          {children}
        </div>
      </main>
    </div>
  );
}