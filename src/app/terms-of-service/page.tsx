import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function TermsOfServicePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-32 pb-24 min-h-screen">
        <div className="container px-6 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-12">
            Terms of <span className="text-gradient">Service.</span>
          </h1>
          
          <div className="prose prose-lg prose-invert max-w-none text-muted-foreground space-y-8">
            <p className="text-lg text-white">Last updated: {new Date().toLocaleDateString()}</p>
            
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Agreement to Terms</h2>
              <p>By accessing or using the Vizox Studio website and services, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, then you may not access our services.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Intellectual Property Rights</h2>
              <p>Other than the content you own, under these Terms, Vizox Studio and/or its licensors own all the intellectual property rights and materials contained in this Website. You are granted limited license only for purposes of viewing the material contained on this Website.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Restrictions</h2>
              <p>You are specifically restricted from all of the following:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>publishing any Website material in any other media;</li>
                <li>selling, sublicensing and/or otherwise commercializing any Website material;</li>
                <li>publicly performing and/or showing any Website material;</li>
                <li>using this Website in any way that is or may be damaging to this Website;</li>
                <li>using this Website in any way that impacts user access to this Website;</li>
                <li>using this Website contrary to applicable laws and regulations, or in any way may cause harm to the Website, or to any person or business entity.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Limitation of Liability</h2>
              <p>In no event shall Vizox Studio, nor any of its officers, directors and employees, shall be held liable for anything arising out of or in any way connected with your use of this Website whether such liability is under contract. Vizox Studio, including its officers, directors and employees shall not be held liable for any indirect, consequential or special liability arising out of or in any way related to your use of this Website.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Governing Law & Jurisdiction</h2>
              <p>These Terms will be governed by and interpreted in accordance with the laws of the jurisdiction in which Vizox Studio operates, and you submit to the non-exclusive jurisdiction of the state and federal courts located in us for the resolution of any disputes.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
