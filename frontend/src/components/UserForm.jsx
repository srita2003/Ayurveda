import React, { useState, useEffect } from 'react';
import AnimatedButton from './AnimatedButton';

const UserForm = ({ onSubmit, editingUser, onCancel }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('USER');
  const [email, setEmail] = useState('');
  const [profession, setProfession] = useState('');

  useEffect(() => {
    if (editingUser) {
      setUsername(editingUser.username);
      setPassword(''); // Do not prefill password
      setRole(editingUser.role);
      setEmail(editingUser.email || '');
      setProfession(editingUser.profession || '');
    } else {
      setUsername('');
      setPassword('');
      setRole('USER');
      setEmail('');
      setProfession('');
    }
  }, [editingUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      id: editingUser ? editingUser.id : undefined,
      username,
      password: password || undefined, // Only send password if set
      role,
      email,
      profession
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-50 p-6 rounded-lg shadow flex flex-col gap-4 w-full">
      <div className="flex flex-col gap-1">
        <label className="font-medium text-gray-700">Username:</label>
        <input type="text" value={username} onChange={e => setUsername(e.target.value)} required className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
      </div>
      <div className="flex flex-col gap-1">
        <label className="font-medium text-gray-700">Password:</label>
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder={editingUser ? "Leave blank to keep current" : ""} className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
      </div>
      <div className="flex flex-col gap-1">
        <label className="font-medium text-gray-700">Email:</label>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} required className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
      </div>
      <div className="flex flex-col gap-1">
        <label className="font-medium text-gray-700">Profession:</label>
        <input type="text" value={profession} onChange={e => setProfession(e.target.value)} required className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
      </div>
      <div className="flex flex-col gap-1">
        <label className="font-medium text-gray-700">Role:</label>
        <select value={role} onChange={e => setRole(e.target.value)} className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400">
          <option value="USER">USER</option>
          <option value="ADMIN">ADMIN</option>
        </select>
      </div>
      <div className="flex flex-col sm:flex-row gap-2 mt-2">
        <AnimatedButton type="submit" className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition flex items-center justify-center gap-1">
           {editingUser ? 'Update' : 'Add'} User
        </AnimatedButton>
        {editingUser && <AnimatedButton type="button" onClick={onCancel} className="flex-1 px-4 py-2 bg-red-600 text-white rounded hover:bg-gray-500 transition flex items-center justify-center gap-1">
          Cancel
        </AnimatedButton>}
      </div>
    </form>
  );
};

export default UserForm; 