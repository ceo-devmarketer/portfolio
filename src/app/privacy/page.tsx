import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-deep-dark text-white px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl space-y-8">
        <header className="space-y-3">
          <p className="text-xs font-mono uppercase tracking-[0.25em] text-neon-blue">
            Legal & Trust
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold">
            Privacy <span className="text-neon-blue">& Data Policy</span>
          </h1>
          <p className="text-sm sm:text-base text-gray-400">
            I respect your privacy and only collect the minimum information needed to reply to your
            messages and deliver services.
          </p>
        </header>

        <section className="space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed">
          <h2 className="text-lg font-semibold text-white">What data I collect</h2>
          <p>
            When you contact me via WhatsApp, LinkedIn, email or any form on this website, I may
            receive your name, email address, social profile links and any project information you
            choose to share.
          </p>
          <p>
            I also use basic, privacy-friendly analytics to understand which pages are visited and
            what devices people use. This helps me improve the experience and content.
          </p>
        </section>

        <section className="space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed">
          <h2 className="text-lg font-semibold text-white">How your data is used</h2>
          <p>
            Your information is used only to communicate with you, prepare proposals, deliver
            services and send important project-related updates. I do not sell your data or share it
            with third parties for advertising.
          </p>
          <p>
            For payments, I may use third-party providers (such as crypto exchanges or payment
            gateways). In those cases, their own privacy policies apply in addition to this one.
          </p>
        </section>

        <section className="space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed">
          <h2 className="text-lg font-semibold text-white">Data retention & your rights</h2>
          <p>
            I keep project conversations and files only for as long as they are reasonably needed
            for our collaboration, accounting and legal obligations. You can request an overview of
            the personal data I hold about you, or ask for certain information to be updated or
            removed, where applicable.
          </p>
        </section>

        <section className="space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed">
          <h2 className="text-lg font-semibold text-white">Updates to this policy</h2>
          <p>
            This page may be updated over time as my services or legal requirements change. The
            latest version will always be available here and will apply from the date it is
            published.
          </p>
        </section>

        <footer className="pt-4 text-xs sm:text-sm text-gray-500 flex flex-wrap items-center gap-2">
          <span>Have questions about privacy?</span>
          <Link
            href="/shop"
            className="text-neon-blue hover:underline"
          >
            Contact me through the shop page
          </Link>
          <span>or email: mahedihasan98934@gmail.com</span>
        </footer>
      </div>
    </main>
  );
}

