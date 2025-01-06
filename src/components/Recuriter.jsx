import React, { useRef, useEffect, useState } from 'react';
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import { Link, useNavigate } from 'react-router-dom'; // useNavigate is added
import './Home.css';

function Contact() {
  const formRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();  // Initialize useNavigate

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sendEmail = async () => {
    const formData = new FormData(formRef.current);
    const userData = {
      full_name: formData.get("full_name"),
      company_name: formData.get("company_name"),
      email_address: formData.get("email_address"),
      phone_number: formData.get("phone_number"),
      industry: formData.get("industry"),
      company_website: formData.get("company_website"),
      location: formData.get("location"),
      job_roles: formData.get("job_roles"),
      experience_levels: formData.get("experience_levels"),
      job_locations: formData.get("job_locations"),
      num_of_positions: formData.get("num_of_positions"),
      preferred_skills: formData.get("preferred_skills"),
      salary_range: formData.get("salary_range"),
    };

    try {
      const result = await emailjs.send(
        "service_vlhumpe", // Replace with your service ID
        "template_1v1q6bx", // Replace with your template ID
        userData,
        "LJB9OySqh4LPpFqpI" // Replace with your public key
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
            <h2 className="form-heading">Let us help you unlock your potential and secure the job you deserve!</h2>
            <StyledContactForm>
              <form ref={formRef} onSubmit={(e) => { e.preventDefault(); sendEmail(); }}>
                <h2>Interested?</h2>
                <label htmlFor="full_name">Full Name</label>
                <input type="text" id="full_name" name="full_name" placeholder="Your Full Name" required />

                <label htmlFor="company_name">Company Name</label>
                <input type="text" id="company_name" name="company_name" placeholder="Your Company Name" required />

                <label htmlFor="email_address">Email Address</label>
                <input type="email" id="email_address" name="email_address" placeholder="Your Email Address" required />

                <label htmlFor="phone_number">Phone Number</label>
                <input type="number" id="phone_number" name="phone_number" placeholder="Your Phone Number" required />

                <label htmlFor="industry">Industry</label>
                <input type="text" id="industry" name="industry" placeholder="Your Industry" required />

                <label htmlFor="company_website">Company Website</label>
                <input type="text" id="company_website" name="company_website" placeholder="Your Company Website" required />

                <label htmlFor="job_roles">Job Roles</label>
                <input type="text" id="job_roles" name="job_roles" placeholder="Job Roles" required />

                <label htmlFor="experience_levels">Experience Levels</label>
                <input type="number" id="experience_levels" name="experience_levels" placeholder="Experience Levels" required />

                <label htmlFor="job_locations">Job Locations</label>
                <input type="text" id="job_locations" name="job_locations" placeholder="Job Locations" required />

                <label htmlFor="num_of_positions">Number of Positions Open</label>
                <input type="number" id="num_of_positions" name="num_of_positions" placeholder="Number of Positions Open" required />

                <label htmlFor="preferred_skills">Preferred Skills</label>
                <textarea id="preferred_skills" name="preferred_skills" rows="3" placeholder="Enter Preferred Skills" required></textarea>

                <label htmlFor="salary_range">Salary Range (Optional)</label>
                <input type="number" id="salary_range" name="salary_range" placeholder="Salary Range (Optional)" />

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