import { useParams, Link, Navigate } from 'react-router-dom';
import { posts } from '../data/posts';
import { identity } from '../data/content';

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

export default function BlogPost() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) return <Navigate to="/blog" replace />;

  const currentIndex = posts.indexOf(post);
  const prev = posts[currentIndex + 1] ?? null;
  const next = posts[currentIndex - 1] ?? null;

  return (
    <div
      style={{
        maxWidth: '700px',
        margin: '0 auto',
        padding: '32px 40px 80px',
        backgroundColor: BG,
        minHeight: '100vh',
        fontFamily: SERIF,
      }}
    >
      {/* Top nav */}
      <nav
        style={{
          fontFamily: SANS,
          fontSize: '11px',
          color: '#888',
          display: 'flex',
          gap: '16px',
          marginBottom: '40px',
          borderBottom: '1px solid #ddd',
          paddingBottom: '14px',
        }}
      >
        <Link to="/" style={{ color: '#555', textDecoration: 'none' }}>
          {identity.name}
        </Link>
        <span style={{ color: '#ccc' }}>/</span>
        <Link to="/blog" style={{ color: '#555', textDecoration: 'none' }}>
          Writing
        </Link>
        <span style={{ color: '#ccc' }}>/</span>
        <span style={{ color: '#1a1a1a' }}>{post.title}</span>
      </nav>

      {/* Article header */}
      <header style={{ marginBottom: '40px', borderBottom: '1px solid #ccc', paddingBottom: '28px' }}>
        <div
          style={{
            fontFamily: SANS,
            fontSize: '10px',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: '#999',
            marginBottom: '12px',
          }}
        >
          {formatDate(post.date)}
        </div>
        <h1
          style={{
            fontFamily: SERIF,
            fontSize: 'clamp(24px, 4vw, 36px)',
            fontWeight: '700',
            lineHeight: '1.2',
            color: '#1a1a1a',
            margin: '0 0 16px 0',
            letterSpacing: '-0.3px',
          }}
        >
          {post.title}
        </h1>
        <p
          style={{
            fontFamily: SERIF,
            fontSize: '16px',
            fontStyle: 'italic',
            color: '#555',
            lineHeight: '1.55',
            margin: '0 0 16px 0',
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
      </header>

      {/* Article body */}
      <article>
        {post.sections.map((section, i) => (
          <section key={i} style={{ marginBottom: '36px' }}>
            {section.heading && (
              <h2
                style={{
                  fontFamily: SERIF,
                  fontSize: '17px',
                  fontWeight: '700',
                  color: '#1a1a1a',
                  margin: '0 0 12px 0',
                  letterSpacing: '0.01em',
                }}
              >
                {section.heading}
              </h2>
            )}
            {section.code && (
              <pre
                style={{
                  fontFamily: "'JetBrains Mono', 'Fira Code', 'Courier New', monospace",
                  fontSize: '13px',
                  lineHeight: '1.65',
                  background: '#f5f5f0',
                  border: '1px solid #ddd',
                  borderLeft: '3px solid #1a1a1a',
                  padding: '16px 20px',
                  margin: '0 0 16px 0',
                  overflowX: 'auto',
                  whiteSpace: 'pre',
                  color: '#1a1a1a',
                }}
              >
                <code>{section.code}</code>
              </pre>
            )}
            {section.body && section.body.split('\n\n').map((para, j) => (
              <p
                key={j}
                style={{
                  fontFamily: SERIF,
                  fontSize: '15px',
                  lineHeight: '1.75',
                  color: '#2a2a2a',
                  margin: '0 0 16px 0',
                }}
              >
                {para}
              </p>
            ))}
          </section>
        ))}
      </article>

      {/* Prev / Next nav */}
      <div
        style={{
          borderTop: '1px solid #ccc',
          paddingTop: '28px',
          marginTop: '20px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '16px',
          fontFamily: SANS,
          fontSize: '12px',
        }}
      >
        <div>
          {prev && (
            <>
              <div style={{ color: '#aaa', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '10px' }}>Older</div>
              <Link to={`/blog/${prev.slug}`} style={{ color: '#1a1a1a', textDecoration: 'none', lineHeight: 1.4 }}>
                {prev.title}
              </Link>
            </>
          )}
        </div>
        <div style={{ textAlign: 'right' }}>
          {next && (
            <>
              <div style={{ color: '#aaa', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '10px' }}>Newer</div>
              <Link to={`/blog/${next.slug}`} style={{ color: '#1a1a1a', textDecoration: 'none', lineHeight: 1.4 }}>
                {next.title}
              </Link>
            </>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer
        style={{
          borderTop: '1px solid #ddd',
          paddingTop: '20px',
          marginTop: '32px',
          fontFamily: SANS,
          fontSize: '11px',
          color: '#aaa',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Link to="/" style={{ color: '#888', textDecoration: 'none' }}>
          {identity.name}
        </Link>
        <Link to="/blog" style={{ color: '#888', textDecoration: 'none' }}>
          All posts →
        </Link>
      </footer>
    </div>
  );
}
