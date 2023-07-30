// src/__tests__/UserInfoDisplay.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import UserInfoDisplay from '../UserInfoDisplay';
import UserUpdateForm from '../UserUpdateForm';

test('UserInfoDisplay displays user information and allows user update', () => {
  // Mock the function to toggle between user information and update form
  const toggleUpdateForm = jest.fn();

  // Render UserInfoDisplay component with mock data
  render(
    <UserInfoDisplay
      userData={{ name: 'John Doe', email: 'john@example.com', address: '123 Main St' }}
      toggleUpdateForm={toggleUpdateForm}
    />
  );

  // Assert that user information is displayed
  expect(screen.getByText('Name: John Doe')).toBeInTheDocument();
  expect(screen.getByText('Email: john@example.com')).toBeInTheDocument();
  expect(screen.getByText('Address: 123 Main St')).toBeInTheDocument();

  // Click the "Edit" button to toggle to the update form
  fireEvent.click(screen.getByText('Edit'));

  // Assert that the UserUpdateForm is rendered
  expect(screen.getByTestId('user-update-form')).toBeInTheDocument();

  // Click the "Cancel" button to toggle back to user information
  fireEvent.click(screen.getByText('Cancel'));

  // Ensure the toggleUpdateForm function is called when "Edit" button is clicked
  expect(toggleUpdateForm).toHaveBeenCalled();
});
