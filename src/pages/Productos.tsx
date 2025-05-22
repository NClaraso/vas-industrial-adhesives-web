
import React from 'react';
import Layout from '@/components/Layout';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Package } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const industryProducts = [{
  id: 'packaging',
  title: 'Packaging y Embalaje',
  description: 'Adhesivos hot melt para cerrado de cajas, formado de bandejas y conformado y montaje de estuches en la industria del packaging.',
  applications: ['Cerrado de cajas de cartón', 'Conformado y cierre de estuches', 'Packaging en general'],
  bgColor: 'bg-vas-gray',
  image: '/lovable-uploads/27b3d2da-6272-4282-924e-c625e35be927.png',
  alt: 'Línea de producción industrial con dispensadores aplicando adhesivo en cajas de cartón'
}, {
  id: 'encuadernacion',
  title: 'Encuadernación',
  description: 'Adhesivos hot melt para encolado de volúmenes cosidos o fresados, encolado de cortesía, catálogos, revistas, dossiers con excelente adhesión.',
  applications: ['Encolado de lomos fresados o cosidos, en rústica y todo tipo de máquinas', 'Unión de laterales y pegados de cortesía en libros, revistas'],
  bgColor: 'bg-white',
  image: '/lovable-uploads/fe96b210-9c1a-42e3-bbb2-8e74312d6567.png',
  alt: 'Proceso de encuadernación con una máquina de precisión láser sobre un libro'
}, {
  id: 'embalaje-flexible',
  title: 'Embalaje Flexible',
  description: 'Adhesivos hot melt para la fabricación en banderolaje de envases tipo yogurt y para termosellado de productos alimenticios.',
  applications: ['Fabricación en banderolaje de envases tipo yogurt', 'Aplicaciones de termosellados de productos alimenticios'],
  bgColor: 'bg-gray-50',
  image: '/lovable-uploads/9366a211-6381-4bff-8dd5-113039145175.png',
  alt: 'Línea de producción con envases de plástico blancos para productos alimenticios'
}, {
  id: 'laminacion',
  title: 'Adhesivos para Laminación y Recubrimientos',
  description: 'Adhesivos hot melt para protección de envases celulósicos y laminaciones con efecto barrera.',
  applications: ['Protección de envases celulósicos con efecto barrera', 'Recubrimientos para papel con excelente resistencia a la humedad y la abrasión'],
  bgColor: 'bg-white',
  image: '/lovable-uploads/ee978a78-43bf-4b20-a01b-dc489499d3b9.png',
  alt: 'Proceso de laminación industrial con papel pasando por rodillos'
}, {
  id: 'etiquetado',
  title: 'Etiquetado',
  description: 'Adhesivos hot melt con alto poder de adhesión sobre etiquetas de papel, papel plastificado para máquinas automáticas.',
  applications: ['Etiquetado de latas metálicas y tarros de vidrio', 'Etiquetado de todo tipo de envase PET, PP y HDPE'],
  bgColor: 'bg-gray-50',
  image: '/lovable-uploads/5b02870e-6f92-455c-800a-4386f947ef27.png',
  alt: 'Proceso de aplicación de adhesivo en tarros para etiquetado'
}, {
  id: 'aplicaciones-tecnicas',
  title: 'Aplicaciones Industriales y Técnicas',
  description: 'Adhesivos hot melt especialmente diseñados para las más exigentes aplicaciones técnicas en todo tipo de industrias.',
  applications: ['Fabricación de colchones', 'Fabricación de filtros de aire', 'Unión de fibras o hilos en fabricación de flejes'],
  bgColor: 'bg-white',
  image: '/lovable-uploads/ef150d8d-0c27-4240-8797-b164978c309b.png',
  alt: 'Equipo aplicando adhesivo hot melt en un colchón durante su fabricación'
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
                  <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                    <div className={`order-${index % 2 === 0 ? '1' : '2'} lg:order-1 lg:col-span-3`}>
                      <h2 className="heading-md mb-6">
                        {industry.title}
                      </h2>
                      
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
                    <div className={`order-${index % 2 === 0 ? '2' : '1'} lg:order-2 lg:col-span-2 relative`}>
                      <div className="md:max-w-xs lg:max-w-sm mx-auto rounded-lg overflow-hidden bg-vas-gray">
                        <AspectRatio ratio={4/3} className="w-full">
                          <div className="absolute inset-0 bg-gradient-to-br from-vas-bronze/20 to-vas-dark/80 opacity-40"></div>
                          <img src={industry.image} alt={industry.alt} className="w-full h-full object-cover" />
                        </AspectRatio>
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
