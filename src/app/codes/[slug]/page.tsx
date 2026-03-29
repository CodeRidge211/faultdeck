'use client';

import { useParams } from 'next/navigation';
import { MOCK_CODES } from '@/data/codes';
import { DecisionEngine } from '@/components/ResultPage/DecisionEngine';
import { RecallCheck } from '@/components/ResultPage/RecallCheck';
import { PartCard } from '@/components/ResultPage/PartCard';

export default function ErrorCodeResult() {
  const { slug } = useParams();
  const data = MOCK_CODES[slug as string];

  if (!data) return <div className="container">Code not found.</div>;

  const severityColor = {
    low: '#10b981',
    medium: '#f59e0b',
    high: '#ef4444',
    call_a_tech: '#000000'
  }[data.severity];

  return (
    <div className="result-page container animate-fade-in">
      <nav className="breadcrumb">
        Home > {data.category.charAt(0).toUpperCase() + data.category.slice(1)} > {data.brand} > {data.device_type}
      </nav>

      <header className="result-header">
        <div className="title-section">
          <h1>{data.brand} {data.device_type} Error Code <strong>{data.code}</strong></h1>
          <div className="severity-badge" style={{ background: severityColor }}>
            {data.severity.replace(/_/g, ' ').toUpperCase()}
          </div>
        </div>
        
        <div className="plain-english-box glass-panel">
          <h3>What this means:</h3>
          <p>{data.plain_english}</p>
        </div>
      </header>

      <div className="main-content grid-2">
        <div className="content-left">
          <DecisionEngine verdict={data.verdict} />
          
          <section className="info-section">
            <h2 className="section-title">Common Causes</h2>
            <ul className="cause-list">
              {data.common_causes.map((cause, idx) => (
                <li key={idx}>{cause}</li>
              ))}
            </ul>
          </section>

          <section className="info-section">
            <h2 className="section-title">Step-by-Step Fix</h2>
            <div className="step-list">
              {data.fix_steps.map((step, idx) => (
                <div key={idx} className="step-item">
                  <span className="step-number">{idx + 1}</span>
                  <p className="step-text">{step}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="pro-tip-box">
            <h4>💡 Pro Tip:</h4>
            <p>{data.pro_tip}</p>
          </div>
        </div>

        <aside className="content-right">
          {data.recall_check && <RecallCheck brand={data.brand} device={data.device_type} />}

          <section className="info-section">
            <h2 className="section-title">Parts You Might Need</h2>
            <div className="parts-grid">
              {data.amazon_parts.map((part, idx) => (
                <PartCard key={idx} {...part} />
              ))}
            </div>
            <p className="affiliate-disclaimer">Disclosure: As an Amazon Associate, FaultDeck earns from qualifying purchases.</p>
          </section>

          <div className="affiliate-block glass-panel">
            <h4>Professional Help</h4>
            {data.severity === 'medium' || data.severity === 'low' ? (
              <p>Not comfortable with tools? <a href="#">Book a repair starting at $79 →</a></p>
            ) : (
              <p>This is a complex repair. <a href="#">Check major appliance warranty coverage →</a></p>
            )}
          </div>

          <section className="info-section">
            <h2 className="section-title">Related {data.brand} Error Codes</h2>
            <div className="related-links">
              {data.related_codes.map((link, idx) => (
                <a key={idx} href={`/codes/${link.slug}`} className="related-link">
                  {data.brand} {link.code} →
                </a>
              ))}
            </div>
          </section>
        </aside>
      </div>

      <style jsx>{`
        .result-page {
          padding-top: 2rem;
          padding-bottom: 8rem;
        }

        .breadcrumb {
          font-size: 0.85rem;
          color: var(--text-dim);
          margin-bottom: 2rem;
        }

        .result-header {
          margin-bottom: 4rem;
        }

        .title-section {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .title-section h1 {
          font-size: 2.5rem;
          font-weight: 800;
        }

        .severity-badge {
          padding: 0.4rem 0.8rem;
          border-radius: 4px;
          font-size: 0.75rem;
          font-weight: 800;
          color: white;
          text-transform: uppercase;
        }

        .plain-english-box {
          padding: 2rem;
          border-left: 4px solid var(--primary);
        }

        .plain-english-box h3 {
          font-size: 0.9rem;
          text-transform: uppercase;
          color: var(--text-dim);
          margin-bottom: 0.5rem;
        }

        .plain-english-box p {
          font-size: 1.4rem;
          font-weight: 600;
          line-height: 1.3;
        }

        .section-title {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          border-bottom: 1px solid var(--border);
          padding-bottom: 0.5rem;
        }

        .info-section {
          margin-bottom: 3rem;
        }

        .cause-list {
          padding-left: 1.5rem;
        }

        .cause-list li {
          margin-bottom: 0.8rem;
          color: var(--text-secondary);
        }

        .step-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .step-item {
          display: flex;
          gap: 1rem;
        }

        .step-number {
          background: var(--bg-accent);
          width: 28px;
          height: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--primary);
          flex-shrink: 0;
        }

        .step-text {
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .pro-tip-box {
          padding: 1.5rem;
          background: rgba(59, 130, 246, 0.05);
          border: 1px dashed var(--primary);
          border-radius: var(--radius-md);
        }

        .pro-tip-box h4 {
          margin-bottom: 0.5rem;
          color: var(--primary);
        }

        .parts-grid {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .affiliate-disclaimer {
          font-size: 0.75rem;
          color: var(--text-dim);
          margin-top: 1rem;
        }

        .affiliate-block {
          padding: 1.5rem;
          margin-bottom: 2rem;
          text-align: center;
        }

        .affiliate-block a {
          color: var(--primary);
          font-weight: 700;
          text-decoration: underline;
        }

        .related-links {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }

        .related-link {
          color: var(--text-secondary);
          font-size: 0.95rem;
          transition: color 0.2s;
        }

        .related-link:hover { color: var(--primary); }

        @media (max-width: 768px) {
          .title-section { flex-direction: column; align-items: flex-start; }
          .title-section h1 { font-size: 2rem; }
        }
      `}</style>
    </div>
  );
}
