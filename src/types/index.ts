// Article Types
export interface Article {
  id: string;
  title: string;
  content: string;
  author: string;
  date: string;
  thumbnail?: string;
}

export interface CreateArticleData {
  title: string;
  content: string;
  author: string;
}

// Navigation Types
export interface NavbarItem {
  label: string;
  href: string;
}

// Component Props
export type ArticleCardProps = Article;

export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

// API Response Types
export interface ApiResponse<T> {
  data?: T;
  error?: string;
  success: boolean;
}

// Form State Types
export interface FormState {
  isLoading: boolean;
  error: string | null;
  success: boolean;
}

// Page Props Types
export interface BlogPageProps {
  params: Promise<{ id: string }>;
}
