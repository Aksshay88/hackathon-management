import React, { useState, useEffect } from "react";
import Loading from "./Loading"; // Import the Loading component

const MyComponent = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Perform asynchronous operation here
    // Once the operation is completed, set setLoading(false) to hide the loading animation
  }, []);

  return (
    <div>
      {loading ? (
        <Loading /> // Display the loading animation
      ) : (
        <div>Content loaded!</div> // Display the content once loading is complete
      )}
    </div>
  );
};

export default MyComponent;
