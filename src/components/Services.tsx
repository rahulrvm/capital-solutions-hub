import {
  Coins,
  Compass,
  Building2,
  Banknote,
  Rocket,
  LifeBuoy,
  Factory,
  Zap,
  HardHat,
  Cpu,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const Services = () => {
  const platform = [
    {
      icon: Coins,
      title: "Structured Fund Raising",
      items: [
        "Customised debt, quasi-equity & hybrid capital",
        "Institutional investor access & process management",
        "End-to-end transaction execution",
      ],
    },
    {
      icon: Compass,
      title: "Strategic Advisory",
      items: [
        "Business transformation & growth strategy",
        "Institutionalisation of operations",
        "Investor & lender readiness",
      ],
    },
    {
      icon: Building2,
      title: "Corporate Structuring",
      items: [
        "HoldCo / OpCo / SPV architecture",
        "M&A and JV structuring",
        "Governance framework design",
      ],
    },
    {
      icon: Banknote,
      title: "Treasury & Banking Advisory",
      items: [
        "Virtual Banking Head services",
        "Working capital optimisation",
        "FX, trade finance & hedging advisory",
      ],
    },
    {
      icon: Rocket,
      title: "IPO & Pre-IPO Advisory",
      items: [
        "IPO readiness assessment",
        "Pre-IPO capital raising",
        "Strategic investor onboarding",
      ],
    },
    {
      icon: LifeBuoy,
      title: "Special Situations Advisory",
      items: [
        "Refinancing & liability restructuring",
        "Stressed asset resolution",
        "Liquidity bridge & turnaround funding",
      ],
    },
  ];

  const instruments = [
    {
      title: "Debt Structures",
      items: [
        "Structured Term Loans",
        "Working Capital Enhancement",
        "Acquisition Finance",
        "Construction Finance",
        "Lease Rental Discounting",
        "Asset-Backed Lending",
      ],
    },
    {
      title: "Hybrid & Quasi-Equity",
      items: [
        "Mezzanine Funding",
        "Convertible Instruments (CCDs / OCDs)",
        "Quasi-Equity Structures",
        "Revenue-Linked Instruments",
        "Compulsory Convertible Debentures",
        "Optionally Convertible Notes",
      ],
    },
    {
      title: "Special Structures",
      items: [
        "HoldCo / OpCo Structures",
        "Promoter Funding Solutions",
        "SPV-Based Structures",
        "Pre-IPO Bridge Capital",
        "Last-Mile Real Estate Funding",
        "Hybrid Capital Solutions",
      ],
    },
  ];

  const sectors = [
    { icon: Factory, title: "Manufacturing & Industrials", desc: "Engineering, precision components, chemicals, warehousing & supply chain" },
    { icon: Zap, title: "Infrastructure & Energy", desc: "Renewables (solar, wind, hydro), infra concessions, pharma manufacturing" },
    { icon: HardHat, title: "Real Estate & Construction", desc: "Residential, commercial, last-mile finance, retail chain expansion" },
    { icon: Cpu, title: "Technology & New Economy", desc: "Tech-enabled businesses, EV & clean mobility, fintech, wealth platforms" },
  ];

  return (
    <section id="services" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent font-sans text-sm font-medium rounded-full mb-4">
            Our Service Platform
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
            An Integrated Capital Advisory Platform
          </h2>
          <p className="font-sans text-muted-foreground">
            Six pillars working together — from structured fund raising to special situations.
          </p>
        </div>

        {/* Platform Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {platform.map((service, index) => (
            <div
              key={service.title}
              className="bg-card rounded-xl p-6 shadow-card border border-border hover:shadow-elevated transition-shadow animate-fade-in group"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="p-3 bg-accent/10 rounded-lg w-fit mb-4 group-hover:bg-accent/20 transition-colors">
                <service.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-serif text-lg font-bold text-foreground mb-4">{service.title}</h3>
              <ul className="space-y-2">
                {service.items.map((item) => (
                  <li key={item} className="font-sans text-sm text-muted-foreground flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Instruments */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
              Funding Instruments & Structures We Deploy
            </h3>
            <p className="font-sans text-muted-foreground">
              Bespoke instrument design, security packaging, and cash flow architecture.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {instruments.map((col) => (
              <div key={col.title} className="bg-card rounded-xl p-6 shadow-card border border-border">
                <h4 className="font-serif text-lg font-bold text-foreground border-b border-accent/30 pb-3 mb-4">
                  {col.title}
                </h4>
                <ul className="space-y-2">
                  {col.items.map((i) => (
                    <li key={i} className="font-sans text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-accent">›</span>
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Sectors */}
        <div className="bg-primary rounded-2xl p-8 md:p-12">
          <div className="flex items-center gap-3 mb-3">
            <Sparkles className="w-6 h-6 text-accent" />
            <h3 className="font-serif text-2xl font-bold text-primary-foreground">Sectors We Understand</h3>
          </div>
          <p className="font-sans text-cream/70 mb-8 max-w-2xl">
            Structure relevant solutions · assess risks & cycles accurately · position credibly with
            investors · maximise execution probability.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sectors.map((s, index) => (
              <div
                key={s.title}
                className="bg-card/10 backdrop-blur-sm rounded-xl p-5 border border-cream/10 hover:bg-card/20 transition-colors animate-fade-in"
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <s.icon className="w-6 h-6 text-accent mb-3" />
                <h4 className="font-serif text-lg font-semibold text-cream mb-2">{s.title}</h4>
                <p className="font-sans text-sm text-cream/70 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground font-sans font-semibold rounded-md shadow-gold hover:shadow-elevated transition-all group"
            >
              Discuss Your Mandate
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
