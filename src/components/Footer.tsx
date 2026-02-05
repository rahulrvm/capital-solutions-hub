import logo from "@/assets/logo.png";
const Footer = () => {
  return <footer className="bg-primary py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <img src={logo} alt="Vaibhavam Capital Advisory" className="h-16 w-auto mb-4" />
            <p className="font-sans text-cream/70 text-sm leading-relaxed max-w-md">A boutique financial advisory firm specialising in debt syndication, financial restructuring, and strategic capital solutions for businesses across India.


www.vaibhavamcapital.in</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-cream mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About", "Services", "Why Us", "Contact"].map(link => <li key={link}>
                  <a href={`#${link.toLowerCase().replace(" ", "-")}`} className="font-sans text-sm text-cream/70 hover:text-accent transition-colors">
                    {link}
                  </a>
                </li>)}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-cream mb-4">Services</h4>
            <ul className="space-y-2">
              {["Debt Syndication", "Working Capital", "PE Advisory", "Project Finance"].map(service => <li key={service}>
                  <a href="#services" className="font-sans text-sm text-cream/70 hover:text-accent transition-colors">
                    {service}
                  </a>
                </li>)}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-cream/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-sans text-xs text-cream/50">
              © {new Date().getFullYear()} Vaibhavam Capital Advisory. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="font-sans text-xs text-cream/50 hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="font-sans text-xs text-cream/50 hover:text-accent transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;