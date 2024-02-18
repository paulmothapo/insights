import React from 'react';
import Header from './NevbarNew'; 
import Footer from './Footer'; 

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
