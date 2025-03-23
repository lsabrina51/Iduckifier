import React from 'react';
import { useState } from 'react';
import Header from "../components/Header.jsx";
import "../css/upload.css";

export default function Upload() {
  const [formData, setFormData] = useState({
    address: '', 
    date: '',
    image: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target; // Destructure name instead of address
    setFormData({
      ...formData,
      [name]: value // Use name as the key dynamically
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      image: file
    });
  };

  const formatDateToYYYYMMDD = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}/${month}/${day}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formattedDate = formData.date ? formatDateToYYYYMMDD(formData.date) : '';
    const finalData = { ...formData, date: formattedDate };
    console.log('Form submitted:', finalData);

    setFormData({
      address: '',
      date: '',
      image: null
    });  
  };

  return (
    <div>
      <Header/>
      <div className="container">
        <form onSubmit={handleSubmit} className="form">
          <h2 className="title">Upload Duck Picture</h2>

          <div className="form-group">
          <label>Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>

          <div className="form-group">
            <label>Upload Image</label>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleImageChange}
              required
            />
          </div>

          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}