import { Bell, Search } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function NavBar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 h-16 border-b border-slate-200 bg-white">
      <div className="flex h-full items-center px-6">
      
        <Link
          to="/"
          className="flex w-60 shrink-0 items-center gap-3"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-purple-600 text-sm font-bold text-white">
            F
          </div>

          <span className="text-lg font-semibold text-slate-900">
            FoodHub
          </span>
        </Link>


        <nav className="flex flex-1 items-center gap-1">
          <Link
            to="/"
            className="rounded-lg px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
          >
            Total Summary
          </Link>

          <Link
            to="."
            className="rounded-lg px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
          >
            Available Foods
          </Link>

          <Link
            to="."
            className="rounded-lg px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
          >
            Marketplace
          </Link>

          <Link
            to="."
            className="rounded-lg px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
          >
            Meals
          </Link>

          <Link
            to="."
            className="rounded-lg px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
          >
            Suggestions
          </Link>
        </nav>


        <div className="flex items-center gap-2">
          <button
            type="button"
            className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
          >
            <Search className="h-5 w-5" />
          </button>

          <button
            type="button"
            className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
          >
            <Bell className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}