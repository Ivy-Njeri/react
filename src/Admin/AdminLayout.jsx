
import React from 'react';
import { Link } from 'react-router-dom';

const AdminLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-4">
        <h2 className="text-2xl font-bold mb-6 text-pink-600">Serendate Admin</h2>
        <nav className="space-y-4">
          <Link to="/admin/users" className="block text-gray-700 hover:text-pink-600">👥 Users</Link>
          <Link to="/admin/reports" className="block text-gray-700 hover:text-pink-600">📊 Reports</Link>
          <Link to="/admin/settings" className="block text-gray-700 hover:text-pink-600">⚙️ Settings</Link>
           <Link to="/admin" className="block text-gray-700 hover:text-pink-600">Dashboard</Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
};

export default AdminLayout;
