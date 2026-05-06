const LOREM = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`;
const LOREM_2 = `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

export default function About() {
  return (
    <div className="max-w-screen-xl mx-auto px-6 py-16">
      <h1 className="font-serif italic font-bold text-4xl mb-12">About Me</h1>
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12 items-start">
        <div>
          <p className="font-serif text-base leading-relaxed opacity-70 mb-6">{LOREM}</p>
          <p className="font-serif text-base leading-relaxed opacity-70 mb-6">{LOREM_2}</p>
          <p className="font-serif text-base leading-relaxed opacity-70">{LOREM}</p>
        </div>
        <div className="flex flex-col gap-6">
          <div className="h-96 flex items-center justify-center border border-black/10 dark:border-white/10" style={{ backgroundColor: '#e8e8f0' }}>
            <span className="text-xs uppercase tracking-widest opacity-30">Photo</span>
          </div>
          <blockquote className="font-serif italic text-xl opacity-60 border-l-2 border-black/20 dark:border-white/20 pl-4">
            "Building things that matter — one commit at a time."
          </blockquote>
        </div>
      </div>
    </div>
  );
}
