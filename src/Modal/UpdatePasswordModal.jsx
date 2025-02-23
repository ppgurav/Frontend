import React, {useState } from 'react';
import { X } from 'lucide-react';
import { axiosInstance } from '../utils/axiosInstance';



const UpdatePasswordModal = ({ isOpen, onClose, user}) => {
    if (!isOpen || !user) return null;

    console.log(user)

    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordStrength, setPasswordStrength] = useState('');
    const [message, setMessage] = useState("");
    const [error, setError] = useState('');

    const handlePasswordChange = (e) => {
        const password = e.target.value;
        setNewPassword(password);
    
        if (password.length < 6) {
          setPasswordStrength('Weak Password');
        } else if (password.length < 10) {
          setPasswordStrength('Medium Password');
        } else {
          setPasswordStrength('Strong Password');
        }
      };
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (newPassword !== confirmPassword) {
          setError('New password and confirmation password do not match.');
          return;
        }
    
        try {

          const response = await axiosInstance.put('/user/update-profile', {
            oldPassword:currentPassword,
            name:user.name,
            newPassword
          });
    
          if (response.status === 200) {
            setMessage('Password updated successfully.');
            setCurrentPassword('');
            setNewPassword('');
            setConfirmPassword('');
          }
        } catch (error) { 

          if (error.response && error.response.data) {
            setError(error.response.data.message || 'Failed to update password.');
          } else {
            setError('An unexpected error occurred.');
          }
        }
    };
  
    
        

    return (


        <div className="fixed inset-0 bg-transparent flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
                <button className="absolute top-2 right-2 text-red-500" onClick={onClose}>
                    <X />
                </button>
                {message && <p className="text-red-500">{message}</p>}
                {error && <div className="success">{error}</div>}
                <h1 className="text-xl font-bold mb-4">Update Password</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Current Password</label>
            <input
              type="password"
              id="current-password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              required
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label className="block text-gray-700">New Password</label>
            <input
              type="password"
              id="new-password"
              value={newPassword}
              onChange={handlePasswordChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>
          <div>{passwordStrength}</div>
          <div>
            <label className="block text-gray-700">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full p-2 border rounded"
            />
          </div>
                <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">
                Update password
                </button>
                </form>
            </div>
        </div>
        
    );
};

export default UpdatePasswordModal;
