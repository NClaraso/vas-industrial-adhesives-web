
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-vas-dark text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">
              VAS <span className="text-vas-bronze">Industrial</span>
            </h3>
            <p className="text-sm text-gray-300 mb-4">
              Fabricante español de adhesivos hot melt para sectores industriales como packaging, madera, automoción, higiene y ensamblaje técnico.
            </p>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-400 hover:text-vas-bronze transition-colors duration-200">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-vas-bronze transition-colors duration-200 flex items-center">
                  <ArrowRight className="w-3.5 h-3.5 mr-2" />
                  <span>Inicio</span>
                </Link>
              </li>
              <li>
                <Link to="/sobre-nosotros" className="text-gray-300 hover:text-vas-bronze transition-colors duration-200 flex items-center">
                  <ArrowRight className="w-3.5 h-3.5 mr-2" />
                  <span>Sobre Nosotros</span>
                </Link>
              </li>
              <li>
                <Link to="/productos" className="text-gray-300 hover:text-vas-bronze transition-colors duration-200 flex items-center">
                  <ArrowRight className="w-3.5 h-3.5 mr-2" />
                  <span>Productos</span>
                </Link>
              </li>
              <li>
                <Link to="/ventajas" className="text-gray-300 hover:text-vas-bronze transition-colors duration-200 flex items-center">
                  <ArrowRight className="w-3.5 h-3.5 mr-2" />
                  <span>Ventajas</span>
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-gray-300 hover:text-vas-bronze transition-colors duration-200 flex items-center">
                  <ArrowRight className="w-3.5 h-3.5 mr-2" />
                  <span>Contacto</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Productos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/productos#packaging" className="text-gray-300 hover:text-vas-bronze transition-colors duration-200 flex items-center">
                  <ArrowRight className="w-3.5 h-3.5 mr-2" />
                  <span>Packaging y Embalaje</span>
                </Link>
              </li>
              <li>
                <Link to="/productos#madera" className="text-gray-300 hover:text-vas-bronze transition-colors duration-200 flex items-center">
                  <ArrowRight className="w-3.5 h-3.5 mr-2" />
                  <span>Industria de la Madera</span>
                </Link>
              </li>
              <li>
                <Link to="/productos#higiene" className="text-gray-300 hover:text-vas-bronze transition-colors duration-200 flex items-center">
                  <ArrowRight className="w-3.5 h-3.5 mr-2" />
                  <span>Higiene y No-tejidos</span>
                </Link>
              </li>
              <li>
                <Link to="/productos#automocion" className="text-gray-300 hover:text-vas-bronze transition-colors duration-200 flex items-center">
                  <ArrowRight className="w-3.5 h-3.5 mr-2" />
                  <span>Automoción</span>
                </Link>
              </li>
              <li>
                <Link to="/productos#ensamblaje" className="text-gray-300 hover:text-vas-bronze transition-colors duration-200 flex items-center">
                  <ArrowRight className="w-3.5 h-3.5 mr-2" />
                  <span>Ensamblaje Técnico</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-vas-bronze mr-3 mt-0.5" />
                <span className="text-gray-300">
                  Polígono Industrial, Segovia, España
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-vas-bronze mr-3" />
                <a href="tel:+34900000000" className="text-gray-300 hover:text-vas-bronze transition-colors duration-200">
                  +34 900 000 000
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-vas-bronze mr-3" />
                <a href="mailto:info@vasindustrial.es" className="text-gray-300 hover:text-vas-bronze transition-colors duration-200">
                  info@vasindustrial.es
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-8 border-gray-800" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © {currentYear} VAS Industrial. Todos los derechos reservados.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6 text-sm">
              <li>
                <a href="#" className="text-gray-400 hover:text-vas-bronze transition-colors duration-200">
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-vas-bronze transition-colors duration-200">
                  Aviso Legal
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-vas-bronze transition-colors duration-200">
                  Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
