import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Landing.css";

const featureImages = [
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80", // Personalized
  "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=800&q=80", // Healthy & Tasty (blueberries)
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80", // AI-Powered
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80", // Health & Safety
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"  // Easy to Use
];

const whyChoose = [
  { icon: "https://img.icons8.com/ios-filled/50/0a2342/artificial-intelligence.png", title: "AI-Powered Recommendations", desc: "Advanced AI analyzes your health and medication for safe meal suggestions." },
  { icon: "https://img.icons8.com/ios-filled/50/0a2342/pill.png", title: "Personalized to Your Medication", desc: "Get food advice tailored to your prescriptions and health profile." },
  { icon: "https://img.icons8.com/ios-filled/50/0a2342/decision.png", title: "Eat or Avoid Guidance", desc: "Clear recommendations on what to eat and what to avoid." },
  { icon: "https://img.icons8.com/ios-filled/50/0a2342/test-tube.png", title: "Science-Backed Nutrition", desc: "All suggestions are based on the latest nutrition science." }
];

const faqs = [
  { q: "How does Medimeal recommend food?", a: "Our AI analyzes your medication, health conditions, and preferences to suggest what you should eat or avoid." },
  { q: "Is Medimeal only for people on medication?", a: "No! Anyone can use Medimeal, but it is especially helpful for those with specific health or medication needs." },
  { q: "Can Medimeal help me avoid food-drug interactions?", a: "Yes. Our platform is designed to flag foods that may interact with your medication and suggest safer alternatives." },
  { q: "Are the recommendations personalized?", a: "Absolutely. Every suggestion is tailored to your unique health profile and updated as your details change." }
];

const Landing = ({ showAbout, setShowAbout }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [openFaq, setOpenFaq] = useState(null);
  const aboutRef = useRef(null);

  useEffect(() => {
    if (location.state?.showAbout) {
      setShowAbout(true);
    }
  }, [location.state, setShowAbout]);

  useEffect(() => {
    if (showAbout && aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [showAbout]);

  return (
    <div className="landing-container" style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden', fontSize: '1.13rem' }}>
      {/* Global background image */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        backgroundImage: 'url(https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.22,
        pointerEvents: 'none',
      }} />
      {/* HERO SECTION */}
      <header className="landing-header fade-in" style={{ position: 'relative', background: 'none', padding: 0 }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          backgroundImage: 'url(https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.35,
          filter: 'brightness(0.7) blur(0.5px)'
        }} />
        <div style={{
          position: 'relative',
          zIndex: 1,
          padding: '3.5rem 0 2.5rem 0',
          background: 'linear-gradient(90deg, #0a2342 60%, #274472 100%)',
          color: '#fff',
          textAlign: 'center',
          borderBottomLeftRadius: 32,
          borderBottomRightRadius: 32,
          boxShadow: '0 2px 12px rgba(10,35,66,0.10)'
        }}>
          <h1 style={{ fontWeight: 700, fontSize: '3.2rem', letterSpacing: '2px', marginBottom: 0, color: '#fff', textShadow: '0 2px 12px #0a234299' }}>Medimeal</h1>
          <p style={{ fontSize: '1.35rem', fontWeight: 400, marginTop: '0.7rem', color: '#e0e7ef', textShadow: '0 1px 6px #0a234288' }}>
            Your Health, Your Meal – Powered by AI
          </p>
          <div style={{ marginTop: '1.7rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span style={{ fontSize: '1.18rem', color: '#c7d2e6', maxWidth: 600, textShadow: '0 1px 6px #0a234288' }}>
              Discover a new way to eat healthy, delicious meals tailored to your unique health needs. Let Medimeal's AI guide you to a happier, healthier you!
            </span>
            <button className="landing-cta" style={{ marginTop: '2.2rem', padding: '1rem 2.5rem', fontSize: '1.15rem', borderRadius: 30, background: 'linear-gradient(90deg, #0a2342 60%, #274472 100%)', color: '#fff', fontWeight: 600, border: 'none', boxShadow: '0 2px 8px rgba(10,35,66,0.10)' }} onClick={() => navigate('/signup')}>Get Started</button>
          </div>
        </div>
      </header>
      <section className="landing-hero slide-up" style={{ background: 'linear-gradient(90deg, #fff 60%, #e0e7ef 100%)' }}>
        <div className="hero-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
          <div className="hero-text">
            <h2 style={{ fontSize: '2.3rem', color: '#0a2342', fontWeight: 600, marginBottom: '1.2rem' }}>Personalized Food Recommendations for Your Health</h2>
            <p style={{ fontSize: '1.15rem', color: '#334155', marginBottom: '2.2rem', maxWidth: 600, marginLeft: 'auto', marginRight: 'auto' }}>Medimeal uses advanced AI to recommend meal plans tailored to your medication, age, and health conditions. Eat smarter, feel better, and take control of your wellness journey.</p>
            <button className="landing-cta" style={{ padding: '1rem 2.5rem', fontSize: '1.15rem', borderRadius: 30, background: 'linear-gradient(90deg, #0a2342 60%, #274472 100%)', color: '#fff', fontWeight: 600, border: 'none', boxShadow: '0 2px 8px rgba(10,35,66,0.10)', marginTop: 10 }} onClick={() => navigate('/signup')}>Get Started</button>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="landing-features fade-in" style={{ marginTop: 40 }}>
        {[
          { img: featureImages[0], title: 'Personalized', desc: 'Get meal plans that fit your unique health profile, including medication, age, and conditions.' },
          { img: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=800&q=80', title: 'Healthy & Tasty', desc: 'Enjoy delicious, nutritious meals that are as good for your taste buds as they are for your health.' },
          { img: featureImages[2], title: 'AI-Powered', desc: 'Recommendations generated by advanced AI for safe, science-backed suggestions.' },
          { img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80', title: 'Health & Safety', desc: 'Designed to support your medication and health needs, prioritizing your well-being.' },
          { img: featureImages[4], title: 'Easy to Use', desc: 'Simple login and signup, intuitive interface, and instant access to your meal plans.' }
        ].map((f, i) => (
          <div key={f.title} className="feature-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', background: '#fff', borderRadius: 18, boxShadow: '0 2px 12px rgba(52,211,153,0.10)', padding: '2.2rem 1.5rem 1.7rem 1.5rem', minWidth: 260, maxWidth: 340, textAlign: 'center', borderTop: '4px solid var(--green-main)', margin: '0 0.7rem 2rem 0.7rem' }}>
            <img src={f.img} alt={f.title} className="feature-img" />
            <h3 style={{ color: 'var(--green-main)', marginBottom: 8, marginTop: 10 }}>{f.title}</h3>
            <p style={{ color: '#334155', fontSize: '1.08rem' }}>{f.desc}</p>
          </div>
        ))}
      </section>

      {/* HOW IT WORKS SECTION */}
      <section className="landing-howitworks slide-up" style={{ marginTop: 30, position: 'relative', overflow: 'hidden' }}>
        {/* Background image with low opacity */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          backgroundImage: 'url(https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=1200&q=80)',
          backgroundSize: '100% 100%',
          backgroundPosition: 'center',
          opacity: 0.13,
          pointerEvents: 'none',
        }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ color: 'var(--green-dark)', marginBottom: 24 }}>How It Works</h2>
          <div className="howitworks-steps" style={{ gap: 32 }}>
            {[
              { step: 1, title: 'Sign Up & Enter Details', desc: 'Create your account and provide your age, medication, and health conditions.' },
              { step: 2, title: 'Get Personalized Meal Plans', desc: 'Receive AI-powered food recommendations tailored just for you.' },
              { step: 3, title: 'Eat Healthy, Stay Happy', desc: 'Follow your meal plan and enjoy a healthier lifestyle with Medimeal.' }
            ].map((s, i) => (
              <div key={s.step} className="howitworks-card" style={{ background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px rgba(34,197,94,0.08)', padding: '1.5rem', minWidth: 200, maxWidth: 300, flex: '1 1 200px', marginBottom: 16, borderTop: '4px solid var(--green-emerald)', position: 'relative' }}>
                <span className="howitworks-stepnum" style={{ background: 'var(--green-lime)', color: 'var(--green-forest)', border: '2px solid var(--green-main)', marginBottom: 8 }}>{s.step}</span>
                <h4 style={{ margin: '0.7rem 0 0.3rem 0', color: 'var(--green-main)', fontWeight: 600 }}>{s.title}</h4>
                <p style={{ color: '#334155', fontSize: '1.05rem' }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="landing-testimonials fade-in" style={{ marginTop: 30 }}>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ color: 'var(--green-dark)', marginBottom: 24 }}>What Our Users Say</h2>
          <div className="testimonials-list" style={{ gap: 32 }}>
            {[
              { quote: '"Medimeal made it so easy to eat right for my health! The AI suggestions are spot on."', name: 'Priya, 34' },
              { quote: '"I love how it considers my medication and conditions. Highly recommended!"', name: 'Rahul, 52' },
              { quote: '"Simple, fast, and effective. My energy levels have improved!"', name: 'Anjali, 28' }
            ].map((t, i) => (
              <div key={t.name} className="testimonial-card" style={{ background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px rgba(34,197,94,0.08)', padding: '1.5rem', minWidth: 220, maxWidth: 300, flex: '1 1 220px', marginBottom: 16, fontStyle: 'italic', color: '#334155', borderLeft: '4px solid var(--green-main)' }}>
                <p style={{ marginBottom: 8 }}>{t.quote}</p>
                <span style={{ display: 'block', marginTop: 8, fontSize: '0.95rem', color: 'var(--green-main)', fontStyle: 'normal' }}>{t.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE MEDIMEAL SECTION */}
      <section className="why-medimeal-section" style={{ margin: '3rem 0 2rem 0', padding: '2.5rem 0', borderRadius: 24, maxWidth: 1100, marginLeft: 'auto', marginRight: 'auto' }}>
        <h2 style={{ textAlign: 'center', color: '#0a2342', marginBottom: 32 }}>Why Choose Medimeal?</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2.5rem' }}>
          {whyChoose.map((item, i) => (
            <div key={item.title} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: 220, minWidth: 180, background: '#f8fafc', borderRadius: 16, boxShadow: '0 2px 12px #0a234211', padding: '1.5rem 1.2rem', marginBottom: 16 }}>
              <img src={item.icon} alt={item.title} style={{ width: 48, height: 48, marginBottom: 12 }} />
              <h4 style={{ color: '#0a2342', fontWeight: 600, marginBottom: 8 }}>{item.title}</h4>
              <p style={{ color: '#334155', fontSize: '1.05rem' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="faq-section" style={{ margin: '3rem 0 2rem 0', padding: '2.5rem 0', borderRadius: 24, maxWidth: 900, marginLeft: 'auto', marginRight: 'auto' }}>
        <h2 style={{ textAlign: 'center', color: '#0a2342', marginBottom: 32 }}>Frequently Asked Questions</h2>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          {faqs.map((faq, i) => (
            <div key={faq.q} style={{ marginBottom: 18, borderRadius: 12, background: '#f1f5f9', boxShadow: '0 2px 8px #0a234211', overflow: 'hidden' }}>
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                style={{ width: '100%', textAlign: 'left', background: 'none', border: 'none', outline: 'none', padding: '1.1rem 1.2rem', fontSize: '1.13rem', color: '#0a2342', fontWeight: 600, cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
              >
                {faq.q}
                <span style={{ fontSize: '1.3rem', marginLeft: 12 }}>{openFaq === i ? '−' : '+'}</span>
              </button>
              {openFaq === i && (
                <div style={{ padding: '0.9rem 1.2rem 1.2rem 1.2rem', color: '#334155', fontSize: '1.05rem', background: '#fff', borderTop: '1px solid #e2e8f0' }}>
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {showAbout && (
        <section ref={aboutRef} className="about-main fade-in" style={{ maxWidth: 900, width: '100%', background: 'rgba(255,255,255,0.92)', borderRadius: 18, boxShadow: '0 2px 12px rgba(52,211,153,0.10)', padding: '2rem', margin: '2rem auto', display: 'flex', flexDirection: 'column', alignItems: 'center', animation: 'fade-in 0.7s' }}>
          <h2 style={{ color: '#0a2342', textAlign: 'center' }}>About Medimeal</h2>
          <p style={{ fontSize: '1.1rem', color: '#0a2342', textAlign: 'center' }}>
            <b>Medimeal</b> is your AI-powered health companion, providing personalized food recommendations based on your age, medication, disease, and gender. Our mission is to help you eat smarter, feel better, and take control of your wellness journey with the help of advanced AI technology.
          </p>
          <ul style={{ color: '#0a2342', fontSize: '1.05rem', marginTop: '1.5rem', marginBottom: '2rem' }}>
            <li>Personalized meal plans tailored to your health profile</li>
            <li>AI-driven recommendations for safe and healthy eating</li>
            <li>Easy-to-use interface and instant access to your meal plans</li>
            <li>Supports a variety of health conditions and medications</li>
          </ul>
        </section>
      )}

      {/* FINAL CTA SECTION */}
      <section className="landing-finalcta slide-up" style={{ marginTop: 40 }}>
        <h2 style={{ color: 'var(--green-dark)', marginBottom: 18 }}>Ready to get your personalized meal plan?</h2>
        <button
          style={{ padding: '1rem 2.5rem', fontSize: '1.15rem', borderRadius: 30, background: 'linear-gradient(90deg, #0a2342 60%, #274472 100%)', color: '#fff', fontWeight: 600, border: 'none', boxShadow: '0 2px 8px rgba(10,35,66,0.10)' }}
          onClick={() => {
            const user = JSON.parse(localStorage.getItem('medimeal_user'));
            if (user && user.email) {
              navigate('/recommend');
            } else {
              navigate('/login');
            }
          }}
        >
          Get Started
        </button>
      </section>

      {/* PRICING SECTION */}
      <section className="landing-pricing fade-in" style={{ marginTop: 40 }}>
        <h2 style={{ textAlign: 'center', color: '#0a2342', marginBottom: '1.5rem' }}>Choose Your Plan</h2>
        <div className="pricing-cards" style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <div className="pricing-card normal" style={{ background: '#fff', border: '2px solid #0a2342', borderRadius: 18, color: '#0a2342', boxShadow: '0 2px 12px #0a234211', transition: 'transform 0.2s, box-shadow 0.2s', minWidth: 260, maxWidth: 340, flex: '1 1 260px', textAlign: 'center' }}
            onMouseOver={e => { e.currentTarget.style.transform = 'scale(1.04)'; e.currentTarget.style.boxShadow = '0 8px 32px #0a234233'; }}
            onMouseOut={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 2px 12px #0a234211'; }}>
            <h3 style={{ color: '#0a2342' }}>Normal</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: '1.2rem 0' }}>
              <li style={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}><span style={{ color: '#0a2342', fontSize: 18, marginRight: 8 }}>✔</span>Recommendations</li>
              <li style={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}><span style={{ color: '#0a2342', fontSize: 18, marginRight: 8 }}>✔</span>Rule-based engine</li>
              <li style={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}><span style={{ color: '#0a2342', fontSize: 18, marginRight: 8 }}>✔</span>Basic AI Q&A</li>
              <li style={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}><span style={{ color: '#0a2342', fontSize: 18, marginRight: 8 }}>✔</span>Access to meal timeline</li>
              <li style={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}><span style={{ color: '#0a2342', fontSize: 18, marginRight: 8 }}>✔</span>Simple signup and login</li>
              <li style={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}><span style={{ color: '#0a2342', fontSize: 18, marginRight: 8 }}>✔</span>Instant access to meal plans</li>
            </ul>
            <div className="pricing-price" style={{ color: '#0a2342', fontWeight: 700, fontSize: '1.2rem', marginBottom: 12 }}>Free</div>
            <button className="pricing-btn" style={{ background: 'linear-gradient(90deg, #0a2342 60%, #274472 100%)', color: '#fff', borderRadius: 25, fontWeight: 600, fontSize: '1.1rem', padding: '0.7rem 2.2rem', marginTop: 8, border: 'none', cursor: 'pointer', transition: 'background 0.2s, transform 0.2s' }} onClick={() => navigate('/signup')}>Start Free</button>
          </div>
          <div className="pricing-card premium best-value" style={{ background: '#fff', border: '2px solid #274472', borderRadius: 18, color: '#274472', boxShadow: '0 2px 12px #27447211', transition: 'transform 0.2s, box-shadow 0.2s', minWidth: 260, maxWidth: 340, flex: '1 1 260px', textAlign: 'center' }}
            onMouseOver={e => { e.currentTarget.style.transform = 'scale(1.04)'; e.currentTarget.style.boxShadow = '0 8px 32px #27447233'; }}
            onMouseOut={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 2px 12px #27447211'; }}>
            <h3 style={{ color: '#274472' }}>Premium</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: '1.2rem 0' }}>
              <li style={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}><span style={{ color: '#274472', fontSize: 18, marginRight: 8 }}>✔</span>All Normal features</li>
              <li style={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}><span style={{ color: '#274472', fontSize: 18, marginRight: 8 }}>✔</span>Advanced AI assistant</li>
              <li style={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}><span style={{ color: '#274472', fontSize: 18, marginRight: 8 }}>✔</span>Priority support</li>
              <li style={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}><span style={{ color: '#274472', fontSize: 18, marginRight: 8 }}>✔</span>Alternative food suggestions</li>
              <li style={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}><span style={{ color: '#274472', fontSize: 18, marginRight: 8 }}>✔</span>Upload medical reports</li>
              <li style={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}><span style={{ color: '#274472', fontSize: 18, marginRight: 8 }}>✔</span>Unlimited recommendations</li>
              <li style={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}><span style={{ color: '#274472', fontSize: 18, marginRight: 8 }}>✔</span>Personal dietitian Q&A</li>
              <li style={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}><span style={{ color: '#274472', fontSize: 18, marginRight: 8 }}>✔</span>Early access to new features</li>
            </ul>
            <div className="pricing-price" style={{ color: '#274472', fontWeight: 700, fontSize: '1.2rem', marginBottom: 12 }}>₹199/mo <span style={{ color: '#64748b', fontSize: '0.95rem' }}>(or $2.49/mo)</span></div>
            <button className="pricing-btn premium" style={{ background: 'linear-gradient(90deg, #274472 60%, #0a2342 100%)', color: '#fff', borderRadius: 25, fontWeight: 600, fontSize: '1.1rem', padding: '0.7rem 2.2rem', marginTop: 8, border: 'none', cursor: 'pointer', transition: 'background 0.2s, transform 0.2s' }}>Go Premium</button>
          </div>
        </div>
      </section>
      <footer className="landing-footer">
        &copy; {new Date().getFullYear()} Medimeal. All rights reserved.
      </footer>
    </div>
  );
};

export default Landing;