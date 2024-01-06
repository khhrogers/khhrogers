import { useState, useEffect } from "react";

export default function StarShipCard(props) {
  const url = `https://swapi.dev/api/starships/9/`;
const [star, setStar] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setStar(data.name);
      })
      .catch((error) => {
        console.error("Error fetching starship:", error);
      });
  }, [url]);
  // Render a card for each starship

  return (
    <div>
      <p>Starship name: {star}</p>
          <p>Starship name: {star}</p>
        </div>
    
  );


}
