import { HeroSearch } from "@/components/hero-search"
import { EmployerBanner } from "@/components/employer-banner"
import { QuickSearch } from "@/components/quick-search"
import { JobSection } from "@/components/job-sections"
import { WhatsAppButton } from "@/components/whatsapp-button"

const featuredJobs = [
  {
    title: "SAP Basis HANA BTP and cloud - CVA",
    company: "JOB STORE CONSULTING",
    location: "Bengaluru / Bangalore / India",
    type: "Full Time - Permanent",
    experience: "6 - 8 Years",
    jobType: "Hybrid" as const,
  },
  {
    title: "Software Engineer",
    company: "Right Vision Consultancy Services",
    location: "Navi Mumbai / Panvel / India",
    type: "Full Time - Permanent",
    experience: "0 - 4 Years",
    jobType: "In Office" as const,
  },
  {
    title: "Backend Developer",
    company: "Rentickle",
    location: "Gurgaon / Gurugram / India",
    type: "Full Time - Permanent",
    experience: "1 - 3 Years",
    jobType: "In Office" as const,
  },
]

const remoteJobs = [
  {
    title: "Digital Marketing Manager",
    company: "TechStart Solutions",
    location: "Remote",
    type: "Full Time - Permanent",
    experience: "3 - 5 Years",
    jobType: "Remote" as const,
  },
  {
    title: "SAP FICO Sr.Consultant",
    company: "Global Systems Inc",
    location: "Remote",
    type: "Full Time - Permanent",
    experience: "5 - 8 Years",
    jobType: "Remote" as const,
  },
  {
    title: "Associate Financial Analyst",
    company: "Finance Pro Services",
    location: "Remote",
    type: "Full Time - Permanent",
    experience: "2 - 4 Years",
    jobType: "Remote" as const,
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <EmployerBanner />
      <HeroSearch />
      
      <div className="container px-4 py-8">
        <div className="grid gap-8 md:grid-cols-[2fr_1fr]">
          <div className="space-y-8">
            <JobSection title="Featured Jobs" jobs={featuredJobs} />
            <JobSection title="Remote Jobs" jobs={remoteJobs} />
          </div>
          <div>
            <QuickSearch />
          </div>
        </div>
      </div>
      
      <WhatsAppButton />
    </div>
  )
}

