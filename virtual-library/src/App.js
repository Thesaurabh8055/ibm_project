import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';

// Components
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Books from './components/Books/Books';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import BookDetailModal from './components/BookDetailModal/BookDetailModal';
import Preloader from './components/Preloader/Preloader';

function App() {
  const [selectedBook, setSelectedBook] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Simulate loading time for preloader
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.setAttribute('data-theme', 'dark');
    }

    return () => clearTimeout(timer);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    const newTheme = !darkMode ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme === 'dark' ? 'dark' : '');
    localStorage.setItem('theme', newTheme);
  };

  const openBookDetail = (book) => {
    setSelectedBook(book);
    document.body.style.overflow = 'hidden';
  };

  const closeBookDetail = () => {
    setSelectedBook(null);
    document.body.style.overflow = 'unset';
  };

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <Router>
      <div className="App">
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        
        <AnimatePresence mode="wait">
          <Routes>
            <Route 
              path="/" 
              element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Home />
                </motion.div>
              } 
            />
            <Route 
              path="/books" 
              element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Books onBookSelect={openBookDetail} />
                </motion.div>
              } 
            />
            <Route 
              path="/about" 
              element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <About />
                </motion.div>
              } 
            />
          </Routes>
        </AnimatePresence>

        <Footer />

        {/* Book Detail Modal */}
        <AnimatePresence>
          {selectedBook && (
            <BookDetailModal 
              book={selectedBook} 
              onClose={closeBookDetail}
            />
          )}
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;
