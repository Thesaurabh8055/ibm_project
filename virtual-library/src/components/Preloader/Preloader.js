import React from 'react';
import { motion } from 'framer-motion';
import './Preloader.css';

const Preloader = () => {
  return (
    <motion.div 
      className="preloader"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="preloader-content">
        <div className="book-container">
          <div className="book">
            <div className="book-cover"></div>
            <div className="book-pages">
              <div className="page page-1"></div>
              <div className="page page-2"></div>
              <div className="page page-3"></div>
            </div>
          </div>
        </div>
        
        <motion.h2 
          className="preloader-title"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Virtual Library
        </motion.h2>
        
        <motion.p 
          className="preloader-subtitle"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          Loading your digital sanctuary...
        </motion.p>
        
        <div className="loading-bar">
          <motion.div 
            className="loading-progress"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Preloader;