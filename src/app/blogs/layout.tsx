import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Articles - Modern Blog",
  description: "Discover our latest articles and insights from our community of writers",
};

interface BlogsLayoutProps {
  children: React.ReactNode;
}

export default function BlogsLayout({ children }: BlogsLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {children}
    </div>
  );
}
