import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImage from "@/assets/new.jpg";
import womenEmpowerment from "@/assets/new1.jpg";
import childrenEducation from "@/assets/new3.jpg";
import speech from "@/assets/new4.jpg";
import student from "@/assets/image3.jpg";
import imagew from "@/assets/new5.jpg";
import imagew1 from "@/assets/image11.jpg";

const Activities = () => {
  const galleryImages = [
    heroImage,
    womenEmpowerment,
    childrenEducation,
    student,
    speech,
    imagew,
    imagew1,
    
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 container mx-auto px-4 text-center max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
          Our Activities
        </h1>
        <p className="text-xl text-muted-foreground">
          A glimpse of our community moments and impactful events
        </p>
      </section>

      {/* Gallery Section */}
      <section className="py-20 container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-foreground">
          Activity Gallery
        </h2>

        {/* Animated Scrolling Gallery */}
        <div className="relative overflow-hidden rounded-2xl mb-16">
          <div className="flex animate-scroll space-x-6">
            {[...galleryImages, ...galleryImages].map((image, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-80 h-64 rounded-xl overflow-hidden shadow-lg"
              >
                <img
                  src={image}
                  alt={`Activity ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Static Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="aspect-video rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Activities;
