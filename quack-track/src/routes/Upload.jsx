import React, { useState, useRef } from 'react';
import Header from "../components/Header.jsx";
import Map from "../components/DuckMap.jsx";
import "../css/upload.css";

export default function Upload() {
  const [formData, setFormData] = useState({
    address: '', 
    date: '',
    image: null
  });

  const fileInputRef = useRef(null); 

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
    return `${year}-${month}-${day}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formattedDate = formData.date ? formatDateToYYYYMMDD(formData.date) : '';
    const finalData = { ...formData, date: formattedDate };
    console.log('Form submitted:', finalData);

    
    // start if added what ML model returns
    const determinedDuckType = formData.duckType || "Mallard";

    // calling global function to place the marker
    if (window.placeAdvancedDuckMarker) {
        window.placeAdvancedDuckMarker(determinedDuckType, "1600 Amphitheatre Parkway, Mountain View, CA");
    } else {
        console.error('Marker function is not available.');
    }

    //added error 

    setFormData({
      address: '',
      date: '',
      image: null
    }); 
    

    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div>
      <Header/>
      <div className="upload-container">
        <div className="title-container">
          <h2 className="title">Upload Duck Picture</h2>
        </div>
        <form onSubmit={handleSubmit} className="form">

          <div className="form-group">
          <label>Address <span className="red">*</span></label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Date <span className="red">*</span></label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>

          <div className="form-group">
            <label>Upload Image <span className="red">*</span></label>
            <input
              ref={fileInputRef} 
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

        <Map/>
      </div>
    </div>
  );
}