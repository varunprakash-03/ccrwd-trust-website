import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookOpen, Briefcase, Shield, Scale, MessageCircle, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlassCard from "@/components/GlassCard";
import heroImage from "@/assets/image6.jpg";
import womenEmpowerment from "@/assets/image1.jpg";
import childrenEducation from "@/assets/image2.jpg";
import councel from "@/assets/image5.jpg";
import imagebg from "@/assets/imagebg.jpg";

const Programs = () => {
  const programs = [
    {
      image: womenEmpowerment,
     
      title: "Women Rights And Development",
      description:
        "We conducted a Women’s Rights and Development program focusing on cybersecurity and protection against cybercrimes. The training supported women in understanding online safety and reporting methods. We also trained women police personnel and held an awareness session for police trainees at PRS on handling cybercrimes and supporting victims. The program aimed to build safer, more informed communities.",
    },
    {
      image: childrenEducation,
     
      title: "Empowering Frontline Workers with Legal Knowledge",
      description:
        "We provide training for frontline workers and teachers on POCSO, the Juvenile Justice Act, and child-protection guidelines. Our sessions help them understand legal duties, safe practices, reporting procedures, and how to support children effectively. This ensures every teacher and frontline worker is better prepared to protect children and respond responsibly in real situations.",
    },
    {
      image: heroImage,
      
      title: "Child Rights & Protection",
      description:
        "We conducted an awareness program for tribal students covering mental health, menstrual hygiene, career guidance, and POCSO. The session helped students understand emotional well-being, healthy practices, personal safety, and their rights under child protection laws. We also guided them on education pathways and career opportunities, aiming to build confidence and support their overall growth.",
    },
    {
      image: imagebg,
      
      title: "Empowering Students with Safety & Wellness Awareness",
      description:
        "We conduct awareness programs for college students on POCSO, the Juvenile Justice Act, and overall mental and physical health. The sessions help students understand child protection laws, legal responsibilities, safe behavior, and reporting methods. We also focus on building emotional strength, stress management, and healthy lifestyle habits. The goal is to create informed, responsible, and health-aware youth.",
    },
    {
      image: councel,
     
      title: "Counseling & Career Guidance",
      description:
        "We conducted career guidance and mental health awareness sessions for ADW (Adhi Dravidar Welfare) hostel students. The program helped students explore career opportunities, build confidence, and understand the importance of emotional well-being. We also shared practical tips on stress management, healthy habits, and staying motivated, supporting them to make informed decisions for their future.",
    },
    
  ];

  const galleryImages = [
    womenEmpowerment,
    childrenEducation,
    heroImage,
    womenEmpowerment,
    councel,
  imagebg,
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground">
            Making a difference through focused programs and initiatives
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <GlassCard className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Making a Difference
            </h2>
            <p className="text-lg text-muted-foreground">
              Our programs focus on education, empowerment, and equal rights — creating long-term
              impact for women, youth, and children across Tamil Nadu.
            </p>
          </GlassCard>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 container mx-auto px-4 ">
        <h2 className="text-4xl font-bold text-center mb-16 text-foreground">
          Our Key Services
        </h2>
        <div className="max-w-6xl mx-auto space-y-8">
          {programs.map((program, index) => (
            <GlassCard key={index} className="flex flex-col md:flex-row items-start gap-6">
              <div className="relative w-full md:w-64 h-48 rounded-lg overflow-hidden flex-shrink-0">
                <img 
                  src={program.image} 
                  alt={program.title}
                  className="w-full h-full object-cover"
                />
               
              </div>
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {program.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {program.description}
                </p>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-secondary/30 overflow-hidden">
        <div className="container mx-auto px-4 mb-12">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Work in Action
            </h2>
            <p className="text-lg text-muted-foreground">
              Witness the transformative impact we create across communities
            </p>
          </div>
        </div>
        
        {/* Animated Gallery Loop */}
        <div className="relative">
          <div className="flex gap-6 animate-[scroll_30s_linear_infinite]">
            {[...galleryImages, ...galleryImages].map((image, index) => (
              <div
                key={index}
                className="relative flex-shrink-0 w-80 h-64 rounded-lg overflow-hidden glass hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Support Our Mission
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Your contribution helps us continue these vital programs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/donate">
              <Button size="lg" className="rounded-2xl gradient-primary px-8">
                Donate Now <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Programs;
