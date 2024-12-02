import { ChevronLeft, ChevronRight } from 'lucide-react'
import { JobCard } from "./job-card"
import { Button } from "./ui/button"

interface JobSectionProps {
  title: string
  jobs: Array<{
    title: string
    company: string
    location: string
    type: string
    experience: string
    jobType: "In Office" | "Remote" | "Hybrid"
  }>
}

export function JobSection({ title, jobs }: JobSectionProps) {
  return (
    <section className="py-8">
      <div className="container px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-blue-900">{title}</h2>
          <div className="flex space-x-2">
            <Button variant="outline" size="icon">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job, index) => (
            <JobCard key={index} {...job} />
          ))}
        </div>
      </div>
    </section>
  )
}

