import React, { useRef, useState, useEffect } from 'react';
import emailjs from "emailjs-com";
import styled from "styled-components";
import { Link, useNavigate } from 'react-router-dom';
import './Home.css';

function Contact() {
  const formRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to send email
  const sendEmail = async (userData) => {
    const templateParams = {
      ...userData,
    };

    try {
      const result = await emailjs.send(
        "service_vlhumpe", // Replace with your service ID
        "template_gi63opv", // Replace with your template ID
        templateParams,
        "LJB9OySqh4LPpFqpI" // Replace with your public key
      );
      console.log(result.text);
      alert("Payment successful. Confirmation email sent.");
      navigate('/thank-you');
    } catch (error) {
      console.error(error.text);
      alert("Failed to send email. Please try again.");
    }
  };

  const handlePayment = async () => {
    const formData = new FormData(formRef.current);
    const expectedAmount = 399; // Default amount to be paid
    const userAmount = formData.get("amount") || expectedAmount; // Get form-entered amount if available
    const userData = {
      first_name: formData.get("first_name"),
      last_name: formData.get("last_name"),
      user_email: formData.get("user_email"),
      entered_amount: userAmount,
      message: formData.get("message"),
    };

    if (userAmount !== `${expectedAmount}`) {
      alert(`The expected payment is ₹${expectedAmount}. Please ensure this is the amount paid.`);
      return;
    }

    // Use the relative URL for the API request (no need for the full URL)
    try {
      const response = await fetch("https://zerotize.in/api_payment_init", { // The proxy in package.json will handle the rest
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          account_id: "vEvsIHVv", // Your Zerotize Account ID
          secret_key: "WltdNYLC07UED6Xq", // Your Zerotize Secret Key
          amount: expectedAmount,
          email: userData.user_email,
          name: `${userData.first_name} ${userData.last_name}`,
        }),
      });

      if (!response.ok) {
        throw new Error("Payment initialization failed");
      }

      const data = await response.json();

      if (data.status === "success") {
        // Redirect the user to the payment link from the API response
        window.location.href = data.payment_link;
      } else {
        alert("Error initiating payment. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to connect to Zerotize. Please try again.");
    }

    // After the user returns from payment (with payment status in query params), handle status
    window.addEventListener("load", () => {
      const urlParams = new URLSearchParams(window.location.search);
      const paymentStatus = urlParams.get("status");

      if (paymentStatus === "success") {
        sendEmail({
          ...userData,
          payment_status: "Payment confirmed.",
          expected_amount: expectedAmount,
        });
      } else if (paymentStatus === "fail") {
        alert("Payment failed. Please try again.");
      }
    });
  };

  return (
    <div className="home">
      <div className="content-wrapper">
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
          <div className="header-container">
            <a href="/" className="logo">FZNO</a>
            <nav className="nav"></nav>
            <Link to="/"><button className="start-button">JOIN NOW</button></Link>
          </div>
        </header>

        <main className="main">
          <div className="form-section">
            <h2 className="form-heading">Let us help you unlock your potential and secure the job you deserve!</h2>
            <StyledContactForm>
              <form ref={formRef} onSubmit={(e) => e.preventDefault()}>
                <h2>Interested?</h2>
                <label htmlFor="first_name">First Name</label>
                <input type="text" id="first_name" name="first_name" placeholder="Your First Name" required />
                <label htmlFor="last_name">Last Name</label>
                <input type="text" id="last_name" name="last_name" placeholder="Your Last Name" required />
                <label htmlFor="user_email">Email</label>
                <input type="email" id="user_email" name="user_email" placeholder="Your Email" required />
                <label htmlFor="amount">Amount (₹399 by default)</label>
                <input type="number" id="amount" name="amount" placeholder="Amount in ₹" defaultValue="399" readOnly />
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" placeholder="Enter your message" required></textarea>
                <button type="button" onClick={handlePayment}>
                  Pay Now
                </button>
              </form>
            </StyledContactForm>
          </div>
        </main>
      </div>
    </div>
  );
}

const StyledContactForm = styled.div`
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

    input, textarea {
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
      background-color: white;
      color: black;
      font-size: 1rem;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s ease;
      margin-top: 1rem;

      &:hover {
        background-color: rgb(169,169,169);
      }
    }
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    width: 90%;

    form {
      gap: 0.8rem;
    }

    input, textarea {
      font-size: 0.9rem;
      padding: 10px;
    }

    button {
      font-size: 0.9rem;
      padding: 10px;
    }
  }

  @media (max-width: 480px) {
    padding: 1rem;
    width: 100%;
  }
`;

export default Contact;

