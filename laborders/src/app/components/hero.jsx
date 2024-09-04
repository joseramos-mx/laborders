import React from 'react';
import Image from 'next/image';
import NavBar from "./navbar";


const HeroSection = () => {

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('formsection');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (

    <div className="relative h-screen flex flex-col justify-center items-center text-center font-jakarta bg-[#121c21] overflow-hidden">

      {/* Fondo con patrón más claro */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#cfcfcf50_1px,transparent_1px),linear-gradient(to_bottom,#cfcfcf50_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-10"></div>

      {/* Gradiente superpuesto */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#121c21e6] via-[#121c2180] to-transparent pointer-events-none z-20"></div>
      
      {/* Contenido */}
      <div className="relative z-30 text-gray-400 text-sm mb-4">
      <Image
          src="/images/logo-w.svg"
          alt="Logo white"
          width={150}
          height={100}
          className='mb-10'
        />

        <span className="inline-flex items-center gap-1 px-2 py-1 border border-white rounded-full">
          Beta live <span className="italic font-serif mt-[1px] text-orange-600">now</span>
        </span>
      </div>
      <h1 className="relative z-30 text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4">
        <span className="bg-gradient-to-r from-white to-[#bfd0ff] bg-clip-text text-transparent">
          Work forms
        </span>
        <br />
        <span className="bg-gradient-to-r from-white to-[#bfd0ff] bg-clip-text text-transparent">
          supercharged
        </span>
      </h1>
      <p className="relative z-30 text-gray-400 text-base mb-8">
        La cotización de tu pedido inmediatamente y su <br />producción instantánea en nuestros headquarters.
      </p>
      <button
        onClick={scrollToNextSection}
        className="relative z-30 bg-gradient-to-r from-[#00b190] to-[#1264fb] text-white py-3 px-6 rounded-lg text-base"
      >
        Hacer pedido →
      </button>

    </div>
  );
};

export default HeroSection;
