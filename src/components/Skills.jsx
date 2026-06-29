import { skills } from '../data/content';

export default function Skills() {
  return (
    <section>
      <SectionHeader>Skills & Technologies</SectionHeader>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          columnGap: '0',
          paddingTop: '16px',
        }}
      >
        {skills.map((group, i) => (
          <div
            key={group.category}
            style={{
              borderLeft: i > 0 ? '1px solid #ddd' : 'none',
              paddingLeft: i > 0 ? '20px' : '0',
              paddingRight: '20px',
            }}
          >
            <div
              style={{
                fontFamily: 'system-ui, sans-serif',
                fontSize: '10px',
                fontWeight: '700',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: '#999',
                marginBottom: '10px',
              }}
            >
              {group.category}
            </div>
            <ul
              style={{
                margin: '0',
                padding: '0',
                listStyle: 'none',
              }}
            >
              {group.items.map((item) => (
                <li
                  key={item}
                  style={{
                    fontFamily: 'system-ui, sans-serif',
                    fontSize: '13px',
                    lineHeight: '1.8',
                    color: '#1a1a1a',
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
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
        marginBottom: '0',
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
