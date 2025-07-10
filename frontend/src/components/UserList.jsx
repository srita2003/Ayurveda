import React from 'react';

const UserList = ({ users, onEdit, onDelete, searchTerm }) => {
  // Filter users by username, role, or email
  const filteredUsers = searchTerm
    ? users.filter(
        (user) =>
          user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
          (user.email ? user.email.toLowerCase().includes(searchTerm.toLowerCase()) : false)
      )
    : users;

  return (
    <div className="overflow-x-auto w-full">
      <table className="w-full bg-white rounded-xl border border-gray-200 text-left mb-6">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-3 font-semibold text-gray-800">NAME</th>
            <th className="px-4 py-3 font-semibold text-gray-800">ROLE</th>
            <th className="px-4 py-3 font-semibold text-gray-800">STATUS</th>
            <th className="px-4 py-3 font-semibold text-gray-800">EMAIL</th>
            <th className="px-4 py-3 font-semibold text-gray-800">PROFESSION</th>
            <th className="px-4 py-3 font-semibold text-gray-800">ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.length === 0 ? (
            <tr><td colSpan="6" className="px-4 py-4 text-center text-gray-500">No users found.</td></tr>
          ) : (
            filteredUsers.map(user => (
              <tr key={user.id} className="border-t border-gray-100 hover:bg-gray-50 transition">
                <td className="px-4 py-3 text-gray-900">{user.username}</td>
                <td className="px-4 py-3 text-gray-700">{user.role}</td>
                <td className="px-4 py-3">
                  <span className="bg-red-100 text-red-600 px-3 py-1 rounded text-xs font-semibold">Inactive</span>
                </td>
                <td className="px-4 py-3 text-gray-700">{user.email}</td>
                <td className="px-4 py-3 text-gray-700">{user.profession}</td>
                <td className="px-4 py-3">
                  <span
                    onClick={() => onEdit(user)}
                    className="text-green-700 cursor-pointer font-medium hover:underline mr-4"
                  >
                    Edit
                  </span>
                  <span
                    onClick={() => onDelete(user.id)}
                    className="text-red-600 cursor-pointer font-medium hover:underline"
                  >
                    Delete
                  </span>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserList; 