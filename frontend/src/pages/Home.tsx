import Carousel from '../components/Carousel/Carousel';

const SLIDE_COLORS_A = ['#e8e8f0', '#f0e8e8', '#e8f0e8'];
const SLIDE_COLORS_B = ['#cdd8ec', '#d8eccd', '#ecddd8'];

function Slide({ color }: { color: string }) {
  return <div className="w-full h-full" style={{ backgroundColor: color }} />;
}

function BlockFullSlideshow({ colors }: { colors: string[] }) {
  return (
    <section className="flex-[2] w-full border-b border-black/10 dark:border-white/10 overflow-hidden">
      <Carousel className="h-full">
        {colors.map((c, i) => <Slide key={i} color={c} />)}
      </Carousel>
    </section>
  );
}

function BlockSplitTextSlideshow() {
  return (
    <section className="flex-[3] w-full grid grid-cols-1 lg:grid-cols-2 border-b border-black/10 dark:border-white/10 overflow-hidden">
      <div className="flex flex-col justify-center px-10 lg:px-16">
        <p className="font-serif text-2xl lg:text-3xl max-w-md leading-relaxed opacity-60">
          Empowering web design and applications through creative tools,
          modern technologies, and streamlined engineering.
        </p>
      </div>
      <div className="overflow-hidden">
        <Carousel className="h-full">
          {SLIDE_COLORS_B.map((c, i) => <Slide key={i} color={c} />)}
        </Carousel>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col h-full overflow-hidden">
      <BlockFullSlideshow colors={SLIDE_COLORS_A} />
      <BlockSplitTextSlideshow />
      <BlockFullSlideshow colors={SLIDE_COLORS_B} />
    </div>
  );
}
