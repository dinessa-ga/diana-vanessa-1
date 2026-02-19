import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

interface MenuItem {
  label: string;
  href: string;
}

interface MobileMenuProps {
  menuItems: MenuItem[];
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ menuItems, isOpen, onClose }: MobileMenuProps) {
  const location = useLocation();

  useEffect(() => {
    onClose();
  }, [location.pathname]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [onClose]);

  const isActive = (href: string) =>
    !href.startsWith('#') && location.pathname === href;

  const linkBase =
    'text-gray-700 dark:text-gray-300 hover:bg-gray-100 hover:text-gray-900 px-4 py-3 rounded-xl transition-all duration-200 text-base font-medium';
  const linkActive =
    'bg-gray-100 text-gray-900 font-semibold';

  return (
    <>
      {/* Overlay */}
      <div
        aria-hidden="true"
        onClick={onClose}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 40,
          backgroundColor: 'rgba(0,0,0,0.5)',
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? 'auto' : 'none',
          transition: 'opacity 0.3s ease',
        }}
      />

      {/* Panel */}
      <div
        role="dialog"
        aria-modal="true"
        style={{
          position: 'fixed',
          top: '68px',
          left: '16px',
          right: '16px',
          zIndex: 50,
          borderRadius: '16px',
          backgroundColor: 'white',
          border: '1px solid #e5e7eb',
          boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)',
          opacity: isOpen ? 1 : 0,
          transform: isOpen ? 'scaleY(1) translateY(0)' : 'scaleY(0.95) translateY(-8px)',
          transformOrigin: 'top',
          pointerEvents: isOpen ? 'auto' : 'none',
          transition: 'opacity 0.25s ease, transform 0.25s ease',
        }}
      >
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '4px', padding: '12px' }}>
          {menuItems.map((item) => {
            const active = isActive(item.href);
            const cls = `${linkBase} ${active ? linkActive : ''}`;
            return item.href.startsWith('#') ? (
              <a
                key={item.label}
                href={item.href}
                onClick={onClose}
                className={cls}
                style={{ display: 'block', textDecoration: 'none' }}
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.label}
                to={item.href}
                onClick={onClose}
                className={cls}
                style={{ display: 'block', textDecoration: 'none' }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
}
