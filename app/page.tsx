import ClientDetails from "./(ui)/sections/ClientDetails";
import Hero from "./(ui)/sections/Hero";
import WhatWeDo from "./(ui)/sections/WhatWeDo";
import Performance from "./(ui)/sections/Performance";
import Faq from "./(ui)/sections/Faq";
import Marque from "./(ui)/components/Marquee";
import Contact from "./(ui)/sections/Contact"
import WhyPartner from "./(ui)/sections/WhyPartner";


export default function Home() {
  return (
    <>
      <Hero />
      <WhatWeDo />
      <ClientDetails />
       <WhyPartner />
      <Performance />
      <Faq />
      <Marque />
      <Contact />
    </>
  );
}
