import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-ash">
      <div className="text-center px-4">
        <div className="font-display font-bold text-navy text-[8rem] leading-none opacity-10 select-none">
          404
        </div>
        <div className="-mt-8 mb-6">
          <div className="text-6xl mb-4">🔍</div>
          <h1 className="font-display font-bold text-navy text-3xl mb-3">Page Not Found</h1>
          <p className="text-gray-500 max-w-md mx-auto">
            The page you're looking for doesn't exist. It may have been moved or the URL is incorrect.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="btn-primary gap-2">
            Go to Home <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href="/courses" className="btn-outline">
            Browse Courses
          </Link>
        </div>
      </div>
    </div>
  )
}
