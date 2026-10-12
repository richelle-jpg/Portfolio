import { Download, Github, Linkedin, Mail } from 'lucide-react';
import ProfilePhoto from './ProfilePhoto.jsx';
import { profile, skills, experience, education, projects } from '../data/content.js';

export function Hero() {
  return (
    <header className="hero container hero-grid" id="top">
      <div>
        <p className="eyebrow">Portfolio</p>
        <h1>{profile.name}</h1>
        <h2>{profile.title}</h2>
        <p className="lead">{profile.intro}</p>
        <p className="muted">{profile.location} · {profile.availability}</p>
        <div className="actions">
          <a className="btn primary" href={profile.cv} download><Download size={18} aria-hidden="true" /> Download CV</a>
          <a className="btn" href={profile.github} target="_blank" rel="noreferrer"><Github size={18} aria-hidden="true" /> GitHub</a>
        </div>
      </div>
      <ProfilePhoto name={profile.name} />
    </header>
  );
}

export const Section = ({ id, title, children }) => (
  <section id={id} className="container section"><h2 className="section-title">{title}</h2>{children}</section>
);

export const Skills = () => (
  <Section id="skills" title="Technical Skills">
    <div className="grid">{skills.map((s) => (
      <div className="card" key={s.group}><h3>{s.group}</h3><ul className="chips">{s.items.map((i) => <li key={i}>{i}</li>)}</ul></div>
    ))}</div>
  </Section>
);

export const Projects = () => (
  <Section id="projects" title="Featured Projects">
    <div className="grid two">{projects.map((p) => (
      <article className="card" key={p.name}>
        <span className="tag">{p.tag}</span><h3>{p.name}</h3><p>{p.text}</p>
        <ul className="chips">{p.tech.map((t) => <li key={t}>{t}</li>)}</ul>
        <a className="link" href={p.href}>{p.label} →</a>
      </article>
    ))}</div>
  </Section>
);

export const Experience = () => (
  <Section id="experience" title="Experience">
    <ol className="timeline">{experience.map((e) => (
      <li key={e.role}><h3>{e.role}</h3><p className="muted">{e.org} · {e.period}</p><ul>{e.points.map((p) => <li key={p}>{p}</li>)}</ul></li>
    ))}</ol>
  </Section>
);

export const Education = () => (
  <Section id="education" title="Education, Awards & Certifications">
    <div className="card"><h3>{education.degree}</h3><p className="muted">{education.school} · {education.date}</p>
      <h4>Awards</h4><ul>{education.awards.map((a) => <li key={a}>{a}</li>)}</ul>
      <h4>Certifications</h4><ul>{education.certs.map((c) => <li key={c}>{c}</li>)}</ul></div>
  </Section>
);

export const Contact = () => (
  <Section id="contact" title="Contact">
    <p className="lead">Open to QA Automation and remote entry-level opportunities.</p>
    <div className="actions">
      <a className="btn primary" href={`mailto:${profile.email}`}><Mail size={18} aria-hidden="true" /> Email</a>
      <a className="btn" href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={18} aria-hidden="true" /> LinkedIn</a>
      <a className="btn" href={profile.github} target="_blank" rel="noreferrer"><Github size={18} aria-hidden="true" /> GitHub</a>
    </div>
  </Section>
);
