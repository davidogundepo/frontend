import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserUpdateForm from './UserUpdateForm'; // Import the UserUpdateForm component

const UserInfoDisplay = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isEditing, setIsEditing] = useState(false); // State to toggle between display and edit mode

  useEffect(() => {
    // Send a GET request to the backend to retrieve user information
    axios.get('/api/user/info', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`, // Get the JWT token from local storage
      },
    })
      .then((response) => {
        setUserData(response.data.user); // Set the user data in state
      })
      .catch((error) => {
        if (error.response && error.response.data && error.response.data.message) {
          setError(error.response.data.message);
        } else {
          setError('An error occurred while fetching user information.');
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div>
      {isEditing ? (
        <UserUpdateForm />
      ) : (
        <>
          <h2>{userData.name}</h2>
          <p>Email: {userData.email}</p>
          <p>Address: {userData.address}</p>
          <button onClick={handleEdit}>Edit</button>
        </>
      )}
    </div>
  );
};

export default UserInfoDisplay;
