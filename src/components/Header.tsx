import { Link } from 'react-router-dom';
import { useState } from 'react';
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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 rounded-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl font-bold text-gray-900 dark:text-white">
              Diana Vanessa
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {menuItems.map((item) => (
                item.href.startsWith('#') ? (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-gray-700  px-4 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="text-gray-700 px-4 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    {item.label}
                  </Link>
                )
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <MobileMenu menuItems={menuItems} isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        </div>
      </nav>
    </header>
  );
}