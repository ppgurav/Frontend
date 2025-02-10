import React, { useState } from "react";

const Signup =() =>{
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    referral_code: "",
    role: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    referral_code: "",
    role: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validate = () => {
    let newErrors = {};
    let isValid = true;

    if (!formData.name) {
      newErrors.name = "Your Full name";
      isValid = false;
    }

    if (!formData.email) {
      newErrors.email = "Enter a valid email to recieve updates";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
      isValid = false;
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
      isValid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      isValid = false;
    }

    if (!formData.referral_code) {
      newErrors.referral_code = "Please enter referral_code";
      isValid = false;
    
    }

    if (!formData.role) {
      newErrors.role = "Enteer your Role";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      localStorage.setItem("userData", JSON.stringify(formData));
      alert("Registration successful!");
      setFormData({ name: '',email: '', password: '',referral_code: '', role: '' });
    }
  }
  
  return (
    <div className="max-w-md mx-auto mt-10 p-8 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-green-800">Create Your Account</h2>
      <form onSubmit={handleSubmit}>
      <div className="mb-4">
          <label className="block text-sm font-medium text-green-800" htmlFor="email">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
        </div>

        <div className="mb-4">
        <label className="block text-sm font-medium text-green-800" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
        </div>

        <div className="mb-4">
        <label className="block text-sm font-medium text-green-800" htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.password && <p className="text-sm text-red-500">{errors.password}</p>}
        </div>

        <div className="mb-6">
        <label className="block text-sm font-medium text-green-800" htmlFor="referral_code">referral_code</label>
          <input
            type="code"
            id="referral_code"
            name="referral_code"
            value={formData.referral_code}
            onChange={handleChange}
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.referral_code && <p className="text-sm text-red-500">{errors.referral_code}</p>}
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-green-800" htmlFor="role">Role</label>
          <input
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
          </input>
          {errors.role && <p className="text-sm text-red-500">{errors.role}</p>}
        </div>
      <button type="submit" className="w-full py-2 bg-green-900 text-white rounded-md hover:bg-green-600 ">
          Sign Up
        </button>
      </form>
      <div className="mt-4 text-center">
        <span>Already have an account? </span>
        <a href="/" className="text-blue-500 hover:underline">Login</a>
      </div>
    </div>
  );

};

export default Signup;
