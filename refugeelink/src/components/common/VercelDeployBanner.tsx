import { ExternalLink, Rocket } from 'lucide-react';
import './VercelDeployBanner.css';

export default function VercelDeployBanner() {
  return (
    <section className="vercel-banner" aria-label="Deploy on Vercel">
      <div className="container vercel-banner-inner">
        <div className="vercel-banner-copy">
          <Rocket size={18} />
          <span>Ready to ship this Vite app? Deploy to Vercel in a few minutes.</span>
        </div>
        <a
          className="vercel-banner-link"
          href="https://vercel.com/new"
          target="_blank"
          rel="noopener noreferrer"
        >
          Deploy on Vercel <ExternalLink size={14} />
        </a>
      </div>
    </section>
  );
}
