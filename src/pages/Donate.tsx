import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Heart, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlassCard from "@/components/GlassCard";
import { useToast } from "@/hooks/use-toast";
import qrCode from "@/assets/qr-code.png";

const Donate = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(500);
  const [customAmount, setCustomAmount] = useState("");
  const { toast } = useToast();

  const donationOptions = [
    { amount: 500, impact: "Support Child Education" },
    { amount: 1000, impact: "Train a Woman Entrepreneur" },
    { amount: 2500, impact: "Sponsor Counseling for Students" },
  ];

  const handleDonate = () => {
    const amount = selectedAmount ?? (customAmount ? parseInt(customAmount) : 0);
    if (!amount || amount <= 0) {
      toast({
        title: "Invalid Amount",
        description: "Please select or enter a valid donation amount",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Thank You!",
      description: `Proceeding to payment for ₹${amount}. In production, this would redirect to a secure payment gateway.`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero (simplified; removed the "Contribution" headline per request) */}
      <section className="pt-28 pb-10">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-3">
            Donate
          </h1>
          <p className="text-lg text-muted-foreground">
            Your support helps us educate children, empower women and strengthen communities.
          </p>
        </div>
      </section>

      {/* Donation + QR Section */}
      <section className="py-12 bg-[hsl(var(--section-primary))]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 items-start">

            {/* Right: QR Section (new) */}
            <div>
              <GlassCard className="p-6 flex flex-col items-center text-center">
                <h3 className="text-xl font-semibold text-foreground mb-4">Quick Donate — Scan to Pay</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Use your UPI app to scan the QR code and donate instantly. Safe, secure, and fast.
                </p>

                <div className="bg-white p-4 rounded-xl shadow-lg mb-4">
                  <img src={qrCode} alt="Donation QR Code" className="w-48 h-48 object-contain" />
                </div>

                <div className="text-sm text-muted-foreground mb-4">
                  <p className="mb-1"><span className="font-medium text-foreground">UPI ID:</span> ccrwd@upi</p>
                  <p><span className="font-medium text-foreground">Payee:</span> CCRWD Trust</p>
                </div>

                <div className="w-full">
                  <Button
                    size="md"
                    variant="outline"
                    className="w-full rounded-xl"
                    onClick={() =>
                      navigator.clipboard?.writeText("ccrwd@upi").then(
                        () => toast({ title: "Copied", description: "UPI ID copied to clipboard." }),
                        () => toast({ title: "Unable", description: "Could not copy UPI ID.", variant: "destructive" })
                      )
                    }
                  >
                    Copy UPI ID
                  </Button>
                </div>

                <p className="text-xs text-muted-foreground mt-4">
                  For large donations or bank transfer details, please contact us at <a href="mailto:ccrwdtrust@gmail.com" className="underline">ccrwdtrust@gmail.com</a>.
                </p>
              </GlassCard>
            </div>
          </div>
          {/* Left: Donation Form */}
            <div>

              {/* Impact Message (kept) */}
              <GlassCard className="mt-6 p-6">
                <div className="text-center">
                  <Heart className="mx-auto mb-4 text-primary animate-float" size={36} />
                  <h3 className="text-xl font-semibold text-foreground mb-2">Thank You for Your Generosity</h3>
                  <p className="text-sm text-muted-foreground max-w-lg mx-auto">
                    Your contribution is more than a donation — it's an investment in the future of marginalized communities across Tamil Nadu.
                  </p>
                </div>
              </GlassCard>
            </div>
        </div>
      </section>


      {/* Removed: 'Our Commitment' / Transparency section as requested */}

      <Footer />
    </div>
  );
};

export default Donate;
