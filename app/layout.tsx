import React from 'react';
import './globals.css';

export const metadata = {
  title: 'Agentic Automator',
  description: 'AI-first automation orchestrator for solopreneurs',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'Inter, system-ui, sans-serif', background: '#0b1020', color: '#e6e6e6', margin: 0 }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '24px' }}>
          <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
            <h1 style={{ fontSize: 24, margin: 0 }}>Agentic Automator</h1>
            <nav style={{ opacity: 0.8 }}>Fully automated workflows, AI-only</nav>
          </header>
          {children}
          <footer style={{ marginTop: 48, opacity: 0.6, fontSize: 12 }}>
            Built for high-scale solo operations. Deploy on Vercel.
          </footer>
        </div>
      </body>
    </html>
  );
}
