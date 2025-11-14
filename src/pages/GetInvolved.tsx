import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Users, Handshake, GraduationCap, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlassCard from "@/components/GlassCard";

const GetInvolved = () => {
  const ways = [
    {
      icon: <Users className="text-white" size={32} />,
      title: "Volunteer",
      description:
        "Share your time, skills, and energy to make a difference in the lives of women and children.",
      action: "Join as Volunteer",
      link: "/contact",
    },
    {
      icon: <GraduationCap className="text-white" size={32} />,
      title: "Internship Opportunities",
      description:
        "Gain experience in community service and social development through structured internships.",
      action: "Apply for Internship",
      link: "/contact",
    },
    {
      icon: <Handshake className="text-white" size={32} />,
      title: "Partner With Us",
      description:
        "Corporates, NGOs, and institutions — let's collaborate for a cause that matters.",
      action: "Become a Partner",
      link: "/contact",
    },
    
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Get Involved
          </h1>
          <p className="text-xl text-muted-foreground">
            Real change happens when passionate people come together
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <GlassCard className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Join Our Mission
            </h2>
            <p className="text-lg text-muted-foreground">
              Whether you're an individual looking to volunteer, a corporation seeking meaningful
              partnerships, or a student eager to learn — there's a place for you in our mission to
              empower communities.
            </p>
          </GlassCard>
        </div>
      </section>

      {/* Ways to Get Involved */}
      <section className="py-20 container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-8">
          {ways.map((way, index) => (
            <GlassCard key={index}>
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-20 h-20 rounded-2xl gradient-primary flex items-center justify-center flex-shrink-0">
                  {way.icon}
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    {way.title}
                  </h3>
                  <p className="text-lg text-muted-foreground mb-6">{way.description}</p>
                  <Link to={way.link}>
                    <Button className="rounded-xl gradient-primary">
                      {way.action} <ArrowRight className="ml-2" size={18} />
                    </Button>
                  </Link>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              Why Get Involved?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <GlassCard>
                <h3 className="text-xl font-semibold text-foreground mb-3">Make Real Impact</h3>
                <p className="text-muted-foreground">
                  Directly contribute to empowering women and protecting children across Tamil Nadu.
                </p>
              </GlassCard>
              <GlassCard>
                <h3 className="text-xl font-semibold text-foreground mb-3">Gain Experience</h3>
                <p className="text-muted-foreground">
                  Develop valuable skills in social work, community development, and leadership.
                </p>
              </GlassCard>
              <GlassCard>
                <h3 className="text-xl font-semibold text-foreground mb-3">Build Network</h3>
                <p className="text-muted-foreground">
                  Connect with like-minded individuals and organizations committed to social change.
                </p>
              </GlassCard>
              <GlassCard>
                <h3 className="text-xl font-semibold text-foreground mb-3">Personal Growth</h3>
                <p className="text-muted-foreground">
                  Experience personal fulfillment by giving back to society in meaningful ways.
                </p>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Together, We Can Create Lasting Impact
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Take the first step towards making a difference today
          </p>
          <Link to="/contact">
            <Button size="lg" className="rounded-2xl gradient-primary px-8">
              Start Today <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GetInvolved;
