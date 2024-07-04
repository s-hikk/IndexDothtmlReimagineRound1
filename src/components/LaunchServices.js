import React, { useState } from 'react';
import './LaunchServices.css';

const services = [
  { title: 'VIKRAM S', description: 'Description 1', image: 'https://skyroot.in/images/Vikram-S.png' },
  { title: 'VIKRAM I', description: 'The Vikram-I, first rocket in the series, has three solid fuel-powered stages each with a burn time ranging between 80 and 100 seconds and the final stage is Raman engine (Sanskrit, lit. "enchanting", Namesake: C.V. Raman). The Raman engine is powered by MMH and NTO liquid fuels in a cluster of four engines that generate 3.4 kN thrust. These Raman Engines will be used to do final adjustments in the orbit of the stage.[4] Vikram-I is designed to lift 290 kg to a 500 km Sun synchronous polar orbit (SSPO) and 480 kg to 45º inclination in a 500 km low Earth orbit (LEO).', image: 'https://skyroot.in/images/vikram1.png' },
  { title: 'VIKRAM II', description: 'Description 2', image: 'https://skyroot.in/images/vikram2.png' },
  { title: 'VIKRAM III', description: 'Description 2', image: 'https://skyroot.in/images/vikram3.png' },
  // Add more services as needed
];

const LaunchServices = () => {
  const [expandedTile, setExpandedTile] = useState(null);

  const handleClick = (index) => {
    if (expandedTile === index) {
      setExpandedTile(null);
    } else {
      setExpandedTile(index);
    }
  };

  const handleOutsideClick = (e) => {
    if (e.target.classList.contains('expanded')) {
      setExpandedTile(null);
    }
  };

  return (
    <section className="launch-services" id="launch-services">
      <h2 className='slide-int'>Our Launch Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div
            className={`service-tile ${expandedTile === index ? 'expanded' : ''}`}
            key={index}
            style={{ animationDelay: `${index * 0.1}s` }}
            onClick={() => handleClick(index)}
            onBlur={handleOutsideClick}
          >
            <img src={service.image} alt={service.title} />
            <h3>{service.title}</h3>
            <div className="service-info">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LaunchServices;
