
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { MapPin, Phone, Mail, Factory, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const Contacto = () => {
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    industry: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, industry: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: "Formulario enviado",
        description: "Nos pondremos en contacto con usted lo antes posible.",
      });
      // Reset form
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        industry: '',
        message: '',
      });
    }, 1500);
  };

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
            <h1 className="heading-xl mb-6">Contacto</h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              ¿Necesita más información sobre nuestros adhesivos hot melt? Póngase en contacto con nosotros y le atenderemos lo antes posible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="heading-md mb-8">Envíenos su consulta</h2>

              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
                  <div className="flex items-center mb-4">
                    <div className="bg-green-100 rounded-full p-1 mr-3">
                      <Check className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-green-800">¡Gracias por contactarnos!</h3>
                  </div>
                  <p className="text-green-700 mb-4">
                    Hemos recibido su mensaje correctamente. Nuestro equipo lo revisará y nos pondremos en contacto con usted lo antes posible.
                  </p>
                  <Button 
                    onClick={() => setIsSubmitted(false)} 
                    className="bg-vas-bronze hover:bg-vas-bronze/90"
                  >
                    Enviar otro mensaje
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nombre *</Label>
                      <Input 
                        id="name" 
                        name="name" 
                        placeholder="Su nombre" 
                        required 
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Empresa *</Label>
                      <Input 
                        id="company" 
                        name="company" 
                        placeholder="Nombre de su empresa" 
                        required
                        value={formData.company}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email" 
                        placeholder="ejemplo@empresa.com" 
                        required
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Teléfono</Label>
                      <Input 
                        id="phone" 
                        name="phone" 
                        placeholder="Su número de teléfono"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="industry">Sector industrial</Label>
                    <Select onValueChange={handleSelectChange} value={formData.industry}>
                      <SelectTrigger>
                        <SelectValue placeholder="Seleccione su sector" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="packaging">Packaging y Embalaje</SelectItem>
                        <SelectItem value="madera">Industria de la Madera</SelectItem>
                        <SelectItem value="higiene">Higiene y No-tejidos</SelectItem>
                        <SelectItem value="automocion">Automoción</SelectItem>
                        <SelectItem value="ensamblaje">Ensamblaje Técnico</SelectItem>
                        <SelectItem value="otro">Otro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Mensaje *</Label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      placeholder="Describa su consulta o necesidad..." 
                      rows={5} 
                      required
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="bg-vas-bronze hover:bg-vas-bronze/90 w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
                  </Button>
                  
                  <p className="text-sm text-gray-500 mt-4">
                    Los campos marcados con * son obligatorios.
                  </p>
                </form>
              )}
            </div>
            
            {/* Contact Info */}
            <div>
              <h2 className="heading-md mb-8">Información de contacto</h2>
              
              <div className="space-y-8 mb-12">
                <div className="flex items-start">
                  <div className="bg-vas-bronze/10 p-3 rounded-full mr-5">
                    <MapPin className="h-6 w-6 text-vas-bronze" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Dirección</h3>
                    <p className="text-gray-600">Polígono Industrial, Segovia, España</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-vas-bronze/10 p-3 rounded-full mr-5">
                    <Phone className="h-6 w-6 text-vas-bronze" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Teléfono</h3>
                    <p className="text-gray-600">
                      <a href="tel:+34900000000" className="hover:text-vas-bronze">+34 900 000 000</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-vas-bronze/10 p-3 rounded-full mr-5">
                    <Mail className="h-6 w-6 text-vas-bronze" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Email</h3>
                    <p className="text-gray-600">
                      <a href="mailto:info@vasindustrial.es" className="hover:text-vas-bronze">info@vasindustrial.es</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-vas-bronze/10 p-3 rounded-full mr-5">
                    <Factory className="h-6 w-6 text-vas-bronze" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Horario</h3>
                    <p className="text-gray-600">
                      Lunes - Viernes: 8:00 - 18:00<br />
                      Sábado - Domingo: Cerrado
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="relative h-80 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-vas-gray flex items-center justify-center">
                  <span className="text-white/90 text-xl font-heading">Mapa de ubicación</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contacto;
