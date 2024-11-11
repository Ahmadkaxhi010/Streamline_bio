export default function Footer() {
  return (
    <footer className="bg-gray-100 py-10 px-8 text-gray-700 text-sm">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:items-start">
        {/* Logo and Copyright */}
        <div className="mb-8 md:mb-0 flex flex-col items-center md:items-start">
          <div className="mb-4">
            {/* Replace with your logo */}
            <img src="/path/to/logo.png" alt="Logo" className="h-8" />
          </div>
          <p>1X © 2024</p>
        </div>

        {/* Navigation Links */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center md:text-left">
          <div>
            <a href="#" className="hover:underline">
              NEO
            </a>
            <br />
            <a href="#" className="hover:underline">
              EVE
            </a>
            <br />
            <a href="#" className="hover:underline">
              ABOUT
            </a>
            <br />
            <a href="#" className="hover:underline">
              CAREERS
            </a>
            <br />
            <a href="#" className="hover:underline">
              DISCOVER
            </a>
          </div>

          {/* Social Media Links */}
          <div>
            <a href="#" className="hover:underline">
              LINKEDIN
            </a>
            <br />
            <a href="#" className="hover:underline">
              YOUTUBE
            </a>
            <br />
            <a href="#" className="hover:underline">
              INSTAGRAM
            </a>
            <br />
            <a href="#" className="hover:underline">
              TIKTOK
            </a>
            <br />
            <a href="#" className="hover:underline">
              X
            </a>
          </div>

          {/* Legal Links */}
          <div>
            <a href="#" className="hover:underline">
              TERMS OF USE
            </a>
            <br />
            <a href="#" className="hover:underline">
              PRIVACY & COOKIES
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
