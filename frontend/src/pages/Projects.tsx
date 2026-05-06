import { Link } from 'react-router-dom';
import Carousel from '../components/Carousel/Carousel';

const LOREM = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`;

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  color: string;
}

function ProjectCard({ id, title, description, color }: ProjectCardProps) {
  return (
    <div className="border border-black/10 dark:border-white/10 flex flex-col overflow-hidden">
      <div className="h-48 flex items-center justify-center" style={{ backgroundColor: color }}>
        <span className="text-xs uppercase tracking-widest opacity-30">Image</span>
      </div>
      <div className="h-32 bg-black/5 dark:bg-white/5 flex items-center justify-center">
        <span className="text-xs uppercase tracking-widest opacity-30">Video preview</span>
      </div>
      <div className="grid grid-cols-2">
        {[1, 2].map(n => (
          <div key={n} className="h-24 bg-black/5 dark:bg-white/5 flex items-center justify-center border-r last:border-r-0 border-black/10 dark:border-white/10">
            <span className="text-xs opacity-20">Screenshot {n}</span>
          </div>
        ))}
      </div>
      <div className="p-5 flex flex-col gap-3 flex-1">
        <h2 className="font-serif italic font-semibold text-xl">{title}</h2>
        <p className="font-serif text-sm opacity-60 leading-relaxed flex-1">{description}</p>
        <div className="flex items-center gap-4 pt-2">
          <Link to={`/projects/${id}`} className="text-sm font-medium underline underline-offset-4 hover:opacity-60 transition-opacity" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
            View project →
          </Link>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-sm opacity-50 hover:opacity-100 transition-opacity flex items-center gap-1" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
            <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

const MAIN_PROJECTS = [
  { id: 'project-alpha', title: 'Project Alpha', description: LOREM, color: '#cdd8ec' },
  { id: 'project-beta', title: 'Project Beta', description: LOREM, color: '#d8eccd' },
];

const EXTRA_PROJECTS = [
  { id: 'project-gamma', title: 'Project Gamma', description: LOREM, color: '#ecddd8' },
  { id: 'project-delta', title: 'Project Delta', description: LOREM, color: '#e8e8f0' },
  { id: 'project-epsilon', title: 'Project Epsilon', description: LOREM, color: '#f0e8e8' },
];

export default function Projects() {
  return (
    <div className="max-w-screen-xl mx-auto px-6 py-16">
      <h1 className="font-serif italic font-bold text-4xl mb-12">Projects</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {MAIN_PROJECTS.map(p => <ProjectCard key={p.id} {...p} />)}
      </div>
      <div className="border-t border-black/10 dark:border-white/10 pt-12">
        <h2 className="font-serif italic text-2xl mb-8 opacity-70">More Projects</h2>
        <Carousel visibleCount={2} className="px-8">
          {EXTRA_PROJECTS.map(p => (
            <div key={p.id} className="px-3"><ProjectCard {...p} /></div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
