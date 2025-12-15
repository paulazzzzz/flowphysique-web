import React from 'react';
import './App.css';

function App() {
  // Datele profilului
  const profile = {
    name: "Alexandru Flocea",
    handle: "@alexandru.flw",
    // Poza: Caută una în care face o activitate sau e un portret clar, determinat
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", 
    tagline: "Discipline. Learning. Flow.",
    bio: "Fost militar. Actual explorator. Misiunea mea este să învăț skill-uri noi, să îmi depășesc limitele și să documentez tot procesul."
  };

  // Aceasta este zona care îl face diferit. Aici scrie ce învață ACUM.
  // Poți schimba textul asta o dată pe lună.
  const currentMission = {
    title: "Proiectul curent: Muay Thai & Content Mastery",
    status: "În desfășurare",
    description: "Documentez procesul de trecere de la bodybuilding la sporturi de contact și editare video avansată."
  };

  return (
    <div className="app-container">
      
      {/* 1. HERO SECTION (Identitatea) */}
      <div className="hero-card">
        <img src={profile.avatar} alt="Alex Profile" className="profile-avatar" />
        <h1 className="brand-name">FlowPhysique</h1>
        <p className="tagline">{profile.tagline}</p>
        
        {/* Badges - Cuvinte cheie care îl descriu */}
        <div className="badges-container">
          <div className="badge">🎖️ Ex-Military</div>
          <div className="badge">🚀 Creator</div>
          <div className="badge">🧠 Lifelong Learner</div>
        </div>

        <p style={{ color: '#bbb', lineHeight: '1.6' }}>
          {profile.bio}
        </p>
      </div>

      {/* 2. CONTENT AREA (Misiuni & Linkuri) */}
      <div className="right-column">
        
        {/* Cardul "Ce fac acum?" */}
        <div className="mission-card">
          <div className="mission-label">
            <div className="pulsing-dot"></div>
            Current Mission
          </div>
          <h3 className="mission-title">{currentMission.title}</h3>
          <p className="mission-desc">{currentMission.description}</p>
        </div>

        {/* Link-urile Principale */}
        <div className="links-container">
          
          {/* YouTube */}
          <a href="https://www.youtube.com/@alexandruflocea7215" target="_blank" rel="noreferrer" className="link-btn">
            <div className="btn-content">
              {/* Icon YouTube Simplu */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#FF0000"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
              <div>
                <div className="btn-title">YouTube Vlog</div>
                <div className="btn-subtitle">Episoade lungi & Tutoriale</div>
              </div>
            </div>
            {/* Săgeată */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>

          {/* Instagram */}
          <a href="https://www.instagram.com/alexandru.flw" target="_blank" rel="noreferrer" className="link-btn">
            <div className="btn-content">
               {/* Icon Instagram Simplu */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="url(#insta-grad)"><defs><linearGradient id="insta-grad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#f09433" /><stop offset="60%" stopColor="#dc2743" /><stop offset="100%" stopColor="#bc1888" /></linearGradient></defs><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
              <div>
                <div className="btn-title">Instagram</div>
                <div className="btn-subtitle">Daily Updates & Short content</div>
              </div>
            </div>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>

          {/* Colaborări / Contact */}
          <a href="mailto:contact@flowphysique.com" className="link-btn">
             <div className="btn-content">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
               <div>
                <div className="btn-title">Colaborări</div>
                <div className="btn-subtitle">Hai să construim ceva împreună</div>
              </div>
             </div>
             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>

        </div>
      </div>
    </div>
  );
}

export default App;