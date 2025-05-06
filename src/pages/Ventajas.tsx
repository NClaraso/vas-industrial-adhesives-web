import React from 'react';
import Layout from '@/components/Layout';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Table } from "@/components/ui/table";

const advantages = [{
  title: 'Producción nacional',
  description: 'Fabricamos en España, lo que nos permite ofrecer tiempos de entrega reducidos y un control total sobre la calidad de nuestros productos.',
  color: 'bg-gray-50',
  number: '01'
}, {
  title: 'Flexibilidad en fabricación',
  description: 'Nos adaptamos a las necesidades específicas de cada cliente, con capacidad para fabricar lotes a medida, sin mínimos prohibitivos.',
  color: 'bg-vas-gray',
  textColor: 'text-white',
  number: '02'
}, {
  title: 'Desarrollo técnico a medida',
  description: 'Nuestro equipo técnico trabaja en estrecha colaboración con los clientes para desarrollar soluciones adhesivas optimizadas para cada aplicación.',
  color: 'bg-vas-bronze/10',
  number: '03'
}, {
  title: 'Entregas ágiles y fiables',
  description: 'Gracias a nuestra producción local y sistema logístico optimizado, garantizamos entregas rápidas y puntuales, incluso en situaciones urgentes.',
  color: 'bg-vas-bronze',
  textColor: 'text-white',
  number: '04'
}, {
  title: 'Asesoramiento técnico experto',
  description: 'Ofrecemos soporte técnico continuo, desde la selección del adhesivo adecuado hasta la optimización de procesos en la línea de producción.',
  color: 'bg-gray-100',
  number: '05'
}];

const comparisonFeatures = [{
  feature: "Flexibilidad en pedidos",
  vas: true,
  competidor: false
}, {
  feature: "Desarrollo técnico propio",
  vas: true,
  competidor: false
}, {
  feature: "Producción local (España)",
  vas: true,
  competidor: false
}, {
  feature: "Servicio de entrega urgente",
  vas: true,
  competidor: true
}, {
  feature: "Adaptación de formulaciones",
  vas: true,
  competidor: false
}, {
  feature: "Control de calidad por lote",
  vas: true,
  competidor: true
}, {
  feature: "Capacidad de personalización",
  vas: true,
  competidor: false
}, {
  feature: "Atención personalizada",
  vas: true,
  competidor: false
}, {
  feature: "Apoyo técnico especializado",
  vas: true,
  competidor: true
}];

const Ventajas = () => {
  return <Layout>
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

      {/* Advantages Cards */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-lg mb-6">¿Por qué elegir VAS Industrial?</h2>
            <p className="text-lg text-gray-600">
              Descubra las ventajas de trabajar con un fabricante español especializado en adhesivos industriales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((advantage, index) => <div key={index} className={cn("rounded-lg p-8 relative overflow-hidden group transition-all hover:shadow-lg", advantage.color, advantage.textColor || 'text-vas-dark')}>
                <span className="block text-6xl font-bold opacity-10 absolute -bottom-6 -right-2 transition-opacity group-hover:opacity-20">
                  {advantage.number}
                </span>
                <h3 className="text-xl font-bold mb-4 relative z-10">{advantage.title}</h3>
                <p className={cn("relative z-10", advantage.textColor === 'text-white' ? 'text-gray-200' : 'text-gray-600')}>
                  {advantage.description}
                </p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Tabla comparativa */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-lg mb-6">Comparativa con la competencia</h2>
              <p className="text-lg text-gray-600">
                Vea cómo nos comparamos con otros fabricantes de adhesivos hot melt del mercado.
              </p>
            </div>

            <Card className="shadow-lg border-none">
              <CardContent className="p-0 overflow-hidden">
                <Table>
                  <TableCaption className="pb-4">Comparación con otros fabricantes de adhesivos</TableCaption>
                  <TableHeader>
                    <TableRow className="bg-gray-100 hover:bg-gray-100">
                      <TableHead className="w-1/2 font-heading text-base text-vas-dark">Características</TableHead>
                      <TableHead className="text-center font-heading text-base text-vas-dark">VAS Industrial</TableHead>
                      <TableHead className="text-center font-heading text-base text-vas-dark">Competencia</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {comparisonFeatures.map((item, idx) => <TableRow key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <TableCell className="font-medium py-4">{item.feature}</TableCell>
                        <TableCell className="text-center py-4">
                          {item.vas ? <div className="flex justify-center">
                              <span className="bg-vas-bronze/10 p-1 rounded-full">
                                <Check className="h-5 w-5 text-vas-bronze" />
                              </span>
                            </div> : <div className="flex justify-center">
                              <span className="bg-gray-100 p-1 rounded-full">
                                <X className="h-5 w-5 text-gray-400" />
                              </span>
                            </div>}
                        </TableCell>
                        <TableCell className="text-center py-4">
                          {item.competidor ? <div className="flex justify-center">
                              <span className="bg-gray-200 p-1 rounded-full">
                                <Check className="h-5 w-5 text-gray-600" />
                              </span>
                            </div> : <div className="flex justify-center">
                              <span className="bg-gray-100 p-1 rounded-full">
                                <X className="h-5 w-5 text-gray-400" />
                              </span>
                            </div>}
                        </TableCell>
                      </TableRow>)}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-6">Las ventajas de VAS Industrial son claras. Nuestro enfoque en la personalización, la calidad y el servicio nos distingue de la competencia.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Detail */}
      <section>
        <div className="container-custom">
          {advantages.map((advantage, index) => {})}
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
            <Button asChild size="lg" className="bg-vas-bronze text-white hover:bg-white hover:text-vas-bronze transition-colors">
              <Link to="/contacto">
                Solicitar información
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>;
};
export default Ventajas;
