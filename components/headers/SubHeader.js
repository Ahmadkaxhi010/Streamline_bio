const SubHeader = () => {
  return (
    <div>
      <section className="header-container header-container-solid">
        <a href="/" className="w-inline-block">
          <img
            loading="lazy"
            src="https://cdn.prod.website-files.com/646776cb8247278ec0d7427a/670f1fb9ef9f3b822015fdac_1x.svg"
            alt=""
            className="neo-nav-logo-static"
          />
        </a>
        <div className="nav-items-container">
          <a href="/" className="nav-item nav-dark">
            Home
          </a>
          <a href="/about" className="nav-item nav-dark">
            about
          </a>
          <a
            href="/discover"
            aria-current="page"
            className="nav-item nav-dark w--current"
          >
            Discover
          </a>
        </div>
        <div id="mobile-menu" className="menu-button-container">
          <div className="menu-line"></div>
          <div className="menu-line upper-line"></div>
          <div className="menu-line lower-line"></div>
          <div className="menu-line"></div>
        </div>
      </section>
      <div className="mobile-menu-container">
        <div className="mobile-links-container">
          <a href="/neo" className="mobile-menu-link first-link">
            NEO
          </a>
          <a href="/eve" className="mobile-menu-link">
            EVE
          </a>
          <a
            href="/discover"
            aria-current="page"
            className="mobile-menu-link w--current"
          >
            Discover
          </a>
          <a href="/careers" className="mobile-menu-link">
            Careers
          </a>
          <a href="/about" className="mobile-menu-link">
            About
          </a>
        </div>
        <div className="lower-mobile-menu-links">
          <a href="/privacy-policy" className="mobile-menu-sub">
            Privacy &amp;&nbsp;Cookies
          </a>
          <a href="/terms-and-conditions" className="mobile-menu-sub">
            Terms of Use
          </a>
          <div className="mobile-menu-sub">1X © 2024</div>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
