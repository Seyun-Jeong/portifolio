import { Routes, Route } from 'react-router-dom';
import './App.css';
import { projects } from './data/content';
import Cover from './components/Cover';
import Identity from './components/Identity';
import Project from './components/Project';
import Publications from './components/Publications';
import Skills from './components/Skills';
import Philosophy from './components/Philosophy';
import BlogIndex from './pages/BlogIndex';
import BlogPost from './pages/BlogPost';

const SECTION_DIVIDER = (
  <hr
    style={{
      border: 'none',
      borderTop: '1px solid #999',
      margin: '36px 0',
    }}
  />
);

function ProjectsSection() {
  const row1 = projects.slice(0, 2);
  const row2 = projects.slice(2);

  return (
    <section>
      <SectionHeader>Projects</SectionHeader>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          columnGap: '40px',
        }}
      >
        {row1.map((project, i) => (
          <Project
            key={project.id}
            name={project.name}
            stack={project.stack}
            description={project.description}
            year={project.year}
            category={project.category}
            hasBorderRight={i % 2 === 0}
          />
        ))}
      </div>
      {row2.length > 0 && (
        <>
          <hr
            style={{
              border: 'none',
              borderTop: '1px solid #e8e4da',
              margin: '0 0 0 0',
            }}
          />
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              columnGap: '40px',
            }}
          >
            {row2.map((project, i) => (
              <Project
                key={project.id}
                name={project.name}
                stack={project.stack}
                description={project.description}
                year={project.year}
                category={project.category}
                hasBorderRight={i % 2 === 0}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}

function SectionHeader({ children }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        marginBottom: '20px',
      }}
    >
      <h2
        style={{
          fontFamily: 'Georgia, serif',
          fontSize: '13px',
          fontWeight: '400',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: '#1a1a1a',
          margin: '0',
          whiteSpace: 'nowrap',
        }}
      >
        {children}
      </h2>
      <div style={{ flex: 1, height: '1px', background: '#1a1a1a' }} />
    </div>
  );
}

function Portfolio() {
  return (
    <div
      style={{
        maxWidth: '1080px',
        margin: '0 auto',
        padding: '32px 40px 60px',
        backgroundColor: '#fffef7',
        minHeight: '100vh',
      }}
    >
      <Cover />

      <div style={{ marginTop: '32px' }}>
        <Identity />
      </div>

      {SECTION_DIVIDER}

      <ProjectsSection />

      {SECTION_DIVIDER}

      <Publications />

      {SECTION_DIVIDER}

      <Skills />

      <div style={{ marginTop: '36px' }}>
        <Philosophy />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="/blog" element={<BlogIndex />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
    </Routes>
  );
}
