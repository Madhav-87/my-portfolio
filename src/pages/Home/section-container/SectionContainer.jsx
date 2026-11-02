/** Reusable full-width wrapper for Home page content sections. */
export default function SectionContainer({ id, height = 'auto', className = '', children }) {
  return (
    <div
      id={id}
      className={`about-me-section ${className}`.trim()}
      style={{ width: '100%', height }}
    >
      {children}
    </div>
  );
}
