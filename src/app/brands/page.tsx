'use client';

import { BRANDS } from '@/data/initial';

export default function BrandsPage() {
  return (
    <div className="brands-page container animate-fade-in">
      <header className="page-header">
        <h1>Find by Brand</h1>
        <p>Expert diagnostic error codes and DIY fix guides for all major manufacturers.</p>
      </header>

      <div className="brand-list-grid">
        {BRANDS.map(brand => (
          <a key={brand.name} href={`/brands/${brand.name.toLowerCase()}`} className="brand-card glass-panel">
            <div className="brand-icon-box">{brand.icon}</div>
            <div className="brand-content">
              <h3>{brand.name}</h3>
              <p>Common issues, troubleshooting, and replacement parts for {brand.name} devices.</p>
              <span className="view-link">Browse {brand.name} Codes →</span>
            </div>
          </a>
        ))}
      </div>

      <style jsx>{`
        .brands-page {
          padding-top: 4rem;
          padding-bottom: 8rem;
        }

        .page-header {
          text-align: center;
          margin-bottom: 5rem;
        }

        .page-header h1 {
          font-size: 3.5rem;
          font-weight: 800;
          margin-bottom: 1.5rem;
          letter-spacing: -2px;
        }

        .page-header p {
          color: var(--text-secondary);
          font-size: 1.25rem;
          max-width: 600px;
          margin: 0 auto;
        }

        .brand-list-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .brand-card {
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 1.5rem;
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .brand-card:hover {
          transform: translateY(-8px);
          border-color: var(--primary);
        }

        .brand-icon-box {
          font-size: 3rem;
          background: var(--bg-accent);
          width: 80px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          border: 1px solid var(--border);
        }

        .brand-content h3 {
          font-size: 1.5rem;
          margin-bottom: 0.8rem;
        }

        .brand-content p {
          color: var(--text-dim);
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .view-link {
          color: var(--primary);
          font-weight: 700;
          font-size: 0.9rem;
        }

        @media (max-width: 1000px) {
          .brand-list-grid { grid-template-columns: 1fr 1fr; }
        }

        @media (max-width: 650px) {
          .brand-list-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}
