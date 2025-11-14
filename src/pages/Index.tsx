import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, Heart, Scale, MessageCircle, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlassCard from "@/components/GlassCard";
import StatCard from "@/components/StatCard";
import heroImage from "@/assets/updatedbg.jpg";
import womenEmpowerment from "@/assets/women-empowerment.jpg";
import childrenEducation from "@/assets/children-education.jpg";
import grid from "@/assets/home.jpg";
import grid1 from "@/assets/home2.jpg"; 
import grid2 from "@/assets/home3.jpg";
import grid3 from "@/assets/home4.jpg";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
  const elements = document.querySelectorAll(".stat-number");

  elements.forEach((el) => {
    const target = Number(el.getAttribute("data-target"));
    let current = 0;
    const duration = 1500;
    const start = performance.now();

    function animate(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      current = Math.floor(target * eased);

      el.textContent = current.toLocaleString();

      if (progress < 1) requestAnimationFrame(animate);
      else el.textContent = target.toLocaleString(); // final
    }

    requestAnimationFrame(animate);
  });
}, []);

  const imgBig =grid;
  const imgTopLeft = grid1;
  const imgBottomLeft = grid2;
  const imgRight = grid3;
  const programs = [
    {
      image: womenEmpowerment,
      icon: <BookOpen className="text-white" size={24} />,
      title: "Girls' Education & Women Empowerment",
      description: "Promoting education and empowerment for women and girls across Tamil Nadu.",
    },
    {
      image: childrenEducation,
      icon: <Users className="text-white" size={24} />,
      title: "Skill Training & Employment",
      description: "Providing vocational training and entrepreneurship development programs.",
    },
    {
      image: heroImage,
      icon: <Heart className="text-white" size={24} />,
      title: "Child Rights & Protection",
      description: "Ensuring every child's right to education, safety, and a bright future.",
    },
    {
      image: womenEmpowerment,
      icon: <Scale className="text-white" size={24} />,
      title: "Women's Rights Advocacy",
      description: "Empowering women to assert their rights through awareness and training.",
    },
    {
      image: childrenEducation,
      icon: <MessageCircle className="text-white" size={24} />,
      title: "Counseling & Career Guidance",
      description: "Supporting children and youth with professional counseling services.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center pt-20"
        style={{
          backgroundImage: `linear-gradient(rgba(220, 195, 240, 0.5), rgba(220, 195, 240, 0.8)), url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
            Empowering Marginalized Communities.
            <br />
              Enriching Lives.
            
          </h1>
          <p className="text-xl md:text-2xl text-foreground mb-8 max-w-3xl mx-auto">
            Together, we build a world where every woman and child can learn, grow, and lead
            with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/donate">
              <Button size="lg" className="rounded-lg gradient-primary text-lg px-8 py-6">
                Donate Now
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="rounded-lg text-lg px-8 py-6 glass hover:bg-primary hover:text-primary-foreground"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* LEFT: Collage */}
          <div className="relative w-full flex justify-center lg:justify-start">
            <div className="relative w-[95%] max-w-[560px] h-[420px] md:h-[480px]">
              {/* Top-left small */}
              <img
                src={imgTopLeft}
                alt="Top left - child at desk"
                className="absolute -left-6 -top-6 w-[36%] h-[28%] object-cover rounded-md shadow-lg border-4 border-white"
                style={{ zIndex: 40 }}
              />

              {/* Big vertical image (main) */}
              <img
                src={imgBig}
                alt="Main collage - smiling children"
                className="absolute left-0 top-0 w-[58%] h-[70%] object-cover rounded-md shadow-lg border-4 border-white"
                style={{ zIndex: 30 }}
              />

              {/* Bottom-left small */}
              <img
                src={imgBottomLeft}
                alt="Bottom left - kids with camera"
                className="absolute left-4 bottom-0 w-[44%] h-[28%] object-cover rounded-md shadow-lg border-4 border-white"
                style={{ zIndex: 20 }}
              />

              {/* Right small */}
              <img
                src={imgRight}
                alt="Right - student writing"
                className="absolute right-0 top-24 w-[40%] h-[36%] object-cover rounded-md shadow-lg border-4 border-white"
                style={{ zIndex: 35 }}
              />

              
            </div>
          </div>

          {/* RIGHT: Text content */}
          <div className="text-center lg:text-left">
            <h3 className="text-sm font-medium text-primary mb-3">What have we done with your help?</h3>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4 leading-tight">
              Who We Are
            </h2>

            <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-[640px] mx-auto lg:mx-0">
              CCRWD TRUST is a non-profit organization working across Tamil Nadu to uplift women,
              protect children, and promote equality through education, counseling, and skill
              development. With your support, we run community programs, school initiatives and
              empowerment workshops that directly change lives.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-start gap-3 sm:gap-4">
              <Link to="/about" className="inline-flex">
                <Button className="rounded-lg px-5 py-3">
                  Learn More About Us
                  <ArrowRight className="ml-2" size={16} />
                </Button>
              </Link>

              <Link to="/donate" className="inline-flex">
                <Button className="rounded-lg px-5 py-3 glass border border-black/10 bg-black text-white hover:opacity-95">
                  Donate now
                </Button>
              </Link>
            </div>

            <div className="mt-6 flex flex-wrap gap-6 text-sm text-muted-foreground justify-center lg:justify-start">
              <div>
                <strong className="text-foreground block text-lg">1,200+</strong>
                beneficiaries
              </div>
              <div>
                <strong className="text-foreground block text-lg">45</strong>
                community programs
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

     {/* Impact Snapshot Section (responsive, no gradient) */}
<section id="impact-snapshot" className="py-12 md:py-20 container mx-auto px-4">
  <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-2">
    Together, We've Made a Difference
  </h2>

  <p className="text-center text-muted-foreground mb-8 md:mb-10 text-base md:text-lg">
    Our impact across Tamil Nadu
  </p>

  {/* Responsive grid: 1 col (mobile) -> 2 cols (sm/md) -> 4 cols (lg+) */}
  <div
    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch"
    role="region"
    aria-label="Impact snapshot"
  >
    {/* 1 */}
    <div className="flex flex-col items-center text-center px-4 py-6">
      <div className="flex items-baseline gap-2">
        <span
          className="stat-number text-3xl md:text-4xl font-extrabold text-foreground"
          data-target="38"
          aria-live="polite"
        ></span>
        <span className="text-xl md:text-2xl font-bold text-foreground/80">+</span>
      </div>
      <p className="mt-2 text-sm md:text-base text-muted-foreground">Districts Reached</p>
    </div>

    {/* 2 */}
    <div className="flex flex-col items-center text-center px-4 py-6">
      <div className="flex items-baseline gap-2">
        <span
          className="stat-number text-3xl md:text-4xl font-extrabold text-foreground"
          data-target="76"
          aria-live="polite"
        ></span>
        <span className="text-xl md:text-2xl font-bold text-foreground/80">+</span>
      </div>
      <p className="mt-2 text-sm md:text-base text-muted-foreground">Counselors Across Tamil Nadu</p>
    </div>

    {/* 3 */}
    <div className="flex flex-col items-center text-center px-4 py-6">
      <div className="flex items-baseline gap-2">
        <span
          className="stat-number text-3xl md:text-4xl font-extrabold text-foreground"
          data-target="16098"
          aria-live="polite"
        ></span>
        <span className="text-xl md:text-2xl font-bold text-foreground/80">+</span>
      </div>
      <p className="mt-2 text-sm md:text-base text-muted-foreground">Students Trained in One Year</p>
    </div>

    {/* 4 */}
    <div className="flex flex-col items-center text-center px-4 py-6">
      <div className="flex items-baseline gap-2">
        <span
          className="stat-number text-3xl md:text-4xl font-extrabold text-foreground"
          data-target="64390"
          aria-live="polite"
        ></span>
        <span className="text-xl md:text-2xl font-bold text-foreground/80">+</span>
      </div>
      <p className="mt-2 text-sm md:text-base text-muted-foreground">Total Students Trained</p>
    </div>
  </div>

</section>



      

{/* Quote Banner */}
<section className="py-24 container mx-auto px-4 relative overflow-hidden">

  {/* Abstract Background Lines (SVG Waves) */}
  <svg
    className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
    viewBox="0 0 1440 320"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="none"
      stroke="hsl(var(--primary)/0.45)"
      strokeWidth="2"
      d="M0,160 C240,100 480,220 720,180 C960,140 1200,40 1440,80"
    />
    <path
      fill="none"
      stroke="hsl(var(--primary)/0.25)"
      strokeWidth="1.5"
      d="M0,200 C260,260 480,80 720,130 C980,190 1200,320 1440,260"
    />
  </svg>

  {/* Content Box */}
  <div className="relative max-w-4xl mx-auto text-center px-6 py-10 md:py-14">

    {/* Decorative top line */}
    <div className="w-24 h-[3px] mx-auto mb-6 rounded-full bg-gradient-to-r from-primary to-primary/40"></div>

    <blockquote className="text-2xl md:text-3xl leading-snug font-semibold text-foreground/90 italic tracking-wide">
      “Prosperity is not about what we take from society, but what we give back to it.”
    </blockquote>

    <p className="mt-6 text-muted-foreground text-base md:text-lg">
      — CCRWD TRUST
    </p>
  </div>

  {/* Soft gradient fade top & bottom */}
  <div className="absolute top-0 inset-x-0 h-20 bg-gradient-to-b from-white to-transparent pointer-events-none"></div>
  <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
</section>



      {/* Call to Action */}
<section className="py-20 bg-[hsl(var(--section-secondary))]">
  <div className="container mx-auto px-4">
    <div className="text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
        Ready to Make an Impact?
      </h2>
      <p className="text-xl text-muted-foreground mb-8">
        Join us in our mission to empower communities
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link to="/contact">
          <Button size="lg" className="rounded-lg gradient-primary px-8">
            Contact Us
          </Button>
        </Link>

        <Link to="/donate">
          <Button
            size="lg"
            variant="outline"
            className="rounded-lg px-8 glass hover:bg-primary hover:text-primary-foreground"
          >
            Donate Securely
          </Button>
        </Link>
      </div>
    </div>
  </div>
</section>


      <Footer />
    </div>
  );
};

export default Index;
