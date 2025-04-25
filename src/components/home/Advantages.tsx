
import React from 'react';
import { cn } from '@/lib/utils';

const advantages = [
  {
    title: 'Flexibilidad',
    description: 'Adaptamos la producción a sus necesidades específicas, ofreciendo soluciones personalizadas y volúmenes de producción ajustados a sus requisitos.',
    color: 'bg-gray-50',
    number: '01',
  },
  {
    title: 'Desarrollo técnico propio',
    description: 'Nuestro equipo de I+D trabaja continuamente en el desarrollo de nuevas formulaciones para satisfacer las demandas más exigentes del mercado.',
    color: 'bg-vas-gray',
    textColor: 'text-white',
    number: '02',
  },
  {
    title: 'Alta calidad constante',
    description: 'Procesos de producción controlados y materias primas seleccionadas para garantizar adhesivos con propiedades constantes y fiables.',
    color: 'bg-vas-bronze/10',
    number: '03',
  },
  {
    title: 'Entrega ágil',
    description: 'Optimizamos nuestra cadena de suministro para ofrecer tiempos de entrega reducidos, respondiendo rápidamente a sus necesidades productivas.',
    color: 'bg-vas-bronze',
    textColor: 'text-white',
    number: '04',
  },
  {
    title: 'Producción local',
    description: 'Fabricación 100% nacional en nuestras instalaciones de Segovia, lo que nos permite ofrecer un servicio cercano y personalizado.',
    color: 'bg-gray-100',
    number: '05',
  },
];

const Advantages = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-6">¿Por qué elegir VAS Industrial?</h2>
          <p className="text-lg text-gray-600">
            Descubra las ventajas de trabajar con un fabricante español especializado en adhesivos industriales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((advantage, index) => (
            <div 
              key={index}
              className={cn(
                "rounded-lg p-8 relative overflow-hidden group transition-all hover:shadow-lg",
                advantage.color,
                advantage.textColor || 'text-vas-dark'
              )}
            >
              <span className="block text-6xl font-bold opacity-10 absolute -bottom-6 -right-2 transition-opacity group-hover:opacity-20">
                {advantage.number}
              </span>
              <h3 className="text-xl font-bold mb-4 relative z-10">{advantage.title}</h3>
              <p className={cn(
                "relative z-10", 
                advantage.textColor === 'text-white' ? 'text-gray-200' : 'text-gray-600'
              )}>
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
