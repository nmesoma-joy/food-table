import {
  ChefHat,
  LayoutDashboard,
  Lightbulb,
  LogOut,
  Settings,
  ShoppingBag,
  User,
  Utensils,
} from "lucide-react";

export function UserMenu() {
  return (
    <aside className="fixed bottom-0 left-0 top-16 z-40 w-60 border-r border-slate-200 bg-white">
      <div className="flex h-full flex-col">

        {/* User information */}
        <div className="border-b border-slate-200 p-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-purple-100">
              <User className="h-5 w-5 text-purple-600" />
            </div>

            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-slate-900">
                User
              </p>

              <p className="truncate text-xs text-slate-500">
                user@example.com
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex-1 p-4">
          <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
            Dashboard
          </p>

          <nav className="space-y-1">
            <button
              type="button"
              className="flex w-full items-center gap-3 rounded-lg bg-purple-50 px-3 py-2.5 text-sm font-medium text-purple-700"
            >
              <LayoutDashboard className="h-5 w-5" />
              Overview
            </button>

            <button
              type="button"
              className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
            >
              <Utensils className="h-5 w-5" />
              Foods
            </button>

            <button
              type="button"
              className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
            >
              <ShoppingBag className="h-5 w-5" />
              Marketplace
            </button>

            <button
              type="button"
              className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
            >
              <ChefHat className="h-5 w-5" />
              Meals
            </button>

            <button
              type="button"
              className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
            >
              <Lightbulb className="h-5 w-5" />
              Suggestions
            </button>
          </nav>

          <div className="my-6 border-t border-slate-200" />

          <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
            Account
          </p>

          <nav className="space-y-1">
            <button
              type="button"
              className="flex w-full items-center gap-3 rounded-lg bg-purple-50 px-3 py-2.5 text-sm font-medium text-purple-700"
            >
              <User className="h-5 w-5" />
              Profile
            </button>

            <button
              type="button"
              className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
            >
              <Settings className="h-5 w-5" />
              Settings
            </button>
          </nav>
        </div>

        {/* Logout */}
        <div className="border-t border-slate-200 p-4">
          <button
            type="button"
            className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-600 transition hover:bg-red-50 hover:text-red-600"
          >
            <LogOut className="h-5 w-5" />
            Logout
          </button>
        </div>
      </div>
    </aside>
  );
}