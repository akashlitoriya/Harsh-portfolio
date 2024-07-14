import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Work from './pages/Work';
import Testimonial from './pages/Testimonial';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import { useRef, useState, useEffect } from 'react';
import NavigationBar from './components/NavigationBar';
import ProductAnimation from './pages/ProductAnimation';
import PersonalProject from './pages/PersonalProject';
import ProductVisualization from './pages/ProductVisualization';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <App />
    },
    {
      path: '/productVisualization',
      element: <ProductVisualization />
    },
    {
      path: '/productAnimation',
      element: <ProductAnimation />
    },
    {
      path: '/personalProject',
      element: <PersonalProject />
    }
  ]);

  const [currentSection, setCurrentSection] = useState(0);
  const containerRef = useRef();
  const sectionsRef = useRef([]);

  const scrollToSection = (index) => {
    const section = sectionsRef.current[index];
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScroll = (e) => {
    if (e.deltaY > 0) {
      // Scroll down
      if (currentSection < sectionsRef.current.length - 1) {
        setCurrentSection((prev) => prev + 1);
        scrollToSection(currentSection + 1);
      }
    } else {
      // Scroll up
      if (currentSection > 0) {
        setCurrentSection((prev) => prev - 1);
        scrollToSection(currentSection - 1);
      }
    }
  };

  useEffect(() => {
    const handleScrollEvent = () => {
      const scrollTop = containerRef.current.scrollTop;
      const sectionHeight = window.innerHeight;
      const newIndex = Math.round(scrollTop / sectionHeight);
      setCurrentSection(newIndex);
    };

    const container = containerRef.current;
    container.addEventListener('scroll', handleScrollEvent);

    // Cleanup on unmount
    return () => {
      container.removeEventListener('scroll', handleScrollEvent);
    };
  }, []);
  console.log(currentSection)
  return (
    // <RouterProvider router={router}>
      <div className='flex flex-row w-screen h-screen bg-backdrop text-text_secondary font-Montserrat overflow-hidden'>
        {/* Navigation Menu */}
        <div className='w-1/6 h-screen hidden  lg:flex justify-center items-center'>
          <NavigationBar section={currentSection} />
        </div>

        {/* Pages */}
        <div
          ref={containerRef}
          onWheel={handleScroll}
          className='h-full w-full overflow-y-scroll snap-y snap-mandatory'
        >
          <div ref={(el) => (sectionsRef.current[0] = el)}>
            <Home />
          </div>
          <div ref={(el) => (sectionsRef.current[1] = el)}>
            <Work />
          </div>
          <div ref={(el) => (sectionsRef.current[2] = el)}>
            <AboutMe />
          </div>
          <div ref={(el) => (sectionsRef.current[3] = el)}>
            <Testimonial />
          </div>
          <div ref={(el) => (sectionsRef.current[4] = el)}>
            <Contact />
          </div>
        </div>
      </div>
    // </RouterProvider>

  );
}

export default App;
