'use client';

import { useState } from 'react';

interface RecallCheckProps {
  brand: string;
  device: string;
}

export const RecallCheck: React.FC<RecallCheckProps> = ({ brand, device }) => {
  const [checking, setChecking] = useState(false);
  const [result, setResult] = useState<'none' | 'found' | null>(null);

  const performCheck = async () => {
    setChecking(true);
    // Simulate API query to CPSC/NHTSA
    await new Promise(resolve => setTimeout(resolve, 1500));
    setChecking(false);
    setResult('none'); // Mocking no recall for now
  };

  return (
    <div className="recall-check">
      {!result ? (
        <button className="btn-secondary recall-btn" onClick={performCheck} disabled={checking}>
          {checking ? 'Checking Recalls...' : `Check for Active Recalls on Your ${brand} ${device}`}
        </button>
      ) : result === 'found' ? (
        <div className="recall-banner found">
          <div className="recall-icon">⚠️</div>
          <div className="recall-text">
            <h4>Active recall found!</h4>
            <p>This may be covered for free. <a href="#">Here's how to claim it →</a></p>
          </div>
        </div>
      ) : (
        <div className="recall-banner none">
          <div className="recall-icon">✅</div>
          <div className="recall-text">
            <h4>No active recall found for this model.</h4>
            <p>Proceed with the fix below.</p>
          </div>
        </div>
      )}

      <style jsx>{`
        .recall-check {
          margin-bottom: 2rem;
        }

        .recall-btn {
          width: 100%;
          padding: 1.2rem;
          border-color: var(--primary);
          color: var(--primary);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .recall-banner {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          padding: 1.5rem;
          border-radius: var(--radius-md);
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border);
        }

        .recall-banner.found {
          background: rgba(16, 185, 129, 0.1);
          border-color: var(--success);
          color: var(--success);
        }

        .recall-banner.found a {
          text-decoration: underline;
        }

        .recall-banner.none h4 {
          color: var(--text-secondary);
        }

        .recall-icon {
          font-size: 2rem;
        }

        .recall-text h4 {
          font-size: 1.1rem;
          margin-bottom: 0.2rem;
        }
      `}</style>
    </div>
  );
};
