
import React from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/home/Hero';
import About from '@/components/home/About';
import ProductSection from '@/components/home/ProductSection';
import Advantages from '@/components/home/Advantages';
import CallToAction from '@/components/home/CallToAction';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <ProductSection />
      <Advantages />
      <CallToAction />
    </Layout>
  );
};

export default Index;
