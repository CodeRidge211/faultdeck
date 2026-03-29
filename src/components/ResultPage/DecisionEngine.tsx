import React from 'react';

type Verdict = 'diy' | 'proceed_carefully' | 'call_pro' | 'safety_risk';

interface DecisionEngineProps {
  verdict: Verdict;
}

const VERDICT_DATA = {
  diy: {
    color: '#10b981',
    label: 'DIY Friendly',
    message: 'Most people can fix this themselves in under an hour. Here\'s what you need:',
    cta: 'View Recommended Parts'
  },
  proceed_carefully: {
    color: '#f59e0b',
    label: 'Proceed Carefully',
    message: 'This is fixable but requires comfort with tools. Follow the steps carefully:',
    cta: 'Parts & Local Repair'
  },
  call_pro: {
    color: '#ef4444',
    label: 'Call a Professional',
    message: 'This one\'s beyond DIY. Here\'s what to tell your technician:',
    cta: 'Check Home Warranty'
  },
  safety_risk: {
    color: '#000000',
    label: 'Safety Risk',
    message: 'Stop using this device immediately. This requires a certified technician.',
    cta: 'Emergency Repair'
  }
};

export const DecisionEngine: React.FC<DecisionEngineProps> = ({ verdict }) => {
  const data = VERDICT_DATA[verdict];

  return (
    <div className="decision-engine glass-panel">
      <div className="verdict-banner" style={{ borderLeft: `4px solid ${data.color}` }}>
        <div className="verdict-header">
          <span className="verdict-label" style={{ color: data.color }}>{data.label}</span>
          <span className="verdict-status">Verdict</span>
        </div>
        <p className="verdict-message">{data.message}</p>
        <button className="btn-primary" style={{ background: data.color === '#000' ? '#222' : data.color, width: '100%', marginTop: '1rem' }}>
          {data.cta}
        </button>
      </div>

      <style jsx>{`
        .decision-engine {
          padding: 1.5rem;
          margin-bottom: 2rem;
        }

        .verdict-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.8rem;
        }

        .verdict-label {
          font-weight: 800;
          font-size: 1.25rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .verdict-status {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: var(--text-dim);
        }

        .verdict-message {
          font-size: 1rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }
      `}</style>
    </div>
  );
};
