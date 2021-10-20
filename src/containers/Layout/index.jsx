import React from 'react';

import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';

export default function index({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
