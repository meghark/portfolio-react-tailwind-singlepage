import { Link } from 'react-router-dom';

// Header available in each page.
// Will have links to various sections via react-router.
// Use of react-router takes the users to approriate screens without page reload.
function Header() {
    return (
      <header>

          <nav className="bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">                
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    <p className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">Megha Kulathattil</p>
                    <Link to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium active:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 " aria-current="page">About Me</Link>
      
                    <Link to="/portfolio"  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium active:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 ">Portfolio</Link>
      
                    <Link to="/work"  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium active:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 ">Work Experience</Link>

                    <Link to="/resume"  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium active:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 ">Resume</Link>
                
      
                    <Link to="/contact"  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium active:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 ">Contact Me</Link>
                  </div>
                </div>
              </div>             
      
            </div>
          </div>
      </nav>
      </header>
    );
  }
  
  export default Header;