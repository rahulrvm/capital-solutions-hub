import { Eye, Compass, Users } from "lucide-react";

const principles = [
  "Every business requires a customised capital strategy — there is no one-size-fits-all solution.",
  "Balance sheet strength is as important as growth — sustainable, sound financial architecture.",
  "Structured capital can unlock transformational opportunities conventional lending cannot.",
  "Institutional fund raising demands positioning, preparation, and disciplined execution.",
  "Advisory must translate into measurable business outcomes — we are accountable to results.",
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent font-sans text-sm font-medium rounded-full mb-4">
            Who We Are
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
            A Boutique Capital Advisory Firm
          </h2>
          <p className="font-sans text-muted-foreground leading-relaxed">
            Vaibhavam Capital Advisory LLP is a boutique financial advisory firm specialising in
            structured fund raising, strategic advisory, and balance sheet optimisation for MSMEs,
            SMEs, and emerging corporates across India.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
              Institutional Precision. Advisory Alignment.
            </h3>
            <p className="font-sans text-muted-foreground mb-6 leading-relaxed">
              We partner closely with promoters, boards, and senior management teams to design
              customised capital solutions aligned with long-term business objectives.
            </p>
            <p className="font-sans text-muted-foreground leading-relaxed">
              Our advisory combines the precision of institutional banking with the agility and
              alignment of a dedicated advisory partner.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-card rounded-xl p-6 shadow-card border border-border animate-slide-in-right" style={{ animationDelay: "0.3s" }}>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Eye className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-serif text-xl font-bold text-foreground mb-2">Our Philosophy</h4>
                  <p className="font-sans text-muted-foreground text-sm leading-relaxed">
                    Capital should be a catalyst for strategic growth — not a constraint. Traditional
                    financing often falls short for growth-stage businesses that require bespoke,
                    structurally sound capital solutions.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-card border border-border animate-slide-in-right" style={{ animationDelay: "0.4s" }}>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Compass className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-serif text-xl font-bold text-foreground mb-2">Our Mandate</h4>
                  <p className="font-sans text-muted-foreground text-sm leading-relaxed">
                    Enabling Growth. Unlocking Capital. Building Scalable Businesses — through
                    structured fund raising, strategic advisory, and corporate structuring.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Principles */}
        <div className="mb-16">
          <h3 className="font-serif text-2xl font-bold text-foreground text-center mb-10">
            Our Core Principles
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {principles.map((p, i) => (
              <div
                key={i}
                className="bg-card rounded-xl p-6 shadow-card border border-border animate-fade-in"
                style={{ animationDelay: `${0.1 * (i + 1)}s` }}
              >
                <div className="font-serif text-3xl font-bold text-accent mb-3">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">{p}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership */}
        <div className="bg-primary rounded-2xl p-8 md:p-12 animate-fade-in">
          <div className="flex items-center gap-3 mb-8">
            <Users className="w-7 h-7 text-accent" />
            <h3 className="font-serif text-2xl font-bold text-primary-foreground">Leadership Team</h3>
          </div>
          <p className="font-sans text-cream/80 leading-relaxed mb-8 max-w-3xl">
            Vaibhavam Capital is led by two highly experienced financial professionals with a
            combined 45+ years of institutional banking and advisory experience across India's
            leading private sector banks and financial institutions.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card/10 backdrop-blur-sm rounded-xl p-6 border border-cream/10">
              <h4 className="font-serif text-xl font-bold text-cream">Rahul Modi</h4>
              <p className="font-sans text-xs uppercase tracking-widest text-accent mb-4">Co-Founder</p>
              <ul className="space-y-2 font-sans text-sm text-cream/80">
                <li>• 22+ years in corporate banking, structured finance, and mid-market relationship management across Western & Eastern India</li>
                <li>• Leadership roles at ING Vysya Bank, YES Bank, and RBL Bank — last role as SVP & Zonal Head (Maharashtra ex-Mumbai & Goa)</li>
                <li>• Deep expertise in structured lending, capital raising, and large corporate relationships</li>
                <li>• Track record across manufacturing, infrastructure, and real estate sectors</li>
              </ul>
            </div>

            <div className="bg-card/10 backdrop-blur-sm rounded-xl p-6 border border-cream/10">
              <h4 className="font-serif text-xl font-bold text-cream">Sumit Gupta</h4>
              <p className="font-sans text-xs uppercase tracking-widest text-accent mb-4">Co-Founder</p>
              <ul className="space-y-2 font-sans text-sm text-cream/80">
                <li>• 22+ years across corporate banking, financial strategy, treasury, and virtual CFO advisory across Eastern & Northern India</li>
                <li>• Leadership experience at ING Vysya Bank, YES Bank, Tata Capital, and HSBC — domestic and international financing structures</li>
                <li>• Strong expertise in treasury management, corporate structuring, and strategic finance transformation</li>
                <li>• Implemented finance transformation programs as Virtual CFO for multiple growth-stage businesses</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
