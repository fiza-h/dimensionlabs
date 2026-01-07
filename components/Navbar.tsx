import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      backgroundColor: 'var(--bg-primary)',
      borderBottom: '1px solid var(--border-color)',
      padding: '1rem',
      zIndex: 1000,
      display: 'flex',
      justifyContent: 'center'
    }}>
      <div className="container" style={{
        margin: 0,
        padding: 0,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        maxWidth: 'var(--container-width)'
      }}>
        <span className="text-serif" style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
          Dimension Labs
        </span>
        <Link to="/apply" className="btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.75rem' }}>
          Apply &rarr;
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
