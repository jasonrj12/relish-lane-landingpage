import React from 'react';
import './MobileMenuToggle.css';

const MobileMenuToggle = ({ isOpen, onClick, isScrolled }) => {
  return (
    <div className="mobile-menu-toggle-wrapper">
      <input 
        type="checkbox" 
        id="mobile-menu-checkbox" 
        checked={isOpen}
        onChange={onClick}
      />
      <label 
        htmlFor="mobile-menu-checkbox" 
        className={`toggle ${isScrolled ? 'scrolled' : ''}`}
      >
        <div className="bars bar1" />
        <div className="bars bar2" />
        <div className="bars bar3" />
      </label>
    </div>
  );
};

export default MobileMenuToggle;
