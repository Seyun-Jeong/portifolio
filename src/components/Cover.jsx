import { Link } from 'react-router-dom';
import { identity } from '../data/content';
import seyunPhoto from '../assets/seyun_jeong.jpg';

export default function Cover() {
  return (
    <header
      style={{
        borderTop: '3px solid #1a1a1a',
        borderBottom: '1px solid #1a1a1a',
        paddingTop: '18px',
        paddingBottom: '18px',
        display: 'grid',
        gridTemplateColumns: '1fr 260px',
        columnGap: '32px',
        alignItems: 'end',
        marginBottom: '0',
      }}
    >
      <div>
        <div
          style={{
            fontFamily: 'Georgia, serif',
            fontSize: '13px',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: '#555',
            marginBottom: '10px',
            display: 'flex',
            gap: '20px',
            alignItems: 'center',
          }}
        >
          <span>Portfolio · {new Date().getFullYear()}</span>
          <Link
            to="/blog"
            className="no-print"
            style={{
              color: '#888',
              textDecoration: 'none',
              fontSize: '11px',
              letterSpacing: '0.15em',
            }}
          >
            Writing →
          </Link>
          <button
            className="no-print"
            onClick={() => window.print()}
            style={{
              background: 'none',
              border: '1px solid #ccc',
              borderRadius: '3px',
              cursor: 'pointer',
              color: '#888',
              fontSize: '11px',
              letterSpacing: '0.12em',
              padding: '2px 8px',
              fontFamily: 'Georgia, serif',
            }}
          >
            Print PDF
          </button>
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: '20px' }}>
          <img
            src={seyunPhoto}
            alt="Seyun Jeong"
            style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              objectFit: 'cover',
              flexShrink: 0,
              marginBottom: '4px',
              border: '1px solid #e0e0e0',
            }}
          />
          <div>
            <h1
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: 'clamp(36px, 5vw, 62px)',
                fontWeight: '700',
                lineHeight: '1.0',
                letterSpacing: '-0.5px',
                color: '#1a1a1a',
                margin: '0 0 8px 0',
              }}
            >
              {identity.name}
            </h1>
            <p
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: '17px',
                fontStyle: 'italic',
                color: '#444',
                margin: '0',
                letterSpacing: '0.01em',
              }}
            >
              {identity.title}
            </p>
          </div>
        </div>
      </div>

      <div
        style={{
          fontFamily: 'system-ui, sans-serif',
          fontSize: '11px',
          color: '#555',
          lineHeight: '1.8',
          borderLeft: '1px solid #ccc',
          paddingLeft: '20px',
          paddingBottom: '4px',
        }}
      >
        <div style={{ marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#999', fontSize: '10px' }}>
          Contact
        </div>
        <div>
          <a
            href={`mailto:${identity.email}`}
            style={{ color: '#1a1a1a', textDecoration: 'none' }}
          >
            {identity.email}
          </a>
        </div>
        <div>
          <a
            href={identity.github}
            target="_blank"
            rel="noreferrer"
            style={{ color: '#1a1a1a', textDecoration: 'none' }}
          >
            {identity.github.replace('https://', '')}
          </a>
        </div>
        <div>
          <a
            href={identity.linkedin}
            target="_blank"
            rel="noreferrer"
            style={{ color: '#1a1a1a', textDecoration: 'none' }}
          >
            linkedin.com/in/jeongseyun7
          </a>
        </div>
      </div>
    </header>
  );
}
