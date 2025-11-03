import React, { useState, useEffect } from "react";
import axios from "axios";

const DataFetchingComponent = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get("https://api.restful-api.dev/objects");
        setData(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const renderValue = (value) => {
    if (typeof value === "object" && value !== null) {
      return <pre>{JSON.stringify(value, null, 2)}</pre>;
    }
    return String(value);
  };

  return (
    <div>
      <h2>Fetched Data</h2>
      <div className="json-display">
        {data &&
          Object.entries(data).map(([key, value]) => (
            <div key={key}>
              <strong>{key}:</strong> {renderValue(value)}
            </div>
          ))}
      </div>
    </div>
  );
};

export default DataFetchingComponent;
