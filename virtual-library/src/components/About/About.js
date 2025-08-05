import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'Head Librarian',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face',
      description: 'Passionate about connecting readers with their perfect books.'
    },
    {
      name: 'Michael Chen',
      role: 'Digital Curator',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
      description: 'Expert in organizing and categorizing our vast digital collection.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Community Manager',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face',
      description: 'Building bridges between authors, readers, and book lovers worldwide.'
    }
  ];

  const stats = [
    { number: '10,000+', label: 'Books Available' },
    { number: '50,000+', label: 'Happy Readers' },
    { number: '25+', label: 'Countries Served' },
    { number: '99.9%', label: 'Uptime' }
  ];

  return (
    <motion.div 
      className="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <motion.div 
            className="about-hero-content"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1>About Virtual Library</h1>
            <p>
              Empowering minds through digital literacy and connecting readers 
              with the world's greatest stories, one book at a time.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="about-content">
        <div className="container">
          {/* Mission Section */}
          <motion.section 
            className="about-mission"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="mission-grid">
              <div className="mission-text">
                <h2>Our Mission</h2>
                <p>
                  At Virtual Library, we believe that knowledge should be accessible to everyone, 
                  everywhere. Our mission is to democratize access to literature and educational 
                  content by creating a digital sanctuary where readers can explore, discover, 
                  and engage with books from around the world.
                </p>
                <p>
                  We're committed to preserving literary heritage while embracing the future 
                  of digital reading. Through innovative technology and thoughtful curation, 
                  we create meaningful connections between readers and the stories that shape our world.
                </p>
              </div>
              <div className="mission-image">
                <motion.div 
                  className="floating-elements"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="element element-1">📚</div>
                  <div className="element element-2">🌍</div>
                  <div className="element element-3">💡</div>
                  <div className="element element-4">❤️</div>
                </motion.div>
              </div>
            </div>
          </motion.section>

          {/* Stats Section */}
          <motion.section 
            className="about-stats"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>By the Numbers</h2>
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  className="stat-card"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Values Section */}
          <motion.section 
            className="about-values"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Our Values</h2>
            <div className="values-grid">
              <motion.div 
                className="value-card"
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="value-icon">🌐</div>
                <h3>Accessibility</h3>
                <p>
                  We believe knowledge should be available to everyone, regardless of 
                  location, background, or circumstances.
                </p>
              </motion.div>
              
              <motion.div 
                className="value-card"
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="value-icon">🎯</div>
                <h3>Quality</h3>
                <p>
                  Every book in our collection is carefully curated to ensure 
                  exceptional content and reading experience.
                </p>
              </motion.div>
              
              <motion.div 
                className="value-card"
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="value-icon">🚀</div>
                <h3>Innovation</h3>
                <p>
                  We continuously evolve our platform using cutting-edge technology 
                  to enhance the digital reading experience.
                </p>
              </motion.div>
              
              <motion.div 
                className="value-card"
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="value-icon">🤝</div>
                <h3>Community</h3>
                <p>
                  We foster a vibrant community of readers, authors, and literary 
                  enthusiasts from around the globe.
                </p>
              </motion.div>
            </div>
          </motion.section>

          {/* Team Section */}
          <motion.section 
            className="about-team"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Meet Our Team</h2>
            <p className="team-intro">
              Behind Virtual Library is a passionate team of book lovers, 
              technologists, and literary experts dedicated to making reading accessible to all.
            </p>
            
            <div className="team-grid">
              {teamMembers.map((member, index) => (
                <motion.div 
                  key={index}
                  className="team-card"
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  <div className="team-image">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/200x200/667eea/ffffff?text=' + member.name.split(' ').map(n => n[0]).join('');
                      }}
                    />
                  </div>
                  <div className="team-info">
                    <h3>{member.name}</h3>
                    <p className="team-role">{member.role}</p>
                    <p className="team-description">{member.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Contact Section */}
          <motion.section 
            className="about-contact"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="contact-content">
              <h2>Get in Touch</h2>
              <p>
                Have questions, suggestions, or just want to share your love for books? 
                We'd love to hear from you!
              </p>
              
              <div className="contact-methods">
                <motion.div 
                  className="contact-method"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="contact-icon">📧</div>
                  <div>
                    <h4>Email Us</h4>
                    <p>hello@virtuallibrary.com</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="contact-method"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="contact-icon">🐦</div>
                  <div>
                    <h4>Follow Us</h4>
                    <p>@VirtualLibrary</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="contact-method"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="contact-icon">💬</div>
                  <div>
                    <h4>Live Chat</h4>
                    <p>Available 24/7</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </motion.div>
  );
};

export default About;