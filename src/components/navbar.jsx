import React, { useState, useRef, useEffect } from 'react';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  const langMenuRef = useRef(null);

  // Close language menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (langMenuRef.current && !langMenuRef.current.contains(e.target)) {
        setLangMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="w-full bg-gradient-to-r from-yellow-400 to-orange-400 shadow-lg">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between relative">
        {/* Logo */}
        <div className="text-white font-bold text-xl">Shirin</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 uppercase font-semibold text-white">
          <li><a href="#home" className="hover:underline">Домой</a></li>
          <li><a href="#products" className="hover:underline">Продукты</a></li>
          <li><a href="#about" className="hover:underline">О нас</a></li>
          <li><a href="#contact" className="hover:underline">Контакты</a></li>
        </ul>

        {/* Language Switcher */}
        <div ref={langMenuRef} className="relative hidden md:block">
          <button
            onClick={() => setLangMenuOpen(!langMenuOpen)}
            className="ml-4 focus:outline-none"
          >
            <img
              src="/language-icon.png"
              alt="Language"
              className="w-6 h-6"
            />
          </button>
          {langMenuOpen && (
            <ul className="absolute right-0 mt-2 w-32 bg-white shadow-md rounded-md text-sm z-50">
              <li className="px-4 py-2 hover:bg-yellow-300 cursor-pointer font-bold">English</li>
              <li className="px-4 py-2 hover:bg-yellow-300 cursor-pointer font-bold">Русский</li>
              <li className="px-4 py-2 hover:bg-yellow-300 cursor-pointer font-bold">O'zbekcha</li>
            </ul>
          )}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden flex flex-col justify-between h-6 w-8 focus:outline-none"
          onClick={() => setNavOpen(!navOpen)}
        >
          <span className="block w-8 h-1 bg-white rounded-sm"></span>
          <span className="block w-8 h-1 bg-white rounded-sm"></span>
          <span className="block w-8 h-1 bg-white rounded-sm"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {navOpen && (
        <ul className="flex flex-col gap-4 items-center bg-gradient-to-r from-yellow-400 to-orange-400 py-4 md:hidden uppercase font-semibold text-white">
          <li><a href="#home" onClick={() => setNavOpen(false)}>Домой</a></li>
          <li><a href="#products" onClick={() => setNavOpen(false)}>Продукты</a></li>
          <li><a href="#about" onClick={() => setNavOpen(false)}>О нас</a></li>
          <li><a href="#contact" onClick={() => setNavOpen(false)}>Контакты</a></li>
          {/* Language Switcher for Mobile */}
          <div ref={langMenuRef} className="relative">
            <button
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="focus:outline-none mt-2"
            >
              <img
                src="/language-icon.png"
                alt="Language"
                className="w-6 h-6"
              />
            </button>
            {langMenuOpen && (
              <ul className="absolute right-0 mt-2 w-32 bg-white shadow-md rounded-md text-sm z-50">
                <li className="px-4 py-2 hover:bg-yellow-300 cursor-pointer font-bold">English</li>
                <li className="px-4 py-2 hover:bg-yellow-300 cursor-pointer font-bold">Русский</li>
                <li className="px-4 py-2 hover:bg-yellow-300 cursor-pointer font-bold">O'zbekcha</li>
              </ul>
            )}
          </div>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
