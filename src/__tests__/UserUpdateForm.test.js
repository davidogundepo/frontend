// src/__tests__/UserUpdateForm.test.js
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import UserUpdateForm from '../UserUpdateForm';

test('UserUpdateForm submits user update data correctly', async () => {
  render(<UserUpdateForm />);

  // Fill in the form inputs
  fireEvent.change(screen.getByPlaceholderText('Name'), { target: { value: 'John Doe' } });
  fireEvent.change(screen.getByPlaceholderText('Address'), { target: { value: '123 Main St' } });

  // Click the submit button
  fireEvent.click(screen.getByText('Update'));

  // Wait for the API request to complete and display the success message
  await waitFor(() => screen.getByText('User update successful'));

  // Assert that the success message is displayed
  expect(screen.getByText('User update successful')).toBeInTheDocument();
});
