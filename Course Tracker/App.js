import React from "react";
import WebDevelopment from "./pages/WebDevelopment";
import CyberSecurity from "./pages/CyberSecurity";
import DataScience from "./pages/DataScience";
import "./style.css";

const App = () => {
  return (
    <div>
      <h1 className="heading">Aarush's Coding Platform</h1>
      <div>
          <button onClick={() => window.location.reload()}>Refresh</button>
      </div>
      <WebDevelopment />
      <CyberSecurity />
      <DataScience />
    </div>
    
  )
}

export default App;