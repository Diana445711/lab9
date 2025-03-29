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
  const [Pets, setPets] = useState(false); // default to unchecked 
  const [prediction, setPrediction] = useState(null);

  const handleSubmit = (e) => { 
    e.preventDefault(); 

    console.log({ City, Province, Latitude, Longitude, LeaseTerm, Type, Beds, Baths, SquareFeet, Furnishing, Smoking, Pets}); 
  
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
      <label> 
        City: 
        <input 
          type="text" 
          value={City} 
          onChange={(e) => setCity(e.target.value)} 
          required 
        /> 
      </label> 

      <br /> 

      <label> 
        Province: 
        <input 
          type="text" 
          value={Province} 
          onChange={(e) => setProvince(e.target.value)} 
          required 
        /> 
      </label> 

      <br /> 

      <label> 
        Latitude: 
        <input 
          type="text" 
          value={Latitude} 
          onChange={(e) => setLatitude(e.target.value)} 
          required 
        /> 
      </label> 

      <br /> 

      <label> 
        Longitude: 
        <input 
          type="text" 
          value={Longitude} 
          onChange={(e) => setLongitude(e.target.value)} 
          required 
        /> 
      </label> 

      <br /> 

      <label> 
        Lease Term: 
        <input 
          type="text" 
          value={LeaseTerm} 
          onChange={(e) => setLeaseTerm(e.target.value)} 
          required 
        /> 
      </label> 

      <br /> 

      <label> 
        Type: 
        <input 
          type="text" 
          value={Type} 
          onChange={(e) => setType(e.target.value)} 
          required 
        /> 
      </label> 

      <br /> 

      <label> 
        Beds: 
        <input 
          type="text" 
          value={Beds} 
          onChange={(e) => setBeds(e.target.value)} 
          required 
        /> 
      </label> 

      <br /> 

      <label> 
        Baths: 
        <input 
          type="text" 
          value={Baths} 
          onChange={(e) => setBaths(e.target.value)} 
          required 
        /> 
      </label> 

      <br /> 


       <label> 
        Square Feet: 
        <input 
          type="text" 
          value={SquareFeet} 
          onChange={(e) => setSquareFeet(e.target.value)} 
          required 
        /> 
      </label> 


      <label>
        Furnishing:
        <br />
        <select value={Furnishing} onChange={(e) => setFurnishing(e.target.value)} required>
            <option value=""></option>
            <option value="Fully Furnished"> Fully Furnished</option>
            <option value="Partially furnished">Partially Furnished</option>
            <option value="Unfurnished">Unfurnished</option>
        </select>
      </label>
      <br />
      <br />
      

      <label> 
        Smoking: 
        <input 
          type="text" 
          value={Smoking} 
          onChange={(e) => setSmoking(e.target.value)} 
          required 
        /> 
      </label> 

      <label> 
        I have a pet: 
        <input 
          type="checkbox" 
          checked={Pets} 
          onChange={(e) => setPets(e.target.checked)} 
        /> 
      </label>

      <br /> 

      <br /> 
      <br /> 
      <button type="submit">Predict</button> 

      {prediction !== null && (
        <div style={{
          marginTop: '16px',
          backgroundColor: '#DFF0D8',
          border: '1px solid #3C763D',
          padding: '12px',
          borderRadius: '4px',
          fontWeight: 'bold'
        }}>
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