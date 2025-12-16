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
            <div className="tagline-box">CURIOSITY / DYNAMICS / SOLUTION</div>
            
            {/* NOUL TĂU BIO */}
            <p className="bio-text">
              Pot să fac orice. Și dacă nu pot, mă descurc.
              <br /><br />
              <span style={{ color: '#fff', fontWeight: 'bold' }}>
                Documentez haosul și ordinea din spatele evoluției.
              </span>
            </p>

            {/* Butoanele Social Media */}
            <div className="social-card">
               <h3>URMĂREȘTE PROCESUL:</h3>
               <div className="btn-row">
                 <a href="https://www.youtube.com/@alexandruflocea7215" className="street-btn">YouTube</a>
                 <a href="https://www.instagram.com/alexandru.flw" className="street-btn">Instagram</a>
                 <a href="https://www.tiktok.com/@flow_physique" className="street-btn btn-tiktok">TikTok</a>
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


      {/* --- SECȚIUNEA LATEST DROP (VIDEOCLIP NOU) --- */}
      <div className="latest-drop-section">
        <h2 className="section-title">LATEST <span className="highlight">DROP</span></h2>
        
        {/* Containerul Video */}
        <div className="video-wrapper">
          <a 
            /* 1. AICI PUI LINKUL CĂTRE VIDEO COMPLET DE PE YOUTUBE */
            href="https://www.youtube.com/watch?v=QD-8fo8HVzA" 
            target="_blank" 
            rel="noreferrer"
            className="video-link"
          >
            {/* 2. AICI SE GENEREAZĂ AUTOMAT POZA (Trebuie doar ID-ul video-ului) */}
            {/* Înlocuiește 'VIDEO_ID_AICI' cu codul video-ului real */}
            <img 
              src="https://img.youtube.com/vi/QD-8fo8HVzA/maxresdefault.jpg" 
              alt="Latest YouTube Video" 
              className="video-thumbnail" 
            />
            
            {/* Butonul de Play peste poză */}
            <div className="play-button-overlay">
              <div className="play-icon">▶</div>
              <span>WATCH NOW</span>
            </div>
          </a>
        </div>
      </div>

      {/* --- SECȚIUNEA UPCOMING / PIPELINE --- */}
      <div className="pipeline-section">
        <h2 className="section-title">IN THE <span className="highlight">PIPELINE</span></h2>
        
        <div className="pipeline-grid">
          
          {/* PROIECT 1: ROBOTICĂ (Andrei Georgescu) */}
          <div className="pipeline-card">
            <div className="card-header">
              <span className="status-tag">EDITING PROCESS</span>
              <span className="date-tag">DEC 2024</span>
            </div>
            <h3>THE LAB: ENGINEERING <br/> FOR A CAUSE</h3>
            <p className="pipeline-desc">
              În laboratorul de robotică LSE. Confecționăm brazi și fulgi LED pentru o cauză caritabilă. 
              Tehnologie pusă în slujba oamenilor.
            </p>
            <div className="feat-row">
              <span className="label">FEATURING:</span>
              <span className="value">ANDREI GEORGESCU</span>
            </div>
          </div>

          {/* PROIECT 2: KINETO (MuvOutside) */}
          <div className="pipeline-card">
            <div className="card-header">
              <span className="status-tag">POST-PRODUCTION</span>
            </div>
            <h3>BODY MECHANICS: <br/> KINETO MEDICAL</h3>
            <p className="pipeline-desc">
              Nu poți repara ce nu înțelegi. Învățăm secretele recuperării și biomecanicii de la experți.
            </p>
            <div className="feat-row">
              <span className="label">EVENT BY:</span>
              <span className="value">MUVOUTSIDE</span>
            </div>
          </div>

          {/* PROIECT 3: GĂTIT (Acasă) */}
          <div className="pipeline-card">
            <div className="card-header">
              <span className="status-tag">COMING SOON</span>
            </div>
            <h3>FUEL THE MACHINE: <br/> HOME COOKING</h3>
            <p className="pipeline-desc">
              Fără pretenții de chef. Doar o rețetă simplă, gătită acasă, care funcționează. 
              Combustibil pentru performanță.
            </p>
          </div>

        </div>
      </div>
      {/* --- PARTEA 2: SECȚIUNEA NOUĂ (ACUM E DEDESUBT, NU LÂNGĂ) --- */}
      <div className="pillars-section">
        <h2 className="section-title">METODA <span className="highlight">FLOW</span></h2>
        
        <div className="pillars-container">
          {/* Card 1 */}
          <div className="pillar-card">
            <h3>01. CURIOSITY</h3>
            <p>Nu mi-e rușine să spun "Nu știu". Asta e superputerea mea. 
              Fie că e editare video, psihologie sau sport, absorb informația ca un burete. 
              Evoluez constant pentru că pun întrebări, nu pentru că am răspunsuri.</p>
          </div>
          {/* Card 2 */}
          <div className="pillar-card">
            <h3>02. DYNAMIC</h3>
            <p>Nu pot sta locului. Energia vine din acțiune, nu din repaus. 
              Mereu cu echipamentul la mine, gata de o aventură spontană. 
              Viața trebuie trăită în mișcare, povestită cu pasiune și fără frică de nou.</p>
          </div>
          {/* Card 3 */}
          <div className="pillar-card">
            <h3>03. SOLUTION</h3>
            <p>Găsesc o cale. Întotdeauna. Sunt omul pe care te poți baza când e haos, 
              pentru că observ, mă integrez și rezolv. Nu caut perfecțiunea, caut să "mă descurc" 
              și să funcționez, indiferent de situație.</p>
          </div>
        </div>
      </div>

      <footer className="simple-footer">
        <p>© 2024 FLOW PHYSIQUE. NONCONFORMIST & ADAPTABIL.</p>
      </footer>

    </div> /* Aici se închide containerul mare al paginii */
  );
}

export default App;