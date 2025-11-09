


export function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-inner">
        <div className="footer-brand">
          <a className="brand-link" href="/" aria-label="Homepage">
            <div className="brand-logo" aria-hidden="true">🟦</div>
            <span className="brand-name">YourSite</span>
          </a>
          <p className="brand-desc">Simple. Fast. Reliable.</p>
        </div>

        <nav className="footer-nav" aria-label="Footer navigation">
          <div className="nav-column">
            <h4 className="col-title">Product</h4>
            <a href="/features" className="footer-link">Features</a>
            <a href="/pricing" className="footer-link">Pricing</a>
            <a href="/docs" className="footer-link">Docs</a>
          </div>

          <div className="nav-column">
            <h4 className="col-title">Company</h4>
            <a href="/about" className="footer-link">About</a>
            <a href="/careers" className="footer-link">Careers</a>
            <a href="/contact" className="footer-link">Contact</a>
          </div>

          <div className="nav-column">
            <h4 className="col-title">Resources</h4>
            <a href="/blog" className="footer-link">Blog</a>
            <a href="/help" className="footer-link">Help Center</a>
            <a href="/privacy" className="footer-link">Privacy</a>
          </div>
        </nav>

        <div className="footer-ad-newsletter" aria-label="Newsletter and ad">
          <div className="ad-box" aria-hidden="true">
            <strong>Ad spot</strong>
            <p className="ad-text">Promote your offer here — short tagline or CTA.</p>
            <a className="ad-cta" href="/advertise">Advertise with us</a>
          </div>

          <form className="newsletter" onSubmit={(e) => e.preventDefault()} aria-label="Subscribe to newsletter">
            <label htmlFor="footer-email" className="sr-only">Email</label>
            <input id="footer-email" type="email" placeholder="Your email" className="email-input" required />
            <button className="btn-submit" type="submit">Subscribe</button>
            <p className="small-note">No spam. Unsubscribe anytime.</p>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} YourSite — All rights reserved.</p>
        <div className="socials" aria-label="Social links">
          <a href="https://twitter.com" className="social" aria-label="Twitter" target="_blank" rel="noreferrer">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M22 5.9c-.6.3-1.3.5-2 .6.7-.4 1.2-1 1.4-1.7-.6.4-1.3.6-2 .8C18.8 5 17.9 4.5 17 4.5c-1.7 0-3 1.6-2.6 3.2C12.8 7.3 11.1 6.4 9.7 5c-.9 1.5-.1 3.6 1.1 4.6-.5 0-1-.2-1.5-.4v.1c0 1.6 1.1 3 2.5 3.3-.5.2-1 .2-1.6.1.4 1.4 1.7 2.4 3.2 2.4-1.3 1-3 1.6-4.7 1.6H7.3c1.6 1 3.5 1.6 5.5 1.6 6.6 0 10.2-5.8 10.2-10.9v-.5c.7-.5 1.3-1.2 1.8-2z" fill="currentColor"></path>
            </svg>
          </a>
          <a href="https://facebook.com" className="social" aria-label="Facebook" target="_blank" rel="noreferrer">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M22 12.1C22 6.6 17.5 2 12 2S2 6.6 2 12.1c0 4.9 3.6 8.9 8.3 9.8v-6.9H8.2v-2.9h2.1V9.6c0-2.1 1.3-3.3 3.2-3.3.9 0 1.8.1 2 .1v2.3h-1.1c-1 0-1.3.6-1.3 1.2v1.6h2.5l-.4 2.9h-2.1v6.9C18.4 21 22 16.9 22 12.1z" fill="currentColor"></path>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
