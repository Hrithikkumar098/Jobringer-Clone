import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from 'lucide-react'

export function HeroSearch() {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-blue-700 py-16">
      <div className="container px-4 text-center">
        <h1 className="mb-6 text-4xl font-bold text-white">
          BRINGING YOU THE PERFECT JOB!
        </h1>
        <p className="mb-8 text-xl text-white/90">11,000+ JOBS to Apply</p>
        <div className="mx-auto max-w-2xl">
          <div className="flex gap-4">
            <Input
              placeholder="Search Jobs Now"
              className="h-12 bg-white"
            />
            <Button size="lg" className="bg-yellow-400 text-black hover:bg-yellow-500">
              <Search className="mr-2 h-4 w-4" />
              Search
            </Button>
          </div>
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            <Button variant="secondary" size="sm">View Jobs</Button>
            <Button variant="secondary" size="sm">Register For FREE</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

