
function Header({ title, user }) {
  const fullName = `${user?.firstName || ""} ${user?.lastName || ""}`.trim();

  return (
    <header className="flex min-h-16 items-center justify-between border-b border-slate-200 bg-white px-6">
      <div>
        <h2 className="text-lg font-semibold text-slate-800">
          {title}
        </h2>
      </div>

      <div className="flex items-center gap-3">
        <div className="text-right">
          <p className="text-sm font-medium text-slate-800">
            {fullName || "User"}
          </p>
          <p className="text-xs text-slate-500">
            {user?.role === "ADMIN" ? "Administrator" : "Chauffeur"}
          </p>
        </div>

        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-sm font-semibold text-slate-700">
          {user?.firstName?.charAt(0)?.toUpperCase() || "U"}
        </div>
      </div>
    </header>
  );
}

export default Header;
