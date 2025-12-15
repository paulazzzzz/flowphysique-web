import React from 'react';
import './App.css';
import alexVideo from './alex-move-vmake.webm'; // Importăm doar videoclipul cu Alex

function App() {
  return (
    /* 1. Am creat un container mare care ține TOATĂ pagina */
    <div className="main-page-container">
      
      {/* --- PARTEA 1: HERO (ECRANUL PRINCIPAL) --- */}
      <div className="street-wrapper">
        
        {/* VIDEO ALEX (Rămâne aici) */}
        <div className="video-overlay"></div>
        <video 
           autoPlay loop muted playsInline 
           className="alex-character"
        >
           <source src={alexVideo} type="video/webm" />
        </video>

        <div className="content-grid">
          {/* STÂNGA: Textul Bio */}
          <div className="left-col">
            <h1 className="brand-title">FLOW<br/><span className="highlight">PHYSIQUE</span></h1>
            <div className="tagline-box">EXPANSION / MASTERY / MOTION</div>
            
            {/* NOUL TĂU BIO */}
            <p className="bio-text">
              Aplic principii de inginerie pe corpul uman. Transform antrenamentul din ghicitoare în știință exactă.
              <br /><br />
              <span style={{ color: '#fff', fontWeight: 'bold' }}>
                Documentez haosul și ordinea din spatele evoluției.
              </span>
            </p>

            {/* Butoanele Social Media */}
            <div className="social-card">
               <h3>URMĂREȘTE PROCESUL:</h3>
               <div className="btn-row">
                 <a href="https://youtube.com" className="street-btn">YouTube</a>
                 <a href="https://instagram.com" className="street-btn">Instagram</a>
                 <a href="https://tiktok.com" className="street-btn btn-tiktok">TikTok</a>
               </div>
            </div>
          </div>

          {/* DREAPTA: Formularul Teach Me */}
          <div className="right-col">
            <div className="teach-me-card">
               <div className="tape"></div>
               <h2 style={{fontSize: '2rem', marginBottom: '5px'}}>AI UN SKILL?</h2>
               <h3 className="handwritten-text">ÎNVAȚĂ-MĂ CEVA.</h3>
               <form>
                  <input type="text" placeholder="Ce poți să mă înveți?" className="teach-input"/>
                  <button type="submit" className="teach-btn">TRIMITE PROPUNEREA</button>
               </form>
            </div>
          </div>
        </div> {/* Aici se închide content-grid */}

      </div> {/* <--- IMPORTANT! AICI SE ÎNCHIDE street-wrapper (PARTEA DE SUS) */}


      {/* --- PARTEA 2: SECȚIUNEA NOUĂ (ACUM E DEDESUBT, NU LÂNGĂ) --- */}
      <div className="pillars-section">
        <h2 className="section-title">METODA <span className="highlight">FLOW</span></h2>
        
        <div className="pillars-container">
          {/* Card 1 */}
          <div className="pillar-card">
            <h3>01. FIZIC</h3>
            <p>Nu ne antrenăm la întâmplare. Construim masă musculară și definire prin antrenamente inteligente, calculate ca un proiect de inginerie.</p>
          </div>
          {/* Card 2 */}
          <div className="pillar-card">
            <h3>02. MINDSET</h3>
            <p>Disciplina bate motivația. Îți arăt cum să îți organizezi viața și antrenamentele cu rigoare militară, chiar dacă ai un job full-time.</p>
          </div>
          {/* Card 3 */}
          <div className="pillar-card">
            <h3>03. SKILLURI</h3>
            <p>Un corp frumos e inutil dacă nu îl poți folosi. Învățăm să controlăm mișcarea: de la tracțiuni corecte până la elemente avansate.</p>
          </div>
        </div>
      </div>

      <footer className="simple-footer">
        <p>© 2024 FLOW PHYSIQUE. CONSTANȚĂ ȘI PROGRES.</p>
      </footer>

    </div> /* Aici se închide containerul mare al paginii */
  );
}

export default App;