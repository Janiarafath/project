import React from 'react';
import { Link } from 'react-router-dom';
import './ThankYou.css';  // You can customize this CSS for styling

function ThankYou() {
  return (
    <div className="thank-you-container">
      <div className="thank-you-content">
        <h1 className="thank-you-heading">Thank You for Your Payment!</h1>
        <p className="thank-you-message">
          Your transaction was successful. We're excited to have you on board! You will receive an email confirmation shortly.
        </p>
        <p className="thank-you-details">
          If you have any questions or need assistance, feel free to <a href="mailto:support@yourcompany.com">contact us</a>.
        </p>
        <div className="thank-you-actions">
          <Link to="/" className="go-home-button">
            Go to Homepage
          </Link>
          <Link to="/contact" className="contact-support-button">
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ThankYou;
