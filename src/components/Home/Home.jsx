import React, { useState } from 'react';
import axios from 'axios';
import '../../css/Home.css';

const Home = () => {
  const [formData, setFormData] = useState({
    image: null,
    imageName: '',
    DeviceKnown: '',
    WallTags: '',
    WallTitle: '',
    btags: ''
  });

  const handleChange = (event) => {
    const { name, value, type } = event.target;
    
    if (type === 'file') {
      setFormData({ ...formData, [name]: event.target.files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const data = new FormData();
    data.append('image', formData.image);
    data.append('imageName', formData.imageName);
    data.append('DeviceKnown', formData.DeviceKnown);
    data.append('WallTags', formData.WallTags);
    data.append('WallTitle', formData.WallTitle);
    data.append('btags', formData.btags);

    axios.post('http://localhost:4200/uploadrt', data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(res => console.log("Submitted successfully"))
    .catch(err => console.log('Error with uploading'));
  };

  return (
    <>
      <div className="main">
        <div className="image-search-from">
          <div className="image-card">
            <h1 className="upload-here">Upload your file here</h1>
            <div className="upload-form">
              <form onSubmit={handleSubmit} className="upload-form">
                <div className="right-form">
                  <label htmlFor="image" className="File-upload-label">
                    <h3 className="upload-your-image">Upload your image here</h3>
                  </label>
                  <input type="file" name="image" id="File" onChange={handleChange} className="drag-images" />
                </div>
                <div className="left-form">
                  <label htmlFor="WallTitle">Category Title</label>
                  <input type="text" name="WallTitle" id="MainTitle" onChange={handleChange} className="name-input" />
                  <label htmlFor="WallTags">Category Main Tags</label>
                  <input type="text" name="WallTags" id="MainTags" onChange={handleChange} className="name-input" />
                  <label htmlFor="imageName">Image Title</label>
                  <input type="text" name="imageName" id="ImageTitle" onChange={handleChange} className="name-input" />
                  <label htmlFor="btags">Image Tag</label>
                  <input type="text" name="btags" id="ImageTag" onChange={handleChange} className="name-input" />
                  <label htmlFor="DeviceKnown">Device</label>
                  <input type="text" name="DeviceKnown" id="Device" onChange={handleChange} className="name-input" />
                  <div className="submit-div">
                    <input type="submit" className="input-submit-button" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
