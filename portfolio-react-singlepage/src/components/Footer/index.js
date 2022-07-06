import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faTwitterSquare, faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <footer className="text-center  bg-gray-100 ">
      <div className="text-center p-6 bg-gray-200 space-x-4">
        <a className="text-gray-900 font-semibold" href="https://github.com/meghark" target="_blank" >
        <FontAwesomeIcon icon={faGithub} /> </a>
      
        <a className="text-gray-900 font-semibold" href="https://linkedin.com/in/megha-raj-kulathattil-98971744" target="_blank" ><FontAwesomeIcon icon={faLinkedin} /></a>
     
        <a className="text-gray-900 font-semibold" href="https://twitter.com/MeghaRa95040517" target="_blank" ><FontAwesomeIcon icon={faTwitterSquare} /></a>
       
      </div>
    </footer>
    
  );
};

export default Footer;
