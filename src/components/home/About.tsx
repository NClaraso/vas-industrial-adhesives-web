
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Factory, Check } from 'lucide-react';

const About = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-vas-muted/10 text-vas-muted mb-6">
              <Factory className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Fabricante español</span>
            </div>
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
                <span className="text-gray-700">Fábrica propia en Segovia con producción 100% nacional</span>
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
              <div className="absolute inset-0 bg-gradient-to-br from-vas-bronze/20 to-vas-dark/80"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white/90 text-xl font-heading">Imagen de fábrica</span>
              </div>
            </div>
            <div className="absolute -bottom-8 -left-8 w-3/4 aspect-video bg-vas-dark rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-vas-bronze/20 to-vas-dark/80"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white/90 text-xl font-heading">Imagen de producto</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
