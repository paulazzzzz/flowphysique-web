import React from 'react';
import './App.css';
import alexVideo from './alex-move-vmake.webm'; // Importăm doar videoclipul cu Alex

function App() {
  return (
    <div className="street-wrapper">

      {/* --- STRAT DE TEXTURĂ (Noise) --- */}
      {/* Doar textură pe fundal negru */}
      <div className="video-overlay"></div>

      {/* --- PERSONAJUL ALEX (Animația) --- */}
      {/* Apare în colț, blenduit cu ecranul */}
  
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="alex-character" 
      >
        <source src={alexVideo} type="video/webm" />
      </video>

      {/* --- CONȚINUTUL PRINCIPAL --- */}
      <div className="content-grid">

        {/* --- STÂNGA: Brand & Socials --- */}
        <div className="left-col">
          <h1 className="brand-title">
            FLOW<br/>
            <span className="highlight">PHYSIQUE</span>
          </h1>
          
          <div className="tagline-box">
            EXPANSION / SKILLS / MOTION
          </div>

          <p className="bio-text">
            Nu sunt guru. Sunt un student al disciplinei.
            Documentez haosul și ordinea din spatele evoluției.
          </p>

          <div className="social-card">
            <h3>URMĂREȘTE PROCESUL:</h3>
            <div className="btn-row">
              <a href="https://www.youtube.com/@alexandruflocea7215" target="_blank" rel="noreferrer" className="street-btn">
                YouTube
              </a>
              <a href="https://www.instagram.com/alexandru.flw" target="_blank" rel="noreferrer" className="street-btn">
                Instagram
              </a>
              <a href="https://www.tiktok.com/" target="_blank" rel="noreferrer" className="street-btn btn-tiktok">
                TikTok
              </a>
            </div>
          </div>
        </div>

        {/* --- DREAPTA: Formular Teach Me --- */}
        <div className="right-col">
          
          <div className="teach-me-card">
            <div className="tape"></div>
            
            <h2 style={{fontSize: '2rem', marginBottom: '5px'}}>AI UN SKILL?</h2>
            <h3 className="handwritten-text">ÎNVAȚĂ-MĂ CEVA.</h3>
            
            <form action="mailto:contact@flowphysique.com?subject=Propunere Colaborare" method="post" encType="text/plain">
              <input 
                type="text" 
                placeholder="Ce poți să mă înveți? (ex: Box, Editare...)" 
                className="teach-input"
              />
              <button type="submit" className="teach-btn">
                TRIMITE PROPUNEREA
              </button>
            </form>
          </div>

        </div>

      </div>

    </div>
  );
}

export default App;