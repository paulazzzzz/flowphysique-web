import React from 'react';
import './App.css';

function App() {
  return (
    <div className="stage-container">
      
      {/* 1. LAYER DE EFECTE (Scanlines) */}
      <div className="scanlines"></div>

      {/* 2. LAYER ANIMAȚII (GIF-urile cu Alex) */}
      {/* Aici pui GIF-ul cu el în gardă sau mișcându-se */}
      <img 
        src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmZ0bnZ4bnZ4bnZ4bnZ4bnZ4bnZ4bnZ4bnZ4bnZ4bnZ4bnZ4biZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/l0HlOaQQAiy7F9Okt/giphy.gif" 
        alt="Alex Motion Left" 
        className="alex-anim anim-left" 
      />
      
      {/* Aici pui GIF-ul cu el făcând un semn sau privind */}
      <img 
        src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmZ0bnZ4bnZ4bnZ4bnZ4bnZ4bnZ4bnZ4bnZ4bnZ4bnZ4bnZ4biZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/3o7TKR1b2X5gqLzIHu/giphy.gif" 
        alt="Alex Motion Right" 
        className="alex-anim anim-right" 
      />

      {/* 3. LAYER CONȚINUT (Text și Butoane) */}
      <div className="content-layer">
        
        {/* FĂRĂ POZĂ DE PROFIL. Doar Numele ca Brand */}
        <h1 className="main-title">FLOW<br/>PHYSIQUE</h1>
        <div className="tagline">Expansion / Mastery / Motion</div>

        <p style={{marginBottom: '30px', color: '#ccc', lineHeight: '1.4'}}>
          Nu există limite, doar platouri. 
          Documentez procesul de evoluție continuă.
        </p>

        <div className="btn-stack">
          
          <a href="https://www.youtube.com/@alexandruflocea7215" target="_blank" rel="noreferrer" className="glitch-btn">
            YOUTUBE
            <span style={{fontSize: '0.8rem', marginLeft: '10px', opacity: 0.7}}> // VLOG & LEARNING</span>
          </a>

          <a href="https://www.instagram.com/alexandru.flw" target="_blank" rel="noreferrer" className="glitch-btn">
            INSTAGRAM
            <span style={{fontSize: '0.8rem', marginLeft: '10px', opacity: 0.7}}> // DAILY GRIND</span>
          </a>

          <a href="mailto:contact@flowphysique.com" className="glitch-btn">
            CONTACT
            <span style={{fontSize: '0.8rem', marginLeft: '10px', opacity: 0.7}}> // COLABS</span>
          </a>

        </div>
      </div>

    </div>
  );
}

export default App;