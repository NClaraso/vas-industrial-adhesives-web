
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ArrowRight, Package } from 'lucide-react';

const products = [
  {
    id: 'packaging',
    title: 'Packaging y Embalaje',
    description: 'Adhesivos hot melt para cerrado de cajas, formado de bandejas y conformado y montaje de estuches en la industria del packaging.',
    color: 'bg-gray-50', // Lightest gray
    textColor: 'text-vas-dark',
    icon: <Package className="w-8 h-8 text-vas-bronze" />,
  },
  {
    id: 'encuadernacion',
    title: 'Encuadernación',
    description: 'Adhesivos hot melt para encolado de volúmenes cosidos o fresados, encolado de cortesía, catálogos, revistas, dossiers con excelente adhesión.',
    color: 'bg-gray-100', // Light gray
    textColor: 'text-vas-dark',
    icon: <Package className="w-8 h-8 text-vas-bronze" />,
  },
  {
    id: 'embalaje-flexible',
    title: 'Embalaje Flexible',
    description: 'Adhesivos hot melt para la fabricación en banderolaje de envases tipo yogurt y para termosellado de productos alimenticios.',
    color: 'bg-gray-200', // Medium gray
    textColor: 'text-vas-dark',
    icon: <Package className="w-8 h-8 text-vas-bronze" />,
  },
  {
    id: 'laminacion',
    title: 'Adhesivos para Laminación y Recubrimientos',
    description: 'Adhesivos hot melt para protección de envases celulósicos y laminaciones con efecto barrera.',
    color: 'bg-gray-100', // Light gray
    textColor: 'text-vas-dark',
    icon: <Package className="w-8 h-8 text-vas-bronze" />,
  },
  {
    id: 'etiquetado',
    title: 'Etiquetado',
    description: 'Adhesivos hot melt con alto poder de adhesión sobre etiquetas de papel, papel plastificado para máquinas automáticas.',
    color: 'bg-gray-200', // Medium gray
    textColor: 'text-vas-dark',
    icon: <Package className="w-8 h-8 text-vas-bronze" />,
  },
  {
    id: 'aplicaciones-tecnicas',
    title: 'Aplicaciones Industriales y Técnicas',
    description: 'Adhesivos hot melt especialmente diseñados para las más exigentes aplicaciones técnicas en todo tipo de industrias.',
    color: 'bg-gray-100', // Light gray
    textColor: 'text-vas-dark',
    icon: <Package className="w-8 h-8 text-vas-bronze" />,
  },
];

const ProductSection = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-6">Nuestros productos para cada sector industrial</h2>
          <p className="text-lg text-gray-600">
            Desarrollamos adhesivos hot melt específicos para diferentes aplicaciones industriales, garantizando un rendimiento óptimo en cada sector.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div 
              key={product.id}
              className={cn(
                "rounded-lg p-8 transition-transform hover:shadow-lg hover:-translate-y-1 flex flex-col justify-between",
                product.color,
                product.textColor
              )}
            >
              <div>
                <div className="mb-4">{product.icon}</div>
                <h3 className="text-xl font-bold mb-3">{product.title}</h3>
                <p className="mb-6 text-gray-600">
                  {product.description}
                </p>
              </div>
              <div>
                <Button 
                  asChild 
                  className="font-medium bg-vas-bronze text-white hover:bg-white hover:text-vas-bronze transition-colors"
                >
                  <Link to={`/productos#${product.id}`}>
                    Ver más
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline" className="border-vas-bronze text-vas-bronze hover:bg-vas-bronze hover:text-white">
            <Link to="/productos">Ver todos los productos</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
