import React, { useEffect, useState } from 'react'

const GearIcon = () => (
  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
)

const HeartIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="#e63e6d" stroke="none">
    <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z"/>
  </svg>
)

export default function App() {
  const [dots, setDots] = useState('.')
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    const dotsInterval = setInterval(() => {
      setDots(d => d.length >= 3 ? '.' : d + '.')
    }, 600)
    const rotateInterval = setInterval(() => {
      setRotation(r => (r + 1) % 360)
    }, 16)
    return () => {
      clearInterval(dotsInterval)
      clearInterval(rotateInterval)
    }
  }, [])

  return (
    <div style={styles.page}>
      {/* Background blobs */}
      <div style={styles.blob1} />
      <div style={styles.blob2} />

      <div style={styles.card}>
        {/* Logo */}
        <div style={styles.logoRow}>
          <HeartIcon />
          <span style={styles.logoText}>Singelportalen</span>
        </div>

        {/* Animated gear */}
        <div style={{ ...styles.gearWrap, transform: `rotate(${rotation}deg)` }}>
          <GearIcon />
        </div>

        {/* Heading */}
        <h1 style={styles.heading}>
          Vi är under<br />underhåll
        </h1>

        {/* Subtext */}
        <p style={styles.sub}>
          Vi förbättrar webbplatsen för en bättre upplevelse.<br />
          Vi är snart tillbaka{dots}
        </p>

        {/* Divider */}
        <div style={styles.divider} />

        {/* Footer note */}
        <p style={styles.footer}>
          Tack för ditt tålamod ❤️
        </p>
      </div>
    </div>
  )
}

const styles = {
  page: {
    minHeight: '100vh',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, #0f0f0f 0%, #1a0a12 50%, #0f0f0f 100%)',
    position: 'relative',
    overflow: 'hidden',
    padding: '24px',
  },
  blob1: {
    position: 'absolute',
    width: '500px',
    height: '500px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(230,62,109,0.12) 0%, transparent 70%)',
    top: '-100px',
    left: '-100px',
    pointerEvents: 'none',
  },
  blob2: {
    position: 'absolute',
    width: '400px',
    height: '400px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(230,62,109,0.08) 0%, transparent 70%)',
    bottom: '-80px',
    right: '-80px',
    pointerEvents: 'none',
  },
  card: {
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: '24px',
    padding: '56px 48px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px',
    maxWidth: '480px',
    width: '100%',
    backdropFilter: 'blur(20px)',
    boxShadow: '0 32px 64px rgba(0,0,0,0.4)',
    position: 'relative',
    zIndex: 1,
  },
  logoRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '8px',
  },
  logoText: {
    fontSize: '22px',
    fontWeight: '700',
    background: 'linear-gradient(90deg, #e63e6d, #ff6b9d)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    letterSpacing: '-0.5px',
  },
  gearWrap: {
    color: '#e63e6d',
    opacity: 0.85,
    marginBottom: '4px',
    willChange: 'transform',
  },
  heading: {
    fontSize: '36px',
    fontWeight: '700',
    textAlign: 'center',
    lineHeight: '1.2',
    letterSpacing: '-0.5px',
    color: '#ffffff',
  },
  sub: {
    fontSize: '16px',
    color: 'rgba(255,255,255,0.55)',
    textAlign: 'center',
    lineHeight: '1.7',
    fontWeight: '400',
  },
  divider: {
    width: '48px',
    height: '2px',
    background: 'linear-gradient(90deg, #e63e6d, #ff6b9d)',
    borderRadius: '2px',
    margin: '4px 0',
  },
  footer: {
    fontSize: '14px',
    color: 'rgba(255,255,255,0.35)',
    textAlign: 'center',
  },
}
