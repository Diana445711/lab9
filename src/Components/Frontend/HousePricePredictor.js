import React, { useState } from 'react'; 

function HouseForm() { 
  const [City, setCity] = useState(''); 
  const [Province, setProvince] = useState(''); 
  const [Latitude, setLatitude] = useState(''); 
  const [Longtitude, setLongtitude] = useState(''); 
  const [LeaseTerm, setLeaseTerm] = useState(''); 
  const [Type, setType] = useState(''); 
  const [Beds, setBeds] = useState(''); 
  const [Baths, setBaths] = useState(''); 
  const [SquareFeet, setSquareFeet] = useState(''); 
  const [Furnishing, setFurnishing] = useState(''); 
  const [Smoking, setSmoking] = useState(''); 
  const [Pets, setPets] = useState(false); // default to unchecked 

  const handleSubmit = (e) => { 
    e.preventDefault(); 
    console.log({ City, Province, Latitude, Longtitude, LeaseTerm, Type, Beds, Baths, SquareFeet, Furnishing, Smoking, Pets}); 
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
        Longtitude: 
        <input 
          type="text" 
          value={Longtitude} 
          onChange={(e) => setLongtitude(e.target.value)} 
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
          type="number" 
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
        <select value={Furnishing} onChange={(e) => setFurnishing(e.target.value)}>
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
      <button type="submit">Submit</button> 
    </form> 
    </div>
</div>
</div>
  ); 

} 

export default HouseForm; 