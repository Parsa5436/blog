import { Article } from '@/types';

// API Configuration
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

// Date formatting utilities
export const formatDate = (dateString: string): string => {
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  } catch {
    return dateString;
  }
};

// Generate unique ID for new articles
export const generateId = (): string => {
  return Math.random().toString(36).substr(2, 4);
};

// Image validation
export const getValidImageSrc = (src?: string): string => {
  return src || '/images/default_image.png';
};

// Article validation
export const validateArticle = (article: Partial<Article>): string[] => {
  const errors: string[] = [];
  
  if (!article.title || article.title.trim().length === 0) {
    errors.push('Title is required');
  }
  
  if (!article.content || article.content.trim().length === 0) {
    errors.push('Content is required');
  }
  
  if (!article.author || article.author.trim().length === 0) {
    errors.push('Author is required');
  }
  
  if (article.title && article.title.length > 100) {
    errors.push('Title must be less than 100 characters');
  }
  
  if (article.content && article.content.length > 5000) {
    errors.push('Content must be less than 5000 characters');
  }
  
  return errors;
};

// CSS class utilities
export const cn = (...classes: (string | undefined | null | false)[]): string => {
  return classes.filter(Boolean).join(' ');
};

// Truncate text utility
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + '...';
};
