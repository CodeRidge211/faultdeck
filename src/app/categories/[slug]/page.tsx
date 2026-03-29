'use client';

import { useParams } from 'next/navigation';
import { CATEGORIES } from '@/data/initial';
import { SYMPTOM_MAP } from '@/data/symptoms';
import { MOCK_CODES } from '@/data/codes';

export default function CategoryHub() {
  const { slug } = useParams();
  const categoryId = slug as string;
  const category = CATEGORIES.find(c => c.id === categoryId);
  const mapData = SYMPTOM_MAP[categoryId];
  
  // Filter mock codes for this category
  const categoryCodes = Object.values(MOCK_CODES).filter(c => c.category === categoryId);

  return (
    <div className="category-hub container animate-fade-in">
      <header className="page-header glass-panel">
        <div className="header-info">
          <div className="cat-logo-box">{category?.icon}</div>
          <div className="cat-text">
            <h1>{category?.name} Error Codes & DIY Guides</h1>
            <p>Diagnose and fix issues for all {category?.name.toLowerCase()} devices.</p>
          </div>
        </div>
      </header>

      <div className="hub-layout grid-2">
        <div className="hub-left">
          <section className="info-section">
            <h2 className="section-title">Most Common {category?.name} Errors</h2>
            <div className="codes-list">
              {categoryCodes.length > 0 ? categoryCodes.map((c, idx) => (
                <a key={idx} href={`/codes/${c.slug}`} className="code-row glass-panel">
                  <div className="code-id">{c.code}</div>
                  <div className="code-desc">
                    <h4>{c.brand} {c.device_type}</h4>
                    <p>{c.plain_english}</p>
                  </div>
                  <div className="code-arrow">→</div>
                </a>
              )) : (
                <p>Browsing {category?.name} diagnostic database...</p>
              )}
            </div>
          </section>

          <section className="info-section">
            <h2 className="section-title">Common {category?.name} Symptoms</h2>
            <div className="symptom-chips">
              {mapData?.symptoms.map((s: any) => (
                <a key={s.id} href={`/symptom-checker?category=${categoryId}&symptom=${s.id}`} className="symptom-chip">
                  {s.label}
                </a>
              ))}
            </div>
          </section>
        </div>

        <aside className="hub-right">
          <div className="symptom-promo glass-panel">
            <h3>Start {category?.name} Diagnosis</h3>
            <p>Answer a few questions and our symptom checker will map you to the exact repair guide.</p>
            <a href={`/symptom-checker?category=${categoryId}`} className="btn-primary" style={{ marginTop: '1.5rem', width: '100%' }}>
              Run Symptom Checker →
            </a>
          </div>

          <section className="info-section">
            <h2 className="section-title">Covered Brands</h2>
            <div className="brand-list">
              {mapData?.brands.map((b: string) => (
                <a key={b} href={`/brands/${b.toLowerCase()}`} className="brand-link">
                  {b} Support →
                </a>
              ))}
            </div>
          </section>
        </aside>
      </div>

      <style jsx>{`
        .category-hub {
          padding-top: 2rem;
          padding-bottom: 8rem;
        }

        .page-header {
          padding: 3rem;
          margin-bottom: 4rem;
        }

        .header-info {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .cat-logo-box {
          font-size: 4rem;
          background: var(--bg-accent);
          width: 100px;
          height: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: var(--radius-md);
        }

        .cat-text h1 {
          font-size: 2.25rem;
          font-weight: 800;
          margin-bottom: 0.5rem;
        }

        .cat-text p {
          color: var(--text-dim);
          font-size: 1.1rem;
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
          transform: translateX(5.5px);
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
        }

        .code-desc p {
          font-size: 0.85rem;
          color: var(--text-dim);
        }

        .code-arrow {
          margin-left: auto;
          color: var(--text-dim);
        }

        .symptom-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 0.8rem;
        }

        .symptom-chip {
          padding: 0.6rem 1.2rem;
          background: var(--bg-accent);
          border: 1px solid var(--border);
          border-radius: 100px;
          font-size: 0.85rem;
          transition: all 0.2s;
          color: var(--text-secondary);
        }

        .symptom-chip:hover {
          border-color: var(--primary);
          color: white;
        }

        .symptom-promo {
          padding: 2.5rem;
          background: linear-gradient(135deg, var(--bg-accent) 0%, #1a1b23 100%);
          text-align: center;
          margin-bottom: 3rem;
        }

        .brand-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .brand-link {
          color: var(--text-secondary);
          transition: color 0.2s;
        }

        .brand-link:hover { color: var(--primary); }

        @media (max-width: 768px) {
          .header-info { flex-direction: column; text-align: center; }
        }
      `}</style>
    </div>
  );
}
