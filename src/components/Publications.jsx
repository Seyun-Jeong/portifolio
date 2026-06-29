import { publications } from '../data/content';

export default function Publications() {
  return (
    <section>
      <SectionHeader>Selected Publications</SectionHeader>
      <div>
        {publications.map((pub, i) => (
          <div key={pub.id}>
            <article
              style={{
                display: 'grid',
                gridTemplateColumns: '48px 1fr 80px',
                columnGap: '24px',
                alignItems: 'start',
                padding: '18px 0',
              }}
            >
              <div
                style={{
                  fontFamily: 'Georgia, serif',
                  fontSize: '28px',
                  fontWeight: '700',
                  color: '#d8d4c8',
                  lineHeight: '1',
                  paddingTop: '3px',
                  textAlign: 'right',
                }}
              >
                {String(i + 1).padStart(2, '0')}
              </div>

              <div>
                <h3
                  style={{
                    fontFamily: 'Georgia, serif',
                    fontSize: '17px',
                    fontWeight: '700',
                    lineHeight: '1.35',
                    color: '#1a1a1a',
                    margin: '0 0 6px 0',
                    letterSpacing: '-0.1px',
                  }}
                >
                  {pub.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'system-ui, sans-serif',
                    fontSize: '13px',
                    lineHeight: '1.6',
                    color: '#555',
                    margin: '0',
                  }}
                >
                  {pub.description}
                </p>
              </div>

              <div
                style={{
                  textAlign: 'right',
                  paddingTop: '3px',
                }}
              >
                <div
                  style={{
                    fontFamily: 'system-ui, sans-serif',
                    fontSize: '11px',
                    fontWeight: '700',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    color: '#1a1a1a',
                    marginBottom: '2px',
                  }}
                >
                  {pub.venue}
                </div>
                <div
                  style={{
                    fontFamily: 'system-ui, sans-serif',
                    fontSize: '11px',
                    color: '#999',
                  }}
                >
                  {pub.year}
                </div>
              </div>
            </article>
            {i < publications.length - 1 && (
              <hr style={{ border: 'none', borderTop: '1px solid #e8e4da', margin: '0' }} />
            )}
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
