import React from 'react';

import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const BaseLayout: React.FC = () => {
  return (
    <div className="PageLayout">
      <Header />
      <main className="Main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default BaseLayout;
