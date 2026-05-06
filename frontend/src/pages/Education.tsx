const LOREM = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`;

function EducationCard({ degree, institution, dates, detail }: { degree: string; institution: string; dates: string; detail: string }) {
  return (
    <div className="border border-black/10 dark:border-white/10 p-6">
      <h3 className="font-serif italic font-semibold text-lg mb-1">{degree}</h3>
      <p className="font-serif font-medium text-sm mb-1">{institution}</p>
      <p className="font-serif text-xs opacity-50 mb-4">{dates}</p>
      <p className="font-serif text-sm opacity-60 leading-relaxed">{detail}</p>
    </div>
  );
}

export default function Education() {
  return (
    <div className="max-w-screen-xl mx-auto px-6 py-16">
      <h1 className="font-serif italic font-bold text-4xl mb-12">Education</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="grid grid-cols-2 gap-4">
          {[['#e8e8f0', 'Institution logo 1'], ['#f0e8e8', 'Institution logo 2']].map(([color, label]) => (
            <div key={label} className="h-40 flex items-center justify-center border border-black/10 dark:border-white/10" style={{ backgroundColor: color }}>
              <span className="text-xs uppercase tracking-widest opacity-30 text-center px-2">{label}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          <EducationCard degree="Bachelor of Science in Computer Science" institution="University Name" dates="Aug 2019 – May 2023" detail={LOREM} />
          <EducationCard degree="Associate of Applied Science" institution="College Name" dates="Aug 2017 – May 2019" detail={LOREM} />
        </div>
      </div>
      <div className="border-t border-black/10 dark:border-white/10 pt-8">
        <h2 className="font-serif italic text-xl font-semibold mb-4">Certifications &amp; Self-Study</h2>
        <p className="font-serif text-sm opacity-60 leading-relaxed max-w-2xl">{LOREM} {LOREM}</p>
      </div>
    </div>
  );
}
