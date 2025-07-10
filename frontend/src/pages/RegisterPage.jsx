import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../services/api';
import { toast } from 'react-hot-toast';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [profession, setProfession] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await registerUser({ username, password, email, profession });
      toast.success('Registration successful!');
      navigate('/home');
    } catch (err) {
      toast.error('Registration failed. Try a different username or check your details.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#F7F5ED] py-8">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl flex overflow-hidden">
        {/* Left: Image and Welcome */}
        <div className="hidden md:flex flex-col justify-end items-start bg-green-100 w-1/2 p-8 relative" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="bg-black bg-opacity-40 rounded-xl p-6 mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">Welcome to Ayurvedic Wellness</h2>
            <p className="text-white text-sm">Join our community of healers and practitioners dedicated to holistic well-being through ancient wisdom.</p>
          </div>
        </div>
        {/* Right: Registration Form */}
        <div className="flex-1 flex flex-col justify-center items-center p-8">
          <div className="w-full max-w-md">
            <div className="flex flex-col items-center mb-6">
              <img src="https://cdn-icons-png.flaticon.com/512/2917/2917995.png" alt="Ayurveda Logo" className="w-12 h-12 mb-2" />
              <h2 className="text-2xl font-bold text-gray-800">Create your account</h2>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="block text-gray-700 text-sm mb-1">Username</label>
                <input type="text" value={username} onChange={e => setUsername(e.target.value)} required className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600" />
              </div>
              <div>
                <label className="block text-gray-700 text-sm mb-1">Password</label>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} required className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600" />
              </div>
              <div>
                <label className="block text-gray-700 text-sm mb-1">Email</label>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} required className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600" />
              </div>
              <div>
                <label className="block text-gray-700 text-sm mb-1">Profession</label>
                <input type="text" value={profession} onChange={e => setProfession(e.target.value)} required className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600" />
              </div>
              <button type="submit" disabled={loading} className="w-full py-3 mt-2 bg-green-700 text-white rounded-lg font-semibold text-lg hover:bg-green-800 transition flex items-center justify-center gap-2 shadow disabled:opacity-60">
                {loading ? 'Registering...' : 'Register'}
              </button>
            </form>
            <div className="text-center mt-4 text-sm text-gray-600">
              Already have an account?{' '}
              <a href="/login" className="text-green-700 font-semibold hover:underline">Sign in</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage; 