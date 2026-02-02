import { CheckCircle2, Zap, Scale, TrendingDown, Clock, FileCheck } from "lucide-react";

const WhyUs = () => {
  const outcomes = [
    {
      icon: Zap,
      title: "Improved Liquidity",
      description: "Unlock trapped capital and enhance cash flow management",
      color: "accent"
    },
    {
      icon: Scale,
      title: "Optimised Leverage",
      description: "Better debt/EBITDA ratios through smart structuring",
      color: "primary"
    },
    {
      icon: FileCheck,
      title: "Off-Balance Sheet",
      description: "Creative funding structures without balance sheet impact",
      color: "accent"
    },
    {
      icon: TrendingDown,
      title: "Lower Cost",
      description: "Reduce your overall cost of capital significantly",
      color: "primary"
    },
    {
      icon: Clock,
      title: "Faster Execution",
      description: "Swift turnaround compared to traditional banking routes",
      color: "accent"
    },
    {
      icon: CheckCircle2,
      title: "Customised Solutions",
      description: "Tailored structures matching your specific requirements",
      color: "primary"
    }
  ];

  const stats = [
    { value: "95%", label: "Client Retention" },
    { value: "30+", label: "Lender Network" },
    { value: "45", label: "Avg. Days to Close" },
    { value: "100%", label: "Confidentiality" }
  ];

  return (
    <section id="why-us" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent font-sans text-sm font-medium rounded-full mb-4">
            Why Choose Us
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
            Outcomes for Our Clients
          </h2>
          <p className="font-sans text-muted-foreground">
            We deliver measurable results that transform your financial position.
          </p>
        </div>

        {/* Outcomes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {outcomes.map((outcome, index) => (
            <div
              key={outcome.title}
              className="bg-card rounded-xl p-6 shadow-card border border-border hover:shadow-elevated hover:-translate-y-1 transition-all animate-fade-in"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className={`p-3 rounded-lg w-fit mb-4 ${
                outcome.color === "accent" ? "bg-accent/10" : "bg-primary/10"
              }`}>
                <outcome.icon className={`w-6 h-6 ${
                  outcome.color === "accent" ? "text-accent" : "text-primary"
                }`} />
              </div>
              <h3 className="font-serif text-lg font-bold text-foreground mb-2">
                {outcome.title}
              </h3>
              <p className="font-sans text-sm text-muted-foreground">
                {outcome.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Infographic */}
        <div className="bg-gradient-to-br from-primary to-navy-light rounded-2xl p-8 md:p-12 animate-fade-in">
          <h3 className="font-serif text-2xl font-bold text-primary-foreground text-center mb-10">
            Our Track Record
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center animate-scale-in"
                style={{ animationDelay: `${0.15 * (index + 1)}s` }}
              >
                <div className="relative inline-block">
                  <div className="w-24 h-24 md:w-28 md:h-28 rounded-full border-4 border-accent/30 flex items-center justify-center mx-auto mb-4 bg-accent/10">
                    <span className="font-serif text-2xl md:text-3xl font-bold text-accent">
                      {stat.value}
                    </span>
                  </div>
                </div>
                <p className="font-sans text-sm text-cream/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
