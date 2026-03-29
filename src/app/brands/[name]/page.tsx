'use client';

import { useParams } from 'next/navigation';
import { BRANDS } from '@/data/initial';
import { MOCK_CODES } from '@/data/codes';

export default function BrandHub() {
  const { name } = useParams();
  const brandName = (name as string).charAt(0).toUpperCase() + (name as string).slice(1);
  const brand = BRANDS.find(b => b.name.toLowerCase() === (name as string).toLowerCase());

  // Filter mock codes for this brand
  const brandCodes = Object.values(MOCK_CODES).filter(c => c.brand.toLowerCase() === (name as string).toLowerCase());

  return (
    <div className="brand-hub container animate-fade-in">
      <header className="brand-header glass-panel">
        <div className="brand-info">
          <div className="brand-logo-large">{brand?.icon}</div>
          <div className="brand-text">
            <h1>{brandName} Error Codes & Repair Guide</h1>
            <p>Comprehensive diagnostic database for all {brandName} appliances and devices.</p>
          </div>
        </div>
      </header>

      <div className="stats-row">
        <div className="stat-card">
          <span className="stat-value">500+</span>
          <span className="stat-label">Codes Indexed</span>
        </div>
        <div className="stat-card">
          <span className="stat-value">$142</span>
          <span className="stat-label">Avg. Repair Cost</span>
        </div>
        <div className="stat-card">
          <span className="stat-value">82%</span>
          <span className="stat-label">DIY Friendly</span>
        </div>
        <div className="stat-card">
          <span className="stat-value">24/7</span>
          <span className="stat-label">Support Status</span>
        </div>
      </div>

      <div className="hub-layout grid-2">
        <div className="hub-left">
          <section className="info-section">
            <h2 className="section-title">Most Searched {brandName} Codes</h2>
            <div className="codes-list">
              {brandCodes.length > 0 ? brandCodes.map((c, idx) => (
                <a key={idx} href={`/codes/${c.slug}`} className="code-row glass-panel">
                  <div className="code-id">{c.code}</div>
                  <div className="code-desc">
                    <h4>{c.device_type} {c.code} Error</h4>
                    <p>{c.plain_english}</p>
                  </div>
                  <div className="code-arrow">→</div>
                </a>
              )) : (
                <p>Loading {brandName}'s most common error codes...</p>
              )}
            </div>
          </section>
        </div>

        <aside className="hub-right">
          <div className="symptom-promo glass-panel">
            <h3>Not sure what's wrong?</h3>
            <p>Use our {brandName}-specific symptom checker to find the right error code.</p>
            <a href="/symptom-checker" className="btn-primary" style={{ marginTop: '1rem', width: '100%' }}>
              Start Global {brandName} Diagnosis
            </a>
          </div>

          <section className="info-section">
            <h2 className="section-title">Common {brandName} Fixes</h2>
            <ul className="cause-list">
              <li>How to reset a {brandName} Motherboard</li>
              <li>Cleaning the filter on {brandName} wash systems</li>
              <li>Calibrating {brandName} sensors after repair</li>
              <li>Ordering genuine parts for {brandName} devices</li>
            </ul>
          </section>
        </aside>
      </div>

      <style jsx>{`
        .brand-hub {
          padding-top: 2rem;
          padding-bottom: 8rem;
        }

        .brand-header {
          padding: 3rem;
          margin-bottom: 3rem;
        }

        .brand-info {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .brand-logo-large {
          font-size: 4rem;
          background: var(--bg-accent);
          width: 100px;
          height: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: var(--radius-md);
        }

        .brand-text h1 {
          font-size: 2.25rem;
          font-weight: 800;
          margin-bottom: 0.5rem;
        }

        .brand-text p {
          color: var(--text-dim);
          font-size: 1.1rem;
        }

        .stats-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          margin-bottom: 4rem;
        }

        .stat-card {
          padding: 1.5rem;
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          text-align: center;
        }

        .stat-value {
          display: block;
          font-size: 1.75rem;
          font-weight: 800;
          color: var(--primary);
          margin-bottom: 0.2rem;
        }

        .stat-label {
          font-size: 0.8rem;
          color: var(--text-dim);
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .section-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 2rem;
        }

        .codes-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .code-row {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          padding: 1.25rem;
          transition: transform 0.2s, border-color 0.2s;
        }

        .code-row:hover {
          transform: translateX(5px);
          border-color: var(--primary);
        }

        .code-id {
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--primary);
          background: rgba(59, 130, 246, 0.1);
          width: 80px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: var(--radius-sm);
        }

        .code-desc h4 {
          font-size: 1.1rem;
          margin-bottom: 0.2rem;
        }

        .code-desc p {
          font-size: 0.9rem;
          color: var(--text-dim);
        }

        .code-arrow {
          margin-left: auto;
          font-size: 1.5rem;
          color: var(--text-dim);
        }

        .symptom-promo {
          padding: 2rem;
          margin-bottom: 3rem;
          text-align: center;
          background: linear-gradient(135deg, var(--bg-accent) 0%, #1a1b23 100%);
        }

        .cause-list {
          padding-left: 1.2rem;
        }

        .cause-list li {
          margin-bottom: 1rem;
          color: var(--text-secondary);
        }

        @media (max-width: 1000px) {
          .stats-row { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 768px) {
          .brand-info { flex-direction: column; text-align: center; }
        }
      `}</style>
    </div>
  );
}
