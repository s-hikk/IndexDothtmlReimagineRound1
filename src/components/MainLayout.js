import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import LaunchServices from './LaunchServices';
import Timeline from './Timeline';
import Overview from './Overview';
import './MainLayout.css';


const MainLayout = () => {
  return (
    <div className="main-layout">
      <Navbar />
      <Home />
      <Overview />
      <Timeline />
      <LaunchServices />
      
    </div>
  );
};

export default MainLayout;
