import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Target, Eye, Heart, Award, ArrowRight, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlassCard from "@/components/GlassCard";
import heroImage from "@/assets/dir.jpg";
import womenEmpowerment from "@/assets/dir2.jpg";
import childrenEducation from "@/assets/dir3.jpg";
import storyBackground from "@/assets/imagebg.jpg";
import trusty from "@/assets/dir4.jpg";
import trusty1 from "@/assets/dir5.jpg";
import { Timeline } from "@/components/ui/timeline";
const About = () => {
  const strengths = [
    "Experienced and passionate team",
    "Network across 38 districts",
    "76 dedicated counselors",
    "Partnerships with TNSDC, EDII, and other institutions",
  ];

  const teamMembers = [
    {
      image: heroImage,
      name: "Dr.S.SathiyaPriya",
      role: "Chief Functionary and Director",
      //description: "Visionary leader with 20+ years of experience in social development"
    },
    {
      image: womenEmpowerment,
      name: "Mr.K.P.Senthil Raja",
      role: "Finance Trustee",
      //description: "Expert in women's empowerment and community development"
    },
    {
      image: childrenEducation,
      name: "Mrs.Annajoyce",
      role: "Trustee",
      //description: "Specializes in child rights and educational programs"
    },
    {
      image: trusty,
      name: "Mr. Karthikeyan Natesapillai",
      role: "Trustee",
      //description: "Leading our network of 76 counselors across Tamil Nadu"
    },
    {
      image:trusty1,
      name: "Mr. Ashok kumar",
      role: "Trustee",

    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            About CCRWD Trust
          </h1>
          <p className="text-xl text-muted-foreground">
            Building a just and equitable society through empowerment and education
          </p>
        </div>
      </section>

      {/* Our Identity */}
     <section className="py-20 bg-[hsl(var(--section-primary))]">
  <div className="container mx-auto px-4">
    <GlassCard className="max-w-4xl mx-auto text-center p-10">
      <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
        Who We Are
      </h2>
      <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
        The <span className="font-semibold text-foreground">Consumer Protection, Child Rights & Women Development Trust (CCRWD)</span> 
        is dedicated to fostering social justice, equality, and empowerment.  
        We envision a society where every individual — especially women and children — can thrive 
        through education, awareness, and opportunity.
      </p>
    </GlassCard>
  </div>
</section>


      {/* Vision & Mission */}
      <section className="py-20 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <GlassCard>
            <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mb-6">
              <Eye className="text-white" size={32} />
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Vision</h2>
            <p className="text-lg text-muted-foreground">
              "Empowering Marginalized Communities, Enriching Lives."
            </p>
          </GlassCard>

          <GlassCard>
            <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mb-6">
              <Target className="text-white" size={32} />
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Mission</h2>
            <p className="text-lg text-muted-foreground">
              To build a just and equitable society by empowering marginalized communities through
              education, skill development, and advocacy — giving back to society in meaningful
              ways.
            </p>
          </GlassCard>
        </div>
      </section>
      {/* Our Team */}
<section className="py-20 bg-secondary/30">
  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-6">
        <Users className="text-white" size={32} />
      </div>
      <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
        Meet Our Team
      </h2>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
        Dedicated professionals committed to creating lasting social impact
      </p>
    </div>

    {/* Team Grid */}
    <div
      className={`grid gap-8 max-w-7xl mx-auto 
        grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
        ${teamMembers.length === 5 ? "justify-center lg:grid-cols-5" : ""}
      `}
    >
      {teamMembers.map((member, index) => (
        <GlassCard key={index} className="text-center group mx-auto">
          <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <h3 className="text-xl font-bold text-foreground mb-2">{member.name}</h3>
          <p className="text-primary font-semibold mb-3">{member.role}</p>
          <p className="text-sm text-muted-foreground">{member.description}</p>
        </GlassCard>
      ))}
    </div>
  </div>
</section>

      {/* Our Story */}
      <section 
        className="py-20 relative"
        style={{
          backgroundImage: `url(${storyBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
        <div className="container mx-auto px-4 relative z-10">
          <GlassCard className="max-w-4xl mx-auto glass-strong">
            <h2 className="text-4xl font-bold text-center mb-8 text-foreground">
              Our Story
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-4">
                CCRWD Trust was born from a vision to create lasting change in the lives of marginalized communities. Founded by passionate individuals who witnessed the struggles of underprivileged sections of society, our organization has grown from a small initiative to a beacon of hope for thousands.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Over the years, we've worked tirelessly to break down barriers to education, empower women through skill development, and create sustainable livelihood opportunities. Each success story fuels our commitment to reaching more communities and making a broader impact.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, CCRWD Trust stands as a testament to the power of collective action and unwavering dedication. We continue to evolve, innovate, and expand our reach, always keeping our core mission at heart: empowering marginalized communities and enriching lives.
              </p>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Our Strengths */}
      <section className="py-20 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-6">
              <Award className="text-white" size={32} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Strengths
            </h2>
            <p className="text-lg text-muted-foreground">
              What makes us effective and impactful
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {strengths.map((strength, index) => (
              <GlassCard key={index}>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                  </div>
                  <p className="text-lg text-foreground">{strength}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <Timeline data={[]} />


      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Be Part of Our Mission
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join us in our journey to uplift and empower communities across Tamil Nadu
          </p>
          <Link to="/contact">
            <Button size="lg" className="rounded-2xl gradient-primary px-8">
              Join Hands With Us <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
