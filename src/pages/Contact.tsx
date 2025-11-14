import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlassCard from "@/components/GlassCard";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID ?? "";
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? "";
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? "";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "", // kept optional in UI
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  // validate name + message only (email optional)
  const validate = () => {
    if (!formData.name.trim() || !formData.message.trim()) {
      toast({
        title: "Missing Information",
        description: "Please fill in your name and message.",
        variant: "destructive",
      });
      return false;
    }

    if (formData.message.trim().length < 5) {
      toast({
        title: "Message Too Short",
        description: "Please provide a longer message (at least 5 characters).",
        variant: "destructive",
      });
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      toast({
        title: "Email Service Not Configured",
        description:
          "EmailJS is not configured. Make sure env vars VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID and VITE_EMAILJS_PUBLIC_KEY are set.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    // Send only name and message to match template variables {{name}} and {{message}}
    const templateParams = {
      name: formData.name.trim(),
      message: formData.message.trim(),
    };

    try {
      const result = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      console.info("EmailJS result:", result);

      toast({
        title: "Message Sent!",
        description: "Thank you — we received your message and will reply shortly.",
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);

      toast({
        title: "Send Failed",
        description:
          "There was an error sending your message. You can try again or email us directly at ccrwdtrust@gmail.com.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-12">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-muted-foreground">
            We’re here to help. Send a message, call, or visit — together we can make an impact.
          </p>
        </div>
      </section>

      {/* Main contact area */}
      <section className="py-14 bg-[hsl(var(--section-primary))]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Left column — contact cards */}
            <div className="space-y-6">
              <GlassCard className="p-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Information</h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center shrink-0">
                      <MapPin className="text-white" size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">Address</h3>
                      <address className="not-italic text-sm text-muted-foreground">
                        9, Subash Nagar, FCI Road,
                        <br />
                        Ganapathy, Coimbatore - 641006
                      </address>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center shrink-0">
                      <Phone className="text-white" size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">Phone</h3>
                      <a
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        href="tel:+917397195051"
                        aria-label="Call us"
                      >
                        +91 73971 95051
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center shrink-0">
                      <Mail className="text-white" size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">Email</h3>
                      <a
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        href="mailto:ccrwdtrust@gmail.com"
                        aria-label="Email us"
                      >
                        ccrwdtrust@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </GlassCard>

              {/* Map */}
              <GlassCard className="p-6">
                <h3 className="text-lg font-medium text-foreground mb-4">Find Us</h3>
                <div className="w-full h-64 rounded-xl overflow-hidden border border-border">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.975019400205!2d76.9936872!3d11.0404997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859007b6b3767%3A0xfd1de30fc6224fde!2sCCRWD%20TRUST!5e0!3m2!1sen!2sin!4v1762943229431!5m2!1sen!2sin"
                    title="CCRWD Trust Location"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </GlassCard>

              {/* Office hours */}
              <GlassCard className="p-6">
                <h3 className="text-lg font-medium text-foreground mb-3">Office Hours</h3>
                <p className="text-sm text-muted-foreground">
                  Monday - Friday: <span className="font-medium text-foreground">9:00 AM - 6:00 PM</span>
                  <br />
                  Saturday: <span className="font-medium text-foreground">9:00 AM - 1:00 PM</span>
                  <br />
                  Sunday: <span className="font-medium text-foreground">Closed</span>
                </p>
              </GlassCard>
            </div>

            {/* Right column — contact form */}
            <div>
              <GlassCard className="p-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Send Us a Message</h2>
                <p className="text-sm text-muted-foreground mb-6">
                  Tell us about your inquiry and we’ll reply as soon as possible.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-medium text-foreground mb-2">
                      Name
                    </label>
                    <Input
                      id="contact-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your full name"
                      className="rounded-lg h-12"
                      aria-required
                      disabled={loading}
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-medium text-foreground mb-2">
                      Email (optional)
                    </label>
                    <Input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@domain.com"
                      className="rounded-lg h-12"
                      disabled={loading}
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea
                      id="contact-message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="How can we help?"
                      className="rounded-lg min-h-[140px]"
                      aria-required
                      disabled={loading}
                    />
                  </div>

                  <div className="flex items-center gap-4">
                    <Button type="submit" size="lg" className="rounded-lg gradient-primary px-6" disabled={loading}>
                      {loading ? "Sending..." : "Send Message"}
                    </Button>
                    <Button
                      type="button"
                      size="lg"
                      variant="outline"
                      className="rounded-lg px-6"
                      onClick={() => setFormData({ name: "", email: "", message: "" })}
                      disabled={loading}
                    >
                      Reset
                    </Button>
                  </div>
                </form>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
