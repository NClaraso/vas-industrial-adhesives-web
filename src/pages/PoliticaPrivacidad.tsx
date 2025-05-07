
import React from 'react';
import Layout from '@/components/Layout';
import { Separator } from '@/components/ui/separator';

const PoliticaPrivacidad = () => {
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
            <h1 className="heading-xl mb-6">Política de Privacidad</h1>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <h2>RESPONSABLE</h2>
            <p>La entidad responsable del tratamiento de tus datos personales es VAS INDUSTRIAL, con NIF XXXXXXXX y domicilio fiscal en C. los Gremios Segovianos, 7 (Parc. 4) 40195 Segovia, España.</p>
            
            <h2>¿CON QUÉ FINALIDAD TRATAMOS TUS DATOS?</h2>
            <p>Los datos personales que nos facilitas serán tratados con las siguientes finalidades:</p>
            <ul>
              <li>Prestación de los servicios solicitados.</li>
              <li>Atención de consultas planteadas a través del formulario de contacto.</li>
              <li>Envío de comunicaciones comerciales sobre nuestros productos, actividades y servicios, siempre que hayas dado tu consentimiento.</li>
              <li>Facilitar información sobre productos que comercializamos.</li>
              <li>Gestión administrativa, facturación, contabilidad y obligaciones legales.</li>
              <li>Mejorar nuestros servicios mediante el estudio de la información facilitada.</li>
            </ul>
            
            <h2>¿CUÁL ES LA LEGITIMACIÓN PARA EL TRATAMIENTO DE TUS DATOS?</h2>
            <p>La legitimación para el tratamiento de tus datos puede fundamentarse en:</p>
            <ul>
              <li>Tu consentimiento que nos has dado. A este respecto, te recordamos la posibilidad que tienes de retirarlo en cualquier momento.</li>
              <li>Ejecución de un contrato de servicio suscrito con nosotros.</li>
              <li>Nuestro interés legítimo en atender y resolver tus consultas y proporcionar los servicios solicitados.</li>
            </ul>
            
            <Separator className="my-6" />
            
            <h2>¿A QUÉ DESTINATARIOS SE COMUNICARÁN TUS DATOS?</h2>
            <p>No cederemos tus datos a terceros, salvo obligación legal. Sin embargo, para la prestación del servicio, es posible que algunos de tus datos deban ser comunicados a las siguientes categorías de destinatarios:</p>
            <ul>
              <li>Proveedores de servicios necesarios para nuestra actividad.</li>
              <li>Administraciones públicas y organismos oficiales, cuando así lo exija la normativa aplicable.</li>
            </ul>

            <h2>¿CUÁNTO TIEMPO CONSERVAREMOS TUS DATOS?</h2>
            <p>Conservaremos tus datos mientras se mantenga la relación contigo o durante los años necesarios para cumplir con las obligaciones legales. Una vez finalizados los tratamientos, los datos serán debidamente bloqueados y posteriormente eliminados.</p>
            
            <h2>¿CUÁLES SON TUS DERECHOS?</h2>
            <p>Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición, limitación del tratamiento y portabilidad dirigiéndote a VAS INDUSTRIAL, en la dirección C. los Gremios Segovianos, 7 (Parc. 4) 40195 Segovia, España o por correo electrónico a info@vasindustrial.es.</p>
            
            <p>En caso de considerar vulnerado tu derecho a la protección de datos personales, podrás presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es).</p>

            <Separator className="my-6" />
            
            <h2>MEDIDAS DE SEGURIDAD</h2>
            <p>VAS INDUSTRIAL ha adoptado todas las medidas técnicas y organizativas necesarias para garantizar la seguridad e integridad de los datos personales que trate, así como para evitar su pérdida, alteración y/o acceso por parte de terceros no autorizados.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PoliticaPrivacidad;
