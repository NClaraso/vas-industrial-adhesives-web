
import React from 'react';
import Layout from '@/components/Layout';
import { Check } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const SobreNosotros = () => {
  return <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-vas-dark text-white relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute w-full h-full bg-[radial-gradient(#C87941_1px,transparent_1px)] [background-size:40px_40px]"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="heading-xl mb-6">Sobre nosotros</h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Conozca más sobre VAS Industrial, un fabricante español de adhesivos hot melt con enfoque en la calidad, innovación y servicio personalizado.
            </p>
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-lg mb-6">
              Experiencia y conocimiento en <span className="text-vas-bronze">adhesivos industriales</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              VAS Industrial nace de la pasión por la química aplicada y la necesidad de ofrecer soluciones adhesivas de alta calidad para la industria española y europea. 
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Con una fábrica ubicada en Segovia, combinamos el conocimiento técnico con procesos productivos ágiles para desarrollar adhesivos hot melt que respondan a las necesidades específicas de cada cliente.
            </p>
          </div>
        </div>
      </section>
      
      <div className="container-custom py-6">
        <Separator className="bg-vas-bronze/30" />
      </div>

      {/* Team Experience */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-lg mb-6">
              Experiencia técnica y <span className="text-vas-bronze">conocimiento especializado</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Contamos con un equipo técnico con amplia experiencia en el desarrollo y aplicación de adhesivos hot melt para diversos sectores industriales.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="flex-shrink-0 bg-vas-bronze/10 p-1 rounded-full mr-3 mt-1">
                  <Check className="h-4 w-4 text-vas-bronze" />
                </span>
                <span className="text-gray-700">Profesionales con formación especializada en química de polímeros</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 bg-vas-bronze/10 p-1 rounded-full mr-3 mt-1">
                  <Check className="h-4 w-4 text-vas-bronze" />
                </span>
                <span className="text-gray-700">Experiencia directa en múltiples sectores industriales</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 bg-vas-bronze/10 p-1 rounded-full mr-3 mt-1">
                  <Check className="h-4 w-4 text-vas-bronze" />
                </span>
                <span className="text-gray-700">Desarrollo constante de nuevas soluciones adhesivas</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      
      <div className="container-custom py-6">
        <Separator className="bg-vas-bronze/30" />
      </div>

      {/* Industrial Focus */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-lg mb-6">
              Orientados a la <span className="text-vas-bronze">solución técnica</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              En VAS Industrial, entendemos que cada aplicación industrial es única. Por eso, adoptamos un enfoque técnico para desarrollar adhesivos hot melt que respondan exactamente a sus necesidades productivas.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="flex-shrink-0 bg-vas-bronze/10 p-1 rounded-full mr-3 mt-1">
                  <Check className="h-4 w-4 text-vas-bronze" />
                </span>
                <span className="text-gray-700">Análisis detallado de los requisitos de cada aplicación</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 bg-vas-bronze/10 p-1 rounded-full mr-3 mt-1">
                  <Check className="h-4 w-4 text-vas-bronze" />
                </span>
                <span className="text-gray-700">Desarrollo de soluciones adaptadas a las necesidades del cliente</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 bg-vas-bronze/10 p-1 rounded-full mr-3 mt-1">
                  <Check className="h-4 w-4 text-vas-bronze" />
                </span>
                <span className="text-gray-700">Soporte técnico durante todo el proceso de implementación</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      
      <div className="container-custom py-6">
        <Separator className="bg-vas-bronze/30" />
      </div>

      {/* Values */}
      <section className="section-padding bg-vas-dark text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-lg mb-6">Nuestros valores</h2>
            <p className="text-lg text-gray-300">
              Principios que guían nuestra forma de trabajar y relacionarnos con nuestros clientes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-vas-gray/50 backdrop-blur-sm border border-white/10 p-8 rounded-lg">
              <h3 className="text-vas-bronze font-semibold text-xl mb-4">Calidad</h3>
              <p className="text-gray-300">
                Compromiso con la excelencia en todos nuestros productos y servicios, garantizando adhesivos de alto rendimiento.
              </p>
            </div>
            <div className="bg-vas-gray/50 backdrop-blur-sm border border-white/10 p-8 rounded-lg">
              <h3 className="text-vas-bronze font-semibold text-xl mb-4">Innovación</h3>
              <p className="text-gray-300">
                Búsqueda constante de nuevas y mejores soluciones adhesivas para responder a los desafíos industriales actuales.
              </p>
            </div>
            <div className="bg-vas-gray/50 backdrop-blur-sm border border-white/10 p-8 rounded-lg">
              <h3 className="text-vas-bronze font-semibold text-xl mb-4">Servicio</h3>
              <p className="text-gray-300">
                Atención personalizada y acompañamiento técnico en cada etapa del proceso, desde la selección hasta la aplicación.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>;
};
export default SobreNosotros;
