import React from "react";
import Nav from "../Nav/Nav";
import "./Dashboard.css";
import ManagemantDashboard from "../ManagemantDashboard/ManagemantDashboard";
const Dashboard = () => {
  return (
    <section className="dashboard">
      <Nav />
      <ManagemantDashboard />
    </section>
  );
};

export default Dashboard;
