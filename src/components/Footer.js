import React from 'react';

function Footer() {
  return (
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center text-gradient text-sm">
          <h1>Developed by Gourav Saha</h1>
        </div>
        <div className="flex items-center mt-4 md:mt-0">
          <p className="text-white text-sm mr-4">
            Copyright © 2023 
            All rights reserved.
          </p>
        </div>
      </div>
  );
}

export default Footer;
