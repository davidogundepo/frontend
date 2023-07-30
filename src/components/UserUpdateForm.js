import React, { useState } from 'react';
import axios from 'axios';

const UserUpdateForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Send a PATCH request to the backend for updating user information
    axios.patch('/api/user/update', formData, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`, // Get the JWT token from local storage
      },
    })
      .then((response) => {
        console.log(response.data.message); // Display a success message
      })
      .catch((error) => {
        if (error.response && error.response.data && error.response.data.message) {
          setError(error.response.data.message);
        } else {
          setError('An error occurred during user update.');
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
      <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Address" />
      {error && <div className="error">{error}</div>}
      <button type="submit" disabled={loading}>Update</button>
    </form>
  );
};

export default UserUpdateForm;
