'use client';

import { CATEGORIES } from '@/data/initial';

export default function CategoriesPage() {
  return (
    <div className="categories-page container animate-fade-in">
      <header className="page-header">
        <h1>Browse by Category</h1>
        <p>Explore error codes and repair guides for all major device types.</p>
      </header>

      <div className="category-list-grid">
        {CATEGORIES.map(cat => (
          <a key={cat.id} href={`/categories/${cat.id}`} className="category-card glass-panel">
            <div className="category-icon-large">{cat.icon}</div>
            <div className="category-info">
              <h3>{cat.name}</h3>
              <p>Common issues, error codes, and DIY fix guides for {cat.name.toLowerCase()} devices.</p>
              <span className="view-link">Browse {cat.name} →</span>
            </div>
          </a>
        ))}
      </div>

      <style jsx>{`
        .categories-page {
          padding-top: 4rem;
          padding-bottom: 8rem;
        }

        .page-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .page-header h1 {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 1rem;
        }

        .page-header p {
          color: var(--text-secondary);
          font-size: 1.25rem;
        }

        .category-list-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }

        .category-card {
          padding: 3rem;
          display: flex;
          align-items: center;
          gap: 2rem;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .category-card:hover {
          transform: translateY(-5px);
          border-color: var(--primary);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
        }

        .category-icon-large {
          font-size: 4rem;
          background: var(--bg-accent);
          width: 100px;
          height: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: var(--radius-md);
          flex-shrink: 0;
        }

        .category-info h3 {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }

        .category-info p {
          color: var(--text-dim);
          font-size: 1rem;
          margin-bottom: 1.5rem;
          line-height: 1.5;
        }

        .view-link {
          color: var(--primary);
          font-weight: 700;
          font-size: 0.95rem;
        }

        @media (max-width: 900px) {
          .category-list-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}
