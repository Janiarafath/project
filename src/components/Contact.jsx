import React, { useRef, useEffect, useState } from 'react';
import emailjs from "@emailjs/browser";
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

  const uploadImageToImgBB = async (file) => {
    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await fetch(
        `https://api.imgbb.com/1/upload?key=93a9fbb7feb9c5c091568c00d5ae05de`, // Your ImgBB API key
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await response.json();
      if (data.error) {
        alert(`ImgBB upload failed: ${data.error.message}`);
        return null;
      }
      return data.data.url; // Return the image URL
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Failed to upload image.");
      return null;
    }
  };

  const sendEmail = async () => {
    const formData = new FormData(formRef.current);
    const userData = {
      first_name: formData.get("first_name"),
      last_name: formData.get("last_name"),
      email_address: formData.get("email_address"),
      phone_number: formData.get("phone_number"),
      payment_screenshot: formData.get("payment_screenshot"), // File upload
    };

    try {
      // Upload the file to ImgBB
      const imageUrl = await uploadImageToImgBB(userData.payment_screenshot);
      if (!imageUrl) return; // If image upload failed, stop execution

      // Replace payment_screenshot with the ImgBB URL
      userData.payment_screenshot = imageUrl;

      // Send email using EmailJS
      const result = await emailjs.send(
        "service_vlhumpe", // Your service ID
        "template_gi63opv", // Your template ID
        userData,
        "LJB9OySqh4LPpFqpI" // Your public key
      );
      console.log(result.text);
      alert("Email sent successfully!");
      navigate("/thank-you"); // Navigate to Thank You page
    } catch (error) {
      console.error(error.text);
      alert("Failed to send email. Please try again.");
    }
  };

  return (
    <div className="home">
      <div className="content-wrapper">
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
          <div className="header-container">
            <a href="/" className="logo">FZNO</a>
            <nav className="nav"></nav>
            <Link to="/"><button className="start-button">Home</button></Link>
          </div>
        </header>

        <main className="main">
          <div className="form-section">
            <h2 className="form-heading">Complete Your Payment and Share Details</h2>
            <StyledContactForm>
              <form ref={formRef} onSubmit={(e) => { e.preventDefault(); sendEmail(); }}>
                <h2>Payment Details</h2>

                <label htmlFor="first_name">First Name</label>
                <input type="text" id="first_name" name="first_name" placeholder="Your First Name" required />

                <label htmlFor="last_name">Last Name</label>
                <input type="text" id="last_name" name="last_name" placeholder="Your Last Name" required />

                <label htmlFor="email_address">Email Address</label>
                <input type="email" id="email_address" name="email_address" placeholder="Your Email Address" required />

                <label htmlFor="phone_number">Phone Number</label>
                <input type="number" id="phone_number" name="phone_number" placeholder="Your Phone Number" required />

                <label htmlFor="payment_link">Payment Link</label>
                <a href="https://pay.mypaylink.in/?q=4r1MZJ" target="_blank" rel="noopener noreferrer">Click here to make payment</a>

                <label htmlFor="payment_screenshot">Upload Payment Screenshot</label>
                <input type="file" id="payment_screenshot" name="payment_screenshot" accept="image/*" required />

                <button type="submit">Submit</button>
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

    a {
      color: #f37254;
      font-weight: bold;
      text-decoration: none;
      margin-bottom: 1rem;

      &:hover {
        text-decoration: underline;
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
