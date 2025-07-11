import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { setName } from '../../redux/user/user.slice';
import { useFetchUserNameQuery } from '../../redux/user/user.api';

const User: React.FC = () => {
  const dispatch = useDispatch();
  const { name } = useSelector((state: RootState) => state.user);
  const { data, error, isLoading, refetch } = useFetchUserNameQuery();

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setName(e.target.value));
  };

  return (
    <section className="p-6">
      <h1 className="text-3xl font-bold mb-4">User Management with Redux</h1>
      
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">
          User Name (Redux State):
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
          onClick={() => refetch()}
          disabled={isLoading}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50 mr-2"
        >
          {isLoading ? 'Loading...' : 'Fetch User Name (RTK Query)'}
        </button>
      </div>

      <div className="mb-4 p-4 bg-gray-100 rounded">
        <h3 className="font-semibold mb-2">Redux State:</h3>
        <p><strong>Local Name:</strong> {name || 'No name set'}</p>
        <p><strong>API Status:</strong> {isLoading ? 'Loading' : 'Ready'}</p>
        {data && <p><strong>API Response:</strong> {JSON.stringify(data)}</p>}
        {error && <p className="text-red-500"><strong>Error:</strong> {JSON.stringify(error)}</p>}
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
