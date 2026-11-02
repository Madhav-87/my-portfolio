import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './versionSwitcher.css';

const versions = [
  { id: 'v1', label: 'Version 1', href: '/v1' },
  { id: 'v2', label: 'Version 2', href: '/v2' },
];

export default function VersionSwitcher({ currentVersion = 'v1', variant = 'default' }) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);
  const current = versions.find(version => version.id === currentVersion) ?? versions[0];

  useEffect(() => {
    const handlePointerDown = event => {
      if (!rootRef.current?.contains(event.target)) setOpen(false);
    };
    const handleKeyDown = event => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className={`site-version-switcher${variant === 'dark' ? ' site-version-switcher--dark' : ''}`}
      role="group"
      aria-label="Choose portfolio version"
    >
      <button
        type="button"
        className="site-version-dropdown-trigger"
        aria-label={`Current version: ${current.label}. Choose a version`}
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen(value => !value)}
      >
        <span>{current.id.toUpperCase()}</span>
        <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
          <path d="m4 6 4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {open && (
        <div className="site-version-dropdown-menu" role="menu">
          {versions.map(version => (
            <Link
              key={version.id}
              to={version.href}
              role="menuitemradio"
              aria-checked={current.id === version.id}
              aria-current={current.id === version.id ? 'page' : undefined}
              className="site-version-dropdown-option"
              onClick={() => setOpen(false)}
            >
              <span>{version.label}</span>
              {current.id === version.id && <span aria-hidden="true">✓</span>}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
