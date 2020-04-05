import React from 'react';
import './App.css';
import Header from "./components/header";
import DashboardWrapper from "./components/dashboardWrap";

function App() {
  return (
    <div className="merch-dashbaord">
      <Header />
      <DashboardWrapper />
    </div>
  );
}

export default App;
