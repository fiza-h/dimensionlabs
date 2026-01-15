import React from 'react';
import Navbar from './components/Navbar';

const Home: React.FC = () => {
    return (
        <div className="container">
            <Navbar />
            {/* HEADER / HERO */}
            <header className="section">
                <h1 style={{ marginBottom: '1rem' }}>
                    Dimension Labs <br />
                    <span style={{ fontStyle: 'italic', opacity: 0.6 }}>Venture Growth Fellowship</span>
                </h1>
                <p className="text-subtle text-caps" style={{ marginBottom: '2rem' }}>
                    Spring 2026
                </p>

                <p className="text-mono" style={{ fontSize: '1.1rem' }}>
                    A spring ‘fellowship leading to a summer internship’ for undergraduate and graduate students who want to be close to founders, product, and deals.
                </p>

                <p>
                    50 shortlisted fellows will scout early-stage startups, identify their real technical and design pain points, and bring them into Dimension Labs' product studio so we can help them build before they raise.
                </p>

                <p>
                    Top performing fellow(s) get Summer 2026 internships/full-time roles either at Dimension Labs or openings at our portfolio startups, partner companies, and hackerhouses.
                </p>

                <p>
                    All the fellows, on successful graduation, will gain access to our global DM-Fellows Club, exclusive recruiting events/referrals, mentorship events with top PMs/VCs, and our network of portfolio startups.
                </p>

                <div style={{ marginTop: '2rem' }}>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLScBicV_sE4grM4DE9lPmb-st9jf8KXcZ0eGAv5hgaw8zvkNRQ/viewform" className="btn-primary">Apply to Spring 2026 Fellowship &rarr;</a>
                    <p className="text-subtle text-mono" style={{ marginTop: '1rem', fontSize: '0.9rem' }}>
                        Applications close: Jan 30th, 2026 — 11:59 PM PT
                    </p>
                </div>
            </header>

            {/* PROBLEM STATEMENT */}
            <section className="section">
                <h2>The internship ladder is broken</h2>
                <p className="text-serif" style={{ fontSize: '1.25rem', fontStyle: 'italic' }}>
                    To get a great internship, you’re supposed to already have one. We’re fixing that.
                </p>
                <p>
                    Forget case studies and endless coffee chats. You’ll learn the real job: finding builders, diagnosing bottlenecks, bridging founders with engineers, and staying in the room while all these decisions get made.
                </p>
                <p className="text-subtle">
                    This is exactly what PMs/VCs do for which they are valued and paid for… you’ll learn that in 16 weeks.
                </p>
            </section>

            {/* CURRICULUM / METHODOLOGY */}
            <section className="section">
                <h3 style={{ borderTop: '1px solid black', paddingTop: '1rem' }}>01. Find founders where they actually are</h3>
                <p>
                    An unstructured problem. Unleash your creativity to attract the high value signals early. For example, through Startup clubs, hackerhouses, Discords, GitHub, and X (whatever). You’ll source from places where people are building — not just talking.
                </p>

                <h3 style={{ borderTop: '1px solid black', paddingTop: '1rem' }}>02. Diagnose real problems (signal &gt; noise)</h3>
                <p>
                    You’ll learn to ask: What are you building? Where are you stuck? Helping them find what exactly can be easily outsourced? What must the founders themselves focus on more?
                </p>
                <p className="text-subtle">
                    This is the core PM/VC instinct: spotting what matters fast.
                </p>

                <h3 style={{ borderTop: '1px solid black', paddingTop: '1rem' }}>03. Turn uncertainty into structure & communicate with clarity</h3>
                <p>
                    Take “we need help/we’re not sure” and turn it into something buildable/outsourceable:
                </p>
                <ul className="text-mono">
                    <li>“Design an MVP dashboard with 3 core integrations”</li>
                    <li>“Build a RAG pipeline”</li>
                    <li>“Ship a landing page + waitlist + analytics loop”</li>
                </ul>

                <h3 style={{ borderTop: '1px solid black', paddingTop: '1rem' }}>04. Stay in the room</h3>
                <p>
                    You won’t just make intros. You’ll learn the art of selling, which is crucial for a PM, VC or any founder.
                    You’ll sit in on scoping calls, learn how decisions get made, and see how early-stage teams actually operate.
                    Your performance evaluation depends on how much you get involved & prove yourself valuable.
                </p>
            </section>

            {/* TRAINING DETAILS */}
            <section className="section">
                <h2>Training you’ll get</h2>
                <p className="text-subtle">(so you don’t feel lost)</p>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <h4>Technical + Product Jargon</h4>
                        <p className="text-subtle text-caps">Enough to sound credible</p>
                    </div>
                    <div>
                        <h4>Founder Discovery</h4>
                        <p className="text-subtle text-caps">How to run conversations</p>
                    </div>
                    <div>
                        <h4>Qualify Opportunities</h4>
                        <p className="text-subtle text-caps">And kill weak ones fast</p>
                    </div>
                    <div>
                        <h4>Scoping</h4>
                        <p className="text-subtle text-caps">Write clean handoffs</p>
                    </div>
                </div>
            </section>

            {/* WHAT YOU GET */}
            <section className="section">
                <h2>What you get</h2>

                <div style={{ marginBottom: '3rem' }}>
                    <h3>Skills that transfer everywhere</h3>
                    <ul className="text-mono">
                        <li>Source and qualify opportunities (not chase noise)</li>
                        <li>Scope work under real constraints</li>
                        <li>Bridge technical and non-technical conversations</li>
                        <li>Build founder relationships that last</li>
                    </ul>
                </div>

                <div style={{ marginBottom: '3rem' }}>
                    <h3>A real founder network</h3>
                    <p>Dozens of conversations with early-stage founders making real decisions — not simulations.</p>
                </div>

                <div>
                    <h3>Two paths to Summer 2026 internships</h3>

                    <div style={{ border: '1px solid #000', padding: '1.5rem', marginBottom: '1rem' }}>
                        <h4>Path 1: Startups we’re building with</h4>
                        <p>Top fellows get internship opportunities at our portfolio openings/partner companies (at teams actively hiring for product, ops, growth, or founder-right-hand roles).</p>
                    </div>

                    <div style={{ border: '1px solid #000', padding: '1.5rem', background: '#000', color: '#F5F4EF' }}>
                        <h4 style={{ color: '#F5F4EF' }}>Path 2: Dimension Labs</h4>
                        <p>The best performing fellow(s) receives a direct offer to work as an Analyst/Associate at Dimension Lab, or a guaranteed Summer 2026 internship (if they haven’t graduated yet).</p>
                    </div>
                </div>
            </section>

            {/* PROGRAM DETAILS */}
            <section className="section">
                <h2>Program details</h2>
                <div style={{ borderTop: '1px solid black' }}>
                    <div className="flex justify-between program-row" style={{ padding: '1rem 0', borderBottom: '1px solid #ddd' }}>
                        <span className="text-caps">Timeline</span>
                        <span className="text-mono">Early February to Late May 2026 (~16 weeks)</span>
                    </div>
                    <div className="flex justify-between program-row" style={{ padding: '1rem 0', borderBottom: '1px solid #ddd' }}>
                        <span className="text-caps">Time Commitment</span>
                        <span className="text-mono">5–8 hours/week (flexible)</span>
                    </div>
                    <div className="flex justify-between program-row" style={{ padding: '1rem 0', borderBottom: '1px solid #ddd' }}>
                        <span className="text-caps">Format</span>
                        <span className="text-mono">Remote-first (US time zones)</span>
                    </div>
                    <div className="flex justify-between program-row" style={{ padding: '1rem 0', borderBottom: '1px solid #ddd' }}>
                        <span className="text-caps">Eligibility</span>
                        <span className="text-mono">US-based students / plugged into US ecosystem</span>
                    </div>
                </div>
            </section>

            {/* WHO SHOULD APPLY */}
            <section className="section">
                <h2>Who should apply</h2>
                <p className="text-serif" style={{ fontSize: '1.2rem' }}>You don’t need to be technical. You do need to care.</p>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <h3>You’re a fit if you:</h3>
                        <ul className="text-mono">
                            <li>Love early-stage energy</li>
                            <li>Communicate clearly</li>
                            <li>Can reach out cold</li>
                            <li>Want to learn by doing</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Bonus points:</h3>
                        <ul className="text-mono">
                            <li>Active in startup clubs</li>
                            <li>Helped a friend build something</li>
                            <li>Built anything yourself (even if failed)</li>
                            <li>Considering product/venture</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* APPLICATION */}
            <section id="apply" className="section" style={{ textAlign: 'center' }}>
                <h2>How to apply</h2>

                <div style={{ border: '1px solid black', padding: '2rem', marginTop: '2rem' }}>


                    <div style={{ margin: '2rem 0', textAlign: 'left' }}>
                        <p className="text-caps">Deadlines</p>
                        <ul className="text-mono" style={{ listStyle: 'none', padding: 0 }}>
                            <li>Applications close: Jan 30th, 2026 — 11:59 PM PT</li>
                            <li>Final round: 15-minute Zoom conversation</li>
                        </ul>
                    </div>

                    <a href="https://docs.google.com/forms/d/e/1FAIpQLScBicV_sE4grM4DE9lPmb-st9jf8KXcZ0eGAv5hgaw8zvkNRQ/viewform" className="btn-primary" style={{ fontSize: '1.2rem', padding: '1rem 2rem' }}>Start Application [Apply]</a>
                </div>

                <p className="text-subtle text-caps" style={{ marginTop: '2rem' }}>
                    Questions? Contact <a href="mailto:team@dimensionlabs.org">team@dimensionlabs.org</a>
                </p>
            </section>

            {/* ABOUT ACUBE */}
            <footer className="section" style={{ borderTop: '4px solid black', paddingTop: '4rem' }}>
                <p className="text-caps">An Initiative by</p>
                <h2>ACube Tech</h2>

                <p>
                    At ACube Tech, our mission is simple but ambitious: to empower startups with exceptional offshore talent—builders and operators—who help founders scale faster, smarter, and more affordably.
                </p>

                <div style={{ margin: '2rem 0' }}>
                    <h3>Why ACube Tech Exists</h3>
                    <p className="text-subtle">
                        Born out of lived experience. Like many early-stage founders, we struggled to hire truly great talent that could build, think, and execute like an owner. ACube Tech bridges that gap.
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <h3>Our Impact</h3>
                        <p>30+ startups backed by Y Combinator and Techstars.</p>
                    </div>
                    <div>
                        <h3>Dimension Labs</h3>
                        <p>Explores, experiments, and builds—turning insight, technology, and talent into tangible products.</p>
                    </div>
                </div>

                <div style={{ marginTop: '4rem', padding: '2rem', background: '#e0ded6' }}>
                    <h3>Learn More About ACube Tech</h3>
                    <p>If you’re a founder looking to build a world-class team, or a builder seeking meaningful opportunities.</p>
                    <a href="https://acube-tech.com" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ marginTop: '1rem' }}>Visit ACube Tech</a>
                </div>
            </footer>
        </div>
    );
};

export default Home;
