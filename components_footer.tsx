import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="container px-4 py-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <h3 className="font-semibold mb-4">About Us</h3>
            <p className="text-sm text-muted-foreground">
              JobRinger is your gateway to finding the perfect job opportunity.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">For Job Seekers</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/search">Search Jobs</Link>
              </li>
              <li>
                <Link href="/register">Create Account</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">For Employers</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/post-job">Post a Job</Link>
              </li>
              <li>
                <Link href="/pricing">Pricing</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>Email: support@jobringer.com</li>
              <li>Phone: (555) 123-4567</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} JobRinger. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

