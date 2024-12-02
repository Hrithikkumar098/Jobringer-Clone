import { Badge } from "@/components/ui/badge"

const jobCategories = [
  { tag: "#Fresher", color: "bg-pink-500" },
  { tag: "#Work From Home", color: "bg-purple-500" },
  { tag: "#WFH", color: "bg-blue-500" },
  { tag: "#IT", color: "bg-green-500" },
  { tag: "#HR", color: "bg-yellow-500" },
  { tag: "#Back Office", color: "bg-orange-500" },
  { tag: "#BPO Jobs", color: "bg-red-500" },
  { tag: "#ITES", color: "bg-indigo-500" },
  { tag: "#Finance", color: "bg-cyan-500" },
  { tag: "#Accounts", color: "bg-teal-500" },
  { tag: "#Medical", color: "bg-emerald-500" },
  { tag: "#Pharma", color: "bg-violet-500" },
  { tag: "#Manager", color: "bg-fuchsia-500" },
  { tag: "#Developer", color: "bg-rose-500" },
  { tag: "#Marketing", color: "bg-sky-500" },
  { tag: "#Engineering", color: "bg-amber-500" },
  { tag: "#Non Government Jobs", color: "bg-lime-500" },
]

export function QuickSearch() {
  return (
    <div className="bg-[#7FDBDA]/20 rounded-lg p-6">
      <div className="text-center mb-4">
        <h2 className="text-xl font-bold">Quick Job Search</h2>
      </div>
      <div className="flex flex-wrap justify-center gap-2">
        {jobCategories.map(({ tag, color }) => (
          <Badge
            key={tag}
            className={`${color} text-white hover:opacity-90 cursor-pointer`}
          >
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  )
}

