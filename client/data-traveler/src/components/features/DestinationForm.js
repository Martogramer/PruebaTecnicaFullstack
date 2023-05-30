import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addDestination } from '../../state/actions/destinationActions';
import styles from '../../Global';

const DestinationForm = ({ onSubmit }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [images, setImages] = useState([]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
   const newDestination = {
      name,
      description,
      images
    };
    dispatch(addDestination(newDestination));
    setName('');
    setDescription('');
    setImages([]);
  };

  const handleImageUpload = (e) => {
    const selectedFiles = Array.from(e.target.files);
    const selectedImages = selectedFiles.map((file) => URL.createObjectURL(file));
    setImages([...images, ...selectedImages]);
  };

  return (
    <div className={`${styles.maxWMd} ${styles.mxAuto} ${styles.bgWhite} ${styles.roundedXL} ${styles.shadowMd} ${styles.p4} mr-2 ml-2`}>

    <form onSubmit={handleFormSubmit} className={`${styles.maxWMd} ${styles.mxAuto}`}>
      <div className={`${styles.mb4}`}>
        <label htmlFor="name" className="block mb-1 text-sm font-medium text-gray-700">
          Name:
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={`w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
          />
      </div>
      <div className={`${styles.mb4}`}>
        <label htmlFor="description" className="block mb-1 text-sm font-medium text-gray-700">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className={`w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
          ></textarea>
      </div>
      {/* <div className={`${styles.mb4}`}>
          <label htmlFor="images" className="block mb-1 text-sm font-medium text-gray-700">Images:</label>
          <input
            type="file"
            id="images"
            multiple
            onChange={handleImageUpload}
            className={`w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
          />
        </div>
        <div>
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index}`}
              className={`${styles.mb2} ${styles.maxWFull} ${styles.hAuto}`}
            />
          ))}
        </div> */}
      <button
        type="submit"
        className={`${styles.p4} ${styles.textXl} ${styles.fontBold} ${styles.primaryBg} ${styles.whiteText} rounded-md hover:bg-blue-600`}
        >
        Add Destination
      </button>
    </form>
    </div>
  );
};

export default DestinationForm;
