
'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function LandingPage({ brand = 'Trusted Home Projects' }: { brand?: string }) {
  const [submitted, setSubmitted] = useState(false);

  const services = [
    { title: 'Interior & Exterior Painting', desc: 'Clean lines, durable finishes, fast turnaround.' },
    { title: 'LVP Flooring', desc: 'Rigid core, waterproof options, pro installation.' },
    { title: 'Epoxy Garage Floors', desc: 'High-gloss, durable coatings for a showroom look.' },
    { title: 'Deck Builds & Refresh', desc: 'New builds, resurfacing, railings, and stains.' },
    { title: 'Permanent Outdoor Lighting', desc: 'Subtle architectural lighting, seasonal presets.' },
    { title: 'Small Renovations', desc: 'Trim, drywall repairs, backsplash, doors & more.' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <header className="sticky top-0 z-40 backdrop-blur bg-white/80 border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-2xl bg-neutral-900 flex items-center justify-center text-white font-bold">T</div>
            <span className="font-semibold tracking-tight">{brand}</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#services" className="hover:text-neutral-600">Services</a>
            <a href="#why" className="hover:text-neutral-600">Why We’re Different</a>
            <a href="#how" className="hover:text-neutral-600">How It Works</a>
            <a href="#pricing" className="hover:text-neutral-600">Pricing</a>
            <a href="#faq" className="hover:text-neutral-600">FAQ</a>
          </nav>
          <a href="#quote" className="inline-flex items-center rounded-xl px-4 py-2 bg-neutral-900 text-white text-sm hover:bg-neutral-800">Get a quote</a>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">Trusted local pros. Fair, transparent home projects.</h1>
            <p className="mt-5 text-neutral-600 text-lg leading-relaxed">
              {brand} delivers reliable, well-priced home improvements with professional crews. We prioritize clear communication, on-time schedules, and tidy job sites—without high-pressure sales or hidden fees.
            </p>
            <p className="mt-4 text-neutral-700 font-medium">Because we operate with low overhead and direct scheduling, you get high-quality work at <strong>15–30% lower prices</strong> than the market average.</p>
            <ul className="mt-5 space-y-2 text-neutral-700">
              <li>• Financing options at checkout (subject to approval).</li>
              <li>• Materials coordination to keep projects on schedule.</li>
              <li>• Curated network—quality first, no spammy lead marketplaces.</li>
            </ul>
            <div className="mt-8 flex gap-3">
              <a href="#quote" className="rounded-xl px-5 py-3 bg-neutral-900 text-white text-sm hover:bg-neutral-800">Get a fast estimate</a>
              <a href="#why" className="rounded-xl px-5 py-3 border border-neutral-300 text-sm hover:bg-white">Why we’re different</a>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="relative">
            <div className="aspect-[4/3] w-full rounded-3xl bg-gradient-to-br from-neutral-200 to-neutral-100 shadow-sm" />
          </motion.div>
        </div>
      </section>

      <section id="why" className="bg-white border-y border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-semibold tracking-tight">Why home projects cost too much — and how we fix it</h2>
          <p className="mt-4 text-neutral-700 max-w-3xl">
            Traditional general contractors often add <strong>30–50% markups</strong> to cover layers of coordination, sales commissions, and overhead. Those layers inflate prices and cause delays without adding real value.
          </p>
          <p className="mt-4 text-neutral-700 max-w-3xl">
            Trusted Home Projects simplifies the process. We connect you directly with vetted crews, coordinate materials and schedules, and manage communication — saving you both time and money while keeping accountability clear.
          </p>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-neutral-200 bg-gradient-to-b from-neutral-50 to-white p-6">
              <div className="font-medium">Traditional General Contractor</div>
              <ul className="mt-3 text-sm text-neutral-700 space-y-2">
                <li>• Multiple markup layers</li>
                <li>• Slow scheduling, unclear communication</li>
                <li>• Sales-driven estimates, surprise add-ons</li>
                <li>• Overhead passed directly to clients</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-neutral-200 bg-gradient-to-b from-neutral-50 to-white p-6">
              <div className="font-medium">Trusted Home Projects Model</div>
              <ul className="mt-3 text-sm text-neutral-700 space-y-2">
                <li>• Streamlined structure — no excess layers</li>
                <li>• Direct scheduling with vetted local crews</li>
                <li>• Transparent pricing and financing options</li>
                <li>• Coordinated materials to prevent delays</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-8 items-end">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">High-impact services</h2>
            <p className="mt-3 text-neutral-600">Carefully selected for reliability, safety, and great before/after results.</p>
          </div>
          <div className="text-sm text-neutral-600 lg:text-right">Need something not listed? Ask in the quote form.</div>
        </div>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl bg-white border border-neutral-200 p-5 shadow-sm hover:shadow">
              <div className="font-medium">{s.title}</div>
              <div className="mt-2 text-sm text-neutral-600">{s.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="how" className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-semibold tracking-tight">How it works</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[{
              t: 'Tell us about your project',
              d: 'Share photos, measurements, and goals for your space.',
            }, {
              t: 'Get a clear, fair estimate',
              d: 'Transparent scope, timeline, and optional monthly payments.',
            }, {
              t: 'We deliver. You enjoy.',
              d: 'Coordinated materials, reliable crews, and clean finish.',
            }].map((step, i) => (
              <div key={i} className="rounded-2xl border border-neutral-200 p-5 bg-gradient-to-b from-neutral-50 to-white">
                <div className="h-9 w-9 rounded-xl bg-neutral-900 text-white flex items-center justify-center font-semibold">{i+1}</div>
                <div className="mt-3 font-medium">{step.t}</div>
                <div className="mt-1 text-sm text-neutral-600">{step.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">Pricing that respects your budget</h2>
            <p className="mt-3 text-neutral-600">
              We keep overhead low and pass the savings to you. Our coordination fee is built into the estimate—no hidden add-ons.
              Many projects qualify for monthly payments through partner financing.
            </p>
            <ul className="mt-4 space-y-2 text-neutral-700 text-sm">
              <li>• Fair, transparent estimates</li>
              <li>• Optional financing at checkout</li>
              <li>• Materials coordinated to reduce delays</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <div className="font-medium">Example ranges*</div>
            <ul className="mt-3 text-sm text-neutral-700 space-y-2">
              <li>• Room painting (12×12): $400–$800</li>
              <li>• LVP install (per room): $1,200–$2,400</li>
              <li>• Epoxy garage (2-car): $1,500–$3,000</li>
              <li>• Deck refresh (300 sq ft): $1,000–$2,000</li>
              <li>• Permanent lighting (front façade): $1,200–$2,500</li>
            </ul>
            <div className="mt-3 text-xs text-neutral-500">*Final pricing depends on site conditions and selections.</div>
          </div>
        </div>
      </section>

      <section id="quote" className="bg-white border-y border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-semibold tracking-tight">Get a fast, respectful estimate</h2>
          <p className="mt-2 text-neutral-600">We’ll review your details and follow up with any clarifying questions within one business day.</p>

          {submitted ? (
            <div className="mt-6 rounded-2xl border border-green-200 bg-green-50 p-6 text-green-800">
              Thanks! Your request has been received. We’ll be in touch shortly.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="md:col-span-1">
                <label className="text-sm">Full name</label>
                <input required className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-900" />
              </div>
              <div className="md:col-span-1">
                <label className="text-sm">Email</label>
                <input type="email" required className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-900" />
              </div>
              <div className="md:col-span-1">
                <label className="text-sm">Phone</label>
                <input type="tel" className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-900" />
              </div>
              <div className="md:col-span-1">
                <label className="text-sm">ZIP code</label>
                <input required className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-900" />
              </div>
              <div className="md:col-span-1">
                <label className="text-sm">Project type</label>
                <select className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-neutral-900">
                  {services.map((s) => (
                    <option key={s.title}>{s.title}</option>
                  ))}
                  <option>Other (describe below)</option>
                </select>
              </div>
              <div className="md:col-span-1">
                <label className="text-sm">Budget range</label>
                <select className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-neutral-900">
                  <option>$500–$1,000</option>
                  <option>$1,000–$2,500</option>
                  <option>$2,500–$5,000</option>
                  <option>$5,000–$10,000</option>
                  <option>$10,000+</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="text-sm">Project details / notes</label>
                <textarea rows={4} className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-900" placeholder="Share room sizes, photos link, timing, finishes you want..." />
              </div>
              <div className="md:col-span-2 flex items-start gap-2 text-sm">
                <input type="checkbox" required className="mt-1" />
                <span>
                  I agree to the <strong>Respectful Homeowner Pledge</strong>: collaborative communication, fair expectations, and tidy access to the workspace.
                </span>
              </div>
              <div className="md:col-span-2">
                <button type="submit" className="w-full md:w-auto rounded-xl px-5 py-3 bg-neutral-900 text-white text-sm hover:bg-neutral-800">Request estimate</button>
              </div>
            </form>
          )}
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-semibold tracking-tight">Frequently asked questions</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {[{
            q: 'Do you offer financing?',
            a: 'Yes—qualified projects can be split into monthly payments through partner financing providers. Approval and terms vary.',
          }, {
            q: 'Who performs the work?',
            a: 'Curated local professionals with proven craftsmanship and strong references. We prioritize reliability, communication, and clean job sites.',
          }, {
            q: 'How do you price jobs?',
            a: 'We provide clear scopes, fair estimates, and a built-in coordination fee. No high-pressure sales or surprise add-ons.',
          }, {
            q: 'What areas do you serve?',
            a: 'Cincinnati metro and nearby suburbs. Tell us your ZIP code in the quote form to confirm coverage.',
          }].map((f, i) => (
            <div key={i} className="rounded-2xl border border-neutral-200 p-5 bg-white">
              <div className="font-medium">{f.q}</div>
              <div className="mt-2 text-sm text-neutral-600">{f.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-white border-t border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-2 gap-6 items-center">
          <div>
            <div className="font-semibold">{brand}</div>
            <div className="text-sm text-neutral-600">Trusted local pros. Fair home projects.</div>
          </div>
          <div className="text-sm text-neutral-600 md:text-right">
            <a href="#quote" className="underline underline-offset-4">Get a quote</a> · <a className="underline underline-offset-4" href="#">Privacy</a> · <a className="underline underline-offset-4" href="#">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
