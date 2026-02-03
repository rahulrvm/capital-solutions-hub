import { Eye, Target, Users } from "lucide-react";
const About = () => {
  return <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent font-sans text-sm font-medium rounded-full mb-4">
            About Us
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
            Two Decades of Financial Excellence
          </h2>
          <p className="font-sans text-muted-foreground leading-relaxed">Vaibhavam Capital Advisory is a boutique financial advisory firm led by seasoned banking professional with over two decades of experience in the Indian and international banking landscape.</p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left - Description */}
          <div className="animate-fade-in" style={{
          animationDelay: "0.2s"
        }}>
            <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
              Beyond Standard Banking Products
            </h3>
            <p className="font-sans text-muted-foreground mb-6 leading-relaxed">Our core expertise lies in debt syndication, financial restructuring advisory, and Private Equity advisory, offering end-to-end financial structuring, fundraising solutions, and strategic advisory to corporates, SMEs, and MSMEs.</p>
            <p className="font-sans text-muted-foreground leading-relaxed">
              At Vaibhavam Capital Advisory, we focus on customised liquidity, balance-sheet 
              optimisation, and structured capital solutions, rather than off-the-shelf 
              banking products.
            </p>
          </div>

          {/* Right - Vision & Mission Cards */}
          <div className="space-y-6">
            <div className="bg-card rounded-xl p-6 shadow-card border border-border animate-slide-in-right" style={{
            animationDelay: "0.3s"
          }}>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Eye className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-serif text-xl font-bold text-foreground mb-2">Vision</h4>
                  <p className="font-sans text-muted-foreground text-sm leading-relaxed">
                    To be the most trusted financial partner for businesses seeking sustainable 
                    growth through strategic liquidity solutions.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-card border border-border animate-slide-in-right" style={{
            animationDelay: "0.4s"
          }}>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-serif text-xl font-bold text-foreground mb-2">Mission</h4>
                  <p className="font-sans text-muted-foreground text-sm leading-relaxed">
                    To bridge the gap between enterprise needs and institutional finance 
                    through integrity, expertise, and innovation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-primary rounded-2xl p-8 md:p-12 animate-fade-in" style={{
        animationDelay: "0.5s"
      }}>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="p-4 bg-accent/20 rounded-xl">
              <Users className="w-12 h-12 text-accent" />
            </div>
            <div className="text-center md:text-left">
              <h4 className="font-serif text-2xl font-bold text-primary-foreground mb-3">
                Leadership Team
              </h4>
              <p className="font-sans text-cream/80 leading-relaxed max-w-2xl">
                The management team comprises four seasoned professionals with deep experience 
                across the financial services industry. Collectively, the team brings strong 
                expertise in corporate banking, credit structuring, risk management, and 
                investment advisory, with a proven track record of building and scaling businesses.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;