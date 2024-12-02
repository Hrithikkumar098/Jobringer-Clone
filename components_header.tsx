import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="border-b">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-primary">JobRinger</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/jobs" className="text-sm font-medium">
            Jobs
          </Link>
          <Link href="/employers" className="text-sm font-medium">
            Active Employers
          </Link>
          <Link href="/pricing" className="text-sm font-medium">
            Pricing
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Button variant="outline">Jobseeker Login</Button>
          <Button>Employer Login</Button>
        </div>
      </div>
    </header>
  )
}

