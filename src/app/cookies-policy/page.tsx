import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Cookies Policy – Vizox Studio",
  description: "Learn how Vizox Studio uses cookies to improve your experience on our website.",
};

export default function CookiesPolicyPage() {
  const lastUpdated = "March 14, 2026";

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-32 pb-24 min-h-screen bg-background">
        <div className="container px-6 max-w-4xl mx-auto">

          {/* Header */}
          <header className="mb-16">
            <span className="px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium tracking-wide uppercase mb-6 inline-block">
              Legal
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 leading-tight">
              Cookies <span className="text-gradient">Policy.</span>
            </h1>
            <p className="text-muted-foreground">Last updated: {lastUpdated}</p>
          </header>

          <div className="prose prose-invert max-w-none space-y-12 text-muted-foreground">

            {/* 1. Introduction */}
            <section>
              <h2 className="text-2xl font-serif font-bold text-white mb-4">1. Introduction</h2>
              <p className="leading-relaxed">
                Vizox Studio ("we", "us", or "our") uses cookies and similar tracking technologies on our website{" "}
                <span className="text-primary">vizoxstudio.com</span> (the "Site"). This Cookies Policy explains what cookies are, how we use them, the types of cookies we use, the information we collect using cookies, and how to control your cookie preferences.
              </p>
              <p className="leading-relaxed mt-4">
                By continuing to use our Site, you consent to our use of cookies as described in this policy. If you do not agree to our use of cookies, you should adjust your browser settings or refrain from using the Site.
              </p>
            </section>

            <div className="border-t border-border/50" />

            {/* 2. What Are Cookies */}
            <section>
              <h2 className="text-2xl font-serif font-bold text-white mb-4">2. What Are Cookies?</h2>
              <p className="leading-relaxed">
                Cookies are small text files that are placed on your device (computer, smartphone, or tablet) when you visit a website. They are widely used to make websites work more efficiently and to provide information to the owners of the site. Cookies help us recognise your device and remember certain information about your visit, such as your preferences and actions on the Site.
              </p>
            </section>

            <div className="border-t border-border/50" />

            {/* 3. Types of Cookies We Use */}
            <section>
              <h2 className="text-2xl font-serif font-bold text-white mb-6">3. Types of Cookies We Use</h2>

              <div className="space-y-6">
                <div className="bg-surface border border-border rounded-[16px] p-6 hover:border-primary/30 transition-colors">
                  <h3 className="text-white font-semibold text-lg mb-2">Strictly Necessary Cookies</h3>
                  <p className="leading-relaxed text-sm">
                    These cookies are essential for the Site to function properly. They enable core functionality such as navigation, access to secure areas, and form submissions. The Site cannot function properly without these cookies, and they cannot be disabled.
                  </p>
                </div>

                <div className="bg-surface border border-border rounded-[16px] p-6 hover:border-primary/30 transition-colors">
                  <h3 className="text-white font-semibold text-lg mb-2">Performance & Analytics Cookies</h3>
                  <p className="leading-relaxed text-sm">
                    These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our Site. They help us understand which pages are the most and least popular and see how visitors move around the Site. All information these cookies collect is aggregated and therefore anonymous.
                  </p>
                </div>

                <div className="bg-surface border border-border rounded-[16px] p-6 hover:border-primary/30 transition-colors">
                  <h3 className="text-white font-semibold text-lg mb-2">Functional Cookies</h3>
                  <p className="leading-relaxed text-sm">
                    These cookies enable the Site to provide enhanced functionality and personalisation. They may be set by us or by third-party providers whose services we have added to our pages. If you do not allow these cookies, some or all of these services may not function properly.
                  </p>
                </div>

                <div className="bg-surface border border-border rounded-[16px] p-6 hover:border-primary/30 transition-colors">
                  <h3 className="text-white font-semibold text-lg mb-2">Marketing & Targeting Cookies</h3>
                  <p className="leading-relaxed text-sm">
                    These cookies may be set through our Site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other websites. They do not store directly personal information but are based on uniquely identifying your browser and internet device.
                  </p>
                </div>
              </div>
            </section>

            <div className="border-t border-border/50" />

            {/* 4. Third-Party Cookies */}
            <section>
              <h2 className="text-2xl font-serif font-bold text-white mb-4">4. Third-Party Cookies</h2>
              <p className="leading-relaxed">
                In addition to our own cookies, we may also use cookies from third-party services to report usage statistics of the Site, deliver advertisements on and through the Site, and perform other functions. These third-party services include but are not limited to:
              </p>
              <ul className="mt-4 space-y-3 list-none">
                {[
                  "Google Analytics – for website traffic and behaviour analysis",
                  "Google Fonts – for typography delivery",
                  "Vercel – our hosting and deployment platform",
                  "Meta Pixel – for marketing and advertising performance tracking"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm leading-relaxed">
                    <span className="text-primary mt-0.5">→</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="leading-relaxed mt-4">
                These third parties have their own privacy policies governing the use of cookies. We encourage you to review their respective policies for more information.
              </p>
            </section>

            <div className="border-t border-border/50" />

            {/* 5. How to Control Cookies */}
            <section>
              <h2 className="text-2xl font-serif font-bold text-white mb-4">5. How to Control Cookies</h2>
              <p className="leading-relaxed">
                You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in your browser. Most web browsers allow you to:
              </p>
              <ul className="mt-4 space-y-3 list-none">
                {[
                  "View what cookies are stored on your device and delete them individually",
                  "Block third-party cookies",
                  "Block cookies from particular websites",
                  "Block all cookies from being set",
                  "Delete all cookies when you close your browser"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm leading-relaxed">
                    <span className="text-primary mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="leading-relaxed mt-4">
                Please be aware that restricting cookies may impact the functionality of our Site. If you disable all cookies, some parts of the Site may not work as intended. For detailed browser-specific instructions, please refer to your browser's help documentation.
              </p>
            </section>

            <div className="border-t border-border/50" />

            {/* 6. Cookie Retention */}
            <section>
              <h2 className="text-2xl font-serif font-bold text-white mb-4">6. Cookie Retention</h2>
              <p className="leading-relaxed">
                The length of time a cookie remains on your device depends on whether it is a "session" or "persistent" cookie. Session cookies last only as long as your browser is open and are deleted automatically when you close your browser. Persistent cookies remain on your device until they expire or you delete them manually. The expiry period depends on the specific cookie.
              </p>
            </section>

            <div className="border-t border-border/50" />

            {/* 7. Updates to This Policy */}
            <section>
              <h2 className="text-2xl font-serif font-bold text-white mb-4">7. Updates to This Policy</h2>
              <p className="leading-relaxed">
                We may update this Cookies Policy from time to time to reflect changes in technology, regulation, our business operations, or for other operational, legal, or regulatory reasons. We encourage you to review this page periodically to stay informed about our use of cookies. The date at the top of this policy indicates when it was last updated.
              </p>
            </section>

            <div className="border-t border-border/50" />

            {/* 8. Contact Us */}
            <section>
              <h2 className="text-2xl font-serif font-bold text-white mb-4">8. Contact Us</h2>
              <p className="leading-relaxed">
                If you have any questions about our use of cookies or this Cookies Policy, please contact us at:
              </p>
              <div className="mt-6 bg-surface border border-border rounded-[16px] p-6">
                <p className="text-white font-semibold mb-1">Vizox Studio</p>
                <p className="text-sm">
                  Email:{" "}
                  <a href="mailto:contactvizox@gmail.com" className="text-primary hover:text-white transition-colors">
                    contactvizox@gmail.com
                  </a>
                </p>
                <p className="text-sm mt-1">
                  Phone:{" "}
                  <a href="tel:+918271754978" className="text-primary hover:text-white transition-colors">
                    +91 8271754978
                  </a>
                </p>
              </div>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
