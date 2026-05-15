import Link from 'next/link'
import { BookOpen, Code2, Calculator, Megaphone, Palette, Cpu, Monitor, Wifi } from 'lucide-react'

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  Certificate: <BookOpen className="w-5 h-5" />,
  Diploma: <BookOpen className="w-5 h-5" />,
  'PG Diploma': <BookOpen className="w-5 h-5" />,
  Development: <Code2 className="w-5 h-5" />,
  Accounting: <Calculator className="w-5 h-5" />,
  Marketing: <Megaphone className="w-5 h-5" />,
  Design: <Palette className="w-5 h-5" />,
  Programming: <Code2 className="w-5 h-5" />,
  Technical: <Wifi className="w-5 h-5" />,
  'Office Tools': <Monitor className="w-5 h-5" />,
}

const CATEGORIES = [
  { label: 'Certificate Courses',  slug: 'Certificate',   color: 'from-royal-400 to-royal-600' },
  { label: 'Diploma Courses',      slug: 'Diploma',       color: 'from-navy-500 to-navy-700' },
  { label: 'Web Development',      slug: 'Development',   color: 'from-sky-400 to-royal-500' },
  { label: 'Accounting & Tally',   slug: 'Accounting',    color: 'from-emerald-400 to-emerald-600' },
  { label: 'Digital Marketing',    slug: 'Marketing',     color: 'from-violet-400 to-violet-600' },
  { label: 'Graphic Design',       slug: 'Design',        color: 'from-pink-400 to-rose-600' },
  { label: 'Programming',          slug: 'Programming',   color: 'from-amber-400 to-orange-500' },
  { label: 'Hardware & Networks',  slug: 'Technical',     color: 'from-teal-400 to-teal-600' },
  { label: 'MS Office Advanced',   slug: 'Office Tools',  color: 'from-indigo-400 to-indigo-600' },
]

export default function CategoryStrip() {
  return (
    <section className="py-16 bg-white border-b border-ash-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-display font-bold text-navy text-xl">Browse by Category</h2>
          <Link href="/courses" className="text-royal text-sm font-semibold hover:text-crimson transition-colors">
            View all →
          </Link>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-9 gap-3">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.slug}
              href={`/courses?category=${encodeURIComponent(cat.slug)}`}
              className="group flex flex-col items-center gap-2 text-center"
            >
              <div
                className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${cat.color} flex items-center justify-center text-white shadow-sm group-hover:shadow-lift group-hover:scale-110 transition-all duration-200`}
              >
                {CATEGORY_ICONS[cat.slug] ?? <BookOpen className="w-5 h-5" />}
              </div>
              <span className="text-[11px] font-medium text-gray-600 group-hover:text-navy leading-tight">
                {cat.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
