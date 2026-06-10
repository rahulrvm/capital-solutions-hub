import { Landmark, Layers, Network, Compass, Wrench, Handshake, ShieldCheck, Lock, BadgeCheck, Heart, Eye } from "lucide-react";

const reasons = [
  { icon: Landmark, title: "Institutional Banking DNA", description: "45+ years combined in credit, risk & treasury at India's leading banks." },
  { icon: Layers, title: "Bespoke Capital Solutions", description: "Every transaction custom-designed — no templates, no off-the-shelf products." },
  { icon: Network, title: "Investor Network Depth", description: "Direct access across AIFs, banks, NBFCs, PE funds & family offices." },
  { icon: Compass, title: "Strategic, Long-Term Orientation", description: "Advice aligned to long-term business outcomes and shareholder value." },
  { icon: Wrench, title: "Execution-Led Approach", description: "Hands-on from mandate to closure — we don't just advise, we execute." },
  { icon: Handshake, title: "Promoter-Centric Partnership", description: "Confidential, aligned & accountable to the promoters we serve." },
];

const commitments = [
  { icon: Heart, title: "High Promoter Alignment", description: "We work in the interest of the business, always." },
  { icon: Lock, title: "Absolute Confidentiality", description: "All mandates handled with institutional-grade discretion." },
  { icon: BadgeCheck, title: "Institutional Quality Execution", description: "Documentation, positioning & process management at the highest standard." },
  { icon: ShieldCheck, title: "Long-Term Relationship Orientation", description: "We build lasting partnerships, not one-off transactions." },
  { icon: Eye, title: "Transparent Advisory", description: "Clear on scope, fees, timelines & realistic outcomes from day one." },
];

const WhyUs = () => {
  return (
    <section id="why-us" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent font-sans text-sm font-medium rounded-full mb-4">
            Why Vaibhavam Capital
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
            Differentiated by Depth, Not Scale
          </h2>
          <p className="font-sans text-muted-foreground">
            Depth of structuring capability, institutional relationships, and commitment to execution excellence.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {reasons.map((r, index) => (
            <div
              key={r.title}
              className="bg-card rounded-xl p-6 shadow-card border border-border hover:shadow-elevated hover:-translate-y-1 transition-all animate-fade-in"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <r.icon className="w-6 h-6 text-accent" />
                </div>
                <span className="font-serif text-2xl font-bold text-accent/40">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="font-serif text-lg font-bold text-foreground mb-2">{r.title}</h3>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed">{r.description}</p>
            </div>
          ))}
        </div>

        {/* Commitments */}
        <div className="bg-primary rounded-2xl p-8 md:p-12">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Our Commitment to Every Mandate
            </h3>
            <p className="font-sans text-cream/70">
              The rigour of institutional execution. The alignment of a trusted advisor.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5">
            {commitments.map((c) => (
              <div key={c.title} className="bg-card/10 backdrop-blur-sm rounded-xl p-5 border border-cream/10">
                <c.icon className="w-6 h-6 text-accent mb-3" />
                <h4 className="font-serif text-base font-semibold text-cream mb-2">{c.title}</h4>
                <p className="font-sans text-sm text-cream/70 leading-relaxed">{c.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
