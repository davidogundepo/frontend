import React, { useState } from 'react';
import axios from 'axios';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
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

    // Send a POST request to the backend for user registration
    axios.post('/api/register', formData)
      .then((response) => {
        console.log(response.data); // Display a success message or handle redirection to login page
      })
      .catch((error) => {
        if (error.response && error.response.data && error.response.data.errors) {
          setError(error.response.data.errors);
        } else {
          setError('An error occurred during registration.');
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
      <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" />
      {error && <div className="error">{error}</div>}
      <button type="submit" disabled={loading}>Register</button>
    </form>
  );
};

export default RegistrationForm;
