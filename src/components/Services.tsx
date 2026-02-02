import { 
  TrendingUp, 
  Wallet, 
  BarChart3, 
  Building2, 
  Factory, 
  Truck, 
  Home, 
  Sun, 
  Server, 
  Package,
  Sparkles,
  ArrowRight
} from "lucide-react";

const Services = () => {
  const generalServices = [
    {
      icon: TrendingUp,
      title: "Growth & Capital Structuring",
      items: [
        "Company/Share Acquisition Financing",
        "Promoter Funding (NCDs, CCD/OCD)",
        "Equity Contribution Funding",
        "Share Buy-back & Buyout Financing",
        "NCLT Acquisitions & Stress Capital"
      ]
    },
    {
      icon: Wallet,
      title: "Working Capital Solutions",
      items: [
        "Reverse Factoring (Unsecured)",
        "Sales & Purchase Invoice Discounting",
        "Factoring of Receivables",
        "Short-Tenor Loans (≤6 months)",
        "Unsecured Loans up to ₹5 Cr"
      ]
    },
    {
      icon: BarChart3,
      title: "Balance Sheet Optimisation",
      items: [
        "Loan Tenor Extension & Restructuring",
        "Takeover + Incremental Exposure",
        "Collateral Rationalisation",
        "Surety Bonds for Bank Guarantees",
        "GST Credit Monetisation"
      ]
    },
    {
      icon: Building2,
      title: "Asset-Backed Financing",
      items: [
        "100% Funding Against Fixed Assets",
        "Sale & Leaseback Structures",
        "Operating Lease Solutions",
        "External Commercial Borrowings",
        "Multi-sector Structured Deals"
      ]
    }
  ];

  const industryServices = [
    { icon: Factory, title: "Manufacturing", desc: "Capex funding, sale-leaseback, factoring, GST ITC monetisation" },
    { icon: Truck, title: "Auto, EV & Logistics", desc: "Fleet financing, EV transition funding, OEM-linked solutions" },
    { icon: Home, title: "Real Estate & Infra", desc: "Land acquisition, construction finance, project SPV debt" },
    { icon: Sun, title: "Renewable Energy", desc: "Solar project finance, acquisition & refinancing, group captive" },
    { icon: Server, title: "IT & Data Centers", desc: "Infrastructure financing, equipment funding, receivables financing" },
    { icon: Package, title: "Trading & FMCG", desc: "Invoice discounting, seasonal working capital, bridge financing" }
  ];

  return (
    <section id="services" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent font-sans text-sm font-medium rounded-full mb-4">
            Our Services
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
            Comprehensive Financing & Liquidity Solutions
          </h2>
          <p className="font-sans text-muted-foreground">
            Beyond standard banking products — tailored solutions for your unique capital needs.
          </p>
        </div>

        {/* General Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {generalServices.map((service, index) => (
            <div
              key={service.title}
              className="bg-card rounded-xl p-6 shadow-card border border-border hover:shadow-elevated transition-shadow animate-fade-in group"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="p-3 bg-accent/10 rounded-lg w-fit mb-4 group-hover:bg-accent/20 transition-colors">
                <service.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-serif text-lg font-bold text-foreground mb-4">
                {service.title}
              </h3>
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

        {/* Industry Solutions */}
        <div className="bg-primary rounded-2xl p-8 md:p-12">
          <div className="flex items-center gap-3 mb-8">
            <Sparkles className="w-6 h-6 text-accent" />
            <h3 className="font-serif text-2xl font-bold text-primary-foreground">
              Industry-Wise Solutions
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industryServices.map((industry, index) => (
              <div
                key={industry.title}
                className="bg-card/10 backdrop-blur-sm rounded-xl p-5 border border-cream/10 hover:bg-card/20 transition-colors group animate-fade-in"
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <industry.icon className="w-5 h-5 text-accent" />
                  <h4 className="font-serif text-lg font-semibold text-cream">
                    {industry.title}
                  </h4>
                </div>
                <p className="font-sans text-sm text-cream/70">
                  {industry.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground font-sans font-semibold rounded-md shadow-gold hover:shadow-elevated transition-all group"
            >
              Discuss Your Requirements
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
