import React from 'react';

interface PartCardProps {
  asin: string;
  name: string;
  price: string;
  description: string;
}

export const PartCard: React.FC<PartCardProps> = ({ asin, name, price, description }) => {
  const affiliateLink = `https://www.amazon.com/dp/${asin}?tag=coderidge20-20`;

  return (
    <div className="part-card glass-panel">
      <div className="part-top">
        <div className="part-icon">📦</div>
        <div className="part-info">
          <h4 className="part-name">{name}</h4>
          <p className="part-price">Estimated: {price}</p>
        </div>
      </div>
      <p className="part-desc">{description}</p>
      <a href={affiliateLink} target="_blank" rel="noopener noreferrer" className="btn-primary buy-btn">
        View on Amazon
      </a>
      
      <style jsx>{`
        .part-card {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .part-top {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .part-icon {
          font-size: 1.5rem;
          background: var(--bg-accent);
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: var(--radius-sm);
        }

        .part-name {
          font-size: 1rem;
          font-weight: 600;
          color: white;
          margin-bottom: 0.2rem;
        }

        .part-price {
          font-size: 0.85rem;
          color: var(--success);
          font-weight: 700;
        }

        .part-desc {
          font-size: 0.9rem;
          color: var(--text-dim);
          line-height: 1.4;
        }

        .buy-btn {
          width: 100%;
          padding: 0.8rem;
          font-size: 0.9rem;
        }
      `}</style>
    </div>
  );
};
