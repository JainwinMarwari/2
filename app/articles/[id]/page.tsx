import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Share2, ThumbsUp } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

// Sample article data
const article = {
  id: 1,
  title: "Financial Analysis: Tech Sector Q1 2025 Performance",
  excerpt:
    "An in-depth look at the technology sector's performance in Q1 2025, with focus on key players and emerging trends.",
  date: "May 5, 2025",
  readTime: "8 min read",
  categories: ["Tech Sector", "Financial Analysis"],
  author: "John Smith",
  content: `
    <h2>Introduction</h2>
    <p>The technology sector has shown remarkable resilience in Q1 2025, despite ongoing macroeconomic challenges including elevated interest rates and geopolitical tensions. This analysis examines the performance of key players in the tech industry, emerging trends, and potential investment opportunities.</p>
    
    <h2>Market Overview</h2>
    <p>The tech-heavy NASDAQ Composite index gained 8.2% in Q1 2025, outperforming the broader S&P 500 index which rose 5.4% during the same period. This outperformance was driven primarily by strong earnings from large-cap tech companies and renewed investor enthusiasm for artificial intelligence applications.</p>
    
    <h2>Key Performance Indicators</h2>
    <p>Revenue growth across the sector averaged 12.3% year-over-year, with software companies leading at 15.7% growth. Operating margins improved by an average of 150 basis points compared to Q1 2024, reflecting successful cost optimization initiatives implemented throughout 2024.</p>
    
    <h2>Segment Analysis</h2>
    <h3>Cloud Computing</h3>
    <p>The cloud computing segment continued its strong growth trajectory, with the three major providers (AWS, Azure, and Google Cloud) collectively growing 22% year-over-year. Enterprise migration to cloud infrastructure remains a key driver, with particular strength in financial services and healthcare verticals.</p>
    
    <h3>Semiconductor Industry</h3>
    <p>Semiconductor companies reported mixed results, with data center and AI-focused chip manufacturers outperforming those with greater exposure to consumer electronics. Supply chain constraints have largely normalized, though geopolitical tensions continue to impact strategic planning for manufacturing capacity.</p>
    
    <h3>Software as a Service (SaaS)</h3>
    <p>SaaS companies demonstrated strong performance with average revenue growth of 18.2%. Customer retention metrics improved across the board, with net dollar retention rates averaging 115% for the cohort. Vertical-specific SaaS solutions showed particularly strong momentum.</p>
    
    <h2>Emerging Trends</h2>
    <p>Several key trends emerged during Q1 2025 that are likely to shape the technology landscape moving forward:</p>
    
    <h3>Artificial Intelligence Integration</h3>
    <p>The integration of AI capabilities into enterprise software has accelerated, with companies reporting significant productivity gains. Generative AI applications have moved beyond experimental phases into production environments, creating tangible ROI for early adopters.</p>
    
    <h3>Edge Computing</h3>
    <p>The proliferation of IoT devices and demand for real-time processing has driven substantial growth in edge computing solutions. Telecommunications companies partnering with cloud providers are leading this transition, particularly in industrial and smart city applications.</p>
    
    <h3>Cybersecurity Focus</h3>
    <p>With increasing regulatory scrutiny and high-profile breaches, cybersecurity spending has increased 24% year-over-year. Zero-trust architecture implementation and AI-powered threat detection solutions saw the strongest demand growth.</p>
    
    <h2>Company Spotlights</h2>
    
    <h3>Microsoft (MSFT)</h3>
    <p>Microsoft delivered exceptional results with revenue growth of 18.5% and operating margin expansion of 220 basis points. Azure cloud services grew 28.7%, outpacing expectations, while the company's AI investments are showing early returns through enhanced product offerings and new revenue streams.</p>
    
    <h3>NVIDIA (NVDA)</h3>
    <p>NVIDIA continued its remarkable performance with 45% revenue growth, driven by insatiable demand for its AI-focused GPUs. Data center revenue more than doubled year-over-year, though gaming segment growth was more modest at 8.3%.</p>
    
    <h3>Salesforce (CRM)</h3>
    <p>Salesforce reported solid results with 14.2% revenue growth and significant margin improvement. The company's Data Cloud and AI offerings were standout performers, suggesting successful execution of its expansion strategy beyond core CRM functionality.</p>
    
    <h2>Investment Implications</h2>
    <p>The technology sector's strong performance in Q1 2025 reinforces its position as a critical component of investment portfolios. However, valuation disparities within the sector have widened, requiring careful security selection. Companies with clear AI strategies, robust cloud growth, and improving margin profiles appear best positioned for continued outperformance.</p>
    
    <p>While the sector's overall outlook remains positive, investors should be mindful of potential headwinds including regulatory scrutiny, geopolitical risks affecting supply chains, and the impact of sustained higher interest rates on growth stock valuations.</p>
    
    <h2>Conclusion</h2>
    <p>The technology sector has demonstrated remarkable resilience and innovation in Q1 2025. Companies that are successfully integrating AI capabilities, expanding cloud services, and maintaining disciplined capital allocation are likely to continue delivering superior shareholder returns. As always, a balanced approach focusing on companies with sustainable competitive advantages and reasonable valuations remains prudent.</p>
  `,
  relatedArticles: [
    {
      id: 2,
      title: "Value Investing in a High Interest Rate Environment",
      excerpt:
        "Strategies for identifying undervalued companies and managing portfolio risk in the current high interest rate landscape.",
      date: "April 22, 2025",
      categories: ["Value Investing", "Risk Management"],
    },
    {
      id: 7,
      title: "Semiconductor Industry: Supply Chain Challenges",
      excerpt:
        "Investigating ongoing supply chain issues in the semiconductor industry and implications for tech companies.",
      date: "March 8, 2025",
      categories: ["Semiconductors", "Supply Chain"],
    },
    {
      id: 4,
      title: "Quarterly Earnings Analysis: Banking Sector",
      excerpt:
        "A comprehensive review of Q1 2025 earnings for major banks, with insights on profitability, loan growth, and credit quality.",
      date: "April 5, 2025",
      categories: ["Banking", "Earnings Analysis"],
    },
  ],
}

export default function ArticlePage({ params }: { params: { id: string } }) {
  return (
    <div className="container py-10">
      <div className="mb-6">
        <Link href="/articles" className="flex items-center text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Articles
        </Link>
      </div>

      <article className="mx-auto max-w-3xl">
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            {article.categories.map((category) => (
              <Badge key={category} variant="secondary">
                {category}
              </Badge>
            ))}
          </div>
          <h1 className="text-4xl font-bold tracking-tight mb-4">{article.title}</h1>
          <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{article.readTime}</span>
            </div>
            <div>By {article.author}</div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="flex items-center gap-1">
              <ThumbsUp className="h-4 w-4" />
              <span>Like</span>
            </Button>
            <Button variant="outline" size="sm" className="flex items-center gap-1">
              <Share2 className="h-4 w-4" />
              <span>Share</span>
            </Button>
          </div>
        </div>

        <div
          className="prose prose-slate dark:prose-invert max-w-none mb-12"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        <Separator className="my-12" />

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {article.relatedArticles.map((relatedArticle) => (
              <Card key={relatedArticle.id} className="flex flex-col">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">
                    <Link href={`/articles/${relatedArticle.id}`} className="hover:underline">
                      {relatedArticle.title}
                    </Link>
                  </CardTitle>
                  <CardDescription className="flex flex-wrap gap-1">
                    {relatedArticle.categories.map((category) => (
                      <Badge key={category} variant="secondary" className="text-xs">
                        {category}
                      </Badge>
                    ))}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-sm text-muted-foreground">{relatedArticle.excerpt}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="bg-muted p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Subscribe to Investment Insights</h2>
          <p className="text-muted-foreground mb-4">
            Get the latest investment analysis and portfolio strategies delivered to your inbox.
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Your email address"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
            <Button>Subscribe</Button>
          </div>
        </div>
      </article>
    </div>
  )
}
