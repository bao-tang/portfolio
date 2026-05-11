export default function Contact() {
  return (
    <div className="max-w-screen-lg mx-auto px-6 py-24 text-center">
      <h1 className="font-serif italic font-bold text-5xl lg:text-6xl mb-3">Contact Information</h1>
      <p className="text-sm uppercase tracking-[0.25em] opacity-50 mb-16" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
        Get In Touch
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {[
          { label: 'Address', value: '123 Anywhere St., Any City, State, Country 12345' },
          { label: 'Phone', value: '(123) 456 7890' },
          { label: 'Email', value: 'hello@reallygreatsite.com' },
        ].map(({ label, value }) => (
          <div key={label} className="flex flex-col items-center gap-2">
            <p className="text-xs uppercase tracking-widest opacity-40" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>{label}</p>
            <p className="font-serif italic text-base opacity-75">{value}</p>
          </div>
        ))}
      </div>
      <button className="px-10 py-3 border border-black/30 dark:border-white/30 text-sm font-medium uppercase tracking-widest hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-200" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
        Get In Touch
      </button>
    </div>
  );
}
