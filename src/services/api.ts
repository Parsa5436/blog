import { Article, CreateArticleData } from '@/types';
import { API_BASE_URL, generateId } from '@/lib/utils';

class ApiError extends Error {
  constructor(public status: number, message: string) {
    super(message);
    this.name = 'ApiError';
  }
}

const handleResponse = async <T>(response: Response): Promise<T> => {
  if (!response.ok) {
    throw new ApiError(
      response.status,
      `API Error: ${response.status} ${response.statusText}`
    );
  }
  return response.json();
};

export const articlesApi = {
  // Get all articles
  getAll: async (): Promise<Article[]> => {
    try {
      const response = await fetch(`${API_BASE_URL}/articles`, {
        cache: 'no-store', // Ensure fresh data
      });
      return handleResponse<Article[]>(response);
    } catch (error) {
      console.error('Failed to fetch articles:', error);
      throw error;
    }
  },

  // Get article by ID
  getById: async (id: string): Promise<Article> => {
    try {
      const response = await fetch(`${API_BASE_URL}/articles/${id}`, {
        cache: 'no-store',
      });
      return handleResponse<Article>(response);
    } catch (error) {
      console.error(`Failed to fetch article ${id}:`, error);
      throw error;
    }
  },

  // Create new article
  create: async (articleData: CreateArticleData): Promise<Article> => {
    try {
      const newArticle: Article = {
        ...articleData,
        id: generateId(),
        date: new Date().toISOString().split('T')[0],
      };

      const response = await fetch(`${API_BASE_URL}/articles`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newArticle),
      });

      return handleResponse<Article>(response);
    } catch (error) {
      console.error('Failed to create article:', error);
      throw error;
    }
  },

  // Update article
  update: async (id: string, articleData: Partial<Article>): Promise<Article> => {
    try {
      const response = await fetch(`${API_BASE_URL}/articles/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(articleData),
      });

      return handleResponse<Article>(response);
    } catch (error) {
      console.error(`Failed to update article ${id}:`, error);
      throw error;
    }
  },

  // Delete article
  delete: async (id: string): Promise<void> => {
    try {
      const response = await fetch(`${API_BASE_URL}/articles/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new ApiError(
          response.status,
          `Failed to delete article: ${response.status} ${response.statusText}`
        );
      }
    } catch (error) {
      console.error(`Failed to delete article ${id}:`, error);
      throw error;
    }
  },
};
