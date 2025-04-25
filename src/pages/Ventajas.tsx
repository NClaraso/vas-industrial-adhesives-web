
import React from 'react';
import Layout from '@/components/Layout';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';

const advantages = [
  {
    title: 'Flexibilidad',
    description: 'Nuestra producción adaptable nos permite ajustarnos a sus necesidades específicas.',
    details: [
      'Lotes de producción adaptados a sus necesidades',
      'Capacidad para atender pedidos urgentes',
      'Ajuste de propiedades según sus requisitos',
      'Adaptación a los cambios en sus procesos productivos',
    ],
    image: 'flexible-production.jpg',
    bgColor: 'bg-white',
  },
  {
    title: 'Desarrollo técnico propio',
    description: 'Equipo de I+D dedicado a la creación de soluciones adhesivas innovadoras.',
    details: [
      'Laboratorio equipado con tecnología avanzada',
      'Equipo de químicos especializados',
      'Desarrollo continuo de nuevas formulaciones',
      'Capacidad de resolución de problemas específicos',
    ],
    image: 'technical-development.jpg',
    bgColor: 'bg-gray-50',
  },
  {
    title: 'Alta calidad constante',
    description: 'Estrictos controles de calidad que garantizan un producto fiable y consistente.',
    details: [
      'Control de calidad en cada lote de producción',
      'Selección rigurosa de materias primas',
      'Procesos productivos estandarizados',
      'Trazabilidad completa de los productos',
    ],
    image: 'quality-control.jpg',
    bgColor: 'bg-white',
  },
  {
    title: 'Entrega ágil',
    description: 'Optimización logística para reducir tiempos de entrega y responder rápidamente.',
    details: [
      'Gestión eficiente de la cadena de suministro',
      'Stock estratégico de productos más demandados',
      'Servicio de entrega urgente disponible',
      'Planificación de entregas según sus necesidades',
    ],
    image: 'fast-delivery.jpg',
    bgColor: 'bg-gray-50',
  },
  {
    title: 'Producción local',
    description: 'Fabricación 100% española en nuestras instalaciones de Segovia.',
    details: [
      'Reducción de la huella de carbono en transporte',
      'Apoyo a la economía local y nacional',
      'Comunicación directa y sin barreras',
      'Visitas a fábrica disponibles para clientes',
    ],
    image: 'local-production.jpg',
    bgColor: 'bg-white',
  },
];

const Ventajas = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-vas-dark text-white relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute w-full h-full bg-[radial-gradient(#C87941_1px,transparent_1px)] [background-size:40px_40px]"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="heading-xl mb-6">Nuestras ventajas</h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Descubra por qué elegir VAS Industrial como su proveedor de adhesivos hot melt para aplicaciones industriales.
            </p>
          </div>
        </div>
      </section>

      {/* Advantages Detail */}
      <section>
        <div className="container-custom">
          {advantages.map((advantage, index) => (
            <div 
              key={index} 
              className={`py-20 ${advantage.bgColor}`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className={index % 2 === 1 ? 'order-2 lg:order-1' : ''}>
                  <h2 className="heading-md mb-6">
                    {advantage.title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {advantage.description}
                  </p>
                  <ul className="space-y-4 mb-8">
                    {advantage.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="flex-shrink-0 bg-vas-bronze/10 p-1 rounded-full mr-3 mt-1">
                          <Check className="h-4 w-4 text-vas-bronze" />
                        </span>
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 1 ? 'order-1 lg:order-2' : ''}>
                  <div className="aspect-square rounded-lg overflow-hidden bg-vas-gray">
                    <div className="absolute inset-0 bg-gradient-to-br from-vas-bronze/20 to-vas-dark/80"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white/90 text-xl font-heading">Imagen de {advantage.title}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-vas-dark text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute w-full h-full bg-[radial-gradient(#C87941_1px,transparent_1px)] [background-size:40px_40px]"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-lg mb-6">¿Listo para experimentar estas ventajas?</h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Contacte con nuestro equipo para descubrir cómo nuestros adhesivos hot melt pueden optimizar sus procesos industriales.
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
    </Layout>
  );
};

export default Ventajas;
