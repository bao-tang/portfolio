import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import EKGNav from './EKGNav';

export default function Header() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/10 dark:border-white/10 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-screen-xl mx-auto px-6 flex items-center h-20">
        <Link
          to="/"
          className="shrink-0 font-serif italic font-semibold text-2xl tracking-tight"
        >
          Bao Tang
          <span className="hidden md:inline text-sm font-normal ml-2 opacity-60">
            | Web &amp; Application Developer
          </span>
        </Link>

        <EKGNav />

        <button
          onClick={toggleTheme}
          className="shrink-0 px-3 py-1.5 text-xs font-medium rounded-full border border-black/20 dark:border-white/20 hover:bg-black/5 dark:hover:bg-white/10 transition-colors duration-200"
          style={{ fontFamily: "'Libre Franklin', sans-serif" }}
          aria-label="Toggle colour theme"
        >
          {isDark ? '☀ Light' : '☾ Dark'}
        </button>
      </div>
    </header>
  );
}
