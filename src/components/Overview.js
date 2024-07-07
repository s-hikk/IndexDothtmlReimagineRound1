
import React from 'react';
import './Overview.css'; // You can add your custom styles here
import './Commonobj.css';
const Overview = () => {
  return (
    <div id="about">
        <div className='container-card bg-blue-box'>
          <h1 className="overview-title slide-ink">At Skyroot</h1>
          <div className="overview-container">
            <div className="overview-content">
              <p className="overview-description">
              As Earth to Space transportation remains expensive, access to Space has been limited to very few governments and enterprises. Yet Space has transformed our lives for decades through GPS, Satellite internet and television, weather prediction, disaster response, understanding the universe, and many others.

              At Skyroot, we are on a mission to open Space for all, by pushing the boundaries of today's technology. We are working towards a future where Space becomes part of our lives, and such a transition will transform humankind like never before. 
              </p>
              <img
                className="overview-image"
                src="https://www.orfonline.org/public/uploads/posts/image/skyroot.jpg" // Replace with your image URL
                alt="Overview"
              />
            </div>
          </div>
        </div>

    </div>
    
  );
};

export default Overview;
