import React from 'react';
import { useAuth } from '../context/AuthContext';

const UserProfile = () => {
  const { user, logout } = useAuth();

  return (
    <div>
      <h2>User Profile</h2>
      {user && (
        <div>
          <p>Welcome, {user.username}!</p>
          <button onClick={logout}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
