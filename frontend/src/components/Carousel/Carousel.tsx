import { useState } from 'react';

interface CarouselProps {
  children: React.ReactNode[];
  visibleCount?: number;
  className?: string;
}

export default function Carousel({ children, visibleCount = 1, className = '' }: CarouselProps) {
  const [index, setIndex] = useState(0);
  const total = children.length;
  const maxIndex = Math.max(0, total - visibleCount);

  const prev = () => setIndex(i => Math.max(0, i - 1));
  const next = () => setIndex(i => Math.min(maxIndex, i + 1));

  const translatePct = (index / total) * 100;

  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      <div
        className="flex transition-transform duration-300 ease-in-out"
        style={{ transform: `translateX(-${translatePct}%)` }}
      >
        {children.map((child, i) => (
          <div key={i} className="shrink-0" style={{ width: `${100 / visibleCount}%` }}>
            {child}
          </div>
        ))}
      </div>

      {index > 0 && (
        <button
          onClick={prev}
          aria-label="Previous"
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full border border-black/20 dark:border-white/20 bg-white/90 dark:bg-black/90 flex items-center justify-center text-xl leading-none hover:bg-white dark:hover:bg-black transition-colors"
        >
          ‹
        </button>
      )}
      {index < maxIndex && (
        <button
          onClick={next}
          aria-label="Next"
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full border border-black/20 dark:border-white/20 bg-white/90 dark:bg-black/90 flex items-center justify-center text-xl leading-none hover:bg-white dark:hover:bg-black transition-colors"
        >
          ›
        </button>
      )}
    </div>
  );
}
