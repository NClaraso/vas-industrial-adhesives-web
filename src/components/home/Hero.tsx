import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
const Hero = () => {
  return <section className="relative bg-vas-dark min-h-screen flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute w-full h-full bg-[radial-gradient(#C87941_1px,transparent_1px)] [background-size:40px_40px]"></div>
      </div>
      
      {/* Content */}
      <div className="container-custom relative z-10 pt-20">
        <div className="max-w-3xl mx-auto md:mx-0">
          <h1 className="heading-xl text-white mb-6">
            <span className="text-vas-bronze">Adhesivos Hot Melt</span> para la industria
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">Somos fabricantes de adhesivos hot melt de alta calidad para sectores industriales como packaging, etiquetado, encuadernación,embalaje flexible, laminación de papel y aplicaciones técnicas.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-vas-bronze hover:bg-vas-bronze/90 text-white">
              <Link to="/contacto">
                Solicitar información
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-vas-bronze bg-white text-vas-bronze hover:bg-white/90 hover:border-vas-bronze/80">
              <Link to="/productos">
                Ver productos
              </Link>
            </Button>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="bg-vas-gray/50 backdrop-blur-sm border border-white/10 p-6 rounded-lg">
              <h3 className="text-vas-bronze font-semibold text-lg mb-2">Confianza</h3>
              <p className="text-gray-300">Adhesivos de calidad constante que aseguran un rendimiento óptimo en cada aplicación industrial.</p>
            </div>
            <div className="bg-vas-gray/50 backdrop-blur-sm border border-white/10 p-6 rounded-lg">
              <h3 className="text-vas-bronze font-semibold text-lg mb-2">Innovación</h3>
              <p className="text-gray-300">Desarrollo técnico continuo adaptado a las necesidades específicas de cada sector industrial.</p>
            </div>
            <div className="bg-vas-gray/50 backdrop-blur-sm border border-white/10 p-6 rounded-lg">
              <h3 className="text-vas-bronze font-semibold text-lg mb-2">Agilidad</h3>
              <p className="text-gray-300">Producción flexible y entregas rápidas que se adaptan a los requisitos de su cadena de producción.</p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;