import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Privacy = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll functionality for sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="privacy-container" style={{ backgroundColor: 'black', color: '#fff', fontFamily: 'Arial, sans-serif' }}>
      {/* Navbar */}
      <header
        className={`header ${isScrolled ? 'scrolled' : ''}`}
        style={{
          padding: '20px',
          backgroundColor: 'rgba(0, 0, 0, 0.6)', // Transparent black background
        }}
      >
        <div className="header-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <a href="/" className="logo" style={{ color: '#fff', fontSize: '24px' }}>
            CyberWorld
          </a>
          <nav className="nav" style={{ display: 'flex', gap: '20px' }}>
            <Link
              to="/"
              style={{
                color: '#fff',
                textDecoration: 'none',
                transition: 'color 0.3s',
              }}
              onMouseEnter={(e) => (e.target.style.color = 'rgb(128,128,128)')}
              onMouseLeave={(e) => (e.target.style.color = 'white')}
            >
              Home
            </Link>
            <Link
              to="/terms"
              style={{
                color: '#fff',
                textDecoration: 'none',
                transition: 'color 0.3s',
              }}
              onMouseEnter={(e) => (e.target.style.color = 'rgb(128,128,128)')}
              onMouseLeave={(e) => (e.target.style.color = 'white')}
            >
              Terms
            </Link>
            <Link
              to="/privacy"
              style={{
                color: '#fff',
                textDecoration: 'none',
                transition: 'color 0.3s',
              }}
              onMouseEnter={(e) => (e.target.style.color = 'rgb(128,128,128)')}
              onMouseLeave={(e) => (e.target.style.color = 'white')}
            >
              Privacy
            </Link>
            <Link to="/contact">
              <button
                className="start-button"
                style={{
                  padding: '10px 20px',
                  backgroundColor: 'white',
                  color: '#000',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s, color 0.3s',
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = 'rgb(128,128,128)';
                  e.target.style.color = 'black';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'white';
                  e.target.style.color = '#000';
                }}
              >
                Sign Up
              </button>
            </Link>
          </nav>
        </div>
      </header>

      <main className="privacy-main" style={{ padding: '20px', textAlign: 'left' }}>
        <h1>Privacy Policy</h1>
        <p>Welcome to CyberWorld. Your privacy is important to us, and we are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our services.</p>

        <h2>1. Information We Collect</h2>
        <p>We collect the following types of information:</p>
        <ul>
          <li><strong>Personal Information:</strong> Name, email address, phone number, address, job preferences, and professional details (e.g., resume).</li>
          <li><strong>Usage Data:</strong> Information about how you interact with our platform, including pages visited, time spent, and clicks.</li>
          <li><strong>Device Information:</strong> IP address, browser type, operating system, and other technical details.</li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <p>Your information is used to:</p>
        <ul>
          <li>Provide and improve our services.</li>
          <li>Match you with relevant job opportunities.</li>
          <li>Communicate with you, including sending job alerts and updates.</li>
          <li>Analyze usage patterns to enhance user experience.</li>
          <li>Ensure platform security and prevent fraud.</li>
        </ul>

        <h2>3. Sharing Your Information</h2>
        <p>We do not sell your personal information. However, we may share it with:</p>
        <ul>
          <li><strong>Employers and Recruiters:</strong> To connect you with job opportunities.</li>
          <li><strong>Service Providers:</strong> To support operations like hosting, analytics, and email communication.</li>
          <li><strong>Legal and Compliance Purposes:</strong> If required by law or to protect our rights.</li>
        </ul>

        <h2>4. Your Choices</h2>
        <p>You can update or delete your profile information in your account settings. You can opt-out of marketing emails by clicking “Unsubscribe” in the email footer.</p>

        <h2>5. Data Security</h2>
        <p>We implement robust security measures, including encryption and secure servers, to protect your data. However, no method of transmission over the internet is 100% secure.</p>

        <h2>6. Cookies and Tracking</h2>
        <p>We use cookies to improve your experience, such as remembering preferences and analyzing site traffic. You can manage cookie preferences in your browser settings.</p>

        <h2>7. Third-Party Links</h2>
        <p>Our platform may contain links to third-party websites. We are not responsible for their privacy practices.</p>

        <h2>8. International Users</h2>
        <p>If you access our services from outside [Your Country], your data may be transferred to and processed in [Your Country].</p>

        <h2>9. Changes to This Policy</h2>
        <p>We may update this Privacy Policy from time to time. Changes will be communicated through updates on this page.</p>

        <h2>10. Contact Us</h2>
        <p>If you have any questions or concerns about this Privacy Policy, please contact us at:</p>
        <ul>
          <li><strong>Email:</strong> [Your Email Address]</li>
          <li><strong>Phone:</strong> [Your Contact Number]</li>
        </ul>

        <p>CyberWorld is dedicated to respecting your privacy and protecting your data. By using our services, you agree to this Privacy Policy.</p>
      </main>
    </div>
  );
};

export default Privacy;

