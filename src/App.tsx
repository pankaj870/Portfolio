import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router';

// --- Common Components ---

const Header = () => {
    const location = useLocation();
    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Experience', path: '/experience' },
        { name: 'Projects', path: '/projects' },
        { name: 'Contact', path: '/contact' }
    ];

    return (
        <header className="fixed top-0 w-full z-50 bg-surface/40 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.1)] border-b border-outline-variant/10">
            <div className="h-16 max-w-[1280px] mx-auto px-margin-mobile lg:px-margin-desktop flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <img alt="Pankaj Mahajan Logo" className="h-8 w-auto object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8gJPsHrCOdSLQP8AjMlthhdqax39P05XdFIrALTf0ckdSaQqFZuz3EI7Hcsab_kX7z7RhjxRAELVGsuZppdHjGFTEI2ZwuHfPrXsmCq9hhcYeONAr5mYxNZj9-iPpvcB0dd8gnqpW8nc2106KfJZyUV0dt-hOmdhM_vZxiwltNPn3GVeGpIXVPpVvkJtHOj_kEKG_ATNKMMApKYDlNvHzYpxGRyuN3QTTisSm7ng-vqdYBaZy85SY"/>
                    <span className="font-headline-md text-headline-md text-on-surface tracking-tight hidden sm:block">Pankaj Mahajan</span>
                </div>
                <nav className="hidden md:flex items-center gap-stack-lg">
                    {navItems.map(item => (
                        <Link 
                            key={item.name}
                            to={item.path} 
                            className={`font-label-caps text-label-caps uppercase transition-colors ${location.pathname === item.path ? 'text-secondary font-bold' : 'text-on-surface-variant hover:text-secondary'}`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>
                <div className="flex items-center gap-stack-md">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                        <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
                    </div>
                </div>
            </div>
        </header>
    );
};

const Footer = () => (
    <footer className="w-full bg-surface-container-lowest border-t border-outline-variant/10 py-stack-lg">
        <div className="max-w-[1280px] mx-auto px-margin-mobile lg:px-margin-desktop flex flex-col md:flex-row justify-between items-center gap-stack-md">
            <div className="flex flex-col gap-base text-center md:text-left">
                <span className="font-label-caps text-label-caps text-on-surface uppercase opacity-50">© 2024 Pankaj Mahajan</span>
                <span className="font-code-sm text-code-sm text-primary">Full Stack Developer // Architect</span>
            </div>
            <div className="flex items-center gap-stack-lg">
                <a className="text-on-surface-variant hover:text-secondary transition-colors flex items-center gap-base" href="https://linkedin.com/in/pankaj-mahajan" target="_blank" rel="noreferrer"><span className="material-symbols-outlined text-[18px]">link</span><span className="font-label-caps text-label-caps uppercase">LinkedIn</span></a>
                <a className="text-on-surface-variant hover:text-secondary transition-colors flex items-center gap-base" href="#"><span className="material-symbols-outlined text-[18px]">code</span><span className="font-label-caps text-label-caps uppercase">GitHub</span></a>
                <a className="text-on-surface-variant hover:text-secondary transition-colors flex items-center gap-base" href="mailto:mahajanpankaj615@gmail.com"><span className="material-symbols-outlined text-[18px]">mail</span><span className="font-label-caps text-label-caps uppercase">Contact</span></a>
            </div>
        </div>
    </footer>
);

// --- Screens ---

const HomePage = () => {
    return (
        <div className="flex flex-col w-full relative">
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden mix-blend-screen opacity-20">
                <svg className="absolute w-[200%] h-[200%] -top-1/2 -left-1/2 animate-[spin_120s_linear_infinite]" preserveAspectRatio="none" viewBox="0 0 100 100">
                    <defs>
                        <radialGradient cx="50%" cy="50%" id="grad1" r="50%">
                            <stop offset="0%" stopColor="#bec6e0" stopOpacity="0.2"></stop>
                            <stop offset="100%" stopColor="transparent" stopOpacity="0"></stop>
                        </radialGradient>
                    </defs>
                    <circle cx="30" cy="30" fill="url(#grad1)" r="40"></circle>
                    <circle cx="70" cy="70" fill="url(#grad1)" r="50"></circle>
                </svg>
            </div>
            <section className="w-full min-h-[819px] flex flex-col justify-center relative z-10 px-margin-mobile lg:px-margin-desktop py-stack-lg max-w-container-max mx-auto mt-16">
                <div className="flex flex-col lg:flex-row items-center gap-gutter w-full">
                    <div className="flex flex-col w-full lg:w-[60%] gap-stack-md z-10">
                        <div className="inline-flex items-center gap-2 bg-surface-container-high text-on-surface-variant font-label-caps text-label-caps px-4 py-2 rounded-full self-start shadow-sm mix-blend-luminosity">
                            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                            Available for new opportunities
                        </div>
                        <h1 className="font-display-lg-mobile text-display-lg-mobile lg:font-display-lg lg:text-display-lg text-on-surface tracking-tighter leading-tight relative group cursor-default">
                            <span className="block text-primary">Architecting</span>
                            <span className="block mix-blend-difference z-10 relative">Scalable Systems,</span>
                            <span className="block relative group-hover:text-tertiary transition-colors duration-500">Delivering Seamless Experiences.</span>
                        </h1>
                        <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mt-4 opacity-90">
                            Full Stack Developer with 1+ years of experience building secure, high-concurrency backend architectures and responsive frontend UIs. Owning features end-to-end, from schema design to production deployment.
                        </p>
                        <div className="flex flex-wrap items-center gap-4 mt-stack-md">
                            <Link to="/projects" className="group relative inline-flex items-center justify-center bg-secondary text-on-secondary font-label-caps text-label-caps uppercase px-6 py-3 rounded-lg overflow-hidden transition-transform hover:scale-105 shadow-md">
                                <span className="relative z-10 flex items-center gap-2">
                                    View Projects
                                    <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                </span>
                                <div className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
                            </Link>
                            <button className="inline-flex items-center gap-2 bg-transparent text-secondary font-label-caps text-label-caps uppercase px-6 py-3 rounded-lg hover:bg-secondary/10 transition-colors">
                                <span className="material-symbols-outlined text-[18px]">download</span>
                                Download Resume
                            </button>
                        </div>
                    </div>
                    <div className="w-full lg:w-[40%] justify-end relative z-10 hidden md:flex">
                        <div className="w-full max-w-md bg-surface-container-highest rounded-xl shadow-xl overflow-hidden backdrop-blur-md bg-opacity-80 relative group">
                            <div className="flex items-center gap-2 p-3 bg-surface-container/50 border-b border-white/5">
                                <div className="w-3 h-3 rounded-full bg-error/70"></div>
                                <div className="w-3 h-3 rounded-full bg-[#f59e0b]/70"></div>
                                <div className="w-3 h-3 rounded-full bg-tertiary/70"></div>
                                <span className="ml-2 font-code-sm text-code-sm text-on-surface-variant/50 text-[10px]">~/server/deploy.sh</span>
                            </div>
                            <div className="p-6 font-code-sm text-code-sm text-on-surface flex flex-col gap-2 min-h-[250px] relative">
                                <div className="flex items-start gap-2 animate-fadeIn" style={{animationDelay: '0.5s'}}>
                                    <span className="text-tertiary">➜</span><span className="text-secondary">~</span><span>npm run build</span>
                                </div>
                                <div className="text-on-surface-variant animate-fadeIn" style={{animationDelay: '1s'}}>
                                    {">"} portfolio@1.0.0 build<br/>{">"} next build
                                </div>
                                <div className="text-on-surface animate-fadeIn" style={{animationDelay: '1.5s'}}>
                                    <span className="text-secondary">info</span> - Creating an optimized production build...
                                </div>
                                <div className="text-on-surface animate-fadeIn" style={{animationDelay: '2s'}}>
                                    <span className="text-tertiary">✓</span> Compiled successfully
                                </div>
                                <div className="mt-4 flex items-center gap-2 animate-fadeIn" style={{animationDelay: '2.5s'}}>
                                    <span className="text-tertiary">➜</span>
                                    <span className="w-2 h-4 bg-on-surface animate-pulse"></span>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-highest via-transparent to-transparent opacity-80 pointer-events-none"></div>
                            </div>
                        </div>
                        <div className="absolute -bottom-8 -left-8 bg-surface-container text-on-surface p-4 rounded-lg shadow-lg flex items-center gap-3 animate-float">
                            <span className="material-symbols-outlined text-tertiary">speed</span>
                            <div>
                                <p className="font-label-caps text-[10px] text-on-surface-variant uppercase">Uptime</p>
                                <p className="font-code-sm font-bold text-on-surface">99.99%</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full py-stack-lg bg-surface relative z-10">
                <div className="max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
                        <div className="lg:col-span-7 bg-surface-container p-8 rounded-2xl shadow-md flex flex-col justify-between group hover:bg-surface-container-high transition-colors duration-300">
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-primary text-2xl">architecture</span>
                                    <h2 className="font-headline-md text-headline-md text-on-surface">Full Stack Ownership</h2>
                                </div>
                                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                                    I specialize in owning features from inception to deployment. This means architecting robust database schemas, building scalable APIs, and crafting intuitive user interfaces. My approach bridges the gap between complex backend logic and seamless frontend interactions, ensuring high performance across the entire stack.
                                </p>
                            </div>
                            <div className="mt-8 flex flex-wrap gap-2">
                                <span className="px-3 py-1 bg-surface-container-highest text-on-surface-variant font-code-sm text-code-sm rounded-md shadow-sm">System Design</span>
                                <span className="px-3 py-1 bg-surface-container-highest text-on-surface-variant font-code-sm text-code-sm rounded-md shadow-sm">API Development</span>
                                <span className="px-3 py-1 bg-surface-container-highest text-on-surface-variant font-code-sm text-code-sm rounded-md shadow-sm">UI/UX</span>
                            </div>
                        </div>
                        <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                            {[
                                { icon: 'javascript', color: 'tertiary', label: 'Node.js' },
                                { icon: 'code', color: 'secondary', label: 'React' },
                                { icon: 'layers', color: 'primary', label: 'Next.js' },
                                { icon: 'cloud', color: '[#f59e0b]', label: 'AWS' }
                            ].map((item, idx) => (
                                <div key={idx} className={`bg-surface-container-low p-6 rounded-2xl flex flex-col items-center justify-center gap-3 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group`}>
                                    <div className={`absolute inset-0 bg-gradient-to-br from-${item.color}/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                                    <span className={`material-symbols-outlined text-4xl text-${item.color}`}>{item.icon}</span>
                                    <span className="font-label-caps text-label-caps text-on-surface uppercase tracking-wider relative z-10">{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

const ProjectsPage = () => {
    const projects = [
        {
            title: "Visualible — AI-Powered eBook Platform",
            status: "Production",
            problem: "Authoring and distributing interactive technical eBooks lacked a streamlined, AI-assisted workflow. Existing platforms struggled with large-scale document parsing and latency during content generation.",
            solution: "Engineered a robust Next.js frontend communicating with a scalable Node.js backend. Implemented a sophisticated RAG (Retrieval-Augmented Generation) pipeline using Redis for aggressive caching, effectively cutting data retrieval latency by 35%. Optimized document processing workflows, reducing verification time by 40%.",
            stack: ["Node.js", "Next.js", "Tailwind CSS", "RAG Pipeline", "Redis", "Stripe API"],
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCvpXCb_obQZdcw5S5DjMlUJGHjI_b9M-5k7xJwJwsLGH9Di9hEfInfVJtAatXTYPxOB_B1ZWAlpwI7zzrYkCJ93MRuOdASqlsCaMvXFFwGoYgIQmnLuqsPf8WIFvBDwvik97cYB8P6PhQyua6mtXglKJ9HBKHYqeX5VA2Rh0khRo-_7yJr2w5_acmH5Xufjzng6orltBA13j_xk6gcAn3J9Z66-MU2zMEEDVlTYObx2RyIR50ise-R",
            stats: [ { val: "-35%", label: "Latency" }, { val: "-40%", label: "Verification" } ]
        },
        {
            title: "Syntra — Dating Application",
            status: "Deployed",
            problem: "Modern matching platforms require complex, high-volume data schemas capable of rapid querying to deliver real-time user experiences without sacrificing scalability.",
            solution: "Developed a scalable microservices backend using Node.js and MongoDB. Designed optimized indexing strategies to support high-volume geolocation queries and matching algorithms. Leveraged Strapi CMS for flexible content and admin management.",
            stack: ["Node.js", "MongoDB", "Strapi CMS"],
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCuDcsVwnBPSfCGlEnb-Y-qS23N77ozH3nhqXIewdD2LZlLA_BY65OdDDxZvExjDCBoI1R1acwe_BLOHRmHUVRExkGsbvqLqEaD-BNrhl4-w9pTcfam6v0B_gOOY84BolHiHvr3crXv7xQhEHhysBhtdJHCXwSiJFgvkCh3xPIo4xyPjkGiOL6z3pezYfVyYpp2wMgIhupQRLruBqfZI4fHFJUi07AbLiI0PnEWiMRGQyPMG9Dq8hDk",
            stats: [ { val: "1,000+", label: "Active Users" } ],
            reverse: true
        }
    ];

    return (
        <div className="flex flex-col w-full relative overflow-hidden pb-stack-lg min-h-screen pt-16">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-colors-surface-container-highest)_0%,_transparent_50%)] opacity-30 mix-blend-screen pointer-events-none"></div>
            <section className="max-w-[1280px] w-full mx-auto px-margin-mobile lg:px-margin-desktop mt-stack-lg mb-stack-lg relative z-10">
                <div className="flex flex-col gap-base mb-stack-lg">
                    <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest">[ // PORTFOLIO_INDEX ]</span>
                    <h1 className="font-display-lg text-display-lg text-on-surface tracking-tight">System<br/><span className="text-on-surface-variant">Architecture & Build</span></h1>
                </div>
                <div className="grid grid-cols-1 gap-stack-lg">
                    {projects.map((proj, idx) => (
                        <article key={idx} className={`group relative bg-surface-container-low rounded-xl overflow-hidden shadow-lg transition-transform hover:-translate-y-1 duration-300`}>
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="grid grid-cols-1 lg:grid-cols-2">
                                <div className={`p-stack-lg flex flex-col justify-between h-full z-10 relative ${proj.reverse ? 'order-1 lg:order-2' : ''}`}>
                                    <div>
                                        <div className="flex items-center gap-stack-sm mb-stack-sm">
                                            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                                            <span className="font-label-caps text-label-caps text-secondary uppercase">{proj.status}</span>
                                        </div>
                                        <h2 className="font-headline-md text-headline-md text-on-surface mb-stack-md">{proj.title}</h2>
                                        <div className="space-y-stack-md mb-stack-lg">
                                            <div>
                                                <h3 className="font-label-caps text-label-caps text-on-surface-variant uppercase mb-base">Problem Space</h3>
                                                <p className="font-body-md text-body-md text-on-surface/80">{proj.problem}</p>
                                            </div>
                                            <div>
                                                <h3 className="font-label-caps text-label-caps text-on-surface-variant uppercase mb-base">Architecture & Solution</h3>
                                                <p className="font-body-md text-body-md text-on-surface/80">{proj.solution}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="font-label-caps text-label-caps text-on-surface-variant uppercase mb-stack-sm">Tech Stack</h3>
                                        <div className="flex flex-wrap gap-stack-sm">
                                            {proj.stack.map(s => <span key={s} className="px-2 py-1 bg-surface-container-highest text-on-surface-variant font-code-sm text-code-sm rounded">{s}</span>)}
                                        </div>
                                    </div>
                                </div>
                                <div className={`relative min-h-[300px] lg:min-h-full bg-surface-container-highest z-10 overflow-hidden ${proj.reverse ? 'order-2 lg:order-1' : ''}`}>
                                    <div className="absolute inset-0 bg-cover bg-center opacity-80 group-hover:scale-105 transition-transform duration-700 ease-out" style={{backgroundImage: `url('${proj.image}')`}}></div>
                                    <div className={`absolute inset-0 bg-gradient-to-t from-surface-container-low lg:via-surface-container-low/50 to-transparent ${proj.reverse ? 'lg:bg-gradient-to-r' : 'lg:bg-gradient-to-l'}`}></div>
                                    <div className={`absolute bottom-stack-md flex gap-stack-sm ${proj.reverse ? 'left-stack-md' : 'right-stack-md'}`}>
                                        {proj.stats.map((s, i) => (
                                            <div key={i} className="bg-surface/90 backdrop-blur-md px-3 py-2 rounded shadow-lg border border-outline-variant/30 flex flex-col items-end">
                                                <span className="font-label-caps text-label-caps text-tertiary uppercase">{s.val}</span>
                                                <span className="font-code-sm text-code-sm text-on-surface-variant">{s.label}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </div>
    );
};

const ExperiencePage = () => (
    <div className="flex flex-col w-full relative pt-16">
        <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-tertiary-fixed/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] bg-secondary-fixed/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-[1280px] mx-auto w-full px-margin-mobile lg:px-margin-desktop py-stack-lg flex flex-col gap-margin-desktop z-10">
            <div className="flex flex-col gap-stack-sm w-full max-w-3xl">
                <h1 className="font-display-lg text-display-lg text-on-surface">Experience & Expertise</h1>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">A chronological overview of professional roles, architectural achievements, and technical proficiencies.</p>
            </div>
            <div className="flex flex-col lg:flex-row gap-gutter">
                <div className="flex-1 flex flex-col gap-margin-desktop">
                    <section className="flex flex-col gap-stack-lg relative">
                        <div className="absolute left-[20px] md:left-[30px] top-[40px] bottom-0 w-px bg-outline-variant/30 hidden sm:block"></div>
                        <div className="flex items-center gap-stack-sm">
                            <span className="material-symbols-outlined text-secondary text-[24px]">work_history</span>
                            <h2 className="font-headline-md text-headline-md text-on-surface">Professional Experience</h2>
                        </div>
                        <div className="flex flex-col gap-stack-lg pl-0 sm:pl-stack-lg md:pl-[64px] relative">
                            <div className="relative group">
                                <div className="absolute left-[-45px] top-[8px] w-[12px] h-[12px] rounded-full bg-secondary shadow-[0_0_12px_rgba(93,230,255,0.6)] hidden sm:block group-hover:scale-125 transition-transform duration-300"></div>
                                <div className="bg-surface-container rounded-xl p-stack-lg flex flex-col gap-stack-md transition-all duration-300 hover:bg-surface-container-high group-hover:shadow-lg group-hover:shadow-secondary/5">
                                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-stack-sm">
                                        <div className="flex flex-col gap-base">
                                            <h3 className="font-headline-md text-[20px] leading-tight font-semibold text-on-surface">Software Developer (Full Stack)</h3>
                                            <div className="flex items-center gap-2"><span className="font-label-caps text-label-caps text-secondary uppercase">Ideal IT Techno Pvt Ltd — Indore, MP</span></div>
                                        </div>
                                        <div className="bg-surface-container-highest px-3 py-1 rounded-full w-fit">
                                            <span className="font-label-caps text-label-caps text-on-surface-variant">Apr 2025 — Present</span>
                                        </div>
                                    </div>
                                    <p className="font-body-md text-body-md text-on-surface-variant">Leading the development of highly scalable backend architectures and dynamic front-end interfaces. Focused on performance optimization and microservices orchestration.</p>
                                    <ul className="flex flex-col gap-3 font-body-md text-body-md text-on-surface-variant list-none pl-0">
                                        <li className="flex items-start gap-3"><span className="material-symbols-outlined text-tertiary text-[20px] mt-1 shrink-0">check_circle</span><span>Architected scalable Node.js RESTful APIs and microservices, using Sequelize CLI and Prisma for migrations.</span></li>
                                        <li className="flex items-start gap-3"><span className="material-symbols-outlined text-tertiary text-[20px] mt-1 shrink-0">check_circle</span><span>Built and maintained React.js/Next.js interfaces ensuring frontend stays in sync with backend contracts.</span></li>
                                        <li className="flex items-start gap-3"><span className="material-symbols-outlined text-tertiary text-[20px] mt-1 shrink-0">check_circle</span><span>Engineered end-to-end workflow automations with n8n and Antigravity, reducing manual time by ~30%.</span></li>
                                        <li className="flex items-start gap-3"><span className="material-symbols-outlined text-tertiary text-[20px] mt-1 shrink-0">check_circle</span><span>Strengthened security with Firebase/JWT and Redis caching to handle 500+ concurrent users securely.</span></li>
                                        <li className="flex items-start gap-3"><span className="material-symbols-outlined text-tertiary text-[20px] mt-1 shrink-0">check_circle</span><span>Owned production deployments on AWS (EC2, S3, Lambda) end-to-end for both frontend and backend.</span></li>
                                    </ul>
                                    <div className="flex flex-wrap gap-2 mt-stack-sm">
                                        {["Node.js", "React.js", "Next.js", "AWS", "Redis", "n8n", "Antigravity"].map(t => <span key={t} className="bg-primary-container px-3 py-1 rounded font-code-sm text-code-sm text-primary">{t}</span>)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="flex flex-col gap-stack-md mt-stack-lg">
                        <div className="flex items-center gap-stack-sm"><span className="material-symbols-outlined text-tertiary text-[24px]">school</span><h2 className="font-headline-md text-headline-md text-on-surface">Education</h2></div>
                        <div className="bg-surface-container rounded-xl p-stack-lg flex flex-col sm:flex-row justify-between items-start sm:items-center gap-stack-md hover:bg-surface-container-high transition-colors">
                            <div className="flex flex-col gap-base"><h3 className="font-headline-md text-[20px] leading-tight font-semibold text-on-surface">Bachelor of Technology in Computer Science Engineering</h3><span className="font-body-md text-body-md text-on-surface-variant">Sushila Devi Bansal College, Indore (Sep 2020 – Jul 2024)</span></div>
                            <div className="flex flex-col items-start sm:items-end gap-1"><span className="font-label-caps text-label-caps text-outline uppercase tracking-wider">Academic Performance</span><div className="flex items-baseline gap-2"><span className="font-display-lg-mobile text-display-lg-mobile text-tertiary">7.5</span><span className="font-body-md text-body-md text-on-surface-variant">CGPA</span></div></div>
                        </div>
                    </section>
                </div>
                <aside className="w-full lg:w-[400px] shrink-0 flex flex-col gap-stack-lg">
                    <div className="flex items-center gap-stack-sm mb-[-16px]"><span className="material-symbols-outlined text-primary text-[24px]">code_blocks</span><h2 className="font-headline-md text-headline-md text-on-surface">Technical Skills</h2></div>
                    {[
                        { title: 'Core & Frontend', icon: 'web', skills: ['JavaScript (ES6+)', 'TypeScript', 'React.js', 'Next.js', 'Tailwind CSS', 'Bootstrap', 'HTML5/CSS3'] },
                        { title: 'Backend & APIs', icon: 'dns', skills: ['Node.js', 'Express.js', 'Microservices', 'RESTful APIs', 'Java', 'Python', 'RAG'] },
                        { title: 'Databases & Cloud', icon: 'cloud', skills: ['MongoDB', 'MySQL', 'Redis', 'Prisma', 'AWS (EC2/S3/Lambda)', 'Docker', 'Firebase'] },
                        { title: 'Tools & Automation', icon: 'build', skills: ['n8n', 'Antigravity', 'Cursor', 'Git/GitHub', 'Strapi CMS', 'Postman'] }
                    ].map((cat, idx) => (
                        <div key={idx} className="bg-surface-container-low rounded-xl p-stack-md flex flex-col gap-stack-sm group">
                            <div className="flex items-center gap-2 mb-2"><span className="material-symbols-outlined text-on-surface-variant text-[20px] group-hover:text-primary transition-colors">{cat.icon}</span><h3 className="font-label-caps text-label-caps text-on-surface uppercase tracking-wider">{cat.title}</h3></div>
                            <div className="flex flex-wrap gap-2">{cat.skills.map(s => <div key={s} className="bg-surface-container-highest px-3 py-1.5 rounded flex items-center gap-2"><span className="font-code-sm text-code-sm text-on-surface-variant">{s}</span></div>)}</div>
                        </div>
                    ))}
                </aside>
            </div>
        </div>
    </div>
);

const ContactPage = () => {
    const [sent, setSent] = useState(false);
    const [sending, setSending] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSending(true);
        setTimeout(() => {
            setSending(false);
            setSent(true);
        }, 1500);
    };

    return (
        <div className="flex flex-col w-full min-h-screen pt-16">
            <div className="relative w-full overflow-hidden bg-background py-stack-lg lg:py-margin-desktop flex-1 flex items-center">
                <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
                    <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                        <defs>
                            <pattern height="10" id="network" patternUnits="userSpaceOnUse" width="10" x="0" y="0">
                                <circle className="text-tertiary-fixed" cx="2" cy="2" fill="currentColor" r="0.5"></circle>
                                <path className="text-on-surface-variant" d="M 2 2 L 10 10" stroke="currentColor" strokeWidth="0.1"></path>
                            </pattern>
                        </defs>
                        <rect fill="url(#network)" height="100" width="100" x="0" y="0"></rect>
                    </svg>
                </div>
                <div className="max-w-[1280px] mx-auto px-margin-mobile lg:px-margin-desktop relative z-10 w-full flex flex-col lg:flex-row gap-stack-lg lg:gap-margin-desktop">
                    <div className="flex-1 flex flex-col gap-stack-lg">
                        <div className="flex flex-col gap-stack-sm">
                            <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest">[04] Connect</span>
                            <h1 className="font-display-lg text-display-lg text-on-surface tracking-tight">Let's build something <br/><span className="text-tertiary">extraordinary.</span></h1>
                            <p className="font-body-md text-body-md text-on-surface-variant max-w-md mt-stack-md">Open for opportunities, architectural consultations, and full-stack development projects.</p>
                        </div>
                        <div className="flex flex-col gap-stack-md mt-stack-md">
                            {[
                                { label: 'Email', icon: 'mail', val: 'mahajanpankaj615@gmail.com', href: 'mailto:mahajanpankaj615@gmail.com' },
                                { label: 'Phone', icon: 'call', val: '+91-6263545855', href: 'tel:+916263545855' },
                                { label: 'LinkedIn', icon: 'link', val: 'pankaj-mahajan', href: 'https://linkedin.com/in/pankaj-mahajan' }
                            ].map(item => (
                                <div key={item.label} className="flex items-center gap-gutter p-stack-md bg-surface-container-low rounded-xl shadow-md border border-outline-variant/20 hover:border-secondary transition-colors group">
                                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-surface-container-highest group-hover:bg-primary/20 transition-colors">
                                        <span className="material-symbols-outlined text-secondary text-[24px]">{item.icon}</span>
                                    </div>
                                    <div className="flex flex-col gap-base">
                                        <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">{item.label}</span>
                                        <a className="font-headline-md text-headline-md text-on-surface hover:text-tertiary transition-colors" href={item.href} target={item.label === 'LinkedIn' ? '_blank' : '_self'} rel="noreferrer">{item.val}</a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex-1 w-full max-w-lg lg:ml-auto">
                        <div className="bg-surface-container rounded-2xl shadow-xl p-stack-lg border border-outline-variant/30 relative overflow-hidden backdrop-blur-md">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2"></div>
                            {!sent ? (
                                <form className="relative z-10 flex flex-col gap-stack-md" onSubmit={handleSubmit}>
                                    <div className="flex flex-col gap-stack-sm">
                                        <label className="font-label-caps text-label-caps text-on-surface uppercase" htmlFor="name">Name</label>
                                        <div className="relative">
                                            <span className="material-symbols-outlined absolute left-stack-sm top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]">person</span>
                                            <input required className="w-full bg-surface-container-highest border border-outline-variant/40 rounded-lg py-3 pl-10 pr-4 font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all" placeholder="John Doe"/>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-stack-sm">
                                        <label className="font-label-caps text-label-caps text-on-surface uppercase" htmlFor="email">Email</label>
                                        <div className="relative">
                                            <span className="material-symbols-outlined absolute left-stack-sm top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]">mail</span>
                                            <input required type="email" className="w-full bg-surface-container-highest border border-outline-variant/40 rounded-lg py-3 pl-10 pr-4 font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all" placeholder="john@example.com"/>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-stack-sm">
                                        <label className="font-label-caps text-label-caps text-on-surface uppercase" htmlFor="message">Message</label>
                                        <div className="relative">
                                            <span className="material-symbols-outlined absolute left-stack-sm top-3 text-on-surface-variant text-[18px]">chat</span>
                                            <textarea required rows={4} className="w-full bg-surface-container-highest border border-outline-variant/40 rounded-lg py-3 pl-10 pr-4 font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all resize-none" placeholder="How can I help you?"/>
                                        </div>
                                    </div>
                                    <button disabled={sending} className="mt-stack-sm w-full bg-secondary text-on-secondary font-label-caps text-label-caps uppercase tracking-wider py-4 rounded-lg flex items-center justify-center gap-base hover:bg-secondary-fixed transition-colors shadow-lg hover:shadow-secondary/20 group">
                                        {sending ? (
                                            <><span className='material-symbols-outlined text-[18px] animate-spin'>sync</span><span>Sending...</span></>
                                        ) : (
                                            <><span>Send Message</span><span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">send</span></>
                                        )}
                                    </button>
                                </form>
                            ) : (
                                <div className='flex flex-col items-center justify-center py-stack-lg text-center gap-stack-sm'>
                                    <span className='material-symbols-outlined text-tertiary text-[48px]'>check_circle</span>
                                    <h3 className='font-headline-md text-headline-md text-on-surface'>Message Sent</h3>
                                    <p className='font-body-md text-body-md text-on-surface-variant'>I will get back to you shortly.</p>
                                    <button onClick={() => setSent(false)} className="mt-4 text-secondary font-label-caps text-xs uppercase underline">Send another</button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <main className="bg-background min-h-screen">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/projects" element={<ProjectsPage />} />
                    <Route path="/experience" element={<ExperiencePage />} />
                    <Route path="/contact" element={<ContactPage />} />
                </Routes>
            </main>
            <Footer />
        </BrowserRouter>
    );
};

export default App;
