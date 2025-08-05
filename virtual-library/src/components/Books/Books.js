import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { mockBooks } from '../../data/mockBooks';
import './Books.css';

const Books = ({ onBookSelect }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('title');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  // Get unique categories
  const categories = useMemo(() => {
    const cats = ['All', ...new Set(mockBooks.map(book => book.category))];
    return cats;
  }, []);

  // Filter and sort books
  const filteredBooks = useMemo(() => {
    let filtered = mockBooks.filter(book => {
      const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           book.author.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || book.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    // Sort books
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'title':
          return a.title.localeCompare(b.title);
        case 'author':
          return a.author.localeCompare(b.author);
        case 'year':
          return b.year - a.year;
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, sortBy]);

  const handleBookClick = (book) => {
    onBookSelect(book);
  };

  if (isLoading) {
    return (
      <div className="books-loading">
        <div className="container">
          <div className="loading-content">
            <div className="spinner"></div>
            <p>Loading your books...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <motion.div 
      className="books"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="books-hero">
        <div className="container">
          <motion.div 
            className="books-hero-content"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1>Discover Amazing Books</h1>
            <p>Explore our vast collection of literature from around the world</p>
          </motion.div>
        </div>
      </div>

      <div className="books-content">
        <div className="container">
          {/* Search and Filter Section */}
          <motion.div 
            className="books-controls"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="search-section">
              <div className="search-box">
                <input
                  type="text"
                  placeholder="Search books by title or author..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="search-input"
                />
                <div className="search-icon">🔍</div>
              </div>
            </div>

            <div className="filter-section">
              <div className="filter-group">
                <label>Category:</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="filter-select"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              <div className="filter-group">
                <label>Sort by:</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="filter-select"
                >
                  <option value="title">Title</option>
                  <option value="author">Author</option>
                  <option value="year">Year</option>
                </select>
              </div>
            </div>
          </motion.div>

          {/* Results Info */}
          <motion.div 
            className="results-info"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <p>
              Showing {filteredBooks.length} of {mockBooks.length} books
              {searchTerm && ` for "${searchTerm}"`}
              {selectedCategory !== 'All' && ` in ${selectedCategory}`}
            </p>
          </motion.div>

          {/* Books Grid */}
          <div className="books-grid">
            <AnimatePresence>
              {filteredBooks.map((book, index) => (
                <motion.div
                  key={book.id}
                  className="book-card"
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ 
                    duration: 0.4,
                    delay: index * 0.05,
                    layout: { duration: 0.3 }
                  }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  onClick={() => handleBookClick(book)}
                >
                  <div className="book-image">
                    <img 
                      src={book.image} 
                      alt={book.title}
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/300x400/667eea/ffffff?text=Book+Cover';
                      }}
                    />
                    <div className="book-overlay">
                      <button className="view-details-btn">
                        View Details
                      </button>
                    </div>
                  </div>
                  
                  <div className="book-info">
                    <h3 className="book-title">{book.title}</h3>
                    <p className="book-author">by {book.author}</p>
                    <div className="book-meta">
                      <span className="book-category">{book.category}</span>
                      <span className="book-year">{book.year}</span>
                    </div>
                    <p className="book-description">
                      {book.description.substring(0, 100)}...
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* No Results */}
          {filteredBooks.length === 0 && (
            <motion.div 
              className="no-results"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="no-results-icon">📚</div>
              <h3>No books found</h3>
              <p>
                Try adjusting your search terms or filters to find more books.
              </p>
              <button 
                className="btn btn-primary"
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                }}
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Books;