import React, { useState } from 'react';

// Avatar initials
const getInitials = (name) => {
  return name
    .split(' ')
    .map((word) => word[0])
    .join('')
    .toUpperCase();
};

const UserServiceCard = ({ user, onBanToggle, onDelete }) => {
  const isBanned = user.status === 'banned';

  const [showDetails, setShowDetails] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 p-6 flex flex-col relative border border-gray-100">
      
      {/* 🗑️ Delete Icon */}
      <button
        onClick={() => onDelete(user.id)}
        className="absolute top-3 right-3 text-red-500 hover:text-red-700"
        title="Delete User"
      >
        &#x1F5D1;
      </button>

      {/* Avatar + Name */}
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-full bg-pink-200 text-pink-800 font-bold flex items-center justify-center text-lg shadow-inner">
          {getInitials(user.name)}
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-800">{user.name}</h3>
          <p className="text-gray-500 text-sm">{user.email}</p>
        </div>
      </div>

      {/* Status Badge */}
      <span
        className={`inline-block mb-4 px-3 py-1 text-xs font-medium rounded-full self-start ${
          isBanned ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
        }`}
      >
        {isBanned ? 'Banned' : 'Active'}
      </span>

      {/* Buttons */}
      <div className="mt-auto flex flex-col gap-2">
        <button
          onClick={() => setShowDetails(true)}
          className="w-full py-2 rounded-md border border-gray-300 text-sm hover:bg-gray-100"
        >
          View Details
        </button>
        <button
          onClick={() => setShowEdit(true)}
          className="w-full py-2 rounded-md border border-blue-300 text-blue-600 hover:bg-blue-50 text-sm"
        >
          Edit Profile
        </button>
        <button
          onClick={() => onBanToggle(user.id)}
          className={`w-full py-2 rounded-md text-white font-semibold transition duration-200 text-sm ${
            isBanned
              ? 'bg-green-500 hover:bg-green-600'
              : 'bg-red-500 hover:bg-red-600'
          }`}
        >
          {isBanned ? 'Unban User' : 'Ban User'}
        </button>
      </div>

      {/* 👀 Details Modal */}
      {showDetails && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-96 shadow-lg">
            <h2 className="text-lg font-bold mb-4">User Details</h2>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Status:</strong> {user.status}</p>
            {/* Add more fields if needed */}
            <button
              onClick={() => setShowDetails(false)}
              className="mt-4 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* ✏️ Edit Modal */}
      {showEdit && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-96 shadow-lg">
            <h2 className="text-lg font-bold mb-4">Edit Profile</h2>
            {/* You can connect these inputs to state later */}
            <input
              type="text"
              defaultValue={user.name}
              className="w-full p-2 border mb-3 rounded"
            />
            <input
              type="email"
              defaultValue={user.email}
              className="w-full p-2 border mb-3 rounded"
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowEdit(false)}
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
              >
                Cancel
              </button>
              <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserServiceCard;
