import React, { useState } from 'react';
import UserServiceCard from '../components/UserServiceCard';
import { Link } from 'react-router-dom';

const dummyUsers = [
  { id: 1, name: 'Jane Doe', email: 'jane@example.com', status: 'active' },
  { id: 2, name: 'John Smith', email: 'john@example.com', status: 'banned' },
  { id: 3, name: 'Alice Johnson', email: 'alice@example.com', status: 'active' },
  { id: 4, name: 'Bob Lee', email: 'bob@example.com', status: 'banned' },
];

const AdminDashboard = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('all');
  const [users, setUsers] = useState(dummyUsers);

  const handleBanToggle = (id) => {
    const updatedUsers = users.map((user) =>
      user.id === id
        ? { ...user, status: user.status === 'active' ? 'banned' : 'active' }
        : user
    );
    setUsers(updatedUsers);
  };

  const handleDeleteUser = (id) => {
    const confirmed = window.confirm('Are you sure you want to delete this user?');
    if (confirmed) {
      setUsers(users.filter((user) => user.id !== id));
    }
  };

  const filteredUsers = users.filter((user) => {
    const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filter === 'all' || user.status === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-pink-50 via-white to-pink-100">
      
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-6 hidden sm:block">
        <h2 className="text-2xl font-bold text-pink-600 mb-6">💖 Serendate Admin</h2>
        <nav className="flex flex-col gap-4 font-medium text-pink-600">
          <Link to="/admin" className="hover:text-pink-800 transition">📊 Dashboard</Link>
          <Link to="/admin/reports" className="hover:text-pink-800 transition">📁 Reports</Link>
          <Link to="/settings" className="hover:text-pink-800 transition">⚙️ Settings</Link>
          <Link to="/" className="hover:text-pink-800 transition">🚪 Logout</Link>
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1">
        {/* Top Navbar */}
        <nav className="bg-white shadow-md sticky top-0 z-50 sm:hidden">
          <div className="px-4 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-pink-600">💖 Serendate Admin</h1>
            <ul className="flex gap-4 font-medium text-pink-600 text-sm">
              <li>
                <Link to="/admin" className="hover:text-pink-800 transition">Dashboard</Link>
              </li>
              <li>
                <Link to="/admin/reports" className="hover:text-pink-800 transition">Reports</Link>
              </li>
              <li>
                <Link to="/settings" className="hover:text-pink-800 transition">Settings</Link>
              </li>
              <li>
                <Link to="/" className="hover:text-pink-800 transition">Logout</Link>
              </li>
            </ul>
          </div>
        </nav>

        <div className="p-6 sm:p-8">
          <h2 className="text-4xl font-bold text-center text-pink-600 mb-8 drop-shadow">
            🛠️ Admin User Management
          </h2>

          {/* Filter Tabs */}
          <div className="mb-6 flex flex-wrap justify-center gap-4">
            {['all', 'active', 'banned'].map((status) => (
              <button
                key={status}
                onClick={() => setFilter(status)}
                className={`px-6 py-2 rounded-full border shadow-sm transition font-medium ${
                  filter === status
                    ? 'bg-pink-600 text-white'
                    : 'bg-white text-pink-600 border-pink-300 hover:bg-pink-100'
                }`}
              >
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="flex justify-center mb-8">
            <input
              type="text"
              placeholder="🔍 Search users by name..."
              className="px-4 py-3 w-full max-w-md border-2 border-pink-200 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-pink-400"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* User Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user) => (
                <UserServiceCard
                  key={user.id}
                  user={user}
                  onBanToggle={handleBanToggle}
                  onDelete={handleDeleteUser}
                />
              ))
            ) : (
              <p className="text-center col-span-full text-gray-500 italic">No users found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
