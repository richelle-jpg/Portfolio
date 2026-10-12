import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Hero, Skills, Projects, Experience, Education, Contact } from './components/Sections.jsx';
import CaseStudy from './components/CaseStudy.jsx';
import CodeSamples from './components/CodeSamples.jsx';
import { profile } from './data/content.js';

const links = [['skills', 'Skills'], ['projects', 'Projects'], ['case-study', 'Case Study'], ['code', 'Code'], ['experience', 'Experience'], ['education', 'Education'], ['contact', 'Contact']];

export default function App() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="nav" aria-label="Main">
        <div className="container nav-inner">
          <a href="#top" className="brand">{profile.name}</a>
          <button className="menu" aria-expanded={open} aria-label="Toggle menu" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
          <ul className={open ? 'open' : ''}>{links.map(([id, l]) => <li key={id}><a href={`#${id}`} onClick={() => setOpen(false)}>{l}</a></li>)}</ul>
        </div>
      </nav>
      <main><Hero /><Skills /><Projects /><CaseStudy /><CodeSamples /><Experience /><Education /><Contact /></main>
      <footer className="container footer">© {new Date().getFullYear()} {profile.name}</footer>
    </>
  );
}
