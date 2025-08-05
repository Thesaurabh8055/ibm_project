import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Home.css';

const Home = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Floating books animation
    const books = [];
    const bookCount = 20;

    // Create floating books
    for (let i = 0; i < bookCount; i++) {
      books.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 30 + 20,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
        opacity: Math.random() * 0.3 + 0.1,
        color: `hsl(${Math.random() * 60 + 200}, 70%, 60%)`
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      books.forEach(book => {
        // Update position
        book.x += book.speedX;
        book.y += book.speedY;
        book.rotation += book.rotationSpeed;

        // Wrap around edges
        if (book.x > canvas.width + book.size) book.x = -book.size;
        if (book.x < -book.size) book.x = canvas.width + book.size;
        if (book.y > canvas.height + book.size) book.y = -book.size;
        if (book.y < -book.size) book.y = canvas.height + book.size;

        // Draw book
        ctx.save();
        ctx.translate(book.x, book.y);
        ctx.rotate(book.rotation);
        ctx.globalAlpha = book.opacity;
        ctx.fillStyle = book.color;
        ctx.fillRect(-book.size/2, -book.size/2 * 1.4, book.size, book.size * 1.4);
        ctx.fillStyle = 'rgba(255,255,255,0.3)';
        ctx.fillRect(-book.size/2, -book.size/2 * 1.4, book.size * 0.1, book.size * 1.4);
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="home">
      {/* Animated Background */}
      <canvas ref={canvasRef} className="hero-canvas" />
      
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay" />
        <div className="container">
          <div className="hero-content">
            <motion.h1 
              className="hero-title"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Welcome to Your
              <span className="text-gradient"> Virtual Library</span>
            </motion.h1>
            
            <motion.p 
              className="hero-subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Discover thousands of books, explore new worlds, and embark on endless adventures. 
              Your digital sanctuary for literature awaits.
            </motion.p>
            
            <motion.div 
              className="hero-actions"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link to="/books" className="btn btn-primary btn-lg">
                Explore Books
              </Link>
              <button 
                onClick={() => scrollToSection('features')}
                className="btn btn-outline btn-lg"
              >
                Learn More
              </button>
            </motion.div>
          </div>
          
          <motion.div 
            className="hero-illustration"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <div className="floating-books">
              <motion.div 
                className="book book-1"
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                📖
              </motion.div>
              <motion.div 
                className="book book-2"
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, -3, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              >
                📚
              </motion.div>
              <motion.div 
                className="book book-3"
                animate={{ 
                  y: [0, -25, 0],
                  rotate: [0, 8, 0]
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                📘
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span>Scroll Down</span>
          <div className="scroll-arrow">↓</div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Why Choose Virtual Library?</h2>
            <p>Experience the future of digital reading with our innovative features</p>
          </motion.div>
          
          <div className="features-grid">
            {[
              {
                icon: '🌟',
                title: 'Curated Collection',
                description: 'Handpicked books from various genres and authors, ensuring quality content for every reader.'
              },
              {
                icon: '🔍',
                title: 'Smart Search',
                description: 'Find your next favorite book with our intelligent search and filtering system.'
              },
              {
                icon: '📱',
                title: 'Responsive Design',
                description: 'Enjoy seamless reading experience across all devices - desktop, tablet, and mobile.'
              },
              {
                icon: '🎨',
                title: 'Beautiful Interface',
                description: 'Immerse yourself in our modern, vibrant design that makes browsing a pleasure.'
              },
              {
                icon: '⚡',
                title: 'Fast & Smooth',
                description: 'Lightning-fast performance with smooth animations and transitions.'
              },
              {
                icon: '🌙',
                title: 'Dark Mode',
                description: 'Switch between light and dark themes for comfortable reading at any time.'
              }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                className="feature-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Ready to Start Your Reading Journey?</h2>
            <p>Join thousands of book lovers who have already discovered their next favorite read.</p>
            <Link to="/books" className="btn btn-secondary btn-lg">
              Browse Library Now
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;