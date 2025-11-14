import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="glass-strong mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img src={logo} alt="CCRWD TRUST Logo" className="w-12 h-12 object-contain" />
              <h3 className="text-lg font-bold text-primary font-montserrat">CCRWD TRUST</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Empowering Marginalized Communities, Enriching Lives.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://www.facebook.com/internationalwomenaward/posts/women-icon-award-2025-honoring-excellence-in-education-and-social-activities-we-/1163872162414824/"
                className="w-9 h-9 rounded-xl bg-secondary hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://www.instagram.com/ccrwd_trust/"
                className="w-9 h-9 rounded-xl bg-secondary hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all"
              >
                <Instagram size={18} />
              </a>
              
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-muted-foreground hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/activities" className="text-muted-foreground hover:text-primary transition-colors">
                  Activities
                </Link>
              </li>
              <li>
                <Link to="/donate" className="text-muted-foreground hover:text-primary transition-colors">
                  Donate
                </Link>
              </li>
              <li>
                <Link to="/Get Invloved" className="text-muted-foreground hover:text-primary transition-colors">Get Involved</Link>
              </li>
            </ul>
          </div>

          {/* Mission & Vision */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Mission & Vision</h3>
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Mission:</strong> Empowering marginalized communities through education, skill development, and sustainable livelihood opportunities.
              </p>
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Vision:</strong> A society where every individual has equal access to opportunities and resources for a dignified life.
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-sm text-muted-foreground">
                <MapPin size={18} className="text-primary flex-shrink-0 mt-0.5" />
                <span>9, Subash Nagar, FCI Road, Ganapathy, Coimbatore - 641006</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Phone size={18} className="text-primary" />
                <span>+91 73971 95051</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Mail size={18} className="text-primary" />
                <span>ccrwdtrust@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} CCRWD TRUST. All rights reserved.</p>
          <p className="mt-2">Empowering Marginalized Communities, Enriching Lives.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
