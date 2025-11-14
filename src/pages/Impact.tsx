import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Quote } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlassCard from "@/components/GlassCard";
import StatCard from "@/components/StatCard";
import womenImage from "@/assets/women-empowerment.jpg";
import childrenImage from "@/assets/children-education.jpg";

const Impact = () => {
  const stories = [
    {
      quote:
        "After CCRWD's training, I started my tailoring business. Now, I support my family and teach other women.",
      author: "Lakshmi",
      location: "Tiruppur",
      image: womenImage,
    },
    {
      quote: "Through counseling, I learned to manage stress and focus on studies.",
      author: "Anitha",
      location: "Madurai",
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
            Our <span className="gradient-primary bg-clip-text text-transparent">Impact</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Transforming lives and building stronger communities
          </p>
        </div>
      </section>

      {/* Impact Overview */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Making Real Difference
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our impact is measured not just in numbers, but in transformed lives
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard number="38" label="Districts Covered" />
            <StatCard number="76" label="Counselors" />
            <StatCard number="1000+" label="Women Entrepreneurs Trained" />
            <StatCard number="5000+" label="Children Educated" />
          </div>
        </div>
      </section>

      {/* Real Stories */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Real Stories of Change
          </h2>
          <p className="text-lg text-muted-foreground">
            Hear from the lives we've touched
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-8">
          {stories.map((story, index) => (
            <GlassCard key={index}>
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <img
                  src={story.image}
                  alt={story.author}
                  className="w-full md:w-1/3 h-64 object-cover rounded-2xl"
                />
                <div className="flex-1">
                  <Quote className="text-primary mb-4" size={40} />
                  <blockquote className="text-xl md:text-2xl text-foreground mb-6 italic">
                    "{story.quote}"
                  </blockquote>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full gradient-primary" />
                    <div>
                      <p className="font-semibold text-foreground">{story.author}</p>
                      <p className="text-muted-foreground">{story.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Visual Gallery Preview */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              See Our Work in Action
            </h2>
            <p className="text-lg text-muted-foreground">
              Training programs, awareness events, and community engagement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            <img
              src={womenImage}
              alt="Women empowerment training"
              className="w-full h-80 object-cover rounded-3xl glass"
            />
            <img
              src={childrenImage}
              alt="Children education"
              className="w-full h-80 object-cover rounded-3xl glass"
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Every Story Begins With Your Support
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join us in creating more success stories
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/donate">
              <Button size="lg" className="rounded-2xl gradient-primary px-8">
                Get Involved <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="rounded-2xl px-8 glass hover:bg-primary hover:text-primary-foreground"
              >
                Read More Stories
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Impact;
