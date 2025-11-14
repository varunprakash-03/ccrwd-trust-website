import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlassCard from "@/components/GlassCard";
import womenImage from "@/assets/women-empowerment.jpg";
import childrenImage from "@/assets/children-education.jpg";

const Blog = () => {
  const posts = [
    {
      title: "Empowering Women Entrepreneurs in Tamil Nadu",
      excerpt:
        "How our skill training programs are helping rural women build sustainable businesses and achieve financial independence.",
      date: "March 15, 2024",
      image: womenImage,
    },
    {
      title: "Child Rights Awareness Drive in Schools",
      excerpt:
        "Our recent initiative to educate children about their rights and safety has reached over 2,000 students across 15 schools.",
      date: "March 10, 2024",
      image: childrenImage,
    },
    {
      title: "Skill Training for Tribal Youth",
      excerpt:
        "New vocational training programs launched in partnership with TNSDC to empower tribal communities with marketable skills.",
      date: "March 5, 2024",
      image: womenImage,
    },
    {
      title: "Mental Health Awareness Among Adolescents",
      excerpt:
        "Our counseling teams are making mental health support accessible to thousands of adolescents across Tamil Nadu.",
      date: "February 28, 2024",
      image: childrenImage,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Latest <span className="gradient-primary bg-clip-text text-transparent">Updates</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Stay informed about our programs, initiatives, and impact
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post, index) => (
              <GlassCard key={index}>
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-56 object-cover rounded-2xl mb-6"
                />
                <div className="flex items-center space-x-2 text-muted-foreground mb-3">
                  <Calendar size={16} />
                  <span className="text-sm">{post.date}</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">{post.title}</h3>
                <p className="text-muted-foreground mb-6">{post.excerpt}</p>
                <Button
                  variant="outline"
                  className="rounded-xl glass hover:bg-primary hover:text-primary-foreground"
                >
                  Read More <ArrowRight className="ml-2" size={16} />
                </Button>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 container mx-auto px-4">
        <GlassCard className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Stay Informed. Stay Inspired.
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Subscribe to receive updates about our programs and impact directly in your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-xl glass border border-border focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button className="rounded-xl gradient-primary">Subscribe</Button>
          </div>
        </GlassCard>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
