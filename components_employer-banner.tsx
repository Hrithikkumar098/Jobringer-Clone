import { Button } from "@/components/ui/button"

export function EmployerBanner() {
  return (
    <div className="bg-[#00BCD4] text-white">
      <div className="container flex items-center justify-between px-4 py-3">
        <div className="flex items-center space-x-4">
          <span className="text-xl font-bold">EMPLOYERS</span>
          <span className="hidden md:inline">
            WELCOME OFFER - FREE JOB Postings and Much More.
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="secondary" className="bg-yellow-400 text-black hover:bg-yellow-500">
            Register for FREE
          </Button>
          <Button variant="secondary" className="bg-white text-black hover:bg-gray-100">
            Post A Job
          </Button>
          <Button variant="secondary" className="hidden md:inline-flex bg-blue-800 text-white hover:bg-blue-900">
            Sales Enquiry
          </Button>
        </div>
      </div>
    </div>
  )
}

