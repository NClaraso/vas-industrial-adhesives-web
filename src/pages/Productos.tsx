import React from 'react';
import Layout from '@/components/Layout';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Package } from 'lucide-react';
const industryProducts = [{
  id: 'packaging',
  title: 'Packaging y Embalaje',
  description: 'Adhesivos hot melt para cerrado de cajas, formado de bandejas y conformado y montaje de estuches en la industria del packaging.',
  applications: ['Cerrado de cajas de cartón', 'Conformado y cierre de estuches', 'Packaging en general'],
  bgColor: 'bg-vas-gray',
  image: '/lovable-uploads/fad9b0d0-bff6-4013-a4a4-481c21936615.png',
  alt: 'Cajas de cartón en una cinta transportadora en una fábrica de packaging'
}, {
  id: 'encuadernacion',
  title: 'Encuadernación',
  description: 'Adhesivos hot melt para encolado de volúmenes cosidos o fresados, encolado de cortesía, catálogos, revistas, dossiers con excelente adhesión.',
  applications: ['Encolado de lomos fresados o cosidos, en rústica y todo tipo de máquinas', 'Unión de laterales y pegados de cortesía en libros, revistas'],
  bgColor: 'bg-white',
  image: '/lovable-uploads/c2e0bec5-ea8a-4794-991f-473cf5c74c2b.png',
  alt: 'Trabajo de precisión en madera con herramienta industrial'
}, {
  id: 'embalaje-flexible',
  title: 'Embalaje Flexible',
  description: 'Adhesivos hot melt para la fabricación en banderolaje de envases tipo yogurt y para termosellado de productos alimenticios.',
  applications: ['Fabricación en banderolaje de envases tipo yogurt', 'Aplicaciones de termosellados de productos alimenticios'],
  bgColor: 'bg-gray-50',
  image: '/lovable-uploads/c98aa73f-f959-444c-9e98-f1d3b8b789e0.png',
  alt: 'Rollos de material no tejido en una instalación industrial de productos de higiene'
}, {
  id: 'laminacion',
  title: 'Adhesivos para Laminación y Recubrimientos',
  description: 'Adhesivos hot melt para protección de envases celulósicos y laminaciones con efecto barrera.',
  applications: ['Protección de envases celulósicos con efecto barrera', 'Recubrimientos para papel con excelente resistencia a la humedad y la abrasión'],
  bgColor: 'bg-white',
  image: '/lovable-uploads/4e95326e-0ba7-442f-9197-f0b33ab63daa.png',
  alt: 'Automóvil en una línea de producción con brazos robóticos'
}, {
  id: 'etiquetado',
  title: 'Etiquetado',
  description: 'Adhesivos hot melt con alto poder de adhesión sobre etiquetas de papel, papel plastificado para máquinas automáticas.',
  applications: ['Etiquetado de latas metálicas y tarros de vidrio', 'Etiquetado de todo tipo de envase PET, PP y HDPE'],
  bgColor: 'bg-gray-50',
  image: '/lovable-uploads/e459fccd-a325-473c-a138-9747eb824bdb.png',
  alt: 'Componente electrónico con acabado metálico y esferas en superficie'
}, {
  id: 'aplicaciones-tecnicas',
  title: 'Aplicaciones Industriales y Técnicas',
  description: 'Adhesivos hot melt especialmente diseñados para las más exigentes aplicaciones técnicas en todo tipo de industrias.',
  applications: ['Fabricación de colchones', 'Fabricación de filtros de aire', 'Unión de fibras o hilos en fabricación de flejes'],
  bgColor: 'bg-white',
  image: '/lovable-uploads/e459fccd-a325-473c-a138-9747eb824bdb.png',
  alt: 'Componente industrial en proceso de fabricación'
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
            {industryProducts.map((industry, index) => <section key={industry.id} id={industry.id} className="">
                <div className="container-custom">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className={`order-${index % 2 === 0 ? '1' : '2'} lg:order-1`}>
                      <h2 className="heading-md mb-6">
                        {industry.title}
                      </h2>
                      
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
                        <div className="absolute inset-0 bg-gradient-to-br from-vas-bronze/20 to-vas-dark/80 opacity-40"></div>
                        <img src={industry.image} alt={industry.alt} className="w-full h-full object-cover" />
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
          <div className="max-w-4xl mx-auto">
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
        </div>
      </section>
    </Layout>;
};
export default Productos;