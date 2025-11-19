import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Article - Modern Blog",
  description: "Write and publish your own article on our blogging platform",
};

interface CreateBlogLayoutProps {
  children: React.ReactNode;
}

export default function CreateBlogLayout({ children }: CreateBlogLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {children}
    </div>
  );
}
