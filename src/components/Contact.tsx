import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent font-sans text-sm font-medium rounded-full mb-4">
            Get in Touch
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
            Contact Us
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-card rounded-xl p-6 shadow-card border border-border text-center">
            <div className="p-3 bg-accent/10 rounded-lg w-fit mx-auto mb-4">
              <MapPin className="w-6 h-6 text-accent" />
            </div>
            <h4 className="font-serif text-lg font-bold text-foreground mb-2">
              Address
            </h4>
            <p className="font-sans text-muted-foreground text-sm leading-relaxed">
              15A, City Vista, 4th floor, Suite #1361<br />
              Fountain Road, Kharadi<br />
              Pune 411014, India
            </p>
          </div>

          <div className="bg-card rounded-xl p-6 shadow-card border border-border text-center">
            <div className="p-3 bg-primary/10 rounded-lg w-fit mx-auto mb-4">
              <Phone className="w-6 h-6 text-primary" />
            </div>
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

          <div className="bg-card rounded-xl p-6 shadow-card border border-border text-center">
            <div className="p-3 bg-accent/10 rounded-lg w-fit mx-auto mb-4">
              <Mail className="w-6 h-6 text-accent" />
            </div>
            <h4 className="font-serif text-lg font-bold text-foreground mb-2">
              Email
            </h4>
            <a 
              href="mailto:rahulmodi@vaibhavamcapital.in" 
              className="font-sans text-muted-foreground hover:text-accent transition-colors text-sm"
            >
              rahulmodi@vaibhavamcapital.in
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
