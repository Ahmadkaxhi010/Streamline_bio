import Link from "next/link";
const SubHeader = () => {
  return (
    <div>
      <section className="header-container header-container-solid">
        <Link href="/" className="w-inline-block">
          <div>
            <img src="/images/mainl.png" alt="Logo" className="h-8" />
          </div>
        </Link>
        <div className="nav-items-container">
          <Link href="/" className="nav-item nav-dark">
            Home
          </Link>
          <Link href="/about" className="nav-item nav-dark">
            about
          </Link>
          <Link
            href="/discover"
            aria-current="page"
            className="nav-item nav-dark w--current"
          >
            Discover
          </Link>
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
          <Link href="/neo" className="mobile-menu-link first-link">
            Home
          </Link>
          <Link
            href="/discover"
            aria-current="page"
            className="mobile-menu-link w--current"
          >
            Discover
          </Link>
          <Link href="/about" className="mobile-menu-link">
            About
          </Link>
        </div>
        <div className="lower-mobile-menu-links">
          <Link href="/privacy-policy" className="mobile-menu-sub">
            Privacy &amp;&nbsp;Cookies
          </Link>
          <Link href="/terms-and-conditions" className="mobile-menu-sub">
            Terms of Use
          </Link>
          <div className="mobile-menu-sub">1X © 2024</div>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
