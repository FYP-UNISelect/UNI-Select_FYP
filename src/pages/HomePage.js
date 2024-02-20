// HomePage.js

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, Card, Form } from 'react-bootstrap';
import bannerImage from '../assets/images/Uni-Banner02.jpg';
import SindhIcon from '../assets/icons/sindh-icon.svg';
import PunjabIcon from '../assets/icons/punjab-icon.svg';
import KPKIcon from '../assets/icons/kpk-icon.svg';
import BalochistanIcon from '../assets/icons/baluchistan-icon.svg';
import universityData from '../assets/databases/universities_data.json';

const customStyles = {
  banner: {
    backgroundImage: `url(${bannerImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '50vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    textAlign: 'center'
  },
  vectorImage: {
    objectFit: 'contain',
    height: '180px'
  },
  card: {
    margin: '10px',
    padding: '10px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px'
  }
};

const provincesData = {
  Sindh: { icon: SindhIcon },
  Punjab: { icon: PunjabIcon },
  KPK: { icon: KPKIcon },
  Balochistan: { icon: BalochistanIcon }
};

const specializations = ["Art and Design", "Engineering and Technology", "General", "Medical"];

const HomePage = () => {
  const [selectedProvince, setSelectedProvince] = useState('');
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedSector, setSelectedSector] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [universities, setUniversities] = useState([]);
  const [selectedUniversity, setSelectedUniversity] = useState(null);
  const [selectedSpecialization, setSelectedSpecialization] = useState('');

  useEffect(() => {
    if (cities.length > 0) {
      setSelectedCity(cities[0]); // Set the first city as the selected city
    }
  }, [cities]);

  useEffect(() => {
    setUniversities(universityData);
  }, []);

  const handleProvinceSelect = (provinceKey) => {
    setSelectedProvince(provinceKey);
    const citiesFromDatabase = [...new Set(universityData.filter(uni => uni.Province === provinceKey).map(uni => uni.City))];
    setCities(citiesFromDatabase);
  };

  const handleCityClick = (city) => {
    setSelectedCity(city);
    setUniversities(universityData.filter(uni => uni.City === city));
    setSelectedUniversity(null);
  };

  const handleUniversityClick = (university) => {
    setSelectedUniversity(university);
  };

  const handleSearch = () => {
    let filteredUniversities = universityData;

    if (selectedCity) {
      filteredUniversities = filteredUniversities.filter(uni => uni.City === selectedCity);
    }

    if (selectedSector) {
      filteredUniversities = filteredUniversities.filter(uni => uni.Sector === selectedSector);
    }

    if (selectedSpecialization) {
      filteredUniversities = filteredUniversities.filter(uni => uni.Specialization === selectedSpecialization);
    }

    if (searchTerm) {
      filteredUniversities = filteredUniversities.filter(uni => uni['University Name'].toLowerCase().includes(searchTerm.toLowerCase()));
    }

    setUniversities(filteredUniversities);
    setSelectedUniversity(null);
  };

  const handleFilterChange = (filterType, value) => {
    switch (filterType) {
      case 'sector':
        setSelectedSector(value);
        break;
      case 'specialization':
        setSelectedSpecialization(value);
        break;
      default:
        break;
    }
  };

  return (
    <Container fluid>
      <div style={customStyles.banner}>
        <h1>Welcome to University Portal</h1>
        <p>Your journey to finding the perfect university starts here.</p>
        <Button variant="primary">Get Started</Button>
      </div>

      <Row className="g-4 my-4">
        <h3>Explore</h3>
        {Object.keys(provincesData).map((provinceKey) => (
          <Col key={provinceKey} xs={12} md={6} lg={3}>
            <Card onClick={() => handleProvinceSelect(provinceKey)} style={{ cursor: 'pointer' }}>
              <Card.Img
                variant="top"
                src={provincesData[provinceKey].icon}
                style={customStyles.vectorImage}
              />
              <Card.Body>
                <Card.Title>{provinceKey}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {selectedProvince && (
        <Row className="g-4">
          <Col xs={12} className="mb-4">
            <h2>{selectedProvince} Cities</h2>
          </Col>
          {cities.map((city) => (
            <Col key={city} xs={12} sm={6} md={4} lg={3}>
              <Card onClick={() => handleCityClick(city)} style={{ cursor: 'pointer' }}>
                <Card.Body>
                  <Card.Title>{city}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}

      <Row className="my-4 align-items-end">
        <Col>
          <Form.Select
            aria-label="Select Sector"
            onChange={(e) => handleFilterChange('sector', e.target.value)}
          >
            <option>Select Sector</option>
            <option value="Public">Public</option>
            <option value="Private">Private</option>
          </Form.Select>
        </Col>
        
        <Col>
          <Form.Select
            aria-label="Select City"
            onChange={(e) => setSelectedCity(e.target.value)}
            value={selectedCity}
          >
            <option value="">All Cities</option>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </Form.Select>
        </Col>

        <Col>
          <Form.Select
            aria-label="Select Specialization"
            onChange={(e) => handleFilterChange('specialization', e.target.value)}
          >
            <option>Select Specialization</option>
            {specializations.map((specialization) => (
              <option key={specialization} value={specialization}>
                {specialization}
              </option>
            ))}
          </Form.Select>
        </Col>

        <Col>
          <Form.Control
            type="text"
            placeholder="Search University"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Col>

        <Col className="text-end">
          <Button onClick={handleSearch} variant="primary">Search</Button>
        </Col>
      </Row>

      <Row className="mt-4">
        {universities.map((uni, index) => (
          <Col key={index} xs={12} sm={6} md={4}>
           <Card style={customStyles.card}>
	 <Card.Img variant="top" src={uni.Image} style={customStyles.roundedImage} />
              <Card.Body>
               <Card.Title>{uni['University Name']}</Card.Title>
                <Card.Text>Ranking: {uni.ranking}</Card.Text>
                <Card.Text>World Rank: {uni['World Rank']}</Card.Text>
                <Card.Text>Excellence Rank: {uni['Excellence Rank']}</Card.Text>
                <Card.Text>Specialization: {uni.Specialization}</Card.Text>
                <Card.Text>Sector: {uni.Sector}</Card.Text>
                <Link to={`/UniversityDetailsPage/${index}`}> {/* Pass the index as id */}
                  <Button variant="info" onClick={() => handleUniversityClick(uni)}>
                    View Details
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HomePage;
