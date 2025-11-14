import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false); // mobile submenu toggle
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-strong">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-28 py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 flex-shrink-0">
            <img src={logo} alt="CCRWD Trust Logo" className="w-16 h-16 object-contain" />
            <div className="max-w-[420px]">
              <h1 className="text-lg font-bold text-primary font-montserrat tracking-wide leading-tight">
                CONSUMER PROTECTION, CHILD RIGHTS & WOMEN DEVELOPMENT TRUST
              </h1>
              <p className="text-xs text-muted-foreground">Pay Back To The Society</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2 whitespace-nowrap">
            <Link
              to="/"
              className={`px-4 py-2 rounded-lg transition-all ${
                isActive("/") ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-secondary"
              }`}
            >
              Home
            </Link>

            {/* ABOUT US WITH DROPDOWN */}
            <div className="relative group">
              <Link
                to="/about"
                className={`px-4 py-2 rounded-lg transition-all flex items-center gap-1 ${
                  location.pathname.includes("/about")
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-secondary"
                }`}
              >
                About Us <ChevronDown size={16} />
              </Link>

              {/* Desktop Dropdown */}
              <div className="absolute top-full left-0 w-48 bg-background shadow-lg rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <Link
                  to="/about"
                  className="block px-4 py-2 hover:bg-secondary text-sm"
                >
                  Overview
                </Link>
                <Link
                  to="/about/founder"
                  className="block px-4 py-2 hover:bg-secondary text-sm"
                >
                  About Founder
                </Link>
              </div>
            </div>

            {/* OTHER NAV LINKS */}
            

            <Link
              to="/programs"
              className={`px-4 py-2 rounded-lg transition-all ${
                isActive("/programs") ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-secondary"
              }`}
            >
              Services
            </Link>

            <Link
              to="/activities"
              className={`px-4 py-2 rounded-lg transition-all ${
                isActive("/activities") ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-secondary"
              }`}
            >
              Activities
            </Link>

            <Link
              to="/contact"
              className={`px-4 py-2 rounded-lg transition-all ${
                isActive("/contact") ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-secondary"
              }`}
            >
              Contact
            </Link>

            <Link
              to="/get-involved"
              className={`px-4 py-2 rounded-lg transition-all ${
                isActive("/get-involved") ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-secondary"
              }`}
            >
              Get Involved
            </Link>

            <Link to="/donate">
              <Button className="ml-4 rounded-lg gradient-primary hover:opacity-90">
                Donate Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-secondary"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="lg:hidden py-4 animate-fade-in">

            {/* About Us Mobile */}
            <button
              onClick={() => setAboutOpen(!aboutOpen)}
              className="flex justify-between w-full px-4 py-3 text-left rounded-lg hover:bg-secondary mb-1 text-foreground"
            >
              About Us
              <ChevronDown className={`${aboutOpen ? "rotate-180" : ""} transition`} />
            </button>

            {/* Mobile Submenu */}
            {aboutOpen && (
              <div className="pl-8">
                <Link
                  to="/about"
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2 rounded-lg hover:bg-secondary text-sm"
                >
                  Overview
                </Link>
                <Link
                  to="/about/founder"
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2 rounded-lg hover:bg-secondary text-sm"
                >
                  About Founder
                </Link>
              </div>
            )}

            {/* Regular items */}
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 rounded-lg hover:bg-secondary"
            >
              Home
            </Link>

            <Link
              to="/programs"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 rounded-lg hover:bg-secondary"
            >
              Services
            </Link>

            <Link
              to="/activities"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 rounded-lg hover:bg-secondary"
            >
              Activities
            </Link>

            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 rounded-lg hover:bg-secondary"
            >
              Contact
            </Link>

            <Link
              to="/get-involved"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 rounded-lg hover:bg-secondary"
            >
              Get Involved
            </Link>

            <Link to="/donate" onClick={() => setIsOpen(false)}>
              <Button className="w-full mt-2 rounded-lg gradient-primary">
                Donate Now
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
