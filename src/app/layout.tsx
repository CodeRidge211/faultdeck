import type { Metadata } from "next";
import Script from "next/script";
import LayoutStyles from "./layout-styles";

export const metadata: Metadata = {
  title: "FaultDeck | Something's broken. Let's figure out why.",
  description: "The ultimate database for appliance, electronics, HVAC, and smart home error codes. Instant diagnostics and DIY fix guides.",
  keywords: ["error codes", "fault codes", "appliance repair", "HVAC codes", "electronic fixes", "Samsung error codes", "Whirlpool error codes"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-NLDTKK0LFK"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-NLDTKK0LFK');
            `,
          }}
        />
        <LayoutStyles />
        <div className="layout-wrapper">
          <header className="site-header container">
            <div className="logo">
              <span className="logo-text">Fault<span>Deck</span></span>
            </div>
            <nav className="main-nav">
              <a href="/brands" className="nav-link">Brands</a>
              <a href="/categories" className="nav-link">Categories</a>
              <a href="/symptom-checker" className="nav-link btn-secondary" style={{ padding: '0.4rem 0.8rem', fontSize: '14px' }}>Symptom Checker</a>
            </nav>
          </header>

          <main>{children}</main>

          <footer className="site-footer">
            <div className="container footer-content">
              <div className="footer-brand">
                <span className="logo-text">Fault<span>Deck</span></span>
                <p>Helping you diagnose and fix what's broken.</p>
              </div>
              <div className="footer-links">
                <div className="footer-column">
                  <h3>Browse</h3>
                  <a href="/brands">All Brands</a>
                  <a href="/categories">All Categories</a>
                  <a href="/popular">Popular Codes</a>
                </div>
                <div className="footer-column">
                  <h3>Legal</h3>
                  <a href="/privacy">Privacy Policy</a>
                  <a href="/terms">Terms of Service</a>
                </div>
                <div className="footer-column">
                  <h3>Network</h3>
                  <a href="https://coderidge.com" target="_blank" rel="noopener noreferrer" className="highlight-link">
                    Got a car fault code? Try CodeRidge →
                  </a>
                </div>
              </div>
            </div>
            <div className="footer-bottom container">
              <p>&copy; {new Date().getFullYear()} Sovereign Ridge Partners LLC. Confidential.</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
