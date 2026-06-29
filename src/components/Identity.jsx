import { identity } from '../data/content';

export default function Identity() {
  return (
    <section style={{ marginBottom: '0' }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          columnGap: '32px',
        }}
      >
        <div style={{ gridColumn: '1 / 3' }}>
          <SectionLabel>About</SectionLabel>
          <p
            style={{
              fontFamily: 'system-ui, sans-serif',
              fontSize: '15px',
              lineHeight: '1.7',
              color: '#1a1a1a',
              margin: '0',
            }}
          >
            {identity.bio}
          </p>
        </div>

        <div style={{ gridColumn: '3 / 4', borderLeft: '1px solid #ccc', paddingLeft: '24px' }}>
          <SectionLabel>Currently</SectionLabel>
          <p
            style={{
              fontFamily: 'system-ui, sans-serif',
              fontSize: '13px',
              lineHeight: '1.65',
              color: '#444',
              margin: '0 0 16px 0',
            }}
          >
            Graduate researcher in machine learning systems. Exploring long-context inference optimization, collaborative development tools, and data-centric AI.
          </p>
          <p
            style={{
              fontFamily: 'system-ui, sans-serif',
              fontSize: '13px',
              lineHeight: '1.65',
              color: '#444',
              margin: '0',
            }}
          >
            Open to research collaborations, internships, and full-time engineering roles beginning 2025.
          </p>
        </div>
      </div>
    </section>
  );
}

function SectionLabel({ children }) {
  return (
    <div
      style={{
        fontFamily: 'system-ui, sans-serif',
        fontSize: '10px',
        fontWeight: '600',
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color: '#999',
        marginBottom: '10px',
        paddingBottom: '6px',
        borderBottom: '1px solid #e0e0e0',
      }}
    >
      {children}
    </div>
  );
}
