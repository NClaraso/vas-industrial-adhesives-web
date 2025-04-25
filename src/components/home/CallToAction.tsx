
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-20 bg-vas-dark text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute w-full h-full bg-[radial-gradient(#C87941_1px,transparent_1px)] [background-size:40px_40px]"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-lg mb-6">¿Necesita una solución adhesiva para su industria?</h2>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            Nuestro equipo técnico está preparado para desarrollar el adhesivo hot melt que su proceso industrial necesita. Contacte con nosotros para recibir asesoramiento personalizado.
          </p>
          <Button 
            asChild 
            size="lg" 
            className="bg-vas-bronze hover:bg-vas-bronze/90 text-white"
          >
            <Link to="/contacto">
              Solicitar información
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
