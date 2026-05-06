import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';

const NAV_ITEMS = [
  { label: 'Home', to: '/' },
  { label: 'Projects', to: '/projects' },
  { label: 'About Me', to: '/about' },
  { label: 'Education', to: '/education' },
  { label: 'Contact', to: '/contact' },
] as const;

const X_POS = [14, 30, 50, 70, 86];

export default function EKGNav() {
  const { isDark } = useTheme();
  const location = useLocation();

  return (
    <nav className="relative flex-1 h-20 mx-6" aria-label="Main navigation">
      {/* Straight horizontal line */}
      <div
        className={`absolute left-0 right-0 border-t ${isDark ? 'border-white/30' : 'border-black/20'}`}
        style={{ top: '60%' }}
      />

      {/* Nav labels */}
      {NAV_ITEMS.map((item, i) => {
        const isActive =
          item.to === '/'
            ? location.pathname === '/'
            : location.pathname.startsWith(item.to);

        return (
          <Link
            key={item.to}
            to={item.to}
            className={[
              'absolute -translate-x-1/2 -translate-y-1/2',
              'text-sm font-medium whitespace-nowrap',
              'hover:opacity-60 transition-opacity duration-200',
              isActive ? 'underline underline-offset-2' : '',
              isDark ? 'text-white' : 'text-black',
            ].join(' ')}
            style={{
              left: `${X_POS[i]}%`,
              top: '60%',
              fontFamily: "'Libre Franklin', sans-serif",
            }}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
