import React, { useEffect, useRef } from "react";

function App() {
  const container = useRef(null);

  useEffect(() => {}, []);
  return (
    <div className="App">
      <h1>React Short Animation</h1>
      <div className="container">
        <h3>Coming Soon!</h3>
      </div>
    </div>
  );
}

export default App;
