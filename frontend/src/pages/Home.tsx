import Carousel from '../components/Carousel/Carousel';

const LOREM_SHORT = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`;

const LOREM_LONG = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`;

const AMBIENT_COLORS = ['#e8e8f0', '#f0e8e8', '#e8f0e8'];
const FEATURE_COLORS = ['#cdd8ec', '#d8eccd', '#ecddd8'];

function PlaceholderSlide({ color, label, height = 'h-full min-h-[420px]' }: { color: string; label: string; height?: string }) {
  return (
    <div className={`${height} w-full flex items-center justify-center`} style={{ backgroundColor: color }}>
      <span className="text-xs uppercase tracking-widest opacity-30">{label}</span>
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[88vh]">
        <div className="flex flex-col justify-center px-10 py-20 lg:py-0 lg:px-16">
          <h1 className="font-serif italic font-bold text-5xl lg:text-6xl leading-tight mb-4">
            Bao Tang
          </h1>
          <p className="font-serif text-xl lg:text-2xl mb-6 opacity-75">
            Web &amp; Application Developer
          </p>
          <p className="font-serif text-base lg:text-lg max-w-md leading-relaxed opacity-60">
            Empowering web design and applications through creative tools, modern technologies, and streamlined engineering.
          </p>
        </div>
        <div className="h-64 lg:h-auto">
          <Carousel className="h-full">
            {AMBIENT_COLORS.map((c, i) => (
              <PlaceholderSlide key={i} color={c} label={`Ambient slide ${i + 1}`} />
            ))}
          </Carousel>
        </div>
      </section>

      {/* Middle: feature image + text */}
      <section className="grid grid-cols-1 lg:grid-cols-2 border-t border-black/10 dark:border-white/10">
        <Carousel className="h-80">
          {FEATURE_COLORS.map((c, i) => (
            <PlaceholderSlide key={i} color={c} label={`Showcase ${i + 1}`} height="h-80" />
          ))}
        </Carousel>
        <div className="flex flex-col justify-center px-10 py-14 lg:px-16">
          <h2 className="font-serif italic font-semibold text-3xl mb-4">Featured Work</h2>
          <p className="font-serif text-base leading-relaxed opacity-60 mb-4">{LOREM_LONG}</p>
          <p className="font-serif text-sm leading-relaxed opacity-50">{LOREM_SHORT}</p>
        </div>
      </section>

      {/* Bottom ambient banner */}
      <section className="border-t border-black/10 dark:border-white/10">
        <Carousel className="h-56">
          {AMBIENT_COLORS.map((c, i) => (
            <PlaceholderSlide key={i} color={c} label={`Background ${i + 1}`} height="h-56" />
          ))}
        </Carousel>
      </section>
    </>
  );
}
