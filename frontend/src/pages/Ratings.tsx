import Carousel from '../components/Carousel/Carousel';

const LOREM = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`;

interface TestimonialProps { name: string; role: string; rating: number; quote: string; color: string; }

function Testimonial({ name, role, rating, quote, color }: TestimonialProps) {
  return (
    <div className="mx-3 border border-black/10 dark:border-white/10 p-6 flex flex-col gap-4">
      <div className="h-16 w-16 rounded-full flex items-center justify-center" style={{ backgroundColor: color }}>
        <span className="text-xs opacity-30">Photo</span>
      </div>
      <div className="flex gap-0.5">{Array.from({ length: 5 }).map((_, i) => <span key={i} className={i < rating ? 'opacity-100' : 'opacity-20'}>★</span>)}</div>
      <p className="font-serif italic text-base opacity-70 leading-relaxed flex-1">"{quote}"</p>
      <div>
        <p className="font-serif font-medium text-sm">{name}</p>
        <p className="font-serif text-xs opacity-50">{role}</p>
      </div>
    </div>
  );
}

const TESTIMONIALS: TestimonialProps[] = [
  { name: 'Jane Doe', role: 'Product Manager', rating: 5, quote: LOREM, color: '#cdd8ec' },
  { name: 'John Smith', role: 'CTO, Startup Inc.', rating: 5, quote: LOREM, color: '#d8eccd' },
  { name: 'Alex Lee', role: 'Senior Engineer', rating: 4, quote: LOREM, color: '#ecddd8' },
  { name: 'Maria Garcia', role: 'Designer', rating: 5, quote: LOREM, color: '#e8e8f0' },
];

export default function Ratings() {
  return (
    <div className="max-w-screen-xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16 items-center">
        <div>
          <h1 className="font-serif italic font-bold text-4xl mb-4">What People Say</h1>
          <p className="font-serif text-base opacity-60 leading-relaxed">{LOREM} {LOREM}</p>
        </div>
        <div className="h-48 flex items-center justify-center border border-black/10 dark:border-white/10" style={{ backgroundColor: '#e8f0e8' }}>
          <span className="text-xs uppercase tracking-widest opacity-30">Rating summary image</span>
        </div>
      </div>
      <Carousel visibleCount={2} className="px-8">
        {TESTIMONIALS.map(t => <Testimonial key={t.name} {...t} />)}
      </Carousel>
    </div>
  );
}
