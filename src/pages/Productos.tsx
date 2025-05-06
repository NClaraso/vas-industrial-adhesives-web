import React from 'react';
import Layout from '@/components/Layout';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Package } from 'lucide-react';
const industryProducts = [{
  id: 'packaging',
  title: 'Packaging y Embalaje',
  description: 'Adhesivos hot melt para la industria del packaging y embalaje, ideales para cerrado de cajas, formado de bandejas y encolado de estuches.',
  applications: ['Cerrado de cajas de cartón', 'Encolado de estuches', 'Adhesivos para etiquetas', 'Formación de bandejas', 'Packaging alimentario'],
  bgColor: 'bg-vas-gray'
}, {
  id: 'madera',
  title: 'Industria de la Madera',
  description: 'Soluciones adhesivas para la industria del mueble y la madera, con aplicaciones en encolado de cantos, recubrimiento de perfiles y montaje.',
  applications: ['Encolado de cantos', 'Recubrimiento de perfiles', 'Montaje de muebles', 'Uniones de madera', 'Laminación de superficies'],
  bgColor: 'bg-white'
}, {
  id: 'higiene',
  title: 'Higiene y No-tejidos',
  description: 'Adhesivos especializados para la fabricación de productos de higiene personal y aplicaciones en materiales no-tejidos.',
  applications: ['Pañales y productos de incontinencia', 'Productos femeninos', 'Toallitas húmedas', 'Productos médicos desechables', 'Tejidos técnicos'],
  bgColor: 'bg-gray-50'
}, {
  id: 'automocion',
  title: 'Automoción',
  description: 'Adhesivos hot melt de alto rendimiento para aplicaciones en la industria automotriz y fabricación de componentes.',
  applications: ['Insonorización y antivibraciones', 'Montaje de componentes interiores', 'Unión de textiles y espumas', 'Sellado y protección', 'Fijación de cables'],
  bgColor: 'bg-white'
}, {
  id: 'ensamblaje',
  title: 'Ensamblaje Técnico',
  description: 'Soluciones para uniones técnicamente exigentes en diversos procesos industriales de ensamblaje y fabricación.',
  applications: ['Montaje de componentes electrónicos', 'Unión de plásticos técnicos', 'Aplicaciones de aislamiento', 'Fijación de componentes', 'Industria de electrodomésticos'],
  bgColor: 'bg-gray-50'
}];
const Productos = () => {
  return <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-vas-dark text-white relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute w-full h-full bg-[radial-gradient(#C87941_1px,transparent_1px)] [background-size:40px_40px]"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="heading-xl mb-6">Nuestros productos</h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Descubra nuestra gama de adhesivos hot melt desarrollados específicamente para diferentes sectores industriales y aplicaciones.
            </p>
          </div>
        </div>
      </section>

      {/* Products Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            
            <h2 className="heading-lg mb-6">
              Soluciones adhesivas para <span className="text-vas-bronze">cada industria</span>
            </h2>
            <p className="text-lg text-gray-600">
              Desarrollamos adhesivos hot melt adaptados a los requisitos específicos de cada sector industrial, combinando propiedades técnicas y facilidad de aplicación.
            </p>
          </div>

          <div className="space-y-20">
            {industryProducts.map((industry, index) => <section key={industry.id} id={industry.id} className={`pt-10 pb-10 ${industry.bgColor} rounded-lg`}>
                <div className="container-custom">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className={`order-${index % 2 === 0 ? '1' : '2'} lg:order-1`}>
                      <h2 className="heading-md mb-6">
                        {industry.title}
                      </h2>
                      <p className="text-lg mb-6 leading-relaxed text-white">
                        {industry.description}
                      </p>
                      <h3 className="text-lg font-semibold mb-4">Aplicaciones principales:</h3>
                      <ul className="space-y-3 mb-8">
                        {industry.applications.map((app, idx) => <li key={idx} className="flex items-center">
                            <span className="flex-shrink-0 w-1.5 h-1.5 bg-vas-bronze rounded-full mr-3"></span>
                            <span className="text-inherit">{app}</span>
                          </li>)}
                      </ul>
                      <Button asChild className="bg-vas-bronze hover:bg-vas-bronze/90 text-white">
                        <Link to="/contacto">
                          Solicitar información
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                    <div className={`order-${index % 2 === 0 ? '2' : '1'} lg:order-2 relative`}>
                      <div className="aspect-square rounded-lg overflow-hidden bg-vas-gray">
                        <div className="absolute inset-0 bg-gradient-to-br from-vas-bronze/20 to-vas-dark/80"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-white/90 text-xl font-heading">Imagen de {industry.title}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>)}
          </div>
        </div>
      </section>

      {/* Custom Solutions */}
      <section className="py-20 bg-vas-dark text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute w-full h-full bg-[radial-gradient(#C87941_1px,transparent_1px)] [background-size:40px_40px]"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-lg mb-6">
                Soluciones adhesivas <span className="text-vas-bronze">a medida</span>
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Si no encuentra el adhesivo hot melt que necesita para su aplicación específica, nuestro equipo técnico puede desarrollar una solución personalizada adaptada a sus requisitos particulares.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Contacte con nosotros para analizar su caso y trabajar juntos en el desarrollo de un adhesivo que responda exactamente a sus necesidades.
              </p>
              <Button asChild size="lg" className="bg-vas-bronze hover:bg-vas-bronze/90 text-white">
                <Link to="/contacto">
                  Consultar desarrollo a medida
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-lg overflow-hidden bg-vas-gray">
                <div className="absolute inset-0 bg-gradient-to-br from-vas-bronze/20 to-vas-dark/80"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white/90 text-xl font-heading">Imagen de laboratorio/desarrollo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>;
};
export default Productos;