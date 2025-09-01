import React, { useState } from 'react';
import './App.css'; // Optional for styling
import axios from 'axios'
import {v4 as uuid} from 'uuid'

const suppliers = [
  //{
  //  name: 'Supreme Mouldings',
  //  img: '/supreme.jpg',
  //  info: 'Description: Delivering premium-quality products made from 100% recycled polystyrene',
  //  link: 'https://suprememouldings.co.za/?srsltid=AfmBOorCAiz8uE118ApRq_GspVEj6-ycfhsQUi0UosaEdMSEwwuL81aT'
  //},
  //{
  //  name: 'Tmhabela Trading',
  //  img: '/trading.jpg',
  //  info: 'Description: Beautiful furniture all from BMW Plant Rosslyn pallets',
  //  link: 'https://www.dnb.com/business-directory/company-profiles.tmhabelatrading_an_d_projects_(pty)_ltd.8a15614de4f2658e923a3deacf3da843.html'
  //},
  //{
  //  name: 'CSIR',
  //  img: '/csir.jpg',
  //  info: 'Description: Touching Lives through Innovation',
  //  link: 'https://www.csir.co.za/'
  //},
  //{
  //  name: 'Bluedust',
  //  img: '/bluedust.jpg',
  //  info: 'Description: Engineering solutions from water treatment to energy management',
  //  link: 'https://www.zoominfo.com/c/bluedust-engineering-solutions/542254332'
  //},
  {
    name: 'My Walk Made with Soul',
    img: '/mywalk.jpg',
    info: "Description: Help South-Africa's learners step into greatness",
    link: 'https://www.mywalk.org.za/'
  },
  //{
  //  name: 'Dehoust',
  //  img: '/dehoust.jpg',
  //  info: 'Description: Innovative Solutions to Save Drinking Water & Energy',
  //  link: 'https://www.dehoust.com/en-001/Home'
  //},
  //{
  //  name: 'Cwenga Lib',
  //  img: '/cwenga.jpg',
  //  info: 'Description: Introducing cutting-edge battery recycling technology to Southern Africa',
  //  link: 'https://www.batteryrecycling.co.za/'
  //},
  {
    name: 'eWASA',
    img: '/ewasa.jpg',
    info: 'Description: Expert in Waste Management',
    link: 'https://ewasa.org/'
  },
  //{
  //  name: 'Beka-Schreder',
  //  img: '/beka.jpg',
  //  info: 'Description: Offer intelligent and sustainable lighting',
  //  link: 'https://za.schreder.com/en'
  //},
  {
    name: 'SunArc',
    img: '/sunarc.jpg',
    info: 'Description: Market-leading Renewable Energy Company (Solar independent Power Producer)',
    link: 'https://www.sunarc-africa.com/business-solar-solutions/'
  },
  //{
  //  name: 'Grundfos',
  //  img: '/grundfos.png',
  //  info: 'Description: Since pioneering energy-efficient water and digital solutions is our business, we’re committed to reducing our global footprint by saving our own energy and water, while also enabling a greener supply chain.',
  //  link: 'https://www.grundfos.com/za'
  //},
  {
    name: 'Oricol',
    img: '/oricol.jpg',
    info: 'Description: At Oricol Environmental Services, we’re constantly developing new and innovative ways of turning waste into a resource',
    link: 'https://www.oricoles.co.za/'
  },
  {
    name: 'TopTurf',
    img: '/topturf.png',
    info: 'Description: Bidvest Top Turf is a multi-disciplinary Greens Services company providing quality horticultural, specialized turf and recreational solutions to our client’s needs.',
    link: 'https://topturf.co.za/'
  },
];

function App() {
  const [expandedSupplier, setExpandedSupplier] = useState(null);
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);
  const handlesubmit = async() => {
    
    const url = 'https://ubrwxe2ud1.execute-api.eu-west-1.amazonaws.com/dev/execution';
    const headers = {
      'Content-Type': 'application/json',
    };
    const data = {
      uniqueID: uuid(),
      name: name,
      comment: comment,
      rating: rating.toString(),
    };
  
    try {
      const response = await axios.post(url, data, { headers });
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
    }
  };
  
  return (
    <div style={{ 
      backgroundColor: '#f0faff', // Light blue
      minHeight: '100vh', 
      width: '100%', 
      padding: '20px', 
      boxSizing: 'border-box' 
    }}>

    
      <h1 style={{ textAlign: 'center', marginBottom: '40px' }}>
        🏢 Welcome to the Sustainability Exhibition
      </h1>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
        {suppliers.map((supplier, index) => (
          <div
            key={index}
            style={{
              border: '1px solid #ccc',
              borderRadius: '10px',
              padding: '10px',
              width: '250px',
              textAlign: 'center',
            }}
          >
            <img
              src={supplier.img}
              alt={supplier.name}
              style={{
                maxWidth: '100%',
                maxHeight: '150px',
                objectFit: 'contain',
                borderRadius: '8px',
                margin: '0 auto',
                display: 'block',
              }}
            />
            <h3>{supplier.name}</h3>
            <button
              onClick={() => setExpandedSupplier(index === expandedSupplier ? null : index)}
              style={{ margin: '10px 0', padding: '5px 10px' }}
            >
              {expandedSupplier === index ? 'Hide Info' : 'More Info'}
            </button>

            {expandedSupplier === index && (
              <div style={{ fontSize: '14px', color: '#333', fontWeight: 'bold' }}>
                <p>{supplier.info}</p>
                {supplier.link && (
                  <a
                    href={supplier.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#007BFF', fontWeight: 'normal', textDecoration: 'underline' }}
                  >
                    Visit Website
                  </a>
                )}
              </div>
            )}
          

          </div>
        ))}
      </div>

      <div style={{ marginTop: '50px' }}>
        <h2>Leave Your Feedback</h2>

        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{
            display: 'block',
            width: '98%',
            padding: '10px',
            marginTop: '10px',
            marginRight: 'auto'
          }}
        />

        <textarea
          placeholder="Leave a comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          style={{
            display: 'block',
            width: '98%',
            height: '100px',
            padding: '10px',
            marginTop: '10px',
            marginRight: 'auto'
          }}
        />

        <div style={{ marginTop: '10px' }}>
          <p>Rate us:</p>
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              onClick={() => setRating(star)}
              style={{
                fontSize: '24px',
                cursor: 'pointer',
                color: rating >= star ? '#FFD700' : '#ccc',
              }}
            >
              ★
            </span>
          ))}
        </div>

        <button
          style={{
            marginTop: '20px',
            padding: '10px 20px',
            backgroundColor: '#007BFF',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            fontSize: '16px',
            cursor: 'pointer'
          }}
          onClick={() => {
            // Handle form submission logic here
            console.log('Submitted:', { name, comment, rating });
            alert('Thank you for your feedback!');
            // Optionally clear form
            setName('');
            setComment('');
            setRating(0);
            handlesubmit()
          }}
        >
          Submit
        </button>

      </div>
    </div>
  );
}

export default App;
