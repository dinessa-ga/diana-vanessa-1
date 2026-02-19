import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { MobileMenu } from './MobileMenu';

interface MenuItem {
  label: string;
  href: string;
}

interface HeaderProps {
  menuItems: MenuItem[];
}

export function Header({ menuItems }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) setIsOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const isActive = (href: string) =>
    !href.startsWith('#') && location.pathname === href;

  const linkBase =
    'text-gray-700 dark:text-gray-300 px-4 py-2 rounded-xl transition-all duration-200 text-sm font-medium';
  const linkHover =
    'hover:bg-gray-100 hover:text-gray-900';
  const linkActive =
    'bg-gray-100 text-gray-900 font-semibold';

  return (
    <header
      style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50 }}
      className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700"
    >
      <nav className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">

          {/* Brand */}
          <Link
            to="/"
            className="text-xl font-bold text-gray-900 dark:text-white"
            style={{ textDecoration: 'none' }}
          >
            Diana Vanessa
          </Link>

          {/* Nav Desktop — visible solo cuando NO es móvil */}
          {!isMobile && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              {menuItems.map((item) => {
                const active = isActive(item.href);
                const cls = `${linkBase} ${linkHover} ${active ? linkActive : ''}`;
                return item.href.startsWith('#') ? (
                  <a key={item.label} href={item.href} className={cls}>
                    {item.label}
                  </a>
                ) : (
                  <Link key={item.label} to={item.href} className={cls}>
                    {item.label}
                  </Link>
                );
              })}
            </div>
          )}

          {/* Botón hamburguesa — visible solo en móvil */}
          {isMobile && (
            <button
              type="button"
              aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={isOpen}
              onClick={() => setIsOpen(prev => !prev)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '8px',
                borderRadius: '12px',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
              }}
              className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-200"
            >
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          )}

        </div>
      </nav>

      {/* MobileMenu solo se monta cuando es móvil */}
      {isMobile && (
        <MobileMenu
          menuItems={menuItems}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        />
      )}
    </header>
  );
}
