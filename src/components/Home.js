import React from 'react';
import './Home.css';




import './stars.css'
const Home = () => {
  return (
    <section className="home" id="home">
      <div class="bg-animation">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div id="stars4"></div>
      </div>
      <div className="overlay">
        <div className='spacing-text'>
          <span className="slide-in text-glow">OPENING  </span>
          <span className="slide-in delay-1 text-glow">SPACE  </span>
          <span className="slide-in delay-2  text-glow">FOR ALL</span>
        </div>
        
      </div>
    </section>
  );
};

export default Home;
