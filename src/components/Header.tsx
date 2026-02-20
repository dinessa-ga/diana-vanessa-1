import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
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
  const [isDark, setIsDark] = useState(false);
  const location = useLocation();

  // ── Theme init ──
  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (saved === 'dark' || (!saved && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(prev => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
      return next;
    });
  };

  // ── Responsive + scroll lock ──
  useEffect(() => { setIsOpen(false); }, [location.pathname]);

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

  const linkBase = 'text-foreground px-4 py-2 transition-all duration-200 text-sm font-bold';
  const linkHover = 'hover:bg-accent hover:text-accent-foreground rounded-xl';
  const linkActiveClass = 'bg-accent/20 text-accent-foreground rounded-xl';

  return (
    <header
      style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50 }}
      className="bg-background border-b border-border"
    >
      <nav className="max-w-7xl mx-auto px-4">

        {/* ── Desktop ── */}
        {!isMobile && (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '64px', gap: '4px' }}>
            {menuItems.map((item) => {
              const active = item.label !== 'Inicio' && isActive(item.href);
              const cls = `${linkBase} ${linkHover} ${active ? linkActiveClass : ''}`;
              return item.href.startsWith('#') ? (
                <a key={item.label} href={item.href} className={cls}>{item.label}</a>
              ) : (
                <Link key={item.label} to={item.href} className={cls}>{item.label}</Link>
              );
            })}

            {/* Separador */}
            <span style={{ width: '1px', height: '18px', backgroundColor: 'var(--border)', margin: '0 6px', flexShrink: 0 }} />

            {/* Toggle — mismo estilo que navlinks */}
            <button
              onClick={toggleTheme}
              aria-label={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
              className={`${linkBase} text-foreground rounded-xl border-2 border-border hover:scale-110 transition-all duration-200`}
              style={{ display: 'flex', alignItems: 'center', gap: '6px', border: 'none', cursor: 'pointer', background: 'transparent' }}
            >
              {isDark ? <Moon size={14} strokeWidth={2.5} /> : <Sun size={14} strokeWidth={2.5} />}
              {isDark ? 'Claro' : 'Oscuro'}
            </button>
          </div>
        )}

        {/* ── Mobile ── */}
        {isMobile && (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>

            {/* Toggle compacto — solo icono */}
            <button
              onClick={toggleTheme}
              aria-label={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
              className={`text-foreground rounded-xl border-2 border-border hover:scale-110 transition-all duration-200`}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '8px 10px', border: 'none', cursor: 'pointer', background: 'transparent', borderRadius: '12px' }}
            >
              {isDark ? <Moon size={18} strokeWidth={2.5} /> : <Sun size={18} strokeWidth={2.5} />}
            </button>

            {/* Hamburguesa */}
            <button
              type="button"
              aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={isOpen}
              onClick={() => setIsOpen(prev => !prev)}
              className="text-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-200"
              style={{ padding: '8px', borderRadius: '12px', background: 'none', border: 'none', cursor: 'pointer' }}
            >
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
              </svg>
            </button>
          </div>
        )}
      </nav>

      {isMobile && (
        <MobileMenu menuItems={menuItems} isOpen={isOpen} onClose={() => setIsOpen(false)} />
      )}
    </header>
  );
}
