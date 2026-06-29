import { Link } from 'react-router-dom';
import { posts } from '../data/posts';
import { identity } from '../data/content';

const BORDER_TOP = '3px solid #1a1a1a';
const BORDER_THIN = '1px solid #1a1a1a';
const RULE = '1px solid #ccc';
const BG = '#fffef7';
const SERIF = 'Georgia, serif';
const SANS = 'system-ui, sans-serif';

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function BlogIndex() {
  return (
    <div
      style={{
        maxWidth: '860px',
        margin: '0 auto',
        padding: '32px 40px 80px',
        backgroundColor: BG,
        minHeight: '100vh',
        fontFamily: SERIF,
      }}
    >
      {/* Masthead */}
      <header
        style={{
          borderTop: BORDER_TOP,
          borderBottom: BORDER_THIN,
          paddingTop: '18px',
          paddingBottom: '18px',
          marginBottom: '40px',
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          alignItems: 'end',
          columnGap: '32px',
        }}
      >
        <div>
          <div
            style={{
              fontSize: '11px',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#555',
              marginBottom: '8px',
              fontFamily: SERIF,
            }}
          >
            Writing — {identity.name}
          </div>
          <h1
            style={{
              fontFamily: SERIF,
              fontSize: 'clamp(28px, 4vw, 44px)',
              fontWeight: '700',
              lineHeight: '1.05',
              color: '#1a1a1a',
              margin: 0,
            }}
          >
            Notes & Essays
          </h1>
        </div>
        <nav
          style={{
            fontFamily: SANS,
            fontSize: '12px',
            display: 'flex',
            gap: '20px',
            paddingBottom: '4px',
            color: '#555',
          }}
        >
          <Link to="/" style={{ color: '#1a1a1a', textDecoration: 'none' }}>
            Portfolio
          </Link>
          <span style={{ color: '#1a1a1a', fontWeight: '600' }}>Writing</span>
        </nav>
      </header>

      {/* Post list */}
      <div>
        {posts.map((post, i) => (
          <article
            key={post.slug}
            style={{
              paddingBottom: '32px',
              marginBottom: '32px',
              borderBottom: i < posts.length - 1 ? RULE : 'none',
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '120px 1fr',
                columnGap: '32px',
                alignItems: 'start',
              }}
            >
              {/* Date column */}
              <div
                style={{
                  fontFamily: SANS,
                  fontSize: '11px',
                  color: '#888',
                  letterSpacing: '0.04em',
                  paddingTop: '4px',
                }}
              >
                {formatDate(post.date)}
              </div>

              {/* Content column */}
              <div>
                <Link
                  to={`/blog/${post.slug}`}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <h2
                    style={{
                      fontFamily: SERIF,
                      fontSize: '20px',
                      fontWeight: '700',
                      lineHeight: '1.3',
                      color: '#1a1a1a',
                      margin: '0 0 8px 0',
                    }}
                  >
                    {post.title}
                  </h2>
                </Link>
                <p
                  style={{
                    fontFamily: SERIF,
                    fontSize: '14px',
                    color: '#444',
                    lineHeight: '1.65',
                    margin: '0 0 12px 0',
                  }}
                >
                  {post.excerpt}
                </p>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontFamily: SANS,
                        fontSize: '10px',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: '#888',
                        border: '1px solid #ccc',
                        padding: '2px 7px',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Footer */}
      <footer
        style={{
          borderTop: RULE,
          paddingTop: '24px',
          marginTop: '16px',
          fontFamily: SANS,
          fontSize: '11px',
          color: '#aaa',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <span>{identity.name}</span>
        <Link to="/" style={{ color: '#888', textDecoration: 'none' }}>
          ← Back to portfolio
        </Link>
      </footer>
    </div>
  );
}
