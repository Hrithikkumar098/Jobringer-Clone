import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Building2, MapPin, Clock, Briefcase } from 'lucide-react'

interface JobCardProps {
  title: string
  company: string
  location: string
  type: string
  experience: string
  jobType: "In Office" | "Remote" | "Hybrid"
}

export function JobCard({
  title,
  company,
  location,
  type,
  experience,
  jobType,
}: JobCardProps) {
  const badgeColor = {
    "In Office": "bg-yellow-400 text-black",
    "Remote": "bg-green-500 text-white",
    "Hybrid": "bg-blue-500 text-white",
  }[jobType]

  return (
    <Card className="h-full hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex justify-between items-start gap-4">
          <div>
            <h3 className="font-semibold text-lg text-blue-900 hover:text-blue-700">
              {title}
            </h3>
            <p className="text-sm text-muted-foreground flex items-center mt-1">
              <Building2 className="mr-1 h-4 w-4" />
              {company}
            </p>
          </div>
          <Badge className={`${badgeColor} whitespace-nowrap`}>
            {jobType}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2 text-sm text-muted-foreground">
          <div className="flex items-center">
            <MapPin className="mr-1 h-4 w-4" />
            {location}
          </div>
          <div className="flex items-center">
            <Briefcase className="mr-1 h-4 w-4" />
            {type}
          </div>
          <div className="flex items-center">
            <Clock className="mr-1 h-4 w-4" />
            {experience}
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-[#00BCD4] hover:bg-[#00ACC1]">
          Apply
        </Button>
      </CardFooter>
    </Card>
  )
}

