import ArticleGrid from "@/components/ArticleGrid"
import CategoryHeader from "@/components/CategoryHeader"
import { useArticles } from "@/lib/article-context"

export default function Page() {
  const { getArticlesByCategory } = useArticles()
  const categoryArticles = getArticlesByCategory("Education News")

  return (
    <div>
      <CategoryHeader category="Education News" />
      <ArticleGrid articles={categoryArticles} />
    </div>
  )
}
