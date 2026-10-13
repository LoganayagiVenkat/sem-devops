
import React from "react";

function App() {
  return (
    <div style={{
      textAlign: "center",
      marginTop: "100px",
      fontFamily: "Arial"
    }}>
      <h1>Welcome to React App</h1>
      <p>This is my first React application.</p>
      <button onClick={() => alert("Hello from React!")}>
        Click Me
      </button>
    </div>
  );
}

export default App;
