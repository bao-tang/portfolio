import { useParams } from 'react-router-dom';

const LOREM = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`;

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const title = id ? id.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()) : 'Project';

  return (
    <div className="max-w-screen-xl mx-auto px-6 py-16">
      <h1 className="font-serif italic font-bold text-4xl mb-12">{title}</h1>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr_auto] gap-10">
        <div>
          <h2 className="font-serif italic text-xl font-semibold mb-4">Overview</h2>
          <p className="font-serif text-sm leading-relaxed opacity-70 mb-6">{LOREM}</p>
          <h2 className="font-serif italic text-xl font-semibold mb-4">Problem Statement</h2>
          <p className="font-serif text-sm leading-relaxed opacity-70 mb-6">{LOREM}</p>
          <h2 className="font-serif italic text-xl font-semibold mb-4">Tech Stack</h2>
          <ul className="font-serif text-sm opacity-70 space-y-1 list-disc list-inside">
            <li>React + TypeScript</li>
            <li>ASP.NET Core C#</li>
            <li>Tailwind CSS</li>
            <li>PostgreSQL</li>
          </ul>
        </div>
        <div className="flex flex-col gap-6">
          {[['#cdd8ec', 'Screenshot 1'], ['#d8eccd', 'Screenshot 2']].map(([color, label]) => (
            <div key={label} className="h-52 flex items-center justify-center border border-black/10 dark:border-white/10" style={{ backgroundColor: color }}>
              <span className="text-xs uppercase tracking-widest opacity-30">{label}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-row lg:flex-col gap-3 items-start">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="flex items-center justify-center w-10 h-10 border border-black/20 dark:border-white/20 rounded hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
            <svg viewBox="0 0 16 16" width="18" height="18" fill="currentColor">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
