import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const blogPosts = [
  {
    id: 1,
    title: "Understanding Debt Syndication: A Complete Guide for Corporates",
    excerpt: "Learn how debt syndication can help your business access large-scale financing through multiple lenders while optimizing costs.",
    category: "Debt Financing",
    author: "Vaibhavam Team",
    date: "Jan 28, 2025",
    readTime: "8 min read",
    featured: true,
  },
  {
    id: 2,
    title: "GST Credit Monetisation: Unlocking Working Capital",
    excerpt: "Discover how businesses can convert accumulated GST input tax credits into immediate working capital liquidity.",
    category: "Working Capital",
    author: "Vaibhavam Team",
    date: "Jan 22, 2025",
    readTime: "6 min read",
    featured: false,
  },
  {
    id: 3,
    title: "Sale & Leaseback: A Smart Strategy for Asset-Heavy Businesses",
    excerpt: "Explore how sale and leaseback arrangements can free up capital while retaining operational use of your assets.",
    category: "Structured Finance",
    author: "Vaibhavam Team",
    date: "Jan 15, 2025",
    readTime: "7 min read",
    featured: false,
  },
  {
    id: 4,
    title: "Navigating Private Equity: What Promoters Need to Know",
    excerpt: "Essential insights for business owners considering private equity investment, from valuation to deal structuring.",
    category: "PE Advisory",
    author: "Vaibhavam Team",
    date: "Jan 8, 2025",
    readTime: "10 min read",
    featured: false,
  },
];

const Blog = () => {
  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

  return (
    <section id="blog" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-14">
          <Badge variant="outline" className="mb-4 px-4 py-1.5 border-accent text-accent font-sans text-xs tracking-wide">
            INSIGHTS & UPDATES
          </Badge>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Latest from Our Blog
          </h2>
          <p className="font-sans text-muted-foreground max-w-2xl mx-auto">
            Expert perspectives on corporate finance, liquidity solutions, and strategic capital advisory
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-10">
          {/* Featured Post */}
          {featuredPost && (
            <Card className="group cursor-pointer overflow-hidden border-0 shadow-card hover:shadow-elevated transition-all duration-300 lg:row-span-2">
              <div className="h-48 bg-gradient-to-br from-primary to-navy-light flex items-center justify-center">
                <span className="font-serif text-6xl text-accent opacity-30">V</span>
              </div>
              <CardContent className="p-6">
                <Badge className="mb-3 bg-accent/10 text-accent border-0 hover:bg-accent/20">
                  {featuredPost.category}
                </Badge>
                <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors line-clamp-2">
                  {featuredPost.title}
                </h3>
                <p className="font-sans text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <User className="h-3.5 w-3.5" />
                    {featuredPost.author}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    {featuredPost.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" />
                    {featuredPost.readTime}
                  </span>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Regular Posts */}
          <div className="flex flex-col gap-4">
            {regularPosts.map((post) => (
              <Card
                key={post.id}
                className="group cursor-pointer border-0 shadow-card hover:shadow-elevated transition-all duration-300"
              >
                <CardContent className="p-5 flex gap-4">
                  <div className="hidden sm:flex w-20 h-20 shrink-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg items-center justify-center">
                    <span className="font-serif text-2xl text-accent">V</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <Badge variant="outline" className="mb-2 text-xs border-border">
                      {post.category}
                    </Badge>
                    <h4 className="font-serif text-base font-semibold text-foreground mb-1.5 group-hover:text-accent transition-colors line-clamp-2">
                      {post.title}
                    </h4>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* View All Link */}
        <div className="text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 font-sans text-sm font-medium text-accent hover:text-gold-light transition-colors group"
          >
            View All Articles
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
