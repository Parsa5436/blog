"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CreateArticleData, FormState } from "@/types";
import { validateArticle, cn } from "@/lib/utils";
import { articlesApi } from "@/services/api";
import { LoadingSpinner } from "./Loading";
import { ErrorDisplay } from "./ErrorBoundary";
import Container from "./Container";

function CreateArticle() {
  const router = useRouter();
  const [formState, setFormState] = useState<FormState>({
    isLoading: false,
    error: null,
    success: false
  });
  const [validationErrors, setValidationErrors] = useState<string[]>([]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Reset state
    setFormState({ isLoading: true, error: null, success: false });
    setValidationErrors([]);

    try {
      const form = e.currentTarget;
      const formData = new FormData(form);

      const articleData: CreateArticleData = {
        title: formData.get("title") as string,
        content: formData.get("content") as string,
        author: formData.get("author") as string,
      };

      // Validate article data
      const errors = validateArticle(articleData);
      if (errors.length > 0) {
        setValidationErrors(errors);
        setFormState({ isLoading: false, error: null, success: false });
        return;
      }

      // Create article
      await articlesApi.create(articleData);
      
      setFormState({ isLoading: false, error: null, success: true });
      
      // Redirect after success
      setTimeout(() => {
        router.push("/blogs");
      }, 1000);

    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Failed to create article";
      setFormState({ 
        isLoading: false, 
        error: errorMessage, 
        success: false 
      });
    }
  };

  const handleRetry = () => {
    setFormState({ isLoading: false, error: null, success: false });
    setValidationErrors([]);
  };

  return (
    <Container className="max-w-2xl">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Create New Article
        </h1>

        {/* Error Display */}
        {formState.error && (
          <ErrorDisplay 
            error={formState.error} 
            onRetry={handleRetry}
            className="mb-6"
          />
        )}

        {/* Validation Errors */}
        {validationErrors.length > 0 && (
          <div className="bg-yellow-50 border border-yellow-200 text-yellow-700 px-4 py-3 rounded-lg mb-6">
            <h3 className="font-medium mb-2">Please fix the following errors:</h3>
            <ul className="list-disc list-inside space-y-1">
              {validationErrors.map((error, index) => (
                <li key={index} className="text-sm">{error}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Success Message */}
        {formState.success && (
          <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg mb-6">
            <div className="flex items-center">
              <span>✓ Article created successfully! Redirecting...</span>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
              Title *
            </label>
            <input
              type="text"
              id="title"
              name="title"
              required
              disabled={formState.isLoading}
              className={cn(
                "w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors",
                "disabled:bg-gray-100 disabled:cursor-not-allowed",
                "border-gray-300"
              )}
              placeholder="Enter article title..."
            />
          </div>

          <div>
            <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
              Content *
            </label>
            <textarea
              id="content"
              name="content"
              required
              disabled={formState.isLoading}
              rows={10}
              className={cn(
                "w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-vertical",
                "disabled:bg-gray-100 disabled:cursor-not-allowed",
                "border-gray-300"
              )}
              placeholder="Write your article content here..."
            />
          </div>

          <div>
            <label htmlFor="author" className="block text-sm font-medium text-gray-700 mb-2">
              Author *
            </label>
            <input
              type="text"
              id="author"
              name="author"
              required
              disabled={formState.isLoading}
              className={cn(
                "w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors",
                "disabled:bg-gray-100 disabled:cursor-not-allowed",
                "border-gray-300"
              )}
              placeholder="Enter author name..."
            />
          </div>

          <button
            type="submit"
            disabled={formState.isLoading || formState.success}
            className={cn(
              "w-full py-3 px-6 rounded-lg font-medium transition-all duration-200",
              "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
              formState.isLoading || formState.success
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 text-white"
            )}
          >
            <div className="flex items-center justify-center space-x-2">
              {formState.isLoading && <LoadingSpinner size="sm" />}
              <span>
                {formState.isLoading ? "Creating..." : 
                 formState.success ? "Created!" : "Create Article"}
              </span>
            </div>
          </button>
        </form>
      </div>
    </Container>
  );
}

export default CreateArticle;
