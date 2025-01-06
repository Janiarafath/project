import React, { useRef, useEffect, useState } from 'react';
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import { Link, useNavigate } from 'react-router-dom';
import './Home.css';

function Contact() {
  const formRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [file, setFile] = useState(null); // State for the uploaded file
  const navigate = useNavigate(); // To navigate to the Thank You page

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sendEmail = async (userData, fileBase64) => {
    const templateParams = {
      ...userData,
      file: fileBase64,
    };

    try {
      const result = await emailjs.send(
        "service_vlhumpe", // Replace with your service ID
        "template_updated_id", // Replace with your template ID
        templateParams,
        "LJB9OySqh4LPpFqpI" // Replace with your public key
      );
      console.log(result.text);
      alert("Email sent successfully!");
      navigate('/thank-you'); // Navigate to the Thank You page
    } catch (error) {
      console.error(error.text);
      alert("Failed to send email. Please try again.");
    }
  };

  const handleRazorpay = () => {
    const options = {
      key: "YOUR_RAZORPAY_KEY",
      amount: 10000,
      currency: "INR",
      name: "Your Company Name",
      description: "Test Transaction",
      image: "https://ibb.co/WzcXW0Z",
      handler: async (response) => {
        console.log(response.razorpay_payment_id);
        alert("Payment successful! Proceeding to submit email.");

        // Get form data
        const formData = new FormData(formRef.current);
        const userData = {
          first_name: formData.get("first_name"),
          last_name: formData.get("last_name"),
          user_email: formData.get("user_email"),
          amount: formData.get("amount"),
          message: formData.get("message"),
        };

        // Convert file to base64
        let fileBase64 = null;
        if (file) {
          fileBase64 = await toBase64(file);
        }

        // Send email with user data and file
        sendEmail(userData, fileBase64);
      },
      prefill: {
        email: formRef.current["user_email"].value,
      },
      notes: {
        address: "Corporate Office Address",
      },
      theme: {
        color: "#F37254",
      },
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]); // Capture the uploaded file
  };

  const toBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result.split(",")[1]); // Get base64 string
      reader.onerror = (error) => reject(error);
    });
  };

  return (
    <div className="home">
      <div className="content-wrapper">
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
          <div className="header-container">
            <a href="/" className="logo">CyberWorld</a>
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
                <label htmlFor="amount">Amount</label>
                <input type="number" id="amount" name="amount" placeholder="Amount in ₹" required />
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" placeholder="Enter your message" required></textarea>
                <label htmlFor="file">Upload File</label>
                <input type="file" id="file" name="file" onChange={handleFileChange} required />
                <button type="button" onClick={handleRazorpay}>
                  Next
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

