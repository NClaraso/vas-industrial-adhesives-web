import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Factory, Check } from 'lucide-react';
const About = () => {
  return <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            
            <h2 className="heading-lg mb-6">
              Expertos en <span className="text-vas-bronze">adhesivos hot melt</span> para aplicaciones industriales
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              En VAS Industrial, combinamos nuestra experiencia técnica y una producción ágil para ofrecer soluciones adhesivas de alta calidad adaptadas a las necesidades específicas de cada cliente.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="flex-shrink-0 bg-vas-bronze/10 p-1 rounded-full mr-3 mt-1">
                  <Check className="h-4 w-4 text-vas-bronze" />
                </span>
                <span className="text-gray-700">Instalaciones propias en Segovia con producción 100% nacional</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 bg-vas-bronze/10 p-1 rounded-full mr-3 mt-1">
                  <Check className="h-4 w-4 text-vas-bronze" />
                </span>
                <span className="text-gray-700">Equipo técnico con amplia experiencia en la industria</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 bg-vas-bronze/10 p-1 rounded-full mr-3 mt-1">
                  <Check className="h-4 w-4 text-vas-bronze" />
                </span>
                <span className="text-gray-700">Desarrollo de adhesivos personalizados para cada aplicación</span>
              </li>
            </ul>
            <Button asChild className="bg-vas-bronze hover:bg-vas-bronze/90 text-white">
              <Link to="/sobre-nosotros">Conocer más sobre nosotros</Link>
            </Button>
          </div>
          
          <div className="relative">
            <div className="aspect-square overflow-hidden rounded-lg bg-vas-gray">
              <div className="absolute inset-0 bg-gradient-to-br from-vas-bronze/20 to-vas-dark/80 opacity-40"></div>
              <img src="/lovable-uploads/389400c6-1e51-4ae1-9e32-588140e71e3c.png" alt="Interior de un almacén con cajas y palets" className="w-full h-full object-cover" />
            </div>
            
          </div>
        </div>
      </div>
    </section>;
};
export default About;