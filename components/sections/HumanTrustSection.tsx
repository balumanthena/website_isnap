import Image from "next/image";

export function HumanTrustSection() {
  return (
    <section className="border-b border-slate-200/70 bg-[#f4f5f6] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-slate-600">The ISNAP advantage</p>
            <h2 className="mt-4 max-w-[12ch] font-heading text-4xl font-semibold leading-[1.03] tracking-tight text-slate-800 sm:text-5xl lg:text-[3.4rem]">
              Built for operators, not just tools
            </h2>
            <p className="mt-5 max-w-md text-[1.05rem] leading-relaxed text-slate-600">
              What sets ISNAP apart is not only the platform, but the people behind it. Our commerce specialists work
              as an extension of your team to execute with consistency across every channel.
            </p>
            <p className="mt-4 max-w-md text-base leading-relaxed text-slate-600">
              From onboarding to daily optimization, we help operators scale with confidence.
            </p>
          </div>

          <div className="relative lg:col-span-7">
            <div className="grid grid-cols-12 gap-4 sm:gap-5">
              <div className="col-span-5 flex flex-col gap-4 sm:gap-5">
                <article className="group relative overflow-hidden rounded-xl border border-slate-200/70 shadow-[0_10px_26px_-14px_rgba(15,23,42,0.28)]">
                  <div className="relative aspect-[5/4]">
                    <Image
                      src="/images/trust-team-1.jpg"
                      alt="Operator reviewing ecommerce tasks at desk"
                      fill
                      sizes="(min-width: 1024px) 340px, 45vw"
                      className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.05]"
                    />
                    <div className="absolute inset-0 bg-primary-700/10" />
                    <div className="pointer-events-none absolute bottom-0 right-0 h-16 w-16 rounded-tl-[1.25rem] bg-gradient-to-br from-primary-400/75 to-emerald-400/75" />
                  </div>
                </article>

                <article className="group relative overflow-hidden rounded-xl border border-slate-200/70 shadow-[0_10px_26px_-14px_rgba(15,23,42,0.28)]">
                  <div className="relative aspect-[5/4]">
                    <Image
                      src="/images/trust-team-3.jpg"
                      alt="Team collaborating in planning session"
                      fill
                      sizes="(min-width: 1024px) 340px, 45vw"
                      className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.05]"
                    />
                    <div className="absolute inset-0 bg-primary-800/22 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-primary-600/10" />
                  </div>
                </article>
              </div>

              <article className="group relative col-span-7 overflow-hidden rounded-xl border border-slate-200/70 shadow-[0_16px_36px_-16px_rgba(15,23,42,0.32)]">
                <div className="relative h-full min-h-[23.5rem]">
                  <Image
                    src="/images/trust-team-2.jpg"
                    alt="Commerce experts reviewing marketplace performance together"
                    fill
                    sizes="(min-width: 1024px) 560px, 70vw"
                    className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-primary-700/10" />
                  <div className="pointer-events-none absolute left-0 top-0 h-14 w-28 rounded-br-[1.5rem] bg-gradient-to-r from-primary-500/85 to-primary-600/70" />
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

