import React, { useState, useEffect } from "react";

function App() {
  const profile = {
    name: "Purushottam Kumar", //[cite: 1]
    role: "Flutter Developer / Mobile App Developer", //
    bio: "I am a Flutter developer with 1+ years of experience in mobile app development. I specialize in building high-performance UIs, robust Dart logic, clean API integration, and efficient state management architectures.", //
    mobile: "+91 85075 36900", //
    email: "purushottam.dev01@gmail.com", //
    github: "https://github.com/Purushottamji",
    linkedin: "https://www.linkedin.com/in/purushottamkumar01", //
    resumeLink: "/Purushottam_Flutter_Resume.pdf",
  };

  const skillCategories = [
    { title: "Mobile Development", items: ["Flutter", "Dart", "Kotlin"] }, //
    { title: "State Management", items: ["Provider", "Bloc", "GetX"] }, //
    {
      title: "Backend & Database",
      items: ["Node.js", "REST APIs", "Firebase", "MySQL"],
    }, //
    {
      title: "Web & Version Control",
      items: [
        "JavaScript",
        "HTML5 & CSS3",
        "Tailwind CSS",
        "Git & GitHub",
        "GitFlow",
      ],
    }, //
  ];

  const education = [
    {
      degree: "Professional Diploma in Software Engineering", //
      institution: "Edugaon Education and Innovation Lab", //
      year: "Present",
    },
    {
      degree: "Bachelor of Arts (BA)", //
      institution: "JP University, Chapra", //
      year: "Completed",
    },
    {
      degree: "Higher Secondary (12th)", //
      institution: "Bihar School Examination Board (BSEB)", //
      year: "Completed",
    },
  ];

  const projects = [
    {
      title: "ZaykaZone : Food Delivery Application", //
      description:
        "A smart food delivery app designed to make ordering meals quick and convenient. It allows users to explore nearby restaurants, browse dynamic menus, and handle safe cart workflows.", //
      tech: ["Flutter", "Dart", "Provider", "REST APIs", "Razorpay"], //
      github: "https://github.com/Purushottamji/zaykazone_project.git",
      live: "https://play.google.com/store/apps/details?id=com.zaykaZone&pcampaignid=web_share",
      isLiveOnPlayStore: true,
    },
    {
      title: "Shop Sathi : E-Commerce Application", //
      description:
        "A comprehensive e-commerce app that allows users to search products, view real-time product details, manage persistence cart state, and place seamless orders via payment gateways.", //
      tech: ["Flutter", "Dart", "Provider", "REST APIs", "Razorpay"], //
      github: "https://github.com",
      live: "https://play.google.com/store/apps/details?id=com.shopsathi.app&pcampaignid=web_share",
      isLiveOnPlayStore: true,
    },
  ];

  const [ripples, setRipples] = useState([]);

  useEffect(() => {
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    if (isTouchDevice) return;

    const handleMouseMove = (e) => {
      const newRipple = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
      };
      setRipples((prev) => [...prev.slice(-12), newRipple]);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-900 antialiased relative overflow-x-hidden">
      <style>{`
        @keyframes floatSlow1 {
          0% { transform: translate(0px, 0px) scale(1); }
          50% { transform: translate(60px, -40px) scale(1.3); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes floatSlow2 {
          0% { transform: translate(0px, 0px) scale(1.1); }
          50% { transform: translate(-40px, 60px) scale(0.85); }
          100% { transform: translate(0px, 0px) scale(1.1); }
        }
        @keyframes waterDropBalanced {
          0% {
            transform: translate(-50%, -50%) scale(0.1);
            opacity: 0.85;
            box-shadow: inset 0 0 10px rgba(34, 211, 238, 0.3);
          }
          50% {
            border-color: rgba(16, 185, 129, 0.5);
          }
          100% {
            transform: translate(-50%, -50%) scale(2.2); 
            opacity: 0;
            border-color: rgba(99, 102, 241, 0);
            box-shadow: inset 0 0 20px rgba(99, 102, 241, 0);
          }
        }
        .animate-blob1 { animation: floatSlow1 14s infinite ease-in-out; }
        .animate-blob2 { animation: floatSlow2 18s infinite ease-in-out; }
        
        .ripple-circle-balanced {
          position: fixed;
          pointer-events: none;
          width: 50px;  
          height: 50px; 
          border: 1.5px solid rgba(6, 182, 212, 0.5); 
          background: radial-gradient(circle, rgba(6, 182, 212, 0.04) 0%, rgba(16, 185, 129, 0.01) 70%);
          border-radius: 50%;
          z-index: 9999;
          animation: waterDropBalanced 0.75s cubic-bezier(0.1, 0.8, 0.3, 1) forwards;
        }

        @media (pointer: coarse) or (hover: none) {
          .ripple-circle-balanced {
            display: none !important;
          }
        }
      `}</style>

      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className="ripple-circle-balanced"
          style={{ left: `${ripple.x}px`, top: `${ripple.y}px` }}
        />
      ))}

      {/* Background Layers - REMOVED SQUARE GRID BOXES */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-1/4 -left-12 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-blob1"></div>
        <div className="absolute top-2/3 -right-12 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-blob2"></div>
      </div>

      <div className="relative z-10">
        {/* Navbar */}
        <nav className="sticky top-0 z-50 bg-slate-950/70 backdrop-blur-md border-b border-slate-900">
          <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-emerald-400 to-indigo-400 bg-clip-text text-transparent tracking-tight shrink-0">
              &lt;{profile.name.split(" ")[0]} /&gt;
            </span>
            <div className="hidden md:flex gap-6 text-sm font-medium text-slate-400">
              <a
                href="#about"
                className="hover:text-cyan-400 transition-colors"
              >
                About
              </a>
              <a
                href="#skills"
                className="hover:text-emerald-400 transition-colors"
              >
                Skills
              </a>
              <a
                href="#projects"
                className="hover:text-indigo-400 transition-colors"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="hover:text-cyan-400 transition-colors"
              >
                Contact
              </a>
            </div>
            <div className="md:hidden">
              <a
                href="#contact"
                className="text-xs font-semibold text-cyan-400 bg-cyan-500/10 px-3 py-1.5 rounded-lg border border-cyan-500/20"
              >
                Contact ↗
              </a>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="max-w-5xl mx-auto px-6 pt-28 pb-24 flex flex-col items-start gap-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold tracking-wide uppercase border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.15)]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            Flutter Developer @ Edugaon Technology
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-none">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(34,211,238,0.15)]">
              {profile.name}
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-400 tracking-tight">
            {profile.role}
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl leading-relaxed font-light">
            {profile.bio}
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 text-slate-950 font-bold transition-all shadow-lg hover:shadow-cyan-500/20 hover:scale-[1.02] active:scale-100"
            >
              Get In Touch
            </a>
            <a
              href={profile.resumeLink}
              download
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 font-semibold transition-all border border-slate-800 text-cyan-400 hover:border-cyan-500/30 flex items-center gap-2 hover:scale-[1.02]"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                ></path>
              </svg>
              Download CV
            </a>
          </div>
        </section>

        <hr className="border-slate-900 max-w-5xl mx-auto px-6" />

        {/* About, Skills & Education Grid */}
        <section
          id="about"
          className="max-w-5xl mx-auto px-6 py-24 grid md:grid-cols-10 gap-16"
        >
          <div className="md:col-span-4 space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold flex items-center gap-2 text-white tracking-tight">
                <span className="text-cyan-400">#</span> About Me
              </h3>
              <div className="text-slate-400 leading-relaxed font-light space-y-4 text-sm md:text-base">
                <p>
                  I am a dedicated software engineer specializing in building
                  smooth cross-platform mobile solutions using the
                  <strong className="text-cyan-400 font-medium ml-1">
                    Flutter framework
                  </strong>{" "}
                  and{" "}
                  <strong className="text-emerald-400 font-medium">
                    Dart language
                  </strong>
                  .
                </p>
                <p>
                  My main focus is writing clean, scalable code and setting up
                  clean architectures using state management patterns like BLoC,
                  Provider, and GetX to deliver seamless runtime performance.
                </p>
              </div>
            </div>

            <div className="space-y-4 pt-4">
              <h3 className="text-xl font-bold flex items-center gap-2 text-white tracking-tight">
                <span className="text-indigo-400">#</span> Education
              </h3>
              <div className="relative border-l border-slate-900 pl-4 space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="relative group">
                    <span className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-slate-800 group-hover:bg-indigo-400 transition-colors border border-slate-950"></span>
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                      {edu.year}
                    </span>
                    <h4 className="text-sm font-semibold text-slate-200 mt-0.5 leading-snug">
                      {edu.degree}
                    </h4>
                    <p className="text-xs text-slate-400 font-light">
                      {edu.institution}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Categorized Skills Section */}
          <div id="skills" className="md:col-span-6 space-y-6">
            <h3 className="text-2xl font-bold flex items-center gap-2 text-white tracking-tight">
              <span className="text-emerald-400">#</span> Core Tech Stack
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {skillCategories.map((cat, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-900/30 border border-slate-900/60 backdrop-blur-sm space-y-3 hover:border-slate-800 transition-all"
                >
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    {cat.title}
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.items.map((skill, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-md bg-slate-950/80 text-xs font-medium border border-slate-900 text-cyan-400"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <hr className="border-slate-900 max-w-5xl mx-auto px-6" />

        {/* Projects Section */}
        <section
          id="projects"
          className="max-w-5xl mx-auto px-6 py-24 space-y-10"
        >
          <div>
            <h3 className="text-2xl font-bold text-white tracking-tight">
              <span className="text-indigo-400">#</span> Case Studies & Apps
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-gradient-to-b from-slate-900/40 to-slate-900/10 border border-slate-900/80 backdrop-blur-sm hover:border-slate-700/80 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/5 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex justify-between items-start gap-4">
                    <h4 className="text-xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors tracking-tight">
                      {project.title}
                    </h4>
                    {project.isLiveOnPlayStore && (
                      <span className="flex items-center gap-1.5 text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20 shrink-0 shadow-[0_0_10px_rgba(16,185,129,0.1)]">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                        LIVE
                      </span>
                    )}
                  </div>
                  <p className="text-slate-400 text-sm mt-3 leading-relaxed font-light">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-5">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-semibold text-slate-400 bg-slate-950 px-2.5 py-1 rounded-md border border-slate-900"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 mt-8 pt-4 border-t border-slate-900">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
                  >
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                    Source Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors ml-auto"
                  >
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                    Play Store ↗
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-slate-900 max-w-5xl mx-auto px-6" />

        {/* Contact Section */}
        <section
          id="contact"
          className="max-w-5xl mx-auto px-6 py-24 text-center space-y-8"
        >
          <div className="space-y-3">
            <h3 className="text-3xl font-extrabold text-white tracking-tight">
              Let's Craft Something Great
            </h3>
            <p className="text-slate-400 max-w-md mx-auto text-sm font-light leading-relaxed">
              Feel free to reach out for production-grade mobile applications or
              technical collaborations.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto pt-4 text-sm font-medium">
            <a
              href={`mailto:${profile.email}`}
              className="p-4 rounded-xl bg-slate-900/40 hover:bg-slate-900/90 text-slate-300 hover:text-cyan-400 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-cyan-500/5 hover:border-cyan-500/50 transition-all duration-300 border border-slate-900/80 flex flex-col items-center gap-2 group"
            >
              <span className="text-xs text-slate-500 uppercase font-bold tracking-wider">
                Email
              </span>
              <span className="text-xs truncate max-w-full font-light text-slate-400 group-hover:text-cyan-400">
                {profile.email.split("@")[0]}...
              </span>
            </a>
            <a
              href={`tel:${profile.mobile.replace(/\s+/g, "")}`}
              className="p-4 rounded-xl bg-slate-900/40 hover:bg-slate-900/90 text-slate-300 hover:text-emerald-400 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-emerald-500/5 hover:border-emerald-500/50 transition-all duration-300 border border-slate-900/80 flex flex-col items-center gap-2 group"
            >
              <span className="text-xs text-slate-500 uppercase font-bold tracking-wider">
                Call Me
              </span>
              <span className="text-xs font-light text-slate-400 group-hover:text-emerald-400">
                {profile.mobile}
              </span>
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="p-4 rounded-xl bg-slate-900/40 hover:bg-slate-900/90 text-slate-300 hover:text-indigo-400 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-indigo-500/5 hover:border-indigo-500/50 transition-all duration-300 border border-slate-900/80 flex flex-col items-center gap-2 group"
            >
              <span className="text-xs text-slate-500 uppercase font-bold tracking-wider">
                GitHub
              </span>
              <span className="text-xs font-light text-slate-400 group-hover:text-indigo-400">
                @Purushottamji
              </span>
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-4 rounded-xl bg-slate-900/40 hover:bg-slate-900/90 text-slate-300 hover:text-cyan-400 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-cyan-500/5 hover:border-cyan-500/50 transition-all duration-300 border border-slate-900/80 flex flex-col items-center gap-2 group"
            >
              <span className="text-xs text-slate-500 uppercase font-bold tracking-wider">
                LinkedIn
              </span>
              <span className="text-xs font-light text-slate-400 group-hover:text-cyan-400">
                /purushottamkumar01
              </span>
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-slate-900 py-8 text-center text-xs text-slate-500 font-light">
          © {new Date().getFullYear()} {profile.name}. Handcrafted with React &
          Tailwind CSS.
        </footer>
      </div>
    </div>
  );
}

export default App;
