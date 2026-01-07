import React from "react";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Simple top bar - replace with your real header/nav if you have one */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-orange-500 text-sm font-extrabold text-white">
              SS
            </div>
            <div className="leading-tight">
              <div className="text-sm font-extrabold tracking-tight">
                Skylight Safety
              </div>
              <div className="text-xs text-slate-500">SkylightSafety.net</div>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm font-semibold sm:flex">
            <a
              className="text-slate-700 hover:text-slate-900"
              href="#working-plan"
            >
              How it Works
            </a>
            <a className="text-slate-700 hover:text-slate-900" href="#faq">
              FAQ
            </a>
            <a
              className="rounded-xl bg-orange-500 px-4 py-2 text-white hover:bg-orange-600"
              href="#request"
            >
              Request Info →
            </a>
          </nav>
        </div>
      </header>

      <main>{children}</main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-slate-600">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Skylight Safety</p>
            <div className="flex gap-4">
              <a className="hover:text-slate-900" href="/details">
                Details
              </a>
              <a className="hover:text-slate-900" href="#request">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
