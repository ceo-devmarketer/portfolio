import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-deep-dark text-white px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl space-y-8">
        <header className="space-y-3">
          <p className="text-xs font-mono uppercase tracking-[0.25em] text-neon-blue">
            Legal & Trust
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold">
            Terms of <span className="text-neon-blue">Service</span>
          </h1>
          <p className="text-sm sm:text-base text-gray-400">
            Clear, simple conditions for working together on 7-day and 30-day website services and
            other digital work.
          </p>
        </header>

        <section className="space-y-3 text-sm sm:text-base text-gray-300 leading-relaxed">
          <h2 className="text-lg font-semibold text-white">1. Scope of work</h2>
          <p>
            Before a project starts, we&apos;ll agree on a clear scope in writing (WhatsApp, email
            or document). The 7-day and 30-day services include a set number of days and hours
            dedicated to your website and related tasks such as design, development, optimization
            and consulting.
          </p>
        </section>

        <section className="space-y-3 text-sm sm:text-base text-gray-300 leading-relaxed">
          <h2 className="text-lg font-semibold text-white">2. Payments</h2>
          <p>
            Pricing for premium services is shown on the shop page. Payments are usually completed
            in USDT or another agreed method before or in milestones during the project. Any
            processing fees from payment providers are the client&apos;s responsibility.
          </p>
        </section>

        <section className="space-y-3 text-sm sm:text-base text-gray-300 leading-relaxed">
          <h2 className="text-lg font-semibold text-white">3. Revisions & communication</h2>
          <p>
            Revisions are part of the process as long as they stay within the agreed scope. Clear
            feedback via WhatsApp, LinkedIn or email helps keep the project on time. If a major
            change requires more time than originally planned, we&apos;ll discuss updated pricing
            first.
          </p>
        </section>

        <section className="space-y-3 text-sm sm:text-base text-gray-300 leading-relaxed">
          <h2 className="text-lg font-semibold text-white">4. Refunds & cancellations</h2>
          <p>
            Because these services are based on dedicated time and custom work, full refunds are not
            typical once work has started. However, if something urgent happens and you need to
            pause or cancel, we&apos;ll review the situation fairly and only charge for the work
            already completed.
          </p>
        </section>

        <section className="space-y-3 text-sm sm:text-base text-gray-300 leading-relaxed">
          <h2 className="text-lg font-semibold text-white">5. Ownership</h2>
          <p>
            After full payment, you receive the rights to use the final designs, code and assets for
            your business. I may display non-sensitive parts of the work in my portfolio or case
            studies, unless you request otherwise.
          </p>
        </section>

        <section className="space-y-3 text-sm sm:text-base text-gray-300 leading-relaxed">
          <h2 className="text-lg font-semibold text-white">6. Changes to these terms</h2>
          <p>
            These terms may be updated over time. The version shown on this page at the time we
            start a project will apply to that project, unless we both agree on different written
            conditions.
          </p>
        </section>

        <footer className="pt-4 text-xs sm:text-sm text-gray-500 flex flex-wrap items-center gap-2">
          <span>Questions about how I work?</span>
          <Link
            href="/shop"
            className="text-neon-blue hover:underline"
          >
            Visit the shop page
          </Link>
          <span>or contact me directly.</span>
        </footer>
      </div>
    </main>
  );
}

