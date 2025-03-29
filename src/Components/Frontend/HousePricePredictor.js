import React, { useState } from 'react';

function HouseForm() { 
  const [City, setCity] = useState(''); 
  const [Province, setProvince] = useState(''); 
  const [Latitude, setLatitude] = useState(''); 
  const [Longitude, setLongitude] = useState(''); 
  const [LeaseTerm, setLeaseTerm] = useState(''); 
  const [Type, setType] = useState(''); 
  const [Beds, setBeds] = useState(''); 
  const [Baths, setBaths] = useState(''); 
  const [SquareFeet, setSquareFeet] = useState(''); 
  const [Furnishing, setFurnishing] = useState(''); 
  const [Smoking, setSmoking] = useState(''); 
  const [Pets, setPets] = useState(false); 
  const [prediction, setPrediction] = useState(null);

  const handleSubmit = (e) => { 
    e.preventDefault(); 
    const houseData = {
      city: City,
      province: Province,
      latitude: parseFloat(Latitude),
      longitude: parseFloat(Longitude),
      lease_term: LeaseTerm,
      type: Type,
      beds: parseInt(Beds),
      baths: parseFloat(Baths),
      sq_feet: parseFloat(SquareFeet),
      furnishing: Furnishing,
      smoking: Smoking,
      pets: Pets
    };

    fetch('http://127.0.0.1:5000/predict_house_price', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(houseData),
    })
      .then((res) => res.json())
      .then((data) => setPrediction(data.predicted_price))
      .catch((err) => console.error(err));
  };

  return ( 
    <div className='wrapper'>
      <div className="box">
        <div className="items">
          <form onSubmit={handleSubmit}> 
            <h1>House Price Predictor</h1>
            
            {/* City */}
            <label>City:</label>
            <input 
              type="text" 
              value={City} 
              onChange={(e) => setCity(e.target.value)} 
              required 
            />

            {/* Province */}
            <label>Province:</label>
            <input 
              type="text" 
              value={Province} 
              onChange={(e) => setProvince(e.target.value)} 
              required 
            />

            {/* Latitude */}
            <label>Latitude:</label>
            <input 
              type="text" 
              value={Latitude} 
              onChange={(e) => setLatitude(e.target.value)} 
              required 
            />

            {/* Longitude */}
            <label>Longitude:</label>
            <input 
              type="text" 
              value={Longitude} 
              onChange={(e) => setLongitude(e.target.value)} 
              required 
            />

            {/* Lease Term */}
            <label>Lease Term:</label>
            <input 
              type="text" 
              value={LeaseTerm} 
              onChange={(e) => setLeaseTerm(e.target.value)} 
              required 
            />

            {/* Type */}
            <label>Type:</label>
            <input 
              type="text" 
              value={Type} 
              onChange={(e) => setType(e.target.value)} 
              required 
            />

            {/* Beds */}
            <label>Beds:</label>
            <input 
              type="text" 
              value={Beds} 
              onChange={(e) => setBeds(e.target.value)} 
              required 
            />

            {/* Baths */}
            <label>Baths:</label>
            <input 
              type="text" 
              value={Baths} 
              onChange={(e) => setBaths(e.target.value)} 
              required 
            />

            {/* Square Feet */}
            <label>Square Feet:</label>
            <input 
              type="text" 
              value={SquareFeet} 
              onChange={(e) => setSquareFeet(e.target.value)} 
              required 
            />

            {/* Furnishing Dropdown */}
            <label>Furnishing:</label>
            <select 
              value={Furnishing} 
              onChange={(e) => setFurnishing(e.target.value)} 
              required
            >
              <option value=""></option>
              <option value="Fully Furnished">Fully Furnished</option>
              <option value="Partially Furnished">Partially Furnished</option>
              <option value="Unfurnished">Unfurnished</option>
            </select>

            {/* Smoking Dropdown */}
            <label>Smoking:</label>
            <input 
              type="text" 
              value={Smoking} 
              onChange={(e) => setSmoking(e.target.value)} 
              required 
            />

            {/* Pets Checkbox */}
            <label>
              I have a pet
              <input 
                type="checkbox" 
                checked={Pets} 
                onChange={(e) => setPets(e.target.checked)} 
              /> 
              
            </label>

            <button type="submit">Predict</button>

            {prediction !== null && (
              <div className="prediction-result">
                Predicted Rent: ${prediction.toFixed(2)}
              </div>
            )}
          </form> 
        </div>
      </div>
    </div>
  ); 
} 

export default HouseForm;