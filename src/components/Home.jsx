import React, { useRef, useEffect, useState } from 'react';

import { Link } from 'react-router-dom'; // useNavigate for page navigation
import './Home.css';

function Home() {
  const canvasRef = useRef(null);
  { /* const formRef = useRef(null); */}
  const [isScrolled, setIsScrolled] = useState(false);
  const animationFrameId = useRef(null);
  {/* const navigate = useNavigate(); */} // Using useNavigate hook for navigation

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

  useEffect(() => {
    if (window.location.pathname === '/') {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };
      resizeCanvas();
      window.addEventListener("resize", resizeCanvas);

      const particles = [];
      const numParticles = 150;

      for (let i = 0; i < numParticles; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 3 + 1,
          dx: (Math.random() - 0.5) * 2,
          dy: (Math.random() - 0.5) * 2,
        });
      }

      const animateParticles = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach((particle) => {
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
          ctx.fill();

          particle.x += particle.dx;
          particle.y += particle.dy;

          if (particle.x > canvas.width || particle.x < 0) particle.dx = -particle.dx;
          if (particle.y > canvas.height || particle.y < 0) particle.dy = -particle.dy;
        });

        animationFrameId.current = requestAnimationFrame(animateParticles);
      };

      { /*animateParticles(); */}

      return () => {
        cancelAnimationFrame(animationFrameId.current);
        window.removeEventListener("resize", resizeCanvas);
      };
    }
  }, []);

  // Function to send email after payment success
 { /* const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_vlhumpe',
        'template_updated_id',
        formRef.current,
        'LJB9OySqh4LPpFqpI'
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Email sent successfully!');
        },
        (error) => {
          console.log(error.text);
          alert('Failed to send email. Please try again.');
        }
      );
  }; /*}

  // Razorpay payment handler
  { /* const handleRazorpay = () => {
    const options = {
      key: 'YOUR_RAZORPAY_KEY',
      amount: 10000,
      currency: 'INR',
      name: 'Your Company Name',
      description: 'Test Transaction',
      image: 'https://ibb.co/WzcXW0Z',
      handler: (response) => {
        console.log(response.razorpay_payment_id);
        alert('Payment successful! Redirecting to the thank you page.');
        sendEmail();

        // Navigate to the "Thank You" page
        navigate('/thank-you'); // Redirect to a separate thank you page
      },
      prefill: {
        email: formRef.current['user_email'].value,
      },
      notes: {
        address: 'Corporate Office Address',
      },
      theme: {
        color: '#F37254',
      },
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  }; */}

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
              <button className="start-button">Sign Up</button>
            </Link>
          </div>
        </header>

        <main className="main">
          <div className="hero-content">
            <h1 className="title">
              World-class brands
              <br />
              for tech startups.
            </h1>
            <p className="description">
              Your startup deserves more than generic design. We create brands
              and websites tailored for innovators like you.
            </p>
            <div className="button-group">
              <Link to="/contact">
                <button className="secondary-button">Sign Up</button>
              </Link>
              <button className="secondary-button" onClick={scrollToFormSection}>
                VIEW WORK ↓
              </button>
            </div>
          </div>

          <div className="form-section" id="form-section">
            <h2 className="form-heading">
              Let us help you unlock your potential and secure the job you
              deserve!
            </h2> {/* do here*/}
            <div
      style={{
        position: 'relative',
        width: '100%',
        height: '50vh',
        overflow: 'hidden',
        background: 'url(https://media.giphy.com/media/18304345255962034739/giphy.gif) no-repeat center center fixed', // Using the GIF as the background
        backgroundSize: 'cover', // Makes sure the GIF covers the entire screen
      }}
    >
      {/* Content displayed over the background */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: '#fff',
          textAlign: 'center',
        }}
      >
        <h1 style={{ fontSize: '4rem' }}>{/* */}</h1>
        <p>{/* */}</p>
      </div> {/* do here*/}
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




