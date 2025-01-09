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
            FZNO
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
                Job Seeker
              </button>
            </Link>
          </nav>
        </div>
      </header>

      <main className="privacy-main" style={{ padding: '20px', textAlign: 'left' }}>
      <h1>Terms and Conditions</h1>
      
      <p>Welcome to FZNO! By accessing or using our platform, you agree to comply with these Terms and Conditions. Please read them carefully.</p>

      <h2>1. Acceptance of Terms</h2>
      <p>By registering, accessing, or using FZNO, you agree to these Terms and our Privacy Policy. If you do not agree, please discontinue use of our platform.</p>

      <h2>2. Services Provided</h2>
      <p>FZNO provides career-oriented services, including job matching, resume assistance, interview preparation, and job alerts. We do not guarantee job placement or employment outcomes.</p>

      <h2>3. User Accounts</h2>
      <p><strong>Eligibility:</strong> You must be at least 18 years old to use our services.</p>
      <p><strong>Account Responsibility:</strong> You are responsible for maintaining the confidentiality of your login credentials and for all activities under your account.</p>
      <p><strong>Accurate Information:</strong> Ensure the information you provide is truthful and up-to-date.</p>

      <h2>4. Prohibited Activities</h2>
      <p>Users must not:</p>
      <ul>
        <li>Submit false or misleading information.</li>
        <li>Use the platform for any unlawful or fraudulent activity.</li>
        <li>Post or share offensive, defamatory, or harmful content.</li>
        <li>Interfere with the platform’s operations or security.</li>
      </ul>

      <h2>5. Intellectual Property</h2>
      <p>All content on FZNO, including text, graphics, logos, and software, is owned by or licensed to us. Users may not copy, distribute, or modify any content without our written consent.</p>

      <h2>6. Payments and Refunds</h2>
      <p>Certain services may require payment. Fees are clearly outlined during the purchase process.</p>
      <p>Refunds, if applicable, will be handled per our Refund Policy.</p>

      <h2>7. Limitation of Liability</h2>
      <p>We are not liable for:</p>
      <ul>
        <li>Errors or inaccuracies in job postings or other user-submitted content.</li>
        <li>Loss of data, revenue, or business resulting from platform use.</li>
        <li>Any technical issues beyond our control.</li>
      </ul>

      <h2>8. Termination of Account</h2>
      <p>We reserve the right to suspend or terminate accounts for violations of these Terms or other policies.</p>

      <h2>9. Third-Party Content</h2>
      <p>Our platform may display content or links from third parties. We are not responsible for the accuracy or practices of third-party content providers.</p>

      <h2>10. Changes to Terms</h2>
      <p>We may update these Terms from time to time. Continued use of our platform after changes signifies your acceptance.</p>

      <h2>11. Contact Us</h2>
      <p>For questions or concerns regarding these Terms, contact us at:</p>
      <ul>
       <li><a href="mailto:contactfzno@gmail.com" className="contact-support-button">
      Contact Support
      </a></li>
      </ul>
    </main>
    </div>
  );
};

export default Privacy;
