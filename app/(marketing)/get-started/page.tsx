import { GetStartedForm } from "@/components/marketing/GetStartedForm";
import { LogoMark } from "@/components/LogoMark";

export default function GetStartedPage() {
  return (
    <main className="min-h-screen bg-white relative overflow-hidden flex flex-col items-center pt-32 pb-12">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 grid-subtle opacity-[0.5] pointer-events-none" />
      
      <div className="max-container relative z-10 w-full flex flex-col items-center">
        <div className="text-center mb-16 max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-enterprise-border bg-enterprise-bg px-4 py-1.5 mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-enterprise-green" />
            <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-enterprise-text">Enterprise Onboarding</p>
          </div>
          <h1 className="section-heading mb-6">
            Activate your brand&apos;s <br/><span className="text-enterprise-green">growth protocol.</span>
          </h1>
          <p className="text-xl text-enterprise-text-muted leading-relaxed">
            Complete the institutional onboarding request to initiate your marketplace scaling architecture.
          </p>
        </div>

        <div className="w-full max-w-[560px] bg-white border border-enterprise-border rounded-[40px] p-8 md:p-12 shadow-premium relative">
           <div className="absolute top-0 left-0 right-0 h-1 bg-enterprise-green rounded-t-[40px]" />
           <GetStartedForm />
        </div>
        
        <div className="mt-12 text-center">
           <p className="text-[10px] font-bold text-enterprise-text-muted uppercase tracking-[0.3em]">Institutional Grade Security • 256-bit Encryption</p>
        </div>
      </div>
    </main>
  );
}
