import React from 'react';

const HeroSection = () => {

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('formsection');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={{
      position: 'relative',
      backgroundColor: '#121c21',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      flexDirection: 'column',
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: `radial-gradient(circle, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                          radial-gradient(circle, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
        backgroundSize: '50px 50px',
        backgroundPosition: '0 0, 25px 25px',
        zIndex: 1
      }}></div>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(to bottom, rgba(18, 28, 33, 0.9), rgba(18, 28, 33, 0.5), rgba(18, 28, 33, 0))',
        pointerEvents: 'none',
        zIndex: 2
      }}></div>
      <div style={{ zIndex: 3, color: '#b8b8b8', fontSize: '14px', marginBottom: '16px' }}>
        <span style={{ padding: '4px 8px', border: '1px solid white', borderRadius: '12px', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
          live <span style={{ fontFamily: 'serif', fontStyle: 'italic', marginTop: "1px"}}>now</span>
        </span>
      </div>
      <h1 style={{ zIndex: 3, fontSize: '48px', fontWeight: 'bold', lineHeight: '1.2', marginBottom: '16px' }}>
        <span style={{ background: 'linear-gradient(90deg, #ffffff 0%, #bfd0ff 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Work forms
        </span>
        <br />
        <span style={{ background: 'linear-gradient(90deg, #ffffff 0%, #bfd0ff 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          supercharged
        </span>
      </h1>
      <p style={{ zIndex: 3, color: '#b8b8b8', fontSize: '16px', marginBottom: '32px' }}>
        La cotización de tu pedido inmediatamente y su <br />producción instantánea en nuestros headquarters.
      </p>
      <button
        onClick={scrollToNextSection}
        style={{
          zIndex: 3,
          background: 'linear-gradient(90deg, #00b190 0%, #1264fb 100%)',
          color: '#ffffff',
          padding: '12px 24px',
          borderRadius: '8px',
          fontSize: '16px',
          fontWeight: 'bold',
          cursor: 'pointer',
          border: 'none'
        }}
      >
        Hacer pedido →
      </button>
    </div>
  );
};

export default HeroSection;
