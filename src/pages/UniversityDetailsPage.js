import React from 'react';
import { useParams } from 'react-router-dom';
import universityData from '../assets/databases/universities_data.json';
import './UniversityDetailsPage.css'; // Import CSS file for styling

const UniversityDetailsPage = () => {
  const { id } = useParams();
  console.log('ID from params:', id);
  const university = universityData[id];

  if (!university) {
    return <div>University not found!</div>;
  }

  return (
    <div className="university-profile">
      <div className="logo-name-container">
        <img src={university.Image} alt={`${university['University Name']} Logo`} className="logo" />
        <h1 className="university-name">{university['University Name']}</h1>
      </div>
      <div className="image-container">
        <img src={university.University_Image} alt={`${university['University Name']}`} className="university-image" />
      </div>
      <div className="details-container">
        <p className="description">{university.about}</p>
        <div className="mission-vision">
          <p><strong>Mission:</strong><br />{university.mission}</p>
          <p><strong>Vision:</strong><br />{university.vision}</p>
        </div>
        <div className="additional-info">
          <p><strong>Established Since:</strong><br />{university['Established Since']}</p>
          <p><strong>Sector:</strong><br />{university.Sector}</p>
          <p><strong>Chartered By:</strong><br />{university['Chartered By']}</p>
          <p><strong>City:</strong><br />{university.City}</p>
          <p><strong>Province:</strong><br />{university.Province}</p>
          <p><strong>Recognised University:</strong><br />{university['Recognised University']}</p>
          <p><strong>Specialization:</strong><br />{university.Specialization}</p>
        </div>
        <div className="departments">
          <p><strong>Departments:</strong></p>
          <ul>
            {university.departments.map((dept) => (
              <li key={dept}>{dept}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UniversityDetailsPage;
