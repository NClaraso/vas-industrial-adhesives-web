import React from 'react';
import Layout from '@/components/Layout';
import { Separator } from '@/components/ui/separator';
const AvisoLegal = () => {
  return <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-vas-dark text-white relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute w-full h-full bg-[radial-gradient(#C87941_1px,transparent_1px)] [background-size:40px_40px]"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="heading-xl mb-6">Aviso Legal</h1>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <h2>INFORMACIÓN GENERAL</h2>
            <p>El presente aviso legal regula el uso del sitio web www.vasindustrial.es (en adelante, "la Web"), cuya titularidad es de VAS INDUSTRIAL, con NIF XXXXXXXX y domicilio fiscal en C. los Gremios Segovianos, 7 (Parc. 4) 40195 Segovia, España.</p>
            
            <p>El acceso y uso de esta Web atribuye la condición de Usuario, que acepta, desde dicho acceso y uso, las presentes condiciones generales de uso.

          </p>
            
            <h2>OBJETO</h2>
            <p>Este Aviso Legal regula el acceso y uso de la Web que VAS INDUSTRIAL pone a disposición de los Usuarios de Internet. La Web proporciona información y servicios relacionados con la actividad de VAS INDUSTRIAL.</p>

            <Separator className="my-6" />
            
            <h2>CONDICIONES DE ACCESO Y USO</h2>
            <p>La utilización de la Web es de carácter gratuito y no exige registro previo por parte del Usuario. No obstante, la utilización de algunos servicios está condicionada al registro previo del Usuario.</p>
            
            <p>El Usuario se compromete a utilizar la Web de conformidad con la ley, el presente Aviso Legal, reglamentos e instrucciones vigentes. El Usuario se obliga a usar la Web de forma diligente, correcta y lícita, y se abstendrá de:</p>
            
            <ul>
              <li>Utilizar los contenidos con fines contrarios a la ley, la moral y las buenas costumbres o al orden público.</li>
              <li>Reproducir, copiar, distribuir, comunicar, transformar o modificar los contenidos, salvo autorización previa.</li>
              <li>Realizar cualquier actividad ilícita, fraudulenta, contraria a la legislación vigente, o que cause daños a terceros.

            </li>
            </ul>

            <h2>PROPIEDAD INTELECTUAL E INDUSTRIAL</h2>
            <p>Todos los contenidos de la Web (textos, fotografías, gráficos, imágenes, tecnología, software, links, contenidos audiovisuales, diseño gráfico, código fuente, etc.) son propiedad intelectual de VAS INDUSTRIAL o de terceros que han autorizado su uso. El Usuario tiene derecho a utilizarlos única y exclusivamente en la forma que se le autoriza expresamente.</p>
            
            <Separator className="my-6" />
            
            <h2>EXCLUSIÓN DE GARANTÍAS Y RESPONSABILIDAD</h2>
            <p>VAS INDUSTRIAL no garantiza la disponibilidad y continuidad del funcionamiento de la Web. No será responsable de los daños y perjuicios causados al Usuario como consecuencia de la indisponibilidad, fallos de acceso y/o falta de continuidad de la Web.</p>
            
            <p>VAS INDUSTRIAL no responderá de la información que en su caso se pudiera facilitar a terceros por los Usuarios en infracción de las prohibiciones contenidas en la Web.

          </p>

            <h2>MODIFICACIÓN DEL PRESENTE AVISO LEGAL</h2>
            <p>VAS INDUSTRIAL se reserva el derecho a modificar el presente Aviso Legal para adaptarlo a novedades legislativas o jurisprudenciales, así como a prácticas de la industria. En dichos supuestos, anunciará en esta página los cambios introducidos con razonable antelación a su puesta en práctica.</p>
            
            <Separator className="my-6" />
            
            <h2>LEGISLACIÓN APLICABLE Y JURISDICCIÓN</h2>
            <p>El presente Aviso Legal se regirá por la legislación española. Para la resolución de cualquier controversia que pudiera derivarse del acceso o uso de la Web, VAS INDUSTRIAL y el Usuario se someten a los juzgados y tribunales de la ciudad de Segovia, España, con renuncia expresa a cualquier otro fuero que pudiera corresponderles.</p>
          </div>
        </div>
      </section>
    </Layout>;
};
export default AvisoLegal;