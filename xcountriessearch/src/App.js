import React, { useEffect, useState } from "react";

function App() {
  const [countries, setCountries] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchInput.toLowerCase())
  );

  const cardStyle = {
    width: "200px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    margin: "10px",
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  };

  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh"
  };

  const imageStyle = {
    width: "100px",
    height: "100px"
  };
  const searchBar ={
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "10px"
  }
  const searchInt = {
    width: "50%",
    padding: "10px",
  }

  return (
    <div>
      <div style={searchBar}>
        <input
            type="text"
            placeholder="Search for Countries"
            onChange={(e) => setSearchInput(e.target.value)}
            value={searchInput}
            style={searchInt}
             />
      </div>
      <div style={containerStyle}>
        {filteredCountries.map((country) => (
          <div key={country.cca3} style={cardStyle}>
            <img
              src={country.flags.png}
              alt={`Flag of ${country.name.common}`}
              style={imageStyle}
            />
            <h2>{country.name.common}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
