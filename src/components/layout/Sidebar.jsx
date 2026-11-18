
function Sidebar({ role, activeView, onNavigate }) {
  const isAdmin = role === "ADMIN";

  const links = [
    { id: "dashboard", label: "Overview", icon: "▦" },
    ...(isAdmin
      ? [
          { id: "trucks", label: "Trucks", icon: "▤" },
          { id: "users", label: "Users", icon: "♙" },
        ]
      : [{ id: "trips", label: "My trips", icon: "↗" }]),
  ];

  return (
    <aside className="flex h-screen w-60 shrink-0 flex-col border-r border-slate-800 bg-[#111827] text-slate-300">
      <div className="flex h-16 items-center border-b border-slate-800 px-6">
        <h1 className="text-lg font-semibold text-white">
          FleetTrack<span className="text-blue-500">PRO</span>
        </h1>
      </div>

      <div className="px-4 py-7">
        <p className="mb-3 px-3 text-xs font-medium uppercase tracking-wider text-slate-500">
          Workspace
        </p>

        <nav className="space-y-1">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => onNavigate(link.id)}
              className={`flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-sm transition-colors ${
                activeView === link.id
                  ? "bg-blue-600 text-white"
                  : "text-slate-400 hover:bg-slate-800 hover:text-white"
              }`}
            >
              <span className="w-5 text-center">{link.icon}</span>
              {link.label}
            </button>
          ))}
        </nav>
      </div>

      <div className="mt-auto border-t border-slate-800 px-6 py-4">
        <p className="text-xs text-slate-500">Account type</p>
        <p className="mt-1 text-sm font-medium text-white">
          {isAdmin ? "Administrator" : "Chauffeur"}
        </p>
      </div>
    </aside>
  );
}

export default Sidebar;
