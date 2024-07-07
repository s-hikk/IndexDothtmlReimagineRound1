import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import LaunchServices from './LaunchServices';
import Timeline from './Timeline';
import Overview from './Overview';
import './MainLayout.css';
import Contactus from './Contactus';


const MainLayout = () => {
  return (
    
    <div className="main-layout" >
      <div id="wrapper">
        <div class="scrollbar" id="style-1">
          <div class="force-overflow">
          <Navbar />
          <Home />
          <Overview />
          <Timeline />
          <LaunchServices />
          {/* <Contactus /> */}
          </div>
        </div>
      </div>
      
      
      
    </div>
  );
};

export default MainLayout;
