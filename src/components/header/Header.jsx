import "./Header.css";

export function Header() {
  return (
    <header className="site-header">
      <div className="header-container">
        <a
          href="https://leogomesdev.com"
          target="_blank"
          rel="noreferrer"
          className="logo"
        >
          LeoGomes<span>.dev</span>
        </a>
        <nav>
          <a
            href="https://leogomesdev.com"
            target="_blank"
            rel="noreferrer"
            className="nav-link"
          >
            Portfólio ↗
          </a>
        </nav>
      </div>
    </header>
  );
}
