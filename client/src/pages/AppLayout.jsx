import React,{useState, useRef, useEffect} from 'react'
import Home from "./Home";
import Work from "./Work";
import Testimonial from "./Testimonial";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import NavigationBar from "../components/NavigationBar";
import { useDispatch } from 'react-redux';
import { fetchbackground } from '../services/backgroundService';

const AppLayout = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const containerRef = useRef();
  const sectionsRef = useRef([]);
  const dispatch = useDispatch();
  const[mobileBg, setMobileBg] = useState(null);
  const[bg, setBg] = useState(null);

  const scrollToSection = (index) => {
    const section = sectionsRef.current[index];
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
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

  async function handlefetchBackground(){
    const response = await dispatch(fetchbackground());
    const mobile = response.filter((item)=>{
      return item.isMobile;
    })
    setMobileBg(mobile[0]);
    const desktop = response.filter((item)=>{
      return !item.isMobile;
    })
    setBg(desktop[0]);
  }

  useEffect(() => {
    handlefetchBackground();
    const handleScrollEvent = () => {
      const scrollTop = containerRef.current.scrollTop;
      const sectionHeight = window.innerHeight;
      const newIndex = Math.round(scrollTop / sectionHeight);
      setCurrentSection(newIndex);
    };

    const container = containerRef.current;
    container.addEventListener("scroll", handleScrollEvent);

    return () => {
      container.removeEventListener("scroll", handleScrollEvent);
    };
  }, []);
  return (
    <div className="flex flex-row w-screen h-screen bg-transparent text-gray-300 font-Montserrat overflow-hidden">
        
        {
          mobileBg && mobileBg.bgType === "Video" ?  (
            <video src={mobileBg?.url} className='absolute block sm:hidden w-screen h-screen object-cover top-0 left-0 ' autoPlay loop muted playsInline ></video>
          ) : 
          (
            <img src={mobileBg?.url} className = "absolute w-screen h-screen object-cover top-0 left-0 -z-10" />
          )
        }
        {
          bg && bg.bgType === "Video" ? (
            <video src={bg?.url} className='absolute hidden sm:block w-screen h-screen object-cover top-0 left-0 ' autoPlay loop muted playsInline ></video>
          ): (
            <img src={bg?.url} className = "absolute w-screen h-screen object-cover top-0 left-0 -z-10" />
          )
        }
        
        {/* Navigation Menu */}
        <div className="w-1/6 h-screen hidden  lg:flex justify-center items-center">
          <NavigationBar section={currentSection} />
        </div>

        {/* Pages */}
        <div
          ref={containerRef}
          onWheel={handleScroll}
          className="h-full w-full overflow-y-scroll snap-y snap-mandatory"
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
  )
}

export default AppLayout
