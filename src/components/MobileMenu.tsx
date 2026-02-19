import { Link } from 'react-router-dom';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';

interface MenuItem {
  label: string;
  href: string;
}

interface MobileMenuProps {
  menuItems: MenuItem[];
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export function MobileMenu({ menuItems, isOpen, setIsOpen }: MobileMenuProps) {
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <button className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white p-2">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <nav className="flex flex-col space-y-6 mt-8">
          {menuItems.map((item) => (
            item.href.startsWith('#') ? (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-4 py-3 rounded-md text-base font-medium transition-colors"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.label}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-4 py-3 rounded-md text-base font-medium transition-colors"
              >
                {item.label}
              </Link>
            )
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}