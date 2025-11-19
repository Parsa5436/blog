import { cn } from "@/lib/utils";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

function LoadingSpinner({ size = "md", className }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8"
  };

  return (
    <div
      className={cn(
        "animate-spin rounded-full border-2 border-gray-300 border-t-blue-600",
        sizeClasses[size],
        className
      )}
      role="status"
      aria-label="Loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
}

interface LoadingCardProps {
  className?: string;
}

function LoadingCard({ className }: LoadingCardProps) {
  return (
    <div className={cn("bg-white rounded-lg shadow-md overflow-hidden", className)}>
      <div className="h-48 bg-gray-200 animate-pulse" />
      <div className="p-6 space-y-3">
        <div className="h-6 bg-gray-200 rounded animate-pulse" />
        <div className="space-y-2">
          <div className="h-4 bg-gray-200 rounded animate-pulse" />
          <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4" />
        </div>
        <div className="flex justify-between items-center">
          <div className="h-4 bg-gray-200 rounded animate-pulse w-20" />
          <div className="h-4 bg-gray-200 rounded animate-pulse w-16" />
        </div>
      </div>
    </div>
  );
}

interface LoadingPageProps {
  message?: string;
  className?: string;
}

function LoadingPage({ message = "Loading...", className }: LoadingPageProps) {
  return (
    <div className={cn("flex flex-col items-center justify-center min-h-64 space-y-4", className)}>
      <LoadingSpinner size="lg" />
      <p className="text-gray-600 text-lg">{message}</p>
    </div>
  );
}

export { LoadingSpinner, LoadingCard, LoadingPage };
