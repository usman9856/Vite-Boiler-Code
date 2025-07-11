import React, { useEffect } from 'react';
import { useUserStore } from '../../store/userStore';

const User: React.FC = () => {
  const { name, loading, fetchUserName, setName } = useUserStore();

  useEffect(() => {
    // Fetch user name on component mount
    fetchUserName();
  }, [fetchUserName]);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <section className="p-6">
      <h1 className="text-3xl font-bold mb-4">User Management</h1>
      
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">
          User Name:
        </label>
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          className="border border-gray-300 rounded px-3 py-2 w-full max-w-md"
          placeholder="Enter user name"
        />
      </div>

      <div className="mb-4">
        <button
          onClick={fetchUserName}
          disabled={loading}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50"
        >
          {loading ? 'Loading...' : 'Fetch User Name'}
        </button>
      </div>

      <div className="text-gray-600">
        <p>Current Name: {name || 'No name set'}</p>
        <p>Loading: {loading ? 'Yes' : 'No'}</p>
      </div>
      
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-2">Text Showcase</h2>
        <h3 className="text-xl font-medium mb-2">This is the test text showcase</h3>
        <h4 className="text-lg font-medium mb-2">This is the test text showcase</h4>
        <h5 className="text-base font-medium mb-2">This is the test text showcase</h5>
        <h6 className="text-sm font-medium mb-2">This is the test text showcase</h6>
        <p className="mb-2">This is the test text showcase</p>
        <span>This is the test text showcase</span>
      </div>
    </section>
  );
};

export default User;
