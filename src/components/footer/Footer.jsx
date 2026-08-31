import "./Footer.css";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-container">
        <p className="copyright">
          &copy; {currentYear} <span>Leo Gomes Developer</span>. Todos os
          direitos reservados.
        </p>

        <div className="footer-socials">
          <a
            href="https://github.com/leo-gomes-dev"
            target="_blank"
            rel="noreferrer"
            title="GitHub"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/leo-gomes-dev/"
            target="_blank"
            rel="noreferrer"
            title="LinkedIn"
          >
            LinkedIn
          </a>
          <a
            href="https://leogomesdev.com"
            target="_blank"
            rel="noreferrer"
            title="Website"
          >
            Website
          </a>
        </div>
      </div>
    </footer>
  );
}
