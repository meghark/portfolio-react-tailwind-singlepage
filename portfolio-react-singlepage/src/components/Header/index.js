function Header() {


    return (
      <header>
          <nav className="bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">                
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                  
                    <a href="#" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">About Me</a>
      
                    <a href="#portfolio" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Portfolio</a>
      
                    <a href="#workExperience" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Work Experience</a>
      
                    <a href="./assets/files/Megha kulathattil sample.pdf" target="_blank"  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Resume</a>
      
                    <a href="#contactMe" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact Me</a>
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