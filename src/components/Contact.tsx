import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent font-sans text-sm font-medium rounded-full mb-4">
            Get in Touch
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
            Let's Discuss Your Capital Needs
          </h2>
          <p className="font-sans text-muted-foreground">
            Schedule a confidential consultation with our team of financial experts.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-8 shadow-elevated border border-border animate-fade-in">
            <h3 className="font-serif text-xl font-bold text-foreground mb-6">
              Send us a Message
            </h3>
            <form className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block font-sans text-sm font-medium text-foreground mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block font-sans text-sm font-medium text-foreground mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                    placeholder="Your company"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block font-sans text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                    placeholder="email@company.com"
                  />
                </div>
                <div>
                  <label className="block font-sans text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
              </div>
              <div>
                <label className="block font-sans text-sm font-medium text-foreground mb-2">
                  Service Interest
                </label>
                <select className="w-full px-4 py-3 bg-background border border-border rounded-lg font-sans text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all">
                  <option value="">Select a service</option>
                  <option value="debt-syndication">Debt Syndication</option>
                  <option value="working-capital">Working Capital Solutions</option>
                  <option value="restructuring">Financial Restructuring</option>
                  <option value="pe-advisory">Private Equity Advisory</option>
                  <option value="project-finance">Project Finance</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block font-sans text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all resize-none"
                  placeholder="Tell us about your financing requirements..."
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-accent text-accent-foreground font-sans font-semibold rounded-lg shadow-gold hover:shadow-elevated transition-all group"
              >
                Submit Enquiry
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8 animate-slide-in-right">
            {/* Contact Cards */}
            <div className="bg-card rounded-xl p-6 shadow-card border border-border">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-foreground mb-2">
                    Office Address
                  </h4>
                  <p className="font-sans text-muted-foreground text-sm leading-relaxed">
                    15A, City Vista, 4th floor, Suite #1361<br />
                    Fountain Road, Kharadi<br />
                    Pune 411014, India
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-card border border-border">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-foreground mb-2">
                    Phone
                  </h4>
                  <a 
                    href="tel:+918334003544" 
                    className="font-sans text-muted-foreground hover:text-accent transition-colors"
                  >
                    +91 8334 003 544
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-card border border-border">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-foreground mb-2">
                    Email
                  </h4>
                  <a 
                    href="mailto:rahulmodi@vaibhavamcapital.in" 
                    className="font-sans text-muted-foreground hover:text-accent transition-colors"
                  >
                    rahulmodi@vaibhavamcapital.in
                  </a>
                </div>
              </div>
            </div>

            {/* CTA Box */}
            <div className="bg-primary rounded-xl p-6">
              <h4 className="font-serif text-lg font-bold text-primary-foreground mb-2">
                Schedule a Call
              </h4>
              <p className="font-sans text-cream/80 text-sm mb-4">
                Prefer to discuss over a call? Book a 30-minute consultation with our team.
              </p>
              <a
                href="tel:+918334003544"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-accent-foreground font-sans text-sm font-semibold rounded-md hover:bg-gold-light transition-colors"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
