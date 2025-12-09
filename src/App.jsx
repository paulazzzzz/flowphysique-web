import React from 'react';

function App() {
  // --- CONFIGURARE LINK-URI ȘI DETALII ---
  const socialLinks = {
    instagram: "https://www.instagram.com/alexandru.flw",
    youtube: "https://www.youtube.com/@FlowPhysique" // Verifică dacă acesta e linkul exact de canal
  };

  const profileData = {
    title: "FlowPhysique",
    subtitle: "Alexandru | Fitness & Lifestyle",
    description: "Transformă-ți corpul și mindset-ul. Urmărește procesul complet pe YouTube și Instagram.",
    // Aici poți pune un link direct către o poză sau importa una locală
    avatarUrl: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
  };

  // --- STILURI (CSS-in-JS) ---
  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#0f0f0f', // Dark Mode Premium
      color: '#ffffff',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      padding: '20px',
      textAlign: 'center'
    },
    avatar: {
      width: '120px',
      height: '120px',
      borderRadius: '50%',
      objectFit: 'cover',
      border: '3px solid #ffffff',
      marginBottom: '20px',
      boxShadow: '0 4px 15px rgba(0,0,0,0.5)'
    },
    title: {
      fontSize: '2rem',
      fontWeight: '800',
      marginBottom: '5px',
      letterSpacing: '1px',
      background: 'linear-gradient(90deg, #ffffff, #a0a0a0)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    },
    subtitle: {
      fontSize: '1.1rem',
      color: '#888',
      marginBottom: '15px',
      fontWeight: '500'
    },
    description: {
      fontSize: '0.95rem',
      color: '#cccccc',
      maxWidth: '400px',
      marginBottom: '40px',
      lineHeight: '1.5'
    },
    buttonContainer: {
      width: '100%',
      maxWidth: '400px',
      display: 'flex',
      flexDirection: 'column',
      gap: '15px'
    },
    button: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '16px 24px',
      borderRadius: '12px',
      textDecoration: 'none',
      fontSize: '1rem',
      fontWeight: 'bold',
      transition: 'transform 0.2s, opacity 0.2s',
      color: 'white',
      border: 'none',
      cursor: 'pointer',
      boxShadow: '0 4px 6px rgba(0,0,0,0.3)'
    },
    youtubeBtn: {
      backgroundColor: '#FF0000', // YouTube Red
    },
    instagramBtn: {
      background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)', // Insta Gradient
    },
    icon: {
      marginRight: '10px',
      width: '24px',
      height: '24px',
      fill: 'white'
    },
    footer: {
      marginTop: '50px',
      fontSize: '0.8rem',
      color: '#444'
    }
  };

  return (
    <div style={styles.container}>
      {/* 1. Fotografie Profil */}
      <img 
        src={profileData.avatarUrl} 
        alt="Alexandru FlowPhysique" 
        style={styles.avatar} 
      />

      {/* 2. Text Introductiv */}
      <h1 style={styles.title}>{profileData.title}</h1>
      <h2 style={styles.subtitle}>{profileData.subtitle}</h2>
      <p style={styles.description}>{profileData.description}</p>

      {/* 3. Butoanele de acțiune */}
      <div style={styles.buttonContainer}>
        
        {/* Buton YouTube */}
        <a 
          href={socialLinks.youtube} 
          target="_blank" 
          rel="noopener noreferrer" 
          style={{...styles.button, ...styles.youtubeBtn}}
          onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          {/* SVG Icon YouTube */}
          <svg style={styles.icon} viewBox="0 0 24 24">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
          Abonează-te pe YouTube
        </a>

        {/* Buton Instagram */}
        <a 
          href={socialLinks.instagram} 
          target="_blank" 
          rel="noopener noreferrer" 
          style={{...styles.button, ...styles.instagramBtn}}
          onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          {/* SVG Icon Instagram */}
          <svg style={styles.icon} viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
          </svg>
          Urmărește-mă pe Instagram
        </a>
      </div>

      <footer style={styles.footer}>
        © {new Date().getFullYear()} FlowPhysique
      </footer>
    </div>
  );
}

export default App;