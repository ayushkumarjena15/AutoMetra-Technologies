import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, ChevronDown, Star } from 'lucide-react';
import './index.css';

const sliderData = [
  "DISCOVER WHO WE ARE",
  "AI-DRIVEN LEGACY MIGRATIONS",
  "OPTIMIZE CLOUD STRATEGIES"
];

function App() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % sliderData.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [activeSlide]);

  return (
    <>
      <div className="hero-overlay"></div>
      <div className="video-background">
        <img src="/assets/hero_bg.png" alt="Developers at work" className="bg-img" />
      </div>

      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container header-container">
          <div className="logo">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM11 19.93C7.05 19.43 4 16.05 4 12C4 7.95 7.05 4.57 11 4.07V19.93ZM13 4.07C16.95 4.57 20 7.95 20 12C20 16.05 16.95 19.43 13 19.93V4.07Z" fill="url(#paint0_linear)"/>
              <defs>
                <linearGradient id="paint0_linear" x1="2" y1="12" x2="22" y2="12" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FF5A00"/>
                  <stop offset="1" stopColor="#FFB900"/>
                </linearGradient>
              </defs>
            </svg>
            <span>Software Mind</span>
          </div>
          
          <nav className="main-nav">
            <ul>
              <li className="nav-item"><a href="#">Who we are <ChevronDown size={14} /></a></li>
              <li className="nav-item"><a href="#">What we do</a></li>
              <li className="nav-item"><a href="#">Services <ChevronDown size={14} /></a></li>
              <li className="nav-item"><a href="#">Industries <ChevronDown size={14} /></a></li>
              <li className="nav-item"><a href="#">Case studies</a></li>
              <li className="nav-item"><a href="#">Insights <ChevronDown size={14} /></a></li>
              <li className="nav-item"><a href="#">Careers</a></li>
            </ul>
          </nav>

          <div className="header-actions">
            <button className="icon-btn search-btn" aria-label="Search">
              <Search size={18} />
            </button>
            <a href="#" className="btn btn-primary">Contact us</a>
            <div className="language-selector">
              <span>EN</span> <ChevronDown size={14} />
            </div>
          </div>
        </div>
      </header>

      <main className="main-content">
        <div className="container hero-container">
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Driven by Tech,<br/>Empowered by People
          </motion.h1>
          
          <motion.p 
            className="hero-description"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Our software development teams, based throughout Europe and the<br/>
            Americas, ramp up engineering capacity to accelerate digital transformations<br/>
            and business growth.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <a href="#" className="btn btn-primary btn-large">Learn more</a>
          </motion.div>
        </div>
      </main>

      <div className="slider-wrapper">
        <div className="container slider-container">
          <div className="slider-items">
            {sliderData.map((text, index) => (
              <div 
                key={index} 
                className={`slider-item ${index === activeSlide ? 'active' : ''}`}
                onClick={() => setActiveSlide(index)}
              >
                <div className="progress-bar">
                  {index === activeSlide && (
                    <motion.div 
                      className="progress-fill"
                      initial={{ width: '0%' }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 5, ease: "linear" }}
                      key={`progress-${index}-${activeSlide}`}
                    />
                  )}
                </div>
                <div className="slider-text">0{index + 1} | {text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <motion.div 
        className="review-badges"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
      >
        <div className="badge clutch-badge-top">
          <div className="clutch-top-content">
            <div className="top-text">TOP</div>
            <div className="it-text">IT SERVICES<br/>COMPANY</div>
            <div className="clutch-logo-text">Clutch</div>
            <div className="year-text">2023</div>
          </div>
        </div>
        <div className="badge clutch-badge-reviews">
          <div className="review-logo">Clutch</div>
          <div className="review-stars-text">
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={10} fill="#FF5A00" color="#FF5A00" />
              ))}
            </div>
            <div className="rev-text">58 REVIEWS</div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default App;
