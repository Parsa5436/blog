import { Suspense } from "react";
import Link from "next/link";
import { articlesApi } from "@/services/api";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { LoadingCard } from "@/components/Loading";
import Article from "@/components/Article";
import Container from "@/components/Container";

// Loading component for the articles grid
function ArticlesLoading() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {Array.from({ length: 8 }).map((_, i) => (
        <LoadingCard key={i} />
      ))}
    </div>
  );
}

// Articles list component
async function ArticlesList() {
  try {
    const articles = await articlesApi.getAll();

    if (articles.length === 0) {
      return (
        <div className="text-center py-16">
          <h2 className="text-2xl font-semibold text-gray-600 mb-4">
            No articles found
          </h2>
          <p className="text-gray-500 mb-8">
            Be the first to create an article!
          </p>
          <Link
            href="/create-blog"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            Create Article
          </Link>
        </div>
      );
    }

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {articles.map((article) => (
          <Link 
            key={article.id} 
            href={`/blogs/${article.id}`}
            className="block transition-transform hover:scale-[1.02]"
          >
            <Article {...article} />
          </Link>
        ))}
      </div>
    );
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "Failed to load articles"
    );
  }
}

// Main blogs page component
export default function BlogsPage() {
  return (
    <Container>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">All Articles</h1>
        <p className="text-gray-600 text-lg">
          Discover our latest articles and insights
        </p>
      </div>

      <ErrorBoundary>
        <Suspense fallback={<ArticlesLoading />}>
          <ArticlesList />
        </Suspense>
      </ErrorBoundary>
    </Container>
  );
}
