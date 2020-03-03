import React from 'react';
import './index.css';

export const Button = ({ onClick, className = '', children }) => {
    return (
      <button
        onClick={onClick}
        className={className}
        type='button'>
        {children}
      </button>
    );
  }