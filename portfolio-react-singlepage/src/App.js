//Import all pages and components for the page
//Import router from react-router
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Work from './pages/Work';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// This will be single page application , will display About by default.
// The routes define the pages that will be displayed when user uses the navbar.
// The page will have the same header and footer. The main content will change based on the clicked links. 

function App() {
  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ">
    <div className="max-w-7xl w-full space-y-8 bg-gray-100">
    <Router>
      <div className="flex flex-col h-screen justify-between">
        <Header></Header>
        <main>
          <Routes>
          <Route
                path="*"
                element={<About />}
              />
            <Route
                path="/"
                element={<About />}
              />
              <Route
                path="/contact"
                element={<Contact />}
              />
              <Route
                path="/portfolio"
                element={<Portfolio />}
              />
              <Route
                path="/work"
                element={<Work />}
              />
              <Route
                path="/resume"
                element={<Resume />}
              />
          </Routes>
        </main>
        <Footer></Footer>
      </div>
    </Router>
    </div>
    </div>
  );
}

export default App;
