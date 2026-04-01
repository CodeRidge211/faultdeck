'use client';

import { useState } from 'react';
import { BRANDS, INITIAL_FEED } from '@/data/initial';

export default function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero container animate-fade-in">
        <h1 className="hero-title text-gradient">Something's broken. Let's fix it.</h1>
        <p className="hero-subtitle">Search the error code on your screen, and we'll tell you exactly how to fix it.</p>

        <div className="primary-action-area">
          <div className="mega-search-bar glass-panel">
            <input 
              type="text" 
              placeholder="What does your screen say? (e.g., LE, E2, F8...)" 
              className="huge-search-input"
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  const code = (e.target as HTMLInputElement).value.toUpperCase();
                  if (code === 'LE') window.location.href = '/codes/samsung-washer-le';
                  else alert('Code not found. Try searching for LE or check the Brand Hub.');
                }
              }}
            />
            <button 
              className="btn-primary huge-search-btn"
              onClick={() => {
                const input = document.querySelector('.huge-search-input') as HTMLInputElement;
                const code = input.value.toUpperCase();
                if (code === 'LE') window.location.href = '/codes/samsung-washer-le';
                else alert('Code not found. Try searching for LE or check the Brand Hub.');
              }}
            >
              Find Fix 🔍
            </button>
          </div>

          <div className="no-code-path">
            <p className="no-code-text">Blank screen? No error code?</p>
            <a href="/symptom-checker" className="symptom-btn glass-panel">
              <span className="symptom-icon">📋</span>
              <span className="symptom-text">Help me figure out what's wrong</span>
              <span className="symptom-arrow">→</span>
            </a>
          </div>
        </div>

        <div className="popular-brands">
          <p>Popular brands:</p>
          <div className="brand-chips">
            {BRANDS.map(brand => (
              <a key={brand.name} href={`/brands/${brand.name.toLowerCase()}`} className="brand-chip">
                <span>{brand.icon}</span> {brand.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Live Feed Section */}
      <section className="live-feed-section">
        <div className="container">
          <div className="section-header">
            <h2>Recent Solutions</h2>
            <div className="pulse-indicator">
              <span className="pulse"></span> Live diagnosing
            </div>
          </div>
          <div className="feed-grid">
            {INITIAL_FEED.map((item, idx) => (
              <div key={idx} className="feed-item glass-panel">
                <div className="feed-status">
                  <span className={`status-icon ${item.status.replace(' ', '-')}`}></span>
                  {item.status === 'fixed' ? '✅ Fixed' : '🔍 Diagnosed'}
                </div>
                <div className="feed-body">
                  <h4>{item.device} <strong>{item.code}</strong></h4>
                  <p>in {item.location}</p>
                </div>
                <div className="feed-time">{item.timestamp}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .home-container {
          padding-bottom: 5rem;
        }

        .hero {
          text-align: center;
          padding: 6rem 1.5rem 8rem;
        }

        .hero-title {
          font-size: 3.5rem;
          font-weight: 800;
          margin-bottom: 1.5rem;
          letter-spacing: -1.5px;
          line-height: 1.1;
        }

        .hero-subtitle {
          font-size: 1.25rem;
          color: var(--text-secondary);
          max-width: 600px;
          margin: 0 auto 3rem;
        }

        .primary-action-area {
          max-width: 800px;
          margin: 0 auto 4rem;
        }

        .mega-search-bar {
          display: flex;
          gap: 1rem;
          padding: 0.8rem;
          border-radius: var(--radius-lg);
          border: 1px solid var(--primary);
          box-shadow: 0 10px 30px -10px rgba(59, 130, 246, 0.3);
          margin-bottom: 3rem;
        }

        .huge-search-input {
          flex: 1;
          background: transparent;
          border: none;
          color: white;
          padding: 0 1.5rem;
          font-size: 1.35rem;     /* Massive font for older eyes */
          outline: none;
        }

        .huge-search-input::placeholder {
          color: var(--text-dim);
          font-size: 1.2rem;
        }

        .huge-search-btn {
          font-size: 1.2rem;
          padding: 1rem 2rem;
          border-radius: var(--radius-md);
        }

        .no-code-path {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .no-code-text {
          font-size: 1.1rem;
          color: var(--text-secondary);
          font-weight: 600;
        }

        .symptom-btn {
          display: inline-flex;
          align-items: center;
          gap: 1rem;
          padding: 1.2rem 2rem;
          border-radius: var(--radius-lg);
          border: 1px solid var(--border);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          color: white;
          text-decoration: none;
        }

        .symptom-btn:hover {
          border-color: var(--primary);
          transform: translateY(-4px);
        }

        .symptom-icon {
          font-size: 1.8rem;
        }

        .symptom-text {
          font-size: 1.25rem;
          font-weight: 700;
        }

        .symptom-arrow {
          font-size: 1.5rem;
          color: var(--primary);
        }

        .popular-brands {
          margin-top: 4rem;
        }

        .popular-brands p {
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: var(--text-dim);
          margin-bottom: 1.5rem;
        }

        .brand-chips {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .brand-chip {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.6rem 1.2rem;
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          border-radius: 100px;
          font-size: 0.9rem;
          transition: all 0.2s;
        }

        .brand-chip:hover {
          border-color: var(--text-dim);
          background: var(--bg-accent);
        }

        /* Live Feed Styles */
        .live-feed-section {
          padding: 6rem 0;
          background: var(--bg-secondary);
        }

        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 3rem;
        }

        .section-header h2 {
          font-size: 2rem;
          font-weight: 700;
        }

        .pulse-indicator {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          font-size: 0.9rem;
          color: var(--text-dim);
        }

        .pulse {
          width: 8px;
          height: 8px;
          background: var(--success);
          border-radius: 50%;
          display: inline-block;
          box-shadow: 0 0 0 rgba(16, 185, 129, 0.4);
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.4); }
          70% { box-shadow: 0 0 0 10px rgba(16, 185, 129, 0); }
          100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
        }

        .feed-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }

        .feed-item {
          padding: 1.5rem;
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .feed-status {
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .feed-body h4 {
          font-size: 1rem;
          font-weight: 500;
        }

        .feed-body p {
          font-size: 0.85rem;
          color: var(--text-dim);
        }

        .feed-time {
          margin-left: auto;
          font-size: 0.8rem;
          color: var(--text-dim);
        }

        @media (max-width: 768px) {
          .hero-title { font-size: 2.5rem; }
          .entry-points { grid-template-columns: 1fr; }
          .feed-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}
