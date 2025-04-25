
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: 'Inicio', to: '/' },
    { name: 'Sobre Nosotros', to: '/sobre-nosotros' },
    { name: 'Productos', to: '/productos' },
    { name: 'Ventajas', to: '/ventajas' },
    { name: 'Contacto', to: '/contacto' },
  ];

  return (
    <header 
      className={cn(
        'fixed w-full z-50 transition-all duration-300',
        isScrolled ? 'bg-vas-dark/95 py-3 shadow-md backdrop-blur-sm' : 'bg-transparent py-5'
      )}
    >
      <nav className="container-custom flex items-center justify-between">
        <Link to="/" className="z-50" onClick={closeMenu}>
          <div className="flex items-center">
            <span className="text-xl md:text-2xl font-heading font-bold text-white">
              VAS <span className="text-vas-bronze">Industrial</span>
            </span>
          </div>
        </Link>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu}
          className="lg:hidden z-50 text-white"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              className={cn(
                'font-medium text-white hover:text-vas-bronze transition-colors duration-200',
                (link.to === '/' && window.location.pathname === '/') ||
                (link.to !== '/' && window.location.pathname.includes(link.to))
                  ? 'text-vas-bronze'
                  : ''
              )}
            >
              {link.name}
            </Link>
          ))}
          <Button 
            asChild 
            variant="outline" 
            className="font-medium border-vas-bronze text-vas-bronze hover:bg-vas-bronze hover:text-white"
          >
            <Link to="/contacto">Solicitar información</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            'fixed inset-0 bg-vas-dark/98 flex flex-col items-center justify-center gap-8 transition-all duration-300 lg:hidden',
            isMenuOpen ? 'opacity-100 visible z-40' : 'opacity-0 invisible -z-10'
          )}
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              className={cn(
                'text-xl font-medium text-white hover:text-vas-bronze transition-colors duration-200',
                (link.to === '/' && window.location.pathname === '/') ||
                (link.to !== '/' && window.location.pathname.includes(link.to))
                  ? 'text-vas-bronze'
                  : ''
              )}
              onClick={closeMenu}
            >
              {link.name}
            </Link>
          ))}
          <Button 
            asChild 
            variant="outline" 
            className="mt-4 font-medium border-vas-bronze text-vas-bronze hover:bg-vas-bronze hover:text-white"
          >
            <Link to="/contacto" onClick={closeMenu}>Solicitar información</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
