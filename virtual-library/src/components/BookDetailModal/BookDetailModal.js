import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import './BookDetailModal.css';

const BookDetailModal = ({ book, onClose }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 50
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 300,
        duration: 0.5
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.3
      }
    }
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  return (
    <motion.div
      className="modal-backdrop"
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      onClick={handleBackdropClick}
    >
      <motion.div
        className="book-detail-modal"
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          ×
        </button>

        <div className="modal-content">
          <div className="book-detail-image">
            <motion.img
              src={book.image}
              alt={book.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/400x600/667eea/ffffff?text=Book+Cover';
              }}
            />
            <div className="book-detail-rating">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={i < 4 ? 'star filled' : 'star'}>
                    ★
                  </span>
                ))}
              </div>
              <span className="rating-text">4.0 / 5.0</span>
            </div>
          </div>

          <div className="book-detail-info">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="book-detail-header">
                <h1 className="book-detail-title">{book.title}</h1>
                <p className="book-detail-author">by {book.author}</p>
                
                <div className="book-detail-meta">
                  <span className="book-detail-category">{book.category}</span>
                  <span className="book-detail-year">Published {book.year}</span>
                </div>
              </div>

              <div className="book-detail-description">
                <h3>About this book</h3>
                <p>{book.description}</p>
                
                <div className="book-stats">
                  <div className="stat">
                    <span className="stat-label">Pages</span>
                    <span className="stat-value">{Math.floor(Math.random() * 400) + 200}</span>
                  </div>
                  <div className="stat">
                    <span className="stat-label">Language</span>
                    <span className="stat-value">English</span>
                  </div>
                  <div className="stat">
                    <span className="stat-label">Format</span>
                    <span className="stat-value">Digital</span>
                  </div>
                </div>
              </div>

              <div className="book-detail-actions">
                <motion.button
                  className="btn btn-primary btn-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  📖 Read Now
                </motion.button>
                <motion.button
                  className="btn btn-outline btn-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  ❤️ Add to Favorites
                </motion.button>
              </div>

              <div className="book-detail-tags">
                <h4>Related Topics</h4>
                <div className="tags">
                  {[
                    book.category,
                    'Literature',
                    'Fiction',
                    'Classic',
                    'Bestseller'
                  ].slice(0, 4).map((tag, index) => (
                    <span key={index} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="book-detail-reviews">
                <h4>What readers say</h4>
                <div className="review-preview">
                  <div className="review">
                    <div className="review-stars">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="star filled">★</span>
                      ))}
                    </div>
                    <p>"An absolutely captivating read that kept me engaged from start to finish. Highly recommended!"</p>
                    <span className="reviewer">- BookLover123</span>
                  </div>
                  <div className="review">
                    <div className="review-stars">
                      {[...Array(4)].map((_, i) => (
                        <span key={i} className="star filled">★</span>
                      ))}
                      <span className="star">★</span>
                    </div>
                    <p>"Great storytelling and character development. A must-read for fans of the genre."</p>
                    <span className="reviewer">- ReadingEnthusiast</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default BookDetailModal;