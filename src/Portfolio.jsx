import React, { useEffect, useRef, useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-scroll';
// import imgg from './images/me.png';

const ParticleCanvas = () => {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animId;
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    resize();
    window.addEventListener('resize', resize);
    const particles = Array.from({ length: 80 }, () => ({
      x: Math.random() * canvas.width, y: Math.random() * canvas.height,
      r: Math.random() * 2 + 0.4,
      dx: (Math.random() - 0.5) * 0.6, dy: (Math.random() - 0.5) * 0.6,
      hue: Math.random() > 0.5 ? 290 : 30, alpha: Math.random() * 0.6 + 0.2,
    }));
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue},100%,70%,${p.alpha})`;
        ctx.shadowBlur = 8; ctx.shadowColor = `hsla(${p.hue},100%,70%,0.8)`;
        ctx.fill();
        p.x += p.dx; p.y += p.dy;
        if (p.x < 0) p.x = canvas.width; if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height; if (p.y > canvas.height) p.y = 0;
      });
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize); };
  }, []);
  return <canvas ref={canvasRef} style={{ position:'absolute', inset:0, width:'100%', height:'100%', pointerEvents:'none', zIndex:0 }} />;
};

const useTypewriter = (words, speed = 80, pause = 1600) => {
  const [display, setDisplay] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    const current = words[wordIdx];
    let timeout;
    if (!deleting && charIdx <= current.length) {
      timeout = setTimeout(() => setCharIdx(c => c + 1), speed);
      setDisplay(current.slice(0, charIdx));
    } else if (!deleting && charIdx > current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx >= 0) {
      timeout = setTimeout(() => setCharIdx(c => c - 1), speed / 2);
      setDisplay(current.slice(0, charIdx));
    } else {
      setDeleting(false);
      setWordIdx(i => (i + 1) % words.length);
    }
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);
  return display;
};

const GlitchText = ({ text, className }) => (
  <span className={`glitch-wrap ${className}`} data-text={text}>{text}</span>
);

const Portfolio = () => {
  const roles = ['Fullstack Developer', 'UI Craftsman', 'React Enthusiast', 'MERN Stack Dev'];
  const typed = useTypewriter(roles);
  const blobRef = useRef(null);
  const blob2Ref = useRef(null);
  useEffect(() => {
    const move = e => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      if (blobRef.current) blobRef.current.style.transform = `translate(${x * 40 - 20}px, ${y * 40 - 20}px)`;
      if (blob2Ref.current) blob2Ref.current.style.transform = `translate(${-x * 30 + 15}px, ${-y * 30 + 15}px)`;
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&family=DM+Sans:wght@400;500&display=swap');

        #portfolio * { box-sizing: border-box; }

        .glitch-wrap { position:relative; display:inline-block; }
        .glitch-wrap::before, .glitch-wrap::after { content:attr(data-text); position:absolute; top:0; left:0; width:100%; height:100%; background:transparent; }
        .glitch-wrap::before { color:#f97316; clip-path:polygon(0 0,100% 0,100% 35%,0 35%); animation:glitch-top 3s infinite linear; }
        .glitch-wrap::after  { color:#e879f9; clip-path:polygon(0 65%,100% 65%,100% 100%,0 100%); animation:glitch-bot 3s infinite linear; }
        @keyframes glitch-top { 0%,90%{transform:translate(0);opacity:0} 91%{transform:translate(-3px,-2px);opacity:.9} 93%{transform:translate(3px,1px);opacity:.9} 95%{transform:translate(-2px,0);opacity:.9} 100%{transform:translate(0);opacity:0} }
        @keyframes glitch-bot { 0%,90%{transform:translate(0);opacity:0} 92%{transform:translate(3px,2px);opacity:.9} 94%{transform:translate(-3px,-1px);opacity:.9} 96%{transform:translate(2px,0);opacity:.9} 100%{transform:translate(0);opacity:0} }

        @keyframes float { 0%,100%{transform:translateY(0) rotate(-1deg)} 50%{transform:translateY(-18px) rotate(1deg)} }
        .float-img { animation:float 4.5s ease-in-out infinite; }
        @keyframes spin-slow { to{transform:rotate(360deg)} }
        @keyframes spin-rev  { to{transform:rotate(-360deg)} }
        .ring1 { animation:spin-slow 8s linear infinite; }
        .ring2 { animation:spin-rev 12s linear infinite; }

        @keyframes grad-shift { 0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%} }
        .grad-text { background:linear-gradient(270deg,#f97316,#e879f9,#facc15,#38bdf8,#e879f9,#f97316); background-size:400% 400%; -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; animation:grad-shift 5s ease infinite; }

        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        .cursor { animation:blink 0.75s step-end infinite; }
        @keyframes blob-pulse { 0%,100%{border-radius:60% 40% 30% 70%/60% 30% 70% 40%} 50%{border-radius:30% 60% 70% 40%/50% 60% 30% 60%} }
        .blob { animation:blob-pulse 7s ease-in-out infinite; }

        @keyframes slide-up { from{opacity:0;transform:translateY(40px)} to{opacity:1;transform:translateY(0)} }
        .reveal-1{animation:slide-up .7s .1s both} .reveal-2{animation:slide-up .7s .3s both}
        .reveal-3{animation:slide-up .7s .5s both} .reveal-4{animation:slide-up .7s .7s both}
        .reveal-5{animation:slide-up .7s .9s both}

        .neon-btn { position:relative; overflow:hidden; }
        .neon-btn::before { content:''; position:absolute; inset:0; background:linear-gradient(90deg,#e879f9,#f97316,#facc15,#e879f9); background-size:300%; animation:grad-shift 3s linear infinite; z-index:-1; border-radius:inherit; }
        .neon-btn-outline { position:relative; overflow:hidden; transition:color .3s; }
        .neon-btn-outline::after { content:''; position:absolute; inset:-1px; background:linear-gradient(90deg,#e879f9,#f97316,#e879f9); background-size:300%; border-radius:inherit; z-index:-1; animation:grad-shift 3s linear infinite; }

        .scanlines::after { content:''; position:absolute; inset:0; background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.07) 2px,rgba(0,0,0,.07) 4px); pointer-events:none; z-index:1; }
        .social-icon { transition:transform .2s,filter .2s; }
        .social-icon:hover { transform:scale(1.2) translateY(-3px); filter:drop-shadow(0 0 8px currentColor); }

        @keyframes count-in { from{transform:scale(.5);opacity:0} to{transform:scale(1);opacity:1} }
        .stat-card { animation:count-in .6s cubic-bezier(.34,1.56,.64,1) both; }

        /* ── RESPONSIVE LAYOUT ── */
        .p-inner {
          position:relative; z-index:2;
          max-width:1100px; width:100%;
          display:flex; flex-direction:row;
          flex-wrap:wrap; align-items:center;
          justify-content:space-between; gap:48px;
        }
        .p-left  { flex:1 1 420px; }
        .p-right { flex:0 0 auto; display:flex; justify-content:center; align-items:center; }
        .ring-box { position:relative; width:300px; height:300px; }

        .p-stat-bar {
          position:absolute; bottom:32px; left:50%;
          transform:translateX(-50%);
          display:flex; gap:40px; z-index:2;
          flex-wrap:wrap; justify-content:center; width:90%;
        }

        @media (max-width: 900px) {
          .p-inner { flex-direction:column; align-items:center; gap:32px; text-align:center; }
          .p-left  { flex:1 1 100%; display:flex; flex-direction:column; align-items:center; }
          .p-right { width:100%; }
          .ring-box { width:240px; height:240px; }
          .p-stat-bar { gap:16px; bottom:20px; }
          .p-stat-bar .stat-card { padding:10px 18px !important; }
        }

        @media (max-width: 540px) {
          .ring-box { width:200px; height:200px; }
          .float-badge { display:none !important; }
          .p-stat-bar {
            position:static; transform:none;
            margin-top:32px; gap:10px; padding:0 16px;
          }
          .p-stat-bar .stat-card { padding:10px 14px !important; flex:1 1 auto; min-width:90px; }
          .cta-wrap { justify-content:center !important; }
          .soc-wrap { justify-content:center !important; }
        }
      `}</style>

      <div
        id="portfolio"
        className="scanlines"
        style={{
          position:'relative', minHeight:'100vh', background:'#030303', overflow:'hidden',
          fontFamily:"'DM Sans',sans-serif",
          display:'flex', flexDirection:'column',
          alignItems:'center', justifyContent:'center',
          padding:'100px 20px 150px',
        }}
      >
        <ParticleCanvas />

        <div ref={blobRef} className="blob" style={{ position:'absolute', top:'10%', left:'-10%', width:500, height:500, background:'radial-gradient(circle,rgba(232,121,249,.18) 0%,transparent 70%)', transition:'transform .3s ease', zIndex:0 }} />
        <div ref={blob2Ref} className="blob" style={{ position:'absolute', bottom:'5%', right:'-10%', width:600, height:600, background:'radial-gradient(circle,rgba(249,115,22,.15) 0%,transparent 70%)', transition:'transform .3s ease', zIndex:0 }} />
        <div style={{ position:'absolute', inset:0, backgroundImage:`linear-gradient(rgba(232,121,249,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(232,121,249,.04) 1px,transparent 1px)`, backgroundSize:'60px 60px', zIndex:0 }} />

        <div className="p-inner">

          {/* LEFT */}
          <div className="p-left">
            <div className="reveal-1" style={{ display:'inline-flex', alignItems:'center', gap:8, background:'rgba(232,121,249,.1)', border:'1px solid rgba(232,121,249,.3)', borderRadius:999, padding:'6px 16px', marginBottom:24 }}>
              <span style={{ width:8, height:8, borderRadius:'50%', background:'#e879f9', boxShadow:'0 0 10px #e879f9', animation:'blink 1.2s ease-in-out infinite', flexShrink:0 }} />
              <span style={{ color:'#e879f9', fontSize:13, fontWeight:600, letterSpacing:2 }}>AVAILABLE FOR WORK</span>
            </div>

            <div className="reveal-2" style={{ fontSize:18, color:'#a3e635', fontWeight:600, letterSpacing:3, marginBottom:12, fontFamily:"'Syne',sans-serif" }}>
              Hey there! 👋
            </div>

            <h1 className="reveal-3" style={{ fontFamily:"'Syne',sans-serif", fontWeight:900, lineHeight:1.05, marginBottom:16, fontSize:'clamp(2.4rem,6vw,5.5rem)' }}>
              <span style={{ color:'#fff', display:'block' }}>I'm</span>
              <GlitchText text="Anjana T" className="grad-text" />
            </h1>

            <div className="reveal-4" style={{ fontSize:'clamp(1rem,2.5vw,1.5rem)', color:'#d1d5db', marginBottom:20, fontFamily:"'Syne',sans-serif", fontWeight:700, minHeight:'2rem' }}>
              <span style={{ color:'#f97316' }}>&gt; </span>
              <span>{typed}</span>
              <span className="cursor" style={{ color:'#e879f9', fontWeight:300 }}>|</span>
            </div>

            <p className="reveal-4" style={{ color:'#9ca3af', lineHeight:1.8, marginBottom:36, maxWidth:480, fontSize:15 }}>
              A passionate full‑stack developer crafting seamless digital experiences from front to back. I love clean code, bold UI, and turning ideas into reality with{' '}
              <span style={{ color:'#e879f9', fontWeight:600 }}>MERN stack</span> magic.
            </p>

            <div className="reveal-5 cta-wrap" style={{ display:'flex', gap:16, flexWrap:'wrap', marginBottom:40 }}>
              <Link to="contact" smooth duration={500} offset={-70}>
                <button className="neon-btn" style={{ background:'linear-gradient(90deg,#e879f9,#f97316)', color:'#fff', border:'none', padding:'14px 32px', borderRadius:999, fontSize:15, fontWeight:700, cursor:'pointer', fontFamily:"'Syne',sans-serif", letterSpacing:1 }}>
                  Connect with Me ✦
                </button>
              </Link>
              <a href="/Anjana-T_resume.pdf" target="_blank" rel="noopener noreferrer">
                <button className="neon-btn-outline" style={{ background:'rgba(0,0,0,.6)', color:'#fff', border:'1.5px solid transparent', padding:'14px 32px', borderRadius:999, fontSize:15, fontWeight:700, cursor:'pointer', fontFamily:"'Syne',sans-serif", letterSpacing:1 }}>
                  My Résumé ↗
                </button>
              </a>
            </div>

            <div className="reveal-5 soc-wrap" style={{ display:'flex', gap:20, alignItems:'center' }}>
              <span style={{ color:'#4b5563', fontSize:12, letterSpacing:2 }}>FIND ME ON</span>
              <a href="https://www.linkedin.com/in/anjana-t-480863352" target="_blank" rel="noopener noreferrer" className="social-icon" style={{ color:'#38bdf8', fontSize:26 }}><FaLinkedin /></a>
              <a href="https://github.com/Anjana412" target="_blank" rel="noopener noreferrer" className="social-icon" style={{ color:'#e2e8f0', fontSize:26 }}><FaGithub /></a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="p-right">
            <div className="ring-box">
              <svg className="ring1" style={{ position:'absolute', inset:-30, width:'calc(100% + 60px)', height:'calc(100% + 60px)', zIndex:0 }} viewBox="0 0 360 360">
                <defs><linearGradient id="rg1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#e879f9"/><stop offset="50%" stopColor="#f97316"/><stop offset="100%" stopColor="#facc15"/></linearGradient></defs>
                <circle cx="180" cy="180" r="170" fill="none" stroke="url(#rg1)" strokeWidth="2" strokeDasharray="20 10"/>
              </svg>
              <svg className="ring2" style={{ position:'absolute', inset:-8, width:'calc(100% + 16px)', height:'calc(100% + 16px)', zIndex:0 }} viewBox="0 0 316 316">
                <circle cx="158" cy="158" r="150" fill="none" stroke="rgba(232,121,249,.3)" strokeWidth="1.5" strokeDasharray="6 14"/>
              </svg>
              <div style={{ position:'absolute', inset:-20, borderRadius:'50%', background:'radial-gradient(circle,rgba(232,121,249,.25) 0%,transparent 70%)', zIndex:0 }} />

              <div className="float-img" style={{ position:'relative', zIndex:1, width:'100%', height:'100%', borderRadius:'50%', overflow:'hidden', border:'3px solid rgba(232,121,249,.5)', boxShadow:'0 0 40px rgba(232,121,249,.4),0 0 80px rgba(249,115,22,.2)' }}>
                {/* Replace with: <img src={imgg} alt="Anjana" style={{width:'100%',height:'100%',objectFit:'cover'}} /> */}
                <div style={{ width:'100%', height:'100%', background:'linear-gradient(135deg,#1a0a2e 0%,#2d0a1e 50%,#1a1000 100%)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:80, color:'rgba(232,121,249,.5)' }}>👩‍💻</div>
              </div>

              {[
                { label:'React', emoji:'⚛️', top:-16, right:-20, delay:'0s' },
                { label:'Node',  emoji:'🟢', bottom:20, left:-30, delay:'.4s' },
                { label:'MERN',  emoji:'🍃', top:60,  left:-50, delay:'.8s' },
              ].map(b => (
                <div key={b.label} className="float-badge" style={{ position:'absolute', top:b.top, bottom:b.bottom, left:b.left, right:b.right, background:'rgba(3,3,3,.85)', border:'1px solid rgba(232,121,249,.4)', borderRadius:12, padding:'6px 12px', display:'flex', alignItems:'center', gap:6, backdropFilter:'blur(8px)', zIndex:3, animation:`float 3s ${b.delay} ease-in-out infinite` }}>
                  <span style={{ fontSize:14 }}>{b.emoji}</span>
                  <span style={{ color:'#fff', fontWeight:700, fontSize:13 }}>{b.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* stat bar */}
        <div className="p-stat-bar">
          {[{ n:'6+', label:'Months MERN XP' },{ n:'3+', label:'Projects Shipped' },{ n:'12+', label:'Tech Skills' }].map((s, i) => (
            <div key={s.label} className="stat-card" style={{ animationDelay:`${0.2 + i * 0.15}s`, textAlign:'center', padding:'12px 24px', background:'rgba(255,255,255,.03)', border:'1px solid rgba(232,121,249,.2)', borderRadius:16, backdropFilter:'blur(10px)' }}>
              <div className="grad-text" style={{ fontFamily:"'Syne',sans-serif", fontWeight:900, fontSize:28 }}>{s.n}</div>
              <div style={{ color:'#6b7280', fontSize:11, letterSpacing:1.5, marginTop:2 }}>{s.label.toUpperCase()}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Portfolio;