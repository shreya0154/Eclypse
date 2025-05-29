

import { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/logo.jpg';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isHome = location.pathname === '/';

  const goToCart = () => {
    navigate('/cart');
  };
  const goToHome=()=>{
    navigate('/');
  }

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);


  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
    else {
        navigate('/about-page')
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 h-19 transition-colors duration-300 ${
        isScrolled ? 'text-white backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-200' : 'text-white bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center h-full">
        {/* <div className="text-xl font-bold"></div> */}
        <img src={logo} alt="Logo" className="h-10 w-auto object-contain rounded" />
        <div className="space-x-6">
          <button onClick={goToHome} className={`px-4 py-2 rounded hover:text-white hover:bg-blue-600 transition ${
            isScrolled ? 'text-gray-300':'text-gray-300'
          }`}>
            Home
          </button>
          <button onClick={() => scrollToSection('about')} className={`px-4 py-2 rounded hover:text-white hover:bg-blue-600 transition ${
            isScrolled ? 'text-gray-300':'text-gray-300'
          }`}>
            About
          </button>
          <button onClick={goToCart} className={`px-4 py-2 rounded hover:text-white hover:bg-blue-600 transition ${
            isScrolled ? 'text-gray-300':'text-gray-300'
          }`}>
            Cart
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
