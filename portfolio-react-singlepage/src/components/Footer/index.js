import React from 'react';
import githubmark from '../../assets/images/GitHub-Mark-32px.png';

const Footer = () => {
  return (
    <footer className="text-center  bg-gray-100 text-gray-600">
      <div className="text-center p-6 bg-gray-200">
        <a className="text-gray-600 font-semibold" href="https://github.com/meghark" target="_blank" ><img src={githubmark}></img></a>
      </div>
    </footer>
    
  );
};

export default Footer;
