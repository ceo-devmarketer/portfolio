import { Metadata } from "next";
import Link from "next/link";
import ShopContactOptions from "@/components/ShopContactOptions";

export const metadata: Metadata = {
  title: "Shop | DEVMARKETER.",
  description: "Digital products: website source code, USDT management, virtual cards and more.",
};

const products = [
  {
    name: "7-Day Dedicated Website Work",
    description:
      "I will work on your website for 7 days, every day 4 hours focused on design, development, optimization and fixes so your site looks professional and performs better.",
    badge: "Premium 1:1 Service",
    price: "500 USDT (fixed)",
    highlight: true,
  },
  {
    name: "USDT Dollar Management Setup",
    description:
      "Guided setup for accepting and managing USDT payments for your online business or personal brand.",
    badge: "Crypto Ready",
    price: "Custom Pricing",
  },
  {
    name: "Virtual Card & Digital Payments",
    description:
      "Consultation and setup help for virtual cards, subscriptions, and online payment solutions.",
    badge: "For Global Payments",
    price: "On Request",
  },
];

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-deep-dark text-white px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-10 sm:mb-14">
          <div>
            <p className="text-sm font-mono uppercase tracking-[0.25em] text-neon-blue mb-2">
              Digital Products & Services
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Shop <span className="text-neon-blue">DEVMARKETER</span> Resources
            </h1>
            <p className="mt-3 text-sm sm:text-base text-gray-400 max-w-xl">
              Buy source codes and digital services that help you launch faster, look more professional, and
              handle global payments with confidence.
            </p>
          </div>
          <Link
            href="/"
            className="mt-2 sm:mt-0 inline-flex items-center justify-center rounded-full border border-gray-700 px-5 py-2.5 text-sm font-medium text-gray-200 hover:bg-gray-100 hover:text-black transition-colors"
          >
            ← Back to Portfolio
          </Link>
        </div>

        {/* Products grid */}
        <div className="grid gap-5 sm:gap-6 md:grid-cols-2">
          {products.map((product) => (
            <div
              key={product.name}
              className={`group flex flex-col justify-between rounded-2xl border border-white/5 bg-gradient-to-br from-white/5 via-white/[0.02] to-transparent p-5 sm:p-6 shadow-[0_0_40px_rgba(0,0,0,0.6)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(0,243,255,0.25)] ${
                product.highlight ? "md:col-span-2" : ""
              }`}
            >
              <div>
                <div className="mb-3 flex items-center gap-2">
                  <span className="inline-flex items-center rounded-full bg-neon-blue/10 px-3 py-1 text-xs font-semibold text-neon-blue">
                    {product.badge}
                  </span>
                </div>
                <h2 className="text-lg sm:text-xl font-semibold mb-2">{product.name}</h2>
                <p className="text-sm sm:text-base text-gray-400 mb-4">{product.description}</p>
              </div>

              <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <span className="text-sm font-semibold text-neon-blue">{product.price}</span>
                {product.highlight ? (
                  <ShopContactOptions />
                ) : (
                  <button className="inline-flex w-full sm:w-auto items-center justify-center rounded-full bg-neon-purple px-4 py-2 text-xs sm:text-sm font-semibold text-white shadow-[0_0_20px_rgba(190,24,255,0.4)] transition-all hover:bg-neon-blue hover:shadow-[0_0_25px_rgba(0,243,255,0.6)]">
                    Contact to Buy
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Helper text */}
        <p className="mt-8 text-xs sm:text-sm text-gray-500 max-w-2xl">
          All services are delivered manually after a short chat so we can understand your exact needs (tech stack,
          business type, and country). For the 7-day service, use WhatsApp, LinkedIn or Email from the contact options
          to confirm your slot; for other services, use the &quot;Contact to Buy&quot; button and we&apos;ll follow up.
        </p>
      </div>
    </main>
  );
}

