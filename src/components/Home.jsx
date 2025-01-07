import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'; // useNavigate for page navigation
import './Home.css';

function Home() {
  const navigate = useNavigate();

  const handleRecruiterClick = () => {
    navigate('/Recuriter');
  };

  const canvasRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const animationFrameId = useRef(null);

  // Scroll functionality
  const scrollToFormSection = () => {
    const formSection = document.getElementById("form-section");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="home">
      <canvas ref={canvasRef} className="background-canvas" />
      <div className="content-wrapper">
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
          <div className="header-container">
            <a href="/" className="logo">
              FZNO
            </a>
            <nav className="nav"></nav>
            <Link to="/contact">
              <button className="start-button">Job Seeker</button>
            </Link>
          </div>
        </header>

        <main className="main">
          <div className="hero-content">
            <h1 className="title">
              Your Partner in 
              <br />
              Landing Your Dream Job
            </h1>
            <p className="description">
              Are you ready to take the next step in your career? We’re here to guide you every step of the way.
            </p>
            <div className="button-group">
              <Link to="/contact">
                <button className="secondary-button">Job Seeker</button>
              </Link>
              <button className="secondary-button" onClick={handleRecruiterClick}>
               Recruiter
              </button>
            </div>
          </div>

          <div className="form-section" id="form-section">
            <h2 className="form-heading">
              Let us help you unlock your potential and secure the job you deserve!
            </h2>
            {/* Comparison Table */}
            <div style={{ margin: "20px", fontFamily: "Arial, sans-serif" }}>
              <h2>Why Choose Us?</h2>
              <table style={{ width: "100%", borderCollapse: "collapse", margin: "20px 0", fontSize: "16px", textAlign: "left" }}>
                <thead>
                  <tr>
                    <th style={{ border: "1px solid #ddd", padding: "12px", backgroundColor: "#f4f4f4", color: "#333", fontWeight: "bold" }}>Features/Services</th>
                    <th style={{ border: "1px solid #ddd", padding: "12px", backgroundColor: "#f4f4f4", color: "#333", fontWeight: "bold" }}>We Offer</th>
                    <th style={{ border: "1px solid #ddd", padding: "12px", backgroundColor: "#f4f4f4", color: "#333", fontWeight: "bold" }}>What Others Offer</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ backgroundColor: "black" }}>
                    <td style={{ border: "1px solid #ddd", padding: "12px" }}>Pricing</td>
                    <td style={{ border: "1px solid #ddd", padding: "12px" }}>₹399 for 2 months</td>
                    <td style={{ border: "1px solid #ddd", padding: "12px" }}>High subscription or service fees</td>
                  </tr>
                  <tr>
                    <td style={{ border: "1px solid #ddd", padding: "12px" }}>Job Alerts</td>
                    <td style={{ border: "1px solid #ddd", padding: "12px" }}>Real-time, tailored updates</td>
                    <td style={{ border: "1px solid #ddd", padding: "12px" }}>Limited or delayed notifications</td>
                  </tr>
                  <tr style={{ backgroundColor: "black" }}>
                    <td style={{ border: "1px solid #ddd", padding: "12px" }}>Resume Review</td>
                    <td style={{ border: "1px solid #ddd", padding: "12px" }}>Included at no extra cost</td>
                    <td style={{ border: "1px solid #ddd", padding: "12px" }}>Paid or unavailable</td>
                  </tr>
                  <tr>
                    <td style={{ border: "1px solid #ddd", padding: "12px" }}>Mock Interviews</td>
                    <td style={{ border: "1px solid #ddd", padding: "12px" }}>Personalized and expert-led</td>
                    <td style={{ border: "1px solid #ddd", padding: "12px" }}>Rare or premium-only</td>
                  </tr>
                  <tr style={{ backgroundColor: "black" }}>
                    <td style={{ border: "1px solid #ddd", padding: "12px" }}>Career Guidance</td>
                    <td style={{ border: "1px solid #ddd", padding: "12px" }}>1-on-1 personalized advice</td>
                    <td style={{ border: "1px solid #ddd", padding: "12px" }}>Generic or unavailable</td>
                  </tr>
                  <tr>
                    <td style={{ border: "1px solid #ddd", padding: "12px" }}>Ease of Use</td>
                    <td style={{ border: "1px solid #ddd", padding: "12px" }}>Simple, seamless process</td>
                    <td style={{ border: "1px solid #ddd", padding: "12px" }}>Requires complex apps/websites</td>
                  </tr>
                  <tr style={{ backgroundColor: "black" }}>
                    <td style={{ border: "1px solid #ddd", padding: "12px" }}>Direct Recruiter Access</td>
                    <td style={{ border: "1px solid #ddd", padding: "12px" }}>Yes, with quick response</td>
                    <td style={{ border: "1px solid #ddd", padding: "12px" }}>Indirect or unavailable</td>
                  </tr>
                  <tr>
                    <td style={{ border: "1px solid #ddd", padding: "12px" }}>Response Time</td>
                    <td style={{ border: "1px solid #ddd", padding: "12px" }}>Fast and responsive</td>
                    <td style={{ border: "1px solid #ddd", padding: "12px" }}>Often slow</td>
                  </tr>
                  <tr style={{ backgroundColor: "black" }}>
                    <td style={{ border: "1px solid #ddd", padding: "12px" }}>Platform Flexibility</td>
                    <td style={{ border: "1px solid #ddd", padding: "12px" }}>Accessible on any platform</td>
                    <td style={{ border: "1px solid #ddd", padding: "12px" }}>Limited to specific apps/sites</td>
                  </tr>
                  <tr>
                    <td style={{ border: "1px solid #ddd", padding: "12px" }}>Customer Support</td>
                    <td style={{ border: "1px solid #ddd", padding: "12px" }}>24/7 dedicated support</td>
                    <td style={{ border: "1px solid #ddd", padding: "12px" }}>Limited or unavailable</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}






{ /* const StyledContactForm = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 2rem auto;
  padding: 50;
  box-shadow: 0 4px 20px rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  background-color: rgba(30, 30, 30, 0.8);
  backdrop-filter: blur(10px);

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h2 {
      text-align: center;
      margin-bottom: 1rem;
      color: #fff;
    }

    label {
      font-weight: bold;
      color: #ddd;
    }

    input,
    textarea {
      width: 100%;
      padding: 12px;
      border: 1px solid #444;
      border-radius: 5px;
      font-size: 1rem;
      background-color: rgba(255, 255, 255, 0.1);
      color: #fff;

      &:focus {
        border-color: #f37254;
        box-shadow: 0 0 3px rgba(243, 114, 84, 0.5);
      }

      &::placeholder {
        color: #888;
      }
    }

    button {
      padding: 12px;
      background-color: #f37254;
      border: none;
      border-radius: 5px;
      color: #fff;
      font-size: 1rem;
      cursor: pointer;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: #d85a42;
      }
    }
  }
`; */}

export default Home;




