
function AdminDashboard({ onNavigate, driversCount }) {
  const stats = [
    { label: "Total Trucks", value: "—", note: "Registered vehicles" },
    { label: "Active Trips", value: "—", note: "Currently in progress" },
    { label: "Drivers",  value: driversCount ?? "—", note: "Registered chauffeurs" },
    { label: "Maintenance", value: "—", note: "Trucks requiring attention" },
  ];

  return (
    <div className="space-y-8">
      {/* Page introduction */}
      <section>
        <h1 className="text-2xl font-semibold text-slate-800">
          Overview
        </h1>
        <p className="mt-1 text-sm text-slate-500">
          Here's an overview of your fleet operations.
        </p>
      </section>

      {/* Statistics */}
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-lg border border-slate-200 bg-white p-5"
          >
            <p className="text-sm text-slate-500">{stat.label}</p>
            <p className="mt-3 text-3xl font-semibold text-slate-800">
              {stat.value}
            </p>
            <p className="mt-2 text-xs text-slate-400">{stat.note}</p>
          </div>
        ))}
      </section>

      {/* Management shortcuts */}
      <section>
        <h2 className="mb-4 text-base font-semibold text-slate-800">
          Management
        </h2>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <button
            onClick={() => onNavigate("trucks")}
            className="rounded-lg border border-slate-200 bg-white p-5 text-left transition hover:border-blue-300"
          >
            <h3 className="font-medium text-slate-800">Fleet management</h3>
            <p className="mt-1 text-sm text-slate-500">
              View and manage registered trucks.
            </p>
            <span className="mt-4 inline-block text-sm font-medium text-blue-600">
              View trucks →
            </span>
          </button>

          <button
            onClick={() => onNavigate("users")}
            className="rounded-lg border border-slate-200 bg-white p-5 text-left transition hover:border-blue-300"
          >
            <h3 className="font-medium text-slate-800">User management</h3>
            <p className="mt-1 text-sm text-slate-500">
              Access the users management section.
            </p>
            <span className="mt-4 inline-block text-sm font-medium text-blue-600">
              View users →
            </span>
          </button>
        </div>
      </section>

      {/* Recent activity */}
      <section className="rounded-lg border border-slate-200 bg-white p-5">
        <h2 className="font-semibold text-slate-800">Recent activity</h2>
        <p className="mt-4 text-sm text-slate-500">
          Activity information will appear here when available.
        </p>
      </section>
    </div>
  );
}

export default AdminDashboard;
