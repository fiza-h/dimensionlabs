
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ApplicationForm from './components/ApplicationForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById('application-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-[#98BDAB]/40">
      <Navbar onApplyClick={scrollToForm} />
      
      <main className="flex-grow">
        <Hero onApplyClick={scrollToForm} />

        {/* The Problem Section - Redesigned for High Impact */}
        <section className="py-32 md:py-48 bg-white relative overflow-hidden reveal">
          {/* Decorative background element */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-[#98BDAB]/5 rounded-full blur-3xl -ml-32"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-12 gap-16 items-start">
                {/* Left Side: Large Statement */}
                <div className="lg:col-span-6 space-y-10">
                  <div className="inline-flex items-center space-x-4">
                    <div className="w-8 h-px bg-[#98BDAB]"></div>
                    <span className="text-[#98BDAB] font-bold tracking-[0.4em] text-[10px] uppercase">Executive Summary</span>
                  </div>
                  
                  <h2 className="text-6xl md:text-8xl font-serif font-black text-[#2D4F40] leading-[0.9] tracking-tighter">
                    The internship <br />
                    <span className="text-[#98BDAB] italic">ladder is broken.</span>
                  </h2>
                  
                  <div className="relative pt-12">
                     <span className="absolute -top-4 -left-8 text-[12rem] font-serif text-[#2D4F40]/5 select-none leading-none">“</span>
                     <p className="text-3xl md:text-4xl font-garamond text-[#2D4F40] leading-tight italic relative z-10 max-w-xl">
                      To get a great internship, you’re supposed to already have one. We are here to dismantle that paradox.
                    </p>
                  </div>
                </div>

                {/* Right Side: The Manifesto Block */}
                <div className="lg:col-span-6 lg:pt-24">
                  <div className="relative">
                    {/* Floating Accent */}
                    <div className="hidden lg:block absolute -top-12 -right-12 w-32 h-32 border-t border-r border-[#98BDAB]/30"></div>
                    
                    <div className="bg-[#FAF9F6] p-10 md:p-14 border border-[#E8E4DF] relative shadow-sm">
                      <div className="absolute -top-3 -left-3 w-6 h-6 bg-[#98BDAB]"></div>
                      
                      <div className="space-y-8">
                        <p className="text-2xl font-serif font-bold text-[#2D4F40] leading-snug">
                          Forget case studies and <br />endless coffee chats.
                        </p>
                        <div className="w-12 h-px bg-[#2D4F40]/20"></div>
                        <p className="text-xl font-garamond text-[#5A7A6B] leading-relaxed">
                          You’ll learn the real job: finding builders, diagnosing bottlenecks, bridging founders with engineers, and staying in the room while high-stakes decisions get made.
                        </p>
                        
                        <div className="pt-6 grid grid-cols-2 gap-4">
                          <div className="text-[10px] font-bold text-[#2D4F40] uppercase tracking-widest flex items-center">
                            <span className="w-1.5 h-1.5 bg-[#98BDAB] rounded-full mr-2"></span> No Theory
                          </div>
                          <div className="text-[10px] font-bold text-[#2D4F40] uppercase tracking-widest flex items-center">
                            <span className="w-1.5 h-1.5 bg-[#98BDAB] rounded-full mr-2"></span> Only Output
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Curriculum - Redesigned Card-based Layout */}
        <section className="py-32 bg-[#F9F6F1] reveal border-y border-[#E8E4DF] relative overflow-hidden">
          {/* Background Text Accent */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20rem] font-serif font-black text-[#2D4F40]/[0.02] pointer-events-none select-none">
            01-04
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div className="max-w-xl">
                <div className="inline-block bg-[#98BDAB] text-white px-3 py-1 text-[9px] font-black uppercase tracking-[0.3em] mb-4">
                  Protocol 2026
                </div>
                <h2 className="text-5xl font-serif font-black text-[#2D4F40] tracking-tight">The Core Curriculum</h2>
                <p className="text-[#5A7A6B] mt-4 font-garamond text-xl italic leading-relaxed">
                  A multi-layered approach to venture building, research, and technical scouting.
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  id: "01",
                  title: "Founder Discovery",
                  desc: "Unleash creativity to attract high-value signals early. Source from hackerhouses, Discords, GitHub, and X.",
                  tags: ["Sourcing", "Signals"]
                },
                {
                  id: "02",
                  title: "Technical Diagnosis",
                  desc: "Learn to ask: Where are you stuck? Spot technical debt fast and determine what should be outsourced.",
                  tags: ["Audit", "Resourcing"]
                },
                {
                  id: "03",
                  title: "Structural Scoping",
                  desc: "Turn vague needs into actionable builds: MVP dashboards, RAG pipelines, or conversion loops.",
                  tags: ["Systems", "Architecture"]
                },
                {
                  id: "04",
                  title: "Strategic Presence",
                  desc: "Learn the art of selling. Sit in on scoping calls, see how early-stage teams operate, and prove your value.",
                  tags: ["GTM", "Closing"]
                }
              ].map((step) => (
                <div 
                  key={step.id} 
                  className="group bg-white p-10 border border-[#E8E4DF] hover:border-[#98BDAB] transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(152,189,171,0.2)] relative flex flex-col justify-between"
                >
                  <div>
                    <div className="flex justify-between items-start mb-8">
                      <div className="text-4xl font-serif font-black text-[#2D4F40]/10 group-hover:text-[#98BDAB]/20 transition-colors">
                        {step.id}
                      </div>
                      <div className="w-1.5 h-1.5 bg-[#98BDAB] rounded-full scale-0 group-hover:scale-100 transition-transform"></div>
                    </div>
                    
                    <h3 className="text-xl font-serif font-bold text-[#2D4F40] mb-5 tracking-tight group-hover:text-[#98BDAB] transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-[#5A7A6B] text-sm leading-relaxed font-garamond mb-8">
                      {step.desc}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-6 border-t border-[#E8E4DF]/50">
                    {step.tags.map(tag => (
                      <span key={tag} className="text-[9px] font-bold uppercase tracking-widest text-[#2D4F40]/40 group-hover:text-[#2D4F40]/70 transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Professional Outcomes - Split Comparison */}
        <section className="py-32 bg-white reveal">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-0 border border-[#E8E4DF] overflow-hidden rounded-sm shadow-xl">
              <div className="p-12 md:p-20 bg-[#FAF9F6] border-r border-[#E8E4DF]">
                <span className="text-[#98BDAB] font-bold tracking-[0.3em] text-[10px] uppercase mb-8 block">Option A</span>
                <h3 className="text-3xl font-serif font-black text-[#2D4F40] mb-8 italic">The Venture Track</h3>
                <p className="text-lg font-garamond text-[#5A7A6B] leading-relaxed mb-10">
                  Top performing fellows receive direct offers to join Dimension Labs' internal core team as Analysts or Associates, managing our next generation of studio projects.
                </p>
                <ul className="space-y-4 font-garamond text-[#2D4F40] italic">
                  <li>— Direct equity participation</li>
                  <li>— High-frequency deal flow</li>
                  <li>— Portfolio board observer roles</li>
                </ul>
              </div>
              <div className="p-12 md:p-20 bg-[#2D4F40] text-[#F9F6F1]">
                <span className="text-[#98BDAB] font-bold tracking-[0.3em] text-[10px] uppercase mb-8 block">Option B</span>
                <h3 className="text-3xl font-serif font-black text-white mb-8 italic">The Portfolio Track</h3>
                <p className="text-lg font-garamond opacity-80 leading-relaxed mb-10">
                  Priority placements at our high-growth partner startups and portfolio companies for roles across Product, Growth, and Engineering Ops.
                </p>
                <ul className="space-y-4 font-garamond italic">
                  <li>— Accelerated recruitment cycles</li>
                  <li>— Senior mentor pairings</li>
                  <li>— Direct line to Series A Founders</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Eligibility - Checklist Style */}
        <section className="py-32 bg-[#F9F6F1] reveal">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold text-[#2D4F40] mb-4">Are You Eligible?</h2>
              <div className="w-12 h-px bg-[#98BDAB] mx-auto"></div>
            </div>
            
            <div className="bg-white p-12 md:p-16 border border-[#2D4F40]/10 rounded-sm relative shadow-sm">
               <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#98BDAB] text-white px-6 py-2 text-[10px] font-black uppercase tracking-[0.4em]">Candidate Profile</div>
               
               <div className="grid md:grid-cols-2 gap-16 mt-4">
                 <div className="space-y-8">
                   <h4 className="text-[#2D4F40] font-bold uppercase tracking-[0.3em] text-[10px] border-b border-[#2D4F40]/10 pb-2">Traits We Seek</h4>
                   <div className="space-y-6">
                     {[
                       "Extreme intellectual curiosity",
                       "Clarity in complex communication",
                       "High resilience to 'No'",
                       "Pragmatic builder mindset"
                     ].map((trait, idx) => (
                       <div key={idx} className="flex items-center space-x-4">
                         <div className="w-4 h-4 rounded-full border border-[#98BDAB] flex items-center justify-center">
                           <div className="w-1.5 h-1.5 bg-[#98BDAB] rounded-full"></div>
                         </div>
                         <span className="font-garamond text-lg italic text-[#5A7A6B]">{trait}</span>
                       </div>
                     ))}
                   </div>
                 </div>
                 <div className="space-y-8">
                   <h4 className="text-[#2D4F40] font-bold uppercase tracking-[0.3em] text-[10px] border-b border-[#2D4F40]/10 pb-2">Experience</h4>
                   <div className="space-y-6">
                     {[
                       "Active in hacker communities",
                       "History of shipping side-projects",
                       "Venture ecosystem alignment",
                       "Currently enrolled student status"
                     ].map((trait, idx) => (
                       <div key={idx} className="flex items-center space-x-4">
                         <div className="w-4 h-4 rounded-full border border-[#98BDAB] flex items-center justify-center">
                           <div className="w-1.5 h-1.5 bg-[#98BDAB] rounded-full"></div>
                         </div>
                         <span className="font-garamond text-lg italic text-[#5A7A6B]">{trait}</span>
                       </div>
                     ))}
                   </div>
                 </div>
               </div>
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section id="application-form" className="py-32 bg-white reveal">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="text-center mb-16">
              <span className="text-[#98BDAB] font-bold tracking-[0.3em] text-[10px] uppercase mb-4 block">Form DF-01</span>
              <h2 className="text-4xl font-serif font-black text-[#2D4F40]">Admissions Portal</h2>
              <p className="text-[#5A7A6B] mt-4 font-garamond text-lg italic">The Spring Cohort intake is strictly limited.</p>
            </div>
            
            <div className="bg-[#FAF9F6] p-8 md:p-16 border border-[#E8E4DF] rounded-sm shadow-inner">
              <ApplicationForm />
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default App;
