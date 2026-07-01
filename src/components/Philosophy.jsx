import { philosophy } from '../data/content';

export default function Philosophy() {
  return (
    <section>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 2fr',
          columnGap: '48px',
          alignItems: 'center',
          padding: '32px 0',
          borderTop: '3px solid #1a1a1a',
          borderBottom: '1px solid #1a1a1a',
        }}
      >
        <div>
          <div
            style={{
              fontFamily: 'system-ui, sans-serif',
              fontSize: '10px',
              fontWeight: '600',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#999',
              marginBottom: '14px',
            }}
          >
            Philosophy
          </div>
          <blockquote
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: 'clamp(22px, 3vw, 32px)',
              fontWeight: '700',
              fontStyle: 'italic',
              lineHeight: '1.25',
              color: '#1a1a1a',
              margin: '0',
              letterSpacing: '-0.3px',
            }}
          >
            &ldquo;{philosophy.motto}&rdquo;
          </blockquote>
          {philosophy.attribution && (
            <p
              style={{
                fontFamily: 'system-ui, sans-serif',
                fontSize: '12px',
                color: '#888',
                marginTop: '10px',
                letterSpacing: '0.05em',
              }}
            >
              {philosophy.attribution}
            </p>
          )}
        </div>

        <div>
          <p
            style={{
              fontFamily: 'system-ui, sans-serif',
              fontSize: '15px',
              lineHeight: '1.7',
              color: '#444',
              margin: '0',
            }}
          >
            {philosophy.statement}
          </p>
        </div>
      </div>

      <footer
        style={{
          fontFamily: 'system-ui, sans-serif',
          fontSize: '11px',
          color: '#aaa',
          paddingTop: '16px',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <span>Seyun Jeong · {new Date().getFullYear()}</span>
        <span></span>
      </footer>
    </section>
  );
}
