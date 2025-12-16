import { Coffee, Instagram, Facebook, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted/30 pt-16 pb-8 border-t border-border mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-primary p-1.5 rounded-full text-white">
                <Coffee size={20} />
              </div>
              <span className="font-serif text-lg font-bold">Cozy Brew</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Crafting moments of warmth and flavor since 2025. Your neighborhood escape for artisanal coffee and gourmet bites.
            </p>
          </div>
          
          <div>
            <h4 className="font-serif font-bold mb-4">Visit Us</h4>
            <address className="not-italic text-sm text-muted-foreground space-y-2">
              <p>123 Latte Lane</p>
              <p>Brewville, CA 90210</p>
              <p>Mon-Fri: 7am - 8pm</p>
              <p>Sat-Sun: 8am - 9pm</p>
            </address>
          </div>

          <div>
            <h4 className="font-serif font-bold mb-4">Quick Links</h4>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li><a href="#" className="hover:text-primary transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-background rounded-full hover:bg-primary hover:text-white transition-colors border shadow-sm">
                <Instagram size={18} />
              </a>
              <a href="#" className="p-2 bg-background rounded-full hover:bg-primary hover:text-white transition-colors border shadow-sm">
                <Facebook size={18} />
              </a>
              <a href="#" className="p-2 bg-background rounded-full hover:bg-primary hover:text-white transition-colors border shadow-sm">
                <Twitter size={18} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 text-center text-xs text-muted-foreground">
          <p>&copy; 2025 Cozy Brew Cafe. All rights reserved. Mockup for demo purposes.</p>
        </div>
      </div>
    </footer>
  );
}
