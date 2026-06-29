export default function Project({ name, stack, description, year, category, hasBorderRight }) {
  return (
    <article
      style={{
        paddingBottom: '24px',
        paddingTop: '20px',
        paddingRight: hasBorderRight ? '40px' : '0',
        borderRight: hasBorderRight ? '1px solid #e8e4da' : 'none',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'baseline',
          marginBottom: '6px',
        }}
      >
        <h3
          style={{
            fontFamily: 'Georgia, serif',
            fontSize: '20px',
            fontWeight: '700',
            color: '#1a1a1a',
            margin: '0',
            letterSpacing: '-0.2px',
          }}
        >
          {name}
        </h3>
        <span
          style={{
            fontFamily: 'system-ui, sans-serif',
            fontSize: '11px',
            color: '#999',
            letterSpacing: '0.05em',
          }}
        >
          {year}
        </span>
      </div>

      <div
        style={{
          fontFamily: 'system-ui, sans-serif',
          fontSize: '10px',
          fontWeight: '600',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: '#777',
          marginBottom: '8px',
        }}
      >
        {category}
      </div>

      <p
        style={{
          fontFamily: 'system-ui, sans-serif',
          fontSize: '14px',
          lineHeight: '1.65',
          color: '#333',
          margin: '0 0 10px 0',
        }}
      >
        {description}
      </p>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '5px',
        }}
      >
        {stack.map((tech) => (
          <span
            key={tech}
            style={{
              fontFamily: 'system-ui, sans-serif',
              fontSize: '10px',
              color: '#555',
              border: '1px solid #ccc',
              padding: '2px 7px',
              letterSpacing: '0.04em',
            }}
          >
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
}
