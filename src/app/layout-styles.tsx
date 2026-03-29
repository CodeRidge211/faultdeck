'use client';

export default function LayoutStyles() {
  return (
    <style jsx global>{`
      .layout-wrapper {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
      }

      .site-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 2rem;
        padding-bottom: 2rem;
      }

      .logo-text {
        font-size: 1.5rem;
        font-weight: 700;
        letter-spacing: -0.5px;
      }

      .logo-text span {
        color: var(--primary);
      }

      .main-nav {
        display: flex;
        align-items: center;
        gap: 2rem;
      }

      .nav-link {
        font-size: 0.95rem;
        color: var(--text-secondary);
        transition: color 0.2s;
      }

      .nav-link:hover {
        color: white;
      }

      .site-footer {
        margin-top: auto;
        border-top: 1px solid var(--border);
        padding: 4rem 0 2rem;
        background: var(--bg-secondary);
      }

      .footer-content {
        display: grid;
        grid-template-columns: 2fr 3fr;
        gap: 4rem;
        margin-bottom: 4rem;
      }

      .footer-brand p {
        margin-top: 1rem;
        max-width: 300px;
        color: var(--text-dim);
      }

      .footer-links {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
      }

      .footer-column h3 {
        font-size: 0.85rem;
        text-transform: uppercase;
        letter-spacing: 1px;
        color: var(--text-dim);
        margin-bottom: 1.5rem;
      }

      .footer-column a {
        display: block;
        margin-bottom: 0.8rem;
        color: var(--text-secondary);
        font-size: 0.9rem;
        transition: color 0.2s;
      }

      .footer-column a:hover {
        color: white;
      }

      .highlight-link {
        padding: 0.5rem 1rem;
        background: rgba(59, 130, 246, 0.1);
        border: 1px solid rgba(59, 130, 246, 0.2);
        border-radius: var(--radius-sm);
        color: var(--primary) !important;
      }

      .footer-bottom {
        border-top: 1px solid var(--border);
        padding-top: 2rem;
        text-align: center;
        font-size: 0.85rem;
        color: var(--text-dim);
      }

      @media (max-width: 768px) {
        .footer-content {
          grid-template-columns: 1fr;
          gap: 2rem;
        }
        .main-nav {
          display: none;
        }
      }
    `}</style>
  );
}
