import React, { useEffect, useState } from "react";
import {
  ArrowDown, ArrowUpRight, BarChart3, BrainCircuit, BriefcaseBusiness,
  Database, Download, ExternalLink, Github,
  GraduationCap, Linkedin, Mail, Menu, Sparkles, X
} from "lucide-react";

const LINKS = {
  github: "https://github.com/EshwarRamesh7",
  linkedin: "https://www.linkedin.com/in/eshwar-ramesh-9a4652251",
  email: "mailto:eshwarramesh1985@gmail.com",
  resume: "https://media.base44.com/files/public/6af6a7dc0662f1167a091ed6/23ea0fae6_Eshwar_Resume__2_.pdf",
};

const projects = [
  {
    number: "01",
    category: "MSc Research · Machine Learning",
    title: "GDP Growth Prediction",
    accent: "mint",
    summary: "Evaluating the impact of macroeconomic and development indicators on GDP growth using machine learning and explainable AI.",
    detail: "A cross-country research study built from World Bank indicators spanning 2000–2023. Nineteen source datasets were combined and quality-checked into a modelling table of 5,977 observations and 45 features.",
    tools: ["Python", "Pandas", "Scikit-learn", "XGBoost", "SHAP", "Power BI"],
    metrics: [
      ["257", "countries covered"],
      ["5,977", "modelling rows"],
      ["0.7361", "XGBoost test R²"],
      ["3.61", "holdout RMSE"],
    ],
    workflow: ["Integrated 19 World Bank datasets and assessed data quality", "Compared Linear Regression, Random Forest and XGBoost", "Evaluated on a 2019–2023 holdout period", "Used SHAP to interpret feature contributions", "Presented findings through a three-page Power BI dashboard"],
    caveat: "Model performance is specific to this dataset and holdout period; it should not be interpreted as causal evidence about GDP growth.",
    href: "https://github.com/EshwarRamesh7",
    linkLabel: "Explore research",
    visual: "gdp",
  },
  {
    number: "02",
    category: "Business Intelligence · Market Research",
    title: "Job Market Intelligence",
    accent: "violet",
    summary: "A comparative analysis of Data Analyst skill demand and salary patterns across the United States and India.",
    detail: "A data pipeline joining job-posting datasets, a 134-skill vocabulary, MySQL analysis and a three-page Power BI report to explore how the two markets differ.",
    tools: ["Python", "Pandas", "MySQL", "Excel", "Power BI", "Adzuna API"],
    metrics: [
      ["134", "skills classified"],
      ["50K", "US postings · approx."],
      ["544", "India postings"],
      ["3", "dashboard pages"],
    ],
    workflow: ["Collected and cleaned US and India job-posting data", "Modelled postings and skills in MySQL", "Analysed skill demand, salary patterns, locations and co-occurring skills", "Built US, India and comparison dashboard pages"],
    caveat: "The US and India samples differ in size and source. India descriptions may be truncated by the API, so comparisons are directional rather than perfectly balanced.",
    href: "https://github.com/EshwarRamesh7/Job-Market-Skill-Demand-Analysis-US-vs-India",
    linkLabel: "View project repository",
    visual: "market",
  },
  {
    number: "03",
    category: "Power BI · Retail Analytics",
    title: "Global Retail Performance",
    accent: "amber",
    summary: "A three-page executive dashboard examining sales, profitability, discounting and geographic performance.",
    detail: "An interactive Power BI report built on the Global Superstore dataset, with transaction activity across markets, regions and product categories.",
    tools: ["Power BI", "DAX", "Power Query", "Python"],
    metrics: [
      ["51,290", "transaction rows"],
      ["147", "countries"],
      ["7", "market groups"],
      ["3", "report pages"],
    ],
    workflow: ["Prepared the retail dataset and analytical model", "Created DAX measures for sales, profit, margin and year-over-year analysis", "Built executive, profitability and geographic views", "Used decomposition analysis to investigate profit drivers"],
    caveat: "51,290 refers to transaction rows, not distinct orders. The project summary reports approximately $12.64M sales and $1.47M profit; validate measures against the source workbook before external use.",
    href: "https://github.com/EshwarRamesh7/Global-superstore-powerbi-dashboard",
    linkLabel: "View dashboard repository",
    visual: "retail",
  },
];

const secondary = [
  { title: "Lead Conversion Scoring", tools: "Python · Logistic Regression · Model Evaluation", href: "https://github.com/EshwarRamesh7/Lead-scoring-case-study", icon: BriefcaseBusiness },
  { title: "Customer Behaviour Analytics", tools: "PySpark · RFM Segmentation · Market Basket Analysis", href: "https://github.com/EshwarRamesh7/Big-Data-Project-Customer-Behavior-Analysis", icon: BarChart3 },
  { title: "Amazon Review Sentiment Analytics", tools: "Python · NLP · TF-IDF · Tableau", href: "https://github.com/EshwarRamesh7/Web-Social-Media-Analytics", icon: BrainCircuit },
  { title: "RSVP Movies SQL Analysis", tools: "MySQL · Joins · CTEs · Window Functions", href: "https://github.com/EshwarRamesh7/-RSVP-Movies-Global-Release-Analytics-", icon: Database },
];

const skills = [
  { title: "Analytics & Programming", items: ["SQL", "Python", "Pandas", "NumPy", "Excel"] },
  { title: "Business Intelligence", items: ["Power BI", "DAX", "Power Query", "Tableau"] },
  { title: "Machine Learning", items: ["Regression", "Random Forest", "XGBoost", "Logistic Regression", "SHAP"] },
  { title: "Data Engineering & NLP", items: ["MySQL", "PySpark", "ETL", "TF-IDF", "NLTK"] },
];

function ProjectVisual({ type }) {
  if (type === "gdp") return <div className="visual visual-gdp"><div className="visual-grid" /><div className="gdp-orbit orbit-one" /><div className="gdp-orbit orbit-two" /><div className="gdp-core"><span>GDP</span><b>AI</b></div><div className="visual-tag tag-one">SHAP</div><div className="visual-tag tag-two">WORLD BANK</div><div className="visual-tag tag-three">2000—2023</div></div>;
  if (type === "market") return <div className="visual visual-market"><div className="market-top"><span>SKILL DEMAND</span><span>US / INDIA</span></div><div className="market-bars">{[68,92,55,77,43,83,61].map((v,i)=><div className="market-bar-wrap" key={i}><div className="market-bar" style={{height:v+"%"}} /><div className="market-bar secondary-bar" style={{height:(v*0.62)+"%"}} /></div>)}</div><div className="market-legend"><span><i/> UNITED STATES</span><span><i/> INDIA</span></div><div className="market-bottom"><b>134</b><span>skills mapped<br/>across two markets</span></div></div>;
  return <div className="visual visual-retail"><div className="retail-head"><span>GLOBAL SUPERSTORE</span><span>2011 — 2014</span></div><div className="retail-kpis"><div><small>SALES</small><strong>$12.64M</strong></div><div><small>PROFIT</small><strong>$1.47M</strong></div><div><small>MARGIN</small><strong>11.6%</strong></div></div><div className="retail-chart"><div className="retail-chart-line" /><div className="retail-chart-fill" /><div className="retail-axis"><span>2011</span><span>2012</span><span>2013</span><span>2014</span></div></div><div className="retail-foot"><span>SALES & PROFITABILITY</span><span>POWER BI / DAX</span></div></div>;
}

function ProjectCard({ project, onOpen }) {
  return <article className={"project-card "+project.accent}>
    <div className="project-topline"><span>{project.number} / FEATURED PROJECT</span><span>{project.category}</span></div>
    <ProjectVisual type={project.visual} />
    <div className="project-copy">
      <div className="project-title-row"><h3>{project.title}</h3><button className="icon-button" onClick={()=>onOpen(project)} aria-label={"Read more about "+project.title}><ArrowUpRight size={20}/></button></div>
      <p className="project-summary">{project.summary}</p>
      <div className="tool-list">{project.tools.map(t=><span key={t}>{t}</span>)}</div>
      <button className="text-link" onClick={()=>onOpen(project)}>Explore the work <ArrowUpRight size={16}/></button>
    </div>
  </article>;
}

function ProjectModal({ project, onClose }) {
  useEffect(()=>{ if(!project) return; const fn=e=>{if(e.key==="Escape")onClose()}; window.addEventListener("keydown",fn); return ()=>window.removeEventListener("keydown",fn); },[project,onClose]);
  if(!project) return null;
  return <div className="modal-backdrop" onMouseDown={e=>{if(e.target===e.currentTarget)onClose()}}>
    <section className="project-modal">
      <button className="modal-close" onClick={onClose} aria-label="Close"><X size={20}/></button>
      <div className="eyebrow">{project.number} / {project.category}</div>
      <h2>{project.title}</h2>
      <p className="modal-detail">{project.detail}</p>
      <div className="modal-metrics">{project.metrics.map(([n,l])=><div key={l}><strong>{n}</strong><span>{l}</span></div>)}</div>
      <h4>HOW THE WORK WAS DONE</h4>
      <ol className="workflow-list">{project.workflow.map((s,i)=><li key={s}><span>0{i+1}</span>{s}</li>)}</ol>
      <div className="caveat"><b>Interpretation note</b><p>{project.caveat}</p></div>
      <div className="modal-actions"><a className="button button-primary" href={project.href} target="_blank" rel="noreferrer">{project.linkLabel}<ExternalLink size={16}/></a><button className="button button-quiet" onClick={onClose}>Close details</button></div>
    </section>
  </div>;
}

export default function App() {
  const [activeProject,setActiveProject] = useState(null);
  const [menuOpen,setMenuOpen] = useState(false);
  const [scrolled,setScrolled] = useState(false);
  useEffect(()=>{const f=()=>setScrolled(window.scrollY>20);window.addEventListener("scroll",f);return()=>window.removeEventListener("scroll",f)},[]);
  const closeMenu=()=>setMenuOpen(false);
  return <div className="site-shell">
    <header className={"site-header "+(scrolled?"is-scrolled":"")}>
      <a href="#top" className="brand" onClick={closeMenu}><span className="brand-mark">ER<span>.</span></span><span className="brand-name">Eshwar Ramesh</span></a>
      <button className="mobile-menu" onClick={()=>setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen?<X/>:<Menu/>}</button>
      <nav className={menuOpen?"nav-open":""}>
        <a href="#about" onClick={closeMenu}>About</a><a href="#work" onClick={closeMenu}>Selected work</a><a href="#skills" onClick={closeMenu}>Skills</a><a href="#contact" onClick={closeMenu}>Contact</a>
        <a className="nav-resume" href={LINKS.resume} target="_blank" rel="noreferrer" onClick={closeMenu}>Resume <Download size={14}/></a>
      </nav>
    </header>

    <main id="top">
      <section className="hero section-wrap">
        <div className="hero-copy">
          <div className="availability"><span className="availability-dot"/> DATA ANALYTICS PORTFOLIO <span className="availability-line"/></div>
          <h1>Turning data<br/>into <em>direction.</em></h1>
          <p className="hero-lede">I’m Eshwar — a data analyst with an economics foundation and an MSc in Data Science. I turn complex datasets into clear analysis, useful dashboards and explainable models.</p>
          <div className="hero-actions"><a className="button button-primary" href="#work">Explore my work <ArrowDown size={16}/></a><a className="button button-outline" href={LINKS.linkedin} target="_blank" rel="noreferrer">Let’s connect <ArrowUpRight size={16}/></a></div>
          <div className="hero-footnote"><span>CHENNAI, INDIA</span><span>SQL · PYTHON · POWER BI · ML</span></div>
        </div>
        <div className="hero-art" aria-label="Abstract data visualization">
          <div className="art-ring ring-a"/><div className="art-ring ring-b"/><div className="art-ring ring-c"/>
          <div className="art-center"><span>DATA</span><strong>→</strong><span>INSIGHT</span></div>
          <div className="art-node node-a"><BarChart3 size={18}/></div><div className="art-node node-b"><Database size={18}/></div><div className="art-node node-c"><BrainCircuit size={18}/></div>
          <div className="art-label label-a">ANALYSE</div><div className="art-label label-b">EXPLAIN</div><div className="art-label label-c">DECIDE</div>
        </div>
        <div className="hero-scroll"><span/> SCROLL TO EXPLORE</div>
      </section>

      <section className="proof-strip"><div><strong>01</strong><span>ECONOMICS<br/>FOUNDATION</span></div><div><strong>02</strong><span>MSc DATA<br/>SCIENCE</span></div><div><strong>03</strong><span>END-TO-END<br/>ANALYTICS</span></div><div><strong>04</strong><span>EXPLAINABLE<br/>MODELLING</span></div></section>

      <section className="about-section section-wrap" id="about">
        <div className="section-kicker"><span>01</span> ABOUT ME</div>
        <div className="about-grid">
          <h2>Curiosity first.<br/><em>Clarity always.</em></h2>
          <div className="about-copy"><p>I’m a data analyst with a BA in Economics and an MSc in Data Science from Liverpool John Moores University. My academic research is complete, including the thesis and final presentation.</p><p>My work brings together business intelligence, statistical thinking and machine learning. I enjoy the full analytical process: framing a question, preparing data, testing an approach and communicating what the results mean.</p><p>I care about more than a polished chart or a high model score. Good analysis should be reproducible, honest about its limitations and useful to the person making a decision.</p><div className="education-line"><GraduationCap size={19}/><span><b>MSc Data Science</b> · Liverpool John Moores University</span></div></div>
        </div>
      </section>

      <section className="work-section section-wrap" id="work">
        <div className="section-heading"><div><div className="section-kicker"><span>02</span> SELECTED WORK</div><h2>Three projects.<br/><em>Three ways to think.</em></h2></div><p>A focused selection that shows how I work across research, market intelligence and business reporting.</p></div>
        <div className="projects-grid">{projects.map(p=><ProjectCard key={p.number} project={p} onOpen={setActiveProject}/>)}</div>
        <div className="more-work"><div><span className="eyebrow">MORE FROM THE NOTEBOOK</span><h3>More questions, more ways to analyse.</h3></div><div className="secondary-list">{secondary.map((item,i)=>{const Icon=item.icon;return <a href={item.href} target="_blank" rel="noreferrer" key={item.title} className="secondary-item"><span className="secondary-icon"><Icon size={18}/></span><span className="secondary-text"><b>{item.title}</b><small>{item.tools}</small></span><ArrowUpRight size={17}/></a>})}</div></div>
      </section>

      <section className="skills-section section-wrap" id="skills">
        <div className="section-kicker"><span>03</span> TOOLKIT</div><div className="skills-head"><h2>Tools are the means.<br/><em>Thinking is the method.</em></h2><p>A practical toolkit built around analysis, reporting and model interpretation.</p></div>
        <div className="skills-grid">{skills.map((s,i)=><div className="skill-card" key={s.title}><span className="skill-index">0{i+1}</span><h3>{s.title}</h3><div>{s.items.map(x=><span key={x}>{x}</span>)}</div></div>)}</div>
      </section>

      <section className="contact-section section-wrap" id="contact">
        <div className="contact-orbit"><div/><div/><div/><Sparkles size={27}/></div>
        <div className="section-kicker"><span>04</span> NEXT CONVERSATION</div><h2>Let’s make data<br/><em>mean something.</em></h2><p>I’m interested in Data Analyst and BI Analyst opportunities where I can contribute thoughtful analysis, dependable reporting and clear communication.</p>
        <div className="contact-actions"><a className="button button-primary" href={LINKS.email}>Start a conversation <Mail size={16}/></a><a className="button button-outline" href={LINKS.resume} target="_blank" rel="noreferrer">Download resume <Download size={16}/></a></div>
        <div className="social-links"><a href={LINKS.github} target="_blank" rel="noreferrer"><Github size={17}/> GitHub <ArrowUpRight size={13}/></a><a href={LINKS.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn <ArrowUpRight size={13}/></a><a href={LINKS.email}><Mail size={17}/> Email <ArrowUpRight size={13}/></a></div>
      </section>
    </main>
    <footer className="site-footer"><a href="#top" className="brand"><span className="brand-mark">ER<span>.</span></span></a><span>© {new Date().getFullYear()} ESHWAR RAMESH · BUILT WITH CURIOSITY</span><a href="#top">BACK TO TOP ↑</a></footer>
    <ProjectModal project={activeProject} onClose={()=>setActiveProject(null)}/>
  </div>;
}