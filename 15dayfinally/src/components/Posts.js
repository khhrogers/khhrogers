import React, {useState, useEffect} from "react";


export default function DataDisplayer(props) {
    const [data, setData] = useState(null);
  
useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://swapi.dev/api/starships/`);
      const newData = await response.json();
      setData(newData);
    };
  
    fetchData();
  },[props.id]);
  
  return (
    <div>
      {data && (
        <ul>
          {data.results.map((starship, index) => (
            <li key={index}>{starship.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}