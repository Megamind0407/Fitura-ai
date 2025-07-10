import { ZapIcon } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background/80 backdrop-blur-sm">
      {/* Top border glow */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12">
          {/* Logo and Copyright */}
          <div className="flex flex-col items-center lg:items-start gap-3 lg:flex-shrink-0">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="p-1.5 bg-primary/10 rounded-md group-hover:bg-primary/20 transition-colors">
                <ZapIcon className="w-5 h-5 text-primary" />
              </div>
              <span className="text-xl lg:text-2xl font-bold font-mono">
                fit<span className="text-primary">ura</span>.ai
              </span>
            </Link>
            <p className="text-sm text-muted-foreground text-center lg:text-left">
              © {new Date().getFullYear()} fitura.ai - All rights reserved
            </p>
          </div>

          {/* Links - Better organized grid */}
          <div className="flex-grow flex justify-center">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 sm:gap-x-12 lg:gap-x-16 gap-y-3 text-sm">
              <Link
                href="/about"
                className="text-muted-foreground hover:text-primary transition-colors duration-200 text-center sm:text-left"
              >
                About
              </Link>
              <Link
                href="/terms"
                className="text-muted-foreground hover:text-primary transition-colors duration-200 text-center sm:text-left"
              >
                Terms
              </Link>
              <Link
                href="/privacy"
                className="text-muted-foreground hover:text-primary transition-colors duration-200 text-center sm:text-left"
              >
                Privacy
              </Link>
              <Link
                href="/contact"
                className="text-muted-foreground hover:text-primary transition-colors duration-200 text-center sm:text-left"
              >
                Contact
              </Link>
              <Link
                href="/blog"
                className="text-muted-foreground hover:text-primary transition-colors duration-200 text-center sm:text-left"
              >
                Blog
              </Link>
              <Link
                href="/help"
                className="text-muted-foreground hover:text-primary transition-colors duration-200 text-center sm:text-left"
              >
                Help
              </Link>
            </div>
          </div>

          {/* Status - Better alignment */}
          <div className="flex items-center gap-2 px-4 py-2.5 border border-border rounded-lg bg-background/50 backdrop-blur-sm lg:flex-shrink-0">
            <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-xs font-mono font-medium tracking-wider">SYSTEM OPERATIONAL</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;