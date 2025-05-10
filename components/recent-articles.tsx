import Link from "next/link"
import { Calendar, Clock } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Sample article data
const articles = [
  {
    id: 1,
    title: "Financial Analysis: Tech Sector Q1 2025 Performance",
    excerpt:
      "An in-depth look at the technology sector's performance in Q1 2025, with focus on key players and emerging trends.",
    date: "May 5, 2025",
    readTime: "8 min read",
    categories: ["Tech Sector", "Financial Analysis"],
  },
  {
    id: 2,
    title: "Value Investing in a High Interest Rate Environment",
    excerpt:
      "Strategies for identifying undervalued companies and managing portfolio risk in the current high interest rate landscape.",
    date: "April 22, 2025",
    readTime: "12 min read",
    categories: ["Value Investing", "Risk Management"],
  },
  {
    id: 3,
    title: "ESG Considerations in Modern Portfolio Construction",
    excerpt:
      "How environmental, social, and governance factors are increasingly important in building resilient investment portfolios.",
    date: "April 10, 2025",
    readTime: "10 min read",
    categories: ["ESG", "Portfolio Strategy"],
  },
]

export default function RecentArticles() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {articles.map((article) => (
        <Card key={article.id} className="flex flex-col">
          <CardHeader className="pb-2">
            <CardTitle className="text-xl">
              <Link href={`/articles/${article.id}`} className="hover:underline">
                {article.title}
              </Link>
            </CardTitle>
            <CardDescription className="flex flex-wrap gap-2">
              {article.categories.map((category) => (
                <Badge key={category} variant="secondary">
                  {category}
                </Badge>
              ))}
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            <p className="text-muted-foreground">{article.excerpt}</p>
          </CardContent>
          <CardFooter className="flex items-center text-sm text-muted-foreground">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" />
                <span>{article.readTime}</span>
              </div>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
