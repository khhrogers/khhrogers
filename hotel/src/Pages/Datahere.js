import React, {useState, useEffect} from 'react';

const APIComponent = () => {
    const [advisoryInfo, setAdvisoryInfo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


useEffect(() => {
const fetchData = async () => {
try {
    const response = await fetch('https://www.travel-advisory.info/api?countrycode=US')
    if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setAdvisoryInfo(data);
    } catch (error) {
      setError(error);
    } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h2>Travel Advisory Information for US</h2>
      <pre>{JSON.stringify(advisoryInfo, null, 2)}</pre>
    </div>
  );
};

export default APIComponent;
   