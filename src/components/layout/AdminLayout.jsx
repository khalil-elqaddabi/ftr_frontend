
import Sidebar from "./Sidebar";
import Header from "./Header";

function AdminLayout({ user, activeView, onNavigate, children }) {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar
        role={user.role}
        activeView={activeView}
        onNavigate={onNavigate}
      />

      <div className="flex min-w-0 flex-1 flex-col">
        <Header title="Admin Dashboard" user={user} />

        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
}

export default AdminLayout;
