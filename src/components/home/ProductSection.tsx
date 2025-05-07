
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ArrowRight, Package } from 'lucide-react';

const products = [
  {
    id: 'packaging',
    title: 'Packaging y Embalaje',
    description: 'Adhesivos hot melt para cerrado de cajas, formado de bandejas y encolado de estuches en la industria del packaging.',
    color: 'bg-gray-50', // Lightest gray
    textColor: 'text-vas-dark',
    icon: <Package className="w-8 h-8 text-vas-bronze" />,
  },
  {
    id: 'madera',
    title: 'Industria de la Madera',
    description: 'Soluciones adhesivas para encolado de cantos, recubrimiento de perfiles y montaje de muebles.',
    color: 'bg-gray-100', // Light gray
    textColor: 'text-vas-dark',
    icon: <Package className="w-8 h-8 text-vas-bronze" />,
  },
  {
    id: 'higiene',
    title: 'Higiene y No-tejidos',
    description: 'Adhesivos especializados para la fabricación de productos de higiene personal y no-tejidos.',
    color: 'bg-gray-200', // Medium gray
    textColor: 'text-vas-dark',
    icon: <Package className="w-8 h-8 text-vas-bronze" />,
  },
  {
    id: 'automocion',
    title: 'Automoción',
    description: 'Adhesivos de alto rendimiento para aplicaciones en la industria automotriz y componentes.',
    color: 'bg-gray-300', // Dark gray
    textColor: 'text-vas-dark',
    icon: <Package className="w-8 h-8 text-vas-bronze" />,
  },
  {
    id: 'ensamblaje',
    title: 'Ensamblaje Técnico',
    description: 'Soluciones para uniones técnicamente exigentes en diversos procesos industriales.',
    color: 'bg-gray-400', // Darker gray but not too dark
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
