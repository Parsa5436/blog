import { Suspense } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { BlogPageProps } from "@/types";
import { articlesApi } from "@/services/api";
import { getValidImageSrc, formatDate } from "@/lib/utils";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import Container from "@/components/Container";

// Loading component for article page
function ArticleLoading() {
  return (
    <Container>
      <div className="animate-pulse">
        <div className="h-8 bg-gray-200 rounded mb-6 max-w-2xl" />
        <div className="grid md:grid-cols-2 gap-8">
          <div className="h-64 bg-gray-200 rounded" />
          <div className="space-y-4">
            <div className="h-4 bg-gray-200 rounded" />
            <div className="h-4 bg-gray-200 rounded" />
            <div className="h-4 bg-gray-200 rounded w-3/4" />
          </div>
        </div>
      </div>
    </Container>
  );
}

// Article content component
async function ArticleContent({ id }: { id: string }) {
  try {
    const article = await articlesApi.getById(id);

    return (
      <Container>
        {/* Breadcrumb */}
        <nav className="mb-6">
          <ol className="flex items-center space-x-2 text-sm text-gray-500">
            <li>
              <Link href="/" className="hover:text-blue-600">Home</Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/blogs" className="hover:text-blue-600">Blogs</Link>
            </li>
            <li>/</li>
            <li className="text-gray-900 truncate">{article.title}</li>
          </ol>
        </nav>

        {/* Article Header */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            {article.title}
          </h1>
          <div className="flex items-center space-x-4 text-gray-600">
            <span className="font-medium">By {article.author}</span>
            <span>•</span>
            <time dateTime={article.date}>
              {formatDate(article.date)}
            </time>
          </div>
        </header>

        {/* Article Content */}
        <article className="grid md:grid-cols-3 gap-8">
          {/* Article Image */}
          <div className="md:col-span-1">
            <div className="sticky top-24">
              <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={getValidImageSrc(article.thumbnail)}
                  alt={article.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Article Text */}
          <div className="md:col-span-2">
            <div className="prose prose-lg max-w-none">
              <div className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                {article.content}
              </div>
            </div>

            {/* Article Footer */}
            <footer className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex justify-between items-center">
                <Link
                  href="/blogs"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors"
                >
                  ← Back to all articles
                </Link>
                <div className="text-sm text-gray-500">
                  Article ID: {article.id}
                </div>
              </div>
            </footer>
          </div>
        </article>
      </Container>
    );
  } catch (error) {
    if (error instanceof Error && error.message.includes('404')) {
      notFound();
    }
    throw error;
  }
}

// Main article page component
export default function ArticlePage(props: BlogPageProps) {
  return (
    <ErrorBoundary>
      <Suspense fallback={<ArticleLoading />}>
        <ArticlePageContent {...props} />
      </Suspense>
    </ErrorBoundary>
  );
}

// Wrapper to handle async params
async function ArticlePageContent(props: BlogPageProps) {
  const { id } = await props.params;
  return <ArticleContent id={id} />;
}
