import React, { useState } from 'react';
import './LaunchServices.css';
import Modal from '@mui/material/Modal';

const services = [
  { title: 'VIKRAM S', description: 'The Vikram-S, first rocket in the  s series, has three solid fuel-powered stages each with a burn time ranging between 80 and 100 seconds and the final stage is Raman engine (Sanskrit, lit. "enchanting", Namesake: C.V. Raman). ', image: 'https://skyroot.in/images/Vikram-S.png' },
  { title: 'VIKRAM I', description: 'The Vikram-I, first rocket in the series, has three solid fuel-powered stages each with a burn time ranging between 80 and 100 seconds and the final stage is Raman engine (Sanskrit, lit. "enchanting", Namesake: C.V. Raman). ', image: 'https://skyroot.in/images/vikram1.png' },
  { title: 'VIKRAM II', description: 'The Vikram-II, Second rocket in the series, has three solid fuel-powered stages each with a burn time ranging between 80 and 100 seconds and the final stage is Raman engine (Sanskrit, lit. "enchanting", Namesake: C.V. Raman). ', image: 'https://skyroot.in/images/vikram2.png' },
  { title: 'VIKRAM III', description: 'The Vikram-III, Third rocket in the series, has three solid fuel-powered stages each with a burn time ranging between 80 and 100 seconds and the final stage is Raman engine (Sanskrit, lit. "enchanting", Namesake: C.V. Raman). ', image: 'https://skyroot.in/images/vikram3.png' },
  // Add more services as needed
];

const LaunchServices = () => {
  const [selected, setSelected] = useState();
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setSelected(null);
    setOpen(false);
  }


  return (
    <section className="launch-services" id="launch-services">
      <h2 className='slide-int'>Our Launch Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div
            className={`service-tile`}
            key={index}
            onClick={() => { setSelected(service); setOpen(true) }}
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
      {open && <Modal
        open={open}
        onClose={handleClose}
      >
        <div  style={{  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  backgroundColor: '#222222',
  color:"white",
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
display:"flex",
borderRadius:"5%",
flexDirection:"column",
alignItems:"center"}}
        >
          <img src={selected.image} alt={selected.title} style={{height:"30%",width:"30%"}}/>
         <h3>{selected.title}</h3>
          <p style={{padding:5}}>{selected.description}</p>
        </div>
      </Modal>}
    </section>

  );
};

export default LaunchServices;
