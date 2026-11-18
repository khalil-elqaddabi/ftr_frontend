
function DriverDashboard({ user, onNavigate }) {
  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-2xl font-semibold text-slate-800">
          Welcome back, {user?.firstName || "Driver"}
        </h1>
        <p className="mt-1 text-sm text-slate-500">
          Here's your driving activity and trip information.
        </p>
      </section>

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="rounded-lg border border-slate-200 bg-white p-5">
          <p className="text-sm text-slate-500">My trips</p>
          <p className="mt-3 text-3xl font-semibold text-slate-800">—</p>
          <p className="mt-2 text-xs text-slate-400">
            Your assigned trips
          </p>
        </div>

        <div className="rounded-lg border border-slate-200 bg-white p-5">
          <p className="text-sm text-slate-500">Completed trips</p>
          <p className="mt-3 text-3xl font-semibold text-slate-800">—</p>
          <p className="mt-2 text-xs text-slate-400">
            Successfully completed trips
          </p>
        </div>
      </section>

      <section className="rounded-lg border border-slate-200 bg-white p-6">
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-semibold text-slate-800">My trips</h2>
            <p className="mt-1 text-sm text-slate-500">
              View the trips assigned to your account.
            </p>
          </div>

          <button
            onClick={() => onNavigate("trips")}
            className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
          >
            View my trips
          </button>
        </div>

        <div className="mt-6 border-t border-slate-100 pt-6 text-center">
          <p className="text-sm text-slate-500">
            Your trip information will appear here.
          </p>
        </div>
      </section>
    </div>
  );
}

export default DriverDashboard;
