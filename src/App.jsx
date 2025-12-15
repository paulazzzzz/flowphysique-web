import React from 'react';
import './App.css';

function App() {
  return (
    <div className="street-wrapper">

      {/* --- LAYER 1: FUNDAL DINAMIC (Poze decupate) --- */}
      <div className="collage-container">
        {/* Înlocuiește src cu pozele tale decupate (fără fundal) */}
        <img 
          src="https://images.unsplash.com/photo-1583468982228-19f19164aee2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
          alt="Alex Cutout 1" 
          className="cutout-img img-1" 
        />
        <img 
          src="https://images.unsplash.com/photo-1517438476312-10d79c077509?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
          alt="Alex Cutout 2" 
          className="cutout-img img-2" 
        />
      </div>

      {/* --- LAYER 2: CONȚINUTUL (Grid) --- */}
      <div className="content-grid">

        {/* --- STÂNGA: IDENTITATE & SOCIALS --- */}
        <div className="left-col">
          <h1 className="brand-title">
            FLOW<br/>
            <span className="highlight">PHYSIQUE</span>
          </h1>
          <p style={{fontSize: '1.1rem', maxWidth: '400px', lineHeight: '1.6', marginBottom: '30px'}}>
            Nu sunt guru. Sunt un student al disciplinei.
            Documentez haosul și ordinea din spatele evoluției.
          </p>

          <div className="social-card">
            <h3 style={{marginBottom: '15px'}}>Urmărește procesul:</h3>
            <div className="btn-row">
              {/* YouTube */}
              <a href="https://www.youtube.com/@alexandruflocea7215" target="_blank" rel="noreferrer" className="street-btn">
                YouTube
              </a>
              {/* Instagram */}
              <a href="https://www.instagram.com/alexandru.flw" target="_blank" rel="noreferrer" className="street-btn">
                Instagram
              </a>
              {/* TikTok (NOU) */}
              <a href="https://www.tiktok.com/" target="_blank" rel="noreferrer" className="street-btn btn-tiktok">
                TikTok
              </a>
            </div>
          </div>
        </div>

        {/* --- DREAPTA: TEACH ME / COLLABS --- */}
        <div className="right-col">
          
          <div className="teach-me-card">
            {/* Element decorativ: Banda adezivă */}
            <div className="tape"></div>
            
            <h2 style={{fontSize: '2rem', marginBottom: '10px'}}>AI UN SKILL?</h2>
            <h3 style={{fontFamily: 'Permanent Marker', color: '#d65a31', marginBottom: '20px'}}>ÎNVAȚĂ-MĂ CEVA.</h3>
            
            <p style={{marginBottom: '20px', fontSize: '0.9rem', fontWeight: 'bold'}}>
              Caut oameni de la care pot învăța. Fie că e vorba de luptă, artă, business sau supraviețuire. 
              Dacă vrei să facem un schimb de experiență, scrie-mi.
            </p>

            {/* Formular Simplu (Simulat - duce la Email) */}
            <form action="mailto:contact@flowphysique.com?subject=Vreau sa te invat ceva" method="post" encType="text/plain">
              <input 
                type="text" 
                placeholder="Ce skill ai? (ex: Box, Programare...)" 
                className="teach-input"
              />
              <button type="submit" className="teach-btn">
                TRIMITE PROPUNEREA
              </button>
            </form>

            <p style={{fontSize: '0.7rem', marginTop: '10px', textAlign: 'center', opacity: 0.7}}>
              *Vei fi redirecționat către aplicația de Email.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default App;