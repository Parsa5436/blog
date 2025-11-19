"use client";

import React from "react";

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ComponentType<{ error: Error; reset: () => void }>;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  reset = () => {
    this.setState({ hasError: false, error: undefined });
  };

  render() {
    if (this.state.hasError) {
      const FallbackComponent = this.props.fallback || DefaultErrorFallback;
      return <FallbackComponent error={this.state.error!} reset={this.reset} />;
    }

    return this.props.children;
  }
}

interface ErrorFallbackProps {
  error: Error;
  reset: () => void;
}

function DefaultErrorFallback({ error, reset }: ErrorFallbackProps) {
  return (
    <div className="min-h-64 flex flex-col items-center justify-center text-center p-6">
      <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md">
        <h2 className="text-lg font-semibold text-red-800 mb-2">
          Something went wrong
        </h2>
        <p className="text-red-600 mb-4 text-sm">
          {error.message || "An unexpected error occurred"}
        </p>
        <button
          onClick={reset}
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  );
}

// Simple error display component
interface ErrorDisplayProps {
  error: string;
  onRetry?: () => void;
  className?: string;
}

function ErrorDisplay({ error, onRetry, className }: ErrorDisplayProps) {
  return (
    <div className={`bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg ${className || ""}`}>
      <div className="flex items-center justify-between">
        <span>{error}</span>
        {onRetry && (
          <button
            onClick={onRetry}
            className="ml-4 text-sm underline hover:no-underline"
          >
            Retry
          </button>
        )}
      </div>
    </div>
  );
}

export { ErrorBoundary, ErrorDisplay, DefaultErrorFallback };
export type { ErrorFallbackProps };
